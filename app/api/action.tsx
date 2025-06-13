"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";
import cloudinary from "../lib/cloudinary";

interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  language: string;
}

export async function handleSubmission(formData: FormData) {
  const file = formData.get("image") as File;
  const url = formData.get("url") as string;
  const language = formData.get("language") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!file || !url || !language || !title || !description) {
    throw new Error("Missing fields");
  }

  // Convert File to buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Cloudinary upload via stream
  const imageUpload = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      (error, result) => {
        if (error || !result) {
          return reject(error);
        }
        resolve(result);
      }
    );

    stream.end(buffer);
  });

  const image = (imageUpload as { secure_url: string }).secure_url;

  // Save to DB
  await prisma.post.create({
    data: {
      title,
      description,
      language,
      image,
      url,
    },
  });

  revalidatePath("/");
  return { success: true, message: "Post created successfully" };
}

export async function handleSubmission2(formData: FormData) {
  const file = formData.get("image") as string;
  const url = formData.get("url") as string;
  const language = formData.get("language") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!url || !language || !title || !description || !file) {
    throw new Error("Missing fields");
  }

  await prisma.post.create({
    data: {
      image: file, // Assuming file is a URL or base64 string
      url,
      language,
      title,
      description,
    },
  });
  revalidatePath("/");

  return redirect("/");
}

export async function getPosts() {
  // Kunin lahat ng posts mula sa database
  const posts = await prisma.post.findMany();
  // Ensure posts is an array, fallback to empty array if null/undefined
  const postsArray = posts || [];
  // Pwede mo rin i-map dito kung gusto mo i-transform yung data
  return postsArray.map((post: Post) => ({
    id: post.id,
    title: post.title,
    description: post.description,
    image: post.image,
    url: post.url,
    language: post.language,
  }));
}

export async function deletePost(id: string) {
  // I-delete ang post mula sa database
  await prisma.post.delete({
    where: { id },
  });

  // Revalidate the path to refresh the data
  revalidatePath("/");

  return { success: true, message: "Post deleted successfully" };
}

export async function updatePost(formData: FormData) {
  const id = formData.get("id") as string;
  const imageFile = formData.get("imageFile") as File;
  const currentImage = formData.get("image") as string;
  const url = formData.get("url") as string;
  const language = formData.get("language") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!url || !language || !title || !description || !id) {
    throw new Error("Incomplete data submitted.");
  }

  let image = currentImage;

  // If a new image file is provided, upload it to Cloudinary
  if (imageFile && imageFile.size > 0) {
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const imageUpload = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error || !result) {
            return reject(error);
          }
          resolve(result);
        }
      );

      stream.end(buffer);
    });

    image = (imageUpload as { secure_url: string }).secure_url;
  }

  await prisma.post.update({
    where: { id },
    data: {
      title,
      description,
      language,
      image,
      url,
    },
  });

  revalidatePath("/");
  return redirect("/");
}

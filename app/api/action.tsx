"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "../lib/prisma";
import cloudinary from "../lib/cloudinary";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return redirect("/api/auth/register");

  const file = formData.get("image") as File;
  const url = formData.get("url") as string;
  const language = formData.get("language") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!file || !url || !language || !title || !description) {
    throw new Error("Incomplete data submitted.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const imageUpload = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      (error, result) => {
        if (error || !result) return reject(error);
        resolve(result);
      }
    );
    stream.end(buffer);
  });

  const image = (imageUpload as { secure_url: string }).secure_url;

  await prisma.post.create({
    data: {
      title,
      description,
      language,
      image,
      url,
      authorId: user.id,
      authorName: user.given_name || "Anonymous",
      authorImage: user.picture || "",
    },
  });

  revalidatePath("/");
  return redirect("/");
}

export async function deletePost(formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) throw new Error("Missing post ID");

  await prisma.post.delete({ where: { id } });
  revalidatePath("/");
  return redirect("/");
}

export async function updatePost(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return redirect("/api/auth/register");

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

  if (imageFile && imageFile.size > 0) {
    const buffer = Buffer.from(await imageFile.arrayBuffer());

    const imageUpload = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error || !result) return reject(error);
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
  return redirect("/Projects");
}

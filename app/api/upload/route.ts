import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import cloudinary from "@/app/lib/cloudinary";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;
    const url = formData.get("url") as string;
    const language = formData.get("language") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    if (!file || !url || !language || !title || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert File to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
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

    // Save to database
    const post = await prisma.post.create({
      data: {
        title,
        description,
        language,
        image,
        url,
      },
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 500 }
    );
  }
}

import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, description, language, image, url } = await request.json();

    // Validate required fields
    if (!title || !description || !language || !image || !url) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title,
        description,
        language,
        image,
        url,
        // TODO: Replace these with actual values from your auth system
        authorId: "default-author-id",
        authorName: "Default Author",
        authorImage: "/default-avatar.png",
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

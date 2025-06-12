// app/api/posts/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma"; // siguraduhing tama ang path

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

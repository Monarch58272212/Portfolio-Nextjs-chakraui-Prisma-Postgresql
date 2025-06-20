// app/api/posts/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma"; // siguraduhing tama ang path

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    // Always return an array, even if empty
    return NextResponse.json({ posts: posts || [] });
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Return empty array in case of error
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}

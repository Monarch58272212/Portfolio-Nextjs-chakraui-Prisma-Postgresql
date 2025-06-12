// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { handleSubmission } from "@/app/api/action";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Validate required fields
    const file = formData.get("image");
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Validate file type
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    // Validate file size (e.g., 5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size too large. Maximum size is 5MB" },
        { status: 400 }
      );
    }

    const result = await handleSubmission(formData);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      {
        error: (error as Error).message || "Something went wrong",
        details:
          process.env.NODE_ENV === "development"
            ? (error as Error).stack
            : undefined,
      },
      { status: 500 }
    );
  }
}

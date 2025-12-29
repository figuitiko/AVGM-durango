import prisma from "@/lib/prisma";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");
  const year = searchParams.get("year");
  const category = searchParams.get("category");
  const description = searchParams.get("description");

  if (!filename || !year || !category) {
    return NextResponse.json(
      { error: "Missing required query params" },
      { status: 400 }
    );
  }

  if (!request.body) {
    return NextResponse.json(
      { error: "Missing request body" },
      { status: 400 }
    );
  }

  const blob = await put(filename, request.body, {
    access: "public",
    allowOverwrite: true,
  });
  // save the document URL to your database here

  await prisma.document.create({
    data: {
      title: filename,
      url: blob.url,
      year,
      category,
      description: description || "",
    },
  });
  revalidatePath("/dashboard");

  return NextResponse.json(blob);
}

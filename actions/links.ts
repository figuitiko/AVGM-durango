"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const addLink = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const url = formData.get("url") as string;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    throw new Error("URL must start with http:// or https://");
  }
  const description = formData.get("description") as string;
  const data = await prisma.link.create({
    data: {
      title,
      url,
      description: description || "",
    },
  });
  revalidatePath("/dashboard/links");
  return data;
};

export const getLinks = async () => {
  return await prisma.link.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getLinksOffsetPagination = async (
  offset: number,
  limit: number = 10
) => {
  const links = await prisma.link.findMany({
    skip: offset,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });

  const total = await prisma.link.count();

  return { links, total };
};
export const removeLinkById = async (id: number) => {
  const data = await prisma.link.delete({
    where: { id },
  });

  revalidatePath("/dashboard/links");
  return data;
};

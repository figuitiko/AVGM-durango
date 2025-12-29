"use server";

import prisma from "@/lib/prisma";
import { ITEMS_PER_PAGE } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export const getDocuments = async () => {
  return await prisma.document.findMany();
};

export const getDocumentsOffsetPagination = async (
  offset: number,
  limit: number = ITEMS_PER_PAGE
) => {
  const documents = await prisma.document.findMany({
    skip: offset,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });

  const total = await prisma.document.count();

  return { documents, total };
};

export const removeDocumentById = async (id: number) => {
  const data = await prisma.document.delete({
    where: { id },
  });

  revalidatePath("/dashboard");
  return data;
};

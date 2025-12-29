"use server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import z from "zod";

import { treeifyError } from "zod";
import { verifySession } from "@/auth/stateless-session";
import { logout } from "@/auth/auth";

const ChangePassSchema = z.object({
  oldPassword: z
    .string()
    .min(1, { message: "La contraseña anterior no puede etar vacia" }),
  newPassword: z
    .string()
    .min(1, { message: "La contraseña nueva no puede estar vacia" }),
});

export const changePassword = async (formData: FormData) => {
  const validatedFields = ChangePassSchema.safeParse({
    oldPassword: formData.get("oldPassword"),
    newPassword: formData.get("newPassword"),
  });

  const errorMessage = { message: "No son validas las credenciales" };

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    const tree = treeifyError(validatedFields.error);
    return {
      errors: {
        oldPassword: tree.properties?.oldPassword?.errors,
        newPassword: tree.properties?.newPassword?.errors,
      },
    };
  }
  const { userId } = await verifySession();
  const existingUser = await prisma.user.findUnique({
    where: { id: Number(userId) },
  });
  if (!existingUser) {
    return errorMessage;
  }
  const passwordMatch = await bcrypt.compare(
    validatedFields.data.oldPassword,
    existingUser.password
  );
  if (!passwordMatch) {
    return errorMessage;
  }
  const hashedPassword = await bcrypt.hash(
    validatedFields.data.newPassword,
    10
  );
  await prisma.user.update({
    where: { id: Number(userId) },
    data: { password: hashedPassword },
  });
  logout();
};

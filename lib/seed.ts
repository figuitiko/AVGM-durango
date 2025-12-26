import { User } from "./generated/prisma/client";
import "dotenv/config";
import bcrypt from "bcrypt";
import prisma from "./prisma";

const main = async () => {
  const seedPassword = process.env.SEED_PASSWORD;
  if (!seedPassword) {
    throw new Error(
      "SEED_PASSWORD is required. Set it in .env (or export it) before running the seed script."
    );
  }

  const hashedPassword = await bcrypt.hash(seedPassword, 10);
  const newUser: User = {
    id: 1,
    email: "admin@example.com",
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "admin",
  };

  await prisma.user.create({ data: newUser });
  await prisma.$disconnect();
  process.exit(0);
};

main();

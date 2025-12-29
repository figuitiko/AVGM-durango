/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_categoryId_fkey";

-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "category" TEXT NOT NULL;

-- DropTable
DROP TABLE "Category";

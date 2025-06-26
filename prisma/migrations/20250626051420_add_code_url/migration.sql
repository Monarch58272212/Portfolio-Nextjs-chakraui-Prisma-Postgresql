/*
  Warnings:

  - Made the column `authorId` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "post" ADD COLUMN     "codeUrl" TEXT,
ALTER COLUMN "authorId" SET NOT NULL;

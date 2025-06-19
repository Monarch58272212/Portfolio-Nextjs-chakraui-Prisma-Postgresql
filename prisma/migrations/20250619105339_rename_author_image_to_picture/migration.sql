/*
  Warnings:

  - You are about to drop the column `authorImage` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "post" DROP COLUMN "authorImage",
ADD COLUMN     "authorPicture" TEXT;

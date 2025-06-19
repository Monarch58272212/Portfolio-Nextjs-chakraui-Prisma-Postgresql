/*
  Warnings:

  - You are about to drop the column `authorPicture` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "post" DROP COLUMN "authorPicture",
ADD COLUMN     "authorImage" TEXT;

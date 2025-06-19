/*
  Warnings:

  - You are about to drop the column `authorPicture` on the `post` table. All the data in the column will be lost.
  - Made the column `authorId` on table `post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `authorName` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "post" DROP COLUMN "authorPicture",
ALTER COLUMN "authorId" SET NOT NULL,
ALTER COLUMN "authorName" SET NOT NULL;

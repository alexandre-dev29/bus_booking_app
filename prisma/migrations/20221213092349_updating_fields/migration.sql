/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `full_name` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `Users` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `Users` table without a default value. This is not possible if the table is not empty.
  - The required column `userId` was added to the `Users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "full_name",
DROP COLUMN "id_user",
ADD COLUMN     "fullName" VARCHAR(60) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("userId");

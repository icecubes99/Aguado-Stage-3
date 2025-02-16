/*
  Warnings:

  - You are about to drop the column `assigned_at` on the `Members` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Members" DROP COLUMN "assigned_at",
ADD COLUMN     "assignedAt" TIMESTAMP(3);

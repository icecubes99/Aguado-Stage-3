-- CreateEnum
CREATE TYPE "MemberRole" AS ENUM ('BACKEND', 'FRONTEND', 'UI_UX');

-- AlterTable
ALTER TABLE "Members" ADD COLUMN     "assigned_at" TIMESTAMP(3);

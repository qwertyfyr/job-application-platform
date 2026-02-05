/*
  Warnings:

  - You are about to drop the column `jobOffer` on the `Interview` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Interview" DROP COLUMN "jobOffer";

-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "jobOffer" BOOLEAN;

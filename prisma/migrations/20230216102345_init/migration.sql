/*
  Warnings:

  - You are about to drop the column `descriotion` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.
  - Added the required column `description` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "descriotion",
DROP COLUMN "price",
ADD COLUMN     "description" TEXT NOT NULL;

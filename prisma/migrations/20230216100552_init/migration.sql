/*
  Warnings:

  - You are about to drop the column `descriotion` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Item` table. All the data in the column will be lost.
  - Added the required column `description` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriotion` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "descriotion",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "description",
ADD COLUMN     "descriotion" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descriotion" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

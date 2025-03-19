/*
  Warnings:

  - You are about to drop the column `nível` on the `projetos` table. All the data in the column will be lost.
  - Added the required column `nivel` to the `projetos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projetos" DROP COLUMN "nível",
ADD COLUMN     "nivel" INTEGER NOT NULL;

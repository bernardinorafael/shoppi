/*
  Warnings:

  - You are about to drop the column `client_name` on the `adresses` table. All the data in the column will be lost.
  - Added the required column `client` to the `adresses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_adresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "complement" TEXT,
    "district" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "adresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_adresses" ("city", "complement", "district", "fone", "id", "number", "state", "street", "type", "userId", "zip") SELECT "city", "complement", "district", "fone", "id", "number", "state", "street", "type", "userId", "zip" FROM "adresses";
DROP TABLE "adresses";
ALTER TABLE "new_adresses" RENAME TO "adresses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

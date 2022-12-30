/*
  Warnings:

  - Added the required column `number` to the `adresses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_adresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client_name" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "complement" TEXT,
    "district" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "adresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_adresses" ("address", "city", "client_name", "complement", "district", "fone", "id", "state", "type", "userId", "zip") SELECT "address", "city", "client_name", "complement", "district", "fone", "id", "state", "type", "userId", "zip" FROM "adresses";
DROP TABLE "adresses";
ALTER TABLE "new_adresses" RENAME TO "adresses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

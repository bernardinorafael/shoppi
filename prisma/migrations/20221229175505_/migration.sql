/*
  Warnings:

  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `providerAccountId` on the `acounts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `acounts` table. All the data in the column will be lost.
  - Added the required column `provider_acccount_id` to the `acounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `acounts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "avatar_url" TEXT
);
INSERT INTO "new_users" ("email", "id", "name") SELECT "email", "id", "name" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE TABLE "new_acounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_acccount_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "acounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_acounts" ("access_token", "expires_at", "id", "id_token", "provider", "refresh_token", "scope", "session_state", "token_type", "type") SELECT "access_token", "expires_at", "id", "id_token", "provider", "refresh_token", "scope", "session_state", "token_type", "type" FROM "acounts";
DROP TABLE "acounts";
ALTER TABLE "new_acounts" RENAME TO "acounts";
CREATE UNIQUE INDEX "acounts_provider_provider_acccount_id_key" ON "acounts"("provider", "provider_acccount_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
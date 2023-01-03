-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_userId_fkey`;

-- DropForeignKey
ALTER TABLE `addresses` DROP FOREIGN KEY `addresses_userId_fkey`;

-- DropForeignKey
ALTER TABLE `purchases` DROP FOREIGN KEY `purchases_userId_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_userId_fkey`;

-- RenameIndex
ALTER TABLE `accounts` RENAME INDEX `accounts_userId_fkey` TO `accounts_userId_idx`;

-- RenameIndex
ALTER TABLE `addresses` RENAME INDEX `addresses_userId_fkey` TO `addresses_userId_idx`;

-- RenameIndex
ALTER TABLE `purchases` RENAME INDEX `purchases_userId_fkey` TO `purchases_userId_idx`;

-- RenameIndex
ALTER TABLE `sessions` RENAME INDEX `sessions_userId_fkey` TO `sessions_userId_idx`;

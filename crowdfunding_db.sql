/*
 Navicat Premium Data Transfer

 Source Server         : mysql-local
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : crowdfunding_db

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 21/09/2024 16:21:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `CATEGORY_ID` int NOT NULL,
  `NAME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`CATEGORY_ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'medical');
INSERT INTO `category` VALUES (2, 'education');
INSERT INTO `category` VALUES (3, 'social impact');
INSERT INTO `category` VALUES (4, 'crisis relief');

-- ----------------------------
-- Table structure for fundraiser
-- ----------------------------
DROP TABLE IF EXISTS `fundraiser`;
CREATE TABLE `fundraiser`  (
  `FUNDRAISER_ID` int NOT NULL,
  `ORGANIZER` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `CAPTION` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `TARGET_FUNDING` decimal(10, 0) NULL DEFAULT NULL,
  `CURRENT_FUNDING` decimal(10, 0) NULL DEFAULT NULL,
  `CITY` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ACTIVE` tinyint NULL DEFAULT NULL,
  `CATEGORY_ID` int NULL DEFAULT NULL,
  PRIMARY KEY (`FUNDRAISER_ID`) USING BTREE,
  INDEX `fundraiser_category`(`CATEGORY_ID` ASC) USING BTREE,
  CONSTRAINT `fundraiser_category` FOREIGN KEY (`CATEGORY_ID`) REFERENCES `category` (`CATEGORY_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fundraiser
-- ----------------------------
INSERT INTO `fundraiser` VALUES (1, 'FundForge', 'Join us in making a difference—every dollar counts!', 5000, 300, 'London', 1, 1);
INSERT INTO `fundraiser` VALUES (2, 'Charity Chasers', 'Together, we can turn dreams into reality. Support our cause today!', 7400, 1200, 'Paris', 1, 2);
INSERT INTO `fundraiser` VALUES (3, 'Give & Gather', 'Be the change you want to see! Help us create a better future.', 2000, 30, 'China', 1, 3);
INSERT INTO `fundraiser` VALUES (4, 'Generosity Junction', 'Help us reach our goal and change lives—one donation at a time!', 60000, 9000, 'Sydney', 1, 4);
INSERT INTO `fundraiser` VALUES (5, 'Mission Makers', 'Help us turn our vision into action. Your support matters!', 20000, 5740, 'Melbourne', 0, 1);
INSERT INTO `fundraiser` VALUES (6, 'Hope Heroes', 'Together, we can bring hope to those in need. Donate now!', 15000, 4200, 'New York', 1, 2);
INSERT INTO `fundraiser` VALUES (7, 'Compassion Crew', 'Empowering communities one donation at a time!', 10000, 3500, 'Berlin', 1, 3);
INSERT INTO `fundraiser` VALUES (8, 'DreamBuilders', 'Your generosity can make dreams come true. Join us today!', 8500, 450, 'Tokyo', 1, 4);
INSERT INTO `fundraiser` VALUES (9, 'ChangeMakers', 'Help us make a lasting impact. Every bit counts!', 12000, 5500, 'Rome', 0, 2);
INSERT INTO `fundraiser` VALUES (10, 'Inspire Impact', 'Be a force for good. Together, we can achieve greatness!', 17000, 6200, 'Toronto', 1, 1);
INSERT INTO `fundraiser` VALUES (11, 'Action Alliance', 'Support our cause and help us create meaningful change.', 25000, 9400, 'Dubai', 1, 3);
INSERT INTO `fundraiser` VALUES (12, 'Unity Uplift', 'One community, one mission—making a difference!', 3000, 200, 'Los Angeles', 0, 4);
INSERT INTO `fundraiser` VALUES (13, 'Bright Future Fund', 'Your support helps build a brighter future for all.', 5400, 800, 'Mumbai', 1, 1);
INSERT INTO `fundraiser` VALUES (14, 'Kindness Collective', 'Join us in spreading kindness across the globe.', 9800, 7100, 'Singapore', 1, 2);
INSERT INTO `fundraiser` VALUES (15, 'Global Good', 'Together, we can make the world a better place for everyone.', 11000, 6900, 'Cape Town', 0, 3);
INSERT INTO `fundraiser` VALUES (16, 'Heart & Hand', 'Lend a hand, touch a heart—your generosity changes lives!', 2000, 150, 'San Francisco', 1, 4);
INSERT INTO `fundraiser` VALUES (17, 'Visionary Ventures', 'Invest in a brighter future. Help us reach new heights!', 35000, 15500, 'Mexico City', 1, 2);
INSERT INTO `fundraiser` VALUES (18, 'Together Tomorrow', 'Help us build a better tomorrow with your support.', 2500, 180, 'Madrid', 0, 1);
INSERT INTO `fundraiser` VALUES (19, 'Generous Hearts', 'Together, we can accomplish the extraordinary!', 6700, 900, 'Bangkok', 1, 3);
INSERT INTO `fundraiser` VALUES (20, 'Beacon of Hope', 'Shine a light on those in need. Every donation matters.', 14000, 4900, 'Rio de Janeiro', 1, 4);


-- ----------------------------
-- Table structure for donation
-- ----------------------------
DROP TABLE IF EXISTS `donation`;
CREATE TABLE `donation`  (
  `DONATION_ID` int NOT NULL,
  `DATE` DATE DEFAULT NULL,
  `AMOUNT` decimal(10, 0) NULL DEFAULT NULL,
  `GIVER` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `FUNDRAISER_ID` int NULL DEFAULT NULL,
  PRIMARY KEY (`DONATION_ID`) USING BTREE,
  INDEX `donation_fundraiser`(`FUNDRAISER_ID` ASC) USING BTREE,
  CONSTRAINT `donation_fundraiser` FOREIGN KEY (`FUNDRAISER_ID`) REFERENCES `fundraiser` (`FUNDRAISER_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of donation
-- ----------------------------
INSERT INTO `donation` VALUES (1, '2024-01-10', 500, 'Alice Johnson', 1);
INSERT INTO `donation` VALUES (2, '2024-02-14', 1000, 'Michael Smith', 2);
INSERT INTO `donation` VALUES (3, '2024-03-05', 150, 'Emily Davis', 3);
INSERT INTO `donation` VALUES (4, '2024-03-20', 750, 'John Doe', 4);
INSERT INTO `donation` VALUES (5, '2024-04-02', 2500, 'Sarah Brown', 5);
INSERT INTO `donation` VALUES (6, '2024-04-15', 300, 'Robert Wilson', 1);
INSERT INTO `donation` VALUES (7, '2024-04-25', 400, 'Jessica Martinez', 2);
INSERT INTO `donation` VALUES (8, '2024-05-01', 600, 'Christopher Lee', 3);
INSERT INTO `donation` VALUES (9, '2024-05-10', 2000, 'Daniel Walker', 4);
INSERT INTO `donation` VALUES (10, '2024-05-18', 350, 'Megan Young', 5);
INSERT INTO `donation` VALUES (11, '2024-05-25', 120, 'Laura Clark', 1);
INSERT INTO `donation` VALUES (12, '2024-06-01', 900, 'Kevin Robinson', 2);
INSERT INTO `donation` VALUES (13, '2024-06-10', 4500, 'Olivia Scott', 3);
INSERT INTO `donation` VALUES (14, '2024-06-18', 1100, 'Brian Lewis', 4);
INSERT INTO `donation` VALUES (15, '2024-06-25', 5000, 'Emma Hall', 5);

SET FOREIGN_KEY_CHECKS = 1;

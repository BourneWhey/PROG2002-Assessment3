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

SET FOREIGN_KEY_CHECKS = 1;

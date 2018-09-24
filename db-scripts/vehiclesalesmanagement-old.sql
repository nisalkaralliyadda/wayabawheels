/*
Navicat MySQL Data Transfer

Source Server         : VehicleSalesManagement
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : vehiclesalesmanagement

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-08-29 03:42:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `acccessries`
-- ----------------------------
DROP TABLE IF EXISTS `acccessries`;
CREATE TABLE `acccessries` (
  `ac_id` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) DEFAULT NULL,
  `discrip` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`ac_id`),
  KEY `fk_acccessries` (`bid`),
  CONSTRAINT `fk_acccessries` FOREIGN KEY (`bid`) REFERENCES `body_parts` (`bid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of acccessries
-- ----------------------------

-- ----------------------------
-- Table structure for `accessrices`
-- ----------------------------
DROP TABLE IF EXISTS `accessrices`;
CREATE TABLE `accessrices` (
  `ac_id` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) NOT NULL,
  `discript` varchar(200) NOT NULL,
  PRIMARY KEY (`ac_id`),
  KEY `fk_accessrices` (`bid`),
  CONSTRAINT `fk_accessrices` FOREIGN KEY (`bid`) REFERENCES `body_parts` (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of accessrices
-- ----------------------------
INSERT INTO `accessrices` VALUES ('1', '7', 'massa');
INSERT INTO `accessrices` VALUES ('2', '11', 'Blutooth');

-- ----------------------------
-- Table structure for `alloywheel`
-- ----------------------------
DROP TABLE IF EXISTS `alloywheel`;
CREATE TABLE `alloywheel` (
  `a_id` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) NOT NULL,
  `size` varchar(30) NOT NULL,
  `rimMaterial` varchar(40) NOT NULL,
  PRIMARY KEY (`a_id`),
  KEY `fk_alloyWheel` (`bid`),
  CONSTRAINT `fk_alloyWheel` FOREIGN KEY (`bid`) REFERENCES `body_parts` (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of alloywheel
-- ----------------------------
INSERT INTO `alloywheel` VALUES ('3', '5', '12X2', 'red');
INSERT INTO `alloywheel` VALUES ('4', '9', '12X12', 'silver');
INSERT INTO `alloywheel` VALUES ('5', '10', '', 'sds');
INSERT INTO `alloywheel` VALUES ('6', '12', '12x56', 'Rizsio');

-- ----------------------------
-- Table structure for `alloywhell`
-- ----------------------------
DROP TABLE IF EXISTS `alloywhell`;
CREATE TABLE `alloywhell` (
  `a_id` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) DEFAULT NULL,
  `size` char(15) NOT NULL,
  `rimMaterial` char(15) NOT NULL,
  PRIMARY KEY (`a_id`),
  KEY `fk_alloyWhell` (`bid`),
  CONSTRAINT `fk_alloyWhell` FOREIGN KEY (`bid`) REFERENCES `body_parts` (`bid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of alloywhell
-- ----------------------------

-- ----------------------------
-- Table structure for `bodymodel`
-- ----------------------------
DROP TABLE IF EXISTS `bodymodel`;
CREATE TABLE `bodymodel` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) NOT NULL,
  `mName` varchar(40) NOT NULL,
  PRIMARY KEY (`m_id`),
  KEY `fk_bodyModel` (`bid`),
  CONSTRAINT `fk_bodyModel` FOREIGN KEY (`bid`) REFERENCES `bodypartbrand` (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of bodymodel
-- ----------------------------
INSERT INTO `bodymodel` VALUES ('5', '4', 'Kenwood X2sx ');
INSERT INTO `bodymodel` VALUES ('6', '5', 'Commander Truck');
INSERT INTO `bodymodel` VALUES ('7', '6', '3SDM suh');
INSERT INTO `bodymodel` VALUES ('8', '8', 'Boss78');
INSERT INTO `bodymodel` VALUES ('9', '8', 'Boss897');
INSERT INTO `bodymodel` VALUES ('10', '4', 'Kenwood Pakaya');
INSERT INTO `bodymodel` VALUES ('11', '9', 'TRD-pro');

-- ----------------------------
-- Table structure for `bodypartbrand`
-- ----------------------------
DROP TABLE IF EXISTS `bodypartbrand`;
CREATE TABLE `bodypartbrand` (
  `bid` int(11) NOT NULL AUTO_INCREMENT,
  `brandName` varchar(40) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of bodypartbrand
-- ----------------------------
INSERT INTO `bodypartbrand` VALUES ('4', 'Kenwood', 'Multimedia');
INSERT INTO `bodypartbrand` VALUES ('5', 'ENKEI', 'AlloyWheel');
INSERT INTO `bodypartbrand` VALUES ('6', '3SDM', 'AlloyWheel');
INSERT INTO `bodypartbrand` VALUES ('7', 'bola', 'AlloyWheel');
INSERT INTO `bodypartbrand` VALUES ('8', 'Boss', 'AlloyWheel');
INSERT INTO `bodypartbrand` VALUES ('9', 'TRD', 'Accessories');

-- ----------------------------
-- Table structure for `body_parts`
-- ----------------------------
DROP TABLE IF EXISTS `body_parts`;
CREATE TABLE `body_parts` (
  `bid` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(40) NOT NULL,
  `modeNum` varchar(50) NOT NULL,
  `colour` char(20) NOT NULL,
  `model` varchar(40) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of body_parts
-- ----------------------------
INSERT INTO `body_parts` VALUES ('3', 'Kenwood', 'md123', 'Red', 'SoundBase Subwoofer', '12', null);
INSERT INTO `body_parts` VALUES ('4', 'Kenwood', 'Md234', 'Red', 'SoundBase Subwoofer', '12', null);
INSERT INTO `body_parts` VALUES ('5', '3SDM', 'Md129900', 'REd', '3SDM suh', '4', '60000');
INSERT INTO `body_parts` VALUES ('6', 'Kenwood', 'md333', 'Red', 'Kenwood X2sx ', '12', '5000');
INSERT INTO `body_parts` VALUES ('7', 'Kenwood', 'rt6543', 'green', 'Kenwood X2sx ', '76', '60000');
INSERT INTO `body_parts` VALUES ('8', 'Kenwood', 'rt6543', 'green', 'SoundBase Subwoofer', '76', null);
INSERT INTO `body_parts` VALUES ('9', 'Boss', 'Md1234', 'green', 'Boss78', '8', '500000');
INSERT INTO `body_parts` VALUES ('10', 'Sony', 'md4778', 'REd', 'Sony Viva X', '12', null);
INSERT INTO `body_parts` VALUES ('11', 'TRD', 'md4767', 'Red', 'TRD-pro', '2', '60000');
INSERT INTO `body_parts` VALUES ('12', '3SDM', 'Md2772', 'RED', '3SDM suh', '12', '45000');

-- ----------------------------
-- Table structure for `brand`
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `bid` int(100) NOT NULL AUTO_INCREMENT,
  `Brand_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('1', 'Toyota');
INSERT INTO `brand` VALUES ('2', 'Audi');
INSERT INTO `brand` VALUES ('3', 'Mazda');
INSERT INTO `brand` VALUES ('4', 'Nissan');
INSERT INTO `brand` VALUES ('6', 'Mithusbishi');

-- ----------------------------
-- Table structure for `customer`
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `NIC` char(20) NOT NULL,
  `phone` char(15) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('1', '963200790v', '0773875393', 'r', 'ruzaik', '123');
INSERT INTO `customer` VALUES ('2', '963654227v', '710459790', 'v@gmail.com', 'v', '1234567');
INSERT INTO `customer` VALUES ('3', '963654227v', '718897832', 'vvv@gmail.com', 'vvvv', '1234');
INSERT INTO `customer` VALUES ('4', '97567890v', '718143956', 'tb@gmail.com', 'tb', '123');
INSERT INTO `customer` VALUES ('5', '963654227v', '87345566456', 'vvv@gmail.com', 'vvvvvv', '123');

-- ----------------------------
-- Table structure for `exchangeveh`
-- ----------------------------
DROP TABLE IF EXISTS `exchangeveh`;
CREATE TABLE `exchangeveh` (
  `e_id` int(11) NOT NULL AUTO_INCREMENT,
  `eBrand` varchar(25) NOT NULL,
  `gBrand` varchar(25) NOT NULL,
  `eModel` varchar(25) NOT NULL,
  `gModel` varchar(25) NOT NULL,
  `exchangeDate` char(15) NOT NULL,
  `balance` double DEFAULT NULL,
  `ePrice` double DEFAULT NULL,
  `gPrice` double DEFAULT NULL,
  `eType` varchar(25) NOT NULL,
  `gType` varchar(25) NOT NULL,
  `book_Image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`e_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of exchangeveh
-- ----------------------------

-- ----------------------------
-- Table structure for `login`
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `l_id` int(11) NOT NULL AUTO_INCREMENT,
  `uName` varchar(50) NOT NULL,
  `password` varchar(10) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`l_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('1', 'v', '12345', 'v@gmail.com');

-- ----------------------------
-- Table structure for `model`
-- ----------------------------
DROP TABLE IF EXISTS `model`;
CREATE TABLE `model` (
  `mId` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) NOT NULL,
  `model` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`mId`),
  KEY `fk_Model` (`bid`),
  CONSTRAINT `fk_Model` FOREIGN KEY (`bid`) REFERENCES `brand` (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of model
-- ----------------------------
INSERT INTO `model` VALUES ('1', '1', 'Aqua');
INSERT INTO `model` VALUES ('2', '3', 'RX8');
INSERT INTO `model` VALUES ('3', '4', 'GTR');
INSERT INTO `model` VALUES ('4', '1', 'Prius');
INSERT INTO `model` VALUES ('5', '2', 'A8');
INSERT INTO `model` VALUES ('6', '2', 'A6');
INSERT INTO `model` VALUES ('7', '6', 'Intercooler');
INSERT INTO `model` VALUES ('8', '3', 'axela');
INSERT INTO `model` VALUES ('9', '3', 'axela');
INSERT INTO `model` VALUES ('10', '3', 'Axela');
INSERT INTO `model` VALUES ('11', '6', 'Lancer');
INSERT INTO `model` VALUES ('12', '1', 'Hiace');

-- ----------------------------
-- Table structure for `multimedea`
-- ----------------------------
DROP TABLE IF EXISTS `multimedea`;
CREATE TABLE `multimedea` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) DEFAULT NULL,
  `amphere` char(15) NOT NULL,
  PRIMARY KEY (`m_id`),
  KEY `fk_multimedea` (`bid`),
  CONSTRAINT `fk_multimedea` FOREIGN KEY (`bid`) REFERENCES `body_parts` (`bid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of multimedea
-- ----------------------------

-- ----------------------------
-- Table structure for `multimedia`
-- ----------------------------
DROP TABLE IF EXISTS `multimedia`;
CREATE TABLE `multimedia` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) NOT NULL,
  `amphere` varchar(40) NOT NULL,
  `hrtz` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`m_id`),
  KEY `fk_multimedia` (`bid`),
  CONSTRAINT `fk_multimedia` FOREIGN KEY (`bid`) REFERENCES `body_parts` (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of multimedia
-- ----------------------------
INSERT INTO `multimedia` VALUES ('1', '6', '29', '6785');
INSERT INTO `multimedia` VALUES ('2', '7', '500A', '5656');

-- ----------------------------
-- Table structure for `removevehi`
-- ----------------------------
DROP TABLE IF EXISTS `removevehi`;
CREATE TABLE `removevehi` (
  `r_id` int(11) NOT NULL AUTO_INCREMENT,
  `status` char(20) NOT NULL,
  `brand` varchar(40) NOT NULL,
  `modelYear` char(10) NOT NULL,
  `model` varchar(25) NOT NULL,
  `engNum` varchar(30) NOT NULL,
  `engCap` varchar(30) NOT NULL,
  `mileage` varchar(30) DEFAULT NULL,
  `chassisNum` varchar(30) NOT NULL,
  `sPrice` double NOT NULL,
  `vImage` varchar(300) NOT NULL,
  `discription` varchar(300) DEFAULT NULL,
  `type` char(30) NOT NULL,
  `regNum` char(15) DEFAULT NULL,
  `vBoolImg` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of removevehi
-- ----------------------------
INSERT INTO `removevehi` VALUES ('1', 'Delete', 'Audi', '2014', 'A6', 'EN321', '4000', '100', 'CH321', '9500000', 'G:/OneDrive/Pictures/Vehicle Photos/audi-a6_320x160.png', 'Ac/SRS Air Bag/DVD', 'Car', 'RN321', 'null');
INSERT INTO `removevehi` VALUES ('2', 'Delete', 'Select Brand', '2017', 'Select Model', 'EN123', '3000', '100', 'CH123', '6500000', '', 'Ac/SRS Air Bag/DVD', 'Select Type', 'RN123', 'null');
INSERT INTO `removevehi` VALUES ('3', 'Delete', 'Nissan', '2017', 'GTR', 'en76763', '1000', '1000', 'ch355563', '6500000', 'G:/OneDrive/Pictures/Vehicle Photos/2018-nissan-370z.jpg', 'ac/air bagb', 'Car', 'rn367673', 'null');
INSERT INTO `removevehi` VALUES ('4', 'Delete', 'Mazda', '2016', 'RX8', 'en356', '4000', '120', 'ch456', '5600000', 'G:/OneDrive/Pictures/Vehicle Photos/mitsubishi-shogun.jpg', 'ac/air bag/sports model', 'Car', 'null', 'null');
INSERT INTO `removevehi` VALUES ('5', 'Delete', 'Nissan', '2017', 'GTR', 'ebn566', '5000', '10', 'Ch786', '10000000', 'G:/OneDrive/Pictures/Vehicle Photos/15139736545a3d6796968627.37828943.jpg', 'AC/Sportsmodel/condunser/DVD/Fully loaded', 'Car', 'null', 'null');
INSERT INTO `removevehi` VALUES ('6', 'Delete', 'Audi', '', 'A6', '', '1000', '1344567', '', '123456789', 'E:/Photos/11(2).jpg', '', 'Car', '', 'null');

-- ----------------------------
-- Table structure for `remove_bodyparts`
-- ----------------------------
DROP TABLE IF EXISTS `remove_bodyparts`;
CREATE TABLE `remove_bodyparts` (
  `rbid` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(40) NOT NULL,
  `modeNum` varchar(40) NOT NULL,
  `model` varchar(40) NOT NULL,
  `status` varchar(40) NOT NULL,
  `price` varchar(40) NOT NULL,
  `size` varchar(40) DEFAULT NULL,
  `rimMaterial` varchar(40) DEFAULT NULL,
  `discript` varchar(300) DEFAULT NULL,
  `amphere` varchar(40) DEFAULT NULL,
  `hrtz` char(20) DEFAULT NULL,
  PRIMARY KEY (`rbid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of remove_bodyparts
-- ----------------------------
INSERT INTO `remove_bodyparts` VALUES ('1', 'rere', 'bgb', 'nbnb', 'bnbn', 'bnbn', 'gggg', 'ngg', 'hghh', 'hghg', 'ghg');
INSERT INTO `remove_bodyparts` VALUES ('2', 'ENKEI', 'mn78675', 'Commander Truck', 'AlloyWheel', '50000', '16x60', 'aluminium', 'null', 'null', 'null');
INSERT INTO `remove_bodyparts` VALUES ('3', 'ENKEI', 'mn78675', 'Commander Truck', 'AlloyWheel', '50000', '16x60', 'aluminium', 'null', 'null', 'null');
INSERT INTO `remove_bodyparts` VALUES ('4', 'ENKEI', 'mn78675', 'Commander Truck', 'AlloyWheel', '50000', '16x60', 'aluminium', 'null', 'null', 'null');
INSERT INTO `remove_bodyparts` VALUES ('5', 'Kenwood', 'ui87657', 'Kenwood X2sx ', 'Multimedia', '35000', 'null', 'null', 'null', '45000A', '400Hz');
INSERT INTO `remove_bodyparts` VALUES ('6', 'TRD', '56yhy76', 'TRD-pro', 'Accessories', '400', 'null', 'null', '56yhy76', 'null', 'null');

-- ----------------------------
-- Table structure for `sale`
-- ----------------------------
DROP TABLE IF EXISTS `sale`;
CREATE TABLE `sale` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(40) NOT NULL,
  `c_id` int(11) NOT NULL,
  `selling_price` double NOT NULL,
  `givenPrice` double NOT NULL,
  `amount` double NOT NULL,
  `profit` double NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sale
-- ----------------------------

-- ----------------------------
-- Table structure for `vehicle`
-- ----------------------------
DROP TABLE IF EXISTS `vehicle`;
CREATE TABLE `vehicle` (
  `v_id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(40) NOT NULL,
  `modelYear` char(10) NOT NULL,
  `model` varchar(25) NOT NULL,
  `engNum` varchar(30) NOT NULL,
  `engCap` varchar(30) NOT NULL,
  `mileage` varchar(30) NOT NULL,
  `chassisNum` varchar(30) NOT NULL,
  `sPrice` double(20,0) NOT NULL,
  `vImage` varchar(300) NOT NULL,
  `discription` varchar(150) NOT NULL,
  `type` char(15) NOT NULL,
  `regNum` char(15) NOT NULL,
  `vBoolImg` varchar(300) NOT NULL,
  `c_id` int(11) NOT NULL,
  `status` varchar(30) NOT NULL,
  PRIMARY KEY (`v_id`),
  KEY `fk_Vehicle` (`c_id`),
  KEY `engNum` (`engNum`) USING BTREE,
  KEY `chassisNum` (`chassisNum`) USING BTREE,
  KEY `regNum` (`regNum`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of vehicle
-- ----------------------------
INSERT INTO `vehicle` VALUES ('6', 'Audi', '2016', 'A6', '1234er', '1000', '1344567', 'ch12345', '123456789', 'E:/Photos/11(2).jpg', 'ac/dvd', 'Car', 'r12345', 'null', '0', 'Registerd');
INSERT INTO `vehicle` VALUES ('8', 'Toyota', '2017', 'Aqua', 'en12345', '1000', '1000', 'ch355563', '6500000', 'E:/Photos/12898262_1164447486901494_4400541667266026102_o-750x500.jpg', 'ac/air bagb', 'Car', 'rn367673', 'null', '0', 'Registerd');
INSERT INTO `vehicle` VALUES ('12', 'bmw', '2016', 'i8', 'engnum', 'cap22', '1200', 'ch123', '160000', 'null', 'sssss', 'sport', 'reg123', 'null', '0', 'gcggc');
INSERT INTO `vehicle` VALUES ('13', 'bmw', '2016', 'm5', 'engnum', 'cap22', '2345678', 'ch13456b', '160000', 'null', 'sssss', 'sport', 'reg134677', 'null', '0', 'zdfg');

-- ----------------------------
-- Table structure for `veh_sale`
-- ----------------------------
DROP TABLE IF EXISTS `veh_sale`;
CREATE TABLE `veh_sale` (
  `vsId` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) DEFAULT NULL,
  `modelYear` varchar(25) NOT NULL,
  `chassisNum` varchar(25) NOT NULL,
  `regNum` char(15) DEFAULT NULL,
  `status` char(15) NOT NULL,
  PRIMARY KEY (`vsId`),
  KEY `fk_veh_sale` (`sid`),
  CONSTRAINT `fk_veh_sale` FOREIGN KEY (`sid`) REFERENCES `sale` (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of veh_sale
-- ----------------------------
INSERT INTO `veh_sale` VALUES ('1', null, '2016', 'ch123', 'reg123', 'registered');
INSERT INTO `veh_sale` VALUES ('2', null, '2016', 'ch123', 'reg123', 'registered');
INSERT INTO `veh_sale` VALUES ('3', null, '2016', 'chassisekai', 'reg134677', 'dangerous');

/*
Navicat MySQL Data Transfer

Source Server         : Database
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : vehiclesalesmanagement

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-09-13 12:37:01
*/

SET FOREIGN_KEY_CHECKS=0;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of accessrices
-- ----------------------------
INSERT INTO `accessrices` VALUES ('3', '17', 'Carava Rooyal hood racks ,Stanless steel,l');
INSERT INTO `accessrices` VALUES ('4', '18', 'Hilux engine pum');
INSERT INTO `accessrices` VALUES ('5', '22', 'ngnb');

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of alloywheel
-- ----------------------------
INSERT INTO `alloywheel` VALUES ('7', '13', '12x6', 'Aluminium');
INSERT INTO `alloywheel` VALUES ('8', '14', '16 x 7', 'Brass');

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
  `cost_price` varchar(40) NOT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of body_parts
-- ----------------------------
INSERT INTO `body_parts` VALUES ('13', 'Mak', 'MH7366', 'Silver Red', 'MAK ICONA AUDI', '5', '25000', '888888');
INSERT INTO `body_parts` VALUES ('14', 'OZ Racing', 'MH467', 'Black', 'OZ Racing LEGGERA HLT', '6', '900000', '900000');
INSERT INTO `body_parts` VALUES ('15', 'JVC', 'MH9867', 'silver', 'RCUKHD706', '2', '15000', '66666');
INSERT INTO `body_parts` VALUES ('16', 'Kenwood', 'MH4365', 'black', 'RoadEntertainmentBundle', '8', '17560', '55555');
INSERT INTO `body_parts` VALUES ('17', 'OZ Racing', 'MH7389', 'Silver', 'OZ Racing LEGGERA HLT', '3', '12000', '4444');
INSERT INTO `body_parts` VALUES ('18', 'Toyota1', 'MH4564', 'Silver', 'Hilux 2KD KUN 15', '1', '45000', '33333');
INSERT INTO `body_parts` VALUES ('19', 'OZ Racing', '567hghghg', 'Lemon', 'OZ Racing LEGGERA HLT', '5', '30000', '30000');
INSERT INTO `body_parts` VALUES ('21', 'Advent', '56hhhjhjh', 'Cherry Red', 'Advent OE-Styled', '67', '5000000', '5000000');
INSERT INTO `body_parts` VALUES ('22', 'Caravan', '56b ghjn', 'Beige', 'Caravan Royal Hood', '66', '500000', '500000');

-- ----------------------------
-- Table structure for `body_parts_order`
-- ----------------------------
DROP TABLE IF EXISTS `body_parts_order`;
CREATE TABLE `body_parts_order` (
  `o_id` int(11) NOT NULL AUTO_INCREMENT,
  `body_parts_bid` int(11) NOT NULL,
  `o_brand` varchar(40) NOT NULL,
  `o_model` varchar(40) NOT NULL,
  `o_qnt` int(11) NOT NULL,
  `home_status` int(11) NOT NULL,
  `o_customer_id` int(11) NOT NULL,
  PRIMARY KEY (`o_id`),
  KEY `fk_order` (`body_parts_bid`),
  CONSTRAINT `fk_order` FOREIGN KEY (`body_parts_bid`) REFERENCES `body_parts` (`bid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of body_parts_order
-- ----------------------------

-- ----------------------------
-- Table structure for `bodymodel`
-- ----------------------------
DROP TABLE IF EXISTS `bodymodel`;
CREATE TABLE `bodymodel` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) NOT NULL,
  `mName` varchar(40) NOT NULL,
  `barcode` varchar(100) NOT NULL,
  PRIMARY KEY (`m_id`),
  KEY `fk_bodyModel` (`bid`),
  CONSTRAINT `fk_bodyModel` FOREIGN KEY (`bid`) REFERENCES `bodypartbrand` (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of bodymodel
-- ----------------------------
INSERT INTO `bodymodel` VALUES ('16', '17', 'RCUKHD706', '9995880');
INSERT INTO `bodymodel` VALUES ('17', '18', 'RoadEntertainmentBundle', '9765232');
INSERT INTO `bodymodel` VALUES ('18', '19', 'Advent OE-Styled', '4565298');
INSERT INTO `bodymodel` VALUES ('19', '20', 'Pyle 7 AUX setup', '8895880');
INSERT INTO `bodymodel` VALUES ('20', '21', 'Sony XAV-70BT', '9765298');
INSERT INTO `bodymodel` VALUES ('21', '22', 'OZ Racing LEGGERA HLT', '9005880');
INSERT INTO `bodymodel` VALUES ('22', '23', 'MAK ICONA AUDI', '4567898');
INSERT INTO `bodymodel` VALUES ('23', '24', 'Caravan Royal Hood', '9005000');
INSERT INTO `bodymodel` VALUES ('24', '25', 'Hilux 2KD KUN 15', '9765236');

-- ----------------------------
-- Table structure for `bodypartbrand`
-- ----------------------------
DROP TABLE IF EXISTS `bodypartbrand`;
CREATE TABLE `bodypartbrand` (
  `bid` int(11) NOT NULL AUTO_INCREMENT,
  `brandName` varchar(40) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of bodypartbrand
-- ----------------------------
INSERT INTO `bodypartbrand` VALUES ('17', 'JVC', 'Multimedia');
INSERT INTO `bodypartbrand` VALUES ('18', 'Kenwood', 'Multimedia');
INSERT INTO `bodypartbrand` VALUES ('19', 'Advent', 'Multimedia');
INSERT INTO `bodypartbrand` VALUES ('20', 'Pyle', 'Multimedia');
INSERT INTO `bodypartbrand` VALUES ('21', 'Sony', 'Multimedia');
INSERT INTO `bodypartbrand` VALUES ('22', 'OZ Racing', 'AlloyWheel');
INSERT INTO `bodypartbrand` VALUES ('23', 'Mak', 'AlloyWheel');
INSERT INTO `bodypartbrand` VALUES ('24', 'Caravan', 'Accessories');
INSERT INTO `bodypartbrand` VALUES ('25', 'Toyota1', 'Accessories');

-- ----------------------------
-- Table structure for `brand`
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `bid` int(100) NOT NULL AUTO_INCREMENT,
  `Brand_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('15', 'mazda');
INSERT INTO `brand` VALUES ('16', 'Toyota');

-- ----------------------------
-- Table structure for `customer`
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `did` int(11) DEFAULT NULL,
  `NIC` char(20) NOT NULL,
  `phone` char(15) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`cid`),
  KEY `pk_customer` (`did`),
  CONSTRAINT `pk_customer` FOREIGN KEY (`did`) REFERENCES `discount` (`d_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('1', '1', '9427505660V', '0776787665', 'thiserra@gmail.com');
INSERT INTO `customer` VALUES ('2', '2', '963200790V', '0774475726', 'ruzaikmohomad@gmail.com');
INSERT INTO `customer` VALUES ('3', '4', '9409717721V', '0784328880', 'thilina.wickramasinghe.sl@gmail.com');

-- ----------------------------
-- Table structure for `discount`
-- ----------------------------
DROP TABLE IF EXISTS `discount`;
CREATE TABLE `discount` (
  `d_id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(40) NOT NULL,
  `barcodeId` varchar(40) NOT NULL,
  `rate` char(20) DEFAULT NULL,
  PRIMARY KEY (`d_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of discount
-- ----------------------------
INSERT INTO `discount` VALUES ('1', 'silver', '98679848', '6');
INSERT INTO `discount` VALUES ('2', 'gold', '76890847', '10');
INSERT INTO `discount` VALUES ('3', 'normal', 'null', '0');
INSERT INTO `discount` VALUES ('4', 'patinum', '98675694', '12');

-- ----------------------------
-- Table structure for `employee`
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `barcodeiD` varchar(50) DEFAULT NULL,
  `nic` varchar(20) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES ('1', 'dfwsd', 'dsf', '4587875959V', 'luru', 'tw@!');
INSERT INTO `employee` VALUES ('2', 'Shakaf', '1003', '970304886V', 'matale', 'shakaf@gmail.com');

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
  `balance` double NOT NULL,
  `ePrice` double NOT NULL,
  `gPrice` double NOT NULL,
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
INSERT INTO `login` VALUES ('1', 'ruzaik', '123', 'ruzaikmohomad@gmail.com');

-- ----------------------------
-- Table structure for `model`
-- ----------------------------
DROP TABLE IF EXISTS `model`;
CREATE TABLE `model` (
  `mId` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) NOT NULL,
  `model` varchar(30) NOT NULL,
  `engCap` varchar(30) NOT NULL,
  `type` char(15) NOT NULL,
  PRIMARY KEY (`mId`),
  KEY `fk_Model` (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of model
-- ----------------------------
INSERT INTO `model` VALUES ('17', '15', 'bongo', '2000', 'Car');
INSERT INTO `model` VALUES ('18', '15', 'vigo', '1500', 'Car');
INSERT INTO `model` VALUES ('20', '16', 'Prius', '1600', 'Car');
INSERT INTO `model` VALUES ('21', '16', 'Vannet', '1600', 'Van');
INSERT INTO `model` VALUES ('22', '16', 'Prius', '2500', 'Bus');
INSERT INTO `model` VALUES ('23', '16', 'Prius', 'Select Capacity', 'Select Type');
INSERT INTO `model` VALUES ('24', '16', 'Prius', 'Select Capacity', 'Select Type');

-- ----------------------------
-- Table structure for `model_copy`
-- ----------------------------
DROP TABLE IF EXISTS `model_copy`;
CREATE TABLE `model_copy` (
  `mId` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) NOT NULL,
  `model` varchar(30) NOT NULL,
  `engCap` varchar(30) NOT NULL,
  `type` char(15) NOT NULL,
  PRIMARY KEY (`mId`),
  KEY `fk_Model` (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of model_copy
-- ----------------------------
INSERT INTO `model_copy` VALUES ('17', '15', 'bongo', '2000', 'Car');
INSERT INTO `model_copy` VALUES ('18', '15', 'vigo', '1500', 'Car');
INSERT INTO `model_copy` VALUES ('20', '16', 'Prius', '1600', 'Car');
INSERT INTO `model_copy` VALUES ('21', '16', 'Vannet', '1600', 'Van');

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of multimedia
-- ----------------------------
INSERT INTO `multimedia` VALUES ('3', '15', '600', '2400');
INSERT INTO `multimedia` VALUES ('4', '16', '780', '2700');
INSERT INTO `multimedia` VALUES ('5', '21', '135 - 160', '85 - 125');

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
  `cost_price` varchar(40) NOT NULL,
  PRIMARY KEY (`rbid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of remove_bodyparts
-- ----------------------------
INSERT INTO `remove_bodyparts` VALUES ('1', 'rere', 'bgb', 'nbnb', 'bnbn', 'bnbn', 'gggg', 'ngg', 'hghh', 'hghg', 'ghg', '87777');
INSERT INTO `remove_bodyparts` VALUES ('2', 'ENKEI', 'mn78675', 'Commander Truck', 'AlloyWheel', '50000', '16x60', 'aluminium', 'null', 'null', 'null', '7777');
INSERT INTO `remove_bodyparts` VALUES ('3', 'ENKEI', 'mn78675', 'Commander Truck', 'AlloyWheel', '50000', '16x60', 'aluminium', 'null', 'null', 'null', '55');
INSERT INTO `remove_bodyparts` VALUES ('4', 'ENKEI', 'mn78675', 'Commander Truck', 'AlloyWheel', '50000', '16x60', 'aluminium', 'null', 'null', 'null', '4444');
INSERT INTO `remove_bodyparts` VALUES ('5', 'Kenwood', 'ui87657', 'Kenwood X2sx ', 'Multimedia', '35000', 'null', 'null', 'null', '45000A', '400Hz', '333');
INSERT INTO `remove_bodyparts` VALUES ('6', 'TRD', '56yhy76', 'TRD-pro', 'Accessories', '400', 'null', 'null', '56yhy76', 'null', 'null', '333');
INSERT INTO `remove_bodyparts` VALUES ('7', 'OZ Racing', '65676jhgjgjg', 'OZ Racing LEGGERA HLT', 'AlloyWheel', '5555555', '16 x 8', 'Iron / steel', 'null', 'null', 'null', '5555555');

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
  `cost_price` varchar(40) NOT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of removevehi
-- ----------------------------
INSERT INTO `removevehi` VALUES ('2', 'Delete', 'Toyota', '2014', 'Aqua', 'EN456788', '1300', '50000', 'CH6543', '4500000', 'E:/Multimedia/my photos/11.jpg', 'DVD Player/ Alloy Wheel/ Petrol/ ', 'Select Type', 'ADC-9878', 'null', '4500000');
INSERT INTO `removevehi` VALUES ('3', 'Delete', 'Toyota', '2016', 'Aqua', 'eb565687', '1600', '10', 'Ch5656', '10000000', 'E:/Multimedia/my photos/2.jpg', 'Petrol/ ', 'Car', 'null', 'null', '5000000');
INSERT INTO `removevehi` VALUES ('4', 'Delete', 'Mazda', '2016', 'bongo', 'en46738468', '2000', '78888', 'ch7654', '7818930', 'E:/Multimedia/my photos/4.jpg', 'AC/ R camera/ Petrol/ Diesel/ ', 'Van', 'avc - 9878', 'null', '7000000');
INSERT INTO `removevehi` VALUES ('5', 'Delete', 'toyota', '2018', 'Aqua', 'en - 43784', '1500', '600000', 'ch6u845', '5670000', 'E:/Multimedia/my photos/2.jpg', 'DVD Player/ Alloy Wheel/ AC/ R camera/ Petrol/ ', 'Car', 'abd - 9876', 'null', '5000000');
INSERT INTO `removevehi` VALUES ('6', 'Delete', 'toyota', '2015', 'aqua', 'eb3y54379', 'Select Capacity', '50000', 'chghfdsa', '556132', 'E:/Multimedia/my photos/dat.jpg', 'Alloy Wheel/ Petrol/ ', 'Car', '463gbfjhd', 'null', '500000');
INSERT INTO `removevehi` VALUES ('7', 'Delete', 'Toyota', '2017', 'Aqua', 'EN787656', '1600', '90000', 'CH76789', '5584950', 'E:/Multimedia/my photos/dat.jpg', 'DVD Player/ Alloy Wheel/ R camera/ Petrol/ ', 'Car', 'ADC-9890', 'null', '5000000');
INSERT INTO `removevehi` VALUES ('8', 'Delete', 'Toyota', '2014', 'Aqua', 'en5467', '1600', '60000', 'ch6454', '5533237', 'E:/Multimedia/my photos/4.jpg', 'Multifunction/ Petrol/ ', 'Car', 'abc-9890', 'null', '5000000');
INSERT INTO `removevehi` VALUES ('9', 'Delete', 'Toyota', '2014', 'Prius', 'en7658', '1600', '50000', 'ch6754', '5561325', 'E:/Multimedia/my photos/$_35.JPG', 'Petrol/ ', 'Car', 'null', 'null', '5000000');

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of veh_sale
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
  `mileage` varchar(30) DEFAULT NULL,
  `chassisNum` varchar(30) NOT NULL,
  `sPrice` double NOT NULL,
  `vImage` varchar(300) NOT NULL,
  `discription` varchar(150) DEFAULT NULL,
  `regNum` char(15) DEFAULT NULL,
  `vBoolImg` varchar(300) NOT NULL,
  `c_id` int(11) NOT NULL,
  `status` varchar(30) DEFAULT NULL,
  `cost_price` varchar(40) NOT NULL,
  PRIMARY KEY (`v_id`),
  KEY `fk_Vehicle` (`c_id`),
  KEY `engNum` (`engNum`) USING BTREE,
  KEY `chassisNum` (`chassisNum`) USING BTREE,
  KEY `regNum` (`regNum`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of vehicle
-- ----------------------------
INSERT INTO `vehicle` VALUES ('15', 'Toyota', '2015', 'Prius', 'EN5467', '30000', 'CH7685', '5589412', 'E:/Multimedia/my photos/pic/Huawei-gr5-mini-pic.jpg', 'Alloy Wheel/ Air Bag/ Petrol/ Electric/ ', 'ADC-6575', 'null', '0', 'Registerd', '5000000');
INSERT INTO `vehicle` VALUES ('16', 'mazda', '2015', 'bongo', 'EN65324', '60000', 'CH6654', '6639885', 'E:/Multimedia/my photos/kjmhljht.jpg', 'Alloy Wheel/ R camera/ Air Bag/ Diesel/ Electric/ ', 'ADC-8899', 'null', '0', 'Registerd', '6000000');
INSERT INTO `vehicle` VALUES ('17', 'Toyota', '2014', 'Prius', 'EN675678', '40000', 'CH6735', '7785855', 'E:/Multimedia/my photos/2.jpg', 'Multifunction/ Petrol/ ', 'ADC-8908', 'null', '0', 'Registerd', '7000000');
INSERT INTO `vehicle` VALUES ('19', 'Toyota', '2018', 'Prius', 'EN6578', '5000099', 'CH5678', '5613300', 'E:/Multimedia/my photos/2.jpg', 'Petrol/ ', 'null', 'null', '0', 'Unregistered', '5000000');

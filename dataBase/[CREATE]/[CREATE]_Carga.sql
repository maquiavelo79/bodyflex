-- Drop table Carga
DROP TABLE IF EXISTS `Carga`;

CREATE TABLE `Carga` (
  `CGA_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CGA_FEC` datetime,
  `CGA_HRS` datetime,
  PRIMARY KEY(`CGA_ID`)
)
ENGINE=INNODB;
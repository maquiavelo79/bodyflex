
-- Drop table MODULO
DROP TABLE IF EXISTS `MODULO`;

CREATE TABLE `MODULO` (
  `MOD_ID` int(11) NOT NULL,
  `MOD_RES` varchar(50) COMMENT 'RESUMEN DEL NOMBRE',
  `MOD_NOM` varchar(500) COMMENT 'NOMBRE M�DULO',
  `MOD_DES` varchar(2000) COMMENT 'DECSRIPCI�N M�DULO',
  `MOD_VIG` int(11) COMMENT 'VIGENCIA',
  `MOD_FOR` varchar(1000) COMMENT 'NOMBRE MODULO A NIVEL DE C�DIGO',
  PRIMARY KEY(`MOD_ID`)
)
ENGINE=INNODB;
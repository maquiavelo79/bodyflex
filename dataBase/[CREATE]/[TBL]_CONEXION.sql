-- Drop table CONEXION
DROP TABLE IF EXISTS `CONEXION`;

CREATE TABLE `CONEXION` (
  `CON_SERVER` varchar(50) NOT NULL,
  `CON_USUARIO` varchar(50),
  `CON_PASSWORD` varchar(50),
  `CON_BASE_DATOS` varchar(50),
  PRIMARY KEY(`CON_SERVER`)
)
ENGINE=INNODB;
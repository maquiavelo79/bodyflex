DROP TABLE IF EXISTS `Atencion`;

CREATE TABLE `Atencion` (
  `A_id` int(11) NOT NULL,
  `A_nomID` varchar(50),
  `A_nom` varchar(200),
  `A_fecIng` datetime,
  `A_HrsIng` datetime,
  `A_Vigencia` int(11) COMMENT '1=VIGENTE; 0=NO VIGENTE',
  PRIMARY KEY(`A_id`)
)
ENGINE=INNODB;





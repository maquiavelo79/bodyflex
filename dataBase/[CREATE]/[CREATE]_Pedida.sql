DROP TABLE IF EXISTS `Pedida`;

CREATE TABLE `Pedida` (
  `P_id` bigint(20) NOT NULL,
  `P_nom` varchar(200),
  `P_nomID` varchar(50),
  `P_FecIn` datetime,
  `P_HrsIng` datetime,
  `P_Vigencia` int(11) COMMENT '1=vigente; 0=No Vigente',
  PRIMARY KEY(`P_id`)
)
ENGINE=INNODB;
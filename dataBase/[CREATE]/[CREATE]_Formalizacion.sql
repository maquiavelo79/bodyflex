-- Drop table Formalizacion
DROP TABLE IF EXISTS `Formalizacion`;

CREATE TABLE `Formalizacion` (
  `fOrm_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fOrm_lIn` varchar(300),
  `fOrm_fEcIng` datetime,
  `fOrm_hRsIng` datetime,
  `fOrm_rEg` varchar(100),
  `fOrm_cIc` varchar(50),
  `fOrm_fEcMod` datetime,
  `fOrm_hRsMod` datetime,
  `fOrm_nOm` varchar(200),
  `fOrm_aRc_nOm` varchar(200) COMMENT 'Nombre Correo',
  `fOrm_aRc` longblob COMMENT 'Correo en Binario',
  `fOrm_dEsc` varchar(5000),
  `fOrm_aRc_rTa` varchar(300) COMMENT 'Ruta Correo',
  `fOrm_vIg` int(11) COMMENT '1=Vigente; 0=No Vigente',
  PRIMARY KEY(`fOrm_id`)
)
ENGINE=INNODB;
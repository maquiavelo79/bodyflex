CREATE TABLE `detenido` (
  `dEt_iD` bigint(20) NOT NULL,
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `dEt_fEc_IN` datetime DEFAULT NULL,
  `dEt_eSt_oRi` varchar(100) DEFAULT NULL,
  `dEt_eMail_IN` longblob,
  `dEt_eMail_IN_nOm` varchar(500) DEFAULT NULL,
  `dEt_mOt` varchar(5000) DEFAULT NULL,
  `dEt_fEc_oUt` datetime DEFAULT NULL,
  `dEt_eMail_OUT` longblob,
  `dEt_eMail_OUT_nOm` varchar(500) DEFAULT NULL,
  `dEt_eStado` varchar(50) DEFAULT NULL,
  `dEt_r` int(11) DEFAULT NULL,
  `dEt_aRc1` blob,
  `dEt_aNa` varchar(100) DEFAULT NULL,
  `dEt_mOt_cIe` varchar(500) DEFAULT NULL,
  `dEt_hRs_IN` datetime DEFAULT NULL COMMENT 'hora detención',
  `dEt_hRs_OUT` datetime DEFAULT NULL COMMENT 'hora salida',
  `det_pOr` int(11) NOT NULL COMMENT 'Porcentaje avance en DETENCION',
  PRIMARY KEY (`dEt_iD`),
  KEY `Ref_56` (`fun_id`),
  CONSTRAINT `Ref_56` FOREIGN KEY (`fun_id`) REFERENCES `funcionalidad` (`fun_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `checklist` (
  `Chk_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `Chk_Sec` varchar(100) DEFAULT NULL COMMENT 'Sección del Documento',
  `Chk_Des` varchar(1000) DEFAULT NULL COMMENT 'Descripción',
  `chk_Vig` int(11) NOT NULL COMMENT 'vIgencia',
  `chk_rGl` varchar(100) DEFAULT NULL COMMENT 'Regla',
  `chk_cIc` varchar(100) DEFAULT NULL COMMENT 'Ciclo',
  `chk_hRs_Out` datetime DEFAULT NULL COMMENT 'Hora Baja',
  `chk_fEc_Out` datetime DEFAULT NULL COMMENT 'Fecha Baja',
  `chk_hRs_IN` datetime DEFAULT NULL COMMENT 'Hora Ingreso',
  `chk_fEc_IN` datetime DEFAULT NULL COMMENT 'Fecha Ingreso',
  PRIMARY KEY (`Chk_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;


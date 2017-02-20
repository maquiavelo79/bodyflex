CREATE TABLE `servicio` (
  `ser_id` varchar(200) NOT NULL COMMENT 'Nombre Servicio Mayuscula',
  `ser_base` varchar(50) NOT NULL COMMENT 'Base de Datos asociada al servicio',
  `ser_tipo` varchar(50) NOT NULL COMMENT 'Host o SQL',
  `sEr_r` int(11) NOT NULL COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente',
  `sEr_dEs` varchar(3000) DEFAULT NULL COMMENT 'Descripción Servicio',
  `sEr_pAl1` varchar(50) DEFAULT NULL COMMENT 'Palabra de Negocio 1',
  `sEr_pAl2` varchar(50) DEFAULT NULL COMMENT 'Palabra de Negocio 2',
  `sEr_pAl3` varchar(50) DEFAULT NULL COMMENT 'Palabra de Negocio 3',
  `sEr_aAc1` varchar(50) DEFAULT NULL COMMENT 'acción 1',
  `sEr_aAc2` varchar(50) DEFAULT NULL COMMENT 'acción 2',
  `sEr_aAc3` varchar(50) DEFAULT NULL COMMENT 'acción 3',
  `sEr_mOd2` varchar(100) DEFAULT NULL COMMENT 'módulo 3',
  `sEr_mOd3` varchar(100) DEFAULT NULL COMMENT 'módulo 3',
  `SER_ARC` longblob COMMENT 'ESP de servicio, EN WORD',
  `sEr_nOm` varchar(200) DEFAULT NULL COMMENT 'nombre archivo word',
  `sEr_mOd` varchar(100) DEFAULT NULL COMMENT 'módulo 3',
  `sEr_vIg` int(11) NOT NULL COMMENT 'Vigencia Servicio',
  `sEr_oRd` int(11) NOT NULL COMMENT 'ORDEN',
  PRIMARY KEY (`ser_id`,`ser_base`,`ser_tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


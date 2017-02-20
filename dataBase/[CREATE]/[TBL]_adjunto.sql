CREATE TABLE `adjunto` (
  `adj_cod` bigint(20) NOT NULL COMMENT 'Codigo Adjunto',
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `adj_nom` varchar(1500) DEFAULT NULL COMMENT 'Nombre Archivo',
  `adj_des` varchar(5000) DEFAULT NULL COMMENT 'Descripción Archivo',
  `adj_ruta` varchar(5000) DEFAULT NULL COMMENT 'Ruta Archivo',
  `adj_stip` varchar(50) DEFAULT NULL COMMENT 'String determina tipo ej. WRD = Word; EML=EMAIL, XML=XML',
  `adj_Itip` int(11) DEFAULT NULL COMMENT 'Entero Tipo, ej. 1= Word, 2= EMAIL, 3=XML',
  `adj_archivo` longblob COMMENT 'El archivo en Binario',
  `adj_etapa` varchar(50) DEFAULT NULL COMMENT 'Etapa: [INGRESO | DESARROLLO]',
  PRIMARY KEY (`adj_cod`),
  KEY `Ref_23` (`fun_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `tm_analistas` (
  `AN_CODIGO_ANALISTA` varchar(50) NOT NULL,
  `AN_NOMBRE_ANALISTA` varchar(50) DEFAULT NULL,
  `AN_ROL_ANALISTA` int(11) NOT NULL,
  `aN_r` int(11) NOT NULL COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente',
  `an_vig` int(11) NOT NULL COMMENT 'Vigencia de analista',
  `aN_id` int(11) NOT NULL,
  `an_PAS` varchar(50) DEFAULT NULL,
  `an_EML` varchar(300) DEFAULT NULL,
  `AN_FEC_ING` datetime DEFAULT NULL,
  `AN_HRS_ING` datetime DEFAULT NULL,
  PRIMARY KEY (`AN_CODIGO_ANALISTA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


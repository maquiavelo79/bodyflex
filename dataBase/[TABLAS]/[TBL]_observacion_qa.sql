CREATE TABLE `observacion_qa` (
  `OBS_id` bigint(20) NOT NULL,
  `OBS_nom` varchar(100) NOT NULL,
  `OBS_des` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`OBS_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- Drop table Observacion_QA
DROP TABLE IF EXISTS `Observacion_QA`;

CREATE TABLE `Observacion_QA` (
  `OBS_id` bigint(20) NOT NULL,
  `OBS_nom` varchar(100) NOT NULL,
  `OBS_des` varchar(2000),
  PRIMARY KEY(`OBS_id`)
)
ENGINE=INNODB;
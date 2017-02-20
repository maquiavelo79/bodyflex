-- Drop table DIAS_NO_LAB
DROP TABLE IF EXISTS `DIAS_NO_LAB`;

CREATE TABLE `DIAS_NO_LAB` (
  `d_id` int(11) NOT NULL,
  `d_f_ing` datetime COMMENT 'Fecha ingreso',
  `d_h_ing` datetime COMMENT 'Hora Ingreso',
  `d_recurso` varchar(100) COMMENT 'Recurso asociado',
  `d_f` datetime COMMENT 'Día no laborable',
  `d_desc` varchar(200) COMMENT 'Descripción',
  PRIMARY KEY(`d_id`)
)
ENGINE=INNODB;
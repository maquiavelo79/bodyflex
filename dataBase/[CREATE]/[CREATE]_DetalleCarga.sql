-- Drop table DetalleCarga
DROP TABLE IF EXISTS `DetalleCarga`;

CREATE TABLE `DetalleCarga` (
  `DetCga_ID` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'Ficha que representa al conjunto de cargas',
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `A_id` int(11) NOT NULL DEFAULT '0',
  `P_id` bigint(20) NOT NULL DEFAULT '0',
  `CGA_ID` bigint(20) NOT NULL DEFAULT '0',
  `DetCga_Fch_Ing` datetime COMMENT 'Fecha Ingreso',
  `DetCga_Hrs_Ing` datetime COMMENT 'Hora Ingreso',
  `DetCga_Vigente` int(11) COMMENT '1=Vigente; 0=No Vigente',
  PRIMARY KEY(`DetCga_ID`, `fun_id`, `A_id`, `P_id`, `CGA_ID`),
  CONSTRAINT `Ref_59` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_57` FOREIGN KEY (`P_id`)
    REFERENCES `Pedida`(`P_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_58` FOREIGN KEY (`A_id`)
    REFERENCES `Atencion`(`A_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_64` FOREIGN KEY (`CGA_ID`)
    REFERENCES `Carga`(`CGA_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;
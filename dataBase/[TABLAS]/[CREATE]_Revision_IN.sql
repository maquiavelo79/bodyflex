-- Drop table Revision_IN
DROP TABLE IF EXISTS `Revision_IN`;

CREATE TABLE `Revision_IN` (
  `RevIn_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `RevIn_Ana` varchar(50) COMMENT 'Analista Responsable',
  `RevIn_FecAPE` datetime COMMENT 'Fecha Apertura',
  `RevIn_HrsAPE` datetime COMMENT 'Hora Apertura',
  `RevIn_FecCIE` datetime COMMENT 'Fecha Cierre',
  `RevIn_HrsCIE` datetime COMMENT 'Hora Cierre',
  `RevIn_Rev` varchar(50) COMMENT 'Revisor Par',
  `RevIn_Exc` longblob COMMENT 'Excel Revisión',
  `RevIn_Vig` int(11) COMMENT 'Vigente=1; NoVigente=0',
  PRIMARY KEY(`RevIn_ID`),
  CONSTRAINT `Ref_61` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;
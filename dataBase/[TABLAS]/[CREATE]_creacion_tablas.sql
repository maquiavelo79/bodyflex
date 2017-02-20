-- Drop table Palabra
DROP TABLE IF EXISTS `Palabra`;

CREATE TABLE `Palabra` (
  `p_nOm` varchar(100) NOT NULL,
  PRIMARY KEY(`p_nOm`)
)
ENGINE=INNODB;

-- Drop table Modulo
DROP TABLE IF EXISTS `Modulo`;

CREATE TABLE `Modulo` (
  `m_cOd` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código módulo',
  `m_nOm` varchar(500) COMMENT 'Nombre módulo',
  PRIMARY KEY(`m_cOd`)
)
ENGINE=INNODB;

-- Drop table Accion
DROP TABLE IF EXISTS `Accion`;

CREATE TABLE `Accion` (
  `a_nOm` varchar(100) NOT NULL COMMENT 'acción',
  PRIMARY KEY(`a_nOm`)
)
ENGINE=INNODB;


-- Drop table SerSOA
DROP TABLE IF EXISTS `SerSOA`;

CREATE TABLE `SerSOA` (
  `s_cod` bigint(20) NOT NULL AUTO_INCREMENT,
  `s_nOm` varchar(100) NOT NULL COMMENT 'nombre del servicio',
  `s_dEs` varchar(1000) COMMENT 'descripción del servicio',
  `s_bAs` varchar(50) COMMENT 'Base de Datos',
  `s_cFg` varchar(100) COMMENT 'CFG',
  `s_pRo` varchar(50) COMMENT 'Producto',
  `s_fEc` datetime COMMENT 'Fecha Versión ',
  `m_cOd` int(11) NOT NULL DEFAULT '0',
  `a_nOm_1` varchar(100) NOT NULL,
  `a_nOm_2` varchar(100) NOT NULL,
  `a_nOm_3` varchar(100) NOT NULL,
  `a_nOm_4` varchar(100) NOT NULL,
  `p_nOm_1` varchar(100) NOT NULL,
  `p_nOm_2` varchar(100) NOT NULL,
  `p_nOm_3` varchar(100) NOT NULL,
  `p_nOm_4` varchar(100) NOT NULL,
  `s_d_cmm` longblob COMMENT 'Word con CMM',
  `s_f_cmm` datetime COMMENT 'Fecha Versión CMM',
  `s_n_cmm` varchar(100) COMMENT 'Nombre CMM',
  `s_d_plm` longblob COMMENT 'Word con PLM',
  `s_f_plm` datetime COMMENT 'Word con PLM',
  `s_n_plm` varchar(50) COMMENT 'Nombre PLM',
  `s_d_cics` longblob COMMENT 'Word CICS',
  `s_f_cics` datetime COMMENT 'Fecha Versión CICS',
  `s_n_cics` varchar(50) COMMENT 'Nombre PLM',
  PRIMARY KEY(`s_cod`),
  CONSTRAINT `Ref_51` FOREIGN KEY (`m_cOd`)
    REFERENCES `Modulo`(`m_cOd`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_52` FOREIGN KEY (`a_nOm_1`)
    REFERENCES `Accion`(`a_nOm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_53` FOREIGN KEY (`a_nOm_2`)
    REFERENCES `Accion`(`a_nOm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_54` FOREIGN KEY (`a_nOm_3`)
    REFERENCES `Accion`(`a_nOm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_55` FOREIGN KEY (`a_nOm_4`)
    REFERENCES `Accion`(`a_nOm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_56` FOREIGN KEY (`p_nOm_1`)
    REFERENCES `Palabra`(`p_nOm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_57` FOREIGN KEY (`p_nOm_2`)
    REFERENCES `Palabra`(`p_nOm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_58` FOREIGN KEY (`p_nOm_3`)
    REFERENCES `Palabra`(`p_nOm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_59` FOREIGN KEY (`p_nOm_4`)
    REFERENCES `Palabra`(`p_nOm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;


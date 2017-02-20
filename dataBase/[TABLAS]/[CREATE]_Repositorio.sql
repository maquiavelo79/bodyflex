
-- select * from tbl_login where log_activo = 1;
-- SELECT * FROM FUNCIONALIDAD

-- ALTER TABLE funcionalidad DROP fun_pos;
-- ALTER TABLE funcionalidad DROP fun_obj;
-- ALTER TABLE funcionalidad DROP fun_pre;

-- Drop table Repositorio
DROP TABLE IF EXISTS `Repositorio`;

CREATE TABLE `Repositorio` (
  `Rep_Server` varchar(50) NOT NULL,
  `Rep_Carpeta` varchar(50),
  PRIMARY KEY(`Rep_Server`)
)
ENGINE=INNODB;


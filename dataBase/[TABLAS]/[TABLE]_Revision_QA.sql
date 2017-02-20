-- Drop table Revision_QA
DROP TABLE IF EXISTS `Revision_QA`;

CREATE TABLE `Revision_QA` (
  `revQA_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `revQA_analista` varchar(100) NOT NULL,
  `revQA_fApe` datetime NOT NULL,
  `revQA_hApe` datetime NOT NULL,
  `revQA_fCie` datetime,
  `revQA_hCie` datetime,
  `revQA_rEvisor` varchar(100) NOT NULL,
  `revQA_rUta` varchar(200) NOT NULL,
  `revQA_iTe` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY(`revQA_id`),
  CONSTRAINT `Ref_70` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

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
  `revQA_vIg` int(11) COMMENT '1=[VIGENTE], 2=[NO VIGENTE]',
  PRIMARY KEY(`revQA_id`),
  CONSTRAINT `Ref_70` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Det_Revision_QA
DROP TABLE IF EXISTS `Det_Revision_QA`;

CREATE TABLE `Det_Revision_QA` (
  `det_rev_QA_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `revQA_id` bigint(20) NOT NULL DEFAULT '0',
  `OBS_id` bigint(20) NOT NULL DEFAULT '0',
  `det_rev_QA_iTe` int(11) NOT NULL DEFAULT '0',
  `det_rev_QA_oBs` varchar(500),
  `det_rev_QA_pAg` int(11),
  `det_rev_QA_err_ibm` int(11),
  `det_rev_QA_err_bech` int(11),
  PRIMARY KEY(`det_rev_QA_id`),
  CONSTRAINT `Ref_71` FOREIGN KEY (`revQA_id`)
    REFERENCES `Revision_QA`(`revQA_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_72` FOREIGN KEY (`OBS_id`)
    REFERENCES `Observacion_QA`(`OBS_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Observacion_QA
DROP TABLE IF EXISTS `Observacion_QA`;

CREATE TABLE `Observacion_QA` (
  `OBS_id` bigint(20) NOT NULL,
  `OBS_nom` varchar(100) NOT NULL,
  `OBS_des` varchar(2000),
  PRIMARY KEY(`OBS_id`)
)
ENGINE=INNODB;

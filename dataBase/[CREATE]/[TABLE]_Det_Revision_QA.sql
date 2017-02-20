-- Drop table Det_Revision_QA
DROP TABLE IF EXISTS `Det_Revision_QA`;

CREATE TABLE `Det_Revision_QA` (
  `det_rev_QA_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `revQA_id` bigint(20) NOT NULL DEFAULT '0',
  `OBS_id` bigint(20) NOT NULL DEFAULT '0',
  `det_rev_QA_iTe` int(11) NOT NULL DEFAULT '0',
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
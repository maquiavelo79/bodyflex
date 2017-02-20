CREATE TABLE `det_revision_qa` (
  `det_rev_QA_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `revQA_id` bigint(20) NOT NULL DEFAULT '0',
  `OBS_id` bigint(20) NOT NULL DEFAULT '0',
  `det_rev_QA_iTe` int(11) NOT NULL DEFAULT '0',
  `det_rev_QA_oBs` varchar(500) DEFAULT NULL,
  `det_rev_QA_pAg` int(11) DEFAULT NULL,
  `det_rev_QA_err_ibm` int(11) DEFAULT NULL,
  `det_rev_QA_err_bech` int(11) DEFAULT NULL,
  PRIMARY KEY (`det_rev_QA_id`),
  KEY `Ref_71` (`revQA_id`),
  KEY `Ref_72` (`OBS_id`),
  CONSTRAINT `Ref_71` FOREIGN KEY (`revQA_id`) REFERENCES `revision_qa` (`revQA_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Ref_72` FOREIGN KEY (`OBS_id`) REFERENCES `observacion_qa` (`OBS_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=230 DEFAULT CHARSET=latin1;


CREATE TABLE `revision_qa` (
  `revQA_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `revQA_analista` varchar(100) NOT NULL,
  `revQA_fApe` datetime NOT NULL,
  `revQA_hApe` datetime NOT NULL,
  `revQA_fCie` datetime DEFAULT NULL,
  `revQA_hCie` datetime DEFAULT NULL,
  `revQA_rEvisor` varchar(100) NOT NULL,
  `revQA_rUta` varchar(200) NOT NULL,
  `revQA_iTe` int(11) NOT NULL DEFAULT '0',
  `revQA_vIg` int(11) DEFAULT NULL COMMENT '1=[VIGENTE], 2=[NO VIGENTE]',
  `revQA_cArpeta` varchar(100) DEFAULT NULL,
  `revQA_wOrd` varchar(100) DEFAULT NULL,
  `revQA_wOrd_rUta` varchar(1000) DEFAULT NULL,
  `revQA_REV_fApe` datetime DEFAULT NULL,
  `revQA_REV_hApe` datetime DEFAULT NULL,
  `revQA_REV_fCie` datetime DEFAULT NULL,
  `revQA_REV_hCie` datetime DEFAULT NULL,
  `revQA_REV_cArpeta` varchar(100) DEFAULT NULL,
  `revQA_REV_wOrd` varchar(100) DEFAULT NULL,
  `revQA_REV_wOrd_rUta` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`revQA_id`),
  KEY `Ref_70` (`fun_id`),
  CONSTRAINT `Ref_70` FOREIGN KEY (`fun_id`) REFERENCES `funcionalidad` (`fun_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=latin1;


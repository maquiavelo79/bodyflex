-- =============================================================================
-- Diagram Name: SEF
-- Created on: 18/12/2012 15:22:43
-- Diagram Version: 385
-- =============================================================================
DROP DATABASE IF EXISTS `Database_1`;

CREATE DATABASE IF NOT EXISTS `Database_1`;

USE `Database_1`;

SET FOREIGN_KEY_CHECKS=0;

-- Drop table Pedida
DROP TABLE IF EXISTS `Pedida`;

CREATE TABLE `Pedida` (
  `P_id` bigint(20) NOT NULL,
  `P_nom` varchar(200),
  `P_nomID` varchar(50),
  `P_FecIn` datetime,
  `P_HrsIng` datetime,
  `P_Vigencia` int(11) COMMENT '1=vigente; 0=No Vigente',
  PRIMARY KEY(`P_id`)
)
ENGINE=INNODB;

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

-- Drop table Atencion
DROP TABLE IF EXISTS `Atencion`;

CREATE TABLE `Atencion` (
  `A_id` int(11) NOT NULL,
  `A_nomID` varchar(50),
  `A_nom` varchar(200),
  `A_fecIng` datetime,
  `A_HrsIng` datetime,
  `A_Vigencia` int(11) COMMENT '1=VIGENTE; 0=NO VIGENTE',
  PRIMARY KEY(`A_id`)
)
ENGINE=INNODB;

-- Drop table CLIENTE
DROP TABLE IF EXISTS `CLIENTE`;

CREATE TABLE `CLIENTE` (
  `CLI_RUT` int(11) NOT NULL,
  `CLI_DV` varchar(1) NOT NULL,
  `CLI_ID` int(11) NOT NULL COMMENT 'ID',
  `CLI_NOM` varchar(300) COMMENT 'Nombre',
  `CLI_EML` varchar(300) COMMENT 'Email',
  `CLI_VIG` int(11) COMMENT 'Vigencia',
  `CLI_FEC_ING` datetime COMMENT 'Fecha Ingreso',
  `CLI_HRS_ING` datetime COMMENT 'Hora Ingreso',
  `CLI_Destinatario` int(11) COMMENT 'Indica si el analista es destinatario de correo, 0=NO ES DESTINATARIO, 1=SI ES DESTINATARIO',
  `CLI_Copiado` int(11) COMMENT 'Indica si el analista es copiado en correo, 0=NO ES copiado, 1=SI ES copiado',
  PRIMARY KEY(`CLI_RUT`)
)
ENGINE=INNODB;

-- Drop table Servicio
DROP TABLE IF EXISTS `Servicio`;

CREATE TABLE `Servicio` (
  `ser_id` varchar(200) NOT NULL COMMENT 'Nombre Servicio Mayuscula',
  `ser_base` varchar(50) NOT NULL COMMENT 'Base de Datos asociada al servicio',
  `ser_tipo` varchar(50) NOT NULL COMMENT 'Host o SQL',
  `sEr_dEs` varchar(3000) COMMENT 'Descripción',
  `sEr_pAl1` varchar(50),
  `sEr_pAl2` varchar(50),
  `sEr_pAl3` varchar(50),
  `sEr_aAc1` varchar(50),
  `sEr_aAc2` varchar(50),
  `sEr_aAc3` varchar(50),
  `sEr_aRc` longblob COMMENT 'Archivo Adjunto',
  `sEr_nOm` varchar(300),
  `sEr_mOd` varchar(300),
  `sEr_mOd2` varchar(100),
  `sEr_mOd3` varchar(100),
  PRIMARY KEY(`ser_id`, `ser_base`, `ser_tipo`)
)
ENGINE=INNODB;

-- Drop table Componente
DROP TABLE IF EXISTS `Componente`;

CREATE TABLE `Componente` (
  `comp_id` bigint(20) NOT NULL COMMENT 'id componente',
  `comp_com` varchar(50) COMMENT 'nombre componente',
  `comp_cls` varchar(50) COMMENT 'clase componente',
  `comp_met` varchar(50) COMMENT 'método componente',
  PRIMARY KEY(`comp_id`)
)
ENGINE=INNODB;

-- Drop table PRU_RUT
DROP TABLE IF EXISTS `PRU_RUT`;

CREATE TABLE `PRU_RUT` (
  `RUT_rut` varchar(50) NOT NULL COMMENT 'RUT del cliente',
  PRIMARY KEY(`RUT_rut`)
)
ENGINE=INNODB
COMMENT = 'RUT utilizados en pruebas de funcionalidad que aplican en ambiente.';

-- Drop table PRU_PFL
DROP TABLE IF EXISTS `PRU_PFL`;

CREATE TABLE `PRU_PFL` (
  `PFL_usr` varchar(50) NOT NULL COMMENT 'Nombre corto proporcionado por BECH, ej: fcalde90',
  `PFL_pas` varchar(50) COMMENT 'Contraseña del perfil',
  PRIMARY KEY(`PFL_usr`)
)
ENGINE=INNODB
COMMENT = 'Perfil BECH utilizado para prueba de Funcionalidad';

-- Drop table MODULO
DROP TABLE IF EXISTS `MODULO`;

CREATE TABLE `MODULO` (
  `MOD_ID` int(11) NOT NULL,
  `MOD_RES` varchar(50) COMMENT 'RESUMEN DEL NOMBRE',
  `MOD_NOM` varchar(500) COMMENT 'NOMBRE MÓDULO',
  `MOD_DES` varchar(2000) COMMENT 'DECSRIPCIÓN MÓDULO',
  `MOD_VIG` int(11) COMMENT 'VIGENCIA',
  `MOD_FOR` varchar(1000) COMMENT 'NOMBRE MODULO A NIVEL DE CÓDIGO',
  PRIMARY KEY(`MOD_ID`)
)
ENGINE=INNODB;

-- Drop table Movimiento
DROP TABLE IF EXISTS `Movimiento`;

-- ------------------------------------------------------------
-- Description:
-- 1	INGRESADA
-- 2	POR ESTIMAR
-- 3	ESTIMANDO
-- 4	ESTIMADA
-- 5	POR DESARROLLAR
-- 6	DESARROLLANDO
-- 7	DESARROLLADA
-- 8	POR EVALUAR
-- 9	EVALUANDO
-- 10	EVALUADA
-- 11	DEPENDENCIA
-- ------------------------------------------------------------

CREATE TABLE `Movimiento` (
  `mov_fun_id` int(11) NOT NULL COMMENT 'Numero de funcionalidad',
  `mov_fun_fecha` datetime NOT NULL COMMENT 'Fecha en que pasa al estado, cualquiera sea esta',
  `mov_fun_hora` datetime NOT NULL COMMENT 'Hora en que pasa al estado, cualquiera sea esta',
  `mov_fun_nom` varchar(500) COMMENT 'Nombre funcionalidad',
  `mov_fun_est` varchar(100) COMMENT 'Estado funcionalidad',
  `mov_fun_analista` varchar(100) COMMENT 'Analista Responsable',
  `mov_orden` int(11) COMMENT 'numero identificatorio que indica el orden de los sucesos en el timpo en cuanto a estado/etapa',
  `mov_accion` varchar(100) COMMENT 'acción en donde se produce el registro',
  PRIMARY KEY(`mov_fun_id`, `mov_fun_fecha`, `mov_fun_hora`)
)
ENGINE=INNODB
COMMENT = 'El propósito de esta tabla es el registro de los movimientos de una determinada funcionalidad';

-- Drop table Repositorio
DROP TABLE IF EXISTS `Repositorio`;

CREATE TABLE `Repositorio` (
  `Rep_Server` varchar(50) NOT NULL,
  `Rep_Carpeta` varchar(50),
  PRIMARY KEY(`Rep_Server`)
)
ENGINE=INNODB;

-- Drop table Carga
DROP TABLE IF EXISTS `Carga`;

CREATE TABLE `Carga` (
  `CGA_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CGA_FEC` datetime,
  `CGA_HRS` datetime,
  PRIMARY KEY(`CGA_ID`)
)
ENGINE=INNODB;

-- Drop table Complejidad
DROP TABLE IF EXISTS `Complejidad`;

CREATE TABLE `Complejidad` (
  `com_id` varchar(50) NOT NULL COMMENT 'identificador de complejidad',
  `com_pond` varchar(50) NOT NULL COMMENT 'ponderador de complejidad',
  PRIMARY KEY(`com_id`)
)
ENGINE=INNODB;

-- Drop table Requisito
DROP TABLE IF EXISTS `Requisito`;

CREATE TABLE `Requisito` (
  `rec_id` varchar(50) NOT NULL COMMENT 'id requisito',
  `rec_nom` varchar(50) NOT NULL COMMENT 'nombre requisito',
  `rec_des` varchar(50) NOT NULL COMMENT 'descripción requisito',
  `rec_vig` varchar(50) COMMENT 'Campo que indica estado de vigencia, con propósito de no ser visualizado en el futuro',
  PRIMARY KEY(`rec_id`)
)
ENGINE=INNODB;

-- Drop table Formalizacion
DROP TABLE IF EXISTS `Formalizacion`;

CREATE TABLE `Formalizacion` (
  `fOrm_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fOrm_lIn` varchar(50),
  `fOrm_fEcIng` datetime,
  `fOrm_hRsIng` datetime,
  `fOrm_rEg` varchar(100),
  `fOrm_cIc` varchar(50),
  `fOrm_fEcMod` datetime,
  `fOrm_hRsMod` datetime,
  `fOrm_nOm` varchar(200),
  `fOrm_aRc_nOm` varchar(200) COMMENT 'Nombre Correo',
  `fOrm_aRc` longblob COMMENT 'Correo en Binario',
  `fOrm_dEsc` varchar(5000),
  `fOrm_aRc_rTa` varchar(300) COMMENT 'Ruta Correo',
  `fOrm_vIg` int(11) COMMENT '1=Vigente; 0=No Vigente',
  PRIMARY KEY(`fOrm_id`)
)
ENGINE=INNODB;

-- Drop table CheckList
DROP TABLE IF EXISTS `CheckList`;

CREATE TABLE `CheckList` (
  `Chk_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `Chk_Sec` varchar(100) COMMENT 'Sección del Documento',
  `Chk_Des` varchar(1000) COMMENT 'Descripción',
  `Chk_Vig` int(11) COMMENT 'Vigente=1, No Vigente=0',
  PRIMARY KEY(`Chk_ID`)
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

-- Drop table CONEXION
DROP TABLE IF EXISTS `CONEXION`;

CREATE TABLE `CONEXION` (
  `CON_SERVER` varchar(50) NOT NULL,
  `CON_USUARIO` varchar(50),
  `CON_PASSWORD` varchar(50),
  `CON_BASE_DATOS` varchar(50),
  PRIMARY KEY(`CON_SERVER`)
)
ENGINE=INNODB;

-- Drop table TM_ANALISTAS
DROP TABLE IF EXISTS `TM_ANALISTAS`;

CREATE TABLE `TM_ANALISTAS` (
  `AN_RUT_NUM` int(11) NOT NULL,
  `AN_RUT_DV` varchar(1),
  `AN_CODIGO_ANALISTA` varchar(50) NOT NULL,
  `AN_NOMBRE_ANALISTA` varchar(50),
  `AN_ROL_ANALISTA` int(11) NOT NULL COMMENT '1=Analista, 2=Lider, 3= Invitado, 4=Lider Fabrica',
  `AN_R` int(11),
  `AN_VIG` int(11),
  `AN_ID` int(11),
  `AN_Destinatario` int(11) COMMENT 'Indica si el analista es destinatario de correo, 0=NO ES DESTINATARIO, 1=SI ES DESTINATARIO',
  `AN_Copiado` int(11) COMMENT 'Indica si el analista es copiado en correo, 0=NO ES copiado, 1=SI ES copiado',
  PRIMARY KEY(`AN_RUT_NUM`)
)
ENGINE=INNODB;

-- Drop table Estado
DROP TABLE IF EXISTS `Estado`;

CREATE TABLE `Estado` (
  `estado_id` int(11) NOT NULL COMMENT 'ID Estado',
  `estado_nom` varchar(50) NOT NULL COMMENT 'Nombre Estado',
  PRIMARY KEY(`estado_id`)
)
ENGINE=INNODB;

-- Drop table Criterio
DROP TABLE IF EXISTS `Criterio`;

CREATE TABLE `Criterio` (
  `cri_id` int(11) NOT NULL COMMENT 'Id criterio',
  `cri_nom` varchar(200) COMMENT 'Nombre criterio',
  `cri_des` varchar(5000) COMMENT 'Descripción criterio',
  `cri_req` varchar(50) COMMENT 'Criterio asociado al requisito, ej: Criterio para IPF, Criterio para ISF, etc.',
  PRIMARY KEY(`cri_id`)
)
ENGINE=INNODB;

-- Drop table TG_REGISTRO_ASISTENCIA
DROP TABLE IF EXISTS `TG_REGISTRO_ASISTENCIA`;

CREATE TABLE `TG_REGISTRO_ASISTENCIA` (
  `raID` int(11) NOT NULL AUTO_INCREMENT,
  `AN_RUT_NUM` int(11) NOT NULL DEFAULT '0',
  `raFecha` int(11),
  `raHoraLlegada` datetime,
  `raHoraSalida` datetime,
  `ra_Terminal` varchar(100),
  PRIMARY KEY(`raID`),
  CONSTRAINT `Ref_65` FOREIGN KEY (`AN_RUT_NUM`)
    REFERENCES `TM_ANALISTAS`(`AN_RUT_NUM`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table FUNCION
DROP TABLE IF EXISTS `FUNCION`;

CREATE TABLE `FUNCION` (
  `FUNCION_ID` int(11) NOT NULL,
  `MOD_ID` int(11) NOT NULL DEFAULT '0',
  `FUNCION_NOM` varchar(500) COMMENT 'NOMBRE FUNCION',
  `FUNCION_RES` varchar(50) COMMENT 'RESUMEN NOMBRE FUNCION',
  `FUNCION_DES` varchar(2000),
  `FUNCION_VIG` int(11) COMMENT 'VIGENCIA',
  `FUNCION_FOR` varchar(2000) COMMENT 'FORMULARIO, PÁGINA O NOMBRE DE MENÚ POR MEDIO DEL CUAL SE INTERACTUA CON LA FUNCIONALIDAD',
  `FUNCION_LID` int(11) COMMENT 'FUNCIÓN LIDER? 1=SI 0=NO',
  `FUNCION_PAD` int(11) COMMENT 'NUMERO FUNCIÓN PADRE',
  PRIMARY KEY(`FUNCION_ID`, `MOD_ID`),
  CONSTRAINT `Ref_68` FOREIGN KEY (`MOD_ID`)
    REFERENCES `MODULO`(`MOD_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Campo
DROP TABLE IF EXISTS `Campo`;

-- ------------------------------------------------------------
-- Description:
-- El nombre de campo puede estar asociado a otro servicio por lo que el servicio mismo y el campo se establecen como claves primarias
-- ------------------------------------------------------------

CREATE TABLE `Campo` (
  `cam_id` varchar(50) NOT NULL COMMENT 'Id de campo',
  `ser_id` varchar(200) NOT NULL,
  `ser_base` varchar(50) NOT NULL,
  `ser_tipo` varchar(50) NOT NULL,
  PRIMARY KEY(`cam_id`, `ser_id`),
  CONSTRAINT `Ref_47` FOREIGN KEY (`ser_id`, `ser_base`, `ser_tipo`)
    REFERENCES `Servicio`(`ser_id`, `ser_base`, `ser_tipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB
COMMENT = 'Se definen dos PK debido a que es posible que dos servicios posean el mismo nombre de campo.';

-- Drop table Actividad
DROP TABLE IF EXISTS `Actividad`;

CREATE TABLE `Actividad` (
  `act_cod` varchar(50) NOT NULL COMMENT 'Código de actividad',
  `rec_id` varchar(50) NOT NULL,
  `act_nom` varchar(5000) NOT NULL COMMENT 'Nombre actividad',
  `act_des` varchar(5000) NOT NULL COMMENT 'Descripción actividad',
  `act_vig` varchar(50) COMMENT 'Campo que indica estado de vigencia, con propósito de no ser visualizado en el futuro',
  PRIMARY KEY(`act_cod`),
  CONSTRAINT `Asocian` FOREIGN KEY (`rec_id`)
    REFERENCES `Requisito`(`rec_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
ENGINE=INNODB;

-- Drop table Funcionalidad
DROP TABLE IF EXISTS `Funcionalidad`;

CREATE TABLE `Funcionalidad` (
  `fun_id` bigint(20) NOT NULL COMMENT 'id funcionalidad',
  `fun_nom` varchar(500) NOT NULL COMMENT 'nombre funcionalidad',
  `fun_des` varchar(1000) NOT NULL COMMENT 'descripción funcionalidad',
  `fun_IPF` int(11) COMMENT 'Identificación de Pantallas por Funcionalidad',
  `fun_ISF` int(11) COMMENT 'Identificación de Servicios por Funcionalidad',
  `fun_ILN` int(11) COMMENT 'Identificación de Lógica de Negocio',
  `fun_IC` int(11) COMMENT 'Identificación de Calculos',
  `fun_IV` int(11) COMMENT 'Identificación de Validaciones ',
  `fun_fec_ing` datetime COMMENT 'fecha de Ingreso al sistema',
  `fun_hrs_ing` datetime COMMENT 'hora ingreso al sistema',
  `fun_usr_ing` varchar(50) COMMENT 'Usuario que ingresa fx al sistema',
  `estado_id` int(11) NOT NULL DEFAULT '0',
  `fun_url` varchar(1000) COMMENT 'URL',
  `fun_est_ant` varchar(500) COMMENT 'Estado anterior funcionalidad, este campo refleja el estado de origen, por lo que siempre sabremos el estado origen y el destino.',
  `fun_prioridad` int(11) NOT NULL COMMENT 'Prioridad, numero de 1 - 100',
  `fun_modulo` varchar(200) COMMENT 'Módulo aplicación BECH',
  `fun_obj` varchar(2000) COMMENT 'Objetivo',
  `fun_pre` varchar(50) COMMENT 'Precondición',
  `fun_pos` varchar(50) COMMENT 'Postcondición',
  `fun_tip` varchar(50) COMMENT 'Detremina R*',
  PRIMARY KEY(`fun_id`),
  CONSTRAINT `Posee` FOREIGN KEY (`estado_id`)
    REFERENCES `Estado`(`estado_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Evaluacion
DROP TABLE IF EXISTS `Evaluacion`;

CREATE TABLE `Evaluacion` (
  `eva_cod` int(11) NOT NULL COMMENT 'Código de evaluación',
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `eva_hrs_ape` datetime NOT NULL COMMENT 'Hora Apertura Evaluación',
  `eva_fch_ape` datetime NOT NULL COMMENT 'Fecha Apertura Evaluación',
  `eva_usr_Ing` varchar(50) NOT NULL COMMENT 'usuario que ingresa evaluación',
  `eva_est` varchar(50) COMMENT 'Estado de Evalaución Vigente o Anulada',
  `eva_fch_cie` datetime COMMENT 'Fecha Cierre Evaluación',
  `eva_hrs_cie` datetime COMMENT 'Hora Cierre Evaluación',
  `eva_analista` varchar(50) COMMENT 'Analista responsable de la evaluación',
  `eva_fch_ent` datetime COMMENT 'Fecha entrega evaluación',
  `eva_hrs_ent` datetime COMMENT 'Hora Entrega Evaluación',
  `eVa_r` varchar(50) COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente',
  PRIMARY KEY(`eva_cod`),
  CONSTRAINT `Ref_10` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Elemento
DROP TABLE IF EXISTS `Elemento`;

CREATE TABLE `Elemento` (
  `elm_id` varchar(50) NOT NULL COMMENT 'ID Elemento',
  `act_cod` varchar(50) NOT NULL,
  `elm_nom` varchar(200) NOT NULL COMMENT 'Nombre elemento',
  `elm_des` varchar(5000) NOT NULL COMMENT 'Descripción elemento',
  `elm_vig` varchar(50) COMMENT 'Campo que indica estado de vigencia, con propósito de no ser visualizado en el futuro',
  `elm_est` int(11) COMMENT 'Es elemento de estimación? valor string = [1 | 0], 1=SI 0 =NO ',
  `elm_eva` int(11) COMMENT 'Es elemento de avaluación? valor string = [1 | 0], 1=SI 0 =NO ',
  `elm_cua` int(11) COMMENT 'Requiere cuentificación? 1 = SI, 2 = NO',
  `elm_tip` varchar(50) COMMENT 'Tipo de Elemento: ESP: Especificación, DES: Descripción',
  PRIMARY KEY(`elm_id`),
  CONSTRAINT `Identifica` FOREIGN KEY (`act_cod`)
    REFERENCES `Actividad`(`act_cod`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
ENGINE=INNODB;

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
  `revQA_cArpeta` varchar(100),
  `revQA_wOrd` varchar(100),
  `revQA_wOrd_rUta` varchar(1000),
  `revQA_REV_fApe` datetime,
  `revQA_REV_hApe` datetime,
  `revQA_REV_fCie` datetime,
  `revQA_REV_hCie` mediumint(9),
  `revQA_REV_cArpeta` varchar(200),
  `revQA_REV_wOrd` varchar(200),
  `revQA_REV_wOrd_rUta` varchar(1000),
  PRIMARY KEY(`revQA_id`),
  CONSTRAINT `Ref_70` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Elm_No_Cuant
DROP TABLE IF EXISTS `Elm_No_Cuant`;

CREATE TABLE `Elm_No_Cuant` (
  `eva_cod` int(11) NOT NULL DEFAULT '0',
  `elm_no_tip` varchar(50) NOT NULL COMMENT 'Tipo = [ IPF | ISF | ILN | IC | IV]',
  `elm_no_elm` varchar(50) NOT NULL COMMENT 'Elemento no cuantificable',
  PRIMARY KEY(`eva_cod`, `elm_no_tip`, `elm_no_elm`),
  CONSTRAINT `Ref_33` FOREIGN KEY (`eva_cod`)
    REFERENCES `Evaluacion`(`eva_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB
COMMENT = 'Esta tabla almacena todos los elementos no cuantificables por evaluación, esto con propósito de identificar las 
caracteristicas de la evaluación para luego poder estimar.';

-- Drop table ACCESO
DROP TABLE IF EXISTS `ACCESO`;

CREATE TABLE `ACCESO` (
  `ACCESO_RUT` int(11) NOT NULL COMMENT 'RUT',
  `MOD_ID` int(11) NOT NULL DEFAULT '0',
  `FUNCION_ID` int(11) NOT NULL DEFAULT '0',
  `ACCESO_SW` int(11) COMMENT 'INDICA 1=ACCESA, 2=NO ACCESA',
  PRIMARY KEY(`ACCESO_RUT`, `MOD_ID`, `FUNCION_ID`),
  CONSTRAINT `Ref_69` FOREIGN KEY (`FUNCION_ID`, `MOD_ID`)
    REFERENCES `FUNCION`(`FUNCION_ID`, `MOD_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Desarrollo
DROP TABLE IF EXISTS `Desarrollo`;

CREATE TABLE `Desarrollo` (
  `des_id` int(11) NOT NULL COMMENT 'ID desarrollo',
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `des_fch_ape` datetime COMMENT 'Fecha de Apertura: estado DESARROLLANDO',
  `des_hrs_ape` datetime COMMENT 'Hora de Apertura: estado DESARROLLANDO',
  `des_fch_cie` datetime COMMENT 'Fecha Cierre: Estado EVALUADA',
  `des_hrs_cie` datetime COMMENT 'Hora Cierre: Estado EVALUADA',
  `des_fch_ent` datetime COMMENT 'Fecha Entrega desarrollo',
  `des_hrs_ent` datetime COMMENT 'Hoea Entrega Estimación',
  `des_analista` varchar(100) COMMENT 'Analista Responsable',
  `dEs_r` char(50) COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente',
  PRIMARY KEY(`des_id`),
  CONSTRAINT `Ref_40` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Asignacion
DROP TABLE IF EXISTS `Asignacion`;

CREATE TABLE `Asignacion` (
  `asig_id` bigint(20) NOT NULL COMMENT 'id asignación',
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `asig_ana` varchar(50) COMMENT 'analista asignado',
  `asig_fch_asig` datetime COMMENT 'Fecha asignación',
  `asig_hrs_asig` datetime COMMENT 'Hora Asignación',
  `asig_usr` varchar(50) COMMENT 'usuario que asigna',
  `asig_fch_est` datetime COMMENT 'fecha Entrega',
  `asig_hrs_est` datetime COMMENT 'hora entrega',
  `asig_tipo` varchar(50) COMMENT 'Tipo de asignación = [ESTIMACIÓN | DESARROLLO | EVALUACIÓN]',
  `aSig_r` varchar(50) COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente',
  PRIMARY KEY(`asig_id`),
  CONSTRAINT `Ref_26` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Estimacion
DROP TABLE IF EXISTS `Estimacion`;

CREATE TABLE `Estimacion` (
  `est_cod` int(11) NOT NULL COMMENT 'codigo de estimación',
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `est_fch_ape` datetime COMMENT 'fecha de ingreso estimación a estado ESTIMANDO ',
  `est_hrs_ape` datetime COMMENT 'Hora ingreso estimación a estado ESTIMANDO',
  `est_fch_cie` datetime COMMENT 'Fecha Cierre estimación a estado ESTIMADA',
  `est_hrs_cie` datetime COMMENT 'Hora cierre estimación a estado ESTIMADA',
  `est_analista` varchar(50) COMMENT 'analista responsable de estimación',
  `est_fch_ent` datetime COMMENT 'Fecha entrega estimación',
  `est_fch_hrs` datetime COMMENT 'Hora entrega estimación',
  `eSt_r` varchar(50) COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente',
  PRIMARY KEY(`est_cod`),
  CONSTRAINT `Ref_27` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Horas_Estimadas
DROP TABLE IF EXISTS `Horas_Estimadas`;

CREATE TABLE `Horas_Estimadas` (
  `hrs_est_id` int(11) NOT NULL COMMENT 'Id Horas Estimadas',
  `est_cod` int(11) NOT NULL DEFAULT '0',
  `hrs_sef_IPF` int(11) COMMENT 'Horas Estimadas IPF por SEF',
  `hrs_sef_ISF` int(11) COMMENT 'Horas Estimadas ISF por SEF',
  `hrs_sef_ILN` int(11) COMMENT 'Horas Estimadas ILN por SEF',
  `hrs_sef_IC` int(11) COMMENT 'Horas Estimadas IC por SEF',
  `hrs_sef_IV` int(11) COMMENT 'Horas Estimadas IV por SEF',
  `hrs_usr_IPF` int(11) COMMENT 'Horas Estimadas IPF por Analista',
  `hrs_usr_ISF` int(11) COMMENT 'Horas Estimadas ISF por Analista',
  `hrs_usr_ILN` int(11) COMMENT 'Horas Estimadas ILN por Analista',
  `hrs_usr_IC` int(11) COMMENT 'Horas Estimadas IC por Analista',
  `hrs_usr_IV` int(11) COMMENT 'Horas Estimadas IV por Analista',
  `hrs_dias_SEF` int(11) COMMENT 'Días SEF',
  `hrs_dias_USR` int(11) COMMENT 'Días USR',
  `hRs_eSt_r` decimal(11,1) COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente',
  PRIMARY KEY(`hrs_est_id`),
  CONSTRAINT `Ref_32` FOREIGN KEY (`est_cod`)
    REFERENCES `Estimacion`(`est_cod`)
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

-- Drop table PRU_PFL_EVA
DROP TABLE IF EXISTS `PRU_PFL_EVA`;

CREATE TABLE `PRU_PFL_EVA` (
  `PFL_usr` varchar(50) NOT NULL,
  `eva_cod` int(11) NOT NULL DEFAULT '0',
  `PFL_EVA_mod` varchar(500) COMMENT 'Módulo en que participa el perfil, copiar directamente de funcionalidad',
  `PFL_EVA_rol` varchar(100) COMMENT 'ROL del perfil en la funcionalidad o perfil',
  `PFL_EVA_des` varchar(5000) COMMENT 'Descripción de la participación del ROL en funcionalidad o Proceso',
  PRIMARY KEY(`PFL_usr`, `eva_cod`),
  CONSTRAINT `Ref_42` FOREIGN KEY (`PFL_usr`)
    REFERENCES `PRU_PFL`(`PFL_usr`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_43` FOREIGN KEY (`eva_cod`)
    REFERENCES `Evaluacion`(`eva_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table PRU_RUT_EVA
DROP TABLE IF EXISTS `PRU_RUT_EVA`;

CREATE TABLE `PRU_RUT_EVA` (
  `RUT_rut` varchar(50) NOT NULL,
  `eva_cod` int(11) NOT NULL DEFAULT '0',
  `RUT_EVA_obj` varchar(5000) COMMENT 'Descripcion u objetivo del RUT en el Contexto de la funcionalidad o proceso',
  `RUT_EVA_mod` varchar(500) COMMENT 'Módulo en que participa RUT, copiar directamente de funcionalidad',
  PRIMARY KEY(`RUT_rut`, `eva_cod`),
  CONSTRAINT `Ref_41` FOREIGN KEY (`RUT_rut`)
    REFERENCES `PRU_RUT`(`RUT_rut`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_44` FOREIGN KEY (`eva_cod`)
    REFERENCES `Evaluacion`(`eva_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB
CHECKSUM = 1;

-- Drop table Detalle_Evaluacion
DROP TABLE IF EXISTS `Detalle_Evaluacion`;

CREATE TABLE `Detalle_Evaluacion` (
  `eva_det_cod` bigint(20) NOT NULL COMMENT 'ID detalle evaluación',
  `elm_id` varchar(50) NOT NULL COMMENT 'ID elemento participante',
  `com_id` varchar(50) NOT NULL COMMENT 'ID complejidad',
  `cri_id` int(11) NOT NULL DEFAULT '0' COMMENT 'ID criterio',
  `eva_cod` int(11) NOT NULL DEFAULT '0' COMMENT 'Código Evaluacón',
  `eva_det_tipo` int(11) COMMENT 'En numero: Tipo de Evaluación: 1=IPF, 2=ISF, 3=ILN, 4=IC, 5=IV',
  `eva_det_req` varchar(50) COMMENT 'En cadena: Identifica Requisito, ej: IPF, ISF, ILN, IC, IV',
  `eva_det_cant` int(11) COMMENT 'Cantidad de elementos de descripción',
  `eva_det_exp` varchar(5000) COMMENT 'Explicación',
  `eva_det_nom` varchar(1000) COMMENT 'Nombre',
  `eva_det_por` varchar(100) COMMENT 'Correspondiente a un pequeño porcentaje del tiempo (IPF, ISF, ILN, IC, IV)',
  `eVa_dEt_r` varchar(50) COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente',
  `correlativo` int(11),
  PRIMARY KEY(`eva_det_cod`),
  CONSTRAINT `Ref_11` FOREIGN KEY (`elm_id`)
    REFERENCES `Elemento`(`elm_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_08` FOREIGN KEY (`com_id`)
    REFERENCES `Complejidad`(`com_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_09` FOREIGN KEY (`cri_id`)
    REFERENCES `Criterio`(`cri_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_07` FOREIGN KEY (`eva_cod`)
    REFERENCES `Evaluacion`(`eva_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Detalle_Estimacion
DROP TABLE IF EXISTS `Detalle_Estimacion`;

CREATE TABLE `Detalle_Estimacion` (
  `est_det_cod` bigint(20) NOT NULL COMMENT 'ID estimación',
  `est_cod` int(11) NOT NULL DEFAULT '0' COMMENT 'codigo estimación',
  `cri_id` int(11) NOT NULL DEFAULT '0' COMMENT 'criterio',
  `com_id` varchar(50) NOT NULL COMMENT 'complejidad',
  `elm_id` varchar(50) NOT NULL,
  `est_det_tipo` int(11) COMMENT 'En numero: Tipo de Evaluación: 1=IPF, 2=ISF, 3=ILN, 4=IC, 5=IV',
  `est_det_req` varchar(50) COMMENT 'En cadena: Identifica Requisito, ej: IPF, ISF, ILN, IC, IV',
  `est_det_cant` int(11) COMMENT 'Cantidad de elementos de descripción',
  `eSt_dEt_r` varchar(50) COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente',
  `eSt_dEt_pAn` varchar(100) COMMENT 'Pantalla',
  PRIMARY KEY(`est_det_cod`),
  CONSTRAINT `Ref_28` FOREIGN KEY (`est_cod`)
    REFERENCES `Estimacion`(`est_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_29` FOREIGN KEY (`cri_id`)
    REFERENCES `Criterio`(`cri_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_30` FOREIGN KEY (`com_id`)
    REFERENCES `Complejidad`(`com_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_31` FOREIGN KEY (`elm_id`)
    REFERENCES `Elemento`(`elm_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

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

-- Drop table PRU_SRV
DROP TABLE IF EXISTS `PRU_SRV`;

CREATE TABLE `PRU_SRV` (
  `SRV_nom` varchar(100) NOT NULL COMMENT 'Servidor en donde se ejecutan las pruebas',
  `eva_cod` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY(`SRV_nom`, `eva_cod`),
  CONSTRAINT `Ref_45` FOREIGN KEY (`eva_cod`)
    REFERENCES `Evaluacion`(`eva_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB
COMMENT = 'Serivdor en donde se ejecutan las pruebas';

-- Drop table Dependencia
DROP TABLE IF EXISTS `Dependencia`;

CREATE TABLE `Dependencia` (
  `dEp_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `dEp_fEc_IN` datetime COMMENT 'Fecha Ingreso',
  `dEp_eSt_oRi` varchar(50) COMMENT 'Estado Origen',
  `dEp_eMail_IN` longblob COMMENT 'Correo IBM Entrada',
  `dEP_eMail_IN_nOm` varchar(500) COMMENT 'Nombre Correo',
  `dEp_mOt` varchar(5000) COMMENT 'Motivo Dependencia',
  `dEp_fEc_OUT` datetime COMMENT 'Fecha Salida',
  `dEp_eMail_OUT` longblob COMMENT 'Correo BECH Salida',
  `dEP_eMail_OUT_nOm` varchar(500) COMMENT 'Nombre Correo Salida',
  `dEp_eStado` varchar(50) COMMENT 'Dependencia = [ABIERTA | CERRADA]',
  `dEp_r` int(11) COMMENT 'R*',
  `dEp_aRc1` blob COMMENT 'BLOB ADJUNTO',
  `dEp_aNa` varchar(100) COMMENT 'Analista',
  `dEp_mOt_cIe` varchar(200) COMMENT 'Motivo del Cierre',
  `dEp_dIa_dEp` int(11) COMMENT 'Días en dependencia',
  `dEp_hRs_dEp` int(11) COMMENT 'Horas en Dependencia',
  PRIMARY KEY(`dEp_id`),
  CONSTRAINT `Ref_55` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Detenido
DROP TABLE IF EXISTS `Detenido`;

CREATE TABLE `Detenido` (
  `dEt_iD` bigint(20) NOT NULL,
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `dEt_fEc_IN` datetime,
  `dEt_eSt_oRi` varchar(100),
  `dEt_eMail_IN` longblob,
  `dEt_eMail_IN_nOm` varchar(500),
  `dEt_mOt` varchar(5000),
  `dEt_fEc_oUt` datetime,
  `dEt_eMail_OUT` longblob,
  `dEt_eMail_OUT_nOm` varchar(500),
  `dEt_eStado` varchar(50),
  `dEt_r` int(11),
  `dEt_aRc1` blob,
  `dEt_aNa` varchar(100),
  `dEt_mOt_cIe` varchar(100),
  PRIMARY KEY(`dEt_iD`),
  CONSTRAINT `Ref_56` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

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
  `RevIn_ExNom` varchar(200),
  `RevIn_Vig` int(11) COMMENT 'Vigente=1; NoVigente=0',
  `RevIn_cOnt` int(11) COMMENT 'Contador',
  `RevIn_iTe` int(11) COMMENT 'Iteración',
  `RevIn_Origen` int(11) COMMENT '1=Revisión Par | 2= Revisión Interna en QA ',
  PRIMARY KEY(`RevIn_ID`),
  CONSTRAINT `Ref_61` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Cierre
DROP TABLE IF EXISTS `Cierre`;

CREATE TABLE `Cierre` (
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `cie_usr` varchar(50) COMMENT 'usuario que cierra',
  `cie_fech` datetime COMMENT 'fecha cierre',
  `cie_hrs` datetime COMMENT 'hora de cierre',
  `cie_nom` varchar(100) COMMENT 'No0mbre FX',
  `cie_desc` varchar(5000) COMMENT 'Descripción',
  `cie_aNa` varchar(200) COMMENT 'Analista',
  PRIMARY KEY(`fun_id`),
  CONSTRAINT `Ref_50` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table R1_Pantalla
DROP TABLE IF EXISTS `R1_Pantalla`;

CREATE TABLE `R1_Pantalla` (
  `pan_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `pan_nom` varchar(200),
  `pan_des` varchar(50) COMMENT 'Identificador EJ: P1',
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY(`pan_id`),
  CONSTRAINT `Ref_51` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Carga_T2K
DROP TABLE IF EXISTS `Carga_T2K`;

CREATE TABLE `Carga_T2K` (
  `cga_id` bigint(20) NOT NULL COMMENT 'Id de Carga T2K',
  `fun_id` bigint(20) NOT NULL DEFAULT '0' COMMENT 'Id de funcionalidad',
  `cga_tot_hrs` varchar(50) COMMENT 'Total Horas cargadas por requisito',
  `cga_req` varchar(50) COMMENT 'Tipo de equsito: IPF, ISF, ILN, IC, IV',
  PRIMARY KEY(`cga_id`),
  CONSTRAINT `Ref_12` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Contrario
DROP TABLE IF EXISTS `Contrario`;

CREATE TABLE `Contrario` (
  `con_id` int(11) NOT NULL COMMENT 'ID relación Elemento Contrario',
  `elm_id` varchar(50) NOT NULL COMMENT 'Elemento ',
  `con_con` varchar(50) NOT NULL COMMENT 'Elemento Contrario',
  PRIMARY KEY(`con_id`),
  CONSTRAINT `Ref_24` FOREIGN KEY (`elm_id`)
    REFERENCES `Elemento`(`elm_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB
COMMENT = 'Tabla contiene el contrario del elemento, esto para evitar incoherencias en la estimación por conceptos.';

-- Drop table Adjunto
DROP TABLE IF EXISTS `Adjunto`;

CREATE TABLE `Adjunto` (
  `adj_cod` bigint(20) NOT NULL COMMENT 'Codigo Adjunto',
  `fun_id` bigint(20) NOT NULL DEFAULT '0',
  `adj_nom` varchar(1500) COMMENT 'Nombre Archivo',
  `adj_des` varchar(5000) COMMENT 'Descripción Archivo',
  `adj_ruta` varchar(5000) COMMENT 'Ruta Archivo',
  `adj_stip` varchar(50) COMMENT 'String determina tipo ej. WRD = Word; EML=EMAIL, XML=XML',
  `adj_Itip` int(11) COMMENT 'Entero Tipo, ej. 1= Word, 2= EMAIL, 3=XML',
  `adj_archivo` longblob COMMENT 'El archivo en Binario',
  `adj_etapa` varchar(50) COMMENT 'Etapa: [INGRESO | DESARROLLO]',
  PRIMARY KEY(`adj_cod`),
  CONSTRAINT `Ref_23` FOREIGN KEY (`fun_id`)
    REFERENCES `Funcionalidad`(`fun_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Rel_ISF_Servicio
DROP TABLE IF EXISTS `Rel_ISF_Servicio`;

CREATE TABLE `Rel_ISF_Servicio` (
  `eva_det_cod` bigint(20) NOT NULL DEFAULT '0',
  `ser_id` varchar(200) NOT NULL,
  `ser_base` varchar(50) NOT NULL,
  `ser_tipo` varchar(50) NOT NULL,
  PRIMARY KEY(`eva_det_cod`),
  CONSTRAINT `Ref_25` FOREIGN KEY (`eva_det_cod`)
    REFERENCES `Detalle_Evaluacion`(`eva_det_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_34` FOREIGN KEY (`ser_id`, `ser_base`, `ser_tipo`)
    REFERENCES `Servicio`(`ser_id`, `ser_base`, `ser_tipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Rel_ISF_Componente
DROP TABLE IF EXISTS `Rel_ISF_Componente`;

CREATE TABLE `Rel_ISF_Componente` (
  `comp_id` bigint(20) NOT NULL DEFAULT '0',
  `eva_det_cod` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY(`comp_id`, `eva_det_cod`),
  CONSTRAINT `Ref_37` FOREIGN KEY (`comp_id`)
    REFERENCES `Componente`(`comp_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_35` FOREIGN KEY (`eva_det_cod`)
    REFERENCES `Detalle_Evaluacion`(`eva_det_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table DET_Revision_IN
DROP TABLE IF EXISTS `DET_Revision_IN`;

CREATE TABLE `DET_Revision_IN` (
  `DetRevIn_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `RevIn_ID` bigint(20) NOT NULL DEFAULT '0',
  `Chk_ID` bigint(20) NOT NULL DEFAULT '0',
  `DetRevIn_ITE` int(11) COMMENT 'Iteración',
  PRIMARY KEY(`DetRevIn_ID`),
  CONSTRAINT `Ref_62` FOREIGN KEY (`RevIn_ID`)
    REFERENCES `Revision_IN`(`RevIn_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_63` FOREIGN KEY (`Chk_ID`)
    REFERENCES `CheckList`(`Chk_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table Rel_ISF_Campo
DROP TABLE IF EXISTS `Rel_ISF_Campo`;

CREATE TABLE `Rel_ISF_Campo` (
  `eva_det_cod` bigint(20) NOT NULL DEFAULT '0',
  `cam_id` varchar(50) NOT NULL,
  `ser_id` varchar(200) NOT NULL,
  PRIMARY KEY(`eva_det_cod`),
  CONSTRAINT `Ref_36` FOREIGN KEY (`eva_det_cod`)
    REFERENCES `Detalle_Evaluacion`(`eva_det_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_46` FOREIGN KEY (`cam_id`, `ser_id`)
    REFERENCES `Campo`(`cam_id`, `ser_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

-- Drop table R1_Detalle_Evaluacion
DROP TABLE IF EXISTS `R1_Detalle_Evaluacion`;

CREATE TABLE `R1_Detalle_Evaluacion` (
  `eva_det_cod` bigint(20) NOT NULL AUTO_INCREMENT,
  `eva_cod` int(11) NOT NULL DEFAULT '0',
  `pan_id` bigint(20) NOT NULL DEFAULT '0',
  `ser_id` varchar(200) NOT NULL,
  `ser_base` varchar(50) NOT NULL,
  `ser_tipo` varchar(50) NOT NULL,
  `eva_det_tip` varchar(50),
  `eva_det_lbl` varchar(100),
  `eva_det_des` varchar(2000),
  `correlativo` int(11),
  PRIMARY KEY(`eva_det_cod`),
  CONSTRAINT `Ref_52` FOREIGN KEY (`pan_id`)
    REFERENCES `R1_Pantalla`(`pan_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_53` FOREIGN KEY (`ser_id`, `ser_base`, `ser_tipo`)
    REFERENCES `Servicio`(`ser_id`, `ser_base`, `ser_tipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Ref_54` FOREIGN KEY (`eva_cod`)
    REFERENCES `Evaluacion`(`eva_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=INNODB;

SET FOREIGN_KEY_CHECKS=1;

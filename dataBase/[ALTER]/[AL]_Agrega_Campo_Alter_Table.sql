  
-- select * from cierre
-- select * from detenido
-- select * from asignacion
-- select * from servicio

-- update cierre set cie_id = 0 

-- `CLI_RUT` int(11) NOT NULL,

alter table dependencia
  add dEp_ARc2 longblob; 
  
  alter table dependencia
  add dEp_ARc2_nOm VARCHAR(100); 

alter table funcion
add FUNCION_PAD int(11);

alter table MODULO
  add MOD_FOR VARCHAR(1000)

alter table funcion
add FUNCION_LID int(11);

alter table cliente
  add CLI_RUT_DV VARCHAR(1)

alter table cliente
  add CLI_RUT int(11) 

alter table servicio
  add sEr_fEc_iNg datetime 

alter table servicio
  add sEr_hRs_iNg datetime 

alter table servicio
  add sEr_fEc_mOd datetime 

alter table servicio
  add sEr_hRs_mOd datetime





alter table asignacion
add aSig_nOm_aRc varchar(300);

 alter table asignacion  
 add aSig_aRc LONGBLOB COMMENT 'Archivo adjunto en correo de asignación';

alter table asignacion
add aSig_DES varchar(1000);

alter table asignacion
add aSig_vIg varchar(10);

alter table cierre
add cIe_aRc_rTa varchar(500);

alter table cierre
add cIe_aRc_nOm varchar(300);

alter table cierre
add cIe_id integer;

alter table TM_ANALISTAS
  add AN_FEC_ING datetime 

alter table TM_ANALISTAS
  add AN_HRS_ING datetime 

alter table CLIENTE
  add CLI_FEC_ING datetime 

alter table CLIENTE
  add CLI_HRS_ING datetime 

alter table dependencia
  add dEp_fEc_aCt datetime 

alter table dependencia
  add dEp_hRs_aCt datetime 

alter table funcionalidad
add fUn_DTF integer;

alter table tm_analistas
add an_PAS VARCHAR(50);

alter table tm_analistas
add an_EML VARCHAR(300);

alter table dependencia
  add dEp_cli varchar(200) COMMENT 'Cliente Copiado';

alter table tm_analistas
add an_Id integer;

alter table checklist
add chk_rGl  varchar(100) DEFAULT NULL COMMENT 'Regla';
alter table checklist
add chk_cIc  varchar(100) DEFAULT NULL COMMENT 'Ciclo';
alter table checklist
add chk_hRs_Out datetime DEFAULT NULL COMMENT 'Hora Baja';
alter table checklist
add chk_fEc_Out datetime DEFAULT NULL COMMENT 'Fecha Baja';
alter table checklist
add chk_hRs_IN datetime DEFAULT NULL COMMENT 'Hora Ingreso';
alter table checklist
add chk_fEc_IN datetime DEFAULT NULL COMMENT 'Fecha Ingreso';

alter table checklist
add chk_hRs_Out datetime COMMENT 'Hora Baja';

alter table checklist
add chk_fEc_Out datetime COMMENT 'Fecha Baja';

alter table checklist
add chk_hRs_IN datetime COMMENT 'Hora Ingreso';

alter table checklist
add chk_fEc_IN datetime COMMENT 'Fecha Ingreso';

alter table checklist
add chk_rGl varchar(100) COMMENT 'Regla';

alter table checklist
add chk_cIc varchar(100) COMMENT 'Ciclo';

alter table funcionalidad
add fun_cGa varchar(100) COMMENT 'Carga';

alter table funcionalidad
  add fun_pEd varchar(100) COMMENT 'Pedida';

alter table funcionalidad
  add fun_aTe varchar(100) COMMENT 'Atencion';

alter table detenido
  add dEt_hRs_IN datetime COMMENT 'hora detención';

alter table detenido
  add dEt_hRs_OUT datetime COMMENT 'hora salida';

alter table cierre
  add cie_eSt_oRi varchar(200) COMMENT 'Estado de Origen';

alter table dependencia
  add dEp_mOt_cIe varchar(200) COMMENT 'motivo del cierre';

alter table cierre
  add cie_aNa varchar(200) COMMENT 'Analista';

alter table detalle_estimacion
  add correlativo bigint unsigned not null;

select * from detalle_estimacion


-- Modificaciones a Tabla Funcionalidad

  alter table funcionalidad
  add fun_obj varchar(2000) COMMENT 'Objetivo';
  
  alter table funcionalidad
  add fun_pre varchar(2000) COMMENT 'Precondición';
  
  alter table funcionalidad
  add fun_pos varchar(2000) COMMENT 'Postcondición';

  alter table funcionalidad
  add fun_tip int(11) NOT NULL COMMENT 'Para determinar si es R1';
  
  select * from funcionalidad

-- Modificación a tabla SERVICIO

select * from servicio

  alter table servicio  
  add SER_ARC LONGBLOB COMMENT 'ESP de servicio, EN WORD';

  alter table servicio  
  add sEr_r int(11) NOT NULL COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente';

  alter table servicio  
  add sEr_dEs varchar(3000) COMMENT 'Descripción Servicio';

  alter table servicio  
  add sEr_pAl1 varchar(50) COMMENT 'Palabra de Negocio 1';
  
  alter table servicio  
  add sEr_pAl2 varchar(50) COMMENT 'Palabra de Negocio 2';

  alter table servicio  
  add sEr_pAl3 varchar(50) COMMENT 'Palabra de Negocio 3';
  
  alter table servicio  
  add sEr_aAc1 varchar(50) COMMENT 'acción 1';

  alter table servicio  
  add sEr_aAc2 varchar(50) COMMENT 'acción 2';

  alter table servicio  
  add sEr_aAc3 varchar(50) COMMENT 'acción 3';

  alter table servicio  
  add sEr_mOd varchar(100) COMMENT 'módulo 3';

  alter table servicio  
  add sEr_mOd2 varchar(100) COMMENT 'módulo 3';

  alter table servicio  
  add sEr_mOd3 varchar(100) COMMENT 'módulo 3';

  alter table servicio  
  add sEr_nOm varchar(200) COMMENT 'nombre archivo word';

  select * from desarrollo

  alter table desarrollo  
  add dEs_mAil LONGBLOB COMMENT 'correo adjunto';

  

-- Modificación a tabla Analistas
  alter table TM_ANALISTAS
  add aN_r int(11) NOT NULL COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente';

-- Modificación a tabla Estimación
  alter table estimacion
  add eSt_r int(11) NOT NULL COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente';

-- Modificación a tabla Desarrollo
  alter table desarrollo
  add dEs_r int(11) NOT NULL COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente';

-- Modificación a tabla Evaluación
  alter table evaluacion
  add eVa_r int(11) NOT NULL COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente';

-- Modificación a tabla Detalla_Evaluación
  alter table detalle_evaluacion
  add eVa_dEt_r int(11) NOT NULL COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente';

-- Modificación a tabla Horas_Estimadas
  alter table Horas_Estimadas
  add hRs_eSt_r decimal(11,1) COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente';

-- Modificaciones a Tabla detalle_estimacion

  alter table detalle_estimacion
  add eSt_dEt_r int(11) NOT NULL COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente';
  
  alter table detalle_estimacion  
  add eSt_dEt_pAn varchar(100) COMMENT 'Pantalla';
  
  select * from detalle_estimacion
  
-- Modificaciones a Tabla ASIGNACION

  alter table asignacion
  add aSig_r int(11) NOT NULL COMMENT 'Determina si se trata de R0 o R1 valores 0 y 1 respectivamente';
 
  select * from asignacion ORDER BY asig_fch_asig DESC;
  
  alter table R1_Detalle_Evaluacion
  add correlativo int(11) NOT NULL COMMENT 'correlativo';

-- Tabla Pnatallas para R1

select * from R1_Pantalla

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

ALTER TABLE R1_Pantalla MODIFY pan_nom varchar(200);

-- Agregamos Tabla R1_Detalle_Evaluacion

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

-- Nuevo Requisito
insert into requisito (rec_id, rec_nom, rec_des, rec_vig) values 
                      ('R1', 'IDENTIFICACIÓN DE COMPORTAMIENTO Y SERVICIOS', 
                      'IDENTIFICACIÓN DE COMPORTAMIENTO Y SERVICIOS', 1);

select * from requisito;

-- Nuevas Actividades

select * FROM actividad

insert into actividad
( 
  act_cod ,
  rec_id  ,
  act_nom ,
  act_des ,
  act_vig
)
values
(
  'IE',
  'R1',
  'IDENTIFICACIÓN DE COMPORTAMIENTO ASOCIADO AL EVENTO',
  'IDENTIFICACIÓN DE COMPORTAMIENTO ASOCIADO AL EVENTO',
  1
);

insert into actividad
( 
  act_cod ,
  rec_id  ,
  act_nom ,
  act_des ,
  act_vig
)
values
(
  'IS',
  'R1',
  'IDENTIFICACIÓN DE SERVICIOS ASOCIADOS AL EVENTO',
  'IDENTIFICACIÓN DE SERVICIOS ASOCIADOS AL EVENTO',
  1
);

insert into actividad
( 
  act_cod ,
  rec_id  ,
  act_nom ,
  act_des ,
  act_vig
)
values
(
  'ICA',
  'R1',
  'IDENTIFICACIÓN DE CAMPOS DEL SERVICIO EN PANTALLA',
  'IDENTIFICACIÓN DE CAMPOS DEL SERVICIO EN PANTALLA',
  1
);

insert into actividad
( 
  act_cod ,
  rec_id  ,
  act_nom ,
  act_des ,
  act_vig
)
values
(
  'CDN',
  'R1',
  'CONFECCIÓN DEL DIAGRAMA DE NAVEGABILIDAD',
  'CONFECCIÓN DEL DIAGRAMA DE NAVEGABILIDAD',
  1
);

insert into actividad
( 
  act_cod ,
  rec_id  ,
  act_nom ,
  act_des ,
  act_vig
)
values
(
  'DPES',
  'R1',
  'DESCRIPCIÓN DE PARÁMETROS DE ENTRADA Y SALIDA',
  'DESCRIPCIÓN DE PARÁMETROS DE ENTRADA Y SALIDA',
  1
);

insert into actividad
( 
  act_cod ,
  rec_id  ,
  act_nom ,
  act_des ,
  act_vig
)
values
(
  'DDS',
  'R1',
  'DESCRIPCIÓN DE SERVICIOS',
  'DESCRIPCIÓN DE SERVICIOS',
  1
);

select * from actividad

-- Nuevos Elementos
select * from elemento where elm_r = 1;

alter table elemento
  add elm_r int(11) NOT NULL COMMENT 'Para determinar R*';

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('EV1', 'IE', 'BAJA CANTIDAD DE EVENTOS', 'BAJA CANTIDAD DE EVENTOS',1,0,0,1,'DES',1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('EV2', 'IE', 'MEDIA CANTIDAD DE EVENTOS', 'MEDIA CANTIDAD DE EVENTOS',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('EV3', 'IE', 'ALTA CANTIDAD DE EVENTOS', 'ALTA CANTIDAD DE EVENTOS',1,0,0,1,'DES', 1);



Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('SE1', 'IS', 'BAJA CANTIDAD DE SERVICIOS', 'BAJA CANTIDAD DE SERVICIOS',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('SE2', 'IS', 'MEDIA CANTIDAD DE SERVICIOS', 'MEDIA CANTIDAD DE SERVICIOS',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('SE3', 'IS', 'ALTA CANTIDAD DE SERVICIOS', 'ALTA CANTIDAD DE SERVICIOS',1,0,0,1,'DES', 1);



Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('CA1', 'ICA', 'BAJA CANTIDAD DE CAMPOS', 'BAJA CANTIDAD DE CAMPOS',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('CA2', 'ICA', 'MEDIA CANTIDAD DE CAMPOS', 'MEDIA CANTIDAD DE CAMPOS',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('CA3', 'ICA', 'ALTA CANTIDAD DE CAMPOS', 'ALTA CANTIDAD DE CAMPOS',1,0,0,1,'DES', 1);



Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('DI1', 'CDN', 'DIAGRAMA NAVEGACIÓN SIMPLE', 'DIAGRAMA NAVEGACIÓN SIMPLE',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('DI2', 'CDN', 'DIAGRAMA NAVEGACIÓN MEDIO', 'DIAGRAMA NAVEGACIÓN MEDIO',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('DI3', 'CDN', 'DIAGRAMA NAVEGACIÓN COMPLEJO', 'DIAGRAMA NAVEGACIÓN COMPLEJO',1,0,0,1,'DES', 1);



Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('PI1', 'DPES', 'BAJA CANTIDAD PARÁMETROS DE ENTRADA', 'BAJA CANTIDAD PARÁMETROS DE ENTRADA',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('PI2', 'DPES', 'MEDIA CANTIDAD PARÁMETROS DE ENTRADA', 'MEDIA CANTIDAD PARÁMETROS DE ENTRADA',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('PI3', 'DPES', 'ALTA CANTIDAD PARÁMETROS DE ENTRADA', 'ALTA CANTIDAD PARÁMETROS DE ENTRADA',1,0,0,1,'DES', 1);



Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('PS1', 'DPES', 'BAJA CANTIDAD PARÁMETROS DE SALIDA', 'BAJA CANTIDAD PARÁMETROS DE SALIDA',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('PS2', 'DPES', 'BAJA CANTIDAD PARÁMETROS DE SALIDA', 'BAJA CANTIDAD PARÁMETROS DE SALIDA',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('PS3', 'DPES', 'BAJA CANTIDAD PARÁMETROS DE SALIDA', 'BAJA CANTIDAD PARÁMETROS DE SALIDA',1,0,0,1,'DES', 1);



Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('DS1', 'DDS', 'BAJA CANTIDAD DE SERVICIOS A DESCRIBIR', 'BAJA CANTIDAD DE SERVICIOS A DESCRIBIR',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('DS2', 'DDS', 'MEDIA CANTIDAD DE SERVICIOS A DESCRIBIR', 'MEDIA CANTIDAD DE SERVICIOS A DESCRIBIR',1,0,0,1,'DES', 1);

Insert into elemento
(elm_id, act_cod, elm_nom, elm_des, elm_vig, elm_est, elm_eva, elm_cua, elm_tip, elm_r)
Values
('DS3', 'DDS', 'ALTA CANTIDAD DE SERVICIOS A DESCRIBIR', 'ALTA CANTIDAD DE SERVICIOS A DESCRIBIR',1,0,0,1,'DES',1);


alter table profesional
add pTipo2 varchar(200) COMMENT 'Tipo en palabras, ejemplo: Personal Trainer';


-- select * from profesional
alter table profesional
mod pFotoPre varchar(200) COMMENT 'URL de foto del profesional';


alter table profesional
modify pEsp varchar(200) COMMENT 'Especialidad del profesional, ej: musculación';

alter table comentario_publicacion
add cpPer integer COMMENT 'Perfil en plataforma que realiza la publicación. 1 = Profesional, 2 = Usuario';

alter table profesional
add pAleas varchar(100) COMMENT 'Aleas del profesional';

alter table publicacion
add puTip varchar(100) COMMENT 'LA PUBLICACIÓN PUEDE SER DEL TIPO: 1. ARTÍCULO 2. EVENTO 3. ENTREVISTA 4. ETC.';

alter table publicacion
add puRutImg varchar(1000) COMMENT 'RUTA DONDE SE ALOJA LA IMAGEN';

alter table publicacion
add puNomImg varchar(100) COMMENT 'NOMBRE IMAGEN';

alter table publicacion
add puPosImg INTEGER COMMENT 'sw indicador de posee imagen';


alter table profesional
drop PURLLINK

alter table profesional
drop PURLTWITTER

alter table profesional
drop PURLFACEBOOK

alter table profesional
drop PIDFLICKR

alter table profesional
drop pFotoPre

alter table profesional
drop pTxtoPre

alter table profesional
add pFotoPre varchar(100) COMMENT 'FOTO PRESENTACION';

alter table profesional
add pTxtoPre varchar(2000) COMMENT 'TEXTO PRESENTACION';

-- select * from usuario
alter table usuario
drop UESALUMNO

alter table rol
add rTip varchar(50) COMMENT 'TIPO DE ROL';

alter table rol
add rRut varchar(8);

alter table rol
add rDv varchar(1);

alter table servicio
add seIdFli varchar(20);


alter table profesional
add pEst varchar(20);

alter table interno
add rEst varchar(20);

alter table complementador
add compEst varchar(20);




-- select * from profesional
alter table profesional
modify pfotopre varchar(28) COMMENT 'ID Foto presentación profesional';

-- select * from portafolio
alter table portafolio
modify POIDFLI varchar(28) COMMENT 'ID Foto portafolio';

-- select * from slider
alter table slider
modify SDFL varchar(28) COMMENT 'ID Foto SLIDER';


-- select * from publicacion
alter table publicacion
modify PUIMG varchar(28) COMMENT 'ID Foto principal PUBLICACIÓN google drive';

-- select * from estudios
alter table estudios
modify ESANOSEST varchar(50) COMMENT 'AÑOS DE ESTUDIO';

-- select * from experiencia
alter table experiencia
add exTa integer COMMENT 'indicador trabajo actual';

alter table experiencia
modify exTa varchar(2) COMMENT 'indicador trabajo actual';

-- select * from estudios
alter table estudios
add esDes varchar(2000) COMMENT 'descripcion de la formacion';

ALTER TABLE profesional_producto CHANGE PROPPRENET PROPPREBRU BIGINT(20);

ALTER TABLE CARRO_DETALLE CHANGE cad_pne cad_pbr BIGINT(20);
ALTER TABLE CARRO_DETALLE CHANGE cad_tne cad_tbr BIGINT(20);


-- SELECT * FROM PROFESIONAL
ALTER TABLE PROFESIONAL CHANGE PIDFOTOFLICKR PIDFOTO VARCHAR(300);
ALTER TABLE PROFESIONAL CHANGE pFotoPre pFotoPre VARCHAR(300);


alter table profesional
add pNom varchar(100);

alter table profesional
add pApe varchar(100);

alter table profesional
drop pNom1;

alter table profesional
drop pNom2;

alter table profesional
drop pApe1;

alter table profesional
drop pApe2;

alter table profesional
add pFecIng datetime;

alter table profesional
modify pEst INTEGER COMMENT 'ESTADO DEL PROFESIONAL';

alter table profesional
add pId bigint;

alter table profesional
add pFecNac date;


SELECT * FROM USUARIO;

alter table USUARIO
drop URUT;

alter table USUARIO
drop UDV;

alter table usuario
add uClaRec VARCHAR(50);

alter table usuario
add uEstClaRec INTEGER;

alter table producto
add proFm datetime;

alter table producto
drop proMo;

alter table producto
modify proPo VARCHAR(4) COMMENT 'Porcentaje comisión profesional';

SELECT * FROM PRODUCTO;

ALTER TABLE PRODUCTO CHANGE PROUT PROUT1 bigint;

alter table PRODUCTO
add PROUT2 bigint;

alter table PRODUCTO
add PROUT3 bigint;

alter table PRODUCTO
add PROCT2 bigint;

alter table PRODUCTO
add PROPVPIVA bigint;

alter table PRODUCTO
add PROPVPNET bigint;

alter table producto_categoria1
add PCP1_GD VARCHAR(50) 

alter table producto_categoria2
add PCP2_GD2 VARCHAR(50) 

alter table producto_categoria3
add pcp3_GD2 VARCHAR(50) 

alter table catalogo_slider1
add CS1CO BIGINT COMMENT 'ID DE COLECCIÓN';

alter table catalogo_slider2
drop CS1CO;

alter table catalogo_slider2
drop CS1PR;

alter table catalogo_slider2
add CS2CO BIGINT COMMENT 'ID DE COLECCIÓN';

alter table catalogo_slider2
add CS2PO BIGINT COMMENT 'ID DEL PRODUCTO';


alter table catalogo_slider3
add CS3CO BIGINT COMMENT 'ID DE COLECCIÓN';



alter table catalogo_slider4
add CS4PO1 BIGINT COMMENT 'ID DE PRODUCTO';

alter table catalogo_slider4
add CS4PO2 BIGINT COMMENT 'ID DE PRODUCTO';

alter table catalogo_slider4
add CS4PO3 BIGINT COMMENT 'ID DE PRODUCTO';

alter table catalogo_slider4
add CS4PO4 BIGINT COMMENT 'ID DE PRODUCTO';

alter table catalogo_slider5
add CS5CO BIGINT COMMENT 'ID DE COLECCION';

alter table catalogo_slider6
add CS6PO1 BIGINT COMMENT 'ID DE PRODUCTO';

alter table catalogo_slider6
add CS6PO2 BIGINT COMMENT 'ID DE PRODUCTO';

alter table catalogo_slider6
add CS6PO3 BIGINT COMMENT 'ID DE PRODUCTO';

alter table catalogo_slider7
add CS7PO BIGINT COMMENT 'ID DE COLECCIÓN';

alter table producto
add proPvaPub BIGINT COMMENT 'PRECIO VTA ANTERIOR PUB';

alter table producto
add proPvaPro BIGINT COMMENT 'PRECIO VTA ANTERIOR PRO';

alter table producto
add PETID BIGINT COMMENT 'ID DE ETIQUETA';

alter table PRODUCTO add constraint FK_DESCTO_PARA_MUCHOS foreign key (PETID)
references PRODUCTO_ETIQUETA (PETID) on delete restrict on update restrict;

alter table producto
add proEnVi BIGINT COMMENT 'INDICADOR PRODUCTO EN VITRINA';


alter table coleccion
add coGD3 VARCHAR(50);

alter table catalogo_slider6
drop CS6P1;

alter table catalogo_slider6
drop CS6P2;

alter table catalogo_slider6
drop CS6P3;


select * from catalogo_slider2;

alter table catalogo_slider2
drop CS2PR;


alter table PRODUCTO
add RAN_ID BIGINT COMMENT 'ID DE RANGO DE PRECIO' DEFAULT 0;

ALTER TABLE PRODUCTO CHANGE RAN_ID ran_id_pro bigint;

alter table PRODUCTO
add ran_id_cli BIGINT COMMENT 'ID DE RANGO para CLIENTES' DEFAULT 0;

alter table PRODUCTO
add marId BIGINT COMMENT 'ID MARCA' DEFAULT 0;


alter table PRODUCTO add constraint FK_PRODUCTO_POSEE_MARCA foreign key (MARID)
      references MARCAS (MARID) on delete restrict on update restrict;


-- select * from producto
alter table producto
drop PROMA;

alter table producto
add proMa VARCHAR(100);

alter table COLECCION
add coGD4 VARCHAR(50);

alter table COLECCION
add coEnMenu INTEGER;

alter table catalogo_slider1
add cs1co VARCHAR(10);

alter table CATALOGO_SLIDER5
add cs5Co VARCHAR(10);

alter table catalogo_slider5
drop D5Co;

alter table CATALOGO_SLIDER7
add cs7Po VARCHAR(10);




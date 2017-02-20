/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     04-05-2015 16:19:46                          */
/*==============================================================*/


drop table if exists ALU_PRO;

drop table if exists CATEGORIA_ETIQUETA;

drop table if exists COMENTARIO;

drop table if exists COMENTARIO_PUBLICACION;

drop table if exists COMUNA;

drop table if exists CURRICULUM;

drop table if exists DETALLE_PORTAFOLIO;

drop table if exists DETALLE_PRODUCTO_WEB;

drop table if exists DETALLE_SERVICIO;

drop table if exists DIRECCION;

drop table if exists ESTUDIOS;

drop table if exists ETIQUETA;

drop table if exists EXPERIENCIA;

drop table if exists LOGIN;

drop table if exists LOGIN_PROF;

drop table if exists OTRO;

drop table if exists PORTAFOLIO;

drop table if exists PRODUCTO_WEB;

drop table if exists PROFESIONAL;

drop table if exists PRO_PRO_WEB;

drop table if exists PRO_SLI_INT;

drop table if exists PUBLICACION;

drop table if exists PUBLICACION_ETIQUETA;

drop table if exists PUBLICACION_REFERENCIA;

drop table if exists REFERENCIA;

drop table if exists REGION;

drop table if exists RESUMENALUMNOS;

drop table if exists SERVICIO;

drop table if exists SLIDER;

drop table if exists SLIDER_INTERNO;

drop table if exists USUARIO;

/*==============================================================*/
/* Table: ALU_PRO                                               */
/*==============================================================*/
create table ALU_PRO
(
   ALU_PRO_ID           bigint not null auto_increment,
   UMAIL                varchar(50) not null,
   PRUT                 varchar(20) not null,
   primary key (ALU_PRO_ID)
);

alter table ALU_PRO comment 'Contiene relación entre profesional y alumno';

/*==============================================================*/
/* Table: CATEGORIA_ETIQUETA                                    */
/*==============================================================*/
create table CATEGORIA_ETIQUETA
(
   CATETINOM            varchar(50) not null,
   PRUT                 varchar(20) not null,
   primary key (CATETINOM)
);

/*==============================================================*/
/* Table: COMENTARIO                                            */
/*==============================================================*/
create table COMENTARIO
(
   COMID                bigint not null auto_increment,
   ALU_PRO_ID           bigint not null,
   COMFEC               datetime,
   COMTIPO              varchar(30) comment 'comTipo=[ POSITIVO | NEGATIVO | IMPARCIAL ]',
   COMPUBLICAR          varchar(2) comment 'comPublicar = [SI | NO ]
            indica si el comentario será publicado en la web asociada al profesional',
   primary key (COMID)
);

/*==============================================================*/
/* Table: COMENTARIO_PUBLICACION                                */
/*==============================================================*/
create table COMENTARIO_PUBLICACION
(
   CPID                 bigint not null auto_increment,
   UMAIL                varchar(50) not null,
   PUID                 bigint not null,
   CPFEC                datetime,
   CPDET                varchar(200),
   primary key (CPID)
);

/*==============================================================*/
/* Table: COMUNA                                                */
/*==============================================================*/
create table COMUNA
(
   CCOD                 int not null,
   CNOM                 varchar(100),
   primary key (CCOD)
);

/*==============================================================*/
/* Table: CURRICULUM                                            */
/*==============================================================*/
create table CURRICULUM
(
   CURID                bigint not null auto_increment,
   PRUT                 varchar(20) not null,
   CURFECING            datetime,
   CURFECMOD            datetime,
   CUREST               int comment 'Estado deslizador.
            sEst = [ 0 | 1 ]
            0=incompleto
            1=completo
            
            Cuando el profesonal finaliza de completar la información.
            ',
   CURDES               varchar(300),
   CURTIT               varchar(50),
   primary key (CURID)
);

/*==============================================================*/
/* Table: DETALLE_PORTAFOLIO                                    */
/*==============================================================*/
create table DETALLE_PORTAFOLIO
(
   DPOID                bigint not null auto_increment,
   POID                 int not null,
   DPOLABEL             varchar(20),
   DPOCAPTION           varchar(20),
   DPOIMG               varchar(50),
   DPOTITULO            varchar(40),
   DPOTIPO              varchar(50) comment 'Categorización del registro.
            dpoTip=[ TRABAJO | PERSONAL | VIDEO ]',
   DPODISCIPLINA        varchar(50) comment 'Disciplina:
            
            BodyJamp
            CroosFit
            BodyPump
            PowerPump
            Aerobox
            Zumba
            Spinning',
   DPOCONTEXTO          varchar(50) comment 'Contexto de la Foto: Entrenamiento en Ginmasio, Entrenamiento en Piscina, etc.',
   DPOPARRAFO           varchar(390) comment 'Parrafo descriptivo de la foto',
   DPOPOS               int,
   primary key (DPOID)
);

/*==============================================================*/
/* Table: DETALLE_PRODUCTO_WEB                                  */
/*==============================================================*/
create table DETALLE_PRODUCTO_WEB
(
   DPID2                int not null auto_increment comment 'identificador de instancia',
   PWID                 bigint not null,
   DPRTHULABEL          varchar(20) comment 'etiqueta de Thumbnail ',
   DPRTHUCAPTION        varchar(20) comment 'caption de Thumbnail ',
   DPRIMG               varchar(50) comment 'identificador de imagen compartida publica en flickr',
   DPRTIT               varchar(40) comment 'titulo de la foto',
   DPRPAR               varchar(390) comment 'parrafor, descripción de la foto',
   DPRCAT               varchar(50) comment 'categoria',
   primary key (DPID2)
);

/*==============================================================*/
/* Table: DETALLE_SERVICIO                                      */
/*==============================================================*/
create table DETALLE_SERVICIO
(
   DSID                 int not null auto_increment,
   SEID                 int,
   DSIMG                varchar(50) comment 'Numero, ID de imagen obtenido de Flickr',
   DSTIT                varchar(35),
   DSPAR                varchar(140),
   DEPOS                bigint,
   primary key (DSID)
);

/*==============================================================*/
/* Table: DIRECCION                                             */
/*==============================================================*/
create table DIRECCION
(
   DCOD                 bigint not null auto_increment,
   CCOD                 int not null,
   PRUT                 varchar(20) not null,
   RCOD                 int not null,
   DCODTIPO             int,
   DNOMTIPO             varchar(50) comment 'PARTICULAR | COMERCIAL',
   DCALLE               varchar(100),
   DVILLAPOB            varchar(100) comment 'VILLA | POBLACIÓN',
   DNUMERO              varchar(100) comment 'numero vivienda
            ',
   DWEB                 bool comment 'determina la dirección que será mostrada en la web',
   primary key (DCOD)
);

/*==============================================================*/
/* Table: ESTUDIOS                                              */
/*==============================================================*/
create table ESTUDIOS
(
   ESID                 bigint not null auto_increment,
   CURID                bigint not null,
   ESNOM                varchar(100) comment 'Nombre del titulo profesional, tecnico o certificación',
   ESTIPO               varchar(50) comment 'Tecnico, Profesional, Grado Académico, Certificación',
   ESINST               varchar(100) comment 'Institución donde estudió',
   ESNOMCON             varchar(50) comment 'esNomCon=[TITULADO|EGRESADO|ESTUDIANTE]
            TITULADO=1
            EGRESADO=2
            ESTUDIANTE=3
            ',
   ESCODCON             int comment 'esConCon=[ 1 | 2 | 3 ]
            TITULADO=1
            EGRESADO=2
            ESTUDIANTE=3',
   ESIMG                varchar(50),
   ESPOS                int,
   ESFECHA              date,
   ESANOSEST            int comment 'años de estudio, lo que dura la carrera.',
   primary key (ESID)
);

alter table ESTUDIOS comment 'Tecnico, Profesional, Grado académico o certificación.';

/*==============================================================*/
/* Table: ETIQUETA                                              */
/*==============================================================*/
create table ETIQUETA
(
   ETNOM                varchar(100) not null,
   CATETINOM            varchar(50) not null,
   PRUT                 varchar(20) not null,
   primary key (ETNOM, CATETINOM)
);

/*==============================================================*/
/* Table: EXPERIENCIA                                           */
/*==============================================================*/
create table EXPERIENCIA
(
   EXID                 bigint not null auto_increment,
   CURID                bigint not null,
   EXCARGO              varchar(100) comment 'cargo desempeñado',
   EXINS                varchar(100) comment 'instiutución / empresa',
   EXDES                varchar(300) comment 'descripción del cargo',
   EXFECDES             date comment 'fecha desde',
   EXFECHAS             date comment 'fecha hasta',
   EXIMG                varchar(50),
   EXANOS               int comment 'años de trabajo en base a fecha de inicio y termino',
   EXMESES              int comment 'meses de trabajo en base a fecha de inicio y termino',
   EXDIAS               int comment 'dias de trabajo en base a fecha de inicio y termino',
   primary key (EXID)
);

/*==============================================================*/
/* Table: LOGIN                                                 */
/*==============================================================*/
create table LOGIN
(
   LGN_ID               bigint not null auto_increment,
   UMAIL                varchar(50),
   LGN_FECHA            datetime,
   primary key (LGN_ID)
);

/*==============================================================*/
/* Table: LOGIN_PROF                                            */
/*==============================================================*/
create table LOGIN_PROF
(
   LGNPID               bigint not null auto_increment,
   PRUT                 varchar(20) not null,
   LGNPFECHA            datetime,
   primary key (LGNPID)
);

/*==============================================================*/
/* Table: OTRO                                                  */
/*==============================================================*/
create table OTRO
(
   OTID                 bigint not null auto_increment,
   CURID                bigint not null,
   OTNOM                varchar(100) comment 'Nombre Congreso, Torneo, etc.',
   OTTIPO               int comment '1=CURSO
            2=CONGRESO
            3=SEMINARIO
            4=CAMPEONATO',
   OTDES                varchar(300),
   OTFECHA              date,
   OTIMG                varchar(50),
   primary key (OTID)
);

alter table OTRO comment 'seminario, torneo, congreso, etc.';

/*==============================================================*/
/* Table: PORTAFOLIO                                            */
/*==============================================================*/
create table PORTAFOLIO
(
   POID                 int not null auto_increment,
   PRUT                 varchar(20) not null,
   POTIT                varchar(50),
   POPA                 varchar(370),
   POEST                int comment 'Estado deslizador.
            sEst = [ 0 | 1 ]
            0=incompleto
            1=completo
            
            Cuando el profesonal finaliza de completar la información.
            ',
   primary key (POID)
);

/*==============================================================*/
/* Table: PRODUCTO_WEB                                          */
/*==============================================================*/
create table PRODUCTO_WEB
(
   PWID                 bigint not null auto_increment,
   PWTIT                varchar(50),
   PWDES                varchar(400) comment 'descripcion',
   PWFRA                varchar(200) comment 'Frase al fin',
   PWEST                int comment '1=ACTIVO
            2=NO ACTIVO',
   primary key (PWID)
);

/*==============================================================*/
/* Table: PROFESIONAL                                           */
/*==============================================================*/
create table PROFESIONAL
(
   PRUT                 varchar(20) not null,
   PDV                  varchar(1),
   PNOM1                varchar(100),
   PNOM2                varchar(100),
   PAPE1                varchar(100),
   PAPE2                varchar(100),
   PMAIL                varchar(100),
   PMAILBFX             varchar(100),
   PFONO                varchar(50) comment 'fono red fija',
   PCELULAR             varchar(50) comment 'fono celular',
   PURLLINK             varchar(100) comment 'URL pefil Linkedin ',
   PURLTWITTER          varchar(100),
   PURLFACEBOOK         varchar(100),
   PIDFLICKR            varchar(50) comment 'identificador de usuario en Flickr',
   PIDFOTOFLICKR        varchar(50) comment 'identificador de foto principal de pIdFotoFlickr',
   PPASSWORD            varchar(50),
   PTIPO                int comment 'pTipo=[ 1 | 2 | 3 ]
            1 = Profesional
            2 = Competidor
            3 = Estudiante',
   PWEBEST              int comment 'Indica el estado del sitio del profesional, pudiendo estar en cualquier de los siguientes estados:
            
            0=POR COMPLETAR
            1=POR REVISAR
            2=PUBLICADA
            3=RECHAZADA
            ',
   primary key (PRUT)
);

/*==============================================================*/
/* Table: PRO_PRO_WEB                                           */
/*==============================================================*/
create table PRO_PRO_WEB
(
   PPWEB                bigint not null auto_increment,
   PRUT                 varchar(20) not null,
   PWID                 bigint not null,
   primary key (PPWEB)
);

/*==============================================================*/
/* Table: PRO_SLI_INT                                           */
/*==============================================================*/
create table PRO_SLI_INT
(
   PSIID                bigint not null auto_increment,
   SINTID               bigint,
   PRUT                 varchar(20),
   primary key (PSIID)
);

alter table PRO_SLI_INT comment 'profesional slider interno';

/*==============================================================*/
/* Table: PUBLICACION                                           */
/*==============================================================*/
create table PUBLICACION
(
   PUID                 bigint not null auto_increment,
   PRUT                 varchar(20) not null,
   PUEST                varchar(50),
   PUTITULO             varchar(100),
   PUPUBLICACION        varchar(3000),
   PUFEPUB              datetime comment 'Fecha de publicación',
   PUFEMOD              datetime comment 'Fecha de modificación',
   PUFECRE              datetime comment 'fecha de creación',
   PUIMG                varchar(50),
   PUBAJ                varchar(500) comment 'bajada de publicación',
   primary key (PUID)
);

/*==============================================================*/
/* Table: PUBLICACION_ETIQUETA                                  */
/*==============================================================*/
create table PUBLICACION_ETIQUETA
(
   PEID                 bigint not null auto_increment,
   ETNOM                varchar(100) not null,
   CATETINOM            varchar(50) not null,
   PUID                 bigint not null,
   primary key (PEID)
);

/*==============================================================*/
/* Table: PUBLICACION_REFERENCIA                                */
/*==============================================================*/
create table PUBLICACION_REFERENCIA
(
   PRID                 bigint not null auto_increment,
   PUID                 bigint not null,
   REID                 bigint not null,
   PRDES                varchar(300) comment 'descripción de la referencia, de donde se obtuvo',
   PRNOM                varchar(100) comment 'nombre del libro, papers, dominio, etc.',
   primary key (PRID)
);

alter table PUBLICACION_REFERENCIA comment 'referencias a libros, paginas web, autores, etc.';

/*==============================================================*/
/* Table: REFERENCIA                                            */
/*==============================================================*/
create table REFERENCIA
(
   REID                 bigint not null auto_increment,
   RETIPO               varchar(30) comment 'reTipo = [ WEB | LIBRO | PAPER | OTRO]',
   primary key (REID)
);

/*==============================================================*/
/* Table: REGION                                                */
/*==============================================================*/
create table REGION
(
   RCOD                 int not null,
   RNOM                 varchar(100),
   primary key (RCOD)
);

/*==============================================================*/
/* Table: RESUMENALUMNOS                                        */
/*==============================================================*/
create table RESUMENALUMNOS
(
   WAID                 bigint not null auto_increment,
   PRUT                 varchar(20) not null,
   WATIT                varchar(50),
   WADES1               varchar(250),
   WADES2               varchar(200),
   primary key (WAID)
);

alter table RESUMENALUMNOS comment 'todo lo que aparece en sección alumnos menos los comentarios';

/*==============================================================*/
/* Table: SERVICIO                                              */
/*==============================================================*/
create table SERVICIO
(
   SEID                 int not null auto_increment,
   PRUT                 varchar(20),
   SETIT                varchar(50),
   SEPAR                varchar(360),
   SEEST                int comment 'Estado deslizador.
            seEst = [ 0 | 1 ]
            0=incompleto
            1=completo
            
            Cuando el profesonal finaliza de completar la información.
            ',
   primary key (SEID)
);

/*==============================================================*/
/* Table: SLIDER                                                */
/*==============================================================*/
create table SLIDER
(
   SID                  bigint not null auto_increment,
   PRUT                 varchar(20),
   STIT1                varchar(30) comment 'titulo 1',
   STIT2                varchar(40) comment 'titulo 2',
   SDES                 varchar(235) comment 'descripción',
   SPOS                 int comment 'numerador de posición del slider, posiciones 1, 2 y 3.',
   SEST                 int comment 'Estado deslizador.
            sEst = [ 0 | 1 ]
            0=incompleto
            1=completo
            
            Cuando el profesonal finaliza de completar la información.
            ',
   SDFL                 varchar(50) comment 'identificador de fotografía en flickr',
   primary key (SID)
);

alter table SLIDER comment 'titulo profesional';

/*==============================================================*/
/* Table: SLIDER_INTERNO                                        */
/*==============================================================*/
create table SLIDER_INTERNO
(
   SINTID               bigint not null auto_increment,
   SINTTIT1             varchar(20),
   SINTTIT2             varchar(30),
   SINTDES              varchar(235),
   SINTPOS              int,
   SINTEST              int,
   SINTIDFL             varchar(50),
   primary key (SINTID)
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO
(
   UMAIL                varchar(50) not null,
   UNOMBRE              varchar(50),
   UAPELLIDO            varchar(50),
   UALIAS               varchar(50),
   UPASSWORD            varchar(50),
   USEXO                varchar(1),
   UFECHANAC            date,
   UCLAVERECUPERA       varchar(50),
   UESTCLAVERECUPERA    int,
   UESALUMNO            bool comment 'determina si un usuario es alumno de algun profesional',
   primary key (UMAIL)
);

alter table ALU_PRO add constraint FK_POROFESIONAL_POSEE_MUCHOS_ALUMNOS foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table ALU_PRO add constraint FK_USUARIO_ESALUMNO_MUCHOS_PROFESIONALES foreign key (UMAIL)
      references USUARIO (UMAIL) on delete restrict on update restrict;

alter table CATEGORIA_ETIQUETA add constraint FK_CREA foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table COMENTARIO add constraint FK_ALUMOS_REALIZA_MUCHOS_COMENTARIOS foreign key (ALU_PRO_ID)
      references ALU_PRO (ALU_PRO_ID) on delete restrict on update restrict;

alter table COMENTARIO_PUBLICACION add constraint FK_PUBLICACION_RECIBE_MUCHOS_COMENTARIOS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table COMENTARIO_PUBLICACION add constraint FK_USUARIO_REALIZA_MUCHOS_COMENTARIOS foreign key (UMAIL)
      references USUARIO (UMAIL) on delete restrict on update restrict;

alter table CURRICULUM add constraint FK_PROFESIONAL_POSEE_CURRICULUM foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table DETALLE_PORTAFOLIO add constraint FK_PORTAFOLIO_POSEE_DETALLE foreign key (POID)
      references PORTAFOLIO (POID) on delete restrict on update restrict;

alter table DETALLE_PRODUCTO_WEB add constraint FK_PRODUCTO_MUCHO_DETALLE foreign key (PWID)
      references PRODUCTO_WEB (PWID) on delete restrict on update restrict;

alter table DETALLE_SERVICIO add constraint FK_SERVICIO_POSEE_DETALLE foreign key (SEID)
      references SERVICIO (SEID) on delete restrict on update restrict;

alter table DIRECCION add constraint FK_COMUNA_APARECE_DIRECCIONES foreign key (CCOD)
      references COMUNA (CCOD) on delete restrict on update restrict;

alter table DIRECCION add constraint FK_PORFESIONAL_POSEE_DIRECCION foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table DIRECCION add constraint FK_REGION_APARECE_DIRECCIONES foreign key (RCOD)
      references REGION (RCOD) on delete restrict on update restrict;

alter table ESTUDIOS add constraint FK_CURRICULUM_POSEE_MUCHOS_ESTUDIOS foreign key (CURID)
      references CURRICULUM (CURID) on delete restrict on update restrict;

alter table ETIQUETA add constraint FK_POSEE_ETIQUETA foreign key (CATETINOM)
      references CATEGORIA_ETIQUETA (CATETINOM) on delete restrict on update restrict;

alter table ETIQUETA add constraint FK_RELATIONSHIP_31 foreign key (CATETINOM)
      references CATEGORIA_ETIQUETA (CATETINOM) on delete restrict on update restrict;

alter table ETIQUETA add constraint FK_RELATIONSHIP_34 foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table EXPERIENCIA add constraint FK_CURRICULUM_POSEE_MUCHA_EXPERIENCIA foreign key (CURID)
      references CURRICULUM (CURID) on delete restrict on update restrict;

alter table LOGIN add constraint FK_REALIZA_LOGIN foreign key (UMAIL)
      references USUARIO (UMAIL) on delete restrict on update restrict;

alter table LOGIN_PROF add constraint FK_PROFESIONAL_POSEE_LOGINS foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table OTRO add constraint FK_CURRICULUM_POSEE_MUCHOS_OTROS foreign key (CURID)
      references CURRICULUM (CURID) on delete restrict on update restrict;

alter table PORTAFOLIO add constraint FK_PROFESIONAL_POSEE_PORTAFOLIO foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PRO_PRO_WEB add constraint FK_PROFESIONAL_POSEE_SECCION_PRODUCTO foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PRO_PRO_WEB add constraint FK_UNASECCION_PRODUCTO_ASOCIADA_MUCHOS_PROFESIONALES foreign key (PWID)
      references PRODUCTO_WEB (PWID) on delete restrict on update restrict;

alter table PRO_SLI_INT add constraint FK_ESTA_EN foreign key (SINTID)
      references SLIDER_INTERNO (SINTID) on delete restrict on update restrict;

alter table PRO_SLI_INT add constraint FK_POSEE_SLIDER_INTERNO foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PUBLICACION add constraint FK_PROFESIONAL_REALIZA_PUBLICACIONES foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PUBLICACION_ETIQUETA add constraint FK_ATIQUETA_ESTA_MUCHAS_PUBLICACIONES foreign key (ETNOM, CATETINOM)
      references ETIQUETA (ETNOM, CATETINOM) on delete restrict on update restrict;

alter table PUBLICACION_ETIQUETA add constraint FK_POSEE_MUCHAS_ETIQUETAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_REFERENCIA add constraint FK_PUBLICACION_POSEE_REFERENCIAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_REFERENCIA add constraint FK_TIPO_REFERENCIA_ESTA_EN_PUBLICACIONES foreign key (REID)
      references REFERENCIA (REID) on delete restrict on update restrict;

alter table RESUMENALUMNOS add constraint FK_PROFESIONAL_PUBLICA_ENWEB_MUCHOS_ALUMNOS foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table SERVICIO add constraint FK_OFRECE_SERVICIOS foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table SLIDER add constraint FK_POSEE_SLIDER foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;


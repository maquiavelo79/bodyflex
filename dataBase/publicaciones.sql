/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     11-04-2017 16:24:16                          */
/*==============================================================*/

drop table if exists PUBLICACION;

drop table if exists PUBLICACION_BUSQUEDA;

drop table if exists PUBLICACION_CATEGORIA_ETIQUETA;

drop table if exists PUBLICACION_COMENTARIO;

drop table if exists PUBLICACION_COMPLEMENTADOR;

drop table if exists PUBLICACION_CONTENIDO;

drop table if exists PUBLICACION_DENUNCIA;

drop table if exists PUBLICACION_ETIQUETA;

drop table if exists PUBLICACION_INTERNO;

drop table if exists PUBLICACION_LIST_ETIQUETAS;

drop table if exists PUBLICACION_LIST_REFERENCIA;

drop table if exists PUBLICACION_PROFESIONAL;

drop table if exists PUBLICACION_REFERENCIA;

drop table if exists PUBLICACION_VISITAS;

drop table if exists PUBLICACION_VOTACION;


/*==============================================================*/
/* Table: PUBLICACION                                           */
/*==============================================================*/
create table PUBLICACION
(
   PUID                 bigint not null auto_increment,
   PUEST                varchar(50),
   PUTITULO             varchar(100),
   PUPUBLICACION        varchar(3000) comment 'contenido de la publicación',
   PUFEPUB              datetime comment 'Fecha de publicación',
   PUFEMOD              datetime comment 'Fecha de modificación',
   PUFECRE              datetime comment 'fecha de creación',
   PUIMG                varchar(500) comment 'ID google drive imagen cabecera publicación',
   PUBAJ                varchar(500) comment 'bajada de publicación',
   PUTIP                varchar(100) comment 'LA PUBLICACIÓN PUEDE SER DEL TIPO:
            
            1. ARTÍCULO
            2. EVENTO
            3. ENTREVISTA
            4. ETC.',
   PURUTIMG             varchar(1000) comment 'ruta en el servidor de donde se encuentra la imagen de la publkicación',
   PUNOMIMG             varchar(100) comment 'nombre de la imagen asociada a la publicación',
   PUPOSIMG             int comment 'indicador de existencia de imagen
            puPosImg = [ 0 | 1 ]
            0=no posee imagen asociada
            1=posee imagen asociada',
   primary key (PUID)
);

/*==============================================================*/
/* Table: PUBLICACION_BUSQUEDA                                  */
/*==============================================================*/
create table PUBLICACION_BUSQUEDA
(
   BSQID                bigint not null auto_increment,
   PUID                 bigint,
   BSQFE                datetime,
   BSQTI                varchar(20) comment 'tipo de dato: categoria, etiqueta, etc.',
   BSQDA                varchar(100) comment 'dato buscado segun tipo',
   primary key (BSQID)
);

alter table PUBLICACION_BUSQUEDA comment 'representa el texto o concepto de búsqueda en la publicación';

/*==============================================================*/
/* Table: PUBLICACION_CATEGORIA_ETIQUETA                        */
/*==============================================================*/
create table PUBLICACION_CATEGORIA_ETIQUETA
(
   CATETINOM            varchar(50) not null,
   CATRUT               varchar(10) comment 'rut del profesional que crea categoria
            ',
   primary key (CATETINOM)
);

/*==============================================================*/
/* Table: PUBLICACION_COMENTARIO                                */
/*==============================================================*/
create table PUBLICACION_COMENTARIO
(
   CPID                 bigint not null auto_increment comment 'identificador del comentario',
   PUID                 bigint not null,
   CPFEC                datetime comment 'fecha y hora del comentario',
   CPDET                varchar(300) comment 'Mensaje del comentario',
   CPORD                bigint comment 'Orden en comentarios de publicacion',
   CPNOM                varchar(100) comment 'nombre de quien comenta',
   CPAPE                varchar(100) comment 'apellido de quien comenta',
   CPEML                varchar(100) comment 'email de quien comenta',
   primary key (CPID)
);

/*==============================================================*/
/* Table: PUBLICACION_COMPLEMENTADOR                            */
/*==============================================================*/
create table PUBLICACION_COMPLEMENTADOR
(
   COPID                bigint not null auto_increment,
   COMPRUT              varchar(10),
   PUID                 bigint,
   primary key (COPID)
);

/*==============================================================*/
/* Table: PUBLICACION_CONTENIDO                                 */
/*==============================================================*/
create table PUBLICACION_CONTENIDO
(
   IDCONT               bigint not null auto_increment,
   PUID                 bigint,
   URLCONT              varchar(300),
   PRICONT              int comment 'Imagen principal?
            1 = imagen es principal
            0 = imagen no es principal',
   TIPCONT              varchar(20) comment 'tipCont=[ imagen | video ]',
   primary key (IDCONT)
);

alter table PUBLICACION_CONTENIDO comment 'Alamacena contenido como URL de imagenes y videos';

/*==============================================================*/
/* Table: PUBLICACION_DENUNCIA                                  */
/*==============================================================*/
create table PUBLICACION_DENUNCIA
(
   DEID                 bigint not null auto_increment comment 'identificador de denuncia',
   PUID                 bigint not null,
   DEFE                 datetime comment 'fecha denuncia',
   DESE                 varchar(100) comment 'identificador de la sesion',
   primary key (DEID)
);

/*==============================================================*/
/* Table: PUBLICACION_ETIQUETA                                  */
/*==============================================================*/
create table PUBLICACION_ETIQUETA
(
   PEID                 bigint not null auto_increment,
   PUID                 bigint not null,
   ETNOM                varchar(100) not null,
   CATETINOM            varchar(50) not null,
   primary key (PEID)
);

/*==============================================================*/
/* Table: PUBLICACION_INTERNO                                   */
/*==============================================================*/
create table PUBLICACION_INTERNO
(
   IPID                 bigint not null auto_increment,
   RRUT                 varchar(10),
   PUID                 bigint,
   primary key (IPID)
);

/*==============================================================*/
/* Table: PUBLICACION_LIST_ETIQUETAS                            */
/*==============================================================*/
create table PUBLICACION_LIST_ETIQUETAS
(
   ETNOM                varchar(100) not null,
   CATETINOM            varchar(50) not null,
   ETRUT                varchar(10) comment 'rut del profesional que crea la etiqueta',
   primary key (ETNOM, CATETINOM)
);

/*==============================================================*/
/* Table: PUBLICACION_LIST_REFERENCIA                           */
/*==============================================================*/
create table PUBLICACION_LIST_REFERENCIA
(
   REID                 bigint not null auto_increment,
   RETIPO               varchar(30) comment 'reTipo = [ WEB | LIBRO | PAPER | OTRO]',
   primary key (REID)
);

/*==============================================================*/
/* Table: PUBLICACION_PROFESIONAL                               */
/*==============================================================*/
create table PUBLICACION_PROFESIONAL
(
   PPID                 bigint not null auto_increment,
   PUID                 bigint,
   PRUT                 varchar(10),
   primary key (PPID)
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
/* Table: PUBLICACION_VISITAS                                   */
/*==============================================================*/
create table PUBLICACION_VISITAS
(
   VISID                bigint not null auto_increment,
   PUID                 bigint not null,
   VISFEC               datetime,
   VISSES               varchar(30) comment 'id sesion',
   primary key (VISID)
);

alter table PUBLICACION_VISITAS comment 'contiene las visiatas realizadas a la publicación';

/*==============================================================*/
/* Table: PUBLICACION_VOTACION                                  */
/*==============================================================*/
create table PUBLICACION_VOTACION
(
   VID                  bigint not null auto_increment,
   PUID                 bigint not null,
   VLI                  int,
   VUL                  int,
   VMA                  varchar(100) comment 'EMAIL DEL USUARIO REGISTRADO QUE VOTA',
   VFE                  datetime,
   primary key (VID)
);

alter table PUBLICACION_BUSQUEDA add constraint FK_POSEE_BUSQUEDAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_COMENTARIO add constraint FK_PUBLICACION_RECIBE_MUCHOS_COMENTARIOS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_COMPLEMENTADOR add constraint FK_PERTENECE_PUBLICACION_COMPLEMENTADOR foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_COMPLEMENTADOR add constraint FK_REALIZA_COMPLEMENTADOR_PUBLICACION foreign key (COMPRUT)
      references COMPLEMENTADOR (COMPRUT) on delete restrict on update restrict;

alter table PUBLICACION_CONTENIDO add constraint FK_RELATIONSHIP_37 foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_DENUNCIA add constraint FK_POSEE_MUCHAS_DENUNCIAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_ETIQUETA add constraint FK_EXISTEN_MUCHAS_EN foreign key (ETNOM, CATETINOM)
      references PUBLICACION_LIST_ETIQUETAS (ETNOM, CATETINOM) on delete restrict on update restrict;

alter table PUBLICACION_ETIQUETA add constraint FK_POSEE_MUCHAS_ETIQUETAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_INTERNO add constraint FK_PERTENECE_PUBLICACION_INTERNO foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_INTERNO add constraint FK_REALIZA_INTERNO_PUBLICACION foreign key (RRUT)
      references INTERNO (RRUT) on delete restrict on update restrict;

alter table PUBLICACION_LIST_ETIQUETAS add constraint FK_POSEE_MUCHAS foreign key (CATETINOM)
      references PUBLICACION_CATEGORIA_ETIQUETA (CATETINOM) on delete restrict on update restrict;

alter table PUBLICACION_PROFESIONAL add constraint FK_PERTENECE_PUBLICACION_PROFESIONAL foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_PROFESIONAL add constraint FK_REALIZA_PROFESIONAL_PUBLICACION foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PUBLICACION_REFERENCIA add constraint FK_PUBLICACION_POSEE_REFERENCIAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_REFERENCIA add constraint FK_TIPO_REFERENCIA_ESTA_EN_PUBLICACIONES foreign key (REID)
      references PUBLICACION_LIST_REFERENCIA (REID) on delete restrict on update restrict;

alter table PUBLICACION_VISITAS add constraint FK_POSEE_MUCHAS_VISITAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_VOTACION add constraint FK_POSEE_MUCHAS_VOTACIONES foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;


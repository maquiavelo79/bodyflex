drop index RELATIONSHIP_36_FK on COMENTARIO_PUBLICACION;

drop index PROFESIONAL_REALIZA_MUCHOS_COMENTARIOS_FK on COMENTARIO_PUBLICACION;

drop index RELATIONSHIP_33_FK on COMENTARIO_PUBLICACION;

drop table if exists COMENTARIO_PUBLICACION;

/*==============================================================*/
/* Table: COMENTARIO_PUBLICACION                                */
/*==============================================================*/
create table COMENTARIO_PUBLICACION
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
/* Index: RELATIONSHIP_33_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_33_FK on COMENTARIO_PUBLICACION
(
   
);

/*==============================================================*/
/* Index: PROFESIONAL_REALIZA_MUCHOS_COMENTARIOS_FK             */
/*==============================================================*/
create index PROFESIONAL_REALIZA_MUCHOS_COMENTARIOS_FK on COMENTARIO_PUBLICACION
(
   
);

/*==============================================================*/
/* Index: RELATIONSHIP_36_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_36_FK on COMENTARIO_PUBLICACION
(
   
);

alter table COMENTARIO_PUBLICACION add constraint FK_PUBLICACION_RECIBE_MUCHOS_COMENTARIOS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

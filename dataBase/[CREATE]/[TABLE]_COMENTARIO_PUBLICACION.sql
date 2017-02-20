drop index RELATIONSHIP_36_FK on COMENTARIO_PUBLICACION;

drop table if exists COMENTARIO_PUBLICACION;

/*==============================================================*/
/* Table: COMENTARIO_PUBLICACION                                */
/*==============================================================*/
create table COMENTARIO_PUBLICACION
(
   CPID                 bigint not null auto_increment comment 'identificador del comentario',
   UMAIL                varchar(50),
   PRUT                 varchar(20),
   PUID                 bigint not null,
   CPFEC                datetime comment 'fecha y hora del comentario',
   CPDET                varchar(300) comment 'Mensaje del comentario',
   CPTIP                int comment 'cpTip=[1 | 2]
            1 = inicio
            2 = respuesta',
   CPORI                bigint comment 'identificador del comentario origen',
   CPORD                bigint comment 'Orden en comentarios de publicacion',
   primary key (CPID)
);

/*==============================================================*/
/* Index: RELATIONSHIP_36_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_36_FK on COMENTARIO_PUBLICACION
(
   
);

alter table COMENTARIO_PUBLICACION add constraint FK_PROFESIONAL_REALIZA_MUCHOS_COMENTARIOS foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table COMENTARIO_PUBLICACION add constraint FK_PUBLICACION_RECIBE_MUCHOS_COMENTARIOS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table COMENTARIO_PUBLICACION add constraint FK_USUARIO_REALIZA_MUCHOS_COMENTARIOS foreign key (UMAIL)
      references USUARIO (UMAIL) on delete restrict on update restrict;

drop table if exists VOTACION;

/*==============================================================*/
/* Table: VOTACION                                              */
/*==============================================================*/
create table VOTACION
(
   VID                  bigint not null auto_increment comment 'ID VOTACI�N',
   PUID                 bigint,
   VLI                  int comment 'LIKE DE VOTACI�N',
   VUL                  int comment 'UNLIKE DE VOTACI�N',
   VMA                  varchar(100) comment 'MAIL DE QUIEN VOTA',
   VFE                  datetime comment 'FECHA DE VOTACI�N',
   primary key (VID)
);

alter table VOTACION add constraint FK_POSEE_MUCHAS_VOTACIONES foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

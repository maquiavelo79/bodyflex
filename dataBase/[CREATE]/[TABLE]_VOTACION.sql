drop table if exists VOTACION;

/*==============================================================*/
/* Table: VOTACION                                              */
/*==============================================================*/
create table VOTACION
(
   VID                  bigint not null auto_increment comment 'ID VOTACIÓN',
   PUID                 bigint,
   VLI                  int comment 'LIKE DE VOTACIÓN',
   VUL                  int comment 'UNLIKE DE VOTACIÓN',
   VMA                  varchar(100) comment 'MAIL DE QUIEN VOTA',
   VFE                  datetime comment 'FECHA DE VOTACIÓN',
   primary key (VID)
);

alter table VOTACION add constraint FK_POSEE_MUCHAS_VOTACIONES foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

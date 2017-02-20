drop table if exists DENUNCIA;

/*==============================================================*/
/* Table: DENUNCIA                                              */
/*==============================================================*/
create table DENUNCIA
(
   DEID                 bigint not null auto_increment comment 'identificador de denuncia',
   PUID                 bigint not null,
   DEFE                 datetime comment 'fecha denuncia',
   DESE                 varchar(100) comment 'identificador de la sesion',
   primary key (DEID)
);

alter table DENUNCIA add constraint FK_POSEE_MUCHAS_DENUNCIAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

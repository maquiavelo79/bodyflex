drop table if exists SEGUIDOR;

/*==============================================================*/
/* Table: SEGUIDOR                                              */
/*==============================================================*/
create table SEGUIDOR
(
   SEGID                bigint not null,
   PRUT                 varchar(20) not null,
   SEGFEC               datetime,
   SEGEM                varchar(100),
   primary key (SEGID)
);

alter table SEGUIDOR add constraint FK_POSEE_MUCHSO_SEGUIDORES foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

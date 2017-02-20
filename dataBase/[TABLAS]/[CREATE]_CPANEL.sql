drop table if exists CPANEL;

/*==============================================================*/
/* Table: CPANEL                                                */
/*==============================================================*/
create table CPANEL
(
   CPAID                bigint not null,
   CPARU                varchar(500),
   CPARO                varchar(50) comment 'ROL ASOCIADO',
   primary key (CPAID)
);

/*==============================================================*/
/* DBMS name:      Sybase SQL Anywhere 10                       */
/* Created on:     02-03-2015 17:09:33                          */
/*==============================================================*/


if exists(
   select 1 from sys.sysindex i, sys.systable t
   where i.table_id=t.table_id 
     and i.index_name='USUARIO_PK'
     and t.table_name='USUARIO'
) then
   drop index USUARIO.USUARIO_PK
end if;

if exists(
   select 1 from sys.systable 
   where table_name='USUARIO'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table USUARIO
end if;

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO 
(
   UMAIL                varchar(100)                   not null,
   UNOMBRE              varchar(100),
   UAPELLIDO            varchar(100),
   UALIAS               varchar(100),
   UPASSWORD            varchar(100),
   USEXO                varchar(100),
   UFECHANAC            date,
   constraint PK_USUARIO primary key (UMAIL)
);

/*==============================================================*/
/* Index: USUARIO_PK                                            */
/*==============================================================*/
create unique index USUARIO_PK on USUARIO (
UMAIL ASC
);


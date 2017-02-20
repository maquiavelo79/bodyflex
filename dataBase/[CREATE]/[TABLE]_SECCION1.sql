drop table if exists SECCION1;

/*==============================================================*/
/* Table: SECCION1                                              */
/*==============================================================*/
create table SECCION1
(
   IDS1                 bigint not null auto_increment,
   TITS1                varchar(500),
   URLS1                varchar(1000),
   ESTS1                int comment 'estS1 = [ 1 | 0 ]
            1=ACTIVO
            2=INACTIVO',
   IMGS1                varchar(100) comment 'IDENTIFICADOR DE FLICKR',
   PRIS1                int comment 'Prioridad en muestra de slider, determina que se muestra primero o ultimo',
   primary key (IDS1)
);

alter table SECCION1 comment 'sección 1: representa slider principal';

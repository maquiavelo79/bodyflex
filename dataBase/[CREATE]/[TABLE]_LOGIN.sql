drop index RELATIONSHIP_1_FK on LOGIN;

drop table if exists LOGIN;

/*==============================================================*/
/* Table: LOGIN                                                 */
/*==============================================================*/
create table LOGIN
(
   LID                  bigint not null auto_increment,
   LFE                  datetime comment 'fecha en la que se logueo',
   LMA                  varchar(50) comment 'email de quien se logueo',
   primary key (LID)
);

/*==============================================================*/
/* Index: RELATIONSHIP_1_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_1_FK on LOGIN
(
   
);

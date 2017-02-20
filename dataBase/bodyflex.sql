/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     23-10-2016 11:49:43                          */
/*==============================================================*/


drop table if exists BANCOS;

drop table if exists CARRO;

drop table if exists CARRO_DETALLE;

drop table if exists CATALOGO_RANGO_PRECIO;

drop table if exists CATALOGO_SLIDER1;

drop table if exists CATALOGO_SLIDER2;

drop table if exists CATALOGO_SLIDER3;

drop table if exists CATALOGO_SLIDER4;

drop table if exists CATALOGO_SLIDER5;

drop table if exists CATALOGO_SLIDER6;

drop table if exists CATALOGO_SLIDER7;

drop table if exists COLECCION;

drop table if exists COLECCION_PRODUCTO;

drop table if exists COMPLEMENTADOR;

drop table if exists COMPLEMENTADOR_DIRECCION;

drop table if exists COMUNA;

drop table if exists COORDENADAS;

drop table if exists CPANEL;

drop table if exists DIRECCION;

drop table if exists ESTUDIOS;

drop table if exists EXPERIENCIA;

drop table if exists INTERNO;

drop table if exists INTERNO_DIRECCION;

drop table if exists LOGIN;

drop table if exists LOGIN_USUARIO;

drop table if exists MARCAS;

drop table if exists MEDIDA;

drop table if exists OTROS;

drop table if exists PARAMETROS;

drop table if exists PORTAFOLIO;

drop table if exists POSTULACION;

drop table if exists POSTULACION_RESPALDO;

drop table if exists POSTULACION_TRANSICION;

drop table if exists PRODUCTO;

drop table if exists PRODUCTO_CATEGORIA1;

drop table if exists PRODUCTO_CATEGORIA2;

drop table if exists PRODUCTO_CATEGORIA3;

drop table if exists PRODUCTO_COLOR;

drop table if exists PRODUCTO_COMENTARIO_PROFESIONAL;

drop table if exists PRODUCTO_CONTENIDO;

drop table if exists PRODUCTO_DENUNCIA;

drop table if exists PRODUCTO_ETIQUETA;

drop table if exists PRODUCTO_MEDIDA;

drop table if exists PRODUCTO_PROFESIONAL;

drop table if exists PRODUCTO_PUNTUACION;

drop table if exists PRODUCTO_VISITAS;

drop table if exists PRODUCTO_VOTACION;

drop table if exists PRODUCTO_WISHLIST_PROFESIONAL;

drop table if exists PROFESIONAL;

drop table if exists PROFESIONAL_CONTACTO;

drop table if exists PROFESIONAL_CUENTAS;

drop table if exists PROFESIONAL_DENUNCIA;

drop table if exists PROFESIONAL_DIRECCION;

drop table if exists PROFESIONAL_MENSAJE;

drop table if exists PROFESIONAL_PERFIL;

drop table if exists PROFESIONAL_REDES_SOCIAL;

drop table if exists PROFESIONAL_SEGUIDOR;

drop table if exists PROFESIONAL_SERVICIO;

drop table if exists PROFESIONAL_VISITA_CURRICULUM;

drop table if exists PROFESIONAL_VISITA_PERFIL;

drop table if exists PROFESIONAL_VOTACION;

drop table if exists PROVINCIA;

drop table if exists PUBLICACION;

drop table if exists PUBLICACION_BUSQUEDA;

drop table if exists PUBLICACION_CATEGORIA_ETIQUETA;

drop table if exists PUBLICACION_COMENTARIO;

drop table if exists PUBLICACION_COMPLEMENTADOR;

drop table if exists PUBLICACION_CONTENIDO;

drop table if exists PUBLICACION_DENUNCIA;

drop table if exists PUBLICACION_ETIQUETA;

drop table if exists PUBLICACION_INTERNO;

drop table if exists PUBLICACION_LIST_ETIQUETAS;

drop table if exists PUBLICACION_LIST_REFERENCIA;

drop table if exists PUBLICACION_PROFESIONAL;

drop table if exists PUBLICACION_REFERENCIA;

drop table if exists PUBLICACION_VISITAS;

drop table if exists PUBLICACION_VOTACION;

drop table if exists REGION;

drop table if exists SECCION1;

drop table if exists SERVICIO;

drop table if exists SERVICIO_VISITA;

drop table if exists SERVICIO_VOTACION;

drop table if exists SLIDER;

drop table if exists USUARIO;

drop table if exists USUARIO_DIRECCION;

/*==============================================================*/
/* Table: BANCOS                                                */
/*==============================================================*/
create table BANCOS
(
   BCOID                bigint not null auto_increment,
   BCONOM               varchar(50),
   primary key (BCOID)
);

/*==============================================================*/
/* Table: CARRO                                                 */
/*==============================================================*/
create table CARRO
(
   CAID                 bigint not null auto_increment,
   CAFECR               datetime comment 'fecha creación',
   CAFECO               datetime comment 'fecha de compra',
   CARUTPRO             varchar(20) comment 'rut del profesional asociado (si aplica)',
   CASESION             varchar(50),
   CARUTCOM             varchar(20) comment 'Rut del comprador',
   CAMTOBRU             bigint comment 'monto bruto',
   CAMTONET             bigint comment 'monto neto',
   CAIVA                bigint,
   CAEST                varchar(50),
   primary key (CAID)
);

/*==============================================================*/
/* Table: CARRO_DETALLE                                         */
/*==============================================================*/
create table CARRO_DETALLE
(
   CAD_ID               bigint not null auto_increment,
   CAID                 bigint,
   CAD_COD              varchar(20) comment 'código del producto',
   CAD_CAN              bigint comment 'cantidad de productos',
   CAD_DET              varchar(300) comment 'detalle producto',
   CAD_PBR              bigint comment 'precio bruto unitario del producto',
   CAD_TBR              bigint comment 'subtotal bruto del producto',
   primary key (CAD_ID)
);

/*==============================================================*/
/* Table: CATALOGO_RANGO_PRECIO                                 */
/*==============================================================*/
create table CATALOGO_RANGO_PRECIO
(
   RAN_ID               bigint not null auto_increment,
   RAN_INF              varchar(10),
   RAN_SUP              varchar(10),
   primary key (RAN_ID)
);

alter table CATALOGO_RANGO_PRECIO comment 'Rango de precios en catalogo';

/*==============================================================*/
/* Table: CATALOGO_SLIDER1                                      */
/*==============================================================*/
create table CATALOGO_SLIDER1
(
   CS1ID                bigint not null auto_increment,
   CS1TI                varchar(30) comment 'titulo',
   CS1DE                varchar(150),
   CS1GD                varchar(50),
   CS1URL               varchar(200),
   primary key (CS1ID)
);

alter table CATALOGO_SLIDER1 comment 'CATALOGO DE COLECCIÓN
';

/*==============================================================*/
/* Table: CATALOGO_SLIDER2                                      */
/*==============================================================*/
create table CATALOGO_SLIDER2
(
   CS2ID                int not null auto_increment,
   CS2TI                varchar(30),
   CS2DE                varchar(150),
   CS2GD1               varchar(50),
   CS2GD2               varchar(50),
   CS2URL1              varchar(200),
   CS2URL2              varchar(200),
   CS2CO                bigint,
   CS2PO                bigint,
   primary key (CS2ID)
);

/*==============================================================*/
/* Table: CATALOGO_SLIDER3                                      */
/*==============================================================*/
create table CATALOGO_SLIDER3
(
   CS3ID                int not null auto_increment,
   CS3TI                varchar(30),
   CS3GD                varchar(50),
   CS3URL               varchar(200),
   primary key (CS3ID)
);

/*==============================================================*/
/* Table: CATALOGO_SLIDER4                                      */
/*==============================================================*/
create table CATALOGO_SLIDER4
(
   CS4ID                int not null auto_increment,
   CS4GD1               varchar(50),
   CS4GD2               varchar(50),
   CS4GD3               varchar(50),
   CS4GD4               varchar(50),
   CS4B1                varchar(20),
   CS4B2                varchar(20),
   CS4URL1              varchar(200),
   CS4URL2              varchar(200),
   CS4URL3              varchar(200),
   CS4URL4              varchar(200),
   primary key (CS4ID)
);

/*==============================================================*/
/* Table: CATALOGO_SLIDER5                                      */
/*==============================================================*/
create table CATALOGO_SLIDER5
(
   CS5ID                int not null auto_increment,
   CS5TI                varchar(30),
   CS5B1                varchar(20),
   CS5DE                varchar(150),
   CS5GD                varchar(50),
   CS5URL               varchar(200),
   primary key (CS5ID)
);

/*==============================================================*/
/* Table: CATALOGO_SLIDER6                                      */
/*==============================================================*/
create table CATALOGO_SLIDER6
(
   CS6ID                int not null auto_increment,
   CS6GD1               varchar(50),
   CS6GD2               varchar(50),
   CS6GD3               varchar(50),
   CS6P1                int,
   CS6P2                int,
   CS6P3                int,
   CS6B1                varchar(20),
   CS6B2                varchar(20),
   CS6B3                varchar(20),
   CS6URL1              varchar(200),
   CS6URL2              varchar(200),
   CS6URL3              varchar(200),
   CS6PO1               bigint,
   CS6PO2               bigint,
   CS6PO3               bigint,
   primary key (CS6ID)
);

/*==============================================================*/
/* Table: CATALOGO_SLIDER7                                      */
/*==============================================================*/
create table CATALOGO_SLIDER7
(
   CS7ID                int not null auto_increment,
   CS7TI                varchar(30),
   CS7B1                varchar(20),
   CS7DE                varchar(150),
   CS7GD                varchar(50),
   CS7URL               varchar(200),
   primary key (CS7ID)
);

/*==============================================================*/
/* Table: COLECCION                                             */
/*==============================================================*/
create table COLECCION
(
   COID                 bigint not null auto_increment,
   CONO                 varchar(50),
   CODE                 varchar(200) comment 'DESCRIPCIÓN CORTA',
   COGD                 varchar(50) comment 'IMAGEN PRINCIPAL DE LA COLECCIÓN, REPRESENTA A LA COLECCIÓN EN SU CONJUNTO, 850X300',
   COGD2                varchar(50) comment 'IMAGEN PRINCIPAL DE LA COLECCIÓN, REPRESENTA A LA COLECCIÓN EN SU CONJUNTO
            
            217 X 217',
   COGD3                varchar(50) comment 'IMAGEN DE 400X180',
   primary key (COID)
);

/*==============================================================*/
/* Table: COLECCION_PRODUCTO                                    */
/*==============================================================*/
create table COLECCION_PRODUCTO
(
   CPRID                bigint not null auto_increment,
   COID                 bigint,
   PROID                bigint,
   primary key (CPRID)
);

/*==============================================================*/
/* Table: COMPLEMENTADOR                                        */
/*==============================================================*/
create table COMPLEMENTADOR
(
   COMPRUT              varchar(10) not null,
   CPAID                bigint,
   COMPDV               varchar(1),
   COMPNOM1             varchar(300) comment 'razon social',
   COMPNOM2             varchar(300) comment 'nombre fantasia',
   COMPDOM              varchar(300) comment 'domicilio',
   COMPTEL              varchar(50) comment 'telefono',
   COMPCEL              varchar(50) comment 'celular',
   COMPWEB              varchar(100),
   COMPIMG1             varchar(100) comment 'ej: imagen empresa',
   COMPIMG2             varchar(100) comment 'imagen representante',
   COMPPASS             varchar(50),
   COMPMAIL             varchar(50),
   COMPRENOM            varchar(30) comment 'nombre representante',
   COMPREAPE            varchar(30) comment 'apellido representante',
   COMPREALI            varchar(30) comment 'aleas representante',
   COMPEST              varchar(20) comment 'estado del complementador',
   COMPCLAREC           varchar(50),
   COMPESTCLAREC        int,
   primary key (COMPRUT)
);

/*==============================================================*/
/* Table: COMPLEMENTADOR_DIRECCION                              */
/*==============================================================*/
create table COMPLEMENTADOR_DIRECCION
(
   DIRCOMID             bigint not null auto_increment,
   DCOD                 bigint not null,
   COMPRUT              varchar(10),
   primary key (DIRCOMID)
);

/*==============================================================*/
/* Table: COMUNA                                                */
/*==============================================================*/
create table COMUNA
(
   CCOD                 int not null auto_increment,
   PROVCOD              bigint not null,
   CNOM                 varchar(100),
   primary key (CCOD)
);

/*==============================================================*/
/* Table: COORDENADAS                                           */
/*==============================================================*/
create table COORDENADAS
(
   COOID                bigint not null auto_increment,
   DCOD                 bigint not null,
   COOLAT               varchar(50),
   COOLON               varchar(50),
   primary key (COOID)
);

/*==============================================================*/
/* Table: CPANEL                                                */
/*==============================================================*/
create table CPANEL
(
   CPAID                bigint not null auto_increment,
   CPARU                varchar(500) comment 'RUTA para acceder a CPANEL',
   CPARO                varchar(50) comment 'ROL que accede al CPANEL',
   primary key (CPAID)
);

alter table CPANEL comment 'ESTABLECE URL POR TIPO DE USUARIO PARA ACCESO DEL CPANEL
                           -&';

/*==============================================================*/
/* Table: DIRECCION                                             */
/*==============================================================*/
create table DIRECCION
(
   DCOD                 bigint not null auto_increment,
   RCOD                 int,
   CCOD                 int not null,
   PROVCOD              bigint not null,
   DCODTIPO             int comment '1 = PARTICULAR 
            2 = COMERCIAL',
   DNOMTIPO             varchar(50) comment 'PARTICULAR | COMERCIAL',
   DCALLE               varchar(100),
   DVILLAPOB            varchar(100) comment 'VILLA | POBLACIÓN',
   DNUMERO              varchar(100) comment 'numero vivienda
            ',
   DPUBLICA             int comment 'determina la dirección que será mostrada en la web',
   DFECING              datetime,
   primary key (DCOD)
);

/*==============================================================*/
/* Table: ESTUDIOS                                              */
/*==============================================================*/
create table ESTUDIOS
(
   ESID                 bigint not null auto_increment,
   PRUT                 varchar(10) not null,
   ESNOM                varchar(100) comment 'Nombre del titulo profesional, tecnico o certificación',
   ESTIPO               varchar(50) comment 'Tecnico, Profesional, Grado Académico, Certificación',
   ESINST               varchar(100) comment 'Institución donde estudió',
   ESNOMCON             varchar(50) comment 'esNomCon=[TITULADO|EGRESADO|ESTUDIANTE]
            TITULADO=1
            EGRESADO=2
            ESTUDIANTE=3
            ',
   ESPOS                int,
   ESFECHA              date,
   ESANOSEST            int comment 'años de estudio, lo que dura la carrera.',
   primary key (ESID)
);

alter table ESTUDIOS comment 'Tecnico, Profesional, Grado académico o certificación.
                             -&#&';

/*==============================================================*/
/* Table: EXPERIENCIA                                           */
/*==============================================================*/
create table EXPERIENCIA
(
   EXID                 bigint not null auto_increment,
   PRUT                 varchar(10) not null,
   EXCARGO              varchar(100) comment 'cargo desempeñado',
   EXINS                varchar(100) comment 'instiutución / empresa',
   EXDES                varchar(300) comment 'descripción del cargo',
   EXFECDES             date comment 'fecha desde',
   EXFECHAS             date comment 'fecha hasta',
   EXANOS               int comment 'años de trabajo en base a fecha de inicio y termino',
   EXMESES              int comment 'meses de trabajo en base a fecha de inicio y termino',
   EXDIAS               int comment 'dias de trabajo en base a fecha de inicio y termino',
   EXPOS                int comment 'posición',
   primary key (EXID)
);

alter table EXPERIENCIA comment 'experiencia ingresada por el profesional';

/*==============================================================*/
/* Table: INTERNO                                               */
/*==============================================================*/
create table INTERNO
(
   RRUT                 varchar(10) not null,
   CPAID                bigint not null,
   RMAIL                varchar(50),
   RNOM1                varchar(50),
   RNOM2                varchar(50),
   RAPE1                varchar(50),
   RAPE2                varchar(50),
   RALIAS               longtext,
   RPASS                varchar(50),
   RTIP                 varchar(50) comment 'rTip = [ ADMINISTRADOR | PERIODISTA | OTRO ]',
   RDV                  varchar(1),
   RIMG                 varchar(100) comment 'Imagen presentación administrador',
   REST                 varchar(20) comment 'estado de la cuenta ACTIVO o INACTIVO',
   RCLAREC              varchar(50),
   RESTCLAREC           int,
   primary key (RRUT)
);

alter table INTERNO comment 'ROL INTERNO A LA ORGANIZACIÓN COMO EL ADMINISTRADOR Y PERIOD';

/*==============================================================*/
/* Table: INTERNO_DIRECCION                                     */
/*==============================================================*/
create table INTERNO_DIRECCION
(
   DIRINTID             bigint not null auto_increment,
   RRUT                 varchar(10),
   DCOD                 bigint not null,
   primary key (DIRINTID)
);

/*==============================================================*/
/* Table: LOGIN                                                 */
/*==============================================================*/
create table LOGIN
(
   LID                  bigint not null auto_increment,
   COMPRUT              varchar(10),
   RRUT                 varchar(10),
   PRUT                 varchar(10),
   LFEC                 datetime comment 'fecha y hora en la que se logueo',
   LTIP                 int comment 'tipo de rol logeado.
            lTip=[ 1 | 2 | 3 | 4 ]
            1= PROFESIONAL
            2=USUARIO
            3=INTERNO
            4=COMPLEMENTADOR',
   primary key (LID)
);

alter table LOGIN comment 'REGISTRO DE ACCESOS PARA CUALQUIER USUARIO';

/*==============================================================*/
/* Table: LOGIN_USUARIO                                         */
/*==============================================================*/
create table LOGIN_USUARIO
(
   LUID                 bigint not null auto_increment,
   UMAIL                varchar(50),
   LUFE                 datetime,
   primary key (LUID)
);

/*==============================================================*/
/* Table: MARCAS                                                */
/*==============================================================*/
create table MARCAS
(
   MARID                bigint not null auto_increment,
   MARNOM               varchar(50),
   MARGD                varchar(50),
   primary key (MARID)
);

/*==============================================================*/
/* Table: MEDIDA                                                */
/*==============================================================*/
create table MEDIDA
(
   MEDID                bigint not null auto_increment,
   MEDTI                varchar(10) comment 'representa el tipo de medida, si se trata de letras o numeros
            medTi2 = [ LETRAS | NUMEROS ]',
   MEDVA                varchar(10) comment 'medVa = [ XS | S | M | XL| L | 38 | 40 | ETC ].',
   primary key (MEDID)
);

/*==============================================================*/
/* Table: OTROS                                                 */
/*==============================================================*/
create table OTROS
(
   OTID                 bigint not null auto_increment,
   PRUT                 varchar(10),
   OTNOM                varchar(100) comment 'Nombre Congreso, Torneo, etc.',
   OTTIPO               varchar(50) comment '1=CURSO
            2=CONGRESO
            3=SEMINARIO
            4=CAMPEONATO',
   OTFECHA              date,
   OTPOS                int comment 'posición para la visualización del registro',
   OTDES                varchar(500),
   primary key (OTID)
);

alter table OTROS comment 'seminario, torneo, congreso, etc.';

/*==============================================================*/
/* Table: PARAMETROS                                            */
/*==============================================================*/
create table PARAMETROS
(
   PARID                bigint not null auto_increment,
   PARNOM               varchar(50),
   PARVAL               varchar(100),
   primary key (PARID)
);

/*==============================================================*/
/* Table: PORTAFOLIO                                            */
/*==============================================================*/
create table PORTAFOLIO
(
   POID                 int not null auto_increment,
   PRUT                 varchar(10) not null,
   PONOMCAP             varchar(50) comment 'Nombre de la imagen que se visualizará en el sitio del profesional, la cadena debe ser corta y presisa!',
   PONOMIMG             varchar(100) comment 'nombre de la imagen que se subirá',
   POIDFLI              varchar(28) comment 'ID de google drive',
   primary key (POID)
);

alter table PORTAFOLIO comment 'imagenes ingresadas por el porfesional al portafolio';

/*==============================================================*/
/* Table: POSTULACION                                           */
/*==============================================================*/
create table POSTULACION
(
   POSID                bigint not null auto_increment,
   POSNOM               varchar(100),
   POSAPE               varchar(100),
   POSEMA               varchar(100) comment 'email del postulante',
   POSFEC               datetime,
   POSEST               int comment '1=INGRESADA
            2=EVALUANDO
            3=DETENIDA
            4=APROBANDO
            5=RECHAZANDO
            6=APROBADA
            7=RECHAZADA',
   primary key (POSID)
);

/*==============================================================*/
/* Table: POSTULACION_RESPALDO                                  */
/*==============================================================*/
create table POSTULACION_RESPALDO
(
   PRESID               bigint not null auto_increment,
   POSID                bigint not null,
   PRESIDDRI            varchar(100),
   primary key (PRESID)
);

/*==============================================================*/
/* Table: POSTULACION_TRANSICION                                */
/*==============================================================*/
create table POSTULACION_TRANSICION
(
   PTID                 bigint not null auto_increment,
   POSID                bigint not null,
   PTESTORI             varchar(50),
   PTESTDES             varchar(50),
   PTFEC                datetime,
   PTUSR                varchar(100) comment 'usuario con perfil administrador que gestiona la postulación o parte de ella.',
   primary key (PTID)
);

/*==============================================================*/
/* Table: PRODUCTO                                              */
/*==============================================================*/
create table PRODUCTO
(
   PROID                bigint not null auto_increment,
   PCP2_ID              bigint,
   PETID                bigint,
   MARID                bigint not null,
   PCP3_ID              bigint,
   RAN_ID               bigint not null,
   CAT_RAN_ID           bigint not null,
   PCP1_ID              bigint not null,
   PRONO                varchar(50) comment 'nombre producto',
   PRODE                varchar(100) comment 'descripción corta del producto',
   PROES                varchar(3000) comment 'descripción detallada del producto',
   PROET                varchar(30) comment '
            estado del producto
            proPEst = [ INGRESADO | PUBLICADO | ELIMINADO ]',
   PROCO                varchar(30) comment 'condición del producto
            proPCon = [ NUEVO | USADO ]',
   PROFI                datetime comment 'fecha ingreso producto',
   PROFP                datetime comment 'fecha de publicacion producto',
   PROMA                varchar(50) comment 'Este campo solo se utiliza cuando el profesional ingresa un producto poropio que desea mostrar por medio de su perfil profesional.
            
            Nombre marca producto.',
   PROUN                int comment 'unidades máximas a ofrecer por el portal, esto es para controlar el numero de unidades anticipandose a errores.
            
            Esto debería reflejarse en el combo de unidades a comprar.',
   PROPR                bigint comment 'precio de referencia de mercado, no debería ser obligatorio.',
   PROPE                int comment 'Sólo para productos de los profesionales.
            ¿Producto exhibido para venta?.
            
            proPVenta = [ 0 | 1 ]
            0 = Producto no se vende, solo se exive en la plataforma
            1 = Producto se vende en la plataforma',
   PROPV                bigint comment 'precio bruto del producto, este precio considera el impuesto.',
   PROPN                bigint comment 'Precio neto',
   PROIV                bigint comment 'IVA',
   PROCT                bigint comment 'monto comisión a pagar a transbank por transacción',
   PROPO                varchar(4) comment 'Porcentaje de comisión al profesional por venta en su sitio',
   PROMC                bigint comment 'Monto Comisión al Profesional por venta por Catálogo',
   PRORU                varchar(10) comment 'rut del administrador que ingreso el producto',
   PROFM                datetime,
   PROPVP               bigint comment 'precio de venta unitario para el profesional (BRUTO)',
   PROPVPIVA            bigint comment 'IVA del precio de venta al profesional',
   PROPVPNET            bigint comment 'precio neto del precio de venta al profesional',
   PROUT1               bigint comment 'Utilidad Neta: 
            
            Venta del profesional por medo de su perfil en bodyflex.',
   PROUT2               bigint comment 'Utilidad Neta: 
            
            Venta de bodyflex a un profesional.',
   PROUT3               bigint comment 'Utilidad Neta: 
            
            Venta de bodyflex a un suscriptor.',
   PROPC                bigint comment 'precio de compra',
   PROCT2               bigint comment 'monto comisión a pagar a transbank por transacción en base al precio de venta de un producto para un profesional',
   PROPVAPUB            bigint comment 'precio anterior para publico general, este valor se utiliza cuando el producto a tenido variaciones (baja) y puede ser evidenciado al mostrar el producto, por ejemplo precio con descuento, se mostrara este valor como el precio antiguo.',
   PROPVAPRO            bigint comment 'precio anterior para profesional general, este valor se utiliza cuando el producto a tenido variaciones (baja) y puede ser evidenciado al mostrar el producto, por ejemplo precio con descuento, se mostrara este valor como el precio antiguo.',
   PROENVI              int comment 'proEnVi = [ 0 | 1 ]
            
            1 = Producto en Vitrina
            1 = Producto no esta en Vitrina',
   primary key (PROID)
);

/*==============================================================*/
/* Table: PRODUCTO_CATEGORIA1                                   */
/*==============================================================*/
create table PRODUCTO_CATEGORIA1
(
   PCP1_ID              bigint not null auto_increment,
   PCP1_NOM             varchar(50),
   PCP1_GD              varchar(50) comment 'IMAGEN REPRESENTATIVA DE LA CATEGORÍA 850x300',
   primary key (PCP1_ID)
);

/*==============================================================*/
/* Table: PRODUCTO_CATEGORIA2                                   */
/*==============================================================*/
create table PRODUCTO_CATEGORIA2
(
   PCP2_ID              bigint not null auto_increment,
   PCP1_ID              bigint,
   PCP2_NOM             varchar(50),
   PCP2_GD              varchar(50) comment 'IMAGEN REPRESENTATIVA DE LA CATEGORÍA',
   PCP2_GD2             varchar(50) comment 'IMAGEN REPRESENTATIVA DE LA CATEGORÍA 217X217',
   primary key (PCP2_ID)
);

/*==============================================================*/
/* Table: PRODUCTO_CATEGORIA3                                   */
/*==============================================================*/
create table PRODUCTO_CATEGORIA3
(
   PCP3_ID              bigint not null auto_increment,
   PCP2_ID              bigint,
   PCP3_NOM             varchar(50),
   PCP3_GD              varchar(50) comment 'IMAGEN REPRESENTATIVA DE LA CATEGORÍA',
   PCP3_GD2             varchar(50) comment 'IMAGEN REPRESENTATIVA DE LA CATEGORÍA 217X217',
   primary key (PCP3_ID)
);

/*==============================================================*/
/* Table: PRODUCTO_COLOR                                        */
/*==============================================================*/
create table PRODUCTO_COLOR
(
   PCOID                bigint not null auto_increment,
   PROID                bigint,
   PCON                 varchar(20) comment 'nombre del color',
   PCOB                 varchar(20) comment 'background-color CSS',
   primary key (PCOID)
);

alter table PRODUCTO_COLOR comment 'COLORES DE LOS PRODUCTOS';

/*==============================================================*/
/* Table: PRODUCTO_COMENTARIO_PROFESIONAL                       */
/*==============================================================*/
create table PRODUCTO_COMENTARIO_PROFESIONAL
(
   PCOPID               bigint not null auto_increment,
   PROID                bigint,
   PRUT                 varchar(10),
   PCOPTI               varchar(100) comment 'titulo del comentario',
   PCOPDE               varchar(350) comment 'descripción del comentario',
   PCOPFE               datetime comment 'fecha del comentario',
   PCOPPU               varchar(5) comment 'puntuación de 1 a 5',
   primary key (PCOPID)
);

/*==============================================================*/
/* Table: PRODUCTO_CONTENIDO                                    */
/*==============================================================*/
create table PRODUCTO_CONTENIDO
(
   PCO_ID               bigint not null auto_increment,
   PROID                bigint not null,
   PCO_TIP              varchar(10) comment 'pcoTip = [ IMAGEN | VIDEO ]',
   PCO_DRI              varchar(100) comment 'ID google drive o URL',
   PCO_PRI              int comment 'indicador imagen principal, la primera imagen ingresada sera la principal del producto.
            
            pco_pri = [ 0 | 1 ]
            0 = no es imagen principal
            1 = imagen principal
            ',
   primary key (PCO_ID)
);

alter table PRODUCTO_CONTENIDO comment 'CONTENIDO COMO IMAGENES Y VIDEOS';

/*==============================================================*/
/* Table: PRODUCTO_DENUNCIA                                     */
/*==============================================================*/
create table PRODUCTO_DENUNCIA
(
   PPD_ID               bigint not null auto_increment,
   PROID                bigint not null,
   PPD_FEC              datetime,
   PPD_SES              varchar(50) comment 'SAESION USUARIO',
   PPD_ML               varchar(100),
   primary key (PPD_ID)
);

alter table PRODUCTO_DENUNCIA comment 'PRODUCTO DENUNCIADO POR CLIENTE EXTERNO, PODRÍA DENUNCIAR UN';

/*==============================================================*/
/* Table: PRODUCTO_ETIQUETA                                     */
/*==============================================================*/
create table PRODUCTO_ETIQUETA
(
   PETID                bigint not null auto_increment,
   PETNOM               varchar(50) comment 'Nombre de la etiqueta',
   PETCON               varchar(100) comment 'porcentaje de descuento para el profesional',
   primary key (PETID)
);

alter table PRODUCTO_ETIQUETA comment '1. NUEVO
2. DESCUENTO
3. NUEVO+DECUENTO
';

/*==============================================================*/
/* Table: PRODUCTO_MEDIDA                                       */
/*==============================================================*/
create table PRODUCTO_MEDIDA
(
   PMID                 bigint not null auto_increment,
   MEDID                bigint not null,
   PROID                bigint not null,
   primary key (PMID)
);

alter table PRODUCTO_MEDIDA comment '
Medidas del producto
X-Small 	Small 	Medium 	La';

/*==============================================================*/
/* Table: PRODUCTO_PROFESIONAL                                  */
/*==============================================================*/
create table PRODUCTO_PROFESIONAL
(
   PPROID               bigint not null auto_increment,
   PROID                bigint not null,
   PRUT                 varchar(10) not null,
   primary key (PPROID)
);

/*==============================================================*/
/* Table: PRODUCTO_PUNTUACION                                   */
/*==============================================================*/
create table PRODUCTO_PUNTUACION
(
   PPP_ID               bigint not null auto_increment,
   PROID                bigint not null,
   PPP_PT               int comment 'puntos votación.
            ppp_pt = [ 1 | 2 | 3 | 4 | 5 ]',
   PPP_ML               varchar(100),
   primary key (PPP_ID)
);

alter table PRODUCTO_PUNTUACION comment 'Esta puntuación se realiza sólo despues que el cliente reali';

/*==============================================================*/
/* Table: PRODUCTO_VISITAS                                      */
/*==============================================================*/
create table PRODUCTO_VISITAS
(
   PPV_ID               bigint not null auto_increment,
   PROID                bigint not null,
   PPV_FEC              datetime,
   PPV_SES              varchar(30) comment 'sesion pagina',
   PPV_ML               varchar(100),
   primary key (PPV_ID)
);

alter table PRODUCTO_VISITAS comment 'VISITAS DE LOS PRODUCTOS';

/*==============================================================*/
/* Table: PRODUCTO_VOTACION                                     */
/*==============================================================*/
create table PRODUCTO_VOTACION
(
   PVO_ID               bigint not null auto_increment,
   PROID                bigint not null,
   PVO_LI               int,
   PVO_UL               int,
   PVO_ML               varchar(100) comment 'correo electronico del usuario logeado, la persona que vota no necesariamente debe estar logeada para votar, por lo que se utiliza tambien como parametro la sesion',
   PVO_FE               datetime comment 'fecha votación',
   PVO_SE               varchar(50) comment 'SESION DE USUARIO ',
   primary key (PVO_ID)
);

alter table PRODUCTO_VOTACION comment 'Votación del tipo me gusta o no me gusta, no es necesario qu';

/*==============================================================*/
/* Table: PRODUCTO_WISHLIST_PROFESIONAL                         */
/*==============================================================*/
create table PRODUCTO_WISHLIST_PROFESIONAL
(
   PWPID                bigint not null auto_increment,
   PROID                bigint not null,
   PRUT                 varchar(10) not null,
   PWPFE                datetime,
   primary key (PWPID)
);

/*==============================================================*/
/* Table: PROFESIONAL                                           */
/*==============================================================*/
create table PROFESIONAL
(
   PRUT                 varchar(10) not null,
   CPAID                bigint,
   PID                  bigint comment 'ID del profesional',
   PDV                  varchar(1),
   PNOM                 varchar(100),
   PAPE                 varchar(100),
   PMAIL                varchar(50),
   PMAILBFX             varchar(100),
   PFONO                varchar(50) comment 'fono red fija',
   PCELULAR             varchar(50) comment 'fono celular',
   PIDFOTO              varchar(300) comment 'identificador de foto principal (aparece en busquedas)',
   PPASS                varchar(50),
   PTIPO                int comment 'pTipo=[ 1 | 2 | 3 ]
            1 = Profesional
            2 = Competidor
            3 = Estudiante',
   PTIPO2               varchar(200) comment 'Ej: 
            - Personal Trainer
            - Periodista
            - Kinesiologo
            - Etc.',
   PESP                 varchar(200) comment 'Especialidad del profesional, ej: musculación',
   PWEBEST              int comment 'Indica el estado del sitio del profesional, pudiendo estar en cualquier de los siguientes estados:
            
            0=COMPLETANDO
            1=PUBLICADA
            2=RECHAZADA
            ',
   PFOTOPRE             varchar(300) comment 'ID de google drive foto de presentación',
   PTXTOPRE             varchar(2000) comment 'TEXTO DE PRESENTACIÓN DEL PROFESIONAL',
   PALIAS               varchar(30) comment 'aleas del usuario',
   PEST                 int comment 'Estado del profesional en la lataforma
            
            1. REGISTRADO
            ',
   PFECING              datetime comment 'fecha de ingreso',
   PFECNAC              date,
   PCLAREC              varchar(50),
   PESTCLAREC           int,
   primary key (PRUT)
);

/*==============================================================*/
/* Table: PROFESIONAL_CONTACTO                                  */
/*==============================================================*/
create table PROFESIONAL_CONTACTO
(
   PCTID                bigint not null auto_increment,
   PRUT                 varchar(10) not null,
   PCTFE                datetime,
   PCTUR                varchar(10) comment 'RUT usuario que contacta al profesional (SOLO CONTACTAN USUARIOS REGISTRADOS)',
   primary key (PCTID)
);

alter table PROFESIONAL_CONTACTO comment 'contactos recibidos por el profesonal por medio de su pagina';

/*==============================================================*/
/* Table: PROFESIONAL_CUENTAS                                   */
/*==============================================================*/
create table PROFESIONAL_CUENTAS
(
   PROCTAID             bigint not null auto_increment,
   PRUT                 varchar(10) not null,
   BCOID                bigint not null,
   PROCTANUM            varchar(50),
   PROCTATIP            varchar(50),
   primary key (PROCTAID)
);

alter table PROFESIONAL_CUENTAS comment 'http://www.sbif.cl/sbifweb/servlet/ConozcaSBIF?indice=7.5.1.';

/*==============================================================*/
/* Table: PROFESIONAL_DENUNCIA                                  */
/*==============================================================*/
create table PROFESIONAL_DENUNCIA
(
   PDEID                bigint not null auto_increment,
   PRUT                 varchar(10),
   PDEFE                datetime comment 'fecha de denuncia perfil profesional',
   PDESE                varchar(50) comment 'sesion de quien denuncia',
   primary key (PDEID)
);

alter table PROFESIONAL_DENUNCIA comment 'denuncia del perfil web del profesional por medio de su perf';

/*==============================================================*/
/* Table: PROFESIONAL_DIRECCION                                 */
/*==============================================================*/
create table PROFESIONAL_DIRECCION
(
   DIRPROID             int not null auto_increment,
   DCOD                 bigint not null,
   PRUT                 varchar(10),
   primary key (DIRPROID)
);

/*==============================================================*/
/* Table: PROFESIONAL_MENSAJE                                   */
/*==============================================================*/
create table PROFESIONAL_MENSAJE
(
   MID                  bigint not null auto_increment,
   MRORI                varchar(10) comment 'rut origen, corresponde al rut de quien contacta a un profesional',
   MRDES                varchar(10) comment 'rut destino, corresponde al profesional que es contactado',
   MFEC                 datetime comment 'fecha en que se origina el mensaje',
   MLEI                 int comment 'indicador de mensaje leido
            mLei = [ 1 | 0 ]
            1 = leido
            0 = no leido',
   MTIP                 varchar(1) comment 'indica si el mensaje es de inicio o es respuesta
            mTip = [ I | R ]
            I = mensaje inicial
            R = mensaje respuesta',
   MCOR                 int comment 'correlativo de mensaje',
   MKEY                 bigint comment 'identificador de mensaje, este numero se origina por contacto, un contacto posee por identificador este campo con idependencia del numero de respuestas (interacciones) que se generen.',
   MMEN                 varchar(2000) comment 'el mensaje mismo',
   MASU                 varchar(100) comment 'asunto del mensaje',
   MAORI                varchar(50) comment 'alias del origen del mensaje',
   MADES                varchar(50) comment 'alias del destinatario del mensaje',
   MMAIL                varchar(50) comment 'Correo Origen, de quien genera o envía el emnsaje.',
   MMAILDES             varchar(50) comment 'Correo Destino, a quien va dirigido el emnsaje.',
   primary key (MID)
);

/*==============================================================*/
/* Table: PROFESIONAL_PERFIL                                    */
/*==============================================================*/
create table PROFESIONAL_PERFIL
(
   PERID                bigint not null auto_increment,
   PRUT                 varchar(10) not null,
   PEREST1              int comment 'Tecnico',
   PEREST2              int comment 'Profesional
            ',
   PEREST3              int comment 'Licenciatura',
   PEREST4              int comment 'Magister',
   PEREST5              int comment 'MBA',
   PEREST6              int comment 'Doctorado',
   PERCER               int comment 'perCer = [ 1 | 0 ]
            1 = posee certificación
            0 = no posee certificación',
   PERDIP               int comment 'perDip = [ 1 | 0 ]
            1 = posee diplomado
            0 = no posee diplomado',
   PERTOR               int comment 'participacion en torneos deportivo.
            perTor = [ 1 | 0 ]
            1 = ha participado en torneos deportivos
            0 = NO ha participado en torneos deportivos
            
            ',
   PERSEX               int comment 'perSex = [ 1 | 0 ]
            1 = masculino
            0 = femenino ',
   PEREXP               int comment 'años de experiencia.
            1 = S-EXP
            2 = [ 1 - 3 [
            3 = [ 3 - 6 [
            4 = más de 6 ',
   PERREG               varchar(10) comment 'https://es.wikipedia.org/wiki/Regiones_de_Chile
            debe considerar una opcion de "INTER REGION" que caracteriza al profesional que se desplaza entre regiones para ofrecer sus servicios.
            ',
   PEREDA               int comment 'rango de edad
            1 = [20 - 30[
            2 = [30 - 40[
            3 = [ desde 40]
            ',
   PERESP               varchar(50) comment 'especialidad',
   PEREST               int comment 'perEst = [ 0 | 1 ]
            1 = VIGENTE
            0 = NO VIGENTE',
   primary key (PERID)
);

alter table PROFESIONAL_PERFIL comment 'http://www.cned.cl/public/secciones/SeccionEducacionSuperior';

/*==============================================================*/
/* Table: PROFESIONAL_REDES_SOCIAL                              */
/*==============================================================*/
create table PROFESIONAL_REDES_SOCIAL
(
   REDID                bigint not null auto_increment comment 'identificador',
   PRUT                 varchar(10) not null,
   REDNOM               varchar(100),
   REDDIR               varchar(1000) comment 'dirección en la red social',
   primary key (REDID)
);

alter table PROFESIONAL_REDES_SOCIAL comment 'REDES SOCIALES';

/*==============================================================*/
/* Table: PROFESIONAL_SEGUIDOR                                  */
/*==============================================================*/
create table PROFESIONAL_SEGUIDOR
(
   SEGID                bigint not null auto_increment,
   PRUT                 varchar(10) not null,
   SEGFEC               datetime,
   SEGEM                varchar(100) comment 'email del seguidor (SOLO PARA USUARIOS REGISTRADOS)',
   primary key (SEGID)
);

alter table PROFESIONAL_SEGUIDOR comment 'seguidores del profesional';

/*==============================================================*/
/* Table: PROFESIONAL_SERVICIO                                  */
/*==============================================================*/
create table PROFESIONAL_SERVICIO
(
   PSID                 bigint not null auto_increment,
   PRUT                 varchar(10) not null,
   SEID                 int not null,
   primary key (PSID)
);

/*==============================================================*/
/* Table: PROFESIONAL_VISITA_CURRICULUM                         */
/*==============================================================*/
create table PROFESIONAL_VISITA_CURRICULUM
(
   PVCID                bigint not null auto_increment,
   PRUT                 varchar(10) not null,
   PVCFE                datetime,
   primary key (PVCID)
);

alter table PROFESIONAL_VISITA_CURRICULUM comment 'visitas al currículum (especificación) al hacer click en la ';

/*==============================================================*/
/* Table: PROFESIONAL_VISITA_PERFIL                             */
/*==============================================================*/
create table PROFESIONAL_VISITA_PERFIL
(
   VPWID                bigint not null auto_increment,
   PRUT                 varchar(10) not null,
   VPWFE                datetime,
   primary key (VPWID)
);

alter table PROFESIONAL_VISITA_PERFIL comment 'registra las vsitas realizadas al perfil web del profesional';

/*==============================================================*/
/* Table: PROFESIONAL_VOTACION                                  */
/*==============================================================*/
create table PROFESIONAL_VOTACION
(
   PVOID                bigint not null auto_increment,
   PRUT                 varchar(10) not null,
   PVOLI                int,
   PVOUN                int,
   PVOMA                varchar(100),
   PVOFE                datetime,
   primary key (PVOID)
);

/*==============================================================*/
/* Table: PROVINCIA                                             */
/*==============================================================*/
create table PROVINCIA
(
   PROVCOD              bigint not null auto_increment,
   RCOD                 int not null,
   PROVNOM              varchar(100),
   primary key (PROVCOD)
);

/*==============================================================*/
/* Table: PUBLICACION                                           */
/*==============================================================*/
create table PUBLICACION
(
   PUID                 bigint not null,
   PUEST                varchar(50),
   PUTITULO             varchar(100),
   PUPUBLICACION        varchar(3000) comment 'contenido de la publicación',
   PUFEPUB              datetime comment 'Fecha de publicación',
   PUFEMOD              datetime comment 'Fecha de modificación',
   PUFECRE              datetime comment 'fecha de creación',
   PUIMG                varchar(28) comment 'ID google drive imagen cabecera publicación',
   PUBAJ                varchar(500) comment 'bajada de publicación',
   PUTIP                varchar(100) comment 'LA PUBLICACIÓN PUEDE SER DEL TIPO:
            
            1. ARTÍCULO
            2. EVENTO
            3. ENTREVISTA
            4. ETC.',
   PURUTIMG             varchar(1000) comment 'ruta en el servidor de donde se encuentra la imagen de la publkicación',
   PUNOMIMG             varchar(100) comment 'nombre de la imagen asociada a la publicación',
   PUPOSIMG             int comment 'indicador de existencia de imagen
            puPosImg = [ 0 | 1 ]
            0=no posee imagen asociada
            1=posee imagen asociada',
   primary key (PUID)
);

/*==============================================================*/
/* Table: PUBLICACION_BUSQUEDA                                  */
/*==============================================================*/
create table PUBLICACION_BUSQUEDA
(
   BSQID                bigint not null auto_increment,
   BSQFE                datetime,
   BSQTI                varchar(20) comment 'tipo de dato: categoria, etiqueta, etc.',
   BSQDA                varchar(100) comment 'dato buscado segun tipo',
   primary key (BSQID)
);

alter table PUBLICACION_BUSQUEDA comment 'representa el texto o concepto de búsqueda en la publicación';

/*==============================================================*/
/* Table: PUBLICACION_CATEGORIA_ETIQUETA                        */
/*==============================================================*/
create table PUBLICACION_CATEGORIA_ETIQUETA
(
   CATETINOM            varchar(50) not null,
   CATRUT               varchar(10) comment 'rut del profesional que crea categoria
            ',
   primary key (CATETINOM)
);

/*==============================================================*/
/* Table: PUBLICACION_COMENTARIO                                */
/*==============================================================*/
create table PUBLICACION_COMENTARIO
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
/* Table: PUBLICACION_COMPLEMENTADOR                            */
/*==============================================================*/
create table PUBLICACION_COMPLEMENTADOR
(
   COPID                bigint not null auto_increment,
   COMPRUT              varchar(10),
   PUID                 bigint,
   primary key (COPID)
);

/*==============================================================*/
/* Table: PUBLICACION_CONTENIDO                                 */
/*==============================================================*/
create table PUBLICACION_CONTENIDO
(
   IDCONT               bigint not null auto_increment,
   PUID                 bigint,
   URLCONT              varchar(300),
   PRICONT              int comment 'Imagen principal?
            1 = imagen es principal
            0 = imagen no es principal',
   TIPCONT              varchar(20) comment 'tipCont=[ imagen | video ]',
   primary key (IDCONT)
);

alter table PUBLICACION_CONTENIDO comment 'Alamacena contenido como URL de imagenes y videos';

/*==============================================================*/
/* Table: PUBLICACION_DENUNCIA                                  */
/*==============================================================*/
create table PUBLICACION_DENUNCIA
(
   DEID                 bigint not null auto_increment comment 'identificador de denuncia',
   PUID                 bigint not null,
   DEFE                 datetime comment 'fecha denuncia',
   DESE                 varchar(100) comment 'identificador de la sesion',
   primary key (DEID)
);

/*==============================================================*/
/* Table: PUBLICACION_ETIQUETA                                  */
/*==============================================================*/
create table PUBLICACION_ETIQUETA
(
   PEID                 bigint not null auto_increment,
   PUID                 bigint not null,
   ETNOM                varchar(50) not null,
   primary key (PEID)
);

/*==============================================================*/
/* Table: PUBLICACION_INTERNO                                   */
/*==============================================================*/
create table PUBLICACION_INTERNO
(
   IPID                 bigint not null auto_increment,
   RRUT                 varchar(10),
   PUID                 bigint,
   primary key (IPID)
);

/*==============================================================*/
/* Table: PUBLICACION_LIST_ETIQUETAS                            */
/*==============================================================*/
create table PUBLICACION_LIST_ETIQUETAS
(
   ETNOM                varchar(50) not null,
   CATETINOM            varchar(50) not null,
   ETRUT                varchar(10) comment 'rut del profesional que crea la etiqueta',
   primary key (ETNOM)
);

/*==============================================================*/
/* Table: PUBLICACION_LIST_REFERENCIA                           */
/*==============================================================*/
create table PUBLICACION_LIST_REFERENCIA
(
   RETIPO               int not null comment 'reTipo = [ WEB | LIBRO | PAPER | OTRO]',
   REID                 bigint not null,
   primary key (REID)
);

/*==============================================================*/
/* Table: PUBLICACION_PROFESIONAL                               */
/*==============================================================*/
create table PUBLICACION_PROFESIONAL
(
   PPID                 bigint not null auto_increment,
   PUID                 bigint,
   PRUT                 varchar(10),
   primary key (PPID)
);

/*==============================================================*/
/* Table: PUBLICACION_REFERENCIA                                */
/*==============================================================*/
create table PUBLICACION_REFERENCIA
(
   PRID                 bigint not null auto_increment,
   PUID                 bigint not null,
   REID                 bigint not null,
   PRDES                varchar(300) comment 'descripción de la referencia, de donde se obtuvo',
   PRNOM                varchar(100) comment 'nombre del libro, papers, dominio, etc.',
   primary key (PRID)
);

alter table PUBLICACION_REFERENCIA comment 'referencias a libros, paginas web, autores, etc.';

/*==============================================================*/
/* Table: PUBLICACION_VISITAS                                   */
/*==============================================================*/
create table PUBLICACION_VISITAS
(
   VISID                bigint not null auto_increment,
   PUID                 bigint not null,
   VISFEC               datetime,
   VISSES               varchar(30) comment 'id sesion',
   primary key (VISID)
);

alter table PUBLICACION_VISITAS comment 'contiene las visiatas realizadas a la publicación';

/*==============================================================*/
/* Table: PUBLICACION_VOTACION                                  */
/*==============================================================*/
create table PUBLICACION_VOTACION
(
   VID                  bigint not null auto_increment,
   PUID                 bigint not null,
   VLI                  int,
   VUL                  int,
   VMA                  varchar(100) comment 'EMAIL DEL USUARIO REGISTRADO QUE VOTA',
   VFE                  datetime,
   primary key (VID)
);

/*==============================================================*/
/* Table: REGION                                                */
/*==============================================================*/
create table REGION
(
   RCOD                 int not null auto_increment,
   RNOM                 varchar(100),
   primary key (RCOD)
);

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

/*==============================================================*/
/* Table: SERVICIO                                              */
/*==============================================================*/
create table SERVICIO
(
   SEID                 int not null auto_increment,
   RRUT                 varchar(10) not null,
   SENOM                varchar(100),
   SECAT                varchar(100) comment 'CATEGORIA DEL SERVICIO
            seCat = [ PRODUCCION | ENTRENAMIENTO | GIMNASIOS]',
   SEEST                int comment 'estado del servicio.
            
            seEst= [ 1 | 2 ]
            1= INGRESADO
            2 = PUBLICADO 
            ',
   SEDESCOR             varchar(100) comment 'descripción corta',
   SEDESLAR             varchar(1000) comment 'descripcion larga',
   SEIMGAWE             varchar(100) comment 'clase imagen icono http://fontawesome.io/icons/',
   SEIMGSER             varchar(100) comment 'imagen del servicio, como imagen de publicación
            ',
   SEIDFLI              varchar(50),
   primary key (SEID)
);

alter table SERVICIO comment 'SERVICIOS ASOCIADOS AL ENTRENAMIENTO PERSONAL';

/*==============================================================*/
/* Table: SERVICIO_VISITA                                       */
/*==============================================================*/
create table SERVICIO_VISITA
(
   SEVIID               bigint not null auto_increment,
   SEID                 int,
   SEVIFE               datetime,
   SEVISE               varchar(30) comment 'variable de sesion, utilizada para que una sesion no vote dos veces el mismo servicio.',
   SEVIEMAIL            varchar(100),
   SERUTPRO             varchar(10) comment 'rut del profesional que expone el servicio',
   primary key (SEVIID)
);

alter table SERVICIO_VISITA comment 'METRICA: VISITAS REALIZADAS A SERVICIOS';

/*==============================================================*/
/* Table: SERVICIO_VOTACION                                     */
/*==============================================================*/
create table SERVICIO_VOTACION
(
   SVID                 bigint not null auto_increment,
   SEID                 int not null,
   SVSE                 varchar(50),
   SVFE                 datetime,
   SVOK                 int,
   SVNO                 int,
   primary key (SVID)
);

alter table SERVICIO_VOTACION comment 'votaciones al servicio';

/*==============================================================*/
/* Table: SLIDER                                                */
/*==============================================================*/
create table SLIDER
(
   SID                  bigint not null auto_increment,
   PRUT                 varchar(10),
   STIT1                varchar(30) comment 'titulo 1',
   STIT2                varchar(40) comment 'titulo 2',
   SDES                 varchar(235) comment 'descripción',
   SPOS                 int comment 'numerador de posición del slider, posiciones 1, 2 y 3.',
   SEST                 int comment 'Estado deslizador.
            sEst = [ 0 | 1 ]
            0=incompleto
            1=completo
            
            Cuando el profesonal finaliza de completar la información.
            ',
   SDFL                 varchar(28) comment 'identificador de fotografía en google drive',
   SNOMIMG              varchar(100) comment 'nombre de la imagen',
   SPOSIMG              int comment 'sw indica si el registro posee imagen asociada',
   primary key (SID)
);

alter table SLIDER comment 'titulo profesional';

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO
(
   UMAIL                varchar(50) not null,
   CPAID                bigint not null,
   URUT                 varchar(10),
   UDV                  varchar(1),
   UNOMBRE              varchar(50),
   UAPELLIDO            varchar(50),
   UALIAS               varchar(50),
   UPASS                varchar(50),
   USEXO                varchar(1),
   UFECHANAC            date,
   UCLAREC              varchar(50) comment 'clave recuperación contraseña, es asignada aleatoriamente por el sistema.',
   UESTCLAREC           int comment 'indica estado de recuperación de clave:
            
            0 = en proceso de recuperación.
            1= clave recuperada',
   primary key (UMAIL)
);

/*==============================================================*/
/* Table: USUARIO_DIRECCION                                     */
/*==============================================================*/
create table USUARIO_DIRECCION
(
   DIRUSRID             bigint not null auto_increment,
   DCOD                 bigint not null,
   UMAIL                varchar(50),
   primary key (DIRUSRID)
);

alter table CARRO_DETALLE add constraint FK_CARRO_POSEE_DETALLE foreign key (CAID)
      references CARRO (CAID) on delete restrict on update restrict;

alter table COLECCION_PRODUCTO add constraint FK_COL_POSEE_MUCHOS foreign key (COID)
      references COLECCION (COID) on delete restrict on update restrict;

alter table COLECCION_PRODUCTO add constraint FK_PRO_EXISTEN_EN_MUCHAS foreign key (PROID)
      references PRODUCTO (PROID) on delete restrict on update restrict;

alter table COMPLEMENTADOR add constraint FK_ACCESAN_MUCHOS_COMPLEMENTADORES foreign key (CPAID)
      references CPANEL (CPAID) on delete restrict on update restrict;

alter table COMPLEMENTADOR_DIRECCION add constraint FK_RELATIONSHIP_62 foreign key (COMPRUT)
      references COMPLEMENTADOR (COMPRUT) on delete restrict on update restrict;

alter table COMPLEMENTADOR_DIRECCION add constraint FK_RELATIONSHIP_65 foreign key (DCOD)
      references DIRECCION (DCOD) on delete restrict on update restrict;

alter table COMUNA add constraint FK_POSEE_COMUNA foreign key (PROVCOD)
      references PROVINCIA (PROVCOD) on delete restrict on update restrict;

alter table COORDENADAS add constraint FK_COOR_DIRECCION foreign key (DCOD)
      references DIRECCION (DCOD) on delete restrict on update restrict;

alter table DIRECCION add constraint FK_COM_MUCH_DIR foreign key (CCOD)
      references COMUNA (CCOD) on delete restrict on update restrict;

alter table DIRECCION add constraint FK_PROV_MUCH_DIR foreign key (PROVCOD)
      references PROVINCIA (PROVCOD) on delete restrict on update restrict;

alter table DIRECCION add constraint FK_REGION_MUCH_DIR foreign key (RCOD)
      references REGION (RCOD) on delete restrict on update restrict;

alter table ESTUDIOS add constraint FK_PROFESIONAL_POSEE_ESTUDIOS foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table EXPERIENCIA add constraint FK_PROFESIONAL_POSEE_EXPERIENCIA foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table INTERNO add constraint FK_ACCESAN_MUCHOS_INTERNOS foreign key (CPAID)
      references CPANEL (CPAID) on delete restrict on update restrict;

alter table INTERNO_DIRECCION add constraint FK_RELATIONSHIP_63 foreign key (RRUT)
      references INTERNO (RRUT) on delete restrict on update restrict;

alter table INTERNO_DIRECCION add constraint FK_RELATIONSHIP_66 foreign key (DCOD)
      references DIRECCION (DCOD) on delete restrict on update restrict;

alter table LOGIN add constraint FK_ACCEDE_COMPLEMENTADOR foreign key (COMPRUT)
      references COMPLEMENTADOR (COMPRUT) on delete restrict on update restrict;

alter table LOGIN add constraint FK_ACCEDE_INTERNO foreign key (RRUT)
      references INTERNO (RRUT) on delete restrict on update restrict;

alter table LOGIN add constraint FK_ACCEDE_PROFESIONAL foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table LOGIN_USUARIO add constraint FK_USR_POSEE_MUCHOS_ACCESOS foreign key (UMAIL)
      references USUARIO (UMAIL) on delete restrict on update restrict;

alter table OTROS add constraint FK_PROFESIONAL_POSEE_OTRO foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PORTAFOLIO add constraint FK_PROFESIONAL_POSEE_PORTAFOLIO foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table POSTULACION_RESPALDO add constraint FK_POSEE_URL_RESPALDO foreign key (POSID)
      references POSTULACION (POSID) on delete restrict on update restrict;

alter table POSTULACION_TRANSICION add constraint FK_GENERA_UNA foreign key (POSID)
      references POSTULACION (POSID) on delete restrict on update restrict;

alter table PRODUCTO add constraint FK_CAT1_EXISTE_MUCH_PRO foreign key (PCP1_ID)
      references PRODUCTO_CATEGORIA1 (PCP1_ID) on delete restrict on update restrict;

alter table PRODUCTO add constraint FK_CAT2_EXISTE_MUCH_PRO foreign key (PCP2_ID)
      references PRODUCTO_CATEGORIA2 (PCP2_ID) on delete restrict on update restrict;

alter table PRODUCTO add constraint FK_CAT3_EXISTE_MUCH_PRO foreign key (PCP3_ID)
      references PRODUCTO_CATEGORIA3 (PCP3_ID) on delete restrict on update restrict;

alter table PRODUCTO add constraint FK_DESCTO_PARA_MUCHOS foreign key (PETID)
      references PRODUCTO_ETIQUETA (PETID) on delete restrict on update restrict;

alter table PRODUCTO add constraint FK_PRODUCTO_POSEE_MARCA foreign key (MARID)
      references MARCAS (MARID) on delete restrict on update restrict;

alter table PRODUCTO add constraint FK_PRODUCTO_POSEE_RANGO foreign key (CAT_RAN_ID)
      references CATALOGO_RANGO_PRECIO (RAN_ID) on delete restrict on update restrict;

alter table PRODUCTO add constraint FK_PRODUCTO_POSEE_RANGO_PROFESIONA foreign key (RAN_ID)
      references CATALOGO_RANGO_PRECIO (RAN_ID) on delete restrict on update restrict;

alter table PRODUCTO_CATEGORIA2 add constraint FK_CAT1_POSEE_MUCH_CAT2 foreign key (PCP1_ID)
      references PRODUCTO_CATEGORIA1 (PCP1_ID) on delete restrict on update restrict;

alter table PRODUCTO_CATEGORIA3 add constraint FK_CAT2_POSEE_MUCH_CAT3 foreign key (PCP2_ID)
      references PRODUCTO_CATEGORIA2 (PCP2_ID) on delete restrict on update restrict;

alter table PRODUCTO_COLOR add constraint FK_PRODUCTO_COLORES foreign key (PROID)
      references PRODUCTO (PROID) on delete restrict on update restrict;

alter table PRODUCTO_COMENTARIO_PROFESIONAL add constraint FK_REALIZA_MUCHOS_COMENTARIOS foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PRODUCTO_COMENTARIO_PROFESIONAL add constraint FK_RECIBE_MUCHOS_COMENTARIOS foreign key (PROID)
      references PRODUCTO (PROID) on delete restrict on update restrict;

alter table PRODUCTO_CONTENIDO add constraint FK_PRO_PRO_POSEE_MUCH_CONT foreign key (PROID)
      references PRODUCTO (PROID) on delete restrict on update restrict;

alter table PRODUCTO_DENUNCIA add constraint FK_PRO_PRO_POSEE_MUCH_DEN foreign key (PROID)
      references PRODUCTO (PROID) on delete restrict on update restrict;

alter table PRODUCTO_MEDIDA add constraint FK_MEDIDA_POSEE foreign key (MEDID)
      references MEDIDA (MEDID) on delete restrict on update restrict;

alter table PRODUCTO_MEDIDA add constraint FK_PRODUCTO_MEDIDAS foreign key (PROID)
      references PRODUCTO (PROID) on delete restrict on update restrict;

alter table PRODUCTO_PROFESIONAL add constraint FK_A_MUCHOS_PROFESIONALES foreign key (PROID)
      references PRODUCTO (PROID) on delete restrict on update restrict;

alter table PRODUCTO_PROFESIONAL add constraint FK_POSEE_MUCHOS_PRODUCTOS foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PRODUCTO_PUNTUACION add constraint FK_PRO_PRO_POSEE_MUCH_PUN foreign key (PROID)
      references PRODUCTO (PROID) on delete restrict on update restrict;

alter table PRODUCTO_VISITAS add constraint FK_PRO_PRO_POSEE_MUCH_VI foreign key (PROID)
      references PRODUCTO (PROID) on delete restrict on update restrict;

alter table PRODUCTO_VOTACION add constraint FK_PRO_PRO_POSEE_MUCH_VOT foreign key (PROID)
      references PRODUCTO (PROID) on delete restrict on update restrict;

alter table PRODUCTO_WISHLIST_PROFESIONAL add constraint FK_PRODUCTO_DESEADO_PROFESIONAL foreign key (PROID)
      references PRODUCTO (PROID) on delete restrict on update restrict;

alter table PRODUCTO_WISHLIST_PROFESIONAL add constraint FK_PROFESIONAL_DESEA_PRODUCTO foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROFESIONAL add constraint FK_ACCESAN_MUCHOS_PROFESIONALES foreign key (CPAID)
      references CPANEL (CPAID) on delete restrict on update restrict;

alter table PROFESIONAL_CONTACTO add constraint FK_OBTIENE_MUCHOS_CONTACTOS foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROFESIONAL_CUENTAS add constraint FK_BCO_TIENE_MUCHAS foreign key (BCOID)
      references BANCOS (BCOID) on delete restrict on update restrict;

alter table PROFESIONAL_CUENTAS add constraint FK_PROF_POSEE_MUCHAS foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROFESIONAL_DENUNCIA add constraint FK_PROFESIONAL_POSEE_MUCHAS_DENUNCIAS foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROFESIONAL_DIRECCION add constraint FK_RELATIONSHIP_60 foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROFESIONAL_DIRECCION add constraint FK_RELATIONSHIP_67 foreign key (DCOD)
      references DIRECCION (DCOD) on delete restrict on update restrict;

alter table PROFESIONAL_PERFIL add constraint FK_POSEE_MUCHOS_PERFILES foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROFESIONAL_REDES_SOCIAL add constraint FK_EXISTE_EN_RED_SOCIAL foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROFESIONAL_SEGUIDOR add constraint FK_POSEE_MUCHSO_SEGUIDORES foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROFESIONAL_SERVICIO add constraint FK_RELATIONSHIP_35 foreign key (SEID)
      references SERVICIO (SEID) on delete restrict on update restrict;

alter table PROFESIONAL_SERVICIO add constraint FK_RELATIONSHIP_36 foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROFESIONAL_VISITA_CURRICULUM add constraint FK_POSEE_MUCHAS_VISITAS_CURRICULUM foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROFESIONAL_VISITA_PERFIL add constraint FK_POSEE_MUCHAS_VISITAS_PERFIL foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROFESIONAL_VOTACION add constraint FK_POSEE_MUCHAS_VOTACIONES_LIKE foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PROVINCIA add constraint FK_POSEE_PROVINCIA foreign key (RCOD)
      references REGION (RCOD) on delete restrict on update restrict;

alter table PUBLICACION_COMENTARIO add constraint FK_PUBLICACION_RECIBE_MUCHOS_COMENTARIOS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_COMPLEMENTADOR add constraint FK_PERTENECE_PUBLICACION_COMPLEMENTADOR foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_COMPLEMENTADOR add constraint FK_REALIZA_COMPLEMENTADOR_PUBLICACION foreign key (COMPRUT)
      references COMPLEMENTADOR (COMPRUT) on delete restrict on update restrict;

alter table PUBLICACION_CONTENIDO add constraint FK_RELATIONSHIP_37 foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_DENUNCIA add constraint FK_POSEE_MUCHAS_DENUNCIAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_ETIQUETA add constraint FK_EXISTEN_MUCHAS_EN foreign key (ETNOM)
      references PUBLICACION_LIST_ETIQUETAS (ETNOM) on delete restrict on update restrict;

alter table PUBLICACION_ETIQUETA add constraint FK_POSEE_MUCHAS_ETIQUETAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_INTERNO add constraint FK_PERTENECE_PUBLICACION_INTERNO foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_INTERNO add constraint FK_REALIZA_INTERNO_PUBLICACION foreign key (RRUT)
      references INTERNO (RRUT) on delete restrict on update restrict;

alter table PUBLICACION_LIST_ETIQUETAS add constraint FK_POSEE_MUCHAS foreign key (CATETINOM)
      references PUBLICACION_CATEGORIA_ETIQUETA (CATETINOM) on delete restrict on update restrict;

alter table PUBLICACION_PROFESIONAL add constraint FK_PERTENECE_PUBLICACION_PROFESIONAL foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_PROFESIONAL add constraint FK_REALIZA_PROFESIONAL_PUBLICACION foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table PUBLICACION_REFERENCIA add constraint FK_PUBLICACION_POSEE_REFERENCIAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_REFERENCIA add constraint FK_TIPO_REFERENCIA_ESTA_EN_PUBLICACIONES foreign key (REID)
      references PUBLICACION_LIST_REFERENCIA (REID) on delete restrict on update restrict;

alter table PUBLICACION_VISITAS add constraint FK_POSEE_MUCHAS_VISITAS foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table PUBLICACION_VOTACION add constraint FK_POSEE_MUCHAS_VOTACIONES foreign key (PUID)
      references PUBLICACION (PUID) on delete restrict on update restrict;

alter table SERVICIO add constraint FK_CREA_MUCHOS foreign key (RRUT)
      references INTERNO (RRUT) on delete restrict on update restrict;

alter table SERVICIO_VISITA add constraint FK_RELATIONSHIP_39 foreign key (SEID)
      references SERVICIO (SEID) on delete restrict on update restrict;

alter table SERVICIO_VOTACION add constraint FK_SERVICIO_POSEE_MUCHAS_VOTACIONES foreign key (SEID)
      references SERVICIO (SEID) on delete restrict on update restrict;

alter table SLIDER add constraint FK_POSEE_SLIDER foreign key (PRUT)
      references PROFESIONAL (PRUT) on delete restrict on update restrict;

alter table USUARIO add constraint FK_ACCESAN_MUCHOS_USUARIOS foreign key (CPAID)
      references CPANEL (CPAID) on delete restrict on update restrict;

alter table USUARIO_DIRECCION add constraint FK_RELATIONSHIP_61 foreign key (UMAIL)
      references USUARIO (UMAIL) on delete restrict on update restrict;

alter table USUARIO_DIRECCION add constraint FK_RELATIONSHIP_64 foreign key (DCOD)
      references DIRECCION (DCOD) on delete restrict on update restrict;


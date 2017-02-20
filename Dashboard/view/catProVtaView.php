<?php
session_start();     

//Navegación - para determinar navegación 
    $nav=1; //slider
//Nivel -- para determinar ruta de archivos incluidos
    $nivel=2; 
    
    if($_SESSION['sesion']!=1){
        header("Location: ../../index.php");
    }
    
    if(!isset($_SESSION['sesion'])){
        $_SESSION['sesion']=0;
        //$_SESSION['sesion_id']='';
        $_SESSION['email']='';
        $_SESSION['nombre']='';
        $_SESSION['apellido']='';
        $_SESSION['alias']='';
        $_SESSION['rol']='';
        $_SESSION['rut']='';
        $_SESSION['dv']='';
        $_SESSION['url']='';
        $_SESSION['idPos']='';
        
    }        
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<!-- Basic Page Needs================ -->
            <meta charset="utf-8">
            <title>Bodyflex - [PRO] Mi Cat&aacute;logo</title>
            <meta name="description" content="">
            <meta name="author" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- end: Meta -->
	
	<!-- start: Mobile Specific -->
            <meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- end: Mobile Specific -->
	
	<!-- start: CSS -->
            <link id="bootstrap-style" href="../css/bootstrap.min.css" rel="stylesheet">
            <link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
            <link id="base-style" href="../css/style.css" rel="stylesheet">
            <link id="base-style-responsive" href="../css/style-responsive.css" rel="stylesheet">
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext' rel='stylesheet' type='text/css'>
            <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
            <link rel="stylesheet" href="../../font-awesome-4.5.0/css/font-awesome.min.css">
            
            <!-- sweetalert-master-->
                <script src="../sweetalert-master2/sweetalert2.min.js"></script>
                <link rel="stylesheet" type="text/css" href="../sweetalert-master2/sweetalert2.css">
            <!-- sweetalert-master-->
            <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>    
            
            <style>
                .ajustar{
                    width: 800px;
                    float: left;
                    white-space: pre; /* CSS 2.0 */
                    white-space: pre-wrap; /* CSS 2.1 */
                    white-space: pre-line; /* CSS 3.0 */
                    white-space: -pre-wrap; /* Opera 4-6 */
                    white-space: -o-pre-wrap; /* Opera 7 */
                    white-space: -moz-pre-wrap; /* Mozilla */
                    white-space: -hp-pre-wrap; /* HP */
                    word-wrap: break-word; /* IE 5+ */
                }
                #esperaImgCon{
                    height: 50px; 
                    width: 50px;
                    margin-left: 25px;
                    margin-top: 100px;
                    display: none;
                    background: url("../images/load_32x32.gif") no-repeat top center;
                }
                #margenVentaPresencial{
                    cursor: pointer; 
                    color: blue; 
                    font-size: 14px; 
                    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
                    font-weight: bold; 
                    margin-left: 400px;
                }
                #margenVentaCatalogo{
                    cursor: pointer; 
                    color: blue; 
                    font-size: 14px; 
                    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
                    font-weight: bold; 
                    margin-left: 100px;
                }
            </style>
            <script>
                $( document ).ready(function(){
                    
                    //VENTA PRESENCIAL
                    $('#mPreVtaBfx').click(function(){
                        var msgPreVtaBfx='<p style="color: #1b2426;">Precio de lista <b style="font-size: 18px; font-weight: bold;">Bodyflex</b> para <b style="font-size: 18px; font-weight: bold;">publico general</b>.</p>';                  
                        swal({   
                            title: 'Precio Lista Bodyflex',   
                            html: msgPreVtaBfx,   
                            type: "success", 
                            allowOutsideClick: true,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    });
                    
                    $('#mPreVtaPro').click(function(){
                        var msgPreVtaPro='<p style="color: #1b2426;">Precio de lista <b style="font-size: 18px; font-weight: bold;">exclusivo</b> para profesionales.</p>';                  
                        swal({   
                            title: 'Precio Profesionales',   
                            html: msgPreVtaPro,   
                            type: "success", 
                            allowOutsideClick: true,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    });
                    
                    $('#mPrePorVta').click(function(){
                        var msgPrePorVta='<p style="color: #1b2426;">Porcentaje de utilidad por venta con respecto al precio de lista Bodyflex.</p>';                  
                        swal({   
                            title: 'Porcentaje Utilidad',   
                            html: msgPrePorVta,   
                            type: "success", 
                            allowOutsideClick: true,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    });
                    
                    $('#mPreUtiVta').click(function(){
                        var msgPreUtiVta='<p style="color: #1b2426;">Utilidad bruta por venta <b style="font-size: 18px; font-weight: bold;">presencial</b> con respecto al precio de lista Bodyflex.</p><br>';                  
                        if($('#txtPreUtVta').val()!=""){
                            msgPreUtiVta+='<p style="font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif;font-size: 28px; color: black; text-align: center;">'+$('#txtPreUtVta').val()+'</p>';                  
                        }  
                        swal({   
                            title: 'Utilidad Bruta',   
                            html: msgPreUtiVta,   
                            type: "success", 
                            allowOutsideClick: true,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    });

                    //VENTA POR CATALOGO
                    $('#mCatIvaVta').click(function(){
                        var msgCatIvaVta='<p style="color: #1b2426;">IVA del precio de lista Bodyflex.</p>';                  
                        swal({   
                            title: 'IVA precio Venta',   
                            html: msgCatIvaVta,   
                            type: "success", 
                            allowOutsideClick: true,
                            animation: true,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    });
                    
                    $('#mCatNetVta').click(function(){
                        var msgCatNetVta='<p style="color: #1b2426;">Precio neto del precio de lista Bodyflex.</p>';                  
                        swal({   
                            title: 'Precio Neto',   
                            html: msgCatNetVta,   
                            type: "success", 
                            allowOutsideClick: true,
                            animation: true,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    });
                    
                    $('#mCatTbkVta').click(function(){
                        var msgCatTbkVta='<p style="color: #1b2426;">Monto comisión Transbank calculado sobre el precio de lista Bodyflex y cobrado por cada transacción.</p>';                  
                        swal({   
                            title: 'Comisión Transbank',   
                            html: msgCatTbkVta,   
                            type: "success", 
                            allowOutsideClick: true,
                            animation: true,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    });
                    
                    $('#mCatPorVta').click(function(){
                        var msgCatPorVta='<p style="color: #1b2426;">Porcentaje de utilidad otorgado por venta realizada en perfil del profesional.</p><br>';                  
                        msgCatPorVta+='<p style="color: #1b2426;">El porcentaje aplica sobre el precio neto Bodyflex una vez descontados los impuestos y comisiones asociadas por cada transacción.</p>';                  
                        swal({   
                            title: 'Porcentaje de Venta',   
                            html: msgCatPorVta,   
                            type: "success", 
                            allowOutsideClick: true,
                            animation: true,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    });
                    
                    $('#mCatUtiVta').click(function(){
                        var msgCatUtiVta='<p style="color: #1b2426;">Monto de comisión otorgado por venta en perfil del profesional.</p><br>';                  
                        if($('#txtCatUtiVta').length>0){
                            msgCatUtiVta+='<p style="font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif;font-size: 28px; color: black; text-align: center;">'+$('#txtCatUtiVta').val()+'</p>';                  
                        }    
                        swal({   
                            title: 'Utilidad Bruta',   
                            html: msgCatUtiVta,   
                            type: "success", 
                            allowOutsideClick: true,
                            animation: false,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    });

                    document.querySelector('button#modalVerImagen').onclick = function(){
                        var URLdomain   = window.location.host;
                        var URLprotocol = window.location.protocol;
        
                        var url='';
                        var msgVerImg='La imagen <b style="font-size: 18px; font-weight: bold;">carga</b> en segundos dependiendo de la velocidad de internet.</p>';  
                                                
                        //alert($("#idDrive").val());
                        url='http://drive.google.com/uc?export=view&id='+$("#idDrive").val();
                        
                        var parametros = {"url" : url};      
                        
                        $.ajax({
                            data:  parametros,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/view/enlaces.php",
                            type:  'post',
                            datetype: 'xml',
                            beforeSend: function(){
                                $("#esperaImgCon").show();
                                $("#imgGreen").hide();
                            },
                            success:  function (xml){     

                                //alert('enlaces ' + xml);
                                $("#esperaImgCon").hide();
                                $("#imgGreen").show();
                                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                
                                //alert('dato ' + dato);
                                
                                switch(dato){
                                    case '0':

                                        var msgErrImg='<p style="color: #1b2426;">Problemas al cargar imagen, <b style="font-size: 16px; font-weight: bold;">verifique la existencia y/o permisos</b> en Google Drive.</p>';                  
                                        swal({   
                                            title: 'Error al Visualizar',   
                                            html: msgErrImg,   
                                            type: "error", 
                                            allowOutsideClick: true,
                                            confirmButtonColor: '#FFCC00',
                                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                                        });
                                        break;

                                    default:
                                        
                                        swal({   
                                            title: 'Imagen!',
                                            text: msgVerImg,
                                            imageUrl: url,
                                            imageWidth: 800,
                                            imageHeight: 600,
                                            animation: false,
                                            confirmButtonColor: '#FFCC00',
                                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                                        });
                                        
                                        break;

                                }              
                            }
                        }); 

                    };

                    $(function () {
                        $('[data-toggle="tooltip"]').tooltip();
                    });

                });  
                
                function getImagen(id){
                    //alert('id ' + id);
                    $("#idDrive").val(id);
                    $("#modalVerImagen").click();    
                }
                
                //VENTA PRESENCIAL
                
                    function ventaPresencial(){
                    
                        var msgVtaPre='<p style="font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;  font-size: 18px; color: #1b2426;">Adquiere nuestros productos a precios <b style="font-family: Impact, Charcoal, sans-serif;">preferenciales</b> para profesionales del deporte y distribúyelos <b style="font-family: Impact, Charcoal, sans-serif;">presencialmente</b> entre tus clientes al valor de lista Bodyflex obteniendo <b style="font-family: Impact, Charcoal, sans-serif;">altos márgenes de utilidad</b>.</p><br>';                  
                        msgVtaPre+='<p style="font-family: Impact, Charcoal, sans-serif; font-size: 18px; color: green;">Recuerda que también puedes agregar tus propios productos y promocionarlos bajo tu prefil profesional.</p>';                  
                        swal({   
                            title: 'Venta Presencial',   
                            html: msgVtaPre,   
                            type: "success", 
                            allowOutsideClick: true,
                            animation: true,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    
                    }   
                    
                    function ventaPerfil(){
                    
                        var msgVtaPre='<p style="font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-size: 18px; color: #1b2426;">Agrega desde nuestro catálogo <b style="font-family: Impact, Charcoal, sans-serif;">exclusivo para profesionales del deporte</b> los productos que desees comercializar sin necesidad de comprarlos, tus clientes podrán adquirirlos a través de tu perfil personalizado en <b style="font-family: Impact, Charcoal, sans-serif;">línea</b> con la modalidad de pago que ellos estimen conveniente, obtendrás atractivas <b style="font-family: Impact, Charcoal, sans-serif;">comisiones</b></p><br>';                  
                        swal({   
                            title: 'Venta por Perfil',   
                            html: msgVtaPre,   
                            type: "success", 
                            allowOutsideClick: true,
                            animation: true,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    
                    }  
                
                    function PreVtaBfx(){
                        $("#mPreVtaBfx").click();    
                    }
                    function PreVtaPro(){
                        $("#mPreVtaPro").click();    
                    }
                    function PrePorVta(){
                        $("#mPrePorVta").click();    
                    }
                    function PreUtVta(){
                        $("#mPreUtiVta").click();    
                    }
                
                //VENTA X CATALOGO
                    function CatIvaVta(){
                        $("#mCatIvaVta").click();     
                    }
                    function CatNetVta(){
                        $("#mCatNetVta").click();     
                    }
                    function CatTbkVta(){
                        $("#mCatTbkVta").click();     
                    }
                    function CatPorVta(){
                        $("#mCatPorVta").click();     
                    }
                    function CatUtiVta(){
                        $("#mCatUtiVta").click();     
                    }
                    
                    function margenPresencial(){

                        var msgImpPer='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">El margen presencial corresponde a la utilidad para el profesional con respecto al <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">precio de lista Bodyflex</b>.</p>';

                        swal({   
                                title: 'Margen Presencial',
                                text: msgImpPer,
                                imageUrl: '../../images/margenPresencial.jpg',
                                imageWidth: 400,
                                imageHeight: 200,
                                animation: false,
                                confirmButtonColor: '#FFCC00',
                                confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });

                    }
                    function margenCatalogo(){

                        var msgImpPer='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">La comisión de venta por catálogo corresponde a la utilidad para el profesional por venta <br><b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">por medio de su perfil web</b> con respecto al <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">precio de lista Bodyflex</b>.</p>';

                        swal({   
                                title: 'Margen Catálogo',
                                text: msgImpPer,
                                imageUrl: '../../images/margenCatalogo.jpg',
                                imageWidth: 300,
                                imageHeight: 300,
                                animation: false,
                                confirmButtonColor: '#FFCC00',
                                confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });

                    }
                
            </script>
            
	<!-- end: CSS -->
	
        <!-- Favicons=============================================== -->
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../images/apple-touch-icon-144.png">
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../images/apple-touch-icon-114.png">
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../images/apple-touch-icon-72.png">
            <link rel="apple-touch-icon-precomposed" href="../images/apple-touch-icon-57.png">
            <link rel="shortcut icon" href="../images/favicon.ico">
	<!-- Favicons=============================================== -->
		
</head>

<body>
    <!-- start: Header -->
    <?php include("../../../bodyflex/Dashboard/modulos/header.php"); ?>
    <!-- start: Header -->
	
    <div class="container-fluid-full">
        <div class="row-fluid">

            <!-- start: Main Menu -->
            <?php include("../../menu/menu.php"); ?>
            <!-- end: Main Menu -->

            <!-- start: Content -->
                <div id="content" class="span10">
			
                    <!-- start: navegación-->
                    <?php include("../modulos/navegacion.php"); ?>
                    <!-- end: navegación -->
			                        
                    <!-- HEADER -->
                        <?php include("../modulos/headerUser.php"); ?>
                    <!-- HEADER -->
                    
                    <div style="height: 650px;"> <!-- border-style: solid; border-color: blue; -->
                        <?php include("../modulos/catProVtaLeft.php"); ?>
                        <?php include("../modulos/catProVtaRight.php"); ?>
                    </div>
                   
                    <!-- VTA. PRESENCIAL Y POR CATALOGO -->
                    <?php include("../modulos/catProVtaNeg.php"); ?>
                    <!-- CONTENIDO: IMAGENES Y VIDEOS -->
                    <?php include("../modulos/catProVtaCont.php"); ?>
                    
                    <div class="row-fluid sortable"><!-- style="border-style: solid; border-color: red;" -->		
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                                    <i class="halflings-icon edit"></i>
                                    <span class="break"></span>
                                    Productos de nuestro Cat&aacute;logo en tu Perfil Web
                                    <span id="margenVentaPresencial" onclick="margenPresencial();">
                                        <u>¿MARGEN VENTA PRESENCIAL?</u>
                                    </span>
                                    <span id="margenVentaCatalogo" onclick="margenCatalogo();">
                                        <u>¿COMISIÓN VENTA CATÁLOGO?</u>
                                    </span>
                                </h2>
                     
                            </div>
                            <div class="box-content" id="conTabla"><!--contenedor de tabla -->
                                <table id="tblProducto" class="table table-striped table-bordered bootstrap-datatable"> <!-- -->
                                    <thead>
                                        <tr>
                                            <th style="font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; text-align: center; font-size: 12px; color: #1b2426;">Id</th>
                                            <th style="font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; text-align: center; font-size: 12px; color: #1b2426;">Nombre</th>
                                            <th style="font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; text-align: center; font-size: 12px; color: #1b2426;">Marca</th>
                                            <th style="font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; text-align: center; font-size: 16px; color: #1b2426;">Precio Bodyflex</th>
                                            <th style="font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; text-align: center; font-size: 16px; color: #1b2426;">Precio Profesional</th> 
                                            <th style="font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif; text-align: center; color: #1b2426; font-size: 18px; background-color: gainsboro;">Margen Venta Presencial</th> 
                                            <th style="font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif; text-align: center; color: #1b2426; font-size: 18px; background-color: gainsboro;">Comisi&oacute;n Venta Cat&aacute;logo</th> 
                                        </tr>
                                    </thead>   
                                    <tbody id="tbody"></tbody>
                                </table> 
                                <div id='idPag' class="pagination pagination-centered"></div>
                            </div>
                        </div><!--/span-->
                    </div><!--/row-->
                </div><!--/.fluid-container-->
            <!-- end: Content -->    
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->
		
    <!-- Modal -->
    
        <!-- VENTA PRESENCIAL -->
        <button id="mPreVtaBfx" style="display: none;">mPreVtaBfx</button>
        <button id="mPreVtaPro" style="display: none;">mPreVtaPro</button>
        <button id="mPrePorVta" style="display: none;">mPrePorVta</button>
        <button id="mPreUtiVta" style="display: none;">mPreUtiVta</button>
    
        <!-- VENTA X CATALOG-->
        <button id="mCatIvaVta" style="display: none;">mCatIvaVta</button>
        <button id="mCatNetVta" style="display: none;">mCatNetVta</button>
        <button id="mCatTbkVta" style="display: none;">mCatTbkVta</button>
        <button id="mCatPorVta" style="display: none;">mCatPorVta</button>
        <button id="mCatUtiVta" style="display: none;">mCatUtiVta</button>
        
    <button id="modalVerImagen" style="display: none;">modalVerImagen</button>
    <div class="modal hide fade" id="myModal"></div>
    <!-- Modal -->
    
    <div class="clearfix"></div>
    <?php include("../../../bodyflex/Dashboard/modulos/footer.php"); ?>
    <!-- start: JavaScript-->
    <?php include("../../../bodyflex/Dashboard/modulos/javaScript.php"); ?>
    
    <script src="../controller/catProVtaController.js"></script>
    <script src="../controller/catProVtaContController.js"></script>
    <script src='../controller/cerrarSesion.js'></script>
    <!-- end: JavaScript-->
    
    <!-- Datos sesion, solo si esta definida variable sesion ================================= -->
    <?php if(isset($_SESSION['sesion'])){ ?>
        email<input type="text" id="email" value="<?= $_SESSION['email'];?>"><br>
        nombre<input type="text" id="nombre" value="<?= $_SESSION['nombre'];?>"><br>
        apellido<input type="text" id="apellido" value="<?= $_SESSION['apellido'];?>"><br>
        alias<input type="text" id="alias" value="<?= $_SESSION['alias'];?>"><br>
        rol<input type="text" id="rol" value= "<?= $_SESSION['rol'];?>"><br>
        rut<input type="text" id="rut" value= "<?= $_SESSION['rut'];?>"><br>
        dv<input type="text" id="dv" value= "<?= $_SESSION['dv'];?>"><br>
        url<input type="text" id="url" value= "<?= $_SESSION['url'];?>"><br>
        idPos<input type="text" id="idPos" value= "<?= $_SESSION['idPos'] ;?>"><br>
    <?php } ?>
    sesion<input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>"><br>
    session_id<input type="text" id="session_id" value= "<?= $_SESSION['sesion_id'];?>"><br>
    idDrive<input type="text" id="idDrive" value=""><br>
    <!-- Datos sesion================================= -->    
    
</body>
</html>

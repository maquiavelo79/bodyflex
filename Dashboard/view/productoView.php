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
            <title>Bodyflex - [PRO] Productos</title>
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
            </style>
            <script>
                $( document ).ready(function(){
                    document.querySelector('button#modalInfoContent').onclick = function(){
                        var msg1='<p style="color: #1b2426;">La primera imagen que ingreses se establecerá como imagen <b style="font-size: 18px; font-weight: bold;">principal</b> del producto.</p>';                  
                        swal({   
                            title: 'Imagen Principal',   
                            text: msg1,   
                            type: "info", 
                            allowOutsideClick: true,
                            animation: true,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                    };

                    document.querySelector('button#modalVerImagen').onclick = function(){
                        var URLdomain   = window.location.host;
                        var URLprotocol = window.location.protocol;
        
                        var url='';
                        var msg2='<p style="color: #1b2426;">La imagen <b style="font-size: 18px; font-weight: bold;">carga</b> en segundos dependiendo de la velocidad de internet.</p>';  
                                                
                        //alert($("#idDrive").val());
                        url='http://drive.google.com/uc?export=view&id='+$("#idDrive").val();
                        
                        var parametros = {"url" : url};      
                        
                        $.ajax({
                            data:  parametros,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/view/enlaces.php",
                            type:  'post',
                            datetype: 'xml',
                            async: true,
                            beforeSend: function(){
                                $("#espera").show();
                            },
                            success:  function (xml){     

                                //alert('enlaces ' + xml);
                                $("#espera").hide();
                                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                
                                //alert('dato ' + dato);
                                
                                switch(dato){
                                    case '0':

                                        var msg1='<p style="color: #1b2426;">Problemas al cargar imagen, <b style="font-size: 16px; font-weight: bold;">verifique la existencia y/o permisos</b> en Google Drive.</p>';                  
                                        swal({   
                                            title: 'Error al visualizar',   
                                            text: msg1,   
                                            type: "error", 
                                            confirmButtonColor: "#DD6B55",
                                            allowOutsideClick: true,
                                            animation: false
                                        });
                                        break;

                                    default:
                                       
                                        swal({   
                                            title: 'Imagen!',
                                            text: msg2,
                                            imageUrl: url,
                                            imageWidth: 400,
                                            imageHeight: 200,
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
                
                function getInformacion(){
                    $("#modalInfoContent").click();    
                }
                function getImagen(id){
                    //alert('id ' + id);
                    $("#idDrive").val(id);
                    $("#modalVerImagen").click();    
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
                    
                    <div class="row-fluid">
                        <?php include("../modulos/productoLeft.php"); ?>
                        <?php include("../modulos/productoRight.php"); ?>
                    </div>
                    
                    <div class="row-fluid">	
                        <div class="row-fluid sortable">
                            <div id="botonera" class="box span12">
                                <div class="form-horizontal" style="width: 800px;">
                                    <div style="float: left;">
                                        <button id="btnGuardar" type="button" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" class="btn">
                                            <i class="fa fa-plus-circle"></i>&nbsp;
                                            Guardar
                                        </button>
                                        <button id="btnEliminar" type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn btn-info btn-setting">
                                            <i class="fa fa-minus-circle"></i>&nbsp;
                                            Eliminar
                                        </button>
                                        <button id="btnLimpiar" type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn">
                                            <i class="fa fa-paint-brush"></i>&nbsp;
                                            Limpiar
                                        </button>
                                        <button id="btnProbar" type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn">
                                            <i class="fa fa-cogs"></i>&nbsp;
                                            Probar
                                        </button>
                                        <button id="btnPublicar" type="button" style="display: none; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" class="btn">
                                            <i class="icon-bullhorn"></i>&nbsp;Publicar
                                        </button>
                                        <button id="btnEditar" type="button" style="display: none; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" class="btn">
                                            <i class="fa fa-pencil-square-o"></i>Editar
                                        </button>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div id="conWarning" style="display:none;" class="box-content alerts"></div>
                        <div id="espera" class="form-actions" style="display:none;">
                            <h4 class="alert-heading">&nbsp;</h4>
                        </div>
                    </div>
                    
                    <?php include("../modulos/productoProContenido.php"); ?>  
                    
                    <div class="row-fluid sortable">		
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                                    <i class="halflings-icon edit"></i>
                                    <span class="break"></span>Productos ingresados
                                </h2>
                            </div>
                            <div class="box-content" id="conTabla"><!--contenedor de tabla -->
                                <table id="tblProducto" class="table table-striped table-bordered bootstrap-datatable"> <!-- -->
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Estado</th>
                                            <th>Condici&oacute;n</th>
                                            <th>Precio</th> 
                                            <th>Descripci&oacute;n</th>
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
    <button id="modalInfoContent" style="display: none;">modalInfoContent</button>
    <button id="modalVerImagen" style="display: none;">modalVerImagen</button>
    <div class="modal hide fade" id="myModal"></div>
    <!-- Modal -->
    
    <div class="clearfix"></div>
    <?php include("../../../bodyflex/Dashboard/modulos/footer.php"); ?>
    <!-- start: JavaScript-->
    <?php include("../../../bodyflex/Dashboard/modulos/javaScript.php"); ?>
    
    <script src="../controller/productoController.js"></script>
    <script src="../controller/productoProContenidoController.js"></script>
    <script src='../controller/cerrarSesion.js'></script>
    <!-- end: JavaScript-->
    
    <!-- Datos sesion, solo si esta definida variable sesion ================================= -->
    <?php if(isset($_SESSION['sesion'])){ ?>
        <input type="hidden" id="email" value="<?= $_SESSION['email'];?>">
        <input type="hidden" id="nombre" value="<?= $_SESSION['nombre'];?>">
        <input type="hidden" id="apellido" value="<?= $_SESSION['apellido'];?>">
        <input type="hidden" id="alias" value="<?= $_SESSION['alias'];?>">
        <input type="hidden" id="rol" value= "<?= $_SESSION['rol'];?>">
        <input type="text" id="rut" value= "<?= $_SESSION['rut'];?>">
        <input type="hidden" id="dv" value= "<?= $_SESSION['dv'];?>">
        <input type="hidden" id="url" value= "<?= $_SESSION['url'];?>">
        <input type="hidden" id="idPos" value= "<?= $_SESSION['idPos'] ;?>"><br>
    <?php } ?>
    <input type="hidden" id="sesion" value= "<?= $_SESSION['sesion'];?>">
    <input type="hidden" id="session_id" value= "<?= $_SESSION['sesion_id'];?>">
    idDrive: <input type="text" id="idDrive" value="">
    
    mtoProPre: <input type="text" id="mtoProPre" value= ""><br>
    mtoProPreRef: <input type="text" id="mtoProPreRef" value= ""><br>
    
    
    <!-- Datos sesion================================= -->    
    
</body>
</html>

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
               
    }        
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<!-- Basic Page Needs================ -->
            <meta charset="utf-8">
            <title>Bodyflex - [ADM] Productos</title>
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
            
            <!--    sweetalert-master-->
            <script src="../sweetalert-master2/sweetalert2.min.js"></script>
            <link rel="stylesheet" type="text/css" href="../sweetalert-master2/sweetalert2.css">
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
                #titImpuestos{
                    margin-top: 20px;
                    text-align: center; 
                    font-weight: bold; 
                    font-size: 22px; 
                    font-family: Calibri, Helvetica, Georgia, Arial, Garamond;
                }
                
                #BFX_espera{
                    background: url("../images/load.gif") no-repeat top center;
                    height: 50px;
                }
                #PRO_espera{
                    background: url("../images/load.gif") no-repeat top center;
                    height: 50px;
                }
                #CAT_espera{
                    background: url("../images/load.gif") no-repeat top center;
                    height: 50px;
                }
                
            </style>
            <script>
                $( document ).ready(function(){
                    document.querySelector('button#modalInfoContent').onclick = function(){
                        var msg1='<p style="color: #1b2426;">Estimado administrador, la primera imagen que ingreses se establecerá como imagen <b style="font-size: 18px;">principal</b> del producto.</p>';                  
                        swal({   
                            title: 'Imagen principal de producto',   
                            text: msg1,   
                            type: "info", 
                            confirmButtonColor: "#DD6B55",
                            imageWidth: 400,
                            imageHeight: 400,
                            allowOutsideClick: true,
                            animation: false
                        });
                    };

                    document.querySelector('button#modalVerImagen').onclick = function(){
                       
                       //alert($("#idDrive").val().trim());
                       
                        var URLdomain   = window.location.host;
                        var URLprotocol = window.location.protocol;
                        var url='http://drive.google.com/uc?export=view&id='+$("#idDrive").val().trim();
                        
                        //alert('url ' + url);
                        
                        var parametros = {"url" : url};     
                        $.ajax({
                            data:  parametros,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/view/enlaces.php",
                            type:  'post',
                            datetype: 'xml',
                            async: false,
                             beforeSend: function(){
                                $("#espera").show();
                            },
                            success:  function (xml){     

                                //alert('enlaces ' + xml);

                                $("#espera").hide();
                                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                                                                
                                switch(codErr){
                                    case 100:

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

                                    case 0:

                                        var msg1='<p style="color: #1b2426;">Problemas al cargar imagen, <b style="font-size: 16px; font-weight: bold;">URL no existe!.</p>';                  
                                        swal({   
                                            title: 'Error al visualizar',   
                                            text: msg1,   
                                            type: "error", 
                                            confirmButtonColor: "#DD6B55",
                                            imageWidth: 400,
                                            imageHeight: 400,
                                            allowOutsideClick: true,
                                            animation: false
                                        });
                                        break;
                                     
                                    default:
                                        
                                        var msg2='<p style="color: #1b2426;">La imagen corresponde al registro seleccionado.<br>';  
                                        msg2+='La imagen <b style="font-size: 18px; font-weight: bold;">carga</b> en segundos dependiendo de la velocidad de internet.</p>';  

                                        swal({   
                                            title: "Imagen en google drive",   
                                            text: msg2,   
                                            confirmButtonColor: "#DD6B55;",
                                            imageWidth: 400,
                                            imageHeight: 400,
                                            allowOutsideClick: true,
                                            imageUrl: url,
                                            animation: false
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
		

</head>
<body>
    <!-- start: Header -->
    <?php include("../../../bodyflex/admin/modulos/header.php"); ?>
    <!-- start: Header -->
	
    <div class="container-fluid-full">
        <div class="row-fluid">

            <!-- start: Main Menu -->
            <?php include("../modulos/menu.php"); ?>
            <!-- end: Main Menu -->

            <!-- start: Content -->
                <div id="content" class="span10">
			
                    <!-- start: navegación-->
                    <?php include("../modulos/navegacion.php"); ?>
                    <!-- end: navegación -->
			                        
                    <!-- HEADER -->
                        <?php include("../modulos/headerUser.php"); ?>
                    <!-- HEADER -->
                    
                    <div class="row-fluid"> <!-- style="border-color: red; border-style: solid;" -->
                        <?php include("../modulos/productoLeft.php"); ?>
                        <?php include("../modulos/productoRight.php"); ?>
                    </div>
                    
                    <div id="conWarning" style="display:none;" class="box-content alerts">
                        <div style="text-align: center;" class="alert alert-success">
                            <button type="button" class="close" data-dismiss="alert">×</button>
                            <b><span style="color: #000;">Operación exitosa!.</span></b>
                        </div>
                    </div>
                    
                    <div style="margin-top: 10px; margin-bottom: 20px; border-color: silver; border-style: solid;" class="row-fluid"><!-- style="border-color: blue; border-style: solid;" -->	
                        <div id="botonera"> <!-- class="box span12" -->
                            <div class="form-horizontal" style="width: 800px;">
                                <div style="margin-left: 100px; margin-top: 15px; margin-bottom: 15px; float: left;">
                                    <button type="button" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" class="btn" id="btnGuardar">Guardar</button>
                                    <button type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn btn-info btn-setting" id="btnEliminar">Eliminar</button>
                                    <button type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn" id="btnLimpiar">Limpiar</button>
                                    <button type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn" id="btnProbar">Probar</button>
                                </div>
                                <div style="float: left; margin-left: 5px;" id="divPublicar"></div>
                            </div>                                
                        </div>
                        <div id="espera" class="form-actions" style="display:none;">
                            <h4 class="alert-heading">&nbsp;</h4>
                        </div>
                    </div>

                    <?php include("../modulos/productoContenido.php"); ?>  
                    
                    <div style="text-align: center;  margin-top: 10px; margin-bottom: 10px; border-color: silver; border-style: solid;" class="row-fluid sortable">		
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2>
                                    <i class="halflings-icon edit"></i>
                                    <span class="break"></span>Productos ingresados
                                </h2>
                            </div>
                            <div id="conTabla"><!--class="box-content"  contenedor de tabla -->
                                
                                <table id="tblProducto" class="table table-striped table-bordered bootstrap-datatable"> <!-- -->
                                    <thead>
                                        <tr>
                                            
                                            <th style="text-align: center; border-style: solid; border-color: black; border-width: thin;">Id</th>
                                            <th style="text-align: center; border-style: solid; border-color: black; border-width: thin;">Nombre</th>
                                            <th style="text-align: center; border-style: solid; border-color: black; border-width: thin;">Marca</th>
                                            <th style="text-align: center; border-style: solid; border-color: black; border-width: thin;">Estado</th> 
                                            
                                            <th style="text-align: center; background-color: papayawhip; border-style: solid; border-color: black; border-width: thin;">Precio</th>
                                            <th style="text-align: center; background-color: papayawhip; border-style: solid; border-color: black; border-width: thin;">Iva</th>
                                            <th style="text-align: center; background-color: papayawhip; border-style: solid; border-color: black; border-width: thin;">Neto</th>
                                            <th style="text-align: center; background-color: papayawhip; border-style: solid; border-color: black; border-width: thin;">TBK</th>
                                            <th style="text-align: center; background-color: papayawhip; border-style: solid; border-color: black; border-width: thin;">Utilidad</th>
                                            
                                            <th style="text-align: center; background-color: lightblue; border-style: solid; border-color: black; border-width: thin;">Precio</th>
                                            <th style="text-align: center; background-color: lightblue; border-style: solid; border-color: black; border-width: thin;">Iva</th>
                                            <th style="text-align: center; background-color: lightblue; border-style: solid; border-color: black; border-width: thin;">Neto</th>
                                            <th style="text-align: center; background-color: lightblue; border-style: solid; border-color: black; border-width: thin;">TBK</th>
                                            <th style="text-align: center; background-color: lightblue; border-style: solid; border-color: black; border-width: thin;">Utilidad</th>
                                            
                                            <th style="background-color: lightsalmon; text-align: center; border-style: solid; border-color: black; border-width: thin;">% Comisi&oacute;n</th>
                                            <th style="background-color: lightsalmon; text-align: center; border-style: solid; border-color: black; border-width: thin;">$ Comisi&oacute;n</th>
                                            <th style="background-color: lightsalmon; text-align: center; border-style: solid; border-color: black; border-width: thin;">Utilidad</th>
                                            
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
    <?php include("../../../bodyflex/admin/modulos/footer.php"); ?>
    <!-- start: JavaScript-->
    <?php include("../../../bodyflex/admin/modulos/javaScript.php"); ?>
    
    <script src="../controller/productoController.js"></script>
    <script src="../controller/productoContenidoController.js"></script>
    <script src="../controller/productoRangoPrecioController.js"></script>
    <script src='../controller/cerrarSesion.js'></script>
    <!-- end: JavaScript-->
    
    <!-- Datos sesion, solo si esta definida variable sesion ================================= -->
    <?php if(isset($_SESSION['sesion'])){ ?>
        <input type="hidden" id="email" value="<?= $_SESSION['email'];?>">
        <input type="hidden" id="nombre" value="<?= $_SESSION['nombre'];?>">
        <input type="hidden" id="apellido" value="<?= $_SESSION['apellido'];?>">
        <input type="hidden" id="alias" value="<?= $_SESSION['alias'];?>">
        <input type="hidden" id="rol" value= "<?= $_SESSION['rol'];?>">
        <input type="hidden" id="rut" value= "<?= $_SESSION['rut'];?>">
        <input type="hidden" id="dv" value= "<?= $_SESSION['dv'];?>">
        <input type="hidden" id="url" value= "<?= $_SESSION['url'];?>">
    <?php } ?>
    <input type="hidden" id="sesion" value= "<?= $_SESSION['sesion'];?>">
    <input type="hidden" id="session_id" value= "<?= $_SESSION['sesion_id'];?>">
    idDrive: <input type="text" id="idDrive" value="">
    
    <input type="hidden" id="iva" value="">
    <input type="hidden" id="tra" value="">
    
    mtoPreVta<input type="text" id="mtoPreVta" value=""><br>
    mtoProIva<input type="text" id="mtoProIva" value=""><br>
    mtoPreNet<input type="text" id="mtoPreNet" value=""><br>
    mtoComTra<input type="text" id="mtoComTra" value=""><br>
    mtoMtoPro<input type="text" id="mtoMtoPro" value=""><br>
    mtoMtoUti<input type="text" id="mtoMtoUti" value=""><br>
    
    mtoPVta<input type="text" id="mtoPVta" value=""><br>
    mtoPIva<input type="text" id="mtoPIva" value=""><br>
    mtoPNet<input type="text" id="mtoPNet" value=""><br>
    mtoComTra2<input type="text" id="mtoComTra2" value=""><br>
    mtoMUti2<input type="text" id="mtoMUti2" value=""><br>
    mtoMUti3<input type="text" id="mtoMUti3" value=""><br>
    mtoPreCom<input type="text" id="mtoPreCom" value=""><br>
    mtoPreAntPub:<input type="text" id="mtoPreAntPub" value=""><br>
    mtoPreAntPro:<input type="text" id="mtoPreAntPro" value=""><br>
    <!-- Datos sesion================================= -->    
    
</body>
</html>

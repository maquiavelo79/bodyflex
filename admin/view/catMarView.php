<?php
session_start();     

//Navegación - para determinar navegación 
    $nav=1;
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
            <title>Bodyflex - Marcas</title>
            <meta name="description" content="">
            <meta name="author" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- end: Meta -->
	
	<!-- start: Mobile Specific -->
            <meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- end: Mobile Specific -->
	
        <!--awesome-->    
            <link rel="stylesheet" href="../../font-awesome-4.5.0/css/font-awesome.min.css">
        <!--awesome-->   
        
        <!--    sweetalert-master-->
            <script src="../sweetalert-master2/sweetalert2.min.js"></script>
            <link rel="stylesheet" type="text/css" href="../sweetalert-master2/sweetalert2.css">
<!--            <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> -->
        
	<!-- start: CSS -->
            <link id="bootstrap-style" href="../css/bootstrap.min.css" rel="stylesheet">
            <link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
            <link id="base-style" href="../css/style.css" rel="stylesheet">
            <link id="base-style-responsive" href="../css/style-responsive.css" rel="stylesheet">
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext' rel='stylesheet' type='text/css'>
            <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
            <script type="text/javascript">
                $(document).ready(function (){
                    
                    document.querySelector('button#modalVerImagen').onclick = function(){
                        var URLdomain   = window.location.host;
                        var URLprotocol = window.location.protocol;
        
                        var url='';
                        url='http://drive.google.com/uc?export=view&id='+$("#txtCol1GD").val().trim();
                        var parametros = {"url" : url};      
                                                
                        $.ajax({
                            data:  parametros,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/view/enlaces.php",
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
                                            title: "Imagen en google drive",   
                                            text: 'Imagen asociada a la <b>categoría</b> y alojada en <b>Google Drive</b>',   
                                            confirmButtonColor: "#FFCC00",
                                            confirmButtonText: '<p style="color:black; font-weight: bold; height: 10px;">OK</p>',
                                            allowOutsideClick: true,
                                            imageUrl: url,
                                            imageWidth: 400,
                                            imageHeight: 400,
                                            animation: false
                                        });
                                        break;

                                }              
                            }
                        }); 

                    };
                    
                });  
                
                function verImagen(){
                    $("#modalVerImagen").click();    
                }
                
            </script>
            <style>
                .ajustar{
                    width: 1000px;
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
            <?php include("../../menu/menuAdm.php"); ?>
            <!-- end: Main Menu -->

            <!-- start: Content -->
                <div id="content" class="span10">
			
                    <!-- start: navegación-->
                    <?php include("../modulos/navegacion.php"); ?>
                    <!-- end: navegación -->
		    
                    <!-- HEADER -->
                        <?php include("../modulos/headerUser.php"); ?>
                    <!-- HEADER -->
                    
                    <div class="row-fluid sortable">
                        <div class="box span12">
                                <div class="box-header" data-original-title>
                                    <h2><i class="halflings-icon edit"></i><span class="break"></span>Marcas</h2>
                                    <div class="box-icon">
                                        <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                                    </div>
                                </div>
                                <br>
                                <div class="box-content">
                                    <form class="form-horizontal" id="formSlider">
                                        <fieldset>
                                            
                                            <div class="control-group">
                                                <label class="control-label" for="appendedInput"><b>Identificador</b></label>
                                                <div class="controls">
                                                    <div>
                                                        <input id="txtColId" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 200px; text-align: center; color: black;" size="30" type="text" maxlength="10" disabled  value="">
                                                    </div>
                                                </div>
                                            </div> 
                                            
                                            <div class="control-group">
                                                <label class="control-label" for="appendedInput"><b>Marca</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <input id="txtColNom" placeholder="Ingrese Marca" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 490px; text-align: center; color: black;"  size="30" type="text" maxlength="100">
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="control-group">
                                                <label class="control-label" for="appendedInput"><b>Id Google Drive</b></label>
                                                <div class="controls">
                                                    <input id="txtCol1GD" placeholder="ID Imagen 200 x 112" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                    <span id="sVerImg" class="help-inline">
                                                        <i class="fa fa-picture-o fa-2x"></i>
                                                    </span>
                                                </div>
                                            </div>
                                             
                                            <!-- GIF LOAD-->
                                            <div id="espera" class="form-actions" style="display:none;">
                                                <button type="button" class="close" data-dismiss="alert">×</button>
                                                <h4 class="alert-heading">&nbsp;</h4>
                                            </div>

                                            <!-- alerts -->
                                            <div id="warning" class="box-content alerts"></div>
                                            
                                            <!-- BOTONES-->
                                                <div class="form-actions" id="botonera">
                                                    <button type="button" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" class="btn" id="btnGuardar">Guardar</button>
                                                    <button type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn btn-info btn-setting" id="btnEliminar">Eliminar</button>
                                                    <button type="reset" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn" id="btnLimpiar">Limpiar</button>
                                                </div>
                                        </fieldset>
                                    </form>
                                </div>
                        </div><!--/span-->
                    </div><!--/row-->
                    
                    <div class="row-fluid sortable">		
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span>Categor&iacute;as Ingresadas</h2>
                                <div class="box-icon">
                                    <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                                    <a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
                                </div>
                            </div>
                            <div class="box-content">
                                <input id="cantCol" type="hidden" value=0>
                                <table id="tblCol" class="table table-striped table-bordered bootstrap-datatable">
                                    <thead>
                                        <tr>
                                            <th class="center">ID</th>
                                            <th class="center">Marca</th>
                                            <th class="center">ID Google Drive (200X112)</th>
                                        </tr>
                                    </thead>   
                                    <tbody id="tbody">
                                        
                                    </tbody>
                                </table>   
                                <div id='idPag' class="pagination pagination-centered"></div>
                            </div>
                        </div><!--/span-->
                    </div><!--/row-->
                </div><!--/.fluid-container-->
            <!-- end: Content -->    
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->
		
    <div class="modal hide fade" id="myModal"></div>
    <button id="modalVerImagen" style="display: none;">modalVerImagen</button>
    
    <div class="clearfix"></div>
    <?php include("../../../bodyflex/admin/modulos/footer.php"); ?>
    
    <!-- start: JavaScript-->
        <?php include("../../../bodyflex/admin/modulos/javaScript.php"); ?>
    <script src="../controller/catMarController.js"></script>
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
    <!-- Datos sesion================================= -->    
    
</body>
</html>

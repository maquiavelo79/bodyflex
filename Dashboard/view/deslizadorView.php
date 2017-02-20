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
    
    //VARIABLE DE SESION DE AMBITO LOCAL
    if(!isset($_SESSION['sId'])){
        $_SESSION['sId']=0;
    }else{
        if($_SESSION['sId']!=''){
            $_SESSION['sId']=0;
        }
    }        
    
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<!-- Basic Page Needs================ -->
            <meta charset="utf-8">
            <title>Bodyflex - [PRO] Deslizador</title>
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
        
	<!-- start: CSS -->
            <link id="bootstrap-style" href="../css/bootstrap.min.css" rel="stylesheet">
            <link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
            <link id="base-style" href="../css/style.css" rel="stylesheet">
            <link id="base-style-responsive" href="../css/style-responsive.css" rel="stylesheet">
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext' rel='stylesheet' type='text/css'>
            <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
            
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
		
        <script>
           
            function pubImgDrive(){

                var msgVtaPre="<p style='color: black; font-size: 16px; font-family: Verdana;'>Aqui debes ingresar el identificador de la imagen alojada Google Drive. <br><br> (Ejemplo: <b style='font-size: 18px; color: blue;'>0BwscgrEmxbyLZ0JOMENReUlyWWM</b>) <br><br>Recuerda que la carpeta que contiene las imagenes en google drive la debes establecer como publica.</p>";                  
                msgVtaPre+="<br>";
                msgVtaPre+="<b>";
                    msgVtaPre+="<a target='_blank' style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
                    msgVtaPre+="href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMARmFTTzhJaEJwMTQ'>";
                    msgVtaPre+='<img style="width: 70px; height: 70px;" src="../../images/iconos/gd.ico"><br>Ejemplo';
                    msgVtaPre+="</a>";
                msgVtaPre+="</b>";

                swal({   
                    title: 'ID Google Drive',   
                    html: msgVtaPre,   
                    type: "info", 
                    allowOutsideClick: true,
                    animation: true,
                    confirmButtonColor: '#FFCC00',
                    confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                });

            } 
             
            function queEsSlider(){

                var msgVtaPre='<p style="text-align: justify; font-family: Verdana; font-size: 15px; color: #1b2426;">Slider o Deslizador es la sección principal y rotativa de tu perfil profesional en <b style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">Bodyflex</b>, puedes agregar cuantos necesites, te recomendamos no agregar mas de tres.</p>'; 
                
                msgVtaPre+="<br>";
                msgVtaPre+="<b>";
                    msgVtaPre+="<a target='_blank' style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
                    msgVtaPre+="href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAYnZvZDVwSnA0djQ'>";
                    msgVtaPre+='<i class="fa fa-user fa-2x"></i><br>';
                    //msgVtaPre+='<img style="width: 300px; height: 140px;" src="../../images/sliderPro.jpg"><br>';
                    msgVtaPre+='<b style="font-size: 15px;">Ejemplo</b>';
                    msgVtaPre+="</a>";
                msgVtaPre+="</b>";
                
                swal({   
                    title: 'Slider',   
                    html: msgVtaPre,   
                    type: "info", 
                    allowOutsideClick: true,
                    animation: true,
                    confirmButtonColor: '#FFCC00',
                    confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                });

            }  
             
        </script>
        
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
                    
                    
                    <div class="row-fluid sortable">
                        <div class="box span12">
                                <div class="box-header" data-original-title>
                                    <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                                        <i class="halflings-icon edit"></i>
                                        <span class="break"></span>Deslizador
                                        &nbsp;&nbsp; <span onclick="queEsSlider();" style="cursor: pointer; color: blue; font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold;"><u>¿QUE ES EL DESLIZADOR O SLIDER?</u></span>
                                    </h2>
                                    
                                </div>
                                <br>
                                <div class="box-content">
                                    <form class="form-horizontal" id="formSlider">
                                        <fieldset>
                                            <div id="conHeadId" class="control-group">
                                                <label id="lblHeadId" class="control-label" for="appendedInput"><b>Identificador</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <input id="txtHeadId" size="30" type="text" maxlength="10" disabled  value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                    </div>
                                                    <span class="help-inline"></span>
                                                </div>
                                            </div> 
                                            
                                            <div id="conTit1" class="control-group">
                                                <label id="lbltit1" class="control-label" for="appendedInput"><b>Titulo</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                          <input id="appendedInput1" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                                    </div>
                                                    <span class="help-inline">Máximo 30 caracteres</span>
                                                </div>
                                            </div>
                                            
                                            <div id="conTex" class="control-group">
                                                <label id="lbltxt" class="control-label" for="textarea2"><b>Texto deslizador</b></label>
                                                <div class="controls">
                                                    <textarea id="textarea2" rows="3" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; color: black;"></textarea>
                                                </div>
                                                <span class="help-inline">Máximo 235 caracteres</span>
                                            </div>
                                            
                                            <div id="conFlick" class="control-group">
                                                <label id="lblfli"  class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                                <div class="controls">
                                                    <input placeholder="Tamaño sugerido 1600 x 600" id="appendedInput3" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                    <span class="help-inline"><i onclick="pubImgDrive();" style="color: green; cursor: pointer;" class="fa fa-info-circle fa-2x"></i>&nbsp; Tama&#241;o sugerido 1600 x 600</span>
                                                </div>
                                            </div>
                                            
                                            <!-- GIF LOAD-->
                                                <div id="espera" class="form-actions" style="display:none;">
                                                    <button type="button" class="close" data-dismiss="alert">×</button>
                                                    <h4 class="alert-heading">&nbsp;</h4>
                                                </div>

                                            <!-- alerts -->
                                            <div id="conWarning" class="box-content alerts"></div>
                                            
                                            <!-- BOTONES-->
                                                <div class="form-actions" id="botonera">
                                                    <button type="button" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" class="btn" id="btnGuardar">
                                                        <i class="fa fa-plus-circle"></i>
                                                        Grabar
                                                    </button>
                                                    <button type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn btn-info btn-setting" id="btnEliminar">
                                                        <i class="fa fa-minus-circle"></i>
                                                        Eliminar
                                                    </button>
                                                    <button type="reset" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn" id="btnLimpiar">
                                                        <i class="fa fa-paint-brush"></i>
                                                        Limpiar
                                                    </button>

                                                </div>
                                        </fieldset>
                                    </form>
                                </div>
                        </div><!--/span-->
                    </div><!--/row-->
                                        
                    <div class="row-fluid sortable">		
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                                    <i class="halflings-icon edit"></i>
                                    <span class="break"></span>Deslizadores ingresados
                                </h2>
                            </div>
                            <div class="box-content" id="conTabla"><!--contenedor de tabla -->
                                <input id="cantSlider" type="hidden" value=0>
                                <table id="tblSlider" class="table table-striped table-bordered bootstrap-datatable">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>URL</th>
                                            <th>Texto</th>
                                        </tr>
                                    </thead>   
                                    <tbody id="tbody">
                                        
                                    </tbody>
                                </table>   
                            </div>
                        </div><!--/span-->
                    </div><!--/row-->
                </div><!--/.fluid-container-->
            <!-- end: Content -->    
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->
		
    
    <!--Modales-->
        <div class="modal hide fade" id="myModal"></div>
<!--        <button id="modalImgDrive" style="display: none;">modalImgDrive</button>-->
    <!--Modales-->
    
    <div class="clearfix"></div>
    <?php include("../../../bodyflex/Dashboard/modulos/footer.php"); ?>
    <!-- start: JavaScript-->
        <?php include("../../../bodyflex/Dashboard/modulos/javaScript.php"); ?>
        <script src="../controller/deslizadorController.js"></script>
        <script src='../controller/cerrarSesion.js'></script>
    <!-- end: JavaScript-->
    
    <!-- sweetalert-master-->
        <script src="../sweetalert-master2/sweetalert2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../sweetalert-master2/sweetalert2.css">
    <!-- sweetalert-master-->
    
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
        <input type="hidden" id="sId" value= "<?= $_SESSION['sId'] ;?>">
        <input type="text" id="idPos" value= "<?= $_SESSION['idPos'] ;?>"><br>
    <?php } ?>
    <input type="hidden" id="sesion" value= "<?= $_SESSION['sesion'];?>">
    <input type="hidden" id="session_id" value= "<?= $_SESSION['sesion_id'];?>">
    <!-- Datos sesion================================= -->    
    
    t1Td: <input type="text" id="t1Td" value= ""><!-- titulo slider seleccionado en grilla -->
    
    
</body>
</html>

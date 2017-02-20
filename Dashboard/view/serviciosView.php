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
        $_SESSION['idPos']='';
        
    }        
      
    
    //VARIABLE DE SESION DE AMBITO LOCAL
    if(!isset($_SESSION['serId'])){
        $_SESSION['serId']=0;
    }else{
        if($_SESSION['serId']!=''){
            $_SESSION['serId']=0;
        }
    } 
    
    //VARIABLE DE SESION DE AMBITO LOCAL
    if(!isset($_SESSION['serAgr'])){
        $_SESSION['serAgr']=0;
    }else{
        if($_SESSION['serAgr']!=''){
            $_SESSION['serAgr']=0;
        }
    }  
    
    //VARIABLE DE SESION DE AMBITO LOCAL
    if(!isset($_SESSION['serNom'])){
        $_SESSION['serNom']=0;
    }else{
        if($_SESSION['serNom']!=''){
            $_SESSION['serNom']=0;
        }
    }  
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<!-- Basic Page Needs================ -->
            <meta charset="utf-8">
            <title>Bodyflex - [PRO] Servicios</title>
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
        
        <!--awesome-->    
            <link rel="stylesheet" href="../../font-awesome-4.5.0/css/font-awesome.min.css">
        <!--awesome-->       
            
            <style>
                .ajustarDesCor{
                    width: 200px;
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
                .ajustarDesLar{
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
                thead, tbody { display: block; }
                tbody {
                    height: 300px;       /* Just for the demo          */
                    overflow-y: auto;    /* Trigger vertical scroll    */
                    overflow-x: hidden;  /* Hide the horizontal scroll */
                }
                #queEsUnServicio{
                    cursor: pointer; 
                    color: blue; 
                    font-size: 14px; 
                    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
                    font-weight: bold;
                }
                #faltanServicios{
                    cursor: pointer; 
                    color: blue; 
                    font-size: 14px; 
                    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
                    font-weight: bold;
                }
                #h2Inf{
                    font-size: 14px; 
                    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
                    font-weight: bold; 
                    color: black;
                }
            </style>
            
            <script>
            
                function servicios(){

                    var msgImpPer='<p style="text-align: justify; font-size: 16px; font-family: Verdana; color: #1b2426;">Un servicio representa un tipo de asesoria por parte de un profesional hacia a un miebro de la comunidad, si bien el servicio queda claro en cuanto a lo que trata no especifica aspectos como:</p><br>';
                    
                    msgImpPer+='<ul style="text-align: left; font-size: 16px; font-family: Verdana; color: #1b2426;">';
                        msgImpPer+='<li>Duración</li>';
                        msgImpPer+='<li>Precio</li>';
                        msgImpPer+='<li>Frecuencia</li>';
                        msgImpPer+='<li>Contenidos</li>';
                        msgImpPer+='<li>Otros</li>';
                    msgImpPer+='</ul><br>';
                    
                    msgImpPer+='<p style="text-align: justify; font-size: 16px; font-family: Verdana; color: #1b2426;">Las especificaciones descritas deben realizarse por medio de <b style="font-size: 14px; color: black; font-family: Impact, Charcoal, sans-serif;">Mis Propuestas</b>.</p>';  
                    
                    msgImpPer+='<p>';	
                        msgImpPer+='<a href="../../../bodyflex/Dashboard/view/misPropuestasView.php">';
                            msgImpPer+='<i class="fa fa-gavel fa-2x"></i><br>';
                            msgImpPer+='<span style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">&nbsp;Mis propuestas</span>';
                        msgImpPer+='</a>';
                    msgImpPer+='</p>';	
                                        
                    swal({   
                        title: 'Servicios',   
                        html: msgImpPer,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    
                }
                
                function faltanServicios(){

                    var msgImpPer='<p style="text-align: justify; font-size: 16px; font-family: Verdana; color: #1b2426;">Si consideras que <b style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">faltan</b> servicios o que existe oportunidad de crear unos <b style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">nuevos</b> por favor pónte en contacto con nostrotros.</p><br>';
                    msgImpPer+='<p style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">profesionales@bodyflex.cl</p>';
                                        
                    swal({   
                        title: 'Nuevos Servicios',   
                        html: msgImpPer,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    
                }
                
                function comboServicios(){

                    var msgImpPer='<p style="text-align: justify; font-size: 16px; font-family: Verdana; color: #1b2426;">Al seleccionar y agregar una opción de esta lista, el servicio se ofrecerá <b style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">automaticamente</b> en tu perfil profesional.</p>';
                                                            
                    swal({   
                        title: 'Agrega Servicios',   
                        html: msgImpPer,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    
                }

                function queEsPresentacion(){

                    var msgVtaPre='<p style="text-align: justify; font-family: Verdana: 15px; color: #1b2426;">Esta sección contiene la presentación del profesional hacia la comunidad, te recomendamos ser breve pero <b style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">contundente</b>, obtén un resumen que le permita a la audiencia informarse sobre ti en un párrafo.</p>'; 

                    msgVtaPre+="<br>";
                    msgVtaPre+="<b>";
                        msgVtaPre+="<a target='_blank' style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
                        msgVtaPre+="href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAXzFOLVllbVJYNEU'>";
                        msgVtaPre+='<i class="fa fa-user fa-2x"></i><br>';
                        msgVtaPre+='<b style="font-size: 15px;">Ejemplo</b>';
                        msgVtaPre+="</a>";
                    msgVtaPre+="</b>";

                    swal({   
                        title: 'Presentación',   
                        html: msgVtaPre,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
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
                    
                    <div class="row-fluid sortable">
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2 id="h2Inf">
                                    <i class="halflings-icon edit"></i>
                                    <span class="break"></span>Seleccione servicio &nbsp;&nbsp;                                    
                                </h2>
                            </div>
                            <br>
                            <div class="box-content">
                                <form class="form-horizontal" id="formSlider">
                                    <fieldset>
                                        <div class="control-group">
                                            <label class="control-label" for=""><b>Servicios&nbsp;&nbsp;&nbsp;</b></label>
                                            <div id="divCmbSer" class="input-append">
                                                <select id="cmbTipSer" style="" onchange="obtenerServicio(this);"></select>
                                            </div>
                                            <span class="help-inline">
                                                <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="faltanServicios();"></i> <!-- onclick="comboServicios();"-->
                                            </span> 
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <!-- GIF LOAD-->
                            <div id="espera" class="form-actions" style="display:none;">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                <h4 class="alert-heading">&nbsp;</h4>
                            </div>
                            <!-- alerts -->
                            <div id="conWarning" class="box-content alerts"></div>
                        </div><!--/span-->
                    </div><!--/row-->
                    
                    <div id="divServicio" class="row-fluid sortable" style="display: none;">
                        <div class="box span12">
                            <div id="divHeader" class="box-header" data-original-title></div>
                            <div class="box-content">
                                <div id="divBody" class="row-fluid"></div>
                                <!--BOTONES-->
                                <div class="form-actions" id="botonera">
                                    <button type="button" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn" id="btnGuardar">
                                        <i class="fa fa-plus-circle"></i>&nbsp;
                                        Agregar
                                    </button>
                                    <button type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold;" class="btn btn-info btn-setting" id="btnEliminar">
                                        <i class="fa fa-minus-circle"></i>&nbsp;
                                        Eliminar
                                    </button>
                                </div>                        
                            </div>
                        </div>
                    </div>
                    
                    <br>
      
                    <div class="row-fluid sortable">		
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                                    <i class="halflings-icon edit"></i>
                                    <span class="break"></span>Servicios ofrecidos por el Profesional
                                </h2>
                                <span style="margin-left: 100px;" id="queEsUnServicio" onclick="servicios();">   
                                    <u>¿QUE ES UN SERVICIO?</u>
                                </span>
                                <span style="margin-left: 50px;" id="faltanServicios" onclick="faltanServicios();">  
                                    <u>¿FALTAN SERVICIOS?</u>
                                </span>
                            </div>
                            <div style="height: 350px;" class="box-content" id="conTabla"><!--overflow-y: scroll; contenedor de tabla -->
                                <input id="cantSlider" type="hidden" value=0>
                                <table id="tblSlider" class="table table-striped table-bordered bootstrap-datatable">
                                    <thead>
                                        <tr>
                                            <th style="width: 5%; text-align: center;">N°</th>
                                            <th style="width: 5%; text-align: center;">Servicio</th>
                                            <th style="width: 10%;">Nombre</th>
                                            <th style="width: 20%;"> Descripci&oacute;n</th>
                                            <th style="width: 60%;">Descripci&oacute;n Detallada</th>
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
		
    <div class="modal hide fade" id="myModal"></div>
   
    <div class="clearfix"></div>
    <?php include("../../../bodyflex/Dashboard/modulos/footer.php"); ?>
    
    <!-- start: JavaScript-->
    
    <?php include("../../../bodyflex/Dashboard/modulos/javaScript.php"); ?>
    <script src="../controller/serviciosController.js"></script>
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
        <input type="hidden" id="idPos" value= "<?= $_SESSION['idPos'];?>"> 
        
        <input type="hidden" id="serId" value= "<?= $_SESSION['serId'];?>">
        <input type="hidden" id="serAgr" value= "<?= $_SESSION['serAgr'];?>">
        <input type="hidden" id="serNom" value= "<?= $_SESSION['serNom'];?>">
        
    <?php } ?>
    <input type="hidden" id="sesion" value= "<?= $_SESSION['sesion'];?>">
    <input type="hidden" id="session_id" value= "<?= $_SESSION['sesion_id'];?>">
    <!-- Datos sesion================================= -->    
    
</body>
</html>

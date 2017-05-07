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
            <title>Bodyflex - Colecci&oacute;n</title>
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
                jQuery(document).ready(function(){
                    
                    $('.help-inline').click(function(){    
                    
                        var URLdomain   = window.location.host;
                        var URLprotocol = window.location.protocol;
                        var url='';    
    
                        var id=$(this).attr("id");
                        switch(id){
                            case "sVerImg1": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol1GD").val().trim();
                                break;
                            case "sVerImg2": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol2GD").val().trim();
                                break;
                            case "sVerImg3": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol3GD").val().trim();
                                break;
                            case "sVerImg4": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol4GD").val().trim();
                                break;
                            case "sVerImg5": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol5GD").val().trim();
                                break;
                            case "sVerImg6": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol6GD").val().trim();
                                break;
                            case "sVerImg7": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol7GD").val().trim();
                                break;
                            case "sVerImg8": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol8GD").val().trim();
                                break;
                            case "sVerImg9": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol9GD").val().trim();
                                break;
                            case "sVerImg10": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol10GD").val().trim();
                                break;
                            case "sVerImg11": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol11GD").val().trim();
                                break;
                            case "sVerImg12": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol12GD").val().trim();
                                break;
                            case "sVerImg13": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol13GD").val().trim();
                                break;
                            case "sVerImg14": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol14GD").val().trim();
                                break;
                            case "sVerImg15": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol15GD").val().trim();
                                break;
                            case "sVerImg16": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol16GD").val().trim();
                                break;
                            case "sVerImg17": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol17GD").val().trim();
                                break;
                            case "sVerImg18": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol18GD").val().trim();
                                break;
                            case "sVerImg19": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol19GD").val().trim();
                                break;
                            case "sVerImg20": 
                                url='http://drive.google.com/uc?export=view&id='+$("#txtCol20GD").val().trim();
                                break;
                        }
                        
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
                                            html: true,
                                            allowOutsideClick: true,
                                            animation: false
                                        });
                                        break;

                                    default:

                                        swal({
                                            title: 'Imagen Colección',
                                            confirmButtonColor: "#DD6B55",
                                            text: 'Imagen asociada a la <b>Colección</b> y alojada en <b>Google Drive</b>',  
                                            imageUrl: url,
                                            imageWidth: 400,
                                            imageHeight: 200,
                                            animation: false
                                        });
                                        break;

                                }              
                            }
                        }); 
                    });                                       
                });
                                    
                function infoMsg1(){

                    var msgImpPer='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">Al tu Inbox ingresan los mensajes que realizan las <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">personas que visitan</b> tu perfil web profesional.</p>';

                    swal({   
                            title: 'Mensajes',
                            text: msgImpPer,
                            imageUrl: '../../images/catalogo_seccion_superior.jpg',
                            imageWidth: 150,
                            imageHeight: 150,
                            animation: false,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });

                }   
                
                function infoMsg2(){

                    var msgImpPer='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">Al tu Inbox ingresan los mensajes que realizan las <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">personas que visitan</b> tu perfil web profesional.</p>';

                    swal({   
                            title: 'Mensajes',
                            text: msgImpPer,
                            imageUrl: '../../images/catalogo_seccion_inferior.jpg',
                            imageWidth: 150,
                            imageHeight: 150,
                            animation: false,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });

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
/*                thead, tbody { display: block; }
                tbody {
                    height: 300px;        Just for the demo          
                    overflow-y: auto;     Trigger vertical scroll    
                    overflow-x: hidden;   Hide the horizontal scroll 
                }*/
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
                                    <h2><i class="halflings-icon edit"></i><span class="break"></span>Fotos Catálogo</h2>
                                    <div class="box-icon">
                                        <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                                    </div>
                                </div>
                                <br>
                                
                                <style>
                                    .infoMsg{
                                        margin-left: 10px; 
                                        color: green; 
                                        cursor: pointer;
                                    }
                                </style>
                                
                                <div style="width: 50%; height: 620px; border-color: silver; border-style: solid;" class="span7"> <!-- border-color: black; border-style: double; -->
                                    <h1 style="text-align: center;">Principal 1920 x 1080<i onclick="infoMsg1();" class="fa fa-info-circle infoMsg"></i></h1>
                                    <div style="margin-top: 20px;"class="box-content">
                                        <form class="form-horizontal" id="formSlider">
                                            <fieldset>

                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen1</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol1GD" placeholder="ID Imagen 1920 x 1080" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg1" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen2</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol2GD" placeholder="ID Imagen 1920 x 1080" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg2" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>     
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen3</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol3GD" placeholder="ID Imagen 1920 x 1080" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg3" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>     
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen4</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol4GD" placeholder="ID Imagen 1920 x 1080" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg4" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>     
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen5</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol5GD" placeholder="ID Imagen 1920 x 1080" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg5" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>     
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen6</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol6GD" placeholder="ID Imagen 1920 x 1080" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg6" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>     
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen7</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol7GD" placeholder="ID Imagen 1920 x 1080" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg7" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>     
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen8</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol8GD" placeholder="ID Imagen 1920 x 1080" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg8" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>     
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen9</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol9GD" placeholder="ID Imagen 1920 x 1080" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg9" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>     
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen10</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol10GD" placeholder="ID Imagen 1920 x 1080" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg10" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>     
                                                
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                                
                                <div style="height: 620px; width: 650px; border-color: silver; border-style: solid;" id="detalleMensaje" class="span5 noMarginLeft"> <!-- border-color: black; border-style: double; -->				
                                    <h1 style="text-align: center;">Detalle Producto 1024 x 640<i onclick="infoMsg2();" class="fa fa-info-circle infoMsg"></i></h1>
                                    <div style="margin-top: 20px;" class="box-content">
                                        <form class="form-horizontal" id="formSlider">
                                            <fieldset>

                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen1</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol11GD" placeholder="ID Imagen 1024 x 640" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg11" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen2</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol12GD" placeholder="ID Imagen 1024 x 640" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg12" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>                                                
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen2</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol13GD" placeholder="ID Imagen 1024 x 640" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg13" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>                                                
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen2</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol14GD" placeholder="ID Imagen 1024 x 640" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg14" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>                                                
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen2</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol15GD" placeholder="ID Imagen 1024 x 640" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg15" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>                                                
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen2</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol16GD" placeholder="ID Imagen 1024 x 640" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg16" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>                                                
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen2</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol17GD" placeholder="ID Imagen 1024 x 640" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg17" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>                                                
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen2</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol18GD" placeholder="ID Imagen 1024 x 640" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg18" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>                                                
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen2</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol19GD" placeholder="ID Imagen 1024 x 640" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg19" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>                                                
                                                
                                                <div class="control-group">
                                                    <label class="control-label" for="appendedInput"><b>Imagen2</b></label>
                                                    <div class="controls">
                                                        <input id="txtCol20GD" placeholder="ID Imagen 1024 x 640" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span id="sVerImg20" class="help-inline">
                                                            <i class="fa fa-picture-o fa-2x"></i>
                                                        </span>
                                                    </div>
                                                </div>                                                
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                                
                        </div><!--/span-->
                    
                    </div><!--/row-->
                         
                    <!-- GIF LOAD-->
                    <div id="espera" class="form-actions" style="display:none;"></div>

                    <!-- alerts -->
                    <div style="display:none;" id="warning" class="box-content alerts"></div>

                    <!-- BOTONES-->
                    <div class="form-actions" id="botonera">
                        <button type="button" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" class="btn" id="btnGuardar">
                            <i class="fa fa-plus-square"></i>&nbsp;Guardar
                        </button>
                    </div>
                    <br>
                </div><!--/.fluid-container-->
            <!-- end: Content -->    
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->
		
    <div class="modal hide fade" id="myModal"></div>    
    <div class="clearfix"></div>
    <?php include("../../../bodyflex/admin/modulos/footer.php"); ?>
    
    <!-- start: JavaScript-->
        <?php include("../../../bodyflex/admin/modulos/javaScript.php"); ?>
        <script src="../controller/fotosCatalogoController.js"></script>
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

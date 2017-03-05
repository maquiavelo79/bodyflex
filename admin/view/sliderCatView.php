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
            <title>Bodyflex - [PRO] Slider Cata&aacute;logo</title>
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
    
                        //alert($('#opc').val());
    
                        switch($('#opc').val()){
                            case 'divTip1':
                                url='http://drive.google.com/uc?export=view&id='+$("#txtD1GD").val().trim();
                                break;
                            case 'divTip2':
                                var r = $('#sei').val().split("|"); 
                                if(r[1]=='I1'){
                                    url='http://drive.google.com/uc?export=view&id='+$("#txtD21GD").val().trim();
                                }else{
                                    url='http://drive.google.com/uc?export=view&id='+$("#txtD22GD").val().trim();
                                }
                                break;
                            case 'divTip3':
                                url='http://drive.google.com/uc?export=view&id='+$("#txtD3GD").val().trim();
                                break;
                            case 'divTip4':
                                var r = $('#sei').val().split("|"); 
                                switch(r[1]){
                                    case 'I1':
                                        url='http://drive.google.com/uc?export=view&id='+$("#txtD41GD").val().trim();
                                        break;
                                    case 'I2':
                                        url='http://drive.google.com/uc?export=view&id='+$("#txtD42GD").val().trim();
                                        break;
                                    case 'I3':
                                        url='http://drive.google.com/uc?export=view&id='+$("#txtD43GD").val().trim();
                                        break;
                                    case 'I4':
                                        url='http://drive.google.com/uc?export=view&id='+$("#txtD44GD").val().trim();
                                        break;    
                                }
                                break;    
                            case 'divTip5':
                                url='http://drive.google.com/uc?export=view&id='+$("#txtD5GD").val().trim();
                                break;    
                            case 'divTip6':
                                var r = $('#sei').val().split("|"); 
                                switch(r[1]){
                                    case 'I1':
                                        url='http://drive.google.com/uc?export=view&id='+$("#txtD61GD").val().trim();
                                        break;
                                    case 'I2':
                                        url='http://drive.google.com/uc?export=view&id='+$("#txtD62GD").val().trim();
                                        break;
                                    case 'I3':
                                        url='http://drive.google.com/uc?export=view&id='+$("#txtD63GD").val().trim();
                                        break;
                                }
                                break;
                            case 'divTip7':
                                url='http://drive.google.com/uc?export=view&id='+$("#txtD7GD").val().trim();
                                break;    
                        }
                        
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
                                            html: true,
                                            allowOutsideClick: true,
                                            animation: false
                                        });
                                        break;

                                    default:

                                        swal({   
                                            title: "Imagen en google drive",   
                                            text: 'Imagen asociada a la <b>categoría</b> y alojada en <b>Google Drive</b>',   
                                            confirmButtonColor: "#DD6B55;",
                                            html: true,
                                            allowOutsideClick: true,
                                            imageUrl: url,
                                            imageSize: "400x200",
                                            animation: false
                                        });
                                        break;

                                }              
                            }
                        }); 

                    };
                    //s=>Seccion Imagen=>S1|I1
                    $(document.body).on('click', '.fa-picture-o' ,function(){
                        $('#sei').val($(this).attr("id"));
                        $("#modalVerImagen").click();    
                    });    
                                        
                });  
                
                           
            </script>
            <style>
/*                .ajustar{
                    width: 1000px;
                    float: left;
                    white-space: pre;  CSS 2.0 
                    white-space: pre-wrap;  CSS 2.1 
                    white-space: pre-line;  CSS 3.0 
                    white-space: -pre-wrap;  Opera 4-6 
                    white-space: -o-pre-wrap;  Opera 7 
                    white-space: -moz-pre-wrap;  Mozilla 
                    white-space: -hp-pre-wrap;  HP 
                    word-wrap: break-word;  IE 5+ 
                }*/
                
                #cmbTipDiv{
                    background-color: whitesmoke; 
                    box-shadow: 0 0 2px black; 
                    margin: 0px 0px 0px 0px; 
                    font-weight: bold; 
                    color: black; 
                    text-align: center; 
                    color: black; 
                    width: 200px;
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
                                <h2><i class="halflings-icon edit"></i><span class="break"></span>Seleccione Tipo</h2>
                                <div class="box-icon">
                                    <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                                </div>
                            </div><br>
                            <div class="box-content">
                                <form class="form-horizontal" id="formSlider">
                                    <fieldset>
                                        <div class="control-group">
                                            <label class="control-label"><b>Divisi&oacute;n&nbsp;&nbsp;&nbsp;</b></label>
                                            <div id="divCmbSer" class="input-append">
                                                <select id="cmbTipDiv">
                                                    <option value="">(SELECCIONE)</option>
                                                    <option value="1">TIPO 1</option>
                                                    <option value="2">TIPO 2</option>
                                                    <option value="3">TIPO 3</option>
                                                    <option value="4">TIPO 4</option>
                                                    <option value="5">TIPO 5</option>
                                                    <option value="6">TIPO 6</option>
                                                    <option value="7">TIPO 7</option>
                                                </select>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div><!--/span-->
                    </div><!--/row-->
                    
                    <div id="divTip1" style="display: none;" class="row-fluid sortable D"> <!-- style="display: none;"-->
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span><span style="font-weight: bold;">[SLIDER] - [COLECCI&Oacute;N]</span> - <b style="font-weight: bold;">[TIPO 1]</b></h2>
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
                                                <div class="input-append">
                                                    <input id="txtD1Id" size="30" type="text" maxlength="10" disabled  value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline"></span>
                                            </div>
                                        </div> 

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Colecci&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD1Co" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de colección</span>
                                            </div>
                                        </div>         
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>T&iacute;tulo</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD1Tit" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                                </div>
                                                <span class="help-inline">Máximo 30 caracteres</span>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="textarea2"><b>Descripci&oacute;n</b></label>
                                            <div class="controls">
                                                <textarea id="txtD1Tex" rows="3" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; color: black;"></textarea>
                                            </div>
                                            <span class="help-inline">Máximo 150 caracteres</span>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD1GD" placeholder="ej: 0B82UUH1gaEMANHBWQW5yLVM4bWc" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS1I1" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">490x490</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL</b></label>
                                            <div class="controls">
                                                <input id="txtD1Ur1" placeholder="URL a la Categoría o Colección" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="divTip2" style="display: none;" class="row-fluid sortable D"> <!-- style="display: none;"-->
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span><span style="font-weight: bold;">[SLIDER] - [COLECCI&Oacute;N - PRODUCTO]</span> - <b style="font-weight: bold;">[TIPO 2]</b></h2>
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
                                                <div class="input-append">
                                                    <input id="txtD2Id" size="30" type="text" maxlength="10" disabled  value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline"></span>
                                            </div>
                                        </div> 

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Colecci&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD2Co" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de colecci&oacute;n</span>
                                            </div>
                                        </div>    
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Producto</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD2Po" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de producto</span>
                                            </div>
                                        </div>    
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>T&iacute;tulo</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD2Tit" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                                </div>
                                                <span class="help-inline">Máximo 30 caracteres</span>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="textarea2"><b>Descripci&oacute;n</b></label>
                                            <div class="controls">
                                                <textarea id="txtD2Tex" rows="3" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; color: black; width: 400px;"></textarea>
                                            </div>
                                            <span class="help-inline">Máximo 150 caracteres</span>
                                        </div>

<!--                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Precio</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD2p1" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Sección inferior</span>
                                            </div>
                                        </div>-->
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD21GD" placeholder="Imagen superior" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS2I1" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">495x245</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD22GD" placeholder="Imagen inferior" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS2I2" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">495x245</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL</b></label>
                                            <div class="controls">
                                                <input id="txtD2Ur1" placeholder="URL al conjunto de ofertas" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL</b></label>
                                            <div class="controls">
                                                <input id="txtD2Ur2" placeholder="URL al detalle del producto en oferta" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="divTip3" style="display: none;" class="row-fluid sortable D"> <!-- style="display: none;"-->
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span><span style="font-weight: bold;">[SLIDER] - [COLECCI&Oacute;N]</span> - <b style="font-weight: bold;">[TIPO 3]</b></h2>
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
                                                <div class="input-append">
                                                    <input id="txtD3Id" size="30" type="text" maxlength="10" disabled  value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline"></span>
                                            </div>
                                        </div> 
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Colecci&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD3Co" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de colecci&oacute;n</span>
                                            </div>
                                        </div>    
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>T&iacute;tulo</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD3Tit" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                                </div>
                                                <span class="help-inline">Máximo 30 caracteres</span>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD3GD" placeholder="Tamaño sugerido 490 x 490" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS3I1" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">490x490</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL</b></label>
                                            <div class="controls">
                                                <input id="txtD3Ur1" placeholder="URL a la Categoría o Colección" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="divTip4" style="display: none;" class="row-fluid sortable D"> <!-- style="display: none;"-->
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span><span style="font-weight: bold;">[SLIDER] - [PRODUCTO]</span> - <b style="font-weight: bold;">[TIPO 4]</b></h2>
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
                                                <div class="input-append">
                                                    <input id="txtD4Id" size="30" type="text" maxlength="10" disabled  value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline"></span>
                                            </div>
                                        </div> 
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Producto1</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD4Po1" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de producto 1</span>
                                            </div>
                                        </div>    
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Producto2</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD4Po2" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de producto 2</span>
                                            </div>
                                        </div>    
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Producto3</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD4Po3" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de producto 3</span>
                                            </div>
                                        </div>    
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Producto4</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD4Po4" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de producto 4</span>
                                            </div>
                                        </div>    
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD41GD" placeholder="Imagen superior izquierda" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS4I1" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">241x241</span>
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD42GD" placeholder="Imagen superior derecha" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS4I2" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">241x241</span>
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD43GD" placeholder="Imagen inferior izquierda" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS4I3" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">241x241</span>
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD44GD" placeholder="Imagen inferior derecha" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS4I4" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">241x241</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Bot&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD4B1" placeholder="Texto inferior izquierdo" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Máximo 20 caracteres</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Bot&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD4B2" placeholder="Texto inferior derecho" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Máximo 20 caracteres</span>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label"><b>URL1</b></label>
                                            <div class="controls">
                                                <input id="txtD4Ur1" placeholder="URL al detalle del producto" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL2</b></label>
                                            <div class="controls">
                                                <input id="txtD4Ur2" placeholder="URL al detalle del producto" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL3</b></label>
                                            <div class="controls">
                                                <input id="txtD4Ur3" placeholder="URL al detalle del producto" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL4</b></label>
                                            <div class="controls">
                                                <input id="txtD4Ur4" placeholder="URL al detalle del producto" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                        
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="divTip5" style="display: none;" class="row-fluid sortable D"> <!-- style="display: none;"-->
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span><span style="font-weight: bold;">[SLIDER] - [COLECCI&Oacute;N]</span> - <b style="font-weight: bold;">[TIPO 5]</b></h2>
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
                                                <div class="input-append">
                                                    <input id="txtD5Id" size="30" type="text" maxlength="10" disabled  value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline"></span>
                                            </div>
                                        </div> 
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Colecci&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD5Co" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de colecci&oacute;n</span>
                                            </div>
                                        </div>        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>T&iacute;tulo</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD5Tit" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                                </div>
                                                <span class="help-inline">Máximo 30 caracteres</span>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Bot&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD5B1" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Máximo 20 caracteres</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="textarea2"><b>Descripci&oacute;n</b></label>
                                            <div class="controls">
                                                <textarea id="txtD5Tex" rows="3" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; color: black;"></textarea>
                                            </div>
                                            <span class="help-inline">Máximo 150 caracteres</span>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD5GD" placeholder="Tamaño sugerido 490 x 490" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS5I1" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">490x490</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL</b></label>
                                            <div class="controls">
                                                <input id="txtD5Ur1" placeholder="URL a la Categoría o Colección" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="divTip6" style="display: none;" class="row-fluid sortable D"> <!-- style="display: none;"-->
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span><span style="font-weight: bold;">[SLIDER] - [PRODUCTOS]</span> - <b style="font-weight: bold;">[TIPO 6]</b></h2>
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
                                                <div class="input-append">
                                                    <input id="txtD6Id" size="30" type="text" maxlength="10" disabled  value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline"></span>
                                            </div>
                                        </div> 
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Producto1</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD6Po1" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de producto 1</span>
                                            </div>
                                        </div>    
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Producto2</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD6Po2" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de producto 2</span>
                                            </div>
                                        </div>    
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Producto3</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD6Po3" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de producto 3</span>
                                            </div>
                                        </div>    
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD61GD" placeholder="Imagen superior" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS6I1" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">490x242</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD62GD" placeholder="Imagen inferior izquierda" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS6I2" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">240x240</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD63GD" placeholder="Imagen inferior derecha" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS6I3" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">240x240</span>
                                            </div>
                                        </div>
                                                                                
<!--                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Precio</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD6p1" placeholder="Precio superior" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                            </div>
                                        </div>-->
                                        
<!--                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Precio</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD6p2" placeholder="Precio inferior izquierdo" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                            </div>
                                        </div>-->
                                        
<!--                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Precio</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD6p3" placeholder="Precio inferior derecho" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                            </div>
                                        </div>-->

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Bot&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD6B1" placeholder="Texto superior" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Máximo 20 caracteres</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Bot&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD6B2" placeholder="Texto inferior izquierdo" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Máximo 20 caracteres</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Bot&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD6B3" placeholder="Texto inferior derecho" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Máximo 20 caracteres</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL1</b></label>
                                            <div class="controls">
                                                <input id="txtD6Ur1" placeholder="URL al detalle del producto" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL2</b></label>
                                            <div class="controls">
                                                <input id="txtD6Ur2" placeholder="URL al detalle del producto" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL3</b></label>
                                            <div class="controls">
                                                <input id="txtD6Ur3" placeholder="URL al detalle del producto" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div id="divTip7" style="display: none;" class="row-fluid sortable D"> <!-- style="display: none;"-->
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span><span style="font-weight: bold;">[SLIDER] - [COLECCI&Oacute;N]</span> - <b style="font-weight: bold;">[TIPO 7]</b></h2>
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
                                                <div class="input-append">
                                                    <input id="txtD7Id" size="30" type="text" maxlength="10" disabled  value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline"></span>
                                            </div>
                                        </div> 
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID Colecci&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD7Col" size="30" type="text" maxlength="10" value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Identificador de colecci&oacute;n</span>
                                            </div>
                                        </div>    

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>T&iacute;tulo</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD7Tit" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                                </div>
                                                <span class="help-inline">Máximo 30 caracteres</span>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Bot&oacute;n</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="txtD7B1" size="30" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                </div>
                                                <span class="help-inline">Máximo 20 caracteres</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="textarea2"><b>Descripci&oacute;n</b></label>
                                            <div class="controls">
                                                <textarea id="txtD7Tex" rows="3" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; color: black;"></textarea>
                                            </div>
                                            <span class="help-inline">Máximo 150 caracteres</span>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                            <div class="controls">
                                                <input id="txtD7GD" placeholder="Tamaño sugerido 300 x 492" size="16" type="text" maxlength="28" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 400px;">
                                                <span id="sVerImgS7I1" class="help-inline">
                                                    <i class="fa fa-picture-o fa-2x"></i>
                                                </span>
                                                <span class="help-inline">300x490</span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label"><b>URL</b></label>
                                            <div class="controls">
                                                <input id="txtD7Ur1" placeholder="URL a la Categoría o Colección" size="16" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black; width: 800px;">
                                                <span class="help-inline">&nbsp; URL + par&aacute;metros</span>
                                            </div>
                                        </div>
                                        
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <!-- GIF LOAD-->
                    <div id="espera" class="form-actions" style="display:none;">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        <h4 class="alert-heading">&nbsp;</h4>
                    </div>
                    <div id="warning" style="display:none;" class="box-content alerts"></div>
                    <div id="botonera" class="form-actions" style="margin-bottom: 30px; display:none;">
                        <button type="button" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" class="btn" id="btnGuardar">Guardar</button>
                        <button type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px; " class="btn btn-info btn-setting" id="btnEliminar">Eliminar</button>
                        <button type="reset" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn" id="btnLimpiar">Limpiar</button>
                    </div>
                    

                    <div class="row-fluid sortable">		
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span>Categor&iacute;as Ingresadas</h2>
                                <div class="box-icon">
                                    <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                                    <a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
                                </div>
                            </div>
                            <div id="conTabla" class="box-content">
                                <table id="tblSlider" class="table table-striped table-bordered bootstrap-datatable">
                                    <thead id="thead">
                                       
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
    <script src="../controller/sliderCatController.js"></script>
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
    opc<input type="text" id="opc" value= ""><br>
    sei<input type="text" id="sei" value= ""><br>
    mtoD2p1<input type="text" id="mtoD2p1" value= ""><br>
    mtoD6p1<input type="text" id="mtoD6p1" value= ""><br>
    mtoD6p2<input type="text" id="mtoD6p2" value= ""><br>
    mtoD6p3<input type="text" id="mtoD6p3" value= ""><br>
    
    <!-- Datos sesion================================= -->    
    
</body>
</html>

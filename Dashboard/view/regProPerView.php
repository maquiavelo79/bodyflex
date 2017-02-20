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
            <title>Bodyflex - [PRO] Perfil</title>
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
            
            <script>
        
                function importancia_perfil(){

                    var msgImpPer='<p style="text-align: justify; font-size: 16px; font-family: Verdana; color: #1b2426;">Esta clasificación es muy importante debido a que los miembros de la comunidad que requieran de <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">asesoría deportiva </b> se basarán en los criterios del perfil para la búsqueda del profesional en base a sus gustos y preferencias, por lo anterior, a modo de ejemplo, algunos criterios por los que podría buscar un determinado cliente podrían ser:</p>';
                    
                    msgImpPer+='<ul style="text-align: left; font-size: 16px; font-family: Verdana; color: #1b2426;">';
                        msgImpPer+='<li>Nivel Académico (Estudios)</li>';
                        msgImpPer+='<li>Experiencia Laboral</li>';
                        msgImpPer+='<li>Experiencia Deportiva</li>';
                        msgImpPer+='<li>Región a la que pertenece el profesional</li>';
                        msgImpPer+='<li>Edad del Profesional</li>';
                        msgImpPer+='<li>Especialidad</li>';
                    msgImpPer+='</ul>';
                    
                    msgImpPer+='<p style="text-align: justify; font-size: 16px; font-family: Verdana; color: #1b2426;">Dado la importancia de esta clasificación, el perfil debe ser lo más veridico y preciso posible, en caso de no ser representativo por favor recopila los antecedentes necesarios y solicita vía email la actualización de la información, atenderemos tu solicitud a la brevedad posible.</p>';
                    msgImpPer+='<p><b style="text-align: center; font-size: 20px; color: blue; font-family: Impact, Charcoal, sans-serif;">profesionales@bodyflex.cl</b></p>';
                                        
                    swal({   
                        title: '<p style="font-family: Verdana; font-size: 22px; color: black; text-align: center;">Perfil Profesional</p>',   
                        html: msgImpPer,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        width: '850px',
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    
                }   
                                
                function estudios(){

                    var msgEstudios='';
                    msgEstudios+='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">';
                        msgEstudios+='Estudios del profesional según información proporcionada en proceso de postulación';
                    msgEstudios+='</p>';
                    
                    swal({   
                        title: 'Estudios',   
                        html: msgEstudios,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    
                }   
                
                function certificaciones(){

                    var msgVtaPre='';                  
                    msgVtaPre+='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">';
                        msgVtaPre+='Certificaciones del profesional según información proporcionada en proceso de postulación';
                    msgVtaPre+='</p>';
                    
                    swal({   
                        title: 'Certificaciones',   
                        html: msgVtaPre,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    
                }   
                
                function diplomado(){

                    var msgVtaPre='';                  
                    msgVtaPre+='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">';
                        msgVtaPre+='Diplomados del profesional según información proporcionada en proceso de postulación';
                    msgVtaPre+='</p>';
                    
                    swal({   
                        title: 'Diplomados',   
                        html: msgVtaPre,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    
                }   
                
                function torneos(){

                    var msgVtaPre='';                  
                    msgVtaPre+='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">';
                        msgVtaPre+='Participación en campeonatos según información proporcionada en proceso de postulación';
                    msgVtaPre+='</p>';
                    
                    swal({   
                        title: 'Campeonatos',   
                        html: msgVtaPre,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    
                }   
                
                function experiencia(){

                    var msgVtaPre=''; 
                    msgVtaPre+='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">';
                        msgVtaPre+='Experiencia del profesional según información proporcionada en proceso de postulación';
                    msgVtaPre+='</p>';
                    
                    swal({   
                        title: 'Experiencia',   
                        html: msgVtaPre,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    
                }   
                
                function especialidad(){

                    var msgEsp='';
                    msgEsp+='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">';
                        msgEsp+='Especialidad del profesional según información proporcionada en proceso de postulación o lo especificado en sección: <br><br>';
                        msgEsp+='<p>';	
                            msgEsp+='<a href="../../../bodyflex/Dashboard/view/regProView.php">';
                                msgEsp+='<i class="fa fa-database fa-2x"></i><br>';
                                msgEsp+='<span style="color: black; font-weight: bold;" class="hidden-tablet">&nbsp;Datos</span>';
                            msgEsp+='</a>';
                        msgEsp+='</p>';	
                    msgEsp+='</p>';
                    
                    swal({   
                        title: 'Especialidad',   
                        html: msgEsp,   
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
    <?php include("../../../bodyflex/admin/modulos/header.php"); ?>
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
                                
                    <div style="display: none;" class="row-fluid sortable">
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                                    <i class="halflings-icon edit"></i>
                                    <span class="break"></span>Búsqueda
                                </h2>
                            </div>
                            <div class="box-content">
                                <div class="controls" style="margin-left: 120px;">
                                    <div class="input-append">
                                        <label class="control-label" for="appendedInput">ID de Postulaci&oacute;n</label>
                                    </div> &nbsp;
                                    <div class="input-append">
                                        <input id="id" class="solo-numero" disabled style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 100px;" type="text" maxlength="10" value="">
                                    </div> &nbsp;
                                    <div class="input-append">
                                        <input id="resEst" name="resEst" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 180px;" type="text" disabled maxlength="100">
                                    </div> &nbsp;
                                    <div class="input-append">
                                        <input id="resRut" name="resRut" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 180px;" type="text" disabled maxlength="100">
                                    </div> &nbsp;
                                    <div class="input-append">
                                        <input id="resNom" name="resNom" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 180px;" type="text" disabled maxlength="100">
                                    </div>&nbsp;
                                    <div class="input-append">
                                        <input id="resApe" name="resApe" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 180px;" type="text" disabled maxlength="100">
                                    </div>&nbsp;
                                </div>
                            </div>
                        </div><!--/span-->
                    </div><!--/row-->
                    
                    <div id="dirWarning1" style="display: none;" class="box-content alerts">
                        <div style="text-align:center;" class="alert alert-success">
                            <button type="button" class="close" data-dismiss="alert">×</button>
                            <b><span style="color: #000;">Registro exitoso!.</span></b>
                        </div>
                    </div>
                    
                    <div id="perfilacion" style="display: block;" class="row-fluid sortable">
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                                    <i class="halflings-icon edit"></i>
                                    <span class="break"></span>Profesional Perfil &nbsp; 
                                    <span onclick="importancia_perfil();" style="cursor: pointer; color: blue; font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold;"><u>¿POR QUÉ ES IMPORTANTE TU PERFIL?</u></span>
                                    
                                </h2>
                            </div>
                            <br>
                            <div class="box-content">
                                <form class="form-horizontal">
                                    <fieldset>
                                        
                                        <div id="detPerfilacion" class="control-group">
                                                                                        
                                            <div>
                                                <label class="control-label" for="selectError"><b>Identificador</b></label>
                                                <div class="controls">
                                                    <input id="txtId" type="text" disabled style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black; width: 150px;">
                                                </div>
                                            </div>
                                            
                                            <div style="margin-top: 8px;">
                                                <label style="margin-top: 20px" class="control-label" for="appendedInput"><b>Estudios</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <label style="font-weight: bold; font-size: 12px; color: blue;">[T&eacute;cnico]</label>
                                                        <select id="cmbTec" style="width: 130px;" data-rel="chosen"></select>
                                                    </div> &nbsp;
                                                    <div class="input-append">
                                                        <label style="font-weight: bold; font-size: 12px; color: blue;">[Profesional]</label>
                                                        <select id="cmbPro" style="width: 130px;" data-rel="chosen"></select>
                                                    </div> &nbsp;
                                                    <div class="input-append">
                                                        <label style="font-weight: bold; font-size: 12px; color: blue;">[Licenciado]</label>
                                                        <select id="cmbLic" style="width: 130px;" data-rel="chosen"></select>
                                                    </div> &nbsp;
                                                    <div class="input-append">
                                                        <label style="font-weight: bold; font-size: 12px; color: blue;">[Mag&iacute;ster]</label>
                                                        <select id="cmbMas" style="width: 130px;" data-rel="chosen"></select>
                                                    </div> &nbsp;
                                                    <div class="input-append">
                                                        <label style="font-weight: bold; font-size: 12px; color: blue;">[MBA]</label>
                                                        <select id="cmbMba" style="width: 130px;" data-rel="chosen"></select>
                                                    </div> &nbsp;
                                                    <div class="input-append">
                                                        <label style="font-weight: bold; font-size: 12px; color: blue;">[Doctorado]</label>
                                                        <select id="cmbDoc" style="width: 130px; color: black; font-weight: bold;" data-rel="chosen"></select>
                                                    </div> &nbsp;
                                                    <span class="help-inline">
                                                        <i class="fa fa-info-circle fa-2x" style="margin-top: 12px; color: green; cursor: pointer;" onclick="estudios();"></i>
                                                    </span> 
                                                </div>
                                            </div>
                                            
                                            <div style="margin-top: 5px;">
                                                <label class="control-label" for="appendedInput"><b>Certificaci&oacute;n</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <select id="cmbCer" style="width: 130px;" data-rel="chosen"></select>
                                                    </div> &nbsp;
                                                    <span class="help-inline">
                                                        <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="certificaciones();"></i>
                                                    </span> 
                                                </div>
                                            </div>
                                                                                        
                                            <div style="margin-top: 5px;">
                                                <label class="control-label" for="appendedInput"><b>Diplomado</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <select id="cmbDip" style="width: 130px;" data-rel="chosen"></select>
                                                    </div> &nbsp;
                                                    <span class="help-inline">
                                                        <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="diplomado();"></i>
                                                    </span> 
                                                </div>
                                            </div>
                                            
                                            <div style="margin-top: 5px;">
                                                <label class="control-label" for="appendedInput"><b>Campeonatos</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <select id="cmbTor" style="width: 130px;" data-rel="chosen"></select>
                                                    </div> &nbsp;
                                                    <span class="help-inline">
                                                        <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="torneos();"></i>
                                                    </span> 
                                                </div>
                                            </div>

                                            <div style="margin-top: 5px;">
                                                <label class="control-label" for="appendedInput"><b>Regi&oacute;n</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <select id="cmbReg" style="width: 370px;" data-rel="chosen">
                                                            <option value=0>(SELECCIONE)</option>
                                                            <option value=16>INTER REGION</option>
                                                            <option value=1>I - ARICA Y PARINACOTA</option>
                                                            <option value=2>II - TARAPACA</option>
                                                            <option value=3>III - ANTOFAGASTA</option>
                                                            <option value=4>IV - ATACAMA</option>
                                                            <option value=5>V - COQUIMBO</option>
                                                            <option value=6>VI - VALPARAISO</option>
                                                            <option value=7>VII - DEL LIBERTADOR GRAL. BERNARDO O'HIGGINS</option>
                                                            <option value=8>VIII - DEL MAULE</option>
                                                            <option value=9>IX - DEL BIOBIO</option>
                                                            <option value=10>X - DE LA ARAUCANIA</option>
                                                            <option value=11>XI - DE LOS RIOS</option>
                                                            <option value=12>XII - DE LOS LAGOS</option>
                                                            <option value=13>XIII - AISÉN DEL GRAL. CARLOS IBÁÑEZ DEL CAMPO</option>
                                                            <option value=14>XIV - MAGALLANES Y DE LA ANTÁRTICA CHILENA</option>
                                                            <option value=15>XV - METROPOLITANA DE SANTIAGO</option>
                                                        </select>
                                                    </div> 
                                                </div>
                                            </div>
                                            
                                            <div style="margin-top: 5px;">
                                                <label class="control-label" for="appendedInput"><b>Sexo</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <select id="cmbSex" style="width: 130px;" data-rel="chosen">
                                                            <option value=0>(SELECCIONE)</option>
                                                            <option value=1>MASCULINO</option>
                                                            <option value=2>FEMENINO</option>
                                                        </select>
                                                    </div> 
                                                </div>
                                            </div>
                                            
                                            <div style="margin-top: 5px;">
                                                <label class="control-label" for="appendedInput"><b>Experiencia</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <select id="cmbExp" style="width: 130px;" data-rel="chosen">
                                                            <option value=0>(SELECCIONE)</option>
                                                            <option value=1>S-EXP</option>
                                                            <option value=2>[1 - 3[</option>
                                                            <option value=3>[3 - 6[</option>
                                                            <option value=4>más de 6</option>
                                                        </select>
                                                    </div> 
                                                    <span class="help-inline">
                                                        <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="experiencia();"></i>
                                                    </span> 
                                                </div>
                                            </div>
                                            
                                            <div style="margin-top: 5px;">
                                                <label class="control-label" for="appendedInput"><b>Edad</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <select id="cmbEda" style="width: 130px;" data-rel="chosen">
                                                            <option value=0>(SELECCIONE)</option>
                                                            <option value=1>[20 - 30[</option>
                                                            <option value=2>[30 - 40[</option>
                                                            <option value=3>[desde 40]</option>
                                                        </select>
                                                    </div> 
                                                </div>
                                            </div>

                                            <div style="margin-top: 5px;">
                                                <label class="control-label" for="appendedInput">Especialidad</label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <input id="txtEsp" disabled maxlength="40" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black; width: 320px;" type="text" maxlength="100">
                                                    </div>
                                                    <span class="help-inline">
                                                        <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="especialidad();"></i>
                                                    </span> 
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <!-- GIF LOAD-->
                                        <div id="espera" class="form-actions" style="display:none;">
                                            <button type="button" class="close" data-dismiss="alert">×</button>
                                            <h4 class="alert-heading">&nbsp;</h4>
                                        </div>

                                    </fieldset>
                                </form>
                            </div>
                        </div><!--/span-->
                    </div><!--/row-->
                    <div id="dirWarning2" style="display: none;" class="box-content alerts">
                        <div style="text-align:center;" class="alert alert-success">
                            <button type="button" class="close" data-dismiss="alert">×</button>
                            <b><span style="color: #000;">Registro exitoso!.</span></b>
                        </div>
                    </div>
                    
                    <div id="divAlta" style="display: none;" style="text-align:center;" class="alert">
                        <button style="margin-left: 42%; background-color: #FFCC00; color: black; font-weight: bold; width: 200px;" type="button" class="btn" id="btnAlta">Alta de Profesional</button>
                    </div>
                    
                </div><!--/.fluid-container-->
            <!-- end: Content -->    
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->
    
    <?php include("../../../bodyflex/admin/modulos/footer.php"); ?>
    <?php include("../../../bodyflex/admin/modulos/javaScript.php"); ?>
    
    <script src="../js/jquery.Rut.js" type="text/javascript"></script> 
    <script>
        $(document).ready(function (){
          $('.solo-numero').keyup(function (){
            this.value = (this.value + '').replace(/[^0-9]/g, '');
          });
          $('#resRut').Rut({
                on_error: function(){
                                        
                    $('#resRut').select();
                    var msg='<div style="text-align:center;" class="alert alert-error">';
                    msg+='<b><span style="color: #000;">Favor ingrese un Rut válido</span></b>';
                    msg+='</div>'; 
                    $('#regWarning').html(msg);
                    $('#regWarning').show();
                    return false;
                    
                },
                format_on: 'keyup'
            });
        });
    </script>
    
    <script src="../controller/regProPerController.js"></script>
    <script src='../controller/cerrarSesion.js'></script>
        
    <!-- sweetalert-master-->
        <script src="../sweetalert-master2/sweetalert2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../sweetalert-master2/sweetalert2.css">
    <!-- sweetalert-master-->
    
    <!-- Datos sesion, solo si esta definida variable sesion ================================= -->
    <?php if(isset($_SESSION['sesion'])){ ?>
        <input type="text" id="email" value="<?= $_SESSION['email'];?>"><br>
        <input type="text" id="nombre" value="<?= $_SESSION['nombre'];?>"><br>
        <input type="text" id="apellido" value="<?= $_SESSION['apellido'];?>"><br>
        <input type="text" id="alias" value="<?= $_SESSION['alias'];?>"><br>
        <input type="text" id="rol" value= "<?= $_SESSION['rol'];?>"><br>
        <input type="text" id="rut" value= "<?= $_SESSION['rut'];?>"><br>
        <input type="text" id="dv" value= "<?= $_SESSION['dv'];?>"><br>
        <input type="text" id="url" value= "<?= $_SESSION['url'];?>"><br>
        <input type="text" id="idPos" value= "<?= $_SESSION['idPos'] ;?>"><br>
    <?php } ?>
    <input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>"><br>
    <input type="text" id="session_id" value= "<?= $_SESSION['sesion_id'];?>"><br>
    <!-- Datos sesion================================= -->    
    
</body>
</html>

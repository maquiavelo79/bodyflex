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
            <title>Bodyflex - Producto Colecci&oacute;n Producto</title>
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
/*                thead, tbody { display: block; }
                tbody {
                    height: 300px;        Just for the demo          
                    overflow-y: auto;     Trigger vertical scroll    
                    overflow-x: hidden;   Hide the horizontal scroll 
                }*/

                .calendar-text { margin-top: .3em; }
                .file-text { margin-top: .2em; }    
                
                .productos{
                    
                    background-color: whitesmoke; 
                    box-shadow: 0 0 2px black; 
                    margin: 0px 0px 0px 0px; 
                    font-weight: bold; 
                    color: black; 
                    width:100px; 
                    text-align: center;
                    float: left;
                    margin-left: 10px;
                    margin-top: 10px;
                    height: 130px;
                    cursor: pointer;

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
                    
                    <div class="row-fluid sortable">
                        <div class="box span12">
                                <div class="box-header" data-original-title>
                                    <h2><i class="halflings-icon edit"></i><span class="break"></span>Seleccione colecci&oacute;n </h2>
                                    <div class="box-icon">
                                        <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                                    </div>
                                </div>
                                <br>
                                <div class="box-content">
                                    <form class="form-horizontal" id="formSlider">
                                        <fieldset>
                                            
                                            <div class="control-group">
                                                <label class="control-label" for="selectError"><b>Colecciones</b></label>
                                                <div id="divCat1" class="controls">
                                                    <select id="cmbCol" data-rel="chosen">
                                                            
                                                    </select>
                                                </div>
                                            </div>
                                                      
                                            <!-- alerts -->
                                            <div id="warning" class="box-content alerts"></div>
                                                           
                                            <div id="espera" class="form-actions" style="display:none;">
                                                <button type="button" class="close" data-dismiss="alert">×</button>
                                                <h4 class="alert-heading">&nbsp;</h4>
                                            </div>
                                            
                                        </fieldset>
                                    </form>
                                </div>
                        </div><!--/span-->
                    </div><!--/row-->
                    
                    <div id="proCol" class="row-fluid sortable" style="display:none;">
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2 id="rsm"></h2>
                                <div class="box-icon">
                                    <a href="#" class="btn-minimize">
                                        <i class="halflings-icon chevron-up"></i>
                                    </a>
                                </div>
                            </div>
                            <div id="categorias"> 
                                <div class="productos">
                                    <span class="fa-stack fa-3x">
                                      <i class="fa fa-comment fa-stack-2x" style="color: #FFCC00;;"></i>
                                      <strong style="color: black;" class="fa-stack-1x fa-stack-text fa-inverse">5</strong>
                                    </span>
                                    <p>Pantalones</p>
                                </div>    
                                <div class="clearfix"></div>
                            </div>
                        </div><!--/span-->
                    </div><!--/row-->
                </div><!--/.fluid-container-->
            <!-- end: Content -->    
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->
    
    <div class="clearfix"></div>
    
    <a id="showModal" style="display:none;" class="btn btn-info btn-setting">AQUI</a>
    <div class="modal hide fade" id="myModal" style="width: 700px;">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">×</button>
            <h3>Productos Colecci&oacute;n</h3>
        </div>
        <div class="modal-body">
            <table class="table table-condensed">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categor&iacute;a 2</th>
                    </tr>
                </thead>
                <tbody id="proDet" style="overflow-y: scroll;">
                    <tr id="33" style="font-size: 14px; font-weight: bold; cursor: pointer; color: blue;" class="registro"><td class="center">33</td><td class="center"> Guante KIds Púrpura</td><td class="center">ACCESORIOS HOMBRE</td></tr><tr id="35" style="font-size: 14px; font-weight: bold; cursor: pointer; color: blue;" class="registro"><td class="center">35</td><td class="center"> Calzas Largas Mujer DF Epic Run</td><td class="center">BUZO MUJER</td></tr><tr id="34" style="font-size: 14px; font-weight: bold; cursor: pointer; color: blue;" class="registro"><td class="center">34</td><td class="center">Zapatilla Running Hombre T5E4N.3007</td><td class="center">CALZADO</td></tr><tr id="47" style="font-size: 14px; font-weight: bold; cursor: pointer; color: blue;" class="registro"><td class="center">47</td><td class="center">Calza Mujer Legendary Tight</td><td class="center">PANTALON</td></tr><tr id="46" style="font-size: 14px; font-weight: bold; cursor: pointer; color: blue;" class="registro"><td class="center">46</td><td class="center"> Calza Mujer Legendary Engineered Waterfall Multic</td><td class="center">PANTALON</td></tr><tr id="67" style="font-size: 14px; font-weight: bold; cursor: pointer; color: blue;" class="registro"><td class="center">67</td><td class="center">Polera Tres Rayas Essentials</td><td class="center">POLERAS</td></tr><tr id="37" style="font-size: 14px; font-weight: bold; cursor: pointer; color: blue;" class="registro"><td class="center">37</td><td class="center">Polera Hombre Just Do It Pixel Crew Gris</td><td class="center">POLERAS</td></tr><tr id="43" style="font-size: 14px; font-weight: bold; cursor: pointer; color: blue;" class="registro"><td class="center">43</td><td class="center"> Polera Deportiva Para Correr</td><td class="center">POLERAS</td></tr>
                </tbody>
            </table>
        </div>
        <div class="modal-footer">
            <a style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn" data-dismiss="modal">Aceptar</a>
        </div>
    </div>
    
    <?php include("../../../bodyflex/admin/modulos/footer.php"); ?>
    
    <!-- start: JavaScript-->
    <?php include("../../../bodyflex/admin/modulos/javaScript.php"); ?>
    <script src="../controller/coleccionProController.js"></script>
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
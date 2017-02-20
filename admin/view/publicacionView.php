<?php
session_start();         
//Navegación - para determinar navegación 
    $nav=9; //Publicacion
//Nivel -- para determinar ruta de archivos incluidos
    $nivel=2; 

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
        $_SESSION['idPub']='';
        //$_SESSION['idPos']='';
    }        
    
    if($_SESSION['sesion']!=1){
        header("Location: ../index.php");
    }    

?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<!-- Basic Page Needs================ -->
            <meta charset="utf-8">
            <title>Bodyflex - [ADM] Publicación</title>
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

                
                /*ESTILO CEBRA EN TABLA*/
                #a-table a{
                    text-decoration: none;
                    color: inherit;
                }
                
                #a-table tr:nth-child(odd){background-color: white}
                #a-table tr:hover{
                    background-color: grey;
                    color: white;
                }
                #a-table{
                    border-spacing: 0;
                    border-collapse: collapse;
                    border: transparent;
                }
               
            </style>
            
            <script>
                
                $(function(){
                    $('#a-table tr>*').click(function (e) {
                        var a = $(this).closest('tr').find('a');
                        e.preventDefault();
                        //location.href = a.attr('href');
                    });
                 });    
                     
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
            <?php include("../modulos/menu.php"); ?>
            <div id="content" class="span10">
                <?php include("../modulos/navegacion.php"); ?>
                <?php include("../modulos/headerUser.php"); ?>
                <?php include("../modulos/publicacionResumen.php"); ?>                            
                <?php include("../modulos/publicacion.php"); ?>
                <?php include("../modulos/publicacionEtiquetado.php"); ?>                   
                <?php include("../modulos/publicacionReferencias.php"); ?>  
                <?php include("../modulos/publicacionContenido.php"); ?>  
                <?php include("../modulos/publicacionLista.php"); ?> 
                                                       
            </div><!--/.fluid-container-->
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->
		
    <div class="modal hide fade" id="myModal"></div>
   
    <div class="clearfix"></div>
    <?php include("../../../bodyflex/admin/modulos/footer.php"); ?>
    <!-- start: JavaScript-->
        <?php include("../../../bodyflex/admin/modulos/javaScript.php"); ?>
        <script src="../controller/publicacionController.js"></script>
        <script src="../controller/publicacionCategoriaEtiquetaController.js"></script>
        <script src="../controller/publicacionReferenciasController.js"></script>
        <script src="../controller/publicacionContenidoController.js"></script>
        <script src="../js/publicacionFunciones.js"></script>
        <script src='../controller/cerrarSesion.js'></script>
    <!-- end: JavaScript-->
    
        <!--    sweetalert-master-->
        <script src="../sweetalert-master2/sweetalert2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../sweetalert-master2/sweetalert2.css">
        <!--    sweetalert-master-->
    
    
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
        puId<input type="text" id="puId" value= "<?= $_SESSION['idPub'];?>"><br>
<!--        idPos<input type="text" id="idPos" value= "<?= $_SESSION['idPos'] ;?>"><br>-->
    <?php } ?>
        
    sesion<input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>"><br>
    sesion_id<input type="text" id="session_id" value= "<?= $_SESSION['sesion_id'];?>"><br>
    <!-- Datos sesion================================= -->    
        
    
</body>
</html>


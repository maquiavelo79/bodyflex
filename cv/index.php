<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Bodyflex - Curr&iacute;culum</title>
<meta name="viewport" content="initial-scale=1.0,width=device-width" />

<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/prettyPhoto.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/print.css" type="text/css" media="print" />

<!-- Favicons -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../imagenes/apple-touch-icon-144.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="../imagenes/apple-touch-icon-114.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="../imagenes/apple-touch-icon-72.png">
<link rel="apple-touch-icon-precomposed" href="../imagenes/apple-touch-icon-57.png">
<link rel="shortcut icon" href="../imagenes/favicon.ico">   

</head>
<body>

<!--STICKER-->
<div id="sticker"></div>

<div id="wrapper">
<?php 
//THE FOLLOWING SECTIONS ARE
//BROKEN UP INTO SEPARATE FILES
//YOU CAN REARRANGE THEM HERE
include('sections/bio.php');
//include('sections/skills.php');
include('sections/experience.php');
include('sections/education.php');
include('sections/honors_awards.php');
//include('sections/as_seen_on.php');
//include('sections/recommendations.php');
//include('sections/contact.php');

$rutPro = $_REQUEST['rutPro'];

?>
</div><!--end wrapper-->


<input type="hidden" id="rutPro" value= "<?= $rutPro; ?>"><br>

<!--COPYRIGHT-->
<div id="copyright">&copy; <?php echo date('Y');?> Bodyflex </div>

<!--SCRIPTS-->
<script src="js/jquery.js"></script>
<script src="js/prettyPhoto.js"></script>
<script src="js/backPosition.js"></script>
<script src="js/custom.js"></script>

</body>
</html>
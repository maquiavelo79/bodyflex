<?php
 
    switch($nav){
        case 0: $ubi='Dashboard';
            break;
        case 1: $ubi='Ficha';
            break;
        case 2: $ubi='Deslizador';
            break;
        case 3: $ubi='Servicios';
            break;
        case 4: $ubi='Portafolio';
            break;
        case 5: $ubi='Currículum > Resumen';  /**/
            break;
        case 6: $ubi='Currículum > Estudios';  /**/
            break;
        case 7: $ubi='Currículum > Experiencia';  /**/
            break;
        case 8: $ubi='Currículum > Otros';  /**/
            break;
        case 9: $ubi='Publicaciones';  /**/
            break;
        case 10: $ubi='Eventos';  /**/
            break;
        case 11: $ubi='Direcciones';  /**/
            break;
        case 12: $ubi='Alumnos';  /**/
            break;
        case 13: $ubi='Validar Perfil';  /**/
            break;
        case 14: $ubi='Solicitar Publicacion';  /**/
            break;
        
    }
?>

<ul class="breadcrumb">
    <li>
        <i class="icon-home"></i>
        <a href="../index.php">Home</a> 
        <i class="icon-angle-right"></i>
    </li>    
    <li><a href="#"><?=$ubi?></a></li> 
</ul>
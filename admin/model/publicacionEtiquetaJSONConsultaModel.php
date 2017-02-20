<?php

include("../model/conection.php");

    $cat = $_REQUEST['cat'];
    $eti = $_REQUEST['eti'];

    $enlace=conectar();

    if($enlace!=false){

        $sql="CALL SP_CP_ADM_PUBLICACION_CONSULTA_ETIQUETA(" . "'" . $cat . "'," .
                                    "'" . $eti . "');";

        //echo $sql;

        $resp=mysql_query($sql,$enlace) or die("Error en: $sql: " . mysql_error());

        $array=array();

        while($fila = mysql_fetch_array($resp,MYSQL_NUM)){
            $array[] = $fila[0];
        }

        echo json_encode($array);

    }
    
    
    //desconectar();
<?php

include("../model/conection.php");

    if(isset($_POST['query'])){
    
        $query = $_POST['query'];
               
        $enlace=conectar();

        if($enlace!=false){

            $sql="CALL SP_CP_PRO_PUBLICACION_CONSULTA_CATEGORIA_ETIQUETA2(" . "'" . $query . "'" . ");";

            //echo $sql;
            
            $resp=mysql_query($sql,$enlace) or die("Error en: $sql: " . mysql_error());

            $array=array();
            
            while($fila = mysql_fetch_array($resp,MYSQL_NUM)){
                $array[] = $fila[0];
            }

            echo json_encode($array);
            
        }
    }
    
    //desconectar();
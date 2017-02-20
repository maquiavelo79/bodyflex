<?php

include("../model/conection.php");

    $id=$_REQUEST['spId'];
    $enlace=conectar();
    
    if($enlace!=false){
        
        $sql="CALL SP_ADM_SERVICIO_PROFE_VERIFICA_IMAGEN(" . "'" . $id  . "');";
        $resp=mysql_query($sql,$enlace);
        if(mysql_num_rows($resp)>0){
            while($fila = mysql_fetch_array($resp,MYSQL_NUM)){
                $resp = $fila[0] . '|' . $fila[1]; 
                echo $resp;
                break;
            }  
        }else{
            echo 9; //SIN REGISTROS
        }            
    }else{
        echo 0;
    }
 
    desconectar();


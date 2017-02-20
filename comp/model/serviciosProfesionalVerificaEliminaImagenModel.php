<?php

include("../model/conection.php");
    
    $ruta="../../servicio/";
    $id=$_REQUEST['id'];
    $enlace=conectar();
    
    if($enlace!=false){
        
        $sql="CALL SP_ADM_SERVICIO_PROFE_VERIFICA_IMAGEN(" . "'" . $id  . "');";
        $resp=mysql_query($sql,$enlace);
        if(mysql_num_rows($resp)>0){
            while($fila = mysql_fetch_array($resp,MYSQL_NUM)){
                $resp = $fila[0]; 
                $arch = $fila[1];
                break;
            }  
            if($resp==1){
                $file=$ruta . $arch;
                $do = unlink($file);
            }
        }else{
            echo 9; //SIN REGISTROS
        }            
    }else{
        echo 0;
    }
 
    desconectar();


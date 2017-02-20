<?php
session_start(); 
include("../model/conection.php");

$ruta='../../servicio/';

    $id=$_REQUEST['id'];
    $enlace=conectar();
    if($enlace!=false){
        $sql="CALL SP_ADM_SERVICIO_PROFE_ELIMINA(" . "'" . $id  . "');";
        $resp=mysql_query($sql,$enlace);
        if(mysql_num_rows($resp)>0){
             while($fila = mysql_fetch_array($resp,MYSQL_NUM)) {
                if($fila[0]==1){
                    $file=$ruta . $fila[1];
                    $do = unlink($file);
                    $_SESSION['spId']=0;
                }
                echo $fila[0];
             }    
        }else{
            echo 9;
        }
    }else{
        echo 0;
    }
 
    desconectar();


<?php
session_start(); 
include("../model/conection.php");

$sTr = '';
$sTrR = '';

    $_SESSION['spId']=0;
    //$rut=$_REQUEST['rut'];

    //sleep(1);
    
    $enlace=conectar();
    
    if($enlace!=false){
        
        $sql="CALL SP_ADM_SERVICIO_PROFE_CONSULTA();";
              
        $resp=mysql_query($sql,$enlace) or die("Error en: $sql: " . mysql_error());
        
        if(mysql_num_rows($resp)>0){
            while($fila = mysql_fetch_array($resp,MYSQL_NUM)) {
            
                if($fila[0]=='X'){
                   echo $fila[0];
                   exit();
                }else{
                    
                    $spId=$fila[0];
                    $spNom=$fila[1];
                    $spCls=$fila[4];
                    $spImg=$fila[5];
                    $spFli=$fila[6];
                    $spDesCor=$fila[2];
                    $spDesLar=$fila[3];

                    $spCan=$fila[7];

                    $sTr = '<tr style="cursor:pointer;">';
                       $sTr.='<td style="width: 5%;" class="center">' . $spId   . '</td>';
                       $sTr.='<td style="width: 10%;" class="center">' . $spNom . '</td>';
                       $sTr.='<td style="width: 10%;" class="center">' . $spCls . '</td>';
                       $sTr.='<td style="width: 10%;" class="center">' . $spImg  . '</td>';
                       $sTr.='<td style="width: 10%;" class="center">' . $spFli  . '</td>';
                       $sTr.='<td style="width: 15%;" class="center">' . $spDesCor  . '</td>';
                       $sTr.='<td style="width: 40%;" class="center">' . $spDesLar  . '</td>';
                    $sTr.='</tr>';

                    $sTrR.=$sTr;

                }
            }

            echo $sTrR . '|' . $spCan;
                
        }else{
            echo 9;
        }        
    }else{
        echo 0;
    }
 
    desconectar();
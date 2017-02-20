<?php
session_start(); 
include("../model/conection.php");

    $id=$_REQUEST['id'];
    $email=$_REQUEST['email'];
    $nom=$_REQUEST['nom'];
    $fli=$_REQUEST['fli'];
    $dc=$_REQUEST['dc'];
    $dt=$_REQUEST['dt'];
    $ci=$_REQUEST['ci'];
      
    $sTrR='';

    $enlace=conectar();
    
    if($enlace!=false){

        $sql="CALL SP_ADM_SERVICIO_PROFE_INGRESA_MODIFICA(" . "'" . $id . "'," .
                                            "'" . $email . "'," .
                                            "'" . $nom . "'," .
                                            "'" . $fli . "'," .
                                            "'" . $dc . "'," .
                                            "'" . $dt . "'," .
                                            "'" . $ci  . "');";
       
        $resp=mysql_query($sql,$enlace) or die("Error en: $sql: " . mysql_error());        
        if(mysql_num_rows($resp)>0){
            while($fila = mysql_fetch_array($resp,MYSQL_NUM)) {
    
                $spId=$fila[0];
                $spNom=$fila[1];
                $spCls=$fila[4];
                $spImg=$fila[5];
                $spFli=$fila[6];
                $spDesCor=$fila[2];
                $spDesLar=$fila[3];
                
                $spIdCntx=$fila[7];

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
                $_SESSION['spId']=$spIdCntx;
                
            }
                       
            echo $sTrR . '|' . $_SESSION['spId'];
            
        }else{
            echo 9;
        }              
    }else{
        echo 0;
    }
 
    desconectar();
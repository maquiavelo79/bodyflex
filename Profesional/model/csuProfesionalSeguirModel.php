<?php
session_start();
include("../model/conection.php");

//sleep(5);

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $proRut=$_REQUEST['proRut'];    
    $eml=$_REQUEST['email'];
        
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_WPRO_CONSULTA_PUBLICACION_SEGUIR(:proRut, :eml, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':proRut', $proRut, PDO::PARAM_STR, 20);
            $stmt->bindParam(':eml', $eml, PDO::PARAM_STR, 100);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){           
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):     
                    $sTrR.=$r[0];
                endwhile; 
            }else{
                $stmt->closeCursor();
                $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];

                switch($codErr){
                    case 0:
                        if($num==0){
                            $codErr=8;
                            $desErr='PROCEDIMIENTO NO RETORNA REGISTROS';
                        }
                        break;
                    case 99:
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_CONSULTA_PUBLICACION_SEGUIR';
                        break;
                    case 98:
                        $desErr='SIN CONTENIDO';
                        break;
                }
            }        
        }else{
            $codErr=9;
            $desErr='NO ES POSIBLE CONECTAR';
        }
        
    }catch(PDOException $exception){ 
       $codErr=100;
       $desErr=$exception->getMessage(); 
    } 	    
        
    $strXml.='<SALIDA>';
        $strXml.='<ERROR>';
            $strXml.='<CODERROR>';
                $strXml.=$codErr;
            $strXml.='</CODERROR>';
            $strXml.='<DESERROR>';
                $strXml.=$desErr;
            $strXml.='</DESERROR>';
        $strXml.='</ERROR>';    
        $strXml.='<DATOS>';
            //$strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            //$strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;


<?php

include("../model/conection.php");

    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';

    $idPro=$_REQUEST['idPro'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_PRO_CAT(:idPro, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':idPro', $idPro, PDO::PARAM_STR,10);
            $stmt->execute();

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
                    $desErr='ERROR EN PROCEDIMEINTO';
                    break;
                case 98:
                    $desErr='SIN CONTENIDO';
                    break;
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
    $strXml.='</SALIDA>';
    echo $strXml;

    
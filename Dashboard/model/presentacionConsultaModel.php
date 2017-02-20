<?php

include("../model/conection.php");

$strDivDat='';
$strDivFile='';
$strDivOutPut='';

$sTrR='';
$strXml='';
$codErr=0;
$desErr='OPERACION EXITOSA!';

    $rut=$_REQUEST['rut'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_PRO_CONSULTA_PRESENTACION(:rut, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $preFot=$r[0];
                    $prePre=$r[1];

                    $sTrR.='<URL><![CDATA[' . $preFot . ']]></URL>';
                    $sTrR.='<PRESENTACION><![CDATA[' . $prePre . ']]></PRESENTACION>';   
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
                        $desErr='ERROR EN PROCEDIMEINTO';
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

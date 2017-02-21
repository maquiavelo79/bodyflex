<?php
//header('Content-Type: application/xml');
include("../model/conection.php");

$sTr = '';
$sTrR = '';

$puId=$_REQUEST['puId'];
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strXml='';
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_PRO_PUBLICACION_VALIDA_ELEMENTOS(:puId, @codErr);";
           
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':puId', $puId, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $strDat = $r[0];
                endwhile;    
            }else{
                
                $stmt->closeCursor();
                $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];

                switch($codErr){
                    case 0:
                        if($num==0){
                            $codErr=88;
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
        $strXml.='<DATO>';
            $strXml.=$strDat;
        $strXml.='</DATO>';
    $strXml.='</SALIDA>';
    echo $strXml;
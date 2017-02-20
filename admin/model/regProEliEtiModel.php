<?php

include("../model/conection.php");

    $id=$_REQUEST['id'];
   
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
        
    try{
	
        $conn=PDO_conectar();     
        
        if($conn){    

            $sql="CALL SP_CP_ADM_ELI_ETI_PRO(:id, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 10);
            $stmt->execute();
            
            $stmt->closeCursor();
            $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
            $codErr = $output['@codErr'];

            switch($codErr){
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
        $strXml.='<DATOS>';
            //$strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            //$strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

<?php

include("./conection.php");

    $rut=$_REQUEST['rut'];
    $cont=0;
    $cant=0;
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_PRO_CSU_RSP_INC_PRO(:rut, @codErr, @nInc);";
            
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR,10);
            $stmt->execute();
            $stmt->closeCursor();
            $output = $conn->query("select @codErr, @nInc")->fetch(PDO::FETCH_ASSOC);
            $codErr = $output['@codErr'];
            $cant = $output['@nInc'];
            
            switch($codErr){
                case 99:
                    $desErr='ERROR EN PROCEDIMEINTO: SP_CP_PRO_CSU_RSP_INC_PRO';
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
            $strXml.='<CANTIDAD>';
                $strXml.=$cant;
            $strXml.='</CANTIDAD>';
        $strXml.='</ERROR>';
    $strXml.='</SALIDA>';
    echo $strXml;


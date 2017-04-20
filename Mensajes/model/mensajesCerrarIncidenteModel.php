<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    sleep(1);
    
    $incidente=$_REQUEST['incidente']; //id de mensaje
  
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_MENSAJE_CERRAR_INCIDENTE(:incidente, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':incidente', $incidente, PDO::PARAM_STR, 20);
            $stmt->execute();
           
            $stmt->closeCursor();
            $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
            $codErr = $output['@codErr'];

            switch($codErr){
                case 99:
                    $desErr='ERROR EN PROCEDIMEINTO';
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
            $strXml.=$sTrR ;
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

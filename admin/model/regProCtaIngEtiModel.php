<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    $sId=0;
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $id=$_REQUEST['id']; 
    $eti=$_REQUEST['eti']; 
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_ING_ETI_PRO(:id, :eti, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 10);
            $stmt->bindParam(':eti', $eti, PDO::PARAM_STR, 10);
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
    $strXml.='</SALIDA>';
    echo $strXml;

    
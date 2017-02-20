<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $id=$_REQUEST['id'];
    $precio=$_REQUEST['precio'];
    $iva=$_REQUEST['iva'];
    $neto=$_REQUEST['neto'];
    $tbk=$_REQUEST['tbk'];
    $utilidad=$_REQUEST['utilidad'];

    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_ADM_ACT_MTO_PRO(:id, :precio, :iva, :neto, :tbk, :utilidad, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 10);
            $stmt->bindParam(':precio', $precio, PDO::PARAM_STR, 10);
            $stmt->bindParam(':iva', $iva, PDO::PARAM_STR, 10);
            $stmt->bindParam(':neto', $neto, PDO::PARAM_STR, 10);
            $stmt->bindParam(':tbk', $tbk, PDO::PARAM_STR, 10);
            $stmt->bindParam(':utilidad', $utilidad, PDO::PARAM_STR, 10);
            $stmt->execute();

            $stmt->closeCursor();
            $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
            $codErr = $output['@codErr'];

            switch($codErr){
                case 99:
                    $desErr='ERROR EN PROCEDIMEINTO';
                    break;
                case 98:
                    $desErr='PRODUCTO NO EXISTE';
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
            $strXml.=$sTrR;
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;        

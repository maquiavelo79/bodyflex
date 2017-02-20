<?php
session_start(); 
include("../model/conection.php");

$sTrR='';
$strXml='';
$codErr=0;
$desErr='OPERACION EXITOSA!';

    $id=$_REQUEST['id'];
    
    try{
        $conn=PDO_conectar();     
        if($conn){    
            
            $sql="CALL SP_CP_PRO_SLIDER_ELIMINA(:id, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->execute();
                     
            $_SESSION['sId']=0;
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
        $strXml.='<IDENTIFICADOR>';
            $strXml.=$_SESSION['sId'];
        $strXml.='</IDENTIFICADOR>';
    $strXml.='</SALIDA>';
    echo $strXml;



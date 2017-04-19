<?php

include("./conection.php");

    $rutOri=$_REQUEST['rut'];
    //$rutDes=$_REQUEST['rutPro'];
    $msg=$_REQUEST['mensaje'];
    $asu=$_REQUEST['asunto'];
    $rol=$_REQUEST['rol'];
    $email=$_REQUEST['email'];
    //$emlPro=$_REQUEST['emlPro'];
        
    $msg=filter_var($msg,FILTER_SANITIZE_STRING);
    $asu=filter_var($asu,FILTER_SANITIZE_STRING);
    
    $msg=filter_var($msg,FILTER_SANITIZE_SPECIAL_CHARS);
    $asu=filter_var($asu,FILTER_SANITIZE_SPECIAL_CHARS);
    
    $titulo='';
    $cont=0;
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CAT_INGRESA_SOLICITUD_SOPORTE(:rutOri, :msg, :asu, :rol, :email, @codErr);";
            
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutOri', $rutOri, PDO::PARAM_STR,10);
            //$stmt->bindParam(':rutDes', $rutDes, PDO::PARAM_STR,10);
            $stmt->bindParam(':msg', $msg, PDO::PARAM_STR,2000);
            $stmt->bindParam(':asu', $asu, PDO::PARAM_STR,100);
            $stmt->bindParam(':rol', $rol, PDO::PARAM_STR,100);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR,100);
            //$stmt->bindParam(':emlPro', $emlPro, PDO::PARAM_STR,100);
            $stmt->execute();
            //$num= $stmt->rowCount();

            $stmt->closeCursor();
            $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
            $codErr = $output['@codErr'];

            switch($codErr){
                case 99:
                    $desErr='ERROR EN PROCEDIMEINTO: SP_CAT_INGRESA_SOLICITUD_SOPORTE';
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


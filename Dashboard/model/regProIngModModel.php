<?php

include("../model/conection.php");

sleep(1);

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $proId=$_REQUEST['proId'];
    $proFon=$_REQUEST['proFon'];
    $proCel=$_REQUEST['proCel'];
    $proPro=$_REQUEST['proPro']; 
    $proEsp=$_REQUEST['proEsp']; 
    $proFpr=$_REQUEST['proFpr']; 
    
    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_PRO_REG_POS_PRO(:proId, :proFon, :proCel, :proPro, :proEsp, :proFpr, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':proId', $proId, PDO::PARAM_STR, 20);    
            $stmt->bindParam(':proFon', $proFon, PDO::PARAM_STR, 20);
            $stmt->bindParam(':proCel', $proCel, PDO::PARAM_STR, 20);
            $stmt->bindParam(':proPro', $proPro, PDO::PARAM_STR, 50);
            $stmt->bindParam(':proEsp', $proEsp, PDO::PARAM_STR, 50);
            $stmt->bindParam(':proFpr', $proFpr, PDO::PARAM_STR, 50);
            $stmt->execute();
                         
            $stmt->closeCursor();
            $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
            $codErr = $output['@codErr'];

            switch($codErr){
                case 0:
                    $desErr='MODIFICACION EXITOSA';    
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
//        $strXml.='<DATOS>';
//            //$strXml.= '<![CDATA[';
//                $strXml.=$sTrR;
//            //$strXml.=']]>';
//        $strXml.='</DATOS>';
        $strXml.='<ESTADO>';
            $strXml.='REGISTRADA';
        $strXml.='</ESTADO>';
    $strXml.='</SALIDA>';
    echo $strXml;        

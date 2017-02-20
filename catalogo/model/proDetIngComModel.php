<?php

include("../model/conection.php");

    $sTrR = '';    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $cant='';
    $hayMas='';
    $strXml='';
    
    sleep(1);
        
    $tit=$_REQUEST['tit'];
    $com=$_REQUEST['com'];
    $pts=$_REQUEST['pts'];
    $rut=$_REQUEST['rut'];
    $idPro=$_REQUEST['idPro'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_PRO_ING_COM(:tit, :com, :pts, :rut, :idPro, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':tit', $tit, PDO::PARAM_STR,100);
            $stmt->bindParam(':com', $com, PDO::PARAM_STR,350);
            $stmt->bindParam(':pts', $pts, PDO::PARAM_STR,5);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR,10);
            $stmt->bindParam(':idPro', $idPro, PDO::PARAM_STR,10);
            $stmt->execute();
            $stmt->closeCursor();
            $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
            $codErr = $output['@codErr'];

            switch($codErr){
                case 0:
                    $codErr=0;
                    $desErr='INGRESO EXITOSO';
                    break;
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
            $strXml.='<HAYMAS>';
                $strXml.=$hayMas;
            $strXml.='</HAYMAS>';
            $strXml.='<CANT>';
                $strXml.=$cant;
            $strXml.='</CANT>';
        $strXml.='</ERROR>';    
    $strXml.='</SALIDA>';
    echo $strXml;

    
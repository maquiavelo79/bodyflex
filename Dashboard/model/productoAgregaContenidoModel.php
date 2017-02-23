<?php

include("../model/conection.php");

    $proId=$_REQUEST['proId'];
    $tipCon=$_REQUEST['tipCon'];
    $IdDri=$_REQUEST['IdDri'];
    $idCon=$_REQUEST['idCon'];
    
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
        
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_PRO_PROFESIONAL_PRODUCTO_INGRESA_MODIFICA_CONTENIDO(:proId," .
                                                 ":tipCon," .
                                                 ":IdDri," .
                                                 ":idCon," .  
                                                 "@codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':proId', $proId, PDO::PARAM_STR,10);
            $stmt->bindParam(':tipCon', $tipCon, PDO::PARAM_STR,100);
            $stmt->bindParam(':IdDri', $IdDri, PDO::PARAM_STR,500);
            $stmt->bindParam(':idCon', $idCon, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();     
            
            if($num>0){
               while ($r = $stmt->fetch(PDO::FETCH_NUM)):                
                    if($r[0]==1){
                        $codErr=0;
                        $desErr='CONTENIDO INGRESADO EXITOSAMENTE';
                    }else{
                        $codErr=0;
                        $desErr='CONTENIDO MODIFICADO EXITOSAMENTE';
                    }
                endwhile;
            }else{
                
                $stmt->closeCursor();
                $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];

                switch($codErr){
                    case 0:
                        if($num==0){
                            $codErr=8;
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
        $strXml.='<DATOS>';
            //$strXml.= '<![CDATA[';
                $strXml.='';
            //$strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
    
    
    
    
    
    
    
    
    
<?php
session_start(); 
include("../model/conection.php");

    $id=$_REQUEST['id'];
    $rut=$_REQUEST['rut'];
    $eti=$_REQUEST['Eti'];
    $fli=$_REQUEST['Fli'];
      
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_PRO_PORTAFOLIO_INGRESA_MODIFICA(:id, :rut, :eti, :fli, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 20);
            $stmt->bindParam(':eti', $eti, PDO::PARAM_STR, 30);
            $stmt->bindParam(':fli', $fli, PDO::PARAM_STR, 30);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   
                    
                    $poId=$r[0]; //ID
                    $poAc=$r[1]; //ACCION
                    $sTrR.=$poAc;
 
                endwhile;
                $_SESSION['poId']=$id;  
                $stmt->closeCursor();
                $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
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
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
        $strXml.='<ID>';
            $strXml.=$poId;
        $strXml.='</ID>';
    $strXml.='</SALIDA>';
    echo $strXml;    
<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $rut=$_REQUEST['rut'];
    $id=$_REQUEST['id'];
    $nom=$_REQUEST['nom'];
    $fec=$_REQUEST['fec'];
    $pos=$_REQUEST['pos'];
    $des=$_REQUEST['des'];
    $tip=$_REQUEST['tip'];
    
    $des=filter_var($des,FILTER_SANITIZE_STRING);
    $des=filter_var($des,FILTER_SANITIZE_SPECIAL_CHARS);
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_PRO_OTROS_INGRESA_MODIFICA(:rut," .
                                            ":id," .
                                            ":nom," .
                                            ":fec," .
                                            ":pos," .
                                            ":des," .
                                            ":tip," . 
                                            "@codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 20);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->bindParam(':nom', $nom, PDO::PARAM_STR, 100);
            $stmt->bindParam(':fec', $fec, PDO::PARAM_STR, 10);
            $stmt->bindParam(':pos', $pos, PDO::PARAM_INT);
            $stmt->bindParam(':des', $des, PDO::PARAM_STR, 300);
            $stmt->bindParam(':tip', $tip, PDO::PARAM_STR, 50);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):                         
                    $otId=$r[0];
                    $sTrR.=$otId;
                endwhile;  
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
            //$strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            //$strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
    
 
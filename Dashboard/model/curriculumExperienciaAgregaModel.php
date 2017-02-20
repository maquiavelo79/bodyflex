<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $rut=$_REQUEST['rut'];
    $id=$_REQUEST['id'];
    $car=$_REQUEST['car'];
    $ins=$_REQUEST['ins'];
    $des=$_REQUEST['des'];
    $has=$_REQUEST['has'];
    $pos=$_REQUEST['pos'];
    $desc=$_REQUEST['desc'];
    $ta=$_REQUEST['ta'];
    
    $desc=filter_var($desc,FILTER_SANITIZE_STRING);
    $desc=filter_var($desc,FILTER_SANITIZE_SPECIAL_CHARS);
    
    try{
	
        $conn=PDO_conectar();     
        if($conn){

            $sql="CALL SP_CP_PRO_EXPERIENCIA_INGRESA_MODIFICA(:rut," .
                                            ":id," .
                                            ":car," .
                                            ":ins," .
                                            ":des," .
                                            ":has," .
                                            ":pos," .
                                            ":desc," .
                                            ":ta,".
                                            "@codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 20);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->bindParam(':car', $car, PDO::PARAM_STR, 100);
            $stmt->bindParam(':ins', $ins, PDO::PARAM_STR, 100);
            $stmt->bindParam(':des', $des, PDO::PARAM_STR, 10);
            $stmt->bindParam(':has', $has, PDO::PARAM_STR, 10);
            $stmt->bindParam(':pos', $pos, PDO::PARAM_INT);
            $stmt->bindParam(':desc', $desc, PDO::PARAM_STR, 2000);
            $stmt->bindParam(':ta', $ta, PDO::PARAM_STR, 2);
            $stmt->execute();
            $num= $stmt->rowCount();
                        
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  
                    $exId=$r[0];
                    $sTrR.=$exId;
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
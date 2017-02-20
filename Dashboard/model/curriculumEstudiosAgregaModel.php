<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $idEs='';

    $rut=$_REQUEST['rut'];
    $id=$_REQUEST['id'];
    $nom=$_REQUEST['nom'];
    $tip=$_REQUEST['tip'];
    $ins=$_REQUEST['ins'];
    $con=$_REQUEST['con'];
    $pos=$_REQUEST['pos'];
    $fec=$_REQUEST['fec'];
    $dur=$_REQUEST['dur'];
    //$des=$_REQUEST['des'];
      
    //$desc=filter_var($des,FILTER_SANITIZE_STRING);
    //$desc=filter_var($des,FILTER_SANITIZE_SPECIAL_CHARS);
    
    $tIpo='';
    
    $fec=  str_replace('-', '/', $fec);

    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_PRO_INGRESA_MODIFICA_ESTUDIOS(:rut," .
                                            ":id," .
                                            ":nom," .
                                            ":tip," .
                                            ":ins," .
                                            ":con," .
                                            ":pos," .
                                            ":fec," .   
                                            ":dur," . 
                                            //":des,"
                                            "@codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 20);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->bindParam(':nom', $nom, PDO::PARAM_STR, 100);
            $stmt->bindParam(':tip', $tip, PDO::PARAM_STR, 50);
            $stmt->bindParam(':ins', $ins, PDO::PARAM_STR, 100);
            $stmt->bindParam(':con', $con, PDO::PARAM_STR, 50);
            $stmt->bindParam(':pos', $pos, PDO::PARAM_INT);
            $stmt->bindParam(':fec', $fec, PDO::PARAM_STR, 10);
            $stmt->bindParam(':dur', $dur, PDO::PARAM_STR, 50);
            //$stmt->bindParam(':des', $des, PDO::PARAM_STR, 2000);
            $stmt->execute();
            $num= $stmt->rowCount();
                        
            if($num>0){
                
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):     
                    $sTrR.=$r[0];
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
        $strXml.='<IDENTIFICADOR>';
            $strXml.=$sTrR;
        $strXml.='</IDENTIFICADOR>';
    $strXml.='</SALIDA>';
    echo $strXml;        

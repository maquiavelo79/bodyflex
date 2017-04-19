<?php

include("../model/conection.php");

sleep(1);

    $rutOri=$_REQUEST['rutOri'];
    $rutDes=$_REQUEST['rutDes'];
    $tip=$_REQUEST['tip'];
    $key=$_REQUEST['key'];
    $res=$_REQUEST['res'];
    $asu=$_REQUEST['asu'];
    $ali=$_REQUEST['ali'];
    $ade=$_REQUEST['ade'];
    $email=$_REQUEST['email'];
    $mai=$_REQUEST['mai'];
    $inc=$_REQUEST['inc'];
            
    $sTr = '';
    $sTrR = '';
    $paginacion='';
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_PRO_MENSAJE_INGRESA_RESPUESTA(:rutOri," .
                                                    ":rutDes," .
                                                    ":tip," .
                                                    ":key," .
                                                    ":res," .
                                                    ":asu," .
                                                    ":ali," .
                                                    ":ade," .
                                                    ":email," .
                                                    ":mai, " . 
                                                    ":inc, " . 
                                                    "@codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutOri', $rutOri, PDO::PARAM_STR, 10);
            $stmt->bindParam(':rutDes', $rutDes, PDO::PARAM_STR, 10);
            $stmt->bindParam(':tip', $tip, PDO::PARAM_STR, 1);
            $stmt->bindParam(':key', $key, PDO::PARAM_STR, 20);
            $stmt->bindParam(':res', $res, PDO::PARAM_STR, 2000);
            $stmt->bindParam(':asu', $asu, PDO::PARAM_STR, 100);
            $stmt->bindParam(':ali', $ali, PDO::PARAM_STR, 50);
            $stmt->bindParam(':ade', $ade, PDO::PARAM_STR, 50);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR, 50);
            $stmt->bindParam(':mai', $mai, PDO::PARAM_STR, 50);
            $stmt->bindParam(':inc', $inc, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):      
                    $strDat.=$r[0];
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
                $strXml.=$strDat;
            //$strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
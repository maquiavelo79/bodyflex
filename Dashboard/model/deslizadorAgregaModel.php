<?php
session_start(); 
include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $id=$_REQUEST['id'];
    $rut=$_REQUEST['rut'];
    $tit1=$_REQUEST['tit1'];
    $flic=$_REQUEST['flic'];
    $text=$_REQUEST['text'];    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_PRO_SLIDER_INGRESA_MODIFICA(:id," .
                                                        ":rut," .
                                                        ":tit1," .
                                                        ":flic," .
                                                        ":text," .
                                                        "@codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 20);
            $stmt->bindParam(':tit1', $tit1, PDO::PARAM_STR, 30);
            $stmt->bindParam(':flic', $flic, PDO::PARAM_STR, 30);
            $stmt->bindParam(':text', $text, PDO::PARAM_STR, 300);
            $stmt->execute();
            $num= $stmt->rowCount();
                        
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 

                    $slId=$r[0];
                    $slTit1=$r[1];
                    $slDes=$r[2];
                    $slFl=$r[3];
                    $idMod=$r[4]; //ID modificado

                    $sTr = '<tr style="cursor:pointer;">';
                        $sTr.='<td class="center">' . $slId   . '</td>';
                        $sTr.='<td class="center">' . $slTit1 . '</td>';
                        $sTr.='<td class="center">' . $slFl . '</td>';
                        $sTr.='<td>';
                            $sTr.=$slDes;
                        $sTr.='</td>';
                    $sTr.='</tr>';
                    $sTrR.=$sTr;

                    $_SESSION['sId']=$idMod;

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
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
        $strXml.='<IDENTIFICADOR>';
            $strXml.=$_SESSION['sId'];
        $strXml.='</IDENTIFICADOR>';
    $strXml.='</SALIDA>';
    echo $strXml;

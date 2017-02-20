<?php

include("./conection.php");

    $rutPro=$_REQUEST['rutPro'];
   
    $cont=0;
    $sFotos='';
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    
    try{

        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CV_PRO_GET_EXP(:rutPro, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();        
            
            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    
                    $cont+=1;
                    $bioCar=$r[0];
                    $bioIns=$r[1];
                    $bioFde=$r[2];
                    $bioFha=$r[3];
                    $bioDes=$r[4];
                    $bioTa=$r[5];

                    if($bioTa=='SI'){    
                        $sTr.='<li>';
                            $sTr.='<div class="details">';
                                $sTr.='<h3>Trabajo Actual</h3>';
                                $sTr.='<h4>'.$bioIns.'</h4>';
                                $sTr.='<h4>'.$bioCar.'</h4>';
                                $sTr.='<h5>'.$bioFde.' - Presente</h5>';
                            $sTr.='</div>';
                            $sTr.='<p>'.$bioDes.'</p>';
                        $sTr.='</li>';
                    }else{
                        $sTr.='<li>';
                            $sTr.='<div class="details">';
                            $sTr.='<h3>Otros trabajos</h3>';
                            $sTr.='<h4>'.$bioIns.'</h4>';
                            $sTr.='<h4>'.$bioCar.'</h4>';
                            $sTr.='<h5>'.$bioFde.' - '.$bioFha.'</h5>';
                            $sTr.='</div>';
                            $sTr.='<p>'.$bioDes.'</p>';
                        $sTr.='</li>';
                    }

                    $sTrR.=$sTr;
                    $sTr='';

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
    $strXml.='</SALIDA>';
    echo $strXml;

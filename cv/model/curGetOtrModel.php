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

            $sql="CALL SP_CV_PRO_GET_OTR(:rutPro,@codErr);";
            
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    
                    $cont+=1;
                    $otNom=$r[0];
                    $otTip=$r[1];
                    $otFec=$r[2];
                    $otDes=$r[3];

                    $sTr.='<li>';
                        $sTr.='<div class="details">';
                            $sTr.='<h3>'.$otNom.'</h3>';
                                $sTr.='<h5>'.$otTip. ' ' . $otFec. '</h5>';
                        $sTr.='</div>';
                        $sTr.='<p>'.$otDes.'</p>';
                    $sTr.='</li>';

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
    
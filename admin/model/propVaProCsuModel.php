<?php
session_start(); 
include("../model/conection.php");

    $cont=0;
    $sTr = '';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_ADM_CSU_PTA_VAL_PRO(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    
                    $cont+=1;
                    $ptaId=$r[0];
                    $ptaAcr=$r[1];
                    $ptaNom=$r[2];
                    $ptaTit=$r[3];
                    $ptaDes=$r[4];
                    $ptaGD=$r[5];
                                  
                    $sTr = '<tr style="cursor:pointer;">';
                       $sTr.='<td style="font-weight: bold; font-size: 12px;" class="center">' . $ptaId . '</td>';
                       $sTr.='<td style="font-size: 12px;" class="center">' . $ptaAcr . '</td>';
                       $sTr.='<td style="font-size: 12px;" class="center">' . $ptaNom . '</td>';
                       $sTr.='<td style="font-size: 12px;" class="center">' . $ptaTit . '</td>';
                       $sTr.='<td style="font-size: 12px;" class="center">' . $ptaDes . '</td>';
                       $sTr.='<td style="font-size: 12px;" class="center">' . $ptaGD . '</td>';
                    $sTr.='</tr>';

                    $sTrR.=$sTr;
                    
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
                        $desErr='SIN PROPUESTA DE VALOR PARA PROFESIONALES';
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

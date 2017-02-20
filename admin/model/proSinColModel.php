<?php
session_start(); 
include("../model/conection.php");

    $cont=0;
    $total=0;
    $sTr = '';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $rsm=''; 

    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_ADM_CSU_PRO_SIN_COL_RSM(@codErr, @total);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $cont+=1;
                    $sTr.='<div class="productos">';
                        $sTr.='<span class="fa-stack fa-3x">';
                          $sTr.='<i class="fa fa-comment fa-stack-2x" style="color: orangered;"></i>';
                          $sTr.='<strong style="color: black;" class="fa-stack-1x fa-stack-text fa-inverse">'.$r[0].'</strong>';
                        $sTr.='</span>';
                        $sTr.='<p>'.$r[1].'</p>';
                    $sTr.='</div>';
                    $sTrR.=$sTr;
                    $sTr='';
                endwhile;    
                $stmt->closeCursor();
                $output = $conn->query("select @codErr, @total")->fetch(PDO::FETCH_ASSOC);
                $total = $output['@total'];
                
                $rsm.='<i class="halflings-icon edit"></i>';
                $rsm.='<span class="break"></span>';
                $rsm.='<span class="proSinCol" style="font-size: 16px; font-weight: bold; cursor: pointer; color: blue;"><i><u>['.$total.'] Productos sin Colecci&oacute;n</u></i></span>';
                                
            }else{
                $stmt->closeCursor();
                $output = $conn->query("select @codErr, @total")->fetch(PDO::FETCH_ASSOC);
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
                        $desErr='PRODUCTO SIN COLECCIÓN';
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
        
    $sTrR.='<div class="clearfix"></div>';
    
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
            $strXml.= '<RSM>';
                $strXml.= '<![CDATA[';
                    $strXml.=$rsm;
                $strXml.=']]>';    
            $strXml.='</RSM>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

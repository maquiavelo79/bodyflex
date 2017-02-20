<?php

include("../model/conection.php");

$sTrR='';
$strXml='';
$codErr=0;
$desErr='OPERACION EXITOSA!';

//sleep(5);

    $proId=$_REQUEST['proId'];
    
    try{
    
        $conn=PDO_conectar();     

        if($conn){    

            $sql = 'CALL SP_CP_ADM_PRODUCTO_CONSULTA_CONTENIDO(:proId, @codErr)';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':proId', $proId, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):      
                    $sTr ='';
                    $sTr.= '<tr>';
                        $sTr.='<td style="height: 8px; width: 15%; text-align: center; font-size: smaller; cursor: pointer; font-weight: bold">' . $r[0] . '</td>';
                        $sTr.='<td style="height: 8px; width: 15%; text-align: center; font-size: smaller; cursor: pointer; font-weight: bold">' . $r[1] . '</td>';
                        $sTr.='<td style="height: 8px; width: 70%; text-align: center; font-size: smaller; cursor: pointer; font-weight: bold">' . $r[2] . '</td>';
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
    

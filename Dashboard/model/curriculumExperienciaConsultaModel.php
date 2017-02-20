<?php

include("../model/conection.php");

$sTr = '';
$cOndicion='';

    $cont=0;
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $rut=$_REQUEST['rut'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_PRO_EXPERIENCIA_CONSULTA(:rut, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  
 
                    $cont+=1;
                    $exId=$r[0];
                    $exCar=$r[1];
                    $exIns=$r[2];
                    $exFecDes=date("d-m-Y",strtotime($r[3]));
                    $exFecHas=date("d-m-Y",strtotime($r[4]));
                    $exPos=$r[5];
                    $exDes=$r[6];
                    //$exTa=$r[7];


                    $sTr = '<tr style="cursor:pointer;">';
                        $sTr.='<td class="center">' . $exId  . '</td>';
                        $sTr.='<td style="font-weight: bold; font-size: 14px; color: blue; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;" class="center">' . $exCar . '</td>';
                        $sTr.='<td class="center">' . $exIns . '</td>';
                        $sTr.='<td class="center">' . $exFecDes  . '</td>';
                        $sTr.='<td class="center">' . $exFecHas  . '</td>';
                        $sTr.='<td class="center">' . $exPos  . '</td>';
                        $sTr.='<td class="center">' . $exDes  . '</td>';
                        //$sTr.='<td class="center">' . $exTa  . '</td>';
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
        $strXml.='<CONTADOR>';
            $strXml.=$cont;
        $strXml.='</CONTADOR>';
    $strXml.='</SALIDA>';
    echo $strXml;

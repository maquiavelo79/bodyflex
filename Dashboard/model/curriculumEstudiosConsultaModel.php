<?php

include("../model/conection.php");

$sTr = '';
$cOndicion='';
$tIpo='';

    $cont=0;
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $rut=$_REQUEST['rut'];
    
    try{
	
        $conn=PDO_conectar();     
        
        if($conn){    

            $sql="CALL SP_CP_PRO_ESTUDIOS_CONSULTA(:rut, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):     
                    
                    $esId=$r[0];
                    $esNom=$r[1];
                    $esTip=$r[2];
                    $esIns=$r[3];
                    $esNomCon=$r[4];
                    $esFec=date("d-m-Y",strtotime($r[5]));
                    $esPos=$r[6];
                    $esDur=$r[7];
                    //$esDes=$r[8];

                    $sTr = '<tr style="cursor:pointer;">';
                        $sTr.='<td class="center">' . $esId  . '</td>';
                        $sTr.='<td class="center" style="font-weight: bold; font-size: 14px; color: blue; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;">' . $esNom . '</td>';
                        $sTr.='<td class="center">' . $esTip . '</td>';
                        $sTr.='<td class="center">' . $esIns  . '</td>';
                        $sTr.='<td class="center">' . $esNomCon  . '</td>';
                        $sTr.='<td class="center">' . $esFec  . '</td>';
                        $sTr.='<td class="center">' . $esDur  . '</td>';
                        $sTr.='<td class="center">' . $esPos  . '</td>';
                        //$sTr.='<td class="center">' . $esDes  . '</td>';
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

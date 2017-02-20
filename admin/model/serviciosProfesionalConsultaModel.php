<?php
session_start(); 
include("../model/conection.php");

    $_SESSION['spId']=0;

    $cont=0;
    $sTr = '';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
        
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_ADM_SERVICIO_PROFE_CONSULTA(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    
                    $cont+=1;
                    $spId=$r[0];
                    $spNom=$r[1];
                    $spCls=$r[4];
                    $spImg=$r[5];
                    $spFli=$r[6];
                    $spDesCor=$r[2];
                    $spDesLar=$r[3];
                    $spCan=$r[7];

                    $sTr = '<tr style="cursor:pointer;">';
                       $sTr.='<td class="ajustar">' . $spId   . '</td>';
                       $sTr.='<td class="ajustar">' . $spNom . '</td>';
                       $sTr.='<td class="ajustar">' . $spCls . '</td>';
                       $sTr.='<td class="ajustar">' . $spFli  . '</td>';
                       $sTr.='<td class="ajustarDesCor">' . $spDesCor  . '</td>';
                       $sTr.='<td class="ajustarDesLar">' . $spDesLar  . '</td>';
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

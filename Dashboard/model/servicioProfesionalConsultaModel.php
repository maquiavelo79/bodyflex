<?php
session_start(); 
include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $serCant=0;
    
    $rut=$_REQUEST['rut'];

    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_PRO_SERVICIO_PROFESIONAL_OBTIENE_TODOS(:rut, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    
                    $serAgr=$r[0];
                    $serId=$r[1];
                    $serNom=$r[2];
                    $serDesCor=$r[3];
                    $serDesLar=$r[4];
                    $serCant=$r[5];

                    $sTr = '<tr style="cursor:pointer;">';
                        $sTr.='<td style="text-align: center;" class="center">' . $serAgr   . '</td>';
                        $sTr.='<td style="font-weight: bold; font-size: 14px; color: blue; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;" class="center">' . $serId   . '</td>';
                        $sTr.='<td style="font-weight: bold; color: blue; font-size: 16px;" class="center">' . $serNom . '</td>';
                        $sTr.='<td class="ajustarDesCor">' . $serDesCor . '</td>';
                        $sTr.='<td class="ajustarDesLar">' . $serDesLar  . '</td>';
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
                        $desErr='PROFESIONAL SIN SERVICIOS';
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
        $strXml.='<CANTIDAD>';
            $strXml.=$serCant;
        $strXml.='</CANTIDAD>';
    $strXml.='</SALIDA>';
    echo $strXml;

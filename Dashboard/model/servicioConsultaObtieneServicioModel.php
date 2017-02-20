<?php
session_start(); 
include("../model/conection.php");

    $sTr = '';
    $strCmb ='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $strHeader='';
    $strBody='';
    
    $serId=$_REQUEST['serId'];

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_PRO_SERVICIO_OBTIENE_DETALLE(:serId, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':serId', $serId, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  
                    
                    $spId=$r[0]; //ID DEL SERVICIO A SER AGREGADO
                    $spNom=$r[1]; //NOMBRE DEL SERVICIO A SER AGREGADO
                    $spDesCor=$r[2]; //DESCRIPCIÓN CORTA DEL SERVICIO A SER AGREGADO
                    $spDesLar=$r[3]; //DESCRIPCIÓN LARGA DEL SERVICIO A SER AGREGADO

                    //HEADER
                    $strHeader.= '<h2><i class="halflings-icon edit"></i><span class="break"></span><b style="color: blue; font-weight: bold;">' . '[' . $spId . '] ' . $spNom . '</b></h2>';
                    $strHeader.= '<div class="box-icon">';
                        $strHeader.='<a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>';
                    $strHeader.='</div>';

                    //BODY
                    $strBody.='<div class="span6">';
                        $strBody.='<h3>Descripci&oacute;n</h3>';
                        $strBody.='<p>';
                            $strBody.=$spDesCor;
                        $strBody.='</p>';
                    $strBody.='</div>';
                    $strBody.='<div class="span6">';
                        $strBody.='<h3>Descripci&oacute;n detallada</h3>';
                        $strBody.='<p>';
                            $strBody.=$spDesLar;
                        $strBody.='</p>';
                    $strBody.='</div>';

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
        $strXml.='<HEADER>';
            $strXml.= '<![CDATA[';
                $strXml.=$strHeader;
            $strXml.=']]>';
        $strXml.='</HEADER>';
        $strXml.='<BODY>';
            $strXml.= '<![CDATA[';
                $strXml.=$strBody;
            $strXml.=']]>';
        $strXml.='</BODY>';
    $strXml.='</SALIDA>';
    echo $strXml;

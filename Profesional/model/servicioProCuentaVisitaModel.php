<?php

include("../model/conection.php");

    $serId=$_REQUEST['serId'];
    $sesionId=$_REQUEST['sesionId'];
    $email=$_REQUEST['email'];
    $rutPro=$_REQUEST['rutPro'];
   
    $cont=0;
    $sTr='';
    $sTrT='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
       
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_WPRO_SERVICIO_CUENTA_VISITA(:serId, :sesionId, :email, :rutPro, @codErr);";
            
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':serId', $serId, PDO::PARAM_STR,20);
            $stmt->bindParam(':sesionId', $sesionId, PDO::PARAM_STR,30);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR,100);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){     
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $sTrT.=$r[0];        
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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_SERVICIO_CUENTA_VISITA';
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
                $strXml.=$sTrT;
            $strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

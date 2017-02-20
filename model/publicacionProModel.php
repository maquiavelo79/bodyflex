<?php

include("../model/conection.php");

    $puId=$_REQUEST['puId'];
    $puPru=$_REQUEST['puPru'];
   
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
         
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_WAPP_CONSULTA_ARTICULO_PROFESIONAL(:puId, :puPru, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':puId', $puId, PDO::PARAM_STR,50);
            $stmt->bindParam(':puPru', $puPru, PDO::PARAM_STR,50);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   

                    $puNom=$r[0];
                    $puTip2=$r[1];
                    $puEst=$r[2];
                    $puTiT=$r[3];
                    $puPub=$r[4];
                    $puImg=$r[5];
                    $puMes=$r[6];
                    $puDia=$r[7];
                    $puFec=$r[8];
                    $puDrive1=$r[9];
                    $puDrive2=$puDrive1;
                    
                    $puDrivePu = str_replace('FILEID', $puImg, $puDrive1);

                    $puRutPro=$r[10];
                    
                    $puIdFoto=$r[11];
                    
                    $puIdFotPro = str_replace('FILEID', $puIdFoto, $puDrive2);
                                        
                    $sTrR.='<PUNOM>' . $puNom . '</PUNOM>';
                    $sTrR.='<PUTIP2>' . $puTip2 . '</PUTIP2>';
                    $sTrR.='<PUEST>' . $puEst . '</PUEST>';
                    $sTrR.='<PUTIT>' . $puTiT . '</PUTIT>';
                    $sTrR.='<PUPUB><![CDATA[' . $puPub . ']]></PUPUB>';      
                    $sTrR.='<PUIMG>' . $puImg . '</PUIMG>';
                    $sTrR.='<PUMES>' . $puMes . '</PUMES>';
                    $sTrR.='<PUDIA>' . $puDia . '</PUDIA>'; 
                    $sTrR.='<PUFEC>' . $puFec . '</PUFEC>';      
                    $sTrR.='<PUDRIVE><![CDATA[' . $puDrivePu . ']]></PUDRIVE>';
                    $sTrR.='<PURUTPRO>' . $puRutPro . '</PURUTPRO>'; 
                    $sTrR.='<PUIDFOTO><![CDATA[' . $puIdFotPro . ']]></PUIDFOTO>'; 

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
            //$strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            //$strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;    
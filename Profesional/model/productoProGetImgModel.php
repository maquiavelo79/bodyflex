<?php

include("./conection.php");

    $id=$_REQUEST['id'];
   
    $cont=0;
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_WPRO_PROFESIONAL_GET_IMG_PRO(:id, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  
                    $cont+=1;
                    $pImg=$r[0];
                    $pUrl=$r[1];
                    $sUrl=str_replace('FILEID', $pImg, $pUrl);
                    $sTrR.='<a href="'.$sUrl.'"><img src="'.$sUrl.'" height="75" width="75"></a>';
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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_PROFESIONAL_GET_IMG_PRO';
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
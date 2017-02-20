<?php

include("./conection.php");

    $rutPro=$_REQUEST['id'];
   
    $xmlParam='';
    $cont=0;
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_WPRO_PERFIL_PROFESIONAL_GET_DATA_PUBLICACION(:rutPro, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   

                    $pId=$r[0];
                    $pFec=$r[1];
                    $pTit=$r[2];

                    //$pTit='<a target="_blank" onclick="dirigePublicacion('.$pId.');">'.$fila[2].'</a>';

                    $pBaj=$r[3];
                    $pImg=$r[4];
                    $pUrl=$r[5];
                    $pUrl = str_replace('FILEID', $pImg, $pUrl);

                    $pTit=filter_var($pTit,FILTER_SANITIZE_STRING);
                    $pBaj=filter_var($pBaj,FILTER_SANITIZE_STRING);
                    $pUrl=filter_var($pUrl,FILTER_SANITIZE_STRING);

                    $pTit=filter_var($pTit,FILTER_SANITIZE_SPECIAL_CHARS);
                    $pBaj=filter_var($pBaj,FILTER_SANITIZE_SPECIAL_CHARS);
                    $pUrl=filter_var($pUrl,FILTER_SANITIZE_SPECIAL_CHARS);

                    $sTrR.='<ID>'.$pId.'</ID>'; 
                    $sTrR.='<FECHA>'.$pFec.'</FECHA>'; 
                    $sTrR.='<TITULO>'.$pTit.'</TITULO>'; 
                    $sTrR.='<BAJADA>'.$pBaj.'</BAJADA>'; 
                    $sTrR.='<URL>'.$pUrl.'</URL>'; 

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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_PERFIL_PROFESIONAL_GET_DATA_PUBLICACION';
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

   
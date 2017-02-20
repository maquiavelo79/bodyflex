<?php

include("../model/conection.php");

    $puId=$_REQUEST['puId'];
    $reId=$_REQUEST['reId'];
    
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    try{

        $conn=PDO_conectar();     

        if($conn){

            $sql="CALL SP_CP_ADM_PUBLICACION_ELIMINA_REFERENCIA_ASOCIADA(:puId, :reId, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':puId', $puId, PDO::PARAM_STR, 20);
            $stmt->bindParam(':reId', $reId, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){
                
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   
                    $sTrR = $r[0];
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
    

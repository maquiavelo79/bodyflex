<?php

include("../model/conection.php");

    $puId=$_REQUEST['puId'];
    $tipRef=$_REQUEST['tipRef'];
    $ref=$_REQUEST['ref'];
    $desRef=$_REQUEST['desRef'];
    $idPubRef=$_REQUEST['idPubRef'];
    
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
        
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_PRO_PUBLICACION_INGRESA_REFERENCIA(:puId, :tipRef, :ref, :desRef, :idPubRef, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':puId', $puId, PDO::PARAM_STR, 100);
            $stmt->bindParam(':tipRef', $tipRef, PDO::PARAM_STR, 100);
            $stmt->bindParam(':ref', $ref, PDO::PARAM_STR, 100);
            $stmt->bindParam(':desRef', $desRef, PDO::PARAM_STR, 200);
            $stmt->bindParam(':idPubRef', $idPubRef, PDO::PARAM_STR, 100);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):            
                    if($r[0]==1){
                        $codErr=0;
                        $desErr='REFERENCIA INGRESADA EXITOSAMENTE: publicacionReferenciaAgregaModel';
                    }else{
                        $codErr=0;
                        $desErr='REFERENCIA MODIFICADA EXITOSAMENTE: publicacionReferenciaAgregaModel';
                    }
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
                $strXml.='';
            //$strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

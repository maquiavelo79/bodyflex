<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $id=$_REQUEST['id'];
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_CP_PRO_PUBLICACION_VERIFICA_IMAGEN(:id, @codErr);";
            
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,100);
            $stmt->execute();
            $num= $stmt->rowCount();
                        
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $sTrR.='<CODIGO>' . $r[0] . '</CODIGO>';
                    //$sTrR.='<NOMBRE>' . $r[1] . '</NOMBRE>';
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
                        $desErr='PUBLICACIÓN SIN IMAGEN PRINCIPAL';
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

<?php

include("./conection.php");

    $key=$_REQUEST['key'];
    
    $rsp=0;
    $num=0;
   
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_WPRO_CARRO_DEL_PROD(:key, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':key', $key, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  
                    $rsp=$r[0]; //Respuesta
                    $num=$r[1]; //Numero de productos
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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_CARRO_DEL_PROD';
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
            $strXml.='<RESPUESTA>';
                $strXml.=$rsp;
            $strXml.='</RESPUESTA>';
            $strXml.='<CANTIDAD>';
                $strXml.=$num;
            $strXml.='</CANTIDAD>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;


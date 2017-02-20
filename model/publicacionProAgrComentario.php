<?php

include("../model/conection.php");

$sTrR='';
$strXml='';
$codErr=0;
$desErr='OPERACION EXITOSA!';

    $pu=$_REQUEST['pu'];
    $no=$_REQUEST['no'];
    $ap=$_REQUEST['ap'];
    $ma=$_REQUEST['ma'];
    $co=$_REQUEST['co'];
        
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_WAPP_AGREGA_COMENTARIO_PUBLICACION(:pu, :no, :ap, :ma, :co, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':pu', $pu, PDO::PARAM_STR,20);
            $stmt->bindParam(':no', $no, PDO::PARAM_STR,100);
            $stmt->bindParam(':ap', $ap, PDO::PARAM_STR,100);
            $stmt->bindParam(':ma', $ma, PDO::PARAM_STR,100);
            $stmt->bindParam(':co', $co, PDO::PARAM_STR,1000);
            $stmt->execute();
            $num= $stmt->rowCount();   
                        
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $sTrR.=$r[0];
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
 
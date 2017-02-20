<?php

include("../model/conection.php");

    $key=$_REQUEST['key'];
    $mas=$_REQUEST['mas'];
    $menos=$_REQUEST['menos'];
    
    $cont=0;
    $sTr='';
    $sTrT='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    $pCan=0;
    $pSub=0;
    $pTot=0;

    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_WPRO_CARRO_ADD_REDUCE(:key, :mas, :menos, @codErr);";
            
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':key', $key, PDO::PARAM_STR,20);
            $stmt->bindParam(':mas', $mas, PDO::PARAM_INT);
            $stmt->bindParam(':menos', $menos, PDO::PARAM_INT);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){     
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $pCan=$r[0];
                    $pSub=$r[1];
                    $pTot=$r[2];
                    $pTpo=$r[3];                               
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
                            $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_CARRO_ADD_REDUCE';
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
            $strXml.='<CANTIDAD>';
                $strXml.=$pCan;
            $strXml.='</CANTIDAD>';
            $strXml.='<SUBTOTAL>';
                $strXml.=$pSub;
            $strXml.='</SUBTOTAL>';
            $strXml.='<TOTAL>';
                $strXml.=$pTot;
            $strXml.='</TOTAL>';
            $strXml.='<NUMPRO>';
                $strXml.=$pTpo;
            $strXml.='</NUMPRO>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;


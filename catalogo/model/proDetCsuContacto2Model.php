<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $strHead='';
        
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_CON2(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $strTel=$r[0];
                    $strCor=$r[1];
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
                    case 97:
                        $desErr='SIN VALOR EN TABLA DE PARAMETROS';
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
            $strXml.='<TELEFONO>';
                $strXml.=$strTel;
            $strXml.='</TELEFONO>';
            $strXml.='<CORREO>';
                $strXml.=$strCor;
            $strXml.='</CORREO>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
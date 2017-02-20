<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    
    $codErr=0;
    $estado = '';
    $rut = '';
    $nombres = '';
    $apellidos = '';
    $strEst='';
    
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $medida=$_REQUEST['medida']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_CSU_COLOR(:medida, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':medida', $medida, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):

                    $sTrR.='<REGISTRO>'.$r[0].'|'.$r[1].'</REGISTRO>';

                endwhile; 
                
                $stmt->closeCursor();
                $output = $conn->query("SELECT @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                                                
            }else{
                
                $stmt->closeCursor();
                $output = $conn->query("SELECT @codErr")->fetch(PDO::FETCH_ASSOC);
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
                        $desErr='SIN MEDIDAS DEL TIPO ' .$medida;
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
            $strXml.=$sTrR;
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
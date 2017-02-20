<?php
session_start();
include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $rutPro=$_REQUEST['rutPro'];
    $ma=$_REQUEST['email'];
   
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_WPRO_CONSULTA_VOTACION_PROFESIONAL(:rutPro, :ma, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR, 50);
            $stmt->bindParam(':ma', $ma, PDO::PARAM_STR, 100);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){           
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $sTrR.='<LIKE>' . $r[0] . '</LIKE>';
                    $sTrR.='<UNLIKE>' . $r[1] . '</UNLIKE>';         
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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_CONSULTA_VOTACION_PROFESIONAL';
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

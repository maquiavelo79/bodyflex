<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $puId=$_REQUEST['puId'];
       
    try{

        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_WAPP_CONSULTA_REFERENCIAS_ARTICULO(:puId, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':puId', $puId, PDO::PARAM_STR,50);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                $sTrR.='<div class="head">';
                    $sTrR.='<div class="columna1">ID</div>';
                    $sTrR.='<div class="columna2">Nombre</div>';
                    $sTrR.='<div class="columna3">Tipo</div>';
                    $sTrR.='<div class="columna4">Descripci&oacute;n</div>';
                $sTrR.='</div>';
                
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $sTrR.='<div class="contenidos">';
                        $sTrR.='<div class="columna1">'.$r[0].'</div>';
                        $sTrR.='<div class="columna2">'.$r[1].'</div>';
                        $sTrR.='<div class="columna3">'.$r[2].'</div>';
                        $sTrR.='<div class="columna4">'.$r[3].'</div>';
                    $sTrR.='</div>';    
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
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

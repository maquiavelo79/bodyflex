<?php
session_start();
include("../model/conection.php");

    $like='';
    $unLike='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $id=$_REQUEST['id'];
    $se=$_REQUEST['se'];
    
    if(!isset($_REQUEST['email'])){
        $ma='';
    }
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_WPRO_CONSULTA_VOTACION_SERVICIO(:id, :se, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,30);
            $stmt->bindParam(':se', $se, PDO::PARAM_STR,30);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){           
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  
                    $like = $r[0];
                    $unLike = $r[1];
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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_CONSULTA_VOTACION_SERVICIO';
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
        $strXml.='<LIKE>';
            $strXml.=$like;
        $strXml.='</LIKE>';
        $strXml.='<UNLIKE>';
            $strXml.=$unLike;
        $strXml.='</UNLIKE>';
    $strXml.='</SALIDA>';
    echo $strXml;

     

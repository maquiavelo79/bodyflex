<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $rut=$_REQUEST['rutPro'];
    $id=$_REQUEST['id'];
    $li=$_REQUEST['like'];
    $ul=$_REQUEST['unlike'];
    $email=$_REQUEST['email'];
    $se=$_REQUEST['se'];
    sleep(1);    
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_WPRO_AGREGA_VOTACION_PROFESIONAL_PRODUCTO(:rut, :id, :li, :ul, :email, :se, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR,20);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,20);
            $stmt->bindParam(':li', $li, PDO::PARAM_INT);
            $stmt->bindParam(':ul', $ul, PDO::PARAM_INT);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR,100);
            $stmt->bindParam(':se', $se, PDO::PARAM_STR,50);
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

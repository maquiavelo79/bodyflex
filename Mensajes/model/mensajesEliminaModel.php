<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    sleep(1);
    
    $id=$_REQUEST['id']; //id de mensaje
  
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_PRO_MENSAJE_PROFESIONAL_ELIMINA(:id, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):       
                    $sTrR=$r[0];
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
            $strXml.=$sTrR ;
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

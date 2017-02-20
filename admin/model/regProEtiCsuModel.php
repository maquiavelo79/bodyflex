<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    
    $codErr=0;
    $estado = '';
    $rut = '';
    $nombre = '';
    $marca = '';
    
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $id=$_REQUEST['id']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_CSU_PRO_A_ETI(:id,@codErr,@estado,@nombre,@marca);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,20);
            $stmt->execute();
            $stmt->closeCursor();
            $output = $conn->query("SELECT @codErr,@estado,@nombre,@marca")->fetch(PDO::FETCH_ASSOC);
            $codErr = $output['@codErr'];
            $estado = $output['@estado'];
            $nombre = $output['@nombre'];
            $marca = $output['@marca'];

            switch($codErr){
                case 99:
                    $desErr='ERROR EN PROCEDIMEINTO';
                    break;
                case 98:
                    $desErr='PRODUCTO NO REGISTRADO';
                    break;
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
            $strXml.='<ESTADO>';
                $strXml.=$estado;
            $strXml.='</ESTADO>';
            $strXml.='<NOMBRE>';
                $strXml.=$nombre;
            $strXml.='</NOMBRE>';
            $strXml.='<MARCA>';
                $strXml.=$marca;
            $strXml.='</MARCA>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
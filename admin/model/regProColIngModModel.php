<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    $sId=0;
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $codCol=$_REQUEST['codCol'];
    $color=$_REQUEST['color'];
    $back=$_REQUEST['back']; 
    $proId=$_REQUEST['proId']; 
        
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_ING_COLOR_PRO(:codCol, :color, :back, :proId, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':codCol', $codCol, PDO::PARAM_STR, 10);
            $stmt->bindParam(':color', $color, PDO::PARAM_STR, 10);
            $stmt->bindParam(':back', $back, PDO::PARAM_STR, 10);
            $stmt->bindParam(':proId', $proId, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $sId=$r[0];
                    $sTrR.=$r[1];
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
                    case 97:
                        $desErr='LA MEDIDA YA SE ENCUENTRA ASOCIADA AL PRODUCTO';
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
        $strXml.='<IDENTIFICADOR>';
            $strXml.=$sId;
        $strXml.='</IDENTIFICADOR>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
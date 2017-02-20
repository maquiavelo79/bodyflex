<?php

include("../model/conection.php");

    $sTr='';
    $sTrR = '';    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';

    $idPro=$_REQUEST['idPro'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_PRO_GET_MED(:idPro, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':idPro', $idPro, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                $sTrR.='<select class="form-control">';
                $sTrR.='<option value="strawberries" selected>Talla</option>';
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $sTr.='<option value="'.$r[0].'">'.$r[1].'</option>';
                    $sTrR.=$sTr;
                    $sTr='';
                    $cont++;
                endwhile; 
                $sTrR.='</select>';
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
                        $sTrR.='<select class="form-control">';
                        $sTrR.='<option value="strawberries" selected>Talla</option>';
                            $sTr.='<option value="SM">Sin medidas</option>';
                            $sTrR.=$sTr;
                        $sTrR.='</select>';
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
        $strXml.='<TALLA>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</TALLA>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
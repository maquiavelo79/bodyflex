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

    $idPro=$_REQUEST['idPro'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_COL_PRO(:idPro, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':idPro', $idPro, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $sTrR.='<ul class="swatches Color swatches-rounded">';
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    if($cont==0){
                        $sTr.='<span class="selected-color">';
                            $sTr.='<strong>Color </strong> ';
                            $sTr.='<span class="color-value">'.$r[0].'</span>';
                        $sTr.='</span><br>';
                        $sTr.='<li class="selected"><a title="'.$r[0].'" style="background-color:'.$r[1].'"> </a></li>';
                    }else{
                        $sTr.='<li><a title="'.$r[0].'" style="background-color:'.$r[1].'"></a></li>';
                    }
                    $cont++;
                endwhile;
                $sTrR.=$sTr;
                $sTrR.='</ul>';
                 
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
                        $sTrR='';
                        $sTrR.='<ul class="swatches Color swatches-rounded">';    
                            $sTrR.='<span class="selected-color">';
                                $sTrR.='<strong>Color </strong>';
                                $sTrR.='<span class="color-value">SIN COLOR ASOCIADO</span>';
                            $sTrR.='</span><br>';
                            $sTrR.='<li class="selected"><a title="SC" style="background-color: white;"> </a></li>';
                        $sTrR.='</ul>';
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
        $strXml.='<DATO>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATO>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
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

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_SLD_CSU_T1(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                    
                    $sId=$r[0];
                    $sTi=$r[1];
                    $sTe=$r[2];
                    $sGD=str_replace('FILEID', $r[3], $r[5]);
                    $sURL=$r[4];
                    $sIdCo=$r[6];
                    
                    //ESTE SLIDER SIEMPRE SERÁ UNA COLECCIÓN
                        $sTr.='<div class="box-slider-content" id="'.$sIdCo.'" tipo="COLECCION">'; //url="'.$sURL.'"
                            $sTr.='<div class="box-text">';
                                $sTr.='<h1>'.$sTi.'</h1>';
                                $sTr.='<p>'.$sTe.'</p>';
                                $sTr.='<a id="'.$sIdCo.'" tipo="COLECCION" class="btn btn-stroke-light">IR</a>'; //url="'.$sURL.'"
                            $sTr.='</div>';
                            $sTr.='<div class="box-content-overly"><!-- Delete this div if you dont want overly effect --></div>';
                            $sTr.='<a class="box-img">';
                                $sTr.='<img src="'.$sGD.'" alt="img">';
                            $sTr.='</a>';
                        $sTr.='</div>';
                    
                    $sTrR.=$sTr;

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
                    case 97:
                        $desErr='NO EXISTE VALOR EN TABLA DE PARAMETROS';
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

    
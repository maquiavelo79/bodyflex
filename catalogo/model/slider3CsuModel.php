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

            $sql="CALL SP_CAT_SLD_CSU_T3(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                    
                    $pId=$r[0];
                    $pTi=$r[1];   
                    $pGD=str_replace('FILEID', $r[2], $r[4]);
                    $pURL=$r[3];  
                    $pIdCo=$r[5]; 
                
                    $sTr.='<div class="swiper-slide slide-2x">';
                        $sTr.='<div class="box-slider-content" id="'.$pIdCo.'" tipo="COLECCION">'; //url="'.$pURL.'"
                            $sTr.='<div class="box-text bottom-align">';
                                $sTr.='<h1>'.$pTi.'</h1>';
                                $sTr.='<a class="btn btn-stroke-light">IR</a>';
                            $sTr.='</div>';
                            $sTr.='<a class="box-img"><img src="'.$pGD.'" alt="img"></a>'; //href="#"
                            $sTr.='<div class="box-content-overly"><a class="box-blank-url"></a></div>'; //href="#"
                        $sTr.='</div>';
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

    
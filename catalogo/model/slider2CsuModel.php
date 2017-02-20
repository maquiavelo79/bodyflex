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

            $sql="CALL SP_CAT_SLD_CSU_T2(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                
                    $pId=$r[0];
                    $pTi=$r[1];
                    $pDe=$r[2];
                    $pPr=$r[3];      
                    $pURL1=$r[6];
                    $pURL2=$r[7];        
                    $pGD1=str_replace('FILEID', $r[4], $r[10]);
                    $pGD2=str_replace('FILEID', $r[5], $r[10]);
                    
                    $pIdCo=$r[8];
                    $pIdPo=$r[9];

                    
                    $sTr.='<div class="swiper-slide slide-2x">';
                        $sTr.='<div class="slider-box-top">';
                            $sTr.='<div class="box-slider-content" id="'.$pIdCo.'" tipo="COLECCION">'; //url="'.$pURL1.'"
                                $sTr.='<div class="box-text-table">';
                                    $sTr.='<div class="box-text-cell">';
                                        $sTr.='<h1 class="bolder-style light"><a>'.$pTi.'</a></h1>'; //href="#"
                                        $sTr.='<span class="bolder-sub"><a>'.$pDe.'</a> </span>'; //href="#"
                                    $sTr.='</div>';
                                $sTr.='</div>';
                                $sTr.='<a class="box-img"><img src="'.$pGD1.'" alt="img"></a>';
                            $sTr.='</div>';
                        $sTr.='</div>';
                        
                        $sTr.='<div class="slider-box-bottom">';
                            $sTr.='<div class="box-slider-content" id="'.$pIdPo.'" tipo="PRODUCTO">'; //url="'.$pURL2.'"
                            if($pPr!='$0'){
                                $sTr.='<div class="box-price-tag"><span class="price">'.$pPr.'</span></div>';
                            }else{
                                $sTr.='<div class="box-price-tag"></div>';
                            }    
                                $sTr.='<a class="box-img"><img src="'.$pGD2.'" alt="img"></a>';
                            $sTr.='</div>';
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

    
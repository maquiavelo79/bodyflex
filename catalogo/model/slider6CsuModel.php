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

            $sql="CALL SP_CAT_SLD_CSU_T6(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                    
                    $pId=$r[0];
                    $pGD1=str_replace('FILEID', $r[1], $r[13]);
                    $pGD2=str_replace('FILEID', $r[2], $r[13]);
                    $pGD3=str_replace('FILEID', $r[3], $r[13]);
                    
                    $pP1=$r[4];
                    $pP2=$r[5];
                    $pP3=$r[6];
                    
                    $pB1=$r[7];
                    $pB2=$r[8];
                    $pB3=$r[9];
                    
                    $pURL1=$r[10];
                    $pURL2=$r[11];
                    $pURL3=$r[12];
                    
                    $pIdPo1=$r[14];
                    $pIdPo2=$r[15];
                    $pIdPo3=$r[16];
                    
                    $sTr.='<div class="swiper-slide slide-2x">';
                        $sTr.='<div class="slider-box-top">';
                            $sTr.='<div class="box-slider-content" id="'.$pIdPo1.'" tipo="PRODUCTO">';
                                $sTr.='<div class="box-content-overly box-content-overly-white">';
                                    $sTr.='<div class="box-text-table">';
                                    if($pP1!='$0'){
                                        $sTr.='<div class="box-text-cell"><span class="price dealprice">'.$pP1.'</span>';
                                    }else{
                                        $sTr.='<div class="box-text-cell"><span class="price dealprice"></span>';
                                    }    
                                            $sTr.='<a class="btn btn-stroke-dark">'.$pB1.'</a>';
                                        $sTr.='</div>';
                                    $sTr.='</div>';
                                $sTr.='</div>';
                                $sTr.='<a href="#" class="box-img"><img src="'.$pGD1.'" alt="img"></a>';
                            $sTr.='</div>';
                        $sTr.='</div>';
                        $sTr.='<div class="slider-box-bottom">';
                            $sTr.='<div class="box-4in c">';
                                $sTr.='<div class="box-slider-content" id="'.$pIdPo2.'" tipo="PRODUCTO">';
                                    $sTr.='<a class="box-img">'; 
                                        $sTr.='<img src="'.$pGD2.'" alt="img">';
                                    $sTr.='</a>';
                                    $sTr.='<div class="box-content-overly box-content-overly-white">';
                                        $sTr.='<div class="box-text-table">';
                                        if($pP2!='$0'){
                                            $sTr.='<div class="box-text-cell"><span class="price">'.$pP2.'</span>';
                                        }else{
                                            $sTr.='<div class="box-text-cell"><span class="price"></span>';
                                        }    
                                                $sTr.='<a class="btn btn-stroke-dark">'.$pB2.'</a>';
                                            $sTr.='</div>';
                                        $sTr.='</div>';
                                    $sTr.='</div>';
                                $sTr.='</div>';
                            $sTr.='</div>';
                            $sTr.='<div class="box-4in d">';
                                $sTr.='<div class="box-slider-content" id="'.$pIdPo3.'" tipo="PRODUCTO"><a class="box-img"> ';
                                    $sTr.='<img src="'.$pGD3.'" alt="img"></a>';
                                    $sTr.='<div class="box-content-overly box-content-overly-white">';
                                        $sTr.='<div class="box-text-table">';
                                        if($pP3!='$0'){
                                            $sTr.='<div class="box-text-cell"><span class="price">'.$pP3.'</span> ';
                                        }else{
                                            $sTr.='<div class="box-text-cell"><span class="price"></span> ';
                                        }    
                                                $sTr.='<a class="btn btn-stroke-dark">'.$pB3.'</a>';
                                            $sTr.='</div>';
                                        $sTr.='</div>';
                                    $sTr.='</div>';
                                $sTr.='</div>';
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

    
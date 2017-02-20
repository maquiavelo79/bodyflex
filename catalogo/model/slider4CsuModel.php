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

            $sql="CALL SP_CAT_SLD_CSU_T4(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                    
                    $pId=$r[0];
                    $pGD1=str_replace('FILEID', $r[1], $r[11]);
                    $pGD2=str_replace('FILEID', $r[2], $r[11]);
                    $pGD3=str_replace('FILEID', $r[3], $r[11]);
                    $pGD4=str_replace('FILEID', $r[4], $r[11]);
                    $pBtn1=$r[5];
                    $pBtn2=$r[6];
                    $pURL1=$r[7];
                    $pURL2=$r[8];
                    $pURL3=$r[9];
                    $pURL4=$r[10];
                    
                    $pIdP1=$r[12];
                    $pIdP2=$r[13];
                    $pIdP3=$r[14];
                    $pIdP4=$r[15];
                
                    $sTr.='<div class="swiper-slide slide-4x">';
                        $sTr.='<div class="box-4in c">';
                            $sTr.='<div class="box-slider-content" id="'.$pIdP1.'" tipo="PRODUCTO"><a class="box-img">'; //url="'.$pURL1.'"
                                $sTr.='<img src="'.$pGD1.'" alt="img"></a>';
                                $sTr.='<div class="box-content-overly box-content-overly-white">';
                                    $sTr.='<div class="box-text-table">';
                                        $sTr.='<div class="box-text-cell"><a class="btn btn-stroke-dark pro">'.$pBtn1.'</a></div>';
                                    $sTr.='</div>';
                                $sTr.='</div>';
                            $sTr.='</div>';
                        $sTr.='</div>';
                        $sTr.='<div class="box-4in c">';
                            $sTr.='<div class="box-slider-content" id="'.$pIdP2.'" tipo="PRODUCTO"><a class="box-img">'; 
                                $sTr.='<img src="'.$pGD2.'" alt="img"></a>';
                                $sTr.='<div class="box-content-overly box-content-overly-white">';
                                    $sTr.='<div class="box-text-table">';
                                        $sTr.='<div class="box-text-cell"><a class="btn btn-stroke-dark pro">'.$pBtn2.'</a></div>';
                                    $sTr.='</div>';
                                $sTr.='</div>';
                            $sTr.='</div>';
                        $sTr.='</div>';
                        $sTr.='<div class="box-4in c">';
                            $sTr.='<div class="box-slider-content" id="'.$pIdP3.'" tipo="PRODUCTO"><a class="box-img">'; 
                                $sTr.='<img src="'.$pGD3.'" alt="img"></a>';
                                $sTr.='<div class="box-content-overly box-content-overly-white">';
                                    $sTr.='<div class="box-text-table">';
                                        $sTr.='<div class="box-text-cell"><a class="btn btn-stroke-dark pro">'.$pBtn1.'</a></div>';
                                    $sTr.='</div>';
                                $sTr.='</div>';
                            $sTr.='</div>';
                        $sTr.='</div>';
                        $sTr.='<div class="box-4in d">';
                            $sTr.='<div class="box-slider-content" id="'.$pIdP4.'" tipo="PRODUCTO">';
                                $sTr.='<a class="box-img">';
                                    $sTr.='<img src="'.$pGD4.'" alt="img">';
                                $sTr.='</a>';    
                                $sTr.='<div class="box-content-overly box-content-overly-white">';
                                    $sTr.='<div class="box-text-table">';
                                        $sTr.='<div class="box-text-cell"><a class="btn btn-stroke-dark pro">'.$pBtn2.'</a></div>';
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

    
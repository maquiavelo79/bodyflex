<?php

include("../model/conection.php");

    $sTrA = '';
    $sTrB = '';
    $sTrC = '';
    
    $sTrRA = '';
    $sTrRB = '';
    $sTrRC = '';
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';

    $idPro=$_REQUEST['idPro'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_PRO_GET_IMG(:idPro, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':idPro', $idPro, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                
                $sTrA.='<div class="productMainImage hasWhiteImg">';
                    $sTrA.='<ul class="bxslider product-view-slides product-view-slides-h ">';
                        
                $sTrRB.='<div class="product-view-thumb-wrapper has-carousel-v hasWhiteImg">';
                    $sTrRB.='<div class="product-view-thumb-nav prev"></div>';
                        $sTrRB.='<ul id="bx-pager" class="product-view-thumb ">';    
                    
                        while ($r = $stmt->fetch(PDO::FETCH_NUM)):

                            $sGD=str_replace('FILEID', $r[0], $r[1]);                   

                            $sTrA.='<li>';
                                $sTrA.='<img src="'.$sGD.'" alt="Image Title"/> ';
                            $sTrA.='</li>';
                            
                            $sTrB.='<li>';
                                $sTrB.='<a class="thumb-item-link" data-slide-index="'.$cont.'" href="">';
                                    $sTrB.='<img src="'.$sGD.'" alt="img"/>';
                                $sTrB.='</a>';
                            $sTrB.='</li>';
                            
                            if($r[2]==1){
                                $sGDP=str_replace('FILEID', $r[0], $r[1]); 
                                $sTrC.='<div class="product-story-a-img wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.25">';
                                    $sTrC.='<img alt="Image Title" src="'.$sGDP.'" class="img-responsive ">';
                                $sTrC.='</div>';
                            }
                            
                            $cont+=1;

                            $sTrRA.=$sTrA;
                            $sTrRB.=$sTrB;
                            $sTrRC.=$sTrC;

                            $sTrA='';
                            $sTrB='';
                            $sTrC='';

                        endwhile; 
                 
                    $sTrRA.='</ul>';
                $sTrRA.='</div>';
                
                       $sTrRB.='</ul>';
                    $sTrRB.='<div class="product-view-thumb-nav next"></div>';
                $sTrRB.='</div>';
                
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
        $strXml.='<SECCION1>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrRA;
            $strXml.=']]>';
        $strXml.='</SECCION1>';
        $strXml.='<SECCION2>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrRB;
            $strXml.=']]>';
        $strXml.='</SECCION2>';
        $strXml.='<SECCION3>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrRC;
            $strXml.=']]>';
        $strXml.='</SECCION3>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
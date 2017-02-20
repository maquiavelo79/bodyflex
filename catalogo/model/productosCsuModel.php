<?php

include("../model/conection.php");

$ultimo=$_REQUEST['ultimo'];

//sleep(5);

    $sTr = '';
    $sTrR = '';
    $strHead='';
        
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $ppvpAux='';
    $pvapAux='';
    $sw=0;
    $strOldPrice='';

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_PRO(:ultimo, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                    
                    $pId=$r[0];
                    $pGD=$r[1];
                    $pNo=$r[2];
                    $pDe=$r[3];
                    $pPv=$r[4];
                    $pEt=$r[5];
                    $pTa=$r[6];
                    $pMa=$r[8];
                  
                    $ppvpAux=str_replace('.','',str_replace('$','',$r[4])); //precio venta profesional
                    $pvapAux=str_replace('.','',str_replace('$','',$r[7])); //precio venta aterior profesional
                    
                    if($pvapAux>0){
                        if($ppvpAux<$pvapAux){
                            $sw=1;
                        }else{
                            $sw=0;
                        }
                    }else{
                        $sw=0;
                    } 
                    
                    $strOldPrice='<span class="old-price">'.$r[7].'</span>';
                
                    $item='itemP_'.$pId;
                    $producto='proP_'.$pId;
                    //$divIcoP='divIcoP_'.$pId;
                    $icoPP='icoPP_'.$pId;
                                        
                    $sTr.='<div id="'.$item.'" class="item col-lg-3 col-md-3 col-sm-4 col-xs-6">';
                        $sTr.='<div id="'.$producto.'" class="product altura">';
                            $sTr.='<a class="add-fav tooltipHere" data-toggle="tooltip" data-original-title="Add to Wishlist" data-placement="left">';
                                $sTr.='<i id="'.$icoPP.'" class="glyphicon glyphicon-heart"></i>';
                            $sTr.='</a>';
                            $sTr.='<div class="image">';
                                $sTr.='<div class="quickview">';
                                $sTr.='<a id_quick="'.$pId.'" onclick="modalFunctionProducto('.$pId.');" data-toggle="modal" class="btn btn-xs btn-quickview" href="../ajax/product.html" data-target="#productSetailsModalAjax">Quick View</a>';
                                $sTr.='</div>';
                                $sTr.='<a id_des1="'.$pId.'" class="description1">'; //href="../product-details.html"
                                    $sTr.='<img src="'.$pGD.'" alt="img"  class="img-responsive">';
                                $sTr.='</a>';
                                $sTr.='<div class="promotion">';
                                    if($pEt!='SIN ETIQUETA'){
                                        $sTr.=$pEt; 
                                    }    
                                $sTr.='</div>';
                            $sTr.='</div>';
                            $sTr.='<div id_des2="'.$pId.'" class="description2">';
                                $sTr.='<h3 style="font-size: medium; height: 30px; color: black; font-weight: bold;"><a>'.$pMa.'</a></h3>';
                                $sTr.='<p>'.$pNo.'</p>';
                                $sTr.='<span class="size">'.$pTa.'</span>';
                            $sTr.='</div>';
                            $sTr.='<div class="price">';
                                if($sw==0){
                                    $sTr.='<span>'.$pPv.'</span>';
                                }else{
                                    $sTr.='<span>'.$pPv.'</span>  ';
                                    $sTr.=$strOldPrice;
                                }
                            $sTr.='</div>';
                            $sTr.='<div class="action-control">';
                                $sTr.='<a class="btn btn-primary">'; 
                                    $sTr.='<span style="color: #FFCC00; font-weight: bolder;" class="add2cart">';
                                        $sTr.='<i class="glyphicon glyphicon-shopping-cart"></i> Agregar </span>'; 
                                $sTr.='</a>';
                            $sTr.='</div>';
                           
                        $sTr.='</div>';
                        
                    $sTr.='</div>';
                    
                    $sTrR.=$sTr;
                    $sTr='';

                    $ultimo=$pId;
                    
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
        $strXml.='<ULTIMO>';
            $strXml.=$ultimo;
        $strXml.='</ULTIMO>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
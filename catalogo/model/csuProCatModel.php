<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    $paginacion='';
    $cont=0;

    $rangos=$_REQUEST['rangos'];
    $marcas=$_REQUEST['marcas'];
    $colores=$_REQUEST['colores'];
    $etiquetas=$_REQUEST['etiquetas'];
    $coleccion=$_REQUEST['coleccion'];
    $categoria1=$_REQUEST['categoria1'];
    $categoria2=$_REQUEST['categoria2'];
    $categoria3=$_REQUEST['categoria3'];
    $proOrden=$_REQUEST['proOrden'];
        
    $ultimo=$_REQUEST['ultimo']; // ultimo numero de la paginación
    $pa=$_REQUEST['pa']; //Paginación, indica el numero de paginación que el usuario presionó 
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_PRO_COL(:ultimo, :rangos, :marcas, :colores, :etiquetas, :coleccion, :categoria1, :categoria2, :categoria3, :proOrden, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR,10);
            $stmt->bindParam(':rangos', $rangos, PDO::PARAM_STR,10);
            $stmt->bindParam(':marcas', $marcas, PDO::PARAM_STR,1000);
            $stmt->bindParam(':colores', $colores, PDO::PARAM_STR,1000);
            $stmt->bindParam(':etiquetas', $etiquetas, PDO::PARAM_STR,1000);
            $stmt->bindParam(':coleccion', $coleccion, PDO::PARAM_STR,10);
            $stmt->bindParam(':categoria1', $categoria1, PDO::PARAM_STR,10);
            $stmt->bindParam(':categoria2', $categoria2, PDO::PARAM_STR,10);
            $stmt->bindParam(':categoria3', $categoria3, PDO::PARAM_STR,10);
            $stmt->bindParam(':proOrden', $proOrden, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                    
                    $pId=$r[0]; //ID PRODUCTO
                    $pGD=$r[1]; //URL GOOGLE DRIVE
                    $pNo=$r[2]; //NOMBRE
                    $pDe=$r[3]; //DESCRIPCIÓN
                    $pPv=$r[4]; //PRECIO VENTA PROFESIONAL
                    $pEt=$r[5]; //ETIQUETA
                    $pTa=$r[6]; //TALLAS
                    $pPa=$r[7]; //PRECIO VENTA ANTERIOR
                    $pMa=$r[8]; //MARCA PRODUCTO
                  
                    $ppvpAux=str_replace('.','',str_replace('$','',$pPv)); //precio venta profesional
                    $pvapAux=str_replace('.','',str_replace('$','',$pPa)); //precio venta aterior profesional
                    
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
                
                    $item='item_'.$pId;
                    $producto='pro_'.$pId;
                                        
                    $sTr.='<div id="'.$item.'" class="item col-sm-4 col-lg-4 col-md-4 col-xs-6">';
                        $sTr.='<div id="'.$producto.'" class="product">';
                            $sTr.='<a data-placement="left" data-original-title="Add to Wishlist" data-toggle="tooltip" class="add-fav tooltipHere">';
                                $sTr.='<i class="glyphicon glyphicon-heart"></i>';
                            $sTr.='</a>';
                            $sTr.='<div class="image">';
                                $sTr.='<div class="quickview">';
                                $sTr.='<a id_quick="'.$pId.'" onclick="modalFunctionCollection('.$pId.');" class="btn btn-xs btn-quickview">Quick View</a>';
                                $sTr.='</div>';
                                $sTr.='<a id_des1="'.$pId.'" class="description1">';
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
                    $cant=$r[12];
                    $pag=$r[13];
                    $paginaciones=$r[14];
                    
                endwhile;
                  
                $ultimos=explode('|',$paginaciones);    
                $dimension=sizeof($ultimos);
                $ultimo=$ultimos[$pa-1];
                    
                $paginacion.='<div class="pagination pull-left no-margin-top">';
                    $paginacion.='<ul class="pagination no-margin-top">';
                        for($i=1;$i<=$pag;$i++){
                            $j=$i-1;
                            if($pa==$i){
                                $paginacion.='<li class="active"><a>' . $i . '</a></li>';
                            }else{
                                $paginacion.='<li style="cursor:pointer;"><a onclick="consultarProductosCatalogo(' . $ultimos[$j] . ',' . $i . ')">' . $i . '</a></li>';
                            }
                                
                        }
                    $paginacion.='</ul>';
                $paginacion.='</div>';
                
                $paginacion.='<div class="pull-right pull-right col-sm-4 col-xs-12 no-padding text-right text-left-xs">';
                    $paginacion.='<p>Mostrando '. $cont.' productos de un total de '.$cant.'</p>';
                $paginacion.='</div>';
                
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
        $strXml.='<ULTIMO>';
            $strXml.=$ultimo;
        $strXml.='</ULTIMO>';
        $strXml.='<PAGINACION>';
                $strXml.= '<![CDATA[';
                    $strXml.=$paginacion;
                $strXml.=']]>';    
        $strXml.='</PAGINACION>';
        $strXml.='<REGISTROS>';    
            $strXml.=$cont;
        $strXml.='</REGISTROS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
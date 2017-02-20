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

    $codPro=$_REQUEST['idPro'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_PRO_REL(:codPro, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':codPro', $codPro, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                    
                    $sId=$r[0];
                    $snNo=$r[1];
                    $sPvp=$r[2];
                    $sGD1=str_replace('FILEID', $r[3], $r[7]);
                    $sGD2=str_replace('FILEID', $r[4], $r[7]);
                    $sCol=$r[5];
                    $sIma=$r[6];
                    $sUrlPro=$r[9];
                    $colores=explode("|", $r[8]);
                    
                    if($sIma==1){
                        $sGD2=$sGD1;
                    }
                    
                    if($sCol==1){
                        $colDes='color';
                    }else{
                        $colDes='colores';
                    }
                    $colDes=$sCol.' '.$colDes;
                    
                    $sTr.='<div id="'.$sId.'" class="product-item item-flat col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12">';
                        $sTr.='<div class="product product-item-inner">';
                            $sTr.='<a data-placement="left" data-original-title="Agregar a lista de deseos" data-toggle="tooltip" ';
                               $sTr.='class="add-fav wisthlist-flat tooltipHere">';
                               $sTr.='<i class="glyphicon glyphicon-heart"></i>';
                            $sTr.='</a>';
                            $sTr.='<div class="imageHover hasCart" id="'.$sId.'" url="'.$sUrlPro.'">';
                                $sTr.='<a>';
                                    $sTr.='<img class="img-responsive primaryImage" alt="img" src="'.$sGD1.'">';
                                    $sTr.='<img class="img-responsive secondaryImage" alt="img" src="'.$sGD2.'">';
                                $sTr.='</a>';
                                $sTr.='<div class="product-btn-box">';
                                    $sTr.='<a class="btn btn-product-flat btn-primary">';
                                        $sTr.='<span class="add2cart"><i class="glyphicon glyphicon-shopping-cart"></i> Agregar al Carro </span>';
                                    $sTr.='</a>';
                                $sTr.='</div>';
                            $sTr.='</div>';
                            $sTr.='<div class="prod-details">';
                                $sTr.='<p class="title">';
                                    $sTr.='<a href="../product-details-style5-4.1-with-zoom.html" title="">'.$snNo.'</a>';
                                $sTr.='</p>';
                                $sTr.='<p class="product-flat-info">';
                                    $sTr.='<span class="product-curreent-price">';
                                    $sTr.=$sPvp;
                                    $sTr.='</span>';
                                    $sTr.='&nbsp;|&nbsp;';
                                    $sTr.='<span class="product-model">'.$colDes.'</span>';
                                $sTr.='</p>';
                                $sTr.='<div id="divColores" class="product-color">';
                                    for($t=0; $t<$sCol; $t++){
                                        $sTr.='<a style="background-color:'. $colores[$t] .'"></a>';
                                    }
                                $sTr.='</div>';
                            $sTr.='</div>';
                        $sTr.='</div>';
                    $sTr.='</div>';
                    $sTrR.=$sTr;
                    $sTr='';
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
    $strXml.='</SALIDA>';
    echo $strXml;

    
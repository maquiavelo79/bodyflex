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
        
    //INICIALIZACIÓN MENU DE LINKS
    $itemMenu='';
    $colMenu='';
    $colMenu.='<ul class="col-lg-3  col-sm-3 col-md-3 unstyled noMarginLeft newCollectionUl">';
        $colMenu.='<li class="no-border">';
            $colMenu.='<p class="promo-1"><strong> COLECCIONES </strong></p>';
        $colMenu.='</li>';
        $colMenu.='#MENU_LINKS#';
    $colMenu.='</ul>';
        
    $imgMenu='';
        
    $ppvpAux='';
    $pvapAux='';
    $sw=0;
    $strOldPrice='';

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_COL_POR(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                    
                    $coId='col_'.$r[0];
                    $coURL=$r[1];
                    $coNOM=$r[2];
                    $coURL4=$r[3];
                    $coEnMenu=$r[4];
                    $coLimitCol=$r[5];
                    
                    //CREA MENU DE LINKS
                    $itemMenu.='<li class="itemMenu" id="'.$coId.'"><a> '. $coNOM .' </a></li>';
                    
                    //CREA IMAGENES EN MENÚ
                    if($coEnMenu==1){
                        $imgMenu.='<ul id="'.$coId.'" class="col-lg-3  col-sm-3 col-md-3  col-xs-4 itemMenu">';
                            $imgMenu.='<li>';
                                $imgMenu.='<a class="newProductMenuBlock" href="'.'#URLCAT#'.'">'; 
                                    $imgMenu.='<img class="img-responsive" src="'.$coURL4.'" alt="product">'; 
                                    $imgMenu.='<span class="ProductMenuCaption">'; 
                                        $imgMenu.='<i class="fa fa-caret-right"></i> ' . $coNOM; 
                                    $imgMenu.='</span>';
                                $imgMenu.='</a>';
                            $imgMenu.='</li>';
                        $imgMenu.='</ul>';
                    }
                    
                    //PARA N° DE COLECCIONES, CATALOGO PRINCIPAL INFERIOR
                    if($coLimitCol<=$cont){
                        $sTr.='<div class="col-md-3 col-sm-3 col-xs-6">';
                            $sTr.='<a>';
                                $sTr.='<img id="'.$coId.'" src="'.$coURL.'" class="img-responsive" alt="img">';
                            $sTr.='</a>';
                        $sTr.='</div>';
                    
                        $sTrR.=$sTr;
                        $sTr='';
                    }    

                endwhile; 
                 
                $colMenu = str_replace("#MENU_LINKS#", $itemMenu, $colMenu);
                
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
                        $desErr='COLECCIONES INEXISTENTES O SIN PRODUCTOS';
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
        $strXml.='<MENU_LINKS>';
            $strXml.= '<![CDATA[';
                $strXml.=$colMenu;
            $strXml.=']]>';
        $strXml.='</MENU_LINKS>';
        $strXml.='<IMG_EN_MENU>';
            $strXml.= '<![CDATA[';
                $strXml.=$imgMenu;
            $strXml.=']]>';
        $strXml.='</IMG_EN_MENU>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
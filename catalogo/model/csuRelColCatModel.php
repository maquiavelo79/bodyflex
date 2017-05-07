<?php

include("../model/conection.php");

    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strXml='';
    $cont_coleccion=1;
        
    //INICIALIZACIÓN MENU DE LINKS
    $luLis='';                
    $luImg='';    
    
    $head1='<h3 class="promo-1 no-margin hidden-xs">#HDR1#</h3>';
    $head2='<h3 class="promo-1sub hidden-xs">#HDR2#</h3>';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_REL_COL_CAT(@codErr, @hdr1, @hdr2);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                    
                    $coId='col_'.$r[1];
                    $coNom=$r[2];
                    $coCat1=$r[3];
                    $coCat2=$r[4];
                    $coCat2Nom=$r[5];
                    $coCat3=$r[6];
                    
                    if($cont_coleccion==1){
 
                        $luLis.='<li class="megamenu-content ProductDetailsList">';
                            $luLis.='<ul class="col-lg-2  col-sm-2 col-md-2  unstyled">';
                                $luLis.='<li cont_coleccion="'.$cont_coleccion.'" class="no-border">';
                                    $luLis.='<p><strong> '.$coNom.' </strong></p>';
                                $luLis.='</li>';
                            $luLis.='<li cont="'.$cont.'" class="itemMenu" id="'.$coId.'" idcat1="'.$coCat1.'" idcat2="'.$coCat2.'" idcat3="'.$coCat3.'"><a> '.$coCat2Nom.' </a></li>';
                        $cont_coleccion=$cont_coleccion+1;
                        
                    }elseif(($cont_coleccion%7)==0){  
                        
                        $cont_coleccion=1;
                        $luLis.='</ul></li>'; //cerramos anterior
                        
                    }else{
                        
                        if($coId!=$coIdAux){
                            $luLis.='</ul>'; //cerramos anterior
                                $luLis.='<ul class="col-lg-2  col-sm-2 col-md-2 unstyled">';
                                    $luLis.='<li cont_coleccion="'.$cont_coleccion.'" class="no-border">';
                                        $luLis.='<p><strong> '.$coNom.' </strong></p>';
                                    $luLis.='</li>';
                                    $luLis.='<li cont="'.$cont.'" class="itemMenu" id="'.$coId.'" idcat1="'.$coCat1.'" idcat2="'.$coCat2.'" idcat3="'.$coCat3.'"><a> '.$coCat2Nom.' </a></li>';
                            $cont_coleccion=$cont_coleccion+1;                       
                        }else{
                            $luLis.='<li cont="'.$cont.'" class="itemMenu" id="'.$coId.'" idcat1="'.$coCat1.'" idcat2="'.$coCat2.'" idcat3="'.$coCat3.'"><a> '.$coCat2Nom.' </a></li>';
                        }
                                             
                    }
                    
                    $coIdAux=$coId;
                    $coNomAux=$coNom;
                    $coCat1Aux=$coCat1;
                    $coCat2Aux=$coCat2;
                    $coCat2NomAux=$coCat2Nom;
                    $coCat3Aux=$coCat3;
                    
                endwhile; 
                
                $luLis.='</ul></li>'; //cerramos ultimo
                                                
                //Obtenemos Header 1 y 2 para menu de productos
                
                $stmt->closeCursor();
                $output = $conn->query("select @codErr, @hdr1, @hdr2")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $hdr1 = $output['@hdr1'];
                $hdr2 = $output['@hdr2'];
                
                $head1=str_replace("#HDR1#",$hdr1,$head1);
                $head2=str_replace("#HDR2#",$hdr2,$head2);
                
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
        $strXml.='<luList>';
            $strXml.= '<![CDATA[';
                $strXml.=$luLis;
            $strXml.=']]>';
        $strXml.='</luList>';
        $strXml.='<HEADER1>';
            $strXml.= '<![CDATA[';
                $strXml.=$head1;
            $strXml.=']]>';
        $strXml.='</HEADER1>';
        $strXml.='<HEADER2>';
            $strXml.= '<![CDATA[';
                $strXml.=$head2;
            $strXml.=']]>';
        $strXml.='</HEADER2>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
<?php

include("./conection.php");

    $rutPro=$_REQUEST['rutPro'];
    $prueba=$_REQUEST['prueba'];
   
    $itemActive='';
    $itemNoActive='';
    $cont=0;
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_WPRO_PERFIL_PROFESIONAL_GET_PRODUCTOS(:rutPro, :prueba, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
            $stmt->bindParam(':prueba', $prueba, PDO::PARAM_INT);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 

                    $cont+=1;
                    $pId=$r[0];
                    $pNom=$r[1];
                    $pDes=$r[2];                
                    $pPre=$r[3];
                    $pUrl=$r[4];
                    $pUrl = str_replace('FILEID', $pImg, $pUrl);

                    if($cont<=4){    
                        $itemActive.= '<div class="item active"><div class="row">';  
                            $itemActive.='<div class="col-md-3">';
                                $itemActive.='<div class="thumbnail">';
                                    $itemActive.='<img id="'.$pId.'" style="width: 300px; height: 200px;" src="'.$pUrl.'" alt="'.$pNom.'">';
                                    $itemActive.='<div class="caption">';
                                        $itemActive.='<h3>'.$pNom.'</h3>';
                                        $itemActive.='<p>'.$pDes.'</p>';
                                        $itemActive.='<p><a onClick="verProducto('.$pId.')" class="btn btn-primary" role="button">'.$pPre.'</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>';
                                    $itemActive.='</div>';
                                $itemActive.='</div>';
                            $itemActive.='</div>';
                        $itemActive.= '</div></div>';    
                        $cont = ($cont==4) ? 1: $cont;
                    }elseif((4/$cont)==1){

                        $itemNoActive.='<div class="item"><div class="row">';
                            $itemNoActive.='<p>'.$sTrR.'</p>';
                        $itemNoActive.='</div></div>';       

                        $sTrR ='<div class="col-md-3">';
                            $sTrR.='<div class="thumbnail">';
                                $sTrR.='<img id="'.$pId.'" style="width: 300px; height: 200px;" src="'.$pUrl.'" alt="'.$pNom.'">';
                                $sTrR.='<div class="caption">';
                                    $sTrR.='<h3>'.$pNom.'</h3>';
                                    $sTrR.='<p>'.$pDes.'</p>';
                                    $sTrR.='<p><a onClick="verProducto('.$pId.')" class="btn btn-primary" role="button">'.$pPre.'</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>';
                                $sTrR.='</div>';
                            $sTrR.='</div>';
                        $sTrR.='</div>';                        

                        $cont=1;
                    }else{
                        $sTrR.='<div class="col-md-3">';
                            $sTrR.='<div class="thumbnail">';
                                $sTrR.='<img id="'.$pId.'" style="width: 300px; height: 200px;" src="'.$pUrl.'" alt="'.$pNom.'">';
                                $sTrR.='<div class="caption">';
                                    $sTrR.='<h3>'.$pNom.'</h3>';
                                    $sTrR.='<p>'.$pDes.'</p>';
                                    $sTrR.='<p><a onClick="verProducto('.$pId.')" class="btn btn-primary" role="button">'.$pPre.'</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>';
                                $sTrR.='</div>';
                            $sTrR.='</div>';
                        $sTrR.='</div>';
                        $cont+=1;
                    }                           

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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_PERFIL_PROFESIONAL_GET_PRODUCTOS';
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
        $strXml.='<DATOS>';
            $strXml.= '<![CDATA[';
                $strXml.=$itemActive+$itemNoActive+$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

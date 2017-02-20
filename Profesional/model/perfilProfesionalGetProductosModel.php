<?php

include("./conection.php");

    $rutPro=$_REQUEST['rutPro'];
    $prueba=$_REQUEST['prueba'];
   
    $sw=0;
    $restantes='';
    $activos='';
    $itemActive='';
    $itemNoActive='';
    
    $cont=0;
    $c=0;
    
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

                    $c++;
                    $cont+=1;

                    $pId=$r[0];
                    $pNom=$r[1];
                    $pDes=$r[2];                
                    $pPre=$r[3];
                    $pUrl=$r[4];
                    $pImg=$r[5];
                    $pUrl = str_replace('FILEID', $pImg, $pUrl);

                    $pCat1=$r[6];
                    $pCat2=$r[7];
                    $pCat3=$r[8];
                    $pDesLar=$r[9];
                    $pCon=$r[10];
                    $pRut=$r[11];

                    if($cont<=4 && $sw==0){  

                        $itemActive.='<div style="cursor: pointer;" onclick="verDetalleProducto('. $pId .','. $pRut .')" class="col-md-3">';
                            $itemActive.='<div class="thumbnail" style="border-style: solid; border-color: black; box-shadow: 0 0 6px black; margin: 0px 0px 0px 0px;">';
                                $itemActive.='<img id="'.$pId.'" style="width: 300px; height: 200px; margin-top: 20px;" src="'.$pUrl.'" alt="'.$pNom.'">';
                                $itemActive.='<div class="caption">';
                                    $itemActive.='<h3>'.$pNom.'</h3>';
                                    $itemActive.='<p style="text-align: justify;">'.$pDes.'</p>';
                                    $itemActive.='<p><a onClick="verProducto('.$pId.')" class="btn btn-primary" role="button" style="font-size: 16px; font-weight: bold; font-family: Helvetica, Georgia, Arial, Garamond;">'.$pPre.'</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>';
                                $itemActive.='</div>';
                            $itemActive.='</div>';
                        $itemActive.='</div>';

                        if($cont==4){
                            $cont=0; $sw=1; 
                            $activos.= '<div class="item active"><div class="row">'; 
                                $activos.= $itemActive; 
                            $activos.= '</div></div>';
                            $itemActive='';
                        }

                    }else{

                        if(($cont%4)==0){

                            $itemNoActive.='<div class="item"><div class="row">';
                                $itemNoActive.='<div style="cursor: pointer;" onclick="verDetalleProducto('. $pId .','. $pRut .')" class="col-md-3">';
                                    $itemNoActive.='<div class="thumbnail" style="border-style: solid; border-color: black; box-shadow: 0 0 6px black; margin: 0px 0px 0px 0px;">';
                                        $itemNoActive.='<img id="'.$pId.'" style="width: 300px; height: 200px; margin-top: 20px;" src="'.$pUrl.'" alt="'.$pNom.'">';
                                        $itemNoActive.='<div class="caption">';
                                            $itemNoActive.='<h3>'.$pNom.'</h3>';
                                            $itemNoActive.='<p style="text-align: justify;">'.$pDes.'</p>';
                                            $itemNoActive.='<p><a onClick="verProducto('.$pId.')" class="btn btn-primary" role="button">'.$pPre.'</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>';
                                        $itemNoActive.='</div>';
                                    $itemNoActive.='</div>';
                                $itemNoActive.='</div>';   
                                $itemNoActive.=$sTrR;
                            $itemNoActive.='</div></div>';     
                            $sTrR='';
                            $cont=0;

                        }else{

                            $sTrR.='<div style="cursor: pointer;" onclick="verDetalleProducto('. $pId .','. $pRut .')" class="col-md-3">';
                                $sTrR.='<div class="thumbnail" style="border-style: solid; border-color: black; box-shadow: 0 0 6px black; margin: 0px 0px 0px 0px;">';
                                    $sTrR.='<img id="'.$pId.'" style="width: 300px; height: 200px; margin-top: 20px;" src="'.$pUrl.'" alt="'.$pNom.'">';
                                    $sTrR.='<div class="caption">';
                                        $sTrR.='<h3>'.$pNom.'</h3>';
                                        $sTrR.='<p style="text-align: justify;">'.$pDes.'</p>';
                                        $sTrR.='<p><a onClick="verProducto('.$pId.')" class="btn btn-primary" role="button">'.$pPre.'</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>';
                                    $sTrR.='</div>';
                                $sTrR.='</div>';
                            $sTrR.='</div>';   
                            
                        }
                    } 
                endwhile; 

                //RESTANTES
                if(strlen(trim($sTrR))>0){
                    $restantes.='<div class="item"><div class="row">';  
                        $restantes.=$sTrR;
                    $restantes.='</div></div>';   
                }

                //ACTIVOS INFERIORES A 4 PRODUCTOS
                if(strlen(trim($itemActive))>0){
                    $activos.= '<div class="item active"><div class="row">'; 
                        $activos.= $itemActive; 
                    $activos.= '</div></div>';
                    $itemActive='';
                }

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
                $strXml.=$activos.$itemNoActive.$restantes;
            $strXml.=']]>';
        $strXml.='</DATOS>';
        $strXml.='<CONTADOR>';
            $strXml.=$c;
        $strXml.='</CONTADOR>';
    $strXml.='</SALIDA>';
    echo $strXml;

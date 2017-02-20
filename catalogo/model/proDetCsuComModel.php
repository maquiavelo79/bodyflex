<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $strHead='';
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $ULTIMO=0;
    $strXml='';
    
    $opcion1='';
    $opcion2='';
    
    $codPro=$_REQUEST['idPro'];
    $ultimo=$_REQUEST['ultimo'];
    $orden=$_REQUEST['orden'];
        
    //Matriz puntos
    $pts[0]='0.333'; $pts[1]='0.666'; $pts[2]='1';
    $pts[3]='1.333'; $pts[4]='1.666'; $pts[5]='2';
    $pts[6]='2.333'; $pts[7]='2.666'; $pts[8]='3';
    $pts[9]='3.333'; $pts[10]='3.666'; $pts[11]='4';
    $pts[12]='4.333'; $pts[13]='4.666'; $pts[14]='5';
    
    $vacia='<span><i class="fa fa-star-o"></i></span>';
    $media='<span><i class="fa fa-star-half-full"></i></span>';
    $completa='<span><i class="fa fa-star"></i></span>';
    
    //echo $vacia . ' ' . $media . ' ' . $completa;
    //exit();
        
    //tramo1 -> [0-2]
        $opc0=$media . str_repeat($vacia, 4); 
        $opc1=$media . str_repeat($vacia, 4);  
        $opc2=$completa . str_repeat($vacia, 4); 
    //tramo2 -> [3-5]
        $opc3=$completa . $media . str_repeat($vacia, 3); 
        $opc4=$completa . $media . str_repeat($vacia, 3); 
        $opc5=str_repeat($completa,2) . str_repeat($vacia, 3); 
    //tramo3 -> [6-8]
        $opc6=str_repeat($completa,2) . $media . str_repeat($vacia, 2); 
        $opc7=str_repeat($completa,2) . $media . str_repeat($vacia, 2); 
        $opc8=str_repeat($completa,3) . str_repeat($vacia, 2);  
    //tramo4 -> [9-11]
        $opc9=str_repeat($completa,3) . $media . $vacia; 
        $opc10=str_repeat($completa,3) . $media . $vacia; 
        $opc11=str_repeat($completa,4) . $vacia; 
    //tramo5 -> [12-14]
        $opc12=str_repeat($completa,4) . $media; 
        $opc13=str_repeat($completa,4) . $media; 
        $opc14=str_repeat($completa,5); 
    
    //Matriz Cadena puntos
    $opc[0]=$opc0; $opc[1]=$opc1; $opc[2]=$opc2;
    $opc[3]=$opc3; $opc[4]=$opc4; $opc[5]=$opc5;
    $opc[6]=$opc6; $opc[7]=$opc7; $opc[8]=$opc8;
    $opc[9]=$opc9; $opc[10]=$opc10; $opc[11]=$opc11;
    $opc[12]=$opc12; $opc[13]=$opc13; $opc[14]=$opc14;
    
    sleep(2);
        
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_COM_PRO(:codPro, :ultimo, :orden, @codErr, @hayMas, @cant, @promedio);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':codPro', $codPro, PDO::PARAM_STR,10);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR,10);
            $stmt->bindParam(':orden', $orden, PDO::PARAM_INT);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    
                    $sGD=str_replace('FILEID', $r[6], $r[5]); 
                    $sTr.='<div id="'.$r[0].'" class="row review-item">';
                        $sTr.='<div class="col-lg-3 col-sm-3  left">';
                            $sTr.='<div class="review-item-user">';
                                $sTr.='<div class="review-item-user-profile">';
                                    $sTr.='<img class="img-circle" alt="" src="'.$sGD.'">';
                                $sTr.='</div>';
                                $sTr.='<div class="user-name">';
                                    $sTr.='<p>'.$r[7].'<br>'.$r[8].'</p>';
                                    $sTr.='<small>'.$r[3].'</small>';
                                $sTr.='</div>';
                            $sTr.='</div>';
                        $sTr.='</div>';

                        $sTr.='<div class="col-lg-9  col-sm-9 right">';
                            $sTr.='<div class="rating commentRating"> ';
                                $sTr.='<p> ';
                                    //AQUI ASOCIAMOS ESTRELLAS PUNTUACIÓN
                                    for($i=0;$i<=14;$i++){
                                        if($pts[$i]==$r[4]){
                                            $sTr.=$opc[$i];
                                            break;
                                        }
                                    }
                                    $sTr.='<span class="ratingInfo"> ';
                                        $sTr.='<span>/</span> ';
                                        $sTr.='<a data-target="#modal-review" data-toggle="modal">'.$r[4].'</a> ';
                                    $sTr.='</span> ';
                                $sTr.='</p>';
                            $sTr.='</div> ';
                            $sTr.='<h5 class="reviewUserTitle"><strong>'.$r[1].'</strong></h5> ';
                            $sTr.='<p class="commentText">'.$r[2].'</p> ';
                        $sTr.='</div> ';
                    $sTr.='</div>';
                    
                    if($orden==1){
                        $ULTIMO=$r[0];
                    }else{
                        $ULTIMO=$r[9];
                    }    
                    
                    $sTrR.=$sTr;
                    $sTr='';
                                   
                endwhile; 
                 
                $stmt->closeCursor();
                $output = $conn->query("select @codErr, @hayMas, @cant, @promedio")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $hayMas = $output['@hayMas'];
                $cant = $output['@cant'];
                $promedio = $output['@promedio'];
                             
            }else{
                
                $stmt->closeCursor();
                $output = $conn->query("select @codErr, @hayMas, @cant, @promedio")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $hayMas = $output['@hayMas'];
                $cant = $output['@cant'];
                $promedio = $output['@promedio'];

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
                        $desErr='PRODUCTO SIN COMENTARIOS';
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
         
    //ESTRELLA PROMEDIO
    for($j=0;$j<=14;$j++){
        
        //echo '[promedio-pts] ' . round(floatval($promedio),1) . ' ' . round(floatval($pts[$j]),1);
                
        $posicion=$j;
        if(round(floatval($promedio),1)<round(floatval($pts[$j]),1)){
            if($j!=0){
                $divPromedio='<p>'.$opc[$posicion-1].'<span class="ratingInfo"><span id="ptoPro" class="ratingNumber">'.$promedio.'</span> Puntuaci&oacute;n promedio</span></p>';
            }else{
                $divPromedio='<p>'.$opc[0].'<span class="ratingInfo"><span id="ptoPro" class="ratingNumber">'.$promedio.'</span> Puntuaci&oacute;n promedio</span></p>';
            }
            break;
        }
    }
        
    //exit();
        
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
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
        $strXml.='<ULTIMO>';
            $strXml.=$ULTIMO;
        $strXml.='</ULTIMO>';
        $strXml.='<HAYMAS>';
            $strXml.=$hayMas;
        $strXml.='</HAYMAS>';
        $strXml.='<CANT>';
            $strXml.=$cant;
        $strXml.='</CANT>';
        $strXml.='<PROMEDIO>';
            $strXml.= '<![CDATA[';
                $strXml.=$divPromedio;
            $strXml.=']]>';    
        $strXml.='</PROMEDIO>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
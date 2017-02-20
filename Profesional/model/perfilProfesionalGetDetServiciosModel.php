<?php

include("./conection.php");

    $rutPro=$_REQUEST['rutPro'];
    $idSer=$_REQUEST['id'];
    
    $profesional='';
    $titulo='';
    $cont=0;
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_WPRO_GET_DET_SERVICIO(:rutPro, :idSer, @codErr);";
            
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
            $stmt->bindParam(':idSer', $idSer, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):     

                    $cont+=1;
                    $seId=$r[0];
                    $seNom=$r[1];
                    $seDes=$r[2];
                    $seId=$r[3];
                    $url=$r[4];

                    $imgPro=$r[5];
                    $nomPro=$r[6];
                    $tipPro=$r[6];

                    $seUrl=str_replace('FILEID', $seId, $url);
                    $urlPro=str_replace('FILEID', $imgPro, $url);

                    $fecha=date("Y").'/'.date("m").'/'.date("d");   

                    $titulo='<h2>'.$seNom.'</h2>';

                    $profesional.='<a style="cursor: pointer;" onclick="webProfesional();">';
                        $profesional.='<img src="'.$urlPro.'" width="700" height="504" alt="'.$nomPro.'"/>';
                        $profesional.='<div class="item-desc">';
                            $profesional.='<h4>'.$nomPro.'</h4>';
                            $profesional.='<b>'.$tipPro.'</b>';
                        $profesional.='</div>';
                    $profesional.='</a>';

                    $sTr.='<article class="row entry">';
                        $sTr.='<div class="col-lg-1 visible-lg" id="idFigura1">';
                            $sTr.='<time datetime="'.$fecha.'">'.date("j").'<span>'.date("M").'</span></time>';
                        $sTr.='</div>';
                        $sTr.='<div class="col-md-12 col-lg-11">';
                            $sTr.='<div class="entry-wrap">';
                                $sTr.='<figure class="entry-thumb" id="idFigura2"><a class="fb" title="'.$seNom.'"><img width="800" height="350" alt="'.$seNom.'" src="'.$seUrl.'"></a><time class="hidden-lg" datetime="'.$fecha.'">'.date("d").'<span>'.date("m").'</span></time></figure>';
                                $sTr.='<div class="entry-content">';
                                    $sTr.='<div style="" class="alert alert-error" id="warning-articulo"></div>';
                                    $sTr.='<h1 class="entry-title" id="t2"><a style="cursor:pointer;">'.$seNom.'</a></h1>';
                                    $sTr.='<div id="publicacion" style="text-align : justify;">'.$seDes.'</div>';
                                $sTr.='</div>';
                            $sTr.='</div>';
                        $sTr.='</div>';
                    $sTr.='</article>';

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
                            $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_GET_DET_SERVICIO';
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
        $strXml.='<TITULO>';
            $strXml.= '<![CDATA[';
                $strXml.=$titulo;
            $strXml.=']]>';
        $strXml.='</TITULO>';
        $strXml.='<DATOS>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
        $strXml.='<PROFESIONAL>';
            $strXml.= '<![CDATA[';
                $strXml.=$profesional;
            $strXml.=']]>';
        $strXml.='</PROFESIONAL>';
    $strXml.='</SALIDA>';
    echo $strXml;

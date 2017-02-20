<?php
session_start();
include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $puId=$_REQUEST['puId'];
    
        
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_WAPP_CONSULTA_COMENTARIOS_PUBLICACION(:puId,@codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':puId', $puId, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){           
                $strHtml='';
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                   
                    $sTrR.='<li class="comment">';
                        $sTrR.='<div class="comment-text group">';
                            $sTrR.='<div class="wrap">';
                                $sTrR.='<img alt="" src="http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=50" class="avatar" height="50" width="50" />';
                                $sTrR.='<div class="comment-copy">';
                                    $sTrR.='<p class="comment-meta">';
                                        $sTrR.="<a href='' class='url'>" . $r[1] . ' ' . $r[2] . "</a> " .  $r[3];
                                    $sTrR.='</p>';
                                    $sTrR.='<p>';
                                        $sTrR.=$r[4];
                                    $sTrR.='</p>';
                                    if(strtoupper($r[5]) == strtoupper($_SESSION['email'])){
                                        $sTrR.="<a style='cursor:pointer;' class='comment-reply-link' onclick='eliminaComentario(" . $r[0] .  ");'>Eliminar</a>&nbsp;";
                                    }
                                $sTrR.='</div>';
                            $sTrR.='</div>';
                        $sTrR.='</div>';
                    $sTrR.='</li>';

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
        $strXml.='<DATOS>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
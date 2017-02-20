<?php

include("./conection.php");

    $id=$_REQUEST['id'];
    $rutPro=$_REQUEST['rutPro'];
       
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    $nomPro='';
    $marca='';
    $codPro='';             
    $conPro='';
    $preNet='';
    $preRef='';
    $proDes='';
    $imgPri='';
    $urlDri='';
    $proCat='';
    $urlDri2='';
    $proFotPri='';
    $proNomCom='';
    $proTip2='';
    $proUn='';
        
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_WPRO_PERFIL_PROFESIONAL_GET_DET_PRODUCTOS(:id, :rutPro, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,20);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 

                    $nomPro=$r[0];
                    $marca=$r[1];
                    $codPro=$r[2];                
                    $conPro=$r[3];
                    $preNet=$r[4];
                    $preRef=$r[5];
                    $proDes=$r[6];
                    $imgPri=$r[7];
                    $urlDri=$r[8];
                    $urlDri2=$urlDri;
                    $proCat=$r[9];
                    $urlDri = str_replace('FILEID', $imgPri, $urlDri);
                    $proUn=$r[11]; //Máximo de unidades
                    
                    if($r[10]==0){ //OBTIENE DATOS DEL PROFESIONAL
                        $proFotPri=$r[10]; //foto principal del profesional
                        $proNomCom=$r[11]; //NOMBRE completo principal del profesional
                        $proTip2=$r[12]; //tipo profesional
                        $proFotPri = str_replace('FILEID', $proFotPri, $urlDri2);
                    }
                        
                    $sTrR.='<img id="imgPri" style="display: block; margin-left: auto; margin-right: auto;" src="'.$urlDri.'">';
                    $sTrR.='<div class="item-desc">';
                        $sTrR.='<h4>'.$nomPro.'</h4>';
                        $sTrR.='<b>'.$proCat.'</b>';
                    $sTrR.='</div>';

                endwhile; 

                $stmt->closeCursor();
                $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                
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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_PERFIL_PROFESIONAL_GET_DET_PRODUCTOS';
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
            $strXml.='<NOMPRO>';
                $strXml.=$nomPro;
            $strXml.='</NOMPRO>';  
            $strXml.='<PRODES>';
                $strXml.= '<![CDATA[';
                    $strXml.=$proDes;
                $strXml.=']]>';
            $strXml.='</PRODES>';  
            $strXml.='<PROCAT>';
                $strXml.=$proCat;
            $strXml.='</PROCAT>';  
            $strXml.='<RSMMAR>';
                $strXml.=$marca;
            $strXml.='</RSMMAR>'; 
            $strXml.='<RSMCODPRO>';
                $strXml.=$codPro;
            $strXml.='</RSMCODPRO>';
            $strXml.='<RSMESTPRO>';
                $strXml.=$conPro;
            $strXml.='</RSMESTPRO>';
            $strXml.='<RSMPREPRO>';
                $strXml.=$preNet;
            $strXml.='</RSMPREPRO>';
            $strXml.='<RSMPREANTPRO>';
                $strXml.=$preRef;
            $strXml.='</RSMPREANTPRO>';
            $strXml.='<DATPRO>';
                $strXml.= '<![CDATA[';
                    $strXml.=$sTrR;
                $strXml.=']]>';
            $strXml.='</DATPRO>';   
            $strXml.='<IMGPRI>';
                $strXml.= '<![CDATA[';
                    $strXml.=$urlDri;
                $strXml.=']]>';
            $strXml.='</IMGPRI>';  
            $strXml.='<PROUN>';
                $strXml.=$proUn;
            $strXml.='</PROUN>';
        $strXml.='</DATOS>';
        $strXml.='<PROFESIONAL>';
            $strXml.='<PRO_FOT>';
                $strXml.= '<![CDATA[';
                    $strXml.=$proFotPri;
                $strXml.=']]>';    
            $strXml.='</PRO_FOT>';
            $strXml.='<PRO_NOM>';
                $strXml.=$proNomCom;
            $strXml.='</PRO_NOM>';
            $strXml.='<PRO_TIP>';
                $strXml.=$proTip2;
            $strXml.='</PRO_TIP>';
        $strXml.='</PROFESIONAL>';
    $strXml.='</SALIDA>';
    echo $strXml;


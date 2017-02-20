<?php
session_start();
include("../model/conection.php");

    $rut=$_REQUEST['rut'];
    $id=$_REQUEST['id'];
    $tit=$_REQUEST['tit'];
    $pu=$_REQUEST['pu'];
    $fli=$_REQUEST['fli'];
    $baj=$_REQUEST['baj'];
    $tip=$_REQUEST['tip'];
        
    $tit=filter_var($tit,FILTER_SANITIZE_STRING);
    $pu =filter_var($pu,FILTER_SANITIZE_STRING);
    $baj=filter_var($baj,FILTER_SANITIZE_STRING);
    
    $tit=filter_var($tit,FILTER_SANITIZE_SPECIAL_CHARS);
    $pu =filter_var($pu,FILTER_SANITIZE_SPECIAL_CHARS);
    $baj=filter_var($baj,FILTER_SANITIZE_SPECIAL_CHARS);
        
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    //sleep(1);
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_PRO_PUBLICACION_INGRESA_MODIFICA(:rut, :id, :tit, :pu, :fli, :baj, :tip, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 20);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->bindParam(':tit', $tit, PDO::PARAM_STR, 100);
            $stmt->bindParam(':pu', $pu, PDO::PARAM_STR, 3000);
            $stmt->bindParam(':fli', $fli, PDO::PARAM_STR, 50);
            $stmt->bindParam(':baj', $baj, PDO::PARAM_STR, 500);
            $stmt->bindParam(':tip', $tip, PDO::PARAM_STR, 100);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    
                    $_SESSION['idPub']=$r[1]; //ID de Publicación

                    if($r[3]!='#'){
                        $date=new DateTime($r[3]);
                        $feCre=$date->format('d-m-Y H:i:s');
                    }else{
                        $feCre='#';
                    }

                    if($r[4]!='#'){
                        $date=new DateTime($r[4]);
                        $feMod=$date->format('d-m-Y H:i:s');
                    }else{
                        $feMod='#';
                    }

                    if($r[5]!='#'){
                        $date = new DateTime($r[5]);
                        $fePub=$date->format('d-m-Y H:i:s');
                    }else{
                        $fePub='#';
                    }

                    $sTrR.='<ACCION>';
                        $sTrR.=$r[0]; 
                    $sTrR.='</ACCION>';
                    $sTrR.='<IDENTIFICADOR>';
                        $sTrR.=$r[1]; 
                    $sTrR.='</IDENTIFICADOR>';
                    $sTrR.='<ESTADO>';
                        $sTrR.=$r[2]; 
                    $sTrR.='</ESTADO>';
                    $sTrR.='<FECHA_CREACION>';
                        $sTrR.=$feCre; 
                    $sTrR.='</FECHA_CREACION>';
                    $sTrR.='<FECHA_MODIFICACION>';
                        $sTrR.=$feMod; 
                    $sTrR.='</FECHA_MODIFICACION>';
                    $sTrR.='<FECHA_PUBLICACION>';
                        $sTrR.=$fePub; 
                    $sTrR.='</FECHA_PUBLICACION>';
                    $sTrR.='<TITULO>';
                        $sTrR.=$r[6];
                    $sTrR.='</TITULO>';
                    $sTrR.='<PUBLICACION>';
                        $sTrR.=$r[7];
                    $sTrR.='</PUBLICACION>';
                    $sTrR.='<FLICKR>';
                        $sTrR.=$r[8];
                    $sTrR.='</FLICKR>';
                    $sTrR.='<BAJADA>';
                        $sTrR.=$r[9];
                    $sTrR.='</BAJADA>';
                    $sTrR.='<TIPO>';
                        $sTrR.=$r[10];
                    $sTrR.='</TIPO>';
      
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
            //$strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            //$strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
    
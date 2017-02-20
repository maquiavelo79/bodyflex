<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $cont='';
        
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strXml='';

    $nom='';
    $idGd='';
    $gdRuta='';
    $sUrl='';
    
    $idColeccion=$_REQUEST['idColeccion'];
    $idCat1=$_REQUEST['idCat1'];
    $idCat2=$_REQUEST['idCat2'];
    $idCat3=$_REQUEST['idCat3'];
    
    /*
    echo 'idColeccion: ' . $idColeccion . ' | ';
    echo 'idCat1: ' . $idCat1 . ' | ';
    echo 'idCat2: ' . $idCat2 . ' | ';
    echo 'idCat3: ' . $idCat3 . ' | ';
    exit();
     */
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_CAT_COL(:idColeccion, :idCat1, :idCat2, :idCat3, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':idColeccion', $idColeccion, PDO::PARAM_STR,10);
            $stmt->bindParam(':idCat1', $idCat1, PDO::PARAM_STR,10);
            $stmt->bindParam(':idCat2', $idCat2, PDO::PARAM_STR,10);
            $stmt->bindParam(':idCat3', $idCat3, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    
                    ++$cont;
                    $nom=$r[0];     //NOMBRE
                    $idGd=$r[1];    //ID GOOGLE DRIVE
                    $gdRuta=$r[2];  //RUTA GOOGLE DRIVE
                    $sUrl=str_replace('FILEID', $idGd, $gdRuta);
                    
                    $sTr.='<div id="'.$idColeccion.'" idCat1="'.$idCat1.'" idCat2="'.$idCat2.'" idCat3="'.$idCat3.'" class="col-lg-2 col-md-2 col-sm-3 col-xs-4 text-center">';
                        $sTr.='<div class="thumbnail equalheight">';
                            $sTr.='<a class="subCategoryThumb">';
                                $sTr.='<img src="'.$sUrl.'" class="img-rounded " alt="img"></a>'; 
                                $sTr.='<a class="subCategoryTitle"><span>'.$nom.'</span></a>';
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
        $strXml.='<DATOS>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';        
        $strXml.='</DATOS>';
        $strXml.='<COLECCION>';
            $strXml.=$idColeccion;
        $strXml.='</COLECCION>';
        $strXml.='<CATEGORIA2>';
            $strXml.=$idCat2;
        $strXml.='</CATEGORIA2>';
        $strXml.='<CATEGORIA3>';
            $strXml.=$idCat3;
        $strXml.='</CATEGORIA3>';
    $strXml.='</SALIDA>';
    echo $strXml;
    
    
<?php

include("../model/conection.php");

    $sTrA = '';
    $sTrB = '';
    $sTrC = '';
    
    $sTrRA = '';
    $sTrRB = '';
    $sTrRC = '';
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';

    $idPro=$_REQUEST['idPro'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_PRO_GET_IMG(:idPro, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':idPro', $idPro, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                         
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):

                    $sGD=str_replace('FILEID', $r[0], $r[1]);                   

                    if($cont==0){
                        $sTrA.='<a urlImg="'.$sGD.'" class="thumbLink selected">';
                        $sTrA.='<img data-large="'.$sGD.'" alt="img" class="img-responsive" src="'.$sGD.'">';
                        $sTrA.='</a>';
                    }else{
                        $sTrB.='<a urlImg="'.$sGD.'" class="thumbLink">';
                        $sTrB.='<img data-large="'.$sGD.'" alt="img" class="img-responsive" src="'.$sGD.'">';
                        $sTrB.='</a>';
                    }

                    if($r[2]==1){

                        $sGDP=str_replace('FILEID', $r[0], $r[1]); 
                        $sTrC.='<a urlImg="'.$sGDP.'" class="product-largeimg-link">';
                            $sTrC.='<img src="'.$sGDP.'" class="img-responsive product-largeimg" alt="img">';
                        $sTrC.='</a>';

                    }

                    $cont+=1;

                    $sTrRA.=$sTrA;
                    $sTrRB.=$sTrB;
                    $sTrRC.=$sTrC;

                    $sTrA='';
                    $sTrB='';
                    $sTrC='';

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
        $strXml.='<SECCION1>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrRC;
            $strXml.=']]>';
        $strXml.='</SECCION1>';
        $strXml.='<SECCION2>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrA.$sTrRB;
            $strXml.=']]>';
        $strXml.='</SECCION2>';
        $strXml.='<URLIMGPRI>';
            $strXml.= '<![CDATA[';
                $strXml.=$sGDP;
            $strXml.=']]>';
        $strXml.='</URLIMGPRI>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
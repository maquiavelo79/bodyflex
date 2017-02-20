<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $strHead='';
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $idPro=$_REQUEST['idPro'];

    //sleep(5);
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_DET_PRO(:idPro, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':idPro', $idPro, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                    
                    $sTr.='<PROID>'.$r[0].'</PROID>';
                    $sTr.='<PRONOM>'.$r[1].'</PRONOM>';
                    $sTr.='<PROMAR>'.$r[2].'</PROMAR>';
                    $sTr.='<PRODES><![CDATA['.$r[3].']]></PRODES>';
                    $sTr.='<PROPVP>'.$r[4].'</PROPVP>'; //precio profesional
                    $sTr.='<PROPO1>'.$r[5].'</PROPO1>'; //% vta x catalogo
                    $sTr.='<PROMC>'.$r[6].'</PROMC>'; //% MTO comisión x vta x catalogo
                    $sTr.='<PROUN>'.$r[7].'</PROUN>'; //unidades maximas para venta en linea
                    $sTr.='<PROPV>'.$r[8].'</PROPV>'; //precio bodyflex
                    $sTr.='<PROMU1>'.$r[9].'</PROMU1>'; //$ UTILIDAD VTA PRESENCIAL
                    $sTr.='<PROMU2>'.$r[10].'</PROMU2>'; // $ UTILIDAD VTA x catalogo
                    $sTr.='<PROPO2>'.$r[11].'</PROPO2>'; //% UTILIDAD VTA presencial
                    $sTr.='<PROPREANT>'.$r[12].'</PROPREANT>'; //PRECIO ANTERIOR PARA PROFESIONAL
                    $sTr.='<PRODESCOR>'.$r[13].'</PRODESCOR>'; //DESCRIPCION CORTA
                    
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
        $strXml.='<DATO>';
            //$strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            //$strXml.=']]>';
        $strXml.='</DATO>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
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
    
    $strIni='';
    $strFin='';

    $coleccion=$_REQUEST['coleccion'];
    $categoria1=$_REQUEST['categoria1'];
    $categoria2=$_REQUEST['categoria2'];
    $categoria3=$_REQUEST['categoria3'];
        
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_COLORES(:coleccion, :categoria1, :categoria2, :categoria3, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':coleccion', $coleccion, PDO::PARAM_STR,10);
            $stmt->bindParam(':categoria1', $categoria1, PDO::PARAM_STR,10);
            $stmt->bindParam(':categoria2', $categoria2, PDO::PARAM_STR,10);
            $stmt->bindParam(':categoria3', $categoria3, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont++;
                    $colCol=$r[0]; //nombre del color, ej: azul
                    $codCol=$r[1]; //codigo CSS del color
                    
                    $sTr.='<div class="block-element">';
                        $sTr.='<label>';
                            $sTr.='<input id="'.$colCol.'" class="coloresCat" type="checkbox" name="tour" value="0"/>';
                            $sTr.='<small style="background-color:'.$codCol.'"></small>';
                            $sTr.=$colCol;
                        $sTr.='</label>';
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
        
    $strIni='<div class="panel-body smoothscroll maxheight300 color-filter">';
    $strFin='</div>';
        
    $sTrR=$strIni.$sTrR. '<div class="block-element"><label>&nbsp;</label></div>' .$strFin;
    
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
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATO>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
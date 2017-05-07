<?php
session_start(); 
include("../model/conection.php");


    $sTr = '';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    $foto1 = '';
    $foto2 = '';
    $foto3 = '';
    $foto4 = '';
    $foto5 = '';
    $foto6 = '';
    $foto7 = '';
    $foto8 = '';
    $foto9 = '';
    $foto10 = '';
    $foto11 = '';
    $foto12 = '';
    $foto13 = '';
    $foto14 = '';
    $foto15 = '';
    $foto16 = '';
    $foto17 = '';
    $foto18 = '';
    $foto19 = '';
    $foto20 = '';

    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_ADM_CSU_FOT_COL(@codErr, @foto1, @foto2, @foto3, @foto4, @foto5, @foto6, @foto7, @foto8, @foto9, @foto10, @foto11, @foto12, @foto13, @foto14, @foto15, @foto16, @foto17, @foto18, @foto19, @foto20);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
                            
            $stmt->closeCursor();
            $output = $conn->query("select @codErr, @foto1, @foto2, @foto3, @foto4, @foto5, @foto6, @foto7, @foto8, @foto9, @foto10, @foto11, @foto12, @foto13, @foto14, @foto15, @foto16, @foto17, @foto18, @foto19, @foto20")->fetch(PDO::FETCH_ASSOC);
            $codErr = $output['@codErr'];
                            
                if($codErr==0){
                
                    $foto1 = (isset($output['@foto1'])?($output['@foto1']):(''));
                    $foto2 = (isset($output['@foto2'])?($output['@foto2']):(''));
                    $foto3 = (isset($output['@foto3'])?($output['@foto3']):(''));
                    $foto4 = (isset($output['@foto4'])?($output['@foto4']):(''));
                    $foto5 = (isset($output['@foto5'])?($output['@foto5']):(''));
                    $foto6 = (isset($output['@foto6'])?($output['@foto6']):(''));
                    $foto7 = (isset($output['@foto7'])?($output['@foto7']):(''));
                    $foto8 = (isset($output['@foto8'])?($output['@foto8']):(''));
                    $foto9 = (isset($output['@foto9'])?($output['@foto9']):(''));
                    $foto10 = (isset($output['@foto10'])?($output['@foto10']):(''));
                    $foto11 = (isset($output['@foto11'])?($output['@foto11']):(''));
                    $foto12 = (isset($output['@foto12'])?($output['@foto12']):(''));
                    $foto13 = (isset($output['@foto13'])?($output['@foto13']):(''));
                    $foto14 = (isset($output['@foto14'])?($output['@foto14']):(''));
                    $foto15 = (isset($output['@foto15'])?($output['@foto15']):(''));
                    $foto16 = (isset($output['@foto16'])?($output['@foto16']):(''));
                    $foto17 = (isset($output['@foto17'])?($output['@foto17']):(''));
                    $foto18 = (isset($output['@foto18'])?($output['@foto18']):(''));
                    $foto19 = (isset($output['@foto19'])?($output['@foto19']):(''));
                    $foto20 = (isset($output['@foto20'])?($output['@foto20']):(''));
                    
                }else{
                
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
                            $desErr='SIN IMAGENES INGRESADAS';
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
        $strXml.='<FOTO1>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto1;
            $strXml.=']]>';
        $strXml.='</FOTO1>';
        $strXml.='<FOTO2>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto2;
            $strXml.=']]>';
        $strXml.='</FOTO2>';
        $strXml.='<FOTO3>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto3;
            $strXml.=']]>';
        $strXml.='</FOTO3>';
        $strXml.='<FOTO4>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto4;
            $strXml.=']]>';
        $strXml.='</FOTO4>';
        $strXml.='<FOTO5>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto5;
            $strXml.=']]>';
        $strXml.='</FOTO5>';
        $strXml.='<FOTO6>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto6;
            $strXml.=']]>';
        $strXml.='</FOTO6>';
        $strXml.='<FOTO7>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto7;
            $strXml.=']]>';
        $strXml.='</FOTO7>';
        $strXml.='<FOTO8>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto8;
            $strXml.=']]>';
        $strXml.='</FOTO8>';
        $strXml.='<FOTO9>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto9;
            $strXml.=']]>';
        $strXml.='</FOTO9>';
        $strXml.='<FOTO10>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto10;
            $strXml.=']]>';
        $strXml.='</FOTO10>';
        $strXml.='<FOTO11>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto11;
            $strXml.=']]>';
        $strXml.='</FOTO11>';
        $strXml.='<FOTO12>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto12;
            $strXml.=']]>';
        $strXml.='</FOTO12>';
        $strXml.='<FOTO13>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto13;
            $strXml.=']]>';
        $strXml.='</FOTO13>';
        $strXml.='<FOTO14>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto14;
            $strXml.=']]>';
        $strXml.='</FOTO14>';
        $strXml.='<FOTO15>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto15;
            $strXml.=']]>';
        $strXml.='</FOTO15>';
        $strXml.='<FOTO16>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto16;
            $strXml.=']]>';
        $strXml.='</FOTO16>';
        $strXml.='<FOTO17>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto17;
            $strXml.=']]>';
        $strXml.='</FOTO17>';
        $strXml.='<FOTO18>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto18;
            $strXml.=']]>';
        $strXml.='</FOTO18>';
        $strXml.='<FOTO19>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto19;
            $strXml.=']]>';
        $strXml.='</FOTO19>';
        $strXml.='<FOTO20>';
            $strXml.= '<![CDATA[';
                $strXml.=$foto20;
            $strXml.=']]>';
        $strXml.='</FOTO20>';
    $strXml.='</SALIDA>';
    echo $strXml;

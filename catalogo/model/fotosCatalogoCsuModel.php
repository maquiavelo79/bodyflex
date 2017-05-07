<?php

function obtenerImagenes(){
    
    //session_start(); 
    include("../model/conection.php");

        $sTr = '';
        $sTrR='';
        $strXml='';
        $codErr=0;
        $desErr='OPERACION EXITOSA!';

        $foto1 = '';
        $foto2 = '';

        try{

            $conn=PDO_conectar();     

            if($conn){    

                $sql="CALL SP_CAT_CSU_FOT(@codErr, @foto1, @foto2);";
                $stmt = $conn->prepare($sql);
                $stmt->execute();

                    $stmt->closeCursor();
                    $output = $conn->query("select @codErr, @foto1, @foto2")->fetch(PDO::FETCH_ASSOC);
                    $codErr = $output['@codErr'];

                    if($codErr==0){

                        $foto1 = $output['@foto1'];
                        $foto2 = $output['@foto2'];

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
                                $desErr='SIN IMAGEN PRINCIPAL INGRESADA';
                                break;
                            case 97:
                                $desErr='SIN IMAGEN DETALLE PRODUCTO INGRESADA';
                                break;
                            case 96:
                                $desErr='CATALOGO SIM IMÁGENES';
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
        $strXml.='</SALIDA>';
        return $strXml;
}
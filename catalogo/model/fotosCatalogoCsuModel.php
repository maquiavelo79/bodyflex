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

                $sql="CALL SP_CAT_CSU_FOT(@codErr, @principal, @detalle);";
                $stmt = $conn->prepare($sql);
                $stmt->execute();

                    $stmt->closeCursor();
                    $output = $conn->query("select @codErr, @principal, @detalle")->fetch(PDO::FETCH_ASSOC);
                    $codErr = $output['@codErr'];
                    
                    if($codErr==0){

                        $principal = $output['@principal'];
                        $detalle = $output['@detalle'];

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
                    $strXml.=$principal;
                $strXml.=']]>';
            $strXml.='</FOTO1>';
            $strXml.='<FOTO2>';
                $strXml.= '<![CDATA[';
                    $strXml.=$detalle;
                $strXml.=']]>';
            $strXml.='</FOTO2>';
        $strXml.='</SALIDA>';
        return $strXml;
}
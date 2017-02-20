<?php

include("../model/conection.php");

    $lat='';
    $lng='';

    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strXml='';
    
    $idDir=$_REQUEST['idDir'];
    $address=$_REQUEST['address'];
   
    /*
    $coords = getCoordinates($address);
    $lat=$coords[0];
    $lng=$coords[1]; 
    */  
    
    getCoordinates($address);
    
    //echo 'lat ' . $lat . '<br>';
    //echo 'lng ' . $lng . '<br>';
    exit();
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_CP_PRO_ING_COO(:idDir, :lat, :lng, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':idDir', $idDir, PDO::PARAM_STR, 20);
            $stmt->bindParam(':lat', $lat, PDO::PARAM_STR, 50);
            $stmt->bindParam(':lng', $lng, PDO::PARAM_STR, 50);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  
                     $strDat.=$r[0];
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
                        $desErr='SIN COORDENADAS';
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
            $strXml.=$strDat;
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
    
    
    function getCoordinates($address){
        $address = urlencode($address);       
        
        //echo 'address:: ' . $address;
        
        $url = "http://maps.google.com/maps/api/geocode/json?sensor=false&address=" . $address;
        $response = file_get_contents($url);
        $json = json_decode($response,true);
        if($json['status']=='OK'){
            $lat = $json['results'][0]['geometry']['location']['lat'];
            $lng = $json['results'][0]['geometry']['location']['lng'];
            echo 'IF ' . $response;
        }else{
            echo 'ELSE ' . $response;
        }
        
        //return array($lat, $lng);
        
        
    }
 
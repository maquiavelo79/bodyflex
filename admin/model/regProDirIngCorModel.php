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
   
    $coords = getCoordinates($address);
    
        
    //echo 'lat ' . $lat . '<br>';
    //echo 'lng ' . $lng . '<br>';
    //exit();
    
    if(!$coords==false){
        
        $lat=$coords[0];
        $lng=$coords[1]; 
    
        try{

            $conn=PDO_conectar();     

            if($conn){  

                $sql="CALL SP_CP_ADM_ING_COO(:idDir, :lat, :lng, @codErr);";

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
    }else{
        $codErr=101;
        $desErr="ERROR AL ESTABLECER COORDENADAS";
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
    
    
//    function getCoordinates($address){
//        $address = urlencode($address);
//        $url = "http://maps.google.com/maps/api/geocode/json?sensor=false&address=" . $address;
//        $response = file_get_contents($url);
//        $json = json_decode($response,true);
//
//        $lat = $json['results'][0]['geometry']['location']['lat'];
//        $lng = $json['results'][0]['geometry']['location']['lng'];
//
//        return array($lat, $lng);
//    }
 
    function getCoordinates($address){
 
        // url encode the address
        $address = urlencode($address);

        // google map geocode api url
        $url = "http://maps.google.com/maps/api/geocode/json?address={$address}";

        // get the json response
        $resp_json = file_get_contents($url);

        // decode the json
        $resp = json_decode($resp_json, true);

        // response status will be 'OK', if able to geocode given address 
        if($resp['status']=='OK'){

            // get the important data
            $lati = $resp['results'][0]['geometry']['location']['lat'];
            $longi = $resp['results'][0]['geometry']['location']['lng'];
            $formatted_address = $resp['results'][0]['formatted_address'];

            // verify if data is complete
            if($lati && $longi && $formatted_address){

                // put the data in the array
                $data_arr = array();            

                array_push(
                    $data_arr, 
                        $lati, 
                        $longi, 
                        $formatted_address
                    );

                return $data_arr;

            }else{
                return false;
            }

        }else{
            return false;
        }
    }
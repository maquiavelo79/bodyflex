<?php

    include("../model/conection.php");   
    
    function publicacionPoseeContenido($puId){
    $codErr=0;    
    //$desErr='';
        
        try{
	
            $conn=PDO_conectar();  
 
            if($conn){
                
                $sql="CALL SP_WAPP_PUBLICACION_POSEE_CONTENIDO(:puId, @codErr);";
                
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':puId', $puId, PDO::PARAM_STR,50);
                $stmt->execute();
                $num= $stmt->rowCount();
                
                if($num>0){
                    while ($r = $stmt->fetch(PDO::FETCH_NUM)):  
                        return $r[0];
                    endwhile;
                }else{
                    $stmt->closeCursor();
                    $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                    $codErr = $output['@codErr'];

                    switch($codErr){
                        case 0:
                            if($num==0){ //$desErr='PROCEDIMIENTO NO RETORNA REGISTROS';
                                $codErr=8;
                            }
                            break;
                        case 99: //$desErr='ERROR EN PROCEDIMEINTO';
                            $codErr=99;
                            break;
                        case 98: //$desErr='SIN CONTENIDO';
                            $codErr=98;
                            break;
                    }
                }        
            }else{ //$desErr='NO ES POSIBLE CONECTAR';
                $codErr=9;
            }
        }catch(PDOException $exception){ //$desErr=$exception->getMessage(); 
            $codErr=100;
        } 	    
        
        return $codErr;
            
    }        
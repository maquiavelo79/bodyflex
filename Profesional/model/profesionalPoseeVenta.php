<?php
    
    function profesionalPoseeVenta($rutPro, $se){
    $rsp=0;    
                    
        try{
        
            $conn=PDO_conectar();  

            if($conn){

                $sql="CALL SP_WPRO_PERFIL_PROFESIONAL_POSEE_VENTA(:rutPro, :se, @codErr);";

                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
                $stmt->bindParam(':se', $se, PDO::PARAM_STR,30);
                $stmt->execute();
                $num= $stmt->rowCount();

                if($num>0){
                    while($r = $stmt->fetch(PDO::FETCH_NUM)): 
                        $rsp = $r[0];
                    endwhile;   
                }else{
                    //$rsp = 8; //procedimiento no retorna registros
                    
                    $stmt->closeCursor();
                    $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                    $codErr = $output['@codErr'];

                    switch($codErr){
                        case 0:
                            if($num==0){ //$desErr='PROCEDIMIENTO NO RETORNA REGISTROS';
                                $rsp=8;    
                            }
                            break;
                        case 99: //$desErr='ERROR EN PROCEDIMEINTO';
                            $rsp=99;
                            break;
                        case 98: //$desErr='SIN CONTENIDO';
                            $rsp=98;
                            break;
                    }
                    
                }        
            }else{
                $rsp = 9; //error al conectar con base de datos
            }

        }catch(PDOException $exception){ 
            $rsp=100;
        } 	
    
        return $rsp;

    }
<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $cont='';
        
    
    $colNom=''; //NOMBRE COLECCION
    $nomCat2=''; //NOMBRE CATEGORIA 2
    $nomCat3=''; //NOMBRE CATEGORIA 3
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strHtml='';
    $strXml='';
    
    $idColeccion=$_REQUEST['idColeccion'];
    $idCat2=$_REQUEST['idCat2'];
    $idCat3=$_REQUEST['idCat3'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_NAVEGACION(:idColeccion, :idCat2, :idCat3, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':idColeccion', $idColeccion, PDO::PARAM_STR,5);
            $stmt->bindParam(':idCat2', $idCat2, PDO::PARAM_STR,5);
            $stmt->bindParam(':idCat3', $idCat3, PDO::PARAM_STR,5);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    
                    ++$cont;
                    $colNom=$r[0]; //NOMBRE COLECCION
                    $nomCat2=$r[1]; //NOMBRE CATEGORIA 2
                    $nomCat3=$r[2]; //NOMBRE CATEGORIA 3

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
        $strXml.='<DATOS>';
            $strXml.='<COLECCION>';
                $strXml.=$colNom;
            $strXml.='</COLECCION>';
            $strXml.='<CATEGORIA2>';
                $strXml.=$nomCat2;
            $strXml.='</CATEGORIA2>';
            $strXml.='<CATEGORIA3>';
                $strXml.=$nomCat3;
            $strXml.='</CATEGORIA3>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    
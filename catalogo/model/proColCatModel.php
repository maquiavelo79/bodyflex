<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $cont='';
        
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strHtml='';
    $strXml='';

    $sw=0; //switch de apertura o cierre de coleccion    
    $swCat2=0; //switch     
    $swCat3=0; //switch     
    
    $tipo2Aux=0;
    $tipo3Aux=0;
    
    $colAux='#';
    $col='%';    //ID COLECCION
    $tipo1=0; //POSEE 1 CATEGORIA
    $tipo2=0; //POSEE 2 CATEGORIA
    $tipo3=0; //POSEE 3 CATEGORIA   
    
    $idColeccion=$_REQUEST['idColeccion'];
    $idCat2=$_REQUEST['idCat2'];
    $idCat3=$_REQUEST['idCat3'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CAT_CSU_COLECCION(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    
                    ++$cont;
                    $col=$r[0];    //ID COLECCION
                    $colNom=$r[1]; //NOMBRE COLECCION
                    
                    $tipo1=$r[9];  //TIPO1
                    $tipo2=$r[10]; //TIPO2
                    $tipo3=$r[11]; //TIPO3
                            
                    $colCat1=$r[3];  //CAT2
                    $colCat2=$r[5];  //CAT2
                    $colCat3=$r[7];  //CAT3
                    
                    if($col!=$colAux){
                        //DISTINTA COLECCIÓN
                        
                        if($swCat3==1){
                            cerrarTipo3($strHtml, $swCat3);
                        }
                        
                        if($sw==1){
                            cerrarColeccion($strHtml, $sw);
                        }
                        
                        if($col==$idColeccion){
                            abrirColeccionA($strHtml, $colNom, $sw);
                        }else{
                            abrirColeccionB($strHtml, $colNom, $sw);
                        }
                        
                        if($tipo2==1){
                            creaTipo2($strHtml, $r[6], $col, $colCat1, $colCat2);
                        }elseif($tipo3==1){
                            creaTipo3($strHtml, $r[6], $r[8], $col, $colCat1, $colCat2, $colCat3, $idCat3, $swCat3);
                        }                        
                        
                    }else{
                        //MISMA COLECCIÓN
                        if($cat2Aux==$colCat2 && $tipo3Aux==$tipo3){
                            if($tipo2==1){
                                if($swCat3==1){
                                    cerrarTipo3($strHtml, $swCat3);
                                }
                                creaTipo2($strHtml, $r[6], $col, $colCat1, $colCat2);
                            }elseif($tipo3==1){
                                agregarTipo3($strHtml, $r[6], $r[8], $idColeccion, $colCat1, $colCat2, $colCat3, $idCat3, $swCat3);
                            } 
                        }else{
                            if($swCat3==1){
                                cerrarTipo3($strHtml, $swCat3);
                            }
                            if($tipo2==1){
                                creaTipo2($strHtml, $r[6], $col, $colCat1, $colCat2);
                            }elseif($tipo3==1){
                                creaTipo3($strHtml, $r[6], $r[8], $col, $colCat1, $colCat2, $colCat3, $idCat3, $swCat3);
                            }   
                        }   
                    }
                   
                    $colAux=$col;
                    $cat2Aux=$colCat2;
                    $cat3Aux=$colCat3;
                    $tipo2Aux=$tipo2;
                    $tipo3Aux=$tipo3;
                    
                endwhile; 
                
                if($sw==1){
                    cerrarColeccion($strHtml, $sw);
                }
                
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
            $strXml.= '<![CDATA[';
                $strXml.=$strHtml;
            $strXml.=']]>';        
        $strXml.='</DATOS>';
        $strXml.='<COLECCION>';
            $strXml.=$idColeccion;
        $strXml.='</COLECCION>';
        $strXml.='<CATEGORIA2>';
            $strXml.=$idCat2;
        $strXml.='</CATEGORIA2>';
        $strXml.='<CATEGORIA3>';
            $strXml.=$idCat3;
        $strXml.='</CATEGORIA3>';
    $strXml.='</SALIDA>';
    echo $strXml;
    
    function abrirColeccionA(&$strHtml, &$colNom, &$sw){
        $strHtml.='<li class="">';
            $strHtml.='<a class="child-has-open">'.$colNom.'</a>';
                $strHtml.='<ul>';
        $sw=1;        
    }
    
    function abrirColeccionB(&$strHtml, &$colNom, &$sw){
        $strHtml.='<li class="">';
            $strHtml.='<a>'.$colNom.'</a>';
                $strHtml.='<ul>';
        $sw=1;        
    }
    
    function cerrarColeccion(&$strHtml, &$sw){
        	$strHtml.='</ul>';
            $strHtml.='</li>';  
        $sw=0;
    }
    
    function creaTipo3(&$strHtml, &$nomCat2, &$nomCat3, $idColeccion, $colCat1, $colCat2, $colCat3, $idCat3, &$swCat3){
        $swCat3=1;
        $strHtml.='<li class=" ">';
            if($idCat3==$colCat3){
                $strHtml.='<a class="child-has-open">'.$nomCat2.'</a>';
            }else{
                $strHtml.='<a>'.$nomCat2.'</a>';
            }
            $strHtml.='<ul class="">';
                $strHtml.='<li><a class="classColCat" id="'.$idColeccion.'" idCat1="'.$colCat1.'"  idCat2="'.$colCat2.'" idCat3="'.$colCat3.'">'.$nomCat3.'</a></li>';
            //$strHtml.='</ul>';
        //$strHtml.='</li>';    
    }
    function agregarTipo3(&$strHtml, &$nomCat2, &$nomCat3, $idColeccion, $colCat1, $colCat2, $colCat3, $idCat3, &$swCat3){
        $swCat3=1;
        $strHtml.='<li><a class="classColCat" id="'.$idColeccion.'" idCat1="'.$colCat1.'"  idCat2="'.$colCat2.'" idCat3="'.$colCat3.'">'.$nomCat3.'</a></li>';
    }
    function cerrarTipo3(&$strHtml, &$swCat3){
        $swCat3=0;
            $strHtml.='</ul>';
        $strHtml.='</li>';    
    }
    
    function creaTipo2(&$strHtml, &$nomCat2, $idColeccion, $colCat1, $colCat2){
        $strHtml.='<li><a class="classColCat" id="'.$idColeccion.'" idCat1="'.$colCat1.'" idCat2="'.$colCat2.'" idCat3="0">'.$nomCat2.'</a></li>';
    }
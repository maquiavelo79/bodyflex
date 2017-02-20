<?php

include("../model/conection.php");
    
    $sTr ='';
    $puPa=''; //PAGINACIÓN
    $puAr=''; //ARTICULOS
    $cont=0;  
    $contEti=0;
    $paginacion='';
    $puRutImg='../publicaciones/'; //ruta imagen
    $puNomImg=''; //nombre imagen
    
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    $rut=$_REQUEST['rut']; //rut de quien publica
    $sw=$_REQUEST['sw']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES
    $ultimo=$_REQUEST['ultimo']; // ultimo numero de la paginación
    $pa=$_REQUEST['pa']; //Paginación, indica el numero de paginación que el usuario presionó 
    
    $pubId=$_REQUEST['pubId']; //nombre publicacion
        
    $nomCat=$_REQUEST['nomCat']; //nombre categoria
    $nomEti=$_REQUEST['nomEti']; //nombre etiqueta
    $nomRef=$_REQUEST['nomRef']; //nombre referencia
        
//    $titBsq='';
//    $catBsq='';
//    $etiBsq='';
//    $refBsq='';
//    $proBsq='';
    
    $titBsq=$_REQUEST['titBsq']; //titulo buscado
    $catBsq=$_REQUEST['catBsq']; //categoria buscada
    $etiBsq=$_REQUEST['etiBsq']; //etiqueta buscada
    $refBsq=$_REQUEST['refBsq']; //referencia buscada
    $proBsq=$_REQUEST['proBsq']; //profesional buscado
    
    //sleep(1);
    
    if (strlen($rut)==0){
        $rut='0';
    }
        
 
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_WAPP_CONSULTA_PUBLICACION_RSM(:rut, :sw, :ultimo, :pubId, :nomCat, :nomEti, :nomRef, :titBsq, :catBsq, :etiBsq, :refBsq, :proBsq, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR,10);
            $stmt->bindParam(':sw', $sw, PDO::PARAM_INT);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR,100);
            $stmt->bindParam(':pubId', $pubId, PDO::PARAM_STR,100);
            $stmt->bindParam(':nomCat', $nomCat, PDO::PARAM_STR,100);
            $stmt->bindParam(':nomEti', $nomEti, PDO::PARAM_STR,100);
            $stmt->bindParam(':nomRef', $nomRef, PDO::PARAM_STR,100);
            $stmt->bindParam(':titBsq', $titBsq, PDO::PARAM_STR,100);
            $stmt->bindParam(':catBsq', $catBsq, PDO::PARAM_STR,100);
            $stmt->bindParam(':etiBsq', $etiBsq, PDO::PARAM_STR,100);
            $stmt->bindParam(':refBsq', $refBsq, PDO::PARAM_STR,100);
            $stmt->bindParam(':proBsq', $proBsq, PDO::PARAM_STR,100);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):      
                                         
                    $cont+=1;
                    $puAr='';

                    $puId=$r[0];
                    $puBa=$r[1];
                    $puFp=$r[2];
                    $puTi=$r[3];
                    $puIm=$r[4];
                    $puPa=$r[7];
                    $puCa=$r[5]; //cantidad
                    $puPag=$r[6]; //numero de paginaciones
                    $puRut=$r[8]; //rut profesional autor

                    $puRutImg=$r[9];
                    $puNomImg=$r[10];
                    $puDrive=$puIm; //link generico a google drive
                    //$puDrive = str_replace('FILEID', $puIm, $puDrive);

                    $puFf=$puFp;
                    $puDi=date('d',strtotime($puFf)); //numero día
                    $puMe=strftime('%b',strtotime($puFf)); //mes

                    $puAr.='<article class="row entry">';
                        $puAr.='<div class="col-lg-1 visible-lg">';
                            $puAr.='<time datetime="' . $puFf . '">' . $puDi . '<span>' . $puMe . '</span></time>';
                        $puAr.='</div>';
                        $puAr.='<div class="col-md-12 col-lg-11">';
                            $puAr.='<div class="entry-wrap">';
                                $puAr.='<figure class="entry-thumb">';
                                    $puAr.='<a style="cursor:pointer;" onclick="verPublicacion(' . $puId . ',' . $puRut . ');"><img src="' . $puDrive . '" alt=""/></a>';
                                    $puAr.='<time datetime="' . $puFf . '" class="hidden-lg">' . $puDi . '<span>' . $puMe . '</span></time>';
                                $puAr.='</figure>';
                                $puAr.='<div class="entry-content">';
                                    $puAr.='<h1 class="entry-title"><a style="cursor:pointer;" onclick="verPublicacion(' . $puId . ',' . $puRut . ');">' . '[' . $puId . '] ' . $puTi . '</a></h1>';
                                    $puAr.='<div class="entry-meta">';
                                        $puAr.='<span class="entry-categories">Etiquetas:'; 
                                          $puAr.='<div id="etiListView' . $cont . '"></div>';
                                            $puAr.='<input class="puIdToEti" type="hidden" value="' .$puId. '"/>';
                                        $puAr.='</span>';
                                    $puAr.='</div>';
                                    $puAr.='<p style="text-align : justify;">' . $puBa . '</p>';
                                    $puAr.='<a class="button read-more" style="cursor:pointer;" onclick="verPublicacion(' . $puId . ',' . $puRut . ');">Leer más</a>';
                                $puAr.='</div>';
                            $puAr.='</div>';
                        $puAr.='</div>';
                    $puAr.='</article>';

                    $sTrR.= '<PUBLICACION><![CDATA[' . $puAr . ']]></PUBLICACION>';
                    
                endwhile;

                $ultimos=explode('|',$puPa);    
                $dimension=sizeof($ultimos);
                $ultimo=$ultimos[$pa-1];
                               
                $paginacion.='<div class="row">';
                    $paginacion.='<div class="col-sm-12 col-lg-offset-1 col-sm-offset-0">';
                        $paginacion.='<div id="pagination">';
                            $paginacion.='<span>Page ' . $pa . ' of ' . $puPag . ' </span>';
                            for($i=1;$i<=$puPag;$i++){
                                $j=$i-1;
                                if($pa==$i){
                                    $paginacion.='<a class="current">' . $i . '</a>';
                                }else{
                                    $paginacion.='<a onclick="consultaPublicacionesRsm(' . $rut . ',0,' . $ultimos[$j] . ',' . $i .  ',0'. ')" style="cursor:pointer;">' . $i . '</a>';
                                }
                            }
                        $paginacion.='</div>';
                    $paginacion.='</div>';
                $paginacion.='</div>';
                                
                $paginacion.='<input type="hidden" id="txtPa" value="' . $pa . '">';
                $paginacion.='<input type="hidden" id="txtUlt" value="' . $ultimo . '">'; 
                
                $sTrR.= '<PAGINACION><![CDATA[' . $paginacion . ']]></PAGINACION>';  

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
                        $desErr='SIN PUBLICACIONES';
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
            //$strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            //$strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
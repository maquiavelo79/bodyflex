<?php
    session_start();
    header('Content-Type: text/plain');
    //header('Content-Type: text/xml');
    include("../model/conection.php");
     
    $email=$_REQUEST["email"];
    $password=$_REQUEST["password"];
    $sql='';
    $sTrR='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strXml='';
        
    sleep(1);
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="call SP_WAPP_LOGIN(:email, :password, @codErr);";  
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR,100);
            $stmt->bindParam(':password', $password, PDO::PARAM_STR,100);
            $stmt->execute();
            $num= $stmt->rowCount();
             
            if($num>0){
               
                $_SESSION['idPub']='';

                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    switch($r[0]){
                        case '2': //OK
                            $_SESSION['email']=$r[1];
                            $_SESSION['nombre']=$r[2];
                            $_SESSION['apellido']=$r[3];
                            $_SESSION['alias']=$r[4];
                            $_SESSION['rol']=$r[5];
                            $_SESSION['rut']=$r[6];
                            $_SESSION['dv']=$r[7];
                            $_SESSION['url']=$r[8];
                            $_SESSION['sesion']=1;
                            
                            $sTrR=1; 
                            break;
                        case '4': //OK
                            $_SESSION['email']=$r[1];
                            $_SESSION['nombre']=$r[2];
                            $_SESSION['apellido']=$r[3];
                            $_SESSION['alias']=$r[4];
                            $_SESSION['rol']=$r[5];
                            $_SESSION['rut']=$r[6];
                            $_SESSION['dv']=$r[7];
                            $_SESSION['url']=$r[8];
                            $_SESSION['sesion']=1;
                        
                            $sTrR=1; 
                            break;
                        case '6': //OK
                            $_SESSION['email']=$r[1];
                            $_SESSION['nombre']=$r[2];
                            $_SESSION['apellido']=$r[3];
                            $_SESSION['alias']=$r[4];
                            $_SESSION['rol']=$r[5];
                            $_SESSION['rut']=$r[6];
                            $_SESSION['dv']=$r[7];
                            $_SESSION['url']=$r[8];
                            $_SESSION['idPos']=$r[9]; //ID de postulación
                            $_SESSION['sesion']=1;
                            
                            $sTrR=1; 
                            break;
                        case '8':
                            $_SESSION['email']=$r[1];
                            $_SESSION['nombre']=$r[2];
                            $_SESSION['apellido']=$r[3];
                            $_SESSION['alias']=$r[4];
                            $_SESSION['rol']=$r[5];
                            $_SESSION['rut']='';
                            $_SESSION['dv']='';
                            $_SESSION['url']=$r[6];
                            $_SESSION['sesion']=1;
                            
                            $sTrR=1; 
                            break;
                        case '7': //INCORRECTO
                            $_SESSION['email']='';
                            $_SESSION['nombre']='';
                            $_SESSION['apellido']='';
                            $_SESSION['alias']='';
                            $_SESSION['rol']='';
                            $_SESSION['rut']='';
                            $_SESSION['dv']='';
                            $_SESSION['url']='';
                            $_SESSION['sesion']=0;
                           
                            $sTrR=0; 
                            break;
                        case '9':
                            $_SESSION['email']='';
                            $_SESSION['nombre']='';
                            $_SESSION['apellido']='';
                            $_SESSION['alias']='';
                            $_SESSION['rol']='';
                            $_SESSION['rut']='';
                            $_SESSION['dv']='';
                            $_SESSION['url']='';
                            $_SESSION['sesion']=0;
                           
                            $sTrR=0; 
                            break;
                        case '10':
                            $_SESSION['email']='';
                            $_SESSION['nombre']='';
                            $_SESSION['apellido']='';
                            $_SESSION['alias']='';
                            $_SESSION['rol']='';
                            $_SESSION['rut']='';
                            $_SESSION['dv']='';
                            $_SESSION['url']='';
                            $_SESSION['sesion']=0;
                           
                            $sTrR=0; 
                            break;

                    }
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
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

//    $xml = new SimpleXMLElement($strXml);
//    echo $xml->asXML();
    
    //echo  '<SALIDA><ERROR><CODERROR>0</CODERROR><DESERROR>CALLAMPA!</DESERROR></ERROR><DATOS><![CDATA[1]]></DATOS></SALIDA>';
    
//    $strXml.='<discografía_tool>';
//        $strXml.='<lp>';
//            $strXml.='<título>Opiate</título>';
//            $strXml.='<año>1992</año>';
//            $strXml.='<discográfica>Zoo/BMG/Volcano</discográfica>';
//            $strXml.='<temas>';
//                $strXml.='<tema>Sweat</tema>';
//                $strXml.='<tema>Hush</tema>';
//                $strXml.='<tema>Part of Me</tema>';
//                $strXml.='<tema>Cold and Ugly (live)</tema>';
//                $strXml.='<tema>Jerk-Off (live)</tema>';
//                $strXml.='<tema>Opiate</tema>';
//                $strXml.='<tema>The Gaping Lotus Experience</tema>';
//            $strXml.='</temas>';
//        $strXml.='</lp>';
//        $strXml.='<lp>';
//            $strXml.='<título>Undertow</título>';
//            $strXml.='<año>1993</año>';
//            $strXml.='<discográfica>Zoo/BMG/Volcano</discográfica>';
//            $strXml.='<temas>';
//                $strXml.='<tema>Intolerance</tema>';
//                $strXml.='<tema>Prison Sex</tema>';
//                $strXml.='<tema>Sober</tema>';
//                $strXml.='<tema>Bottom</tema>';
//                $strXml.='<tema>Crawl Away</tema>';
//                $strXml.='<tema>Swamp Song</tema>';
//                $strXml.='<tema>Undertow</tema>';
//                $strXml.='<tema>4º</tema>';
//                $strXml.='<tema>Flood</tema>';
//                $strXml.='<tema>Disgustipated</tema>';
//            $strXml.='</temas>';
//        $strXml.='</lp>';
//    $strXml.='</discografía_tool>';
//    echo $strXml;
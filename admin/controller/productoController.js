
jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    $('#icoNom').hide();
    $('#icoCon').hide();
    $('#icoMar').hide();
    $('#icoCat1').hide();
    $('#icoCat2').hide();
    $('#icoCat3').hide();
    $('#icoDes').hide();
    $('#icoEsp').hide();
    $('#icoPV').hide();
    $('#icoPc').hide();
    $('#icoUma').hide();
    $('#icoPVP').hide();
    $('#icoPreCom').hide();
    $('#icoRanPreVtaPro').hide();
    $('#icoRanPreVtaCli').hide();
    $('#icoMarcas').hide();
        
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX     
              
        //desHabilita_contenido();
        
        $('#divConPro').hide();
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',false);
        $('#btnProbar').prop('disabled',true);    
        //$('#btnPublicar').prop('disabled',true);       
    
        var sw=0;
        var pa=1;
        var ultimo=0;
    
        //AJAX
        var parametros = { 
                    "sw" : sw  ,
                    "ultimo" : ultimo   ,
                    "pa" : pa 
                };             
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){
                
                //alert('productoConsultaModel ' + xml);                
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                        
                    case '8':
                       
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                    
                    case '99':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                        $('#tbody').html('');
                       
                        desHabilitar();
                        
                        break; 

                    case '100':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                        $('#tbody').html('');
                       
                        desHabilitar();
                        
                        break; 

                    
                    case '98':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">SIN PRODUCTOS INGRESADOS</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                        $('#tbody').html('');
                        break;
                    
                    default:
                       
                        $("#botonera").show();
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                        $('#tbody').html(datos);
                        $('#idPag').html(paginacion);
                        break;
                        
                }
            }
        });
    
        var nivelCat = 1;
        var nivelCod = 0;
        var parametros2 = { 
            "nivelCat" : nivelCat
            , "nivelCod" : nivelCod
        };
        
        $.ajax({
                data:  parametros2,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoCsuCategoriaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){
                
                //alert('productoCsuCategoriaModel ' + xml);                
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                        
                    case '8':
                       
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                    
                    case '99':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                       
                        desHabilitar();
                        
                        break; 
                    
                    case '100':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                       
                        desHabilitar();
                        
                        break; 
                    
                    case '98':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        $("#botonera").show();     
                        break;
                    
                    default:
                       
                        $("#botonera").show();
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        $('#divCat1').html(datos);
                        $('#divCat1').trigger('liszt:updated');
                        break;
                }
            }
        });
      
        $.ajax({
                data:  parametros2,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/csuParametros.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                success:  function (xml){
                
                //alert('csuParametros ' + xml);                
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                        
                    case '8':
                       
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                    
                    case '99':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                       
                        desHabilitar();
                        
                        break; 
                    
                    case '100':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                       
                        desHabilitar();
                        
                        break; 
                    
                    case '98':
                        
                        //var msgVtaPre='<p style="text-align: center; font-size: 16px; font-family: sans-serif; color: #1b2426;">Los tipos de publicaciones se categorizan en:</p>';                  
                        //msgVtaPre+="<br>";
                        
                        var msgVtaPre='<ul style="text-align: left; font-size: 16px; font-family: sans-serif; color: #1b2426;">';
                            msgVtaPre+='<li><b style="font-weight: bold; font-size: 16px; color: blue; font-family: sans-serif;">IVA</b>: Verifique la existencia del % de impuesto.</li>';
                            msgVtaPre+='<li><b style="font-weight: bold; font-size: 16px; color: blue; font-family: sans-serif;">TRANSBANK</b>: Verifique la existencia del % de comisión.</li>';
                        msgVtaPre+='</ul>';
                        
                        swal({
                            title: '<span>Parámetros</span>',
                            type: 'warning',
                            html: msgVtaPre,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: 
                                '<span style="color: black; font-weight: bold;">&nbsp;Aceptar</span>'
                        })       
                            
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        $("#botonera").show();     
                        break;
                    
                    default:
                       
                        $("#botonera").show();
                        var iva = xmlDoc.getElementsByTagName('IVA')[0].childNodes[0].nodeValue;
                        var tra = xmlDoc.getElementsByTagName('TRA')[0].childNodes[0].nodeValue;
                        var tbk100=tra*100;
                        var tbk="(2) Calcula Monto Comisión TBK (" + tbk100 + "%)";
                        
                        $('#tbk').html(tbk);
                        $('#tbk2').html(tbk);
                        $('#iva').val(iva);
                        $('#tra').val(tra);
                        break;
                }
            }
        });
        
        $.ajax({
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/csuMarcas.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                success:  function (xml){
                
                //alert('csuMarcas ' + xml);                
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                        
                    case '8':
                       
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                    
                    case '99':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                       
                        desHabilitar();
                        
                        break; 
                    
                    case '100':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                       
                        desHabilitar();
                        
                        break; 
                    
                    case '98':
                           
                        var msg="<p style='color: black; font-size: 16px; font-family: sans-serif;'>Antes de ingresar productos debes ingresar las marcas.</p>";  
                        swal({
                            title: '<span>Marcas</span>',
                            type: 'warning',
                            html: msg,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: 
                                '<span style="color: black; font-weight: bold;">&nbsp;Aceptar</span>'
                        });      

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        $("#botonera").show();     
                        break;
                    
                    default:
                        
                        $("#botonera").show();
                        var strCmb = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $('#divMarcas').html(strCmb);
                        $('#divMarcas').trigger('liszt:updated');
                        break;
                        
                }
            }
        });
        
      
    
$('#btnGuardar').click(function(){
    
    //OBTENEMOS VALORES
    $('#conWarning').html('');
    
    if($('#cmbCon').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor establezca condición del producto.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        $('#icoCon').show();
        return false;
    }else{
        $('#icoCon').hide();
    } 

    if($('#txtProNom').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor ingrese nombre del producto.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        $('#icoNom').show();
        return false;
    }else{
        $('#icoNom').hide();
    } 
    
    if(ExisteObj('cmbCat1')){
        if($('#cmbCat1').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione 1°ra categoría del producto.</span></b>';
            msg+='</div>'; 
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#icoCat1').show();
            return false;
        }else{
            $('#icoCat1').hide();
        }
    }
    
    if (ExisteObj('cmbCat2')){
        if($('#cmbCat2').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione 2°da categoría del producto.</span></b>';
            msg+='</div>'; 
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#icoCat2').show();
            return false;
        }else{
            $('#icoCat2').hide();
        } 
    }
    
    if (ExisteObj('cmbCat3')){
        if($('#cmbCat3').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione 3°ra categoría del producto.</span></b>';
            msg+='</div>'; 
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#icoCat3').show();
            return false;
        }else{
            $('#icoCat3').hide();
        } 
    }

    if($('#proDes').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor agregue descripción breve del producto.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        $('#icoDes').show();
        return false;
    }else{
        $('#icoDes').hide();
    } 

    if($('#detPro').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor agregue descripción detallada del producto.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        $('#icoEsp').show();
        return false;
    }else{
        $('#icoEsp').hide();
    }
    
    if($('#txtProPreVta').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor ingrese precio de venta del producto.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        $('#icoPV').show();
        return false;
    }else{
        $('#icoPV').hide();
    } 
    
    if($('#txtPPreVta').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor ingrese precio de venta del producto para el profesional.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        $('#icoPV').show();
        return false;
    }else{
        $('#icoPV').hide();
    } 
    
    if($('#txtPorComPro').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor ingrese % comisión profesional.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        $('#icoPc').show();
        return false;
    }else{
        $('#icoPc').hide();
    } 
    
    if($('#txtProUma').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor ingrese unidades máximas a vender online.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        $('#icoUma').show();
        return false;
    }else{
        $('#icoUma').hide();
    } 
    
    if($('#cmbRanPre').val()=='0' || $('#cmbRanPre').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor ingrese rango de precio de venta.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        $('#icoRanPreVta').show();
        return false;
    }else{
        $('#icoRanPreVta').hide();
    } 
    
    if($('#cmbProMar').val()=='0' || $('#cmbProMar').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor seleccione marca del producto.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        $('#icoMarcas').show();
        return false;
    }else{
        $('#icoMarcas').hide();
    } 

    var cat2='';
    var cat3='';
    if(typeof $('#cmbCat2').val() != 'undefined'){
        cat2=$('#cmbCat2').val();
    }
    if(typeof $('#cmbCat3').val() != 'undefined'){
        cat3=$('#cmbCat3').val();
    }
         
    if($('#txtPreAntPub').val()==''){
        $('#mtoPreAntPub').val(0);
    }
    if($('#txtPreAntProX').val()==''){
        $('#mtoPreAntPro').val(0);
    }
    
    var parametros = { 
        "proId" : ($('#txtProId').val()!=''?$('#txtProId').val():0)
        , "cmbCon" : $('#cmbCon').val()
        , "proNom" : $('#txtProNom').val()
        
        , "proPreVta" : $('#mtoPreVta').val()       //PRECIO VENTA
        , "proIva" : $('#mtoProIva').val()          //IVA
        , "proPreNet" : $('#mtoPreNet').val()       //PRECIO NETO
        , "comTra" : $('#mtoComTra').val()          //MTO COMISIÓN TRANSBANK
        , "proComPro" : $('#txtPorComPro').val()    //% COMISIÓN PROFESIONAL
        , "monComPro" : $('#mtoMtoPro').val()       //MTO COMISIÓN PROFESIONAL
        , "monUti" : $('#mtoMtoUti').val()          //MTO UTILIDAD por venta por medio del profesional
    
        , "proDes" : $('#proDes').val()
        , "cmbCat1" : $('#cmbCat1').val()
        , "cmbCat2" : cat2 
        , "cmbCat3" : cat3
        , "detPro" : $('#detPro').val()
        , "rut" : $('#rut').val()                   
        , "marca" : $('#cmbProMar').val()       //CODIGO MARCA
        , "unidades" : $('#txtProUma').val()
        
        , "proPPreVta" : $('#mtoPVta').val()    //Precio de venta al profesional
        , "proPIva" : $('#mtoPIva').val()       //IVA Precio de venta al profesional
        , "proPPreNet" : $('#mtoPNet').val()    //Precio neto profesional
        , "comTra2" : $('#mtoComTra2').val()    //Comisión Transbank por venta al profesional
        , "monUti2" : $('#mtoMUti2').val()      //Utilidad por venta al profesional
        , "monUti3" : $('#mtoMUti3').val()      //Utilidad por venta al suscriptor
        , "preCom" : $('#mtoPreCom').val()      //Precio Compra
        
        , "mtoPreAntPub" : $('#mtoPreAntPub').val()   //Precio venta anterior al publico
        , "mtoPreAntPro" : $('#mtoPreAntPro').val()   //Precio venta anterior al profesional
              
        , "cmbRanPrePro" : $('#cmbRanPrePro').val()   //Codigo del Rango de precio
        , "cmbRanPreCli" : $('#cmbRanPreCli').val()   //Codigo del Rango de precio
        
    };

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoIngModModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
            $("#botonera").hide();
        },
        success:  function (xml){

            //alert('productoIngModModel ' + xml);                

            $("#espera").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

//                    $("#botonera").show();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    desHabilitar();
                    break; 

                case '8':

//                    $("#botonera").show();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    desHabilitar();
                    break; 

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

//                    $("#botonera").show();

                    desHabilitar();
                    break; 

                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

//                    $("#botonera").show();

                    desHabilitar();
                    break;     

                default:

                    var id = xmlDoc.getElementsByTagName('IDENTIFICADOR')[0].childNodes[0].nodeValue;
                    var op = xmlDoc.getElementsByTagName('OPERACION')[0].childNodes[0].nodeValue;

                    $('#txtProId').val(id);
                    $('#txtProId').trigger('liszt:updated');
                    
                    var pa = $('#txtPa').val();
                    var ul = $('#txtUlt').val();
                    
                    //Si es un nuevo producto este será el ultimo en la paginación
                    //Esto se hace para que la consulta posterior incluya al nuevo producto
                    if(op=="1"){
                        ul=id;
                    }
                    
                    consultaProductos(0, ul, pa);
                    
                    var msg='<div style="text-align: center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                    msg+='</div>';
                    
                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                    setTimeout(function() {$('#conWarning').hide();}, 2000); 

                    pintaRegistroProducto();
                    habilitar();
                    habilitarContenido();

                    $("#botonera").show();    
                    $('#divConPro').show();      
                    break;
            }
        }
    });
    
});


$('#btnEditar').live('click', function() { 

    //OBTENEMOS VALORES
    $('#conWarning').html('');
    
    var parametros = { 
        "proId" : $('#txtProId').val()
        , "opc": 0
    };

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoPublicarModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
        beforeSend: function(){
            
            $("#espera").show();
            $("#botonera").hide();
            
        },
        success:  function (xml){

            //alert(xml);                

            $("#espera").hide();
            $("#botonera").show();
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    desHabilitar();
                    break; 

                case '8':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    desHabilitar();
                    break; 

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    //habilitar();

                    break; 

                default:
                    
                    var rut = $('#rut').val();
                    var pa = $('#txtPa').val();
                    var ul = $('#txtUlt').val();
                    $('#txtProEst').val('INGRESADO');
                    
                    consultaProductos(0, ul, pa);
                    
                    habilitar();
                    habilitarContenido();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: #000;">Ahora es posible modificar!.</span></b>';
                    msg+='</div>';

                    $('#divConPro').show();
                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                    
                    break;
                    
            }
        }
    });
});  
 
$('#tblProducto').on('click', 'tbody tr', function(event){

    var proCat1=0;
    var proCat2=0;
    var proCat3=0;
            
    $('#conWarning').html('');    
                
    //Obtenemos valores de campos    
        $(this).children("td").each(function(index2){
            switch (index2){
                case 0://ID
                        pId = $(this).text();
                        break;
                case 1://NOMBRE
                        pNom = $(this).text();
                        break;
                case 2://MARCA
                        pMar = $(this).text();
                        break;
                case 3://ESTADO
                        pEst= $(this).text(); 
                        break;          
                case 4://BFX: PRECIO
                        pBru = $(this).text();
                        break;
                case 5://BFX: IVA
                        pIva= $(this).text(); 
                        break;    
                case 6://BFX: NETO
                        pNet= $(this).text(); 
                        break;  
                case 7://BFX: COMISIÓN TBK
                        pCom= $(this).text(); 
                        break;   
                case 8://BFX: UTILIDAD
                        uti3= $(this).text(); 
                        break;   
                case 9://PRO: PRECIO
                        pvp= $(this).text(); 
                        break;             
                case 10://PRO: IVA
                    ivp= $(this).text(); 
                    break;             
                case 11://PRO: NETO
                    pnp= $(this).text(); 
                    break;             
                case 12://PRO: COMISIÓN TBK
                    ctp= $(this).text(); 
                    break;             
                case 13://PRO: UTILIDAD
                    uti2= $(this).text(); 
                    break;     
                case 14://CAT: PORCENTAJE COMISIÓN
                        pPor= $(this).text(); 
                        break;  
                case 15://CAT: MONTO COMISIÓN
                        pMto= $(this).text(); 
                        break;   
                case 16://CAT: UTILIDAD
                        pUti= $(this).text(); 
                        break;     
                case 17://PRODUCTO: MAXIMO UNIDADES
                        pUn= $(this).text(); 
                        break;      
                    case 18: //PRODUCTO: DESCRIPCIÓN
                        pDes= $(this).text(); 
                        break;    
                    case 19://PRODUCTO: CATEGORIA1
                        pCat1= $(this).text(); 
                        break; 
                    case 20://PRODUCTO: CATEGORIA2
                        pCat2= $(this).text(); 
                        break;     
                    case 21://PRODUCTO: CATEGORIA3
                        pCat3= $(this).html();
                        break;            
                    case 22://PRODUCTO: DESCRIPCIÓN LARGA
                        pDesLar= $(this).html();
                        break;                                        
                    case 24://PRODUCTO: PRECIO DE COMPRA
                        pc= $(this).text(); 
                        break;     
                    case 25://PRODUCTO: PRECIO ANTERIOR PARA PUBLICO
                        pPVAPU= $(this).text(); 
                        break;     
                    case 26://PRODUCTO: PRECIO ANTERIOR PARA PROFESIONALES
                        pPVAPP= $(this).text(); 
                        break;  
                    case 27://PRODUCTO: RANGO PRECIO PROFESIONALES
                        pCodRAP= $(this).text(); 
                        break; 
                    case 28://PRODUCTO: RANGO PRECIO PUBLICO
                        pCodRAC= $(this).text(); 
                        break; 
                    case 29:// CODIGO DE MARCA 
                        pCodMar= $(this).text(); 
                        break; 
                    case 30: //PRODUCTO: CONDICIÓN
                        pCon= $(this).text();
                        break;     
                        
                // <-- OCULTOS -->  
                        
            }
        });

        $('#txtPreAntPub').val(pPVAPU);
        $('#txtPreAntProX').val(pPVAPP);

        //SETEO EN VISTA
        $('#txtProId').val(pId);
        $('#txtProNom').val(pNom);
        $('#txtProEst').val(pEst);
        $('#cmbCon').val(pCon);
        $('#txtProPreVta').val(pBru);
        $('#txtProPreVta2').val(pBru);
        $('#txtProMar').val(pMar);    
        $('#proDes').val(pDes);   
        $('#txtProIva').val(pIva);
        $('#txtProPreNet').val(pNet);
        $('#txtProPreNet2').val(pNet);
        $('#txtComTra').val(pCom);
        $('#txtComTra2').val(pCom);
        $('#txtPorComPro').val(pPor);
        $('#txtMonComPro').val(pMto);
        $('#txtMonUti').val(pUti);
        $('#txtProUma').val(pUn);
        
        //alert('pCodRAP, pCodRAC: ' + pCodRAP +', '+pCodRAC);
        
        if(pCodRAP!=0){
            var cmb = document.getElementById("cmbRanPrePro"); 
            for (var i = 0; i < cmb.length; i++) {
                var opt = cmb[i];
                if(pCodRAP == opt.value){
                   $("#cmbRanPrePro").prop('selectedIndex',i);
                   $('#cmbRanPrePro').trigger('liszt:updated');
                   break;
                }
            }
        }else{
            $("#cmbRanPrePro").prop('selectedIndex',0);
        }    
        
        if(pCodRAC!=0){
            var cmb = document.getElementById("cmbRanPreCli"); 
            for (var i = 0; i < cmb.length; i++) {
                var opt = cmb[i];
                if(pCodRAC == opt.value){
                   $("#cmbRanPreCli").prop('selectedIndex',i);
                   $('#cmbRanPreCli').trigger('liszt:updated');
                   break;
                }
            }
        }else{
            $("#cmbRanPreCli").prop('selectedIndex',0);
        }    
        
        if(pCodMar!=0){
            var cmb = document.getElementById("cmbProMar"); 
            for (var i = 0; i < cmb.length; i++) {
                var opt = cmb[i];
                if(pCodMar == opt.value){
                   $("#cmbProMar").prop('selectedIndex',i);
                   $('#cmbProMar').trigger('liszt:updated');
                   break;
                }
            }
        }else{
            $("#cmbProMar").prop('selectedIndex',0);
        }    
                
        //VTA PROFESIONAL
        $('#txtPPreVta').val(pvp);
        $('#txtPPreVta2').val(pvp);
        $('#txtPIva').val(ivp);
        $('#txtPPreNet').val(pnp);
        $('#txtPPreNet2').val(pnp);
        $('#txtCTra').val(ctp);
        $('#txtCTra2').val(ctp);
        $('#txtMonUti2').val(uti2);
        $('#txtProUtiPro').val(uti2);
        $('#txtMonUti3').val(uti3);
        $('#txtProUtiBfx').val(uti3);
        $('#txtPreCom').val(pc);
        
        //SETEO VALOTRES OCULTOS
        $('#mtoPreVta').val(pBru.replace("$", "").replace(".",""));
        $('#mtoProIva').val(pIva.replace("$", "").replace(".",""));
        $('#mtoPreNet').val(pNet.replace("$", "").replace(".",""));
        $('#mtoComTra').val(pCom.replace("$", "").replace(".",""));
        $('#mtoMtoPro').val(pMto.replace("$", "").replace(".",""));
        $('#mtoMtoUti').val(pUti.replace("$", "").replace(".",""));
        $('#mtoPreCom').val(pc.replace("$", "").replace(".",""));
        
        $('#mtoPreAntPub').val(pPVAPU.replace("$", "").replace(".",""));
        $('#mtoPreAntPro').val(pPVAPP.replace("$", "").replace(".",""));
        
        $('#mtoPVta').val(pvp.replace("$", "").replace(".",""));
        $('#mtoPIva').val(ivp.replace("$", "").replace(".",""));
        $('#mtoPNet').val(pnp.replace("$", "").replace(".",""));
        $('#mtoComTra2').val(ctp.replace("$", "").replace(".",""));
        $('#mtoMUti2').val(uti2.replace("$", "").replace(".",""));
        $('#mtoMUti3').val(uti3.replace("$", "").replace(".",""));
        
//        alert('pCat1 ' + pCat1);
//        alert('pCat2 ' + pCat2);
//        alert('pCat3 ' + pCat3);
        
        //Setamos Categorias
            //combo categoria 1 siempre existe
        if(pCat1!=0 && typeof pCat1 != 'undefined'){

            $('#cmbCat1').val(pCat1);
            $('#cmbCat1').change();
            $('#cmbCat1').trigger('liszt:updated');

            //alert('pCat2 ' + pCat2);

            if(pCat2!=0 && typeof pCat2 != 'undefined'){
              
                if(ExisteObj('cmbCat2')){
                    //alert('entro en IF cat2');
                    $("#cmbCat2 option[value="+pCat2+"]").attr("selected",true);
                    $('#cmbCat2').trigger('liszt:updated');
                }else{
                    getSubCat(2, pCat1, pCat2);
                }

                if(pCat3!=0 && typeof pCat3 != 'undefined'){
                    if(ExisteObj('cmbCat3')){
                        //alert('entro en IF cat3');
                        $("#cmbCat3 option[value="+pCat3+"]").attr("selected",true);
                        $('#cmbCat3').trigger('liszt:updated');
                    }else{
                        getSubCat(3, pCat2, pCat3);
                    }
                }
            }
        }
        
        var boton = '<i style="margin-top: 100px;"class="fa fa-picture-o fa-4x"></i>';;        
        $('#right').html(boton);
        
        //Limpiamos ID Google Drive
        $('#idDrive').val('');

        //Obtener descripción larga    
        $('#detPro').cleditor()[0].clear();
        $('#detPro').cleditor()[0].focus();
        $('#detPro').cleditor()[0].execCommand('inserthtml',pDesLar); 

        //Obtenemos el contenido asociado
        $('#listConPro').html('');
        $('#warningConAso').html('');
        
    //Seccion Contenido    
        if(pEst=='INGRESADO'){
            habilitar();
            habilitarContenido();
        }else{
            desHabilitar();
            desHabilitarContenido();                      
        }
        
        var parametros = {
            "proId" : $('#txtProId').val()
        };  
        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoConsultaContenidoModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function (xml){     

                //alert('productoConsultaContenidoModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    default:
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $('#listConPro').html(datos);

                }              
            }
        }); 
        
        //Pintamos Fila    
        pintaRegistroProducto();
        $('#divConPro').show();
        $('#divPublicar').trigger("liszt:updated");
        
        

});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var nom = $('#txtProNom').val();
            
        strModal+='<div class="modal-header">';
            strModal+='<h3><i class="icon-warning-sign"></i>&nbsp;Eliminar Producto</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar producto <b>' + nom + '</b>?<br>';
            strModal+='<h4 style="font-size: 12px; font-weight: bold;">Se eliminarán todas las fotografías y videos asociados.</h4></p>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
            strModal+='<a id="btnEliPro" style="border-color: silver; background-color: #FFCC00; color: black;" class="btn btn-primary">Eliminar</a>';
        strModal+='</div>';
    
    $('#myModal').html(strModal);
   
});

$(document).on("click", "#btnEliPro", function(event){
    
    var proId = $('#txtProId').val();
   
    //Div de Carga
    var strLoad='<div id="espera3" class="modal-body"></div>';

    //AJAX
    var parametros = {"proId" : proId};            
       
    //escondemos mensajería
    $('#conWarning').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoEliminaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (xml){     
            
            //alert('xml ' + xml);
            
            $("#modalBody").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            if(codErr==0){
                 
                var sw=0; 
                $('#txtPa').val(1);     
                $('#txtUlt').val(0);     
                     
                //AJAX
                var parametros = { "rut" : rut ,"sw" : sw  ,"ultimo" : $('#txtUlt').val(), "pa" : $('#txtPa').val() };         
                
                $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoConsultaModel.php",
                    type:  'post',
                    datetype: 'xml',
                    beforeSend: function(){
                        $("#espera").show();
                        $("#botonera").hide();
                    },
                    success:  function (xml){

                        //alert(xml);                

                        $("#espera").hide();
                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                        switch(codErr){
                            case '9':

                                $("#botonera").show();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                desHabilitar();
                                break; 

                            case '8':

                                $("#botonera").show();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                desHabilitar();
                                break; 

                            case '99':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                $("#botonera").show();
                                $('#tbody').html('');

                                //habilitar();

                                break; 

                            case '98':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                $("#divConPro").hide(); //escondemos sección contenido
                                $("#botonera").show();
                                $('#tbody').html('');

                                
                                break;

                            default:

                                $("#divConPro").hide(); //escondemos sección contenido
                                $("#botonera").show();
                                var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                                
                                var boton = '<i style="margin-top: 100px;"class="fa fa-picture-o fa-4x"></i>';;        
                                $('#right').html(boton);
                                
                                $('#tbody').html(datos);
                                $('#idPag').html(paginacion);
                                break;

                        }
                    }
                });
     
                var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                $("#modalBody").html(msg);
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 750);    
                
                limpiar();
                
            }else{

                var msg='<div style="text-align:center;" class="alert alert-block">';
                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                msg+='</div>';

                $("#modalBody").html(msg);
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000);
                
                $('#conWarning').html(msg);
                $('#conWarning').show();
                
            }                    
        }
    });
    
});

    $('#btnLimpiar').click(function(){

        //alert('btnLimpiar');

        $('#txtProPreNet2').val('');   
        $('#txtComTra2').val('');
        $('#txtProUtiBfx').val('');
        
        $('#txtPPreNet2').val('');   
        $('#txtCTra2').val('');
        $('#txtProUtiPro').val('');
        
        $('#txtProId').val();
        $('#txtProEst').val('NUEVA');   
        $('#cmbCon').val('');   
        $('#txtProNom').val('');   
        $('#txtProPre').val('');
        $('#cmbCat1').val('');
        $('#txtProUma').val('');
        
        //PROFESIONAL
        $('#txtPPreVta').val('');
        $('#txtPIva').val('');
        $('#txtPPreNet').val('');
        $('#txtPPreVta2').val('');
        $('#txtCTra').val('');
                
        $('#txtPreCom').val('');        
        $('#txtProPreVta').val('');
        $('#txtProPreVta2').val('');
        $('#txtProPreNet').val('');
        $('#txtProIva').val('');
        $('#txtComTra').val('');
        $('#txtPorComPro').val('');
        $('#txtMonComPro').val('');
        $('#txtMonUti').val('');
        $('#txtMonUti2').val('');
        $('#txtMonUti3').val('');
        
        $('#divCat2').html('');
        $('#divCat2').hide();
        $('#divCat3').html('');
        $('#divCat3').hide();
        $('#proDes').val('');
        
        $('#txtProMar').val('');   
        $('#txtProPreRef').val(''); 
        $('#detPro').cleditor()[0].clear();
        
        //habilitamos boton modificar, eliminar y cancelar
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',false);
        $('#btnProbar').prop('disabled',true);    
        //$('#btnPublicar').prop('disabled',true);    
        
        $('#mtoPreAntPub').val('');
        $('#mtoPreAntPro').val('');
        $('#txtPreAntPub').val('');
        $('#txtPreAntProX').val('');
            
        $('#conWarning').html('');
    
        //grilla
        $('#tblProducto tr').each(function(){            
            $(this).removeClass('highlight'); 
        });
        
        $('#a-table-con tr').each(function(){
            $(this).css('background','white');
            $(this).css('color','black');
        });    
                
        $('#txtIdConPro').val('');
        $('#cmbTipConPro').val('');
        $('#txtIdDrivePro').val(' ');

        var conTip='';
        var cmb = document.getElementById("cmbTipConPro"); 
        for (var i = 0; i < cmb.length; i++) {
            //  Aca haces referencia al "option" actual
            var opt = cmb[i];
            // Haces lo que te de la gana aca
            if(conTip == opt.value){
               $("#cmbTipConPro").prop('selectedIndex',i);
               $('#cmbTipConPro').trigger('liszt:updated');
               break;
            }
        }
        
        $("#cmbRanPrePro").prop('selectedIndex',0);
        $("#cmbRanPreCli").prop('selectedIndex',0);
        $("#cmbProMar").prop('selectedIndex',0);

        $('#divPublicar').html('');
        $("#warningConAso").html('');
        $("#listConPro").html('');

        //elementos formulario
            $('#idDrive').val('');
            $('#mtoPreVta').val('');
            $('#mtoProIva').val('');
            $('#mtoPreNet').val('');
            $('#mtoComTra').val('');
            $('#mtoMtoPro').val('');
            $('#mtoMtoUti').val('');
            $('#mtoPVta').val('');
            $('#mtoPIva').val('');
            $('#mtoPNet').val('');
            $('#mtoComTra2').val('');
            $('#mtoMUti2').val('');
            $('#mtoMUti3').val('');
            $('#mtoPreCom').val('');
            $('#mtoPreAntPub').val('');
            $('#mtoPreAntPro').val('');
        //elementos formulario
        
        //habilitar();
        $("#divConPro").hide();
            
    });

    $('#btnProbar').click(function(){
    
        var proId = $('#txtProId').val();
        var parametros = {"proId":proId};         
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoConsultaContenidoModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('productoConsultaContenidoModel ' + xml);                

                $("#espera").hide();
                $("#botonera").show();
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();

                        desHabilitar();
                        desHabilita_contenido();
                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();

                        desHabilitar();
                        desHabilita_contenido();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();

                        $('#tbody').html('');

                        //habilitar();
                        //desHabilita_contenido();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-error">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">Favor asocie imagen y/o video al producto antes de probar!.</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        //habilitar();
                        //habilita_contenido();
                        
                        break;

                    default:
        
                        var URLdomain   = window.location.host;
                        var URLprotocol = window.location.protocol;
                        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/view/productosProfesional.php";
                        var rutPro = $('#rut').val();
                        var id = $('#txtProId').val();

                        var form = $('<form action="' + urlPerfil + '" method="post" target="_blank">' +
                          '<input type="hidden" id="rutPro" name="rutPro" value="' + rutPro + '" />' +
                          '<input type="hidden" id="id" name="id" value="' + id + '" />' +
                          '<input type="hidden" id="prueba" name="prueba" value="1" />' +
                          '</form>');
                        $('body').append(form);
                        form.submit();
        
                    break;

                }
            }
        });
    
    
    });

});


function getSubCat(catBsq, catPad, valor){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    var nivelCat = catBsq; //CATEGORIA BUSCADA
    var nivelCod = catPad; //CATEGORIA PADRE
    
    //alert('nivelCat ' + nivelCat);
    //alert('nivelCod ' + nivelCod);
    
    if(nivelCod!=0){
    
        var parametros2 = { 
            "nivelCat" : nivelCat
            , "nivelCod" : nivelCod
        };

        $.ajax({
                data:  parametros2,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoCsuCategoriaModel.php",
                type:  'post',
                datetype: 'xml',
                async: false, //SIEMPRE SINCRONO, DE LO CONRARIO GENERA PROBLEMAS EN CMB CAT 2
            success:  function (xml){

                //alert('productoCsuCategoriaModel ' + xml);                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();

                        desHabilitar();
                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();

                        desHabilitar();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break; 

                    case '98':
                        // PARA ESTE ESCENARIO NO MOSTRAMOS NADA, SOLO ESCONDEMOS SI APLICA    
                        switch(nivelCat){
                            case 2:
                                $('#divCat2').html('');
                                $('#divCat2').hide();
                                $('#divCat2').trigger('liszt:updated');
                                $('#divCat3').html('');
                                $('#divCat3').hide();
                                $('#divCat3').trigger('liszt:updated');
                                break;    
                            case 3:
                                $('#divCat3').html('');
                                $('#divCat3').hide();
                                $('#divCat3').trigger('liszt:updated');
                                break;        
                        }
                        $("#botonera").show();
                        break;
                    default:

                        $("#botonera").show();
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                        if (nivelCat==2){ 
                            
                            $('#divCat2').html(datos);
                            $('#divCat2').show();
                            $('#divCat2').trigger('liszt:updated');
                            
                            if(valor!=0){
                                $("#cmbCat2 option").each(function(){
                                    if(valor==$(this).val()){
                                        $("#cmbCat2 option[value="+valor+"]").attr("selected",true);
                                        $('#cmbCat2').trigger('liszt:updated');
                                    }
                                });
                            }
                            
                        }else{
                            
                            $('#divCat3').html(datos);
                            $('#divCat3').show();
                            $('#divCat3').trigger('liszt:updated');
                            
                            if(valor!=0){
                                $("#cmbCat3 option").each(function(){
                                    if(valor==$(this).val()){
                                        $("#cmbCat3 option[value="+valor+"]").attr("selected",true);
                                        $('#cmbCat3').trigger('liszt:updated');
                                    }
                                });
                            }
                        }
                        break;
                }
            }
        });
    }else{
        
        switch(nivelCat){
            case 2:
           
                $('#divCat2').html('');
                $('#divCat2').hide();
                $('#divCat2').trigger('liszt:updated');

                $('#divCat3').html('');
                $('#divCat3').hide();
                $('#divCat3').trigger('liszt:updated');   
                    
                break;
            case 3:
  
                $('#divCat3').html('');
                $('#divCat3').hide();
                $('#divCat3').trigger('liszt:updated');              

                break;
        }
        
    }
}

function desHabilitar(){
    
//    //deshabilitamos entradas    
    $('#cmbCon').prop('disabled',true);   
    $('#txtProNom').prop('disabled',true);   
    $('#txtProPre').prop('disabled',true);   
    $('#cmbCat1').prop('disabled',true);   
    $('#cmbCat2').prop('disabled',true);   
    $('#cmbCat3').prop('disabled',true);   
    $('#proDes').prop('disabled',true); 
    //$('#detPro').cleditor()[0].disable(true);
            
        $('#txtProMar').prop('disabled',true);
        $('#txtProPreRef').prop('disabled',true);

//    //deshabilitamos botones
    $('#btnGuardar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
    $('#btnLimpiar').prop('disabled',false); 
    $('#btnProbar').prop('disabled',true);
    
}

function habilitar(){

    $('#cmbCon').prop('disabled',false);   
    $('#txtProNom').prop('disabled',false);   
    $('#txtProPre').prop('disabled',false);   
    $('#cmbCat1').prop('disabled',false);   
    $('#cmbCat2').prop('disabled',false);   
    $('#cmbCat3').prop('disabled',false);   
    $('#proDes').prop('disabled',false);   
    //$('#detPro').cleditor()[0].disable(false).refresh();

        $('#txtProMar').prop('disabled',false);
        $('#txtProPreRef').prop('disabled',false);

    //deshabilitamos botones
    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
    $('#btnLimpiar').prop('disabled',false);
    $('#btnProbar').prop('disabled',false);
    
}

function desHabilitarContenido(){

    //deshabilitamos entradas    
    $('#cmbTipConPro').prop('disabled',true);   
    $('#txtIdDrivePro').prop('disabled',true);   

    //tabla contenido
    $("#divConPro").hide();
    
    //deshabilitamos botones
    $('#btnGuardarConPro').prop('disabled',true);
    $('#btnEliminarConPro').prop('disabled',true);
    $('#btnLimpiarConPro').prop('disabled',true);
    
    var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';
    $('#right').html(botones);
       
}



function habilitarBtnProbar(){
    $('#btnProbar').prop('disabled',false);
}
//function habilitarBtnPublicar(){
//    $('#btnPublicar').prop('disabled',false);
//}
function desHabilitarBtnProbar(){
    $('#btnProbar').prop('disabled',true);
}
//function desHabilitarBtnPublicar(){
//    $('#btnPublicar').prop('disabled',true);
//}

function habilitarContenido(){

//    //deshabilitamos entradas    
    $('#cmbTipConPro').prop('disabled',false);   
    $('#txtIdDrivePro').prop('disabled',false);   

    //tabla contenido
    //$("#divConPro").show();
    
    //deshabilitamos botones
    $('#btnGuardarConPro').prop('disabled',false);
    $('#btnEliminarConPro').prop('disabled',false);
    $('#btnLimpiarConPro').prop('disabled',false);

}

function limpiar(){
    //limpiamos entradas  
        
        $('#txtProPreNet2').val('');   
        $('#txtComTra2').val('');
        $('#txtProUtiBfx').val('');
        
        $('#txtPPreNet2').val('');   
        $('#txtCTra2').val('');
        $('#txtProUtiPro').val('');
        
        $('#txtPreAntPub').val('');
        $('#txtPreAntProX').val('');
        
        $('#txtProId').val(0);
        $('#txtProEst').val('NUEVA');   
        $('#cmbCon').val('');   
        $('#txtProNom').val('');   
        $('#txtProPre').val('');
        $('#cmbCat1').val('');
        $('#txtProUma').val('');
        
        //PROFESIONAL
        $('#txtPPreVta').val('');
        $('#txtPIva').val('');
        $('#txtPPreNet').val('');
        $('#txtPPreVta2').val('');
        $('#txtCTra').val('');
        
        $('#txtPreCom').val(''); 
        $('#txtProPreVta').val('');
        $('#txtProPreVta2').val('');
        $('#txtProPreNet').val('');
        $('#txtProIva').val('');
        $('#txtComTra').val('');
        $('#txtPorComPro').val('');
        $('#txtMonComPro').val('');
        $('#txtMonUti').val('');
        $('#txtMonUti2').val('');
        $('#txtMonUti3').val('');
        
        $('#txtProMar').val('');
        $('#txtProPreRef').val('');
        
        $('#divCat2').html('');
        $('#divCat2').hide();
        $('#divCat3').html('');
        $('#divCat3').hide();
        $('#proDes').val('');
               
        $('#detPro').cleditor()[0].clear();
        
        //habilitamos boton modificar, eliminar y cancelar
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);
        $('#btnProbar').prop('disabled',true);    
        //$('#btnPublicar').prop('disabled',true);    
        
        $('#conWarning').html('');
    
        //grilla
        $('#tblProducto tr').each(function(){            
            $(this).removeClass('highlight'); 
        });
        
        $('#a-table-con tr').each(function(){
            $(this).css('background','white');
            $(this).css('color','black');
        });    
                
        $('#txtIdConPro').val('0');
        $('#cmbTipConPro').val('');
        $('#txtIdDrivePro').val(' ');

        var conTip='';
        var cmb = document.getElementById("cmbTipConPro"); 
        for (var i = 0; i < cmb.length; i++) {
            //  Aca haces referencia al "option" actual
            var opt = cmb[i];
            // Haces lo que te de la gana aca
            if(conTip == opt.value){
               $("#cmbTipConPro").prop('selectedIndex',i);
               $('#cmbTipConPro').trigger('liszt:updated');
               break;
            }
        }
        
        $("#cmbRanPrePro").prop('selectedIndex',0);
        $("#cmbRanPreCli").prop('selectedIndex',0);
        $("#cmbProMar").prop('selectedIndex',0);
        
        $("#warningConAso").html('');
        $("#listConPro").html('');
    
        //elementos formulario
            $('#idDrive').val('');
            $('#mtoPreVta').val('');
            $('#mtoProIva').val('');
            $('#mtoPreNet').val('');
            $('#mtoComTra').val('');
            $('#mtoMtoPro').val('');
            $('#mtoMtoUti').val('');
            $('#mtoPVta').val('');
            $('#mtoPIva').val('');
            $('#mtoPNet').val('');
            $('#mtoComTra2').val('');
            $('#mtoMUti2').val('');
            $('#mtoMUti3').val('');
            $('#mtoPreCom').val('');
            $('#mtoPreAntPub').val('');
            $('#mtoPreAntPro').val('');
        //elementos formulario
    
}

function ExisteObj(sObjeto){
    return(document.all(sObjeto) != null);
}

function consultaProductos(sw,ultimo,pa){

    //alert('ultimo ' + ultimo);
    //alert('pa ' + pa);

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    var parametros = { "sw" : sw, "ultimo" : ultimo, "pa" : pa };             
        
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            success:  function (xml){
                
                //alert('productoConsultaModel ' + xml);                
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
//                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                        
                    case '8':
                       
//                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                    
                    case '99':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
//                        $("#botonera").show();
                        $('#tbody').html('');
                       
                        //habilitar();
                        
                        break; 
                    
                    case '98':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
//                        $("#botonera").show();
                        $('#tbody').html('');
                      
                        //habilitar();
                        break;
                    
                    default:
                       
                        $("#botonera").show();
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;

                        $('#tbody').html(datos);
                        $('#idPag').html(paginacion);
                        
                        
                        //PINTAMOS REGISTRO ACTUAL
                            var puID=0;
                            $('#tblProducto tr').each(function(){
                                var sw=0;
                                $(this).children("td").each(function(index){
                                    switch (index){
                                        case 0:	
                                            puID = $(this).text();                    
                                            if(puID==$('#txtProId').val()){
                                                sw=1;
                                            }
                                            break;  
                                    }
                                });
                                if(sw==1){
                                    //alert('pintaRegistroProducto: PINTA');
                                    $(this).addClass('highlight').siblings().removeClass('highlight'); 
                                }    
                            });
                        //PINTAMOS REGISTRO ACTUAL
                        break;
                        
                }
            }
        });
        
};

function validaImagenesProducto(idPro){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    //alert('validaImagenesProducto ' + idPro);

    var pcodErr;
    var pdesErr;
    var parametros = {"idPro" : idPro};             
        
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoVerificaImgModel.php",
                type:  'post',
                async:  false, 
                datetype: 'xml',
                success:  function (xml){
                
                //alert(xml);                

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                //alert(codErr + '|' + desErr);
                
                pcodErr=codErr;
                pdesErr=desErr;                
            }
        });
        
        //alert(pcodErr + '|' + pdesErr);
        return pcodErr+'|'+pdesErr;
        
    };
    
    function pintaRegistroProducto(){  
    //alert('pintaRegistroProducto');
    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblProducto tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#txtProId').val()){
                        sw=1;
                    }
                    break;  
            }
        });
        if(sw==1){
            //alert('pintaRegistroProducto: PINTA');
            $(this).addClass('highlight').siblings().removeClass('highlight'); 
        }    
    });
    //return true;
 }
 
$("#txtPreCom").keyup(function() {

     this.value = (this.value + '').replace(/[^0-9]/g, '');
    if(this.value.length>0){

        var precio=this.value;               
        $('#mtoPreCom').val($('#txtPreCom').val());
        $('#txtPreCom').val(formatNumber.new($('#txtPreCom').val(), "$"));
        
    }else{
        
        $('#txtPreCom').val('');       
        $('#mtoPreCom').val('');
        
    }        
});
  
$("#txtProPreVta").keyup(function() {

    this.value = (this.value + '').replace(/[^0-9]/g, '');
    if(this.value.length>0){

        $("#txtPorComPro").prop('disabled',false);
        var precio=this.value;
        var iva=$('#iva').val();
        var tra=$('#tra').val();
        $('#txtProPreVta2').val(precio);
        
        //Redondeamos IVA
        iva = Math.round((precio*iva) * Math.pow(10, 0)) / Math.pow(10, 0);
        $('#txtProIva').val(iva);
        $('#txtProPreNet').val(precio-iva);
                
        //Redondeamos COMISION TRANSBANK
        tra = Math.round((precio*tra) * Math.pow(10, 0)) / Math.pow(10, 0);
        $('#txtComTra').val(tra);

        var utilidad=precio-(iva+tra);
        $('#txtMonUti3').val(utilidad); 

        $('#mtoPreVta').val($('#txtProPreVta').val());
        $('#mtoProIva').val($('#txtProIva').val());
        $('#mtoPreNet').val($('#txtProPreNet').val());
        $('#mtoComTra').val($('#txtComTra').val());
        $('#mtoMUti3').val($('#txtMonUti3').val());

        $('#txtProPreVta').val(formatNumber.new($('#txtProPreVta').val(), "$"));
        $('#txtProPreVta2').val(formatNumber.new($('#txtProPreVta2').val(), "$"));
        $('#txtProIva').val(formatNumber.new($('#txtProIva').val(), "$"));
        $('#txtProPreNet').val(formatNumber.new($('#txtProPreNet').val(), "$"));
        $('#txtComTra').val(formatNumber.new($('#txtComTra').val(), "$"));
        $('#txtMonUti3').val(formatNumber.new($('#txtMonUti3').val(), "$"));
        
        //(3)
        $('#txtProPreNet2').val($('#txtProPreNet').val());
        $('#txtComTra2').val($('#txtComTra').val());
        $('#txtProUtiBfx').val(formatNumber.new($('#mtoPreNet').val()-$('#mtoComTra').val(),"$"));
        
        //SOLO SI EL PRODUCTO EXISTE
        if($('#txtProId').val()!=''){
            BFX_actualiza_montos();
        }
        
    }else{
        
        $('#txtProIva').val('');
        $('#txtProPreVta2').val('');
        $('#txtProPreNet').val('');
        $('#txtComTra').val('');
        $("#txtPorComPro").val('');
        $("#txtPorComPro").prop('disabled',true);
        
        $('#txtProPreNet2').val('');
        $('#txtComTra2').val('');
        $('#txtProUtiBfx').val('');
        
        $('#mtoPreVta').val('');
        $('#mtoProIva').val('');
        $('#mtoPreNet').val('');
        $('#mtoComTra').val('');
        
    }    
    
    //$("#txtPorComPro").val('');
    //$('#txtMonComPro').val('');
    //$("#txtMonUti").val('');
    
});

$("#txtPorComPro").keyup(function() {
    this.value = (this.value + '').replace(/[^.0-9]/g, '');
    if(this.value.length>0){                
        var porcentaje=this.value;
        var montoPor=($('#mtoPreVta').val()-$('#mtoProIva').val())-$('#mtoComTra').val();
        $('#txtMonComPro').val(Math.round((montoPor*porcentaje) * Math.pow(10, 0)) / Math.pow(10, 0));
        $("#txtMonUti").val(montoPor-$('#txtMonComPro').val());
        
        $("#mtoComPro").val($('#txtPorComPro').val());
        $("#mtoMtoPro").val($('#txtMonComPro').val());
        $("#mtoMtoUti").val($('#txtMonUti').val());
        
        $('#txtMonComPro').val(formatNumber.new($('#txtMonComPro').val(), "$"));
        $('#txtMonUti').val(formatNumber.new($('#txtMonUti').val(), "$"));
        
        //SOLO SI EL PRODUCTO EXISTE
        if($('#txtProId').val()!=''){
            CAT_actualiza_montos();
        }
                
    }else{
        
        $("#txtPorComPro").val('');
        $('#txtMonComPro').val('');
        $("#txtMonUti").val('');
        
    }    
});

$("#txtPPreVta").keyup(function() {

    this.value = (this.value + '').replace(/[^0-9]/g, '');
    if(this.value.length>0){
        
        var precio=this.value;
        var iva=$('#iva').val();
        var tra=$('#tra').val();
        $('#txtPPreVta2').val(precio);
        
        //Redondeamos IVA
        iva = Math.round((precio*iva) * Math.pow(10, 0)) / Math.pow(10, 0);
        $('#txtPIva').val(iva);
        $('#txtPPreNet').val(precio-iva);
                
        //Redondeamos COMISION TRANSBANK
        tra = Math.round((precio*tra) * Math.pow(10, 0)) / Math.pow(10, 0);
        $('#txtCTra').val(tra);

        var utilidad=precio-(iva+tra);
        $('#txtMonUti2').val(utilidad);        
        $('#mtoPVta').val($('#txtPPreVta').val());
        $('#mtoPIva').val($('#txtPIva').val());
        $('#mtoPNet').val($('#txtPPreNet').val());
        $('#mtoComTra2').val($('#txtCTra').val());
        $('#mtoMUti2').val(utilidad);

        $('#txtPPreVta').val(formatNumber.new($('#txtPPreVta').val(), "$"));
        $('#txtPPreVta2').val(formatNumber.new($('#txtPPreVta2').val(), "$"));
        $('#txtPIva').val(formatNumber.new($('#txtPIva').val(), "$"));
        $('#txtPPreNet').val(formatNumber.new($('#txtPPreNet').val(), "$"));
        $('#txtCTra').val(formatNumber.new($('#txtCTra').val(), "$"));
        $('#txtMonUti2').val(formatNumber.new($('#txtMonUti2').val(), "$"));
               
        //(3)
        $('#txtPPreNet2').val($('#txtPPreNet').val());
        $('#txtCTra2').val($('#txtCTra').val());
        $('#txtProUtiPro').val(formatNumber.new($('#mtoPNet').val()-$('#mtoComTra2').val(),"$"));       
          
        //SOLO SI EL PRODUCTO EXISTE
        if($('#txtProId').val()!=''){
            PRO_actualiza_montos();
        }
               
    }else{
        
        $('#txtPIva').val('');
        $('#txtPPreVta2').val('');
        $('#txtPPreNet').val('');
        $('#txtCTra').val('');
        $("#txtPComPro").val('');
        $('#txtMonUti2').val('');
        $("#txtPComPro").prop('disabled',true);
        
        $("#txtPPreNet2").val('');
        $("#txtCtra2").val('');
        $("#txtProUtiPro").val('');
        
        $('#mtoPVta').val('');
        $('#mtoPIva').val('');
        $('#mtoPNet').val('');
        $('#mtoComTra2').val('');
        $('#mtoMtoUti2').val('');
                
    }    
 
});

$("#txtProUma").keyup(function() {
    this.value = (this.value + '').replace(/[^.0-9]/g, '');
});

$("#txtPreAntPub").keyup(function() {

    this.value = (this.value + '').replace(/[^0-9]/g, '');
    if(this.value.length>0){
          
        $('#mtoPreAntPub').val($('#txtPreAntPub').val());
        $('#txtPreAntPub').val(formatNumber.new($('#txtPreAntPub').val(), "$"));
        
    }else{
        
        $('#txtPreAntPub').val('');       
        $('#mtoPreAntPub').val('');
        
    }        
});

$("#txtPreAntProX").keyup(function() {

    this.value = (this.value + '').replace(/[^0-9]/g, '');
    if(this.value.length>0){
          
        $('#mtoPreAntPro').val($('#txtPreAntProX').val());
        $('#txtPreAntProX').val(formatNumber.new($('#txtPreAntProX').val(), "$"));
        
    }else{
        
        $('#txtPreAntProX').val('');       
        $('#mtoPreAntPro').val('');
        
    }        
});

var formatNumber = {
 separador: ".", // separador para los miles
 sepDecimal: ',', // separador para los decimales
 formatear:function (num){
  num +='';
  var splitStr = num.split('.');
  var splitLeft = splitStr[0];
  var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
  var regx = /(\d+)(\d{3})/;
  while (regx.test(splitLeft)) {
  splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
  }
  return this.simbol + splitLeft  +splitRight;
 },
 new:function(num, simbol){
  this.simbol = simbol ||'';
  return this.formatear(num);
 }
};

function BFX_actualiza_montos(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var errIco='<i style="color: red;" class="fa fa-times-circle fa-2x"></i>';
    
    var id=$('#txtProId').val();
    var precio=$('#mtoPreVta').val();
    var iva=$('#mtoProIva').val();
    var neto=$('#mtoPreNet').val();
    var tbk=$('#mtoComTra').val();
    var utilidad=$('#mtoMUti3').val();

    //alert(id+'|'+precio+'|'+iva+'|'+neto+'|'+tbk+'|'+utilidad);

        var parametros = { 
            "id" : id
            , "precio" : precio
            , "iva" : iva
            , "neto" : neto 
            , "tbk" : tbk 
            , "utilidad" : utilidad 
        };             
        
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/ACT_MONTOS_BFX_MODEL.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#divActBfx").show();
            },
            success:  function (xml){
                
                //alert('ACT_MONTOS_BFX_MODEL ' + xml);                
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        $('#divActBfx').html(errIco).trigger('liszt:updated');
                        break; 
                    case '8':
                        $('#divActBfx').html(errIco).trigger('liszt:updated');
                        break; 
                    case '99':
                        $('#divActBfx').html(errIco).trigger('liszt:updated');
                        break; 
                    case '98':
                        $('#divActBfx').html(errIco).trigger('liszt:updated');
                        break;
                    default:
                        $('#divActBfx').hide();
                        var pa = $('#txtPa').val();
                        var ul = $('#txtUlt').val();                   
                        consultaProductos(0, ul, pa);
                        break;
                        
                }
            }
        });
}

function PRO_actualiza_montos(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var errIco='<i style="color: red;" class="fa fa-times-circle fa-2x"></i>';
    
    var id=$('#txtProId').val();
    var precio=$('#mtoPVta').val();
    var iva=$('#mtoPIva').val();
    var neto=$('#mtoPNet').val();
    var tbk=$('#mtoComTra2').val();
    var utilidad=$('#mtoMUti2').val();

    //alert(id+'|'+precio+'|'+iva+'|'+neto+'|'+tbk+'|'+utilidad);

    var parametros = { 
        "id" : id
        , "precio" : precio
        , "iva" : iva
        , "neto" : neto 
        , "tbk" : tbk 
        , "utilidad" : utilidad 
    };             

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/ACT_MONTOS_PRO_MODEL.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#divActPro").show();
        },
        success:  function (xml){

            //alert('ACT_MONTOS_BFX_MODEL ' + xml);                

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':
                    $('#divActPro').html(errIco).trigger('liszt:updated');
                    break; 
                case '8':
                    $('#divActPro').html(errIco).trigger('liszt:updated');
                    break; 
                case '99':
                    $('#divActPro').html(errIco).trigger('liszt:updated');
                    break; 
                case '98':
                    $('#divActPro').html(errIco).trigger('liszt:updated');
                    break;
                default:
                    $('#divActPro').hide();
                    var pa = $('#txtPa').val();
                    var ul = $('#txtUlt').val();                   
                    consultaProductos(0, ul, pa);
                    break;

            }
        }
    });
    
}

function CAT_actualiza_montos(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var errIco='<i style="color: red;" class="fa fa-times-circle fa-2x"></i>';
    
    var id=$('#txtProId').val();
    var porCom=$('#txtPorComPro').val();
    var monCom=$('#mtoMtoPro').val();
    var utilidad=$('#mtoMtoUti').val();

    //alert(id+'|'+precio+'|'+iva+'|'+neto+'|'+tbk+'|'+utilidad);

    var parametros = { 
        "id" : id
        , "porCom" : porCom
        , "monCom" : monCom
        , "utilidad" : utilidad 
    };             

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/ACT_MONTOS_CAT_MODEL.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#divActCat").show();
        },
        success:  function (xml){

            //alert('ACT_MONTOS_BFX_MODEL ' + xml);                

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':
                    $('#divActCat').html(errIco).trigger('liszt:updated');
                    break; 
                case '8':
                    $('#divActCat').html(errIco).trigger('liszt:updated');
                    break; 
                case '99':
                    $('#divActCat').html(errIco).trigger('liszt:updated');
                    break; 
                case '98':
                    $('#divActCat').html(errIco).trigger('liszt:updated');
                    break;
                default:
                    $('#divActCat').hide();
                    var pa = $('#txtPa').val();
                    var ul = $('#txtUlt').val();                   
                    consultaProductos(0, ul, pa);
                    break;

            }
        }
    });
}

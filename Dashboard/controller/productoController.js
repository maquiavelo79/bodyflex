
jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX     
              
        //desHabilita_contenido();
        
        $('#divConPro').hide();
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',false);
        $('#btnProbar').prop('disabled',true);    
        $('#btnPublicar').prop('disabled',true);       
    
        var sw=0;
        var pa=1;
        var ultimo=0;
    
        //AJAX
        var parametros = { 
                    "rut" : rut ,
                    "sw" : sw  ,
                    "ultimo" : ultimo ,
                    "pa" : pa 
                };             
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){
                
                //alert('productoConsultaModel1 ' + xml);                
                
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoCsuCategoriaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
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
        return false;
    } 

    if($('#txtProNom').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor ingrese nombre del producto.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        return false;
    } 

    if($('#txtProPre').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor ingrese precio del producto.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        return false;
    } 

    if($('#proDes').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor agregue descripción breve del producto.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        return false;
    } 
        
    if(ExisteObj('cmbCat1')){
        if($('#cmbCat1').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione 1°ra categoría del producto.</span></b>';
            msg+='</div>'; 
            $('#conWarning').html(msg);
            $('#conWarning').show();
            return false;
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
            return false;
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
            return false;
        } 
    }

    if($('#detPro').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor agregue descripción detallada del producto.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        return false;
    }

    if($('#txtProMar').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor agregue marca del producto.</span></b>';
        msg+='</div>'; 
        $('#conWarning').html(msg);
        $('#conWarning').show();
        return false;
    }
        
    var preRef=$('#txtProPreRef').val();
    var preVta=$('#txtProPre').val();
   
    if(preRef!=''){
        if(parseInt(preVta)>parseInt(preRef)){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">El precio de referencia debe ser mayor al precio de venta.</span></b>';
            msg+='</div>'; 
            $('#conWarning').html(msg);
            $('#conWarning').show();
            return false;
        }
    }    

    var cat2='';
    var cat3='';
    if(typeof $('#cmbCat2').val() != 'undefined'){
        cat2=$('#cmbCat2').val();
    }
    if(typeof $('#cmbCat3').val() != 'undefined'){
        cat3=$('#cmbCat3').val();
    }
    
    //alert('mtoProPre ' + $('#mtoProPre').val());
    //alert('mtoProPreRef ' + $('#mtoProPreRef').val());
    
    var parametros = { 
        "proId" : ($('#txtProId').val()!=''?$('#txtProId').val():0)
        , "cmbCon" : $('#cmbCon').val()
        , "proNom" : $('#txtProNom').val()
        , "proPre" : $('#mtoProPre').val() //TOMA VALOR NO FORMATEADO
        , "proDes" : $('#proDes').val()
        , "cmbCat1" : $('#cmbCat1').val()
        , "cmbCat2" : cat2
        , "cmbCat3" : cat3
        , "detPro" : $('#detPro').val()
        , "rut" : $('#rut').val()
        , "marca" : $('#txtProMar').val().toUpperCase()
        , "precioRef" : $('#mtoProPreRef').val() //TOMA VALOR NO FORMATEADO
    };

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoIngModModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
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

                default:

                    $("#botonera").show();
                    var id = xmlDoc.getElementsByTagName('IDENTIFICADOR')[0].childNodes[0].nodeValue;

                    if(codErr==1){ //CUANDO INGRESA UN NUEVO PRODUCTO
                        $('#txtProId').val(id);
                        $('#txtProId').trigger('liszt:updated');
                    }
                    
                    var msg='<div style="text-align:center;" class="alert alert-success">';
                    msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                    msg+='</div>';
                    
                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                    setTimeout(function() {$('#conWarning').hide();}, 1000); 
                                        
                    $('#divConPro').show();
                    
//                    var btn='<button style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" type="button" class="btn" id="btnPublicar"><i class="icon-bullhorn"></i>&nbsp;Publicar</button>';
//                    $('#divPublicar').html(btn);
//                    $('#divPublicar').trigger("liszt:updated");
                   
                    //MOSTRAMOS BOTON PUBLICAR
                    $('#btnPublicar').show();
                   
                    habilitar();
                    habilitarContenido();
                   
                    //Llamamos a paginación actual
                        var rut = $('#rut').val();
                        var pa = $('#txtPa').val();
                        var ul = $('#llamada').val();                    
                        consultaProductos(rut, 0, ul, pa);
                    //Llamamos a paginación actual

                    break;
            }
        }
    });
    
});

$('#btnPublicar').click(function(){
    //OBTENEMOS VALORES
    $('#conWarning').html('');
     
    var resp = validaImagenesProducto($('#txtProId').val());

    var matrix=resp.split('|'); 
    var codErr=parseInt(matrix[0]);
    var desErr=matrix[1];
    
    var msg='<div style="text-align:center;" class="alert alert-block">';
    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
    msg+='</div>';
        
    switch(codErr){
        case 8:

            $('#conWarning').html(msg);
            $('#conWarning').show();
            desHabilitar();
            break;
            
        case 9: 
        
            $('#conWarning').html(msg);
            $('#conWarning').show();
            desHabilitar();
            break;
        
        case 99: 

            $('#conWarning').html(msg);
            $('#conWarning').show();
            desHabilitar();
            break;
        
        case 98: 

            $('#conWarning').html(msg);
            $('#conWarning').show();
            break;
            
    }
       
    //Aqui detenemos el flujo
    if(codErr!=0){
        return false;
    }
    
    var parametros = { 
        "proId" : ($('#txtProId').val()!=''?$('#txtProId').val():0)
        , "opc": 1
    };

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoPublicarModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
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

                    desHabilitar();
                    break; 

                default:
                    
                    var rut = $('#rut').val();
                    var pa = $('#txtPa').val();
                    var ul = $('#llamada').val();
                    $('#txtProEst').val('PUBLICADO');
                    
                    consultaProductos(rut, 0, ul, pa);
                    desHabilitar();
                    desHabilitarContenido();
                    
//                    $('#divPublicar').html('');
//                    var btn='<button style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" type="button" class="btn" id="btnEditar">Editar</button>';
//                    $('#divPublicar').html(btn);

                    //MANIPULAMOS BOTONES
                    $('#btnEditar').show();
                    $('#btnPublicar').hide();
                    $('#btnEditar').prop('disabled',false);
                    $('#btnEditar').trigger("liszt:updated");
                    
                    var msg='<div style="text-align:center;" class="alert alert-success">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: #000;">Producto publicado exitosamente!.</span></b>';
                    msg+='</div>';
                    
                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                    setTimeout(function() {$('#conWarning').hide();}, 1500); 
                    pintaRegistroProducto();
                    break;
                    
            }
        }
    });
    
}); 
 
$('#btnEditar').live('click', function() { 

    //OBTENEMOS VALORES
    $('#conWarning').html('');
    
    var parametros = { 
        "proId" : ($('#txtProId').val()!=''?$('#txtProId').val():0)
        , "opc": 0
    };

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoPublicarModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
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
                    
                    consultaProductos(rut, 0, ul, pa);
                    
                    habilitar();
                    habilitarContenido();
                    
                    //var btn='<button style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" type="button" class="btn" id="btnPublicar"><i class="icon-bullhorn"></i>&nbsp;Publicar</button>';
                    //$('#divPublicar').html(btn);
                    
                    //MANIPULAMOS BOTONES
                    $('#btnPublicar').show();
                    $('#btnEditar').hide();
                    $('#btnPublicar').prop('disabled',false);
                    $('#btnPublicar').trigger("liszt:updated");
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: #000;">Ahora es posible modificar!.</span></b>';
                    msg+='</div>';

                    $('#divConPro').show();
                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                    setTimeout(function() {$('#conWarning').hide();}, 1500); 
                    
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
                case 0:	
                        proID = $(this).text();
                        break;
                case 1:
                        proNom = $(this).text();
                        break;
                case 2:
                        proEst = $(this).text();
                        break;
                case 3:
                        proCon = $(this).text();
                        break;
                case 4:
                        proPre = $(this).text();
                        break;
                case 5:
                        proDes= $(this).text(); 
                        break;    
                // <-- OCULTOS --> 
                    case 6:
                        proCat1= $(this).text(); 
                        break;    
                    case 7:
                        proCat2= $(this).text(); 
                        break; 
                    case 8:
                        proCat3= $(this).text(); 
                        break;     
                    case 9:
                        proDeLa= $(this).html();
                        break;            
                    case 10:
                        proPMar= $(this).text(); 
                        break;     
                    case 11:
                        proPreRef= $(this).text(); 
                        break;             
                // <-- OCULTOS -->         
                        
            }
        });

        $('#txtProId').val(proID);
    
    //Asignamos valores
        $('#txtProNom').val(proNom);
        $('#txtProEst').val(proEst);
        $('#cmbCon').val(proCon);
        $('#txtProMar').val(proPMar);   
        
        if(proPre!='$0'){
            $('#txtProPre').val(proPre);
            proPre=proPre.replace('$', '');
            proPre=proPre.replace('.', '');
            proPre=proPre.replace('.', '');
            $('#mtoProPre').val(proPre);   
        }
        
        if(proPreRef!='$0'){
            $('#txtProPreRef').val(proPreRef);   
            proPreRef=proPreRef.replace('$', '');
            proPreRef=proPreRef.replace('.', '');
            proPreRef=proPreRef.replace('.', '');
            $('#mtoProPreRef').val(proPreRef);   
        }
                
        $('#proDes').val(proDes);   
       
       //INICIALIZAMOS CONTENIDO
        $("select#cmbTipConPro")[0].selectedIndex = 0;
        $('#txtIdDrivePro').val('');
        $('#txtIdConPro').val('');
        $('#idDrive').val('');
        
        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>'; 
        botones+='<i onclick="getInformacion();" class="fa fa-info-circle fa-4x" style="margin-top: 40px; color: green; cursor: pointer;"></i>';
        
        $('#right').html(botones);
        
        //Setamos Categorias
            //combo categoria 1 siempre existe
            if(proCat1!=0 && typeof proCat1 != 'undefined'){
               $('#cmbCat1').val(proCat1);
               $('#cmbCat1').trigger('liszt:updated');
            }
            
            //alert('proCat2 ' + proCat2);
            if(proCat2!=0 && typeof proCat2 != 'undefined'){
                if(ExisteObj('cmbCat2')){
                    $('#cmbCat2').val(proCat2);
                }else{
                    getSubCat(2, proCat1, proCat2);
                }
            }
           
            //alert('proCat3 ' + proCat3);
            if(proCat3!=0 && typeof proCat3 != 'undefined'){
                if(ExisteObj('cmbCat3')){
                    $('#cmbCat3').val(proCat3);
                }else{
                    getSubCat(3, proCat2, proCat3);
                }
            }
            
        //Obtener descripción larga    
        $('#detPro').cleditor()[0].focus();
        $('#detPro').cleditor()[0].clear();
        $('#detPro').cleditor()[0].execCommand('inserthtml',proDeLa); 
            
        //Obtenemos el contenido asociado
        $('#listConPro').html('');
        $('#warningConAso').html('');
               
        //alert($('#txtProId').val());       

        var parametros = {
            "proId" : ($('#txtProId').val()!=''?$('#txtProId').val():0)
        };  
        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoConsultaContenidoModel.php",
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

    //Seccion Contenido    
        if(proEst=='INGRESADO'){
            
            habilitar();
            habilitarContenido();
            
//            var btn='<button style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" type="button" class="btn" id="btnPublicar"><i class="icon-bullhorn"></i>&nbsp;Publicar</button>';
//            $('#divPublicar').html(btn);
            
            //MOSTRAMOS BOTON publicar
            $('#btnPublicar').show();
            $('#btnPublicar').prop('disabled',false);
            $('#btnPublicar').trigger("liszt:updated");

        }else{
            
            desHabilitar();
            desHabilitarContenido();
            
//            var btn='<button style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" type="button" class="btn" id="btnEditar">Editar</button>';
//            $('#divPublicar').html(btn);

            //MOSTRAMOS BOTON EDITAR
            $('#btnEditar').show();
            $('#btnEditar').prop('disabled',false);
            $('#btnEditar').trigger("liszt:updated");
                                    
        }
        
        $('#divConPro').show();
        //$('#divPublicar').trigger("liszt:updated");

        //Pintamos Fila    
        $(this).addClass('highlight').siblings().removeClass('highlight');

});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var nom = $('#txtProNom').val();
            
        strModal+='<div class="modal-header">';
            strModal+='<h3><i class="icon-warning-sign"></i>&nbsp;Eliminar Producto</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar producto <b>' + nom + '</b>?<br>';
            strModal+='<h4 style="font-size: 12px;; font-weight: bold;">Se eliminarán todas las fotografías y videos asociados.</h4></p>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
            strModal+='<a style="border-color: silver; background-color: #FFCC00; color: black;" id="btnEliPro" class="btn btn-primary">Eliminar</a>';
        strModal+='</div>';
    
    $('#myModalPub').html(strModal);
   
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
        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoEliminaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#myModal").html(strLoad);
        },
        success:  function (xml){     
            
            //alert('xml ' + xml);
            
            $("#myModal").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            if(codErr==0){
                 
                var sw=0; 
                $('#txtPa').val;     
                $('#txtUlt').val;     
                     
                //AJAX
                var parametros = { 
                            "rut" : rut ,
                            "sw" : sw  ,
                            "ultimo" : ultimo   ,
                            "pa" : pa 
                        };         
                        
                $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoConsultaModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async: true,
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

                                //desHabilita_contenido();
                                //habilitar();
                                break;

                            default:

                                $("#divConPro").hide(); //escondemos sección contenido
                                $("#botonera").show();
                                var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                                $('#tbody').html(datos);
                                $('#idPag').html(paginacion);
                                break;

                        }
                    }
                });
     
                var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';                
                $("#modalBody").html(msg);
                $("#modalBody").show();
                setTimeout(function() {$('#myModalPub').modal('hide');}, 750);    
                
                limpiar();
                
            }else{

                var msg='<div style="text-align:center;" class="alert alert-block">';
                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                msg+='</div>';

                $("#myModal").html(msg);
                $("#myModal").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000);
                
                $('#conWarning').html(msg);
                $('#conWarning').show();
                
            }                    
        }
    });
    
});

    $('#btnLimpiar').click(function(){

        //alert('btnLimpiar');

        $('#txtProId').val(0);
        $('#txtProEst').val('NUEVA');   
        $('#cmbCon').val('');   
        $('#txtProNom').val('');   
        $('#txtProPre').val('');
        $('#cmbCat1').val('');
        
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
        $('#btnPublicar').prop('disabled',true);    
        
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
        
//        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';
//        $('#right').html(botones);

        //$('#divPublicar').html('');
        
            //ESCONDEMOS BOTONES
            $('#btnPublicar').hide();
            $('#btnEditar').hide();
            
        $("#warningConAso").html('');
        $("#listConPro").html('');
        
        //habilitar();
        $("#divConPro").hide();
            
    });

    $('#btnProbar').click(function(){
    
        var proId = $('#txtProId').val();
        var parametros = {"proId":(proId!=''?proId:0)};         
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoConsultaContenidoModel.php",
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
                        msg+='<b><span style="color: black;">Favor asocie imagenes y/o videos al producto antes de probar.</span></b>';
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
    
    $('#txtProPre').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){
            var precio=this.value;               
            $('#mtoProPre').val($('#txtProPre').val());
            $('#txtProPre').val(formatNumber.new($('#txtProPre').val(), "$"));
        }else{
            $('#txtProPre').val('');       
            $('#mtoProPre').val('');
        }     
    });
    
    $('#txtProPreRef').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){
            var precio=this.value;               
            $('#mtoProPreRef').val($('#txtProPreRef').val());
            $('#txtProPreRef').val(formatNumber.new($('#txtProPreRef').val(), "$"));
        }else{
            $('#txtProPreRef').val('');       
            $('#mtoProPreRef').val('');
        }    
    });
    

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

function getSubCat(catBsq, catPad, valor) {
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoCsuCategoriaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
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

                        //habilitar();

                        break; 

                    case '98':
                        // PARA ESTE ESCENARIO NO MOSTRAMOS NADA, SOLO ESCONDEMOS SI APLICA    
                            
                        switch(nivelCat){
                            case 2:
                                
                                $('#divCat2').html('');
                                $('#divCat2').hide();
                                $('#divCat2').trigger('liszt:updated');
                                break;    
                                
                            case 3:
                                
                                $('#divCat3').html('');
                                $('#divCat3').hide();
                                $('#divCat3').trigger('liszt:updated');
                                break;        
                                
                        }
                            
                        $("#botonera").show();
                        
                        //habilitar();
                        
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

                        //habilitar();
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
    
    //alert('desHabilitar');
    
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
        
    //alert('habilitar');   
 
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

    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
    $('#btnLimpiar').prop('disabled',false);
    $('#btnProbar').prop('disabled',false);
    
}

function desHabilitarContenido(){
    
//    alert('desHabilitarContenido');
//    
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


function habilitarContenido(){
    
//    alert('habilitarContenido');
//    
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
                
        $('#txtProId').val(0);
        $('#txtProEst').val('NUEVA');   
        $('#cmbCon').val('');   
        $('#txtProNom').val('');   
        $('#txtProPre').val('');
        $('#cmbCat1').val('');
        
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
        $('#btnPublicar').prop('disabled',true);    
        
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
        
        $("#warningConAso").html('');
        $("#listConPro").html('');
    
}

function ExisteObj(sObjeto){
    return(document.all(sObjeto) != null);
}

function consultaProductos(rut,sw,ultimo,pa){

    //alert('pa, ultimo; ' + pa +' ,'+ultimo);

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    var parametros = { 
                    "rut" : rut ,
                    "sw" : sw  ,
                    "ultimo" : ultimo   ,
                    "pa" : pa 
                };             
        
    $.ajax({
            data:  parametros
            , url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoConsultaModel.php"
            , type:  'post'
            , datetype: 'xml'
            , async: true 
            , success:  function (xml){

            //alert('productoConsultaModel2 ' + xml);                

//            $("#espera").hide();
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
                    $('#tbody').html('');

                    desHabilitar();

                    break; 

                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

//                    $("#botonera").show();
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

//                    $("#botonera").show();
                    $('#tbody').html('');
                    break;

                default:

                    $("#botonera").show();
                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                    $('#tbody').html(datos);
                    $('#idPag').html(paginacion);
                    
                    //PINTAMOS REGISTRO
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
                                //alert('pintaRegistro: Entro!!');
                                $(this).addClass('highlight').siblings().removeClass('highlight'); 
                            }    
                        });
                    //PINTAMOS REGISTRO
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoVerificaImgModel.php",
                type:  'post',
                async:  false, //NO PUEDE SER ASINCRONO 
                datetype: 'xml',
                beforeSend: function(){
                    $("#espera").show();
                    $("#botonera").hide();
                },    
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
                //alert('pintaRegistro: Entro!!');
                $(this).addClass('highlight').siblings().removeClass('highlight'); 
            }    
        });
        
    }

jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

        //Limpiamos entradas
        $('#appendedInput1').attr('value','');      
        $('#appendedInput3').attr('value','');      
        $('#textarea2').attr('value','');
                        
        //deshabilitamos botones
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);
//        $('#btnProbar').prop('disabled',true);

            
        //AJAX
        var parametros = { "rut" : rut };            
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/deslizadorConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){
                
            //alert('deslizadorConsultaModel ' + xml);    
                
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case "9":

                        $("#espera").hide();
		
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        $('#tbody').html('');
                       
                        break;
                        
                    case "8":

                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        $('#tbody').html('');
                        
                        break;
                    
                    case "99":

                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        $('#tbody').html('');
                        
                        break;

                    case "100":

                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        $('#tbody').html('');
                        
                        break;
                    
                    case "98":

                        $("#espera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 16px; color: blue;">AGREGA TUS MEJORES IMAGENES EN EL DESLIZADOR!</sapn></span></b>';
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        $('#tbody').html(''); 
                        
                        setTimeout(function() {
                            $('#conWarning').hide();
                        }
                        , 5000);
                        break;
                    
                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var contador = xmlDoc.getElementsByTagName('CONTADOR')[0].childNodes[0].nodeValue;        
                        
                        $("#espera").hide();
                        $('#tbody').html(datos);
                        $('#cantSlider').val(contador);
                        break;
                }
            }
        });
    
 $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#conWarning').hide();
                  
        var id = $('#sId').val();
        var rut = $('#rut').val();
        var tit1 = $('#appendedInput1').val();
        var flic = $('#appendedInput3').val();
        var text = $('#textarea2').val();
               
        if(tit1 == '') {
            
            $('#conTit2').removeClass('error');
            $('#conFlick').removeClass('error');
            $('#conTex').removeClass('error');
            
            var msg='<div class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue título.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#conTit1').addClass('error');
            return false;
            
        }
        
        if(flic == '') {
            
            $('#conTit1').removeClass('error');
            $('#conTit2').removeClass('error');
            $('#conTex').removeClass('error');
            
            var msg='<div class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue ID google drive de imagen.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#conFlick').addClass('error');
            return false;
            
        }
        
        if(text == '') {
            
            $('#conTit1').removeClass('error');
            $('#conTit2').removeClass('error');
            $('#conFlick').removeClass('error');
            
            var msg='<div class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue parrafo deslizador.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#conTex').addClass('error');
            return false;
            
        }
        
        $('#conTit1').removeClass('error');
        $('#conFlick').removeClass('error');
        $('#conTex').removeClass('error');
        $('#conWarning').hide();
          
        //AJAX
            var parametros = {
                            "id" : id,
                            "rut" : rut,
                            "tit1": tit1,
                            "flic": flic,
                            "text": text
                        };            
       
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/deslizadorAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#espera").show();
            },
            success:  function (xml){     
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#espera").hide();
                    
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break;
                        
                    case '8':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break;
                    
                    case '99':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break;
                    
                    
                    default:
                        
                        $("#espera").hide();
                                                
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var identificador = xmlDoc.getElementsByTagName('IDENTIFICADOR')[0].childNodes[0].nodeValue;
                                                
                        $("#tbody").html(datos);
                        $("#sId").val(identificador);
                        $("#txtHeadId").val(identificador);

                        //deshabilitamos botones
                        $('#btnGuardar').prop('disabled',false);
                        $('#btnEliminar').prop('disabled',false);
                        $('#btnLimpiar').prop('disabled',false);

                        var msg='<div style="text-align: center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000; text-align: center;">Operación exitosa!.</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        setTimeout(function() {$('#conWarning').hide();}, 1500); 
                        pintaRegistro();
                        break;
                }              
            }
        });
        
       pintaRegistro();
        
    });
        
    $('#tblSlider').on('click', 'tbody tr', function(event) {
        
        //alert('tblSlider');
        
        //Borramos sección mensajería
        $('#conWarning').html('');
                
        //habilitamos elementos
        $('#appendedInput1').prop('disabled',false);
        $('#appendedInput3').prop('disabled',false);
        $('#textarea2').prop('disabled',false);
    
        //Obtenemos valores de campos    
        $(this).children("td").each(function(index2){
            switch (index2){
                case 0:	
                        idTd = $(this).text();
                        break;
                case 1:
                        t1Td = $(this).text();
                        break;
//                case 2:
//                        t2Td = $(this).text();
//                        break;
                case 2:
                        flTd = $(this).text();
                        break;
                case 3:
                        teTd = $(this).text();
                        break;
//                case 4:
//                        poTd = $(this).text();
//                        break;    
            }
        });
         
    //asignamos ID a elemento hidden
        $('#sId').val(idTd);
        $('#t1Td').val(t1Td);
        $('#txtHeadId').val(idTd);

    //AJAX
        var parametros = {"sId" : idTd};            
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/deslizadorEstableceIdEnSesionModel.php",
            type:  'post',
            async: true
        });
            
    //Asignamos valores
        $('#appendedInput1').val(t1Td);
        $('#appendedInput3').val(flTd);
        $('#textarea2').val(teTd);
    
    //deshabilitamos boton agregar
        $('#btnAgregar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',false);
        $('#btnLimpiar').prop('disabled',false);
    
    //Pintamos Fila    
        $(this).addClass('highlight').siblings().removeClass('highlight');
    
});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var id = $('#sId').val();
    var nom=$('#t1Td').val();

    if(id.length>0){
        strModal+='<div class="modal-header">';
            strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
            strModal+='<h3><i class="fa fa-exclamation-triangle"></i>Eliminar Slider</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar Slider ' + '<b>' + nom + '</b>?' + '</p>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-times"></i>Cancelar</a>';
            strModal+='<a id="btnEliReg" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-minus-circle"></i>Eliminar</a>';
        strModal+='</div>';
        $('#myModal').html(strModal);
    };

});

$(document).on("click", "#btnEliReg", function(event){
   
    //Div de Carga
    var strLoad='<div id="espera2" class="modal-body"></div>';

    //AJAX
    var id = $('#sId').val();
    var parametros = {"id" : id};            
       
    //escondemos mensajería
    $('#conWarning').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/deslizadorEliminaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success: function(xml){     
            
            //alert('deslizadorEliminaModel ' + xml);
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                       
            switch(codErr){
                case "0":             
                
                    var msg='<div>'; //class="alert alert-success"
                    msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                    msg+='</div>';

                    $("#modalBody").html(msg);
                    setTimeout(function() {$('#myModal').modal('hide');}, 1000);

                    limpiar();
                    consultarSliders();
                    break;
                    
                default:
                                          
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                    break;
                    
            }    
            
        }
    });
    
});

    $('#btnLimpiar').click(function(){

        $('#sId').val('');
        $('#appendedInput1').val('');
        $('#appendedInput3').val('');
        $('#textarea2').val('');

        //Borramos sección mensajería
        $('#conWarning').html('');

        //deshabilitamos botones
        $('#btnAgregar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);
//        $('#btnProbar').prop('disabled',true);
        $('#conWarning').html('');
        
        //grilla
        $('#tblSlider tr').each(function(){
            $(this).removeClass('highlight'); 
        });
        
    });

});

function pintaRegistro(){  
    
    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblSlider tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#sId').val()){
                        sw=1;
                    }
                    break;  
            }
        });
        if(sw==1){
            $(this).addClass('highlight').siblings().removeClass('highlight'); 
        }    
    });
 }
 
 function limpiar(){
        
    $('#sId').val('');
    $('#txtHeadId').val('');
    $('#appendedInput1').val('');
    $('#appendedInput3').val('');
    $('#textarea2').val('');

    //Borramos sección mensajería
    $('#conWarning').html('');

    //deshabilitamos botones
    $('#btnAgregar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
//    $('#btnProbar').prop('disabled',true); 

    $('#conWarning').html('');

    //grilla
    $('#tblSlider tr').each(function(){
        $(this).removeClass('highlight'); 
    });
    
 }
 
 
 function is_url(str){
   
    //Declaramos la expresión regular que se usará para validar la url pasada por parámetro
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    //Retorna true en caso de que la url sea valida o false en caso contrario
    return regexp.test(str);
    
 }
 
 function consultarSliders(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var rut = $('#rut').val();
    var parametros2 = { "rut" : rut };            

    $.ajax({
        data:  parametros2,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/deslizadorConsultaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){
        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                    $('#tbody').html('');

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    $('#tbody').html('');

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    $('#tbody').html('');

                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    $('#tbody').html('');

                    break;    

                case "98":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                    $('#tbody').html('');
                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var contador = xmlDoc.getElementsByTagName('CONTADOR')[0].childNodes[0].nodeValue;        

                    $("#espera").hide();
                    $('#tbody').html(datos);
                    $('#cantSlider').val(contador);
                    break;
            }
        }
    });
 }
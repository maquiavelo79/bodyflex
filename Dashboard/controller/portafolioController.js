
jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

        limpiar();
            
        //AJAX
        var parametros = { "rut" : rut };            
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/portafolioConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){
                
                //alert(xml);
                
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
                        
                        limpiar();
                        desHabilitar();
                       
                        break;
                        
                    case "8":

                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        $('#tbody').html('');
                        
                        limpiar();
                        desHabilitar();
                        
                        break;
                    
                    case "99":

                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        $('#tbody').html('');
                        
                        limpiar();
                        desHabilitar();
                        
                        break;
                    
                    case "100":

                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        $('#tbody').html('');
                        
                        limpiar();
                        desHabilitar();
                        
                        break;
                    
                    case "98":

                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 13px; color: blue;">AGREGA AQUÍ TUS MEJORES FOTOGRAFÍAS PARA TU PERFIL WEB PROFESIONAL</sapn></span></b>';
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        setTimeout(function() {
                            $('#conWarning').hide();
                        }
                        , 5000); 
                        
                        $('#tbody').html('');
                        
                        limpiar();
                        habilitar();
                        
                        break;
                                        
                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var contador = xmlDoc.getElementsByTagName('CONTADOR')[0].childNodes[0].nodeValue;
                                               
                        $("#espera").hide();
                        $('#tbody').html(datos);
                        $('#cantSlider').val(contador);
                        
                        limpiar();
                        habilitar();
                        
                        break;
                }
            }
        });
    
 $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#conWarning').hide();
                  
        var id = $('#poId').val();
        var rut = $('#rut').val();
        var Eti = $('#txtEti').val();
        var Fli = $('#appendedInput3').val();
               
        if(Eti == '') {
            
            $('#appendedInput3').removeClass('error');
           
            var msg='<div style="text-align: center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000; text-align: center;">Favor agregue etiqueta asociada a la imagen.</span></b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtEti').addClass('error');
            setTimeout(function() {
                $('#conWarning').hide();
            }
            , 2000); 
            return false;
            
        }
        
        if(Fli == '') {
            
            $('#appendedInput3').removeClass('error');
           
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue ID google drive de imagen.</span></b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtEti').addClass('error');
            setTimeout(function() {
                $('#conWarning').hide();
            }
            , 2000); 
            return false;
            
        }
                
        $('#txtEti').removeClass('error');
        $('#appendedInput3').removeClass('error');
        $('#conWarning').hide();
                          
        //AJAX
            var parametros = {
                                "id"  : id,
                                "rut" : rut,
                                "Eti" : Eti,
                                "Fli" : Fli
                            };            
       
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/portafolioAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#espera").show();
            },
            success:  function (xml){     

            //alert('portafolioAgregaModel '+xml);

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
                        
                        limpiar();
                        desHabilitar();
                        
                        break;
                        
                    case '8':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        limpiar();
                        desHabilitar();
                        
                        break;
                    
                    case '99':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        limpiar();
                        desHabilitar();
                        
                        break;
                   
                    case '100':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        limpiar();
                        desHabilitar();
                        
                        break;
                        
                    default:
                        
                        $("#espera").hide();
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var identificador = xmlDoc.getElementsByTagName('ID')[0].childNodes[0].nodeValue;
                        
                        $("#poId").val(identificador);
                        $("#txtId").val(identificador);
                        
                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                               
                        setTimeout(function() {
                            $('#conWarning').hide();
                        }
                        , 2000);        
                               
                        consultaPortafolio();       
                        pintaRegistro();
                        break;
                }              
            }
        });
        
    });
    
    $('#tblSlider').on('click', 'tbody tr', function(event) {
        
        //alert('tblSlider');
        
        //Borramos sección mensajería
        $('#conWarning').html('');

        habilitar();
    
        //Obtenemos valores de campos    
        $(this).children("td").each(function(index2){
            switch (index2){
                case 0:	
                        idTd = $(this).text();
                        break;
                case 1:
                        etTd = $(this).text();
                        break;
                case 2:
                        flTd = $(this).text();
                        break;
            }
        });
         
    //asignamos ID a elemento hidden
        $('#poId').val(idTd);
        $('#txtId').val(idTd);

    //AJAX
        //alert('idTd ' + idTd);
        var parametros = {"poId" : idTd};            
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/portafolioEstableceIdSesionModel.php",
            type:  'post',
            async: true
//            , success:  function(response){
//                alert('portafolioEstableceIdEnSesion ' + response);
//            }
        });
    
         
    //Asignamos valores
        $('#txtId').val(idTd);
        $('#txtEti').val(etTd);
        $('#appendedInput3').val(flTd);
    
    //Pintamos Fila    
    $(this).addClass('highlight').siblings().removeClass('highlight');
    
    habilitar();
    
});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var id = $('#poId').val();

    if(id.length>0){
        strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
            strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
            strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar imagen de Portafolio</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar el registro con identificador ' + '<b>' + id + '</b>?' + '</p>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
            strModal+='<a id="btnEliReg" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-minus-circle"></i>&nbsp;Eliminar</a>';
        strModal+='</div>';
        $('#myModal').html(strModal);
    };

});

$(document).on("click", "#btnEliReg", function(event){
   
    //Div de Carga
    var strLoad='<div id="espera2" class="modal-body"></div>';

    //AJAX
    var id = $('#poId').val();
    var parametros = {"id" : id};            
       
    //escondemos mensajería
    $('#conWarning').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/portafolioEliminaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (xml){     
            
            //alert('portafolioEliminaModel ' + xml);
            
            //$("#modalBody").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            if(codErr==0){
                
                consultaPortafolio();
                
                var msg='<div style="text-align:center;">';
                msg+='<b><span style="color: #000; font-weight: bold;">Operación exitosa!.</span></b>';
                msg+='</div>';

                $("#modalBody").html(msg);
                $("#modalBody").show();
                setTimeout(function() {
                    $('#myModal').modal('hide');
                }, 1000);
                
                
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

        $('#poId').val('');
        $('#txtId').val('');
        $('#txtEti').val('');
        $('#appendedInput3').val('');

        //Borramos sección mensajería
        $('#conWarning').html('');

        //deshabilitamos botones
        $('#btnAgregar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
//        $('#btnProbar').prop('disabled',true);

        //grilla
        $('#tblSlider tr').each(function(){
            $(this).removeClass('highlight'); 
        });
        
    });

});

function pintaRegistro(){  
    
    //alert('$(#poId).val() ' + $('#poId').val());
    
    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblSlider tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#poId').val()){
                        sw=1;
                    }
                    break;  
            }
        });
        if(sw==1){
            
            //alert('lo pinta!!!!');
            
            $(this).trigger('liszt:updated');
            $(this).addClass('highlight').siblings().removeClass('highlight'); 
            $('#conTabla').trigger('liszt:updated');
            
        }    
    });
 }
 
 function limpiar(){
        
    $('#poId').val('');
    $('#txtId').val('');
    $('#txtId').val('');
    $('#txtEti').val('');
    $('#appendedInput3').val('');
    
    //Borramos sección mensajería
    $('#conWarning').html('');

    //deshabilitamos botones
    $('#btnAgregar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',true);
//    $('#btnProbar').prop('disabled',true); 

    $('#conWarning').html('');

    //grilla
    $('#tblSlider tr').each(function(){
        $(this).removeClass('highlight'); 
    });
    
 }
 
  function habilitar(){
    
    $('#txtEti').prop('disabled',false);
    $('#appendedInput3').prop('disabled',false);   
      
      //habilitamos botones
    $('#btnAgregar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
//    $('#btnProbar').prop('disabled',false); 
    
  }
  
  function desHabilitar(){
    
    $('#txtEti').prop('disabled',true);
    $('#appendedInput3').prop('disabled',true);   
      
      //habilitamos botones
    $('#btnAgregar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
//    $('#btnProbar').prop('disabled',true); 
    
  }
 
  function limpiar(){
    
    $('#txtId').val('');
    $('#txtEti').val('');
    $('#appendedInput3').val('');

  }  
    
function consultaPortafolio(){
    
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;
var strLoad='<div id="espera2" class="modal-body"></div>';    
    
    //AJAX
        var rut = $('#rut').val();
        var parametros = { "rut" : rut };            
       
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/portafolioConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: false, //DEBE SER SINCRONO
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function(xml){

            $("#modalBody").hide();
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

                    limpiar();
                    desHabilitar();

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    $('#tbody').html('');

                    limpiar();
                    desHabilitar();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    $('#tbody').html('');

                    limpiar();
                    desHabilitar();

                    break;
                    
                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    $('#tbody').html('');

                    limpiar();
                    desHabilitar();

                    break;

                
                case "98":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 13px; color: blue;">AGREGA AQUÍ TUS MEJORES FOTOGRAFÍAS PARA TU PERFIL WEB PROFESIONAL</sapn></span></b>';
                    msg+='<div id="esperaWarning"></div>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                    setTimeout(function() {
                        $('#conWarning').hide();
                    }
                    , 5000); 

                    $('#tbody').html('');
                    limpiar();
                    habilitar();

                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var contador = xmlDoc.getElementsByTagName('CONTADOR')[0].childNodes[0].nodeValue;

                    $("#espera").hide();
                    $('#tbody').html(datos);
                    $('#cantSlider').val(contador);
                    habilitar();

                    break;
            }
        }
    });
}

function establecerSesion(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var poId=$('#poId').val();
    var parametros = {"poId" : poId};            
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/portafolioEstableceIdSesionModel.php",
        type:  'post',
        async: true
    });
}

 function is_url(str){
   
    //Declaramos la expresión regular que se usará para validar la url pasada por parámetro
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    //Retorna true en caso de que la url sea valida o false en caso contrario
    return regexp.test(str);
    
 }
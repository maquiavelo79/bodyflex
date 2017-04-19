jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

        $.ajax({
                //data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/servicioComboConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){
                
                //alert('servicioComboConsultaModel '+xml);
                
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
                       
                        break;
                        
                    case "8":

                        $("#espera").hide();
		
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        break;
                    
                    case "99":

                        $("#espera").hide();
		
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        break;
                    
                    case "100":

                        $("#espera").hide();
		
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        break;
                    
                    case "98":

                        $("#espera").hide();
		
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        break;
                        
                    default:
                              
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;       
                              
                        $("#divCmbSer").html(datos); 
                        $('#divCmbSer').trigger('liszt:updated');
                        $("#espera").hide();
                        break;
                        
                }
            }
        });
        consultaServicios();
        
    
    
    
    $(document).on('change', '#cmbTipSer', function(event) {

        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;

        //limpiar();

        if($('#cmbTipSer').val()!='(SELECCIONE)'){

            $('#serId').val($('#cmbTipSer').val());

            var serId = $('#serId').val();
            var parametros = {"serId" : serId};       

            $.ajax({
                        data:  parametros,
                        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/servicioConsultaObtieneServicioModel.php",
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

                                break;

                            case "8":

                                $("#espera").hide();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                break;

                            case "99":

                                $("#espera").hide();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                break;

                            case "100":

                                $("#espera").hide();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                break;

                            default:

                                var header = xmlDoc.getElementsByTagName('HEADER')[0].childNodes[0].nodeValue;
                                var body = xmlDoc.getElementsByTagName('BODY')[0].childNodes[0].nodeValue;

                                $("#divHeader").html(header); 
                                $("#divBody").html(body); 
                                $("#divServicio").show();
                                $("#espera").hide();
                                break;
                        }
                    }
                });
        }else{
            $("#divHeader").html('');
            $("#divBody").html(''); 
            $("#divServicio").hide();
            consultaServicios();
        }

    });    
    
      
    
    $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#conWarning').hide();
                  
        var rut = $('#rut').val();
        var id = $('#serId').val();
 
        $('#conWarning').hide();
                          
        //AJAX
            var parametros = {
                            "rut" : rut,
                            "id": id
                        };            
       
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/servicioProfesionalAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: false, //DEBE SER SINCRONO
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
                        
                    case '100':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                                               
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        break;    
                    
                    case '98':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                                               
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        break;
                    
                    default:
                        
                        $("#espera").hide();
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                       
                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();    
                                  
                        setTimeout(function() {
                            $('#conWarning').hide();
                        }
                        , 2000); 
                        
                        $('#divServicio').hide();
                        $('#serAgr').val(datos);
                        consultaServicios();
                        break;
                }              
            }
        });
                
    });    
       
    
    $('#tblSlider').on('click', 'tbody tr', function(event) {
        
        limpiar();

        //Obtenemos valores de campos    
        $(this).children("td").each(function(index2){
            switch (index2){
                case 0:	
                        idAgrTd = $(this).text();
                        break;
                case 1:	
                        idSerTd = $(this).text();
                        break;        
                case 2:
                        nomTd = $(this).text();
                        break;
                case 3:
                        des1Td = $(this).text();
                        break;
                case 4:
                        des2Td = $(this).text();
                        break;
            }
        });

        //ID del servicio
        $('#serId').val(idSerTd);
        
        //ID servicio agregado
        $('#serAgr').val(idAgrTd);
        
        //ID nombre servicio
        $('#serNom').val(nomTd);
        
        //Combo servicio
        $('#cmbTipSer').val(idSerTd);
                
        //Asignamos valores
            //HEADER
            var strHeader = '<h2>';
            strHeader+= '<i class="halflings-icon edit"></i>';
            strHeader+= '<span class="break"></span>';
            strHeader+= '<b style="color: blue; font-weight: bold;">' + '[' + idSerTd + '] ' + nomTd + '</b></h2>';

            //BODY
            var strBody='<div class="span6">';
                strBody+='<h3>Descripci&oacute;n</h3>';
                strBody+='<p style="word-wrap: break-word;">';
                    strBody+=des1Td;
                strBody+='</p>';
            strBody+='</div>';
            strBody+='<div class="span6">';
                strBody+='<h3>Descripci&oacute;n detallada</h3>';
                strBody+='<p style="word-wrap: break-word;">';
                    strBody+=des2Td;
                strBody+='</p>';
            strBody+='</div>';    
            
            $('#divHeader').html(strHeader);
            $('#divBody').html(strBody);
            $('#divServicio').show();
            
        //deshabilitamos boton agregar
            $('#btnAgregar').prop('disabled',true);

        //habilitamos boton modificar, eliminar y cancelar
            $('#btnEliminar').prop('disabled',false);
            $('#btnProbar').prop('disabled',false);

        //Pintamos Fila    
            $(this).addClass('highlight').siblings().removeClass('highlight');

    });
    

    $('#btnEliminar').click(function(){
    
        var strModal='';
        var serNom = $('#serNom').val();

        if(serNom.length>0){
            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar Servicio de mi Lista</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>¿Desea eliminar el servicio <b>' + serNom + '</b> de su lista de servicios?</p>';
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
        var id = $('#serAgr').val();
        var rut = $('#rut').val();
        var parametros = {
                            "id" : id,
                            "rut" : rut
                        };            

        //escondemos mensajería
        $('#conWarning').hide();

        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/servicioProfesionalEliminaModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            beforeSend: function(){
                $("#modalBody").html(strLoad);
            },
            success:  function (xml){  
                
                //alert('servicioProfesionalEliminaModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                if(codErr==0){

                    $('#divServicio').hide();
                    
                    var msg='<b><span style="color: black;">Servicio eliminado exitosamente</span></b>';
                    $("#modalBody").html(msg);
                    $("#modalBody").show();
                    setTimeout(function() {$('#myModal').modal('hide');}, 1000);  
                    limpiar();
                    consultaServicios();
                    pintaRegistro();
                                       
                }else{

                    var msg2='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $("#modalBody").html(msg2);
                    $("#modalBody").show();
                    setTimeout(function() {$('#myModal').modal('hide');}, 1000);  

                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                }                    
            }
        });
    });
});

function pintaRegistro(){  
    
    //alert('pintaRegistro');
    
    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblSlider tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#spId').val()){
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
        
    
    $('#cmbTipSer').val('(SELECCIONE)'); 
    $('#serId').val('');
    $('#txtSerId').val('');
    $('#txtSerId').prop('disabled',true);

    //Borramos sección mensajería
    $('#conWarning').html('');

    //deshabilitamos botones
    $('#btnAgregar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);

    //grilla
    $('#tblSlider tr').each(function(){
        $(this).removeClass('highlight'); 
    });
        
 }
 
 function habilitar(){

    //habilitamos botones
    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
    
 }
 
  function desHabilitar(){
     
    $('#txtNomSer').prop('disabled',true); 
    
    //habilitamos botones
    $('#btnGuardar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);

    
 }
 
function consultaServicios(){
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    $('#conWarning').hide();
                          
    //AJAX
    var rut = $('#rut').val();
    var parametros = {"rut" : rut};            

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/servicioProfesionalConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: false, //DEBE SER ASINCRONO
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('servicioProfesionalConsultaModel '+xml);

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

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    break;    

                case "98":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 16px; color: blue;">COMIENZA A OFRECER SERVICIOS PROFESIONALES EN NUESTRA COMUNIDAD</sapn></span></b>';
                    msg+='<div id="esperaWarning"></div>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                    $('#tbody').html('');
                    $('#cantSlider').val(0);
                    
                    setTimeout(function() {
                        $('#conWarning').hide();
                    }
                    , 5000); 
                    break;

                default:

                    $("#espera").hide();

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var cantidad = xmlDoc.getElementsByTagName('CANTIDAD')[0].childNodes[0].nodeValue;

                    $('#tbody').html(datos);
                    $('#cantSlider').val(cantidad);
                    break;
            }
        }
    });
    
}


function obtenerServicio(sel){  
    
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;
    
    limpiar();
    
    if(sel.value!='(SELECCIONE)'){

        $('#serId').val(sel.value);
        
        var serId = $('#serId').val();
        var parametros = {"serId" : serId};       

        $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/servicioConsultaObtieneServicioModel.php",
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

                            break;

                        case "8":

                            $("#espera").hide();

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#conWarning').html(msg);
                            $('#conWarning').show();

                            break;
                            
                        case "99":

                            $("#espera").hide();

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#conWarning').html(msg);
                            $('#conWarning').show();

                            break;
                         
                        case "100":

                            $("#espera").hide();

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#conWarning').html(msg);
                            $('#conWarning').show();

                            break;
                                                
                        default:

                            var header = xmlDoc.getElementsByTagName('HEADER')[0].childNodes[0].nodeValue;
                            var body = xmlDoc.getElementsByTagName('BODY')[0].childNodes[0].nodeValue;
                            
                            $("#divHeader").html(header); 
                            $("#divBody").html(body); 
                            $("#divServicio").show();
                            $("#espera").hide();
                            break;
                    }
                }
            });
    }else{
        $("#divHeader").html('');
        $("#divBody").html(''); 
        $("#divServicio").hide();
        consultaServicios();
    }
 }
 
 
 function consultaServiciosCombo(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

     $.ajax({
                //data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/servicioComboConsultaModel.php",
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
                       
                        break;
                        
                    case "8":

                        $("#espera").hide();
		
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        break;
                    
                    case "99":

                        $("#espera").hide();
		
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        break;
                        
                    case "100":

                        $("#espera").hide();
		
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        break;    
                    
                    case "98":

                        $("#espera").hide();
		
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        break;
                        
                    default:
                              
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;       
                              
                        $("#divCmbSer").html(datos); 
                        $('#divCmbSer').trigger('liszt:updated');
                        $("#espera").hide();
                        break;
                        
                }
            }
        });
 }

jQuery(document).ready(function() {
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

        //Limpiamos entradas
        limpiar();
                          
        $.ajax({
                //data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/serviciosProfesionalConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){
                
                //alert('serviciosProfesionalConsultaModel '+xml);
                
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
                        var contador = xmlDoc.getElementsByTagName('CONTADOR')[0].childNodes[0].nodeValue;
                                               
                        $("#espera").hide();
                        //$('#tbody').html(datos);
                        //$('#cantSlider').val(contador);
                        break;
                }
            }
        });
    
 $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#conWarning').hide();
                  
        var rut = $('#rut').val();          
        var id = $('#spId').val();
        var email = $('#email').val();        
        var nom = $('#txtNomSer').val();
        var fli = $('#txtIdFli').val();
        var dc = $('#txtDesCor').val();
        var dt = $('#txtDesDet').val();
        var ci = $('#txtClaIco').val();
               
        if(nom == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue nombre servicio profesional.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtNomSer').addClass('error');
            return false;
            
        }
        
        if(fli == '') {
            fli=0;
        }
        
        if(dc == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue descripción corta del servicio profesional.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtDesCor').addClass('error');
            return false;
            
        }
        
        if(dt == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue descripción detallada del servicio profesional.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtDesDet').addClass('error');
            return false;
            
        }
        
        if(ci == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue nombre de clase ícono asociada al servicio profesional.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtClaIco').addClass('error');
            return false;
            
        }

        $('#txtNomSer').removeClass('error');
        $('#txtIdFli').removeClass('error');
        $('#txtDesCor').removeClass('error');
        $('#txtDesDet').removeClass('error');
        $('#txtClaIco').removeClass('error');
        $('#contAlertHead').hide();
     
        //AJAX
            var parametros = {
                            "rut" : rut,
                            "id" : id,
                            "email" : email,
                            "nom": nom,
                            "fli": fli,
                            "dc": dc,
                            "dt": dt,
                            "ci": ci
                        };            
       
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/serviciosProfesionalAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#espera").show();
            },
            success:  function (xml){     
                
                //alert('serviciosProfesionalAgregaModel ' + xml);
                
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
                    
                    default:
                        
                        $("#espera").hide();
                        var id = xmlDoc.getElementsByTagName('ID')[0].childNodes[0].nodeValue;
                        
                        $("#spId").val(id);
                        $("#txtSerId").val(id);

                        habilitar();
                        consultaServicio();
                        
                        var msg='<div class="alert alert-success">';
                        msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        pintaRegistro();
                        break;
                        
                }              
            }
        });
    });
       
    $('#tblSlider').on('click', 'tbody tr', function(event) {
        
        //Pintamos Fila    
        $(this).addClass('highlight').siblings().removeClass('highlight');
        
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
                        nomTd = $(this).text();
                        break;
                case 2:
                        clsTd = $(this).text();
                        break;
                case 3:
                        fliTd = $(this).text();
                        break;  
                case 4:
                        desCorTd = $(this).text();
                        break;  
                case 5:
                        desDetTd = $(this).text();
                        break;      
            }
        });
         
    //asignamos ID a elemento hidden
        $('#spId').val(idTd);
          
        //Asignamos valores
        $('#txtSerId').val(idTd);
        $('#txtNomSer').val(nomTd);
        $('#txtClaIco').val(clsTd);
        $('#txtIdFli').val(fliTd);
                
        $('#txtDesCor').cleditor()[0].focus();
        $('#txtDesCor').cleditor()[0].clear();
        $('#txtDesCor').cleditor()[0].execCommand('inserthtml', desCorTd);  
        
        $('#txtDesDet').cleditor()[0].focus();
        $('#txtDesDet').cleditor()[0].clear();
        $('#txtDesDet').cleditor()[0].execCommand('inserthtml', desDetTd);  

    //AJAX
        var parametros = {"spId" : idTd};            
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/serviciosProfesionalEstableceIdEnSesionModel.php",
            type:  'post'
        });

});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var id = $('#spId').val();

    if(id.length>0){
        strModal+='<div class="modal-header">';
            strModal+='<h3>Eliminar Servicio Profesional</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar el servicio con identificador ' + '<b>' + id + '</b>?' + '</p>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
            strModal+='<a id="btnEliReg" class="btn btn-primary">Eliminar</a>';
        strModal+='</div>';
        $('#myModal').html(strModal);
    };

});

$(document).on("click", "#btnEliReg", function(event){
   
    //Div de Carga
    var strLoad='<div id="espera2" class="modal-body"></div>';

    //AJAX
    var id = $('#spId').val();
    var parametros = {"id" : id};            
       
    //escondemos mensajería
    $('#conWarning').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/serviciosProfesionalEliminaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (xml){    
            
            $("#modalBody").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
            
            //alert('codErr ' + codErr);
            //alert('datos ' + datos);
            
            if(codErr==0 && datos==1){
                
                limpiar();
                
                var msg='<div style="text-align:center;">'; //class="alert alert-success"
                msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                msg+='</div>';

                $("#modalBody").html(msg);
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                
                $.ajax({
                        //data:  parametros,
                        url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/serviciosProfesionalConsultaModel.php",
                        type:  'post',
                        datetype: 'xml',
                    beforeSend: function(){
                        $("#espera").show();
                    },
                    success:  function (xml){

                        //alert('serviciosProfesionalConsultaModel '+xml);

                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                        switch(codErr){
                            case "9":

                                $("#espera").hide();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';
                                
                                $('#tbody').html('');
                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                break;

                            case "8":

                                $("#espera").hide();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#tbody').html('');
                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                break;

                            case "99":

                                $("#espera").hide();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#tbody').html('');
                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                break;
                             
                            case "100":

                                $("#espera").hide();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#tbody').html('');
                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                break;

                            case "98":

                                $("#espera").hide();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#tbody').html('');
                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                break;
    
                            default:

                                var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                var contador = xmlDoc.getElementsByTagName('CONTADOR')[0].childNodes[0].nodeValue;

                                //alert(datos);
                                
                                $("#espera").hide();
                                $('#tbody').html(datos);
                                $('#cantSlider').val(contador);
                                break;
                        }
                    }
                });
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

        $('#spId').val('');
        $('#txtSerId').val('');
        $('#txtSerId').prop('disabled',true);
        
        $('#txtNomSer').val('');
        $('#txtIdFli').val('');
        $('#txtDesCor').val('');
        $('#txtDesDet').val('');
        $('#txtClaIco').val('');

        //Borramos sección mensajería
        $('#conWarning').html('');

        //deshabilitamos botones
        $('#btnAgregar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);
        $('#btnProbar').prop('disabled',true); 

        //grilla
        $('#tblSlider tr').each(function(){
            $(this).removeClass('highlight'); 
        });
        
        $('#txtDesCor').cleditor()[0].focus();
        $('#txtDesCor').cleditor()[0].clear();
        //$('#txtDesCor').cleditor()[0].execCommand('inserthtml','&nbsp;');  
        
        $('#txtDesDet').cleditor()[0].focus();
        $('#txtDesDet').cleditor()[0].clear();
        //$('#txtDesDet').cleditor()[0].execCommand('inserthtml','&nbsp;');  

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
        
    $('#spId').val('');
    $('#txtSerId').val('');
    $('#txtSerId').prop('disabled',true);
        
    $('#txtNomSer').val('');
    $('#txtIdFli').val('');
    $('#txtDesCor').val('');
    $('#txtDesDet').val('');
    $('#txtClaIco').val('');

    //Borramos sección mensajería
    $('#conWarning').html('');

    //deshabilitamos botones
    $('#btnAgregar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
    $('#btnProbar').prop('disabled',true); 

    //grilla
    $('#tblSlider tr').each(function(){
        $(this).removeClass('highlight'); 
    });
    
    $('#txtDesCor').cleditor()[0].focus();
    $('#txtDesCor').cleditor()[0].clear();

    $('#txtDesDet').cleditor()[0].focus();
    $('#txtDesDet').cleditor()[0].clear();
   
    
 }
 
 function habilitar(){
     
    $('#txtNomSer').prop('disabled',false); 
    $('#txtIdFli').prop('disabled',false); 
    $('#txtDesCor').prop('disabled',false); 
    $('#txtDesDet').prop('disabled',false); 
    $('#txtClaIco').prop('disabled',false); 
     
    //habilitamos botones
    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
    $('#btnLimpiar').prop('disabled',false);
    $('#btnProbar').prop('disabled',false);
    
 }
 
  function desHabilitar(){
     
    $('#txtNomSer').prop('disabled',true); 
    $('#txtIdFli').prop('disabled',true); 
    $('#txtDesCor').prop('disabled',true); 
    $('#txtDesDet').prop('disabled',true); 
    $('#txtClaIco').prop('disabled',true); 
     
    //habilitamos botones
    $('#btnGuardar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
    $('#btnLimpiar').prop('disabled',true);
    $('#btnProbar').prop('disabled',true);
    
 }
 
function consultaServicio(){
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/serviciosProfesionalConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('serviciosProfesionalConsultaModel ' + xml);

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


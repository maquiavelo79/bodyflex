
jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

        //Limpiamos entradas
        limpiar();
                           
        //AJAX
        //var parametros = { "rut" : rut };            
       
        $.ajax({
                //data:  parametros,
                url:   '../model/serviciosProfesionalConsultaModel.php',
                type:  'post',
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (response){
                //alert('response: ' + response);
                switch(response){
                    case "0":

                        $("#espera").hide();
		
                        var msg='<div class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        break;
                        
                    case "X":

                        $("#espera").hide();
                        
                        var msg='<div class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">1° Ingrese información del servicio.</span></b><br>';
                            msg+='<b><span style="color: #000;">2° Establezca imagen.</b></span>';
                        msg+='</div>';

                       $('#conWarning').html(msg);
                       $('#conWarning').show();
                        
                        $('#tbody').html('');
                        
                        break;
                    
                    default:

                        var r=response.split('|');
                                               
                        $("#espera").hide();
                        $('#tbody').html(r[0]);
                        $('#cantSlider').val(r[1]);
                        break;
                }
            }
        });
    
 $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#conWarning').hide();
                  
        var id = $('#spId').val();
        var email = $('#email').val();        
        var nom = $('#txtNomSer').val();
        var fli = $('#txtIdFli').val();
        var dc = $('#txtDesCor').val();
        var dt = $('#txtDesDet').val();
        var ci = $('#txtClaIco').val();
               
        if(nom == '') {
            
            var msg='<div class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
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
            
            var msg='<div class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
               msg+='<b><span style="color: #000;">Favor agregue descripción corta del servicio profesional.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtDesCor').addClass('error');
            return false;
            
        }
        
        if(dt == '') {
            
            var msg='<div class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
               msg+='<b><span style="color: #000;">Favor agregue descripción detallada del servicio profesional.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtDesDet').addClass('error');
            return false;
            
        }
        
        if(ci == '') {
            
            var msg='<div class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
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
                url:   '../model/serviciosProfesionalAgregaModel.php',
                type:  'post',
                beforeSend: function(){
                    $("#espera").show();
            },
            success:  function (response){     
                //alert('response ' + response);
                switch(response){
                    case '0':
                        
                        $("#espera").hide();
                    
                        var msg='<div class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break;
                        
                    case '9':
                        
                        $("#espera").hide();
                        
                        var msg='<div class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Error: Procedimiento no retorna datos.</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break;
                    
                    default:
                        
                        $("#espera").hide();
                        r = response.split('|');
                        $("#tbody").html(r[0]);
                        $("#spId").val(r[1]);
                        $("#txtSerId").val(r[1]);

                        habilitar();

                        var msg='<div class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        msg+='</div>';

                        //imagen Slider
                        $('#file').attr('value','');
                        $('#file').prop('disabled',false);
                        $('#btnImgGuardar').prop('disabled',false);    

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        pintaRegistro();
                        
                        break;
                }              
            }
        });
    });
    
    $('#txtIdFli').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
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
                        nomTd = $(this).text();
                        break;
                case 2:
                        clsTd = $(this).text();
                        break;
                case 3:
                        imgTd = $(this).text();
                        break;  
                case 4:
                        fliTd = $(this).text();
                        break;  
                case 5:
                        desCorTd = $(this).text();
                        break;  
                case 6:
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
            url:   '../model/serviciosProfesionalEstableceIdEnSesionModel.php',
            type:  'post'
        });
    
    //IMAGEN PUBLICACION
    
        //imagen Slider
        $('#file').attr('value','');
        $('#file').prop('disabled',false);
        $('#btnImgGuardar').prop('disabled',false);
    
        $('#divFile').html('<input style="cursor: pointer;" type="file" name="file" id="file" required onchange="loadFile(event)">');
        $('#divFile').trigger('liszt:updated');

        var ruta="../../servicio/";
        $.ajax({
            data:  parametros,
            url:   '../model/serviciosProfesionalVerificaImagenModel.php',
            type:  'post',
            success:  function(response){ 
                //alert(response);
                var r=response.split('|'); 
                if(r[0]==1){
                    var img=ruta+r[1];
                    $('#divOutPut').html('<img id="output" src="' + img + '"/>');

                }else{
                    $('#divOutPut').html('<img id="output" src="http://placehold.it/800x350" alt="">');
                }                   

                $('#nomImg').val(r[1]);
                $('#message').html('');
                $('#divOutPut').trigger('liszt:updated');

            }
        });
       

    //Pintamos Fila    
        $(this).addClass('highlight').siblings().removeClass('highlight');
    
});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var id = $('#spId').val();

    if(id.length>0){
        strModal+='<div class="modal-header">';
            strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
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
        url:   '../model/serviciosProfesionalEliminaModel.php',
        type:  'post',
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (response){    
            
            //alert('response ' + response);
            
            if(response==1 || response==2){
                
                limpiar();
                
                //var rut = $('#spId').val();
                //var parametros2 = { "rut" : rut };            
                $.ajax({
                        //data:  parametros2,
                        url:   '../model/serviciosProfesionalConsultaModel.php',
                        type:  'post',
                    beforeSend: function(){
                        $("#modalBody").html(strLoad);
                    },
                    success:  function (response){
                        //alert('serviciosProfesionalConsultaModel ' + response);
                        switch(response){
                            case "0":

                                $("#espera").hide();

                                var msg='<div class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                    msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                break;

                            case "X":

                                $("#espera").hide();

                                var msg='<div class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                    msg+='<b><span style="color: #000;">1° Ingrese información del servicio.</span></b><br>';
                                    msg+='<b><span style="color: #000;">2° Establezca imagen.</b></span>';
                                msg+='</div>';

                                $("#modalBody").html(msg);
                                $("#modalBody").show();
                                setTimeout(function() {$('#myModal').modal('hide');}, 750); 

                                $('#conWarning').html(msg);
                                $('#conWarning').show();
                                    
                                $('#tbody').html('');

                                break;

                            default:

                                var r=response.split('|');

                                $("#espera").hide();
                                $('#tbody').html(r[0]);
                                $('#cantSlider').val(r[1]);
                                
                                var msg='<div class="alert alert-success">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                    msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                                msg+='</div>';
                                
                                $("#modalBody").html(msg);
                                $("#modalBody").show();
                                setTimeout(function() {$('#myModal').modal('hide');}, 750); 

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                break;
                        }
                    }
                });
            }else{                
                
                var msg='<div class="alert alert-block">';
                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: #000;">Error: No es posible eliminar servicio.</span></b>';
                msg+='</div>';

                $("#modalBody").html(msg);
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 750); 

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

        //imagen Slider
        $('#file').attr('value','');
        $('#file').prop('disabled',true);
        $('#btnImgGuardar').prop('disabled',true);
        $('#divOutPut').html('<img id="output" src="http://placehold.it/800x350" alt="">');

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

    //imagen Slider
    $('#file').attr('value','');
    $('#file').prop('disabled',true);
    $('#btnImgGuardar').prop('disabled',true);
    $('#divOutPut').html('<img id="output" src="http://placehold.it/800x350" alt="">');

    //grilla
    $('#tblSlider tr').each(function(){
        $(this).removeClass('highlight'); 
    });
    
    $('#txtDesCor').cleditor()[0].focus();
    $('#txtDesCor').cleditor()[0].clear();
    //$('#txtDesCor').cleditor()[0].execCommand('inserthtml','');  

    $('#txtDesDet').cleditor()[0].focus();
    $('#txtDesDet').cleditor()[0].clear();
    //$('#txtDesDet').cleditor()[0].execCommand('inserthtml',''); 

    
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

    $.ajax({
                //data:  parametros,
                url:   '../model/serviciosProfesionalConsultaModel.php',
                type:  'post',
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (response){
                //alert('response: ' + response);
                switch(response){
                    case "0":

                        $("#espera").hide();
		
                        var msg='<div class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        break;
                        
                    case "X":

                        $("#espera").hide();
                        
                        var msg='<div class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">1° Ingrese información del servicio.</span></b><br>';
                            msg+='<b><span style="color: #000;">2° Establezca imagen.</b></span>';
                        msg+='</div>';

                       $('#conWarning').html(msg);
                       $('#conWarning').show();
                        
                        $('#tbody').html('');
                        
                        break;
                    
                    default:

                        var r=response.split('|');
                                               
                        $("#espera").hide();
                        $('#tbody').html(r[0]);
                        $('#cantSlider').val(r[1]);
                        break;
                }
            }
        });
    
}

function establecerImagen(){
    
    //alert('establecerImagen ');
        
    var ruta="../../servicio/";
    var img=ruta+$("#nomImg").val();
    $('#divOutPut').html('<img id="output" src="' + img + '"/>');
    $('#divOutPut').trigger('liszt:updated');
    
}

function establecerSesion(){
    
    var poId=$('#spId').val();
    var parametros = {"spId" : poId};            
        $.ajax({
            data:  parametros,
            url:   '../model/serviciosProfesionalEstableceIdSesionModel.php',
            type:  'post'
            , success:  function(response){
                alert('establecerSesion ' + response);
            }
        });
}
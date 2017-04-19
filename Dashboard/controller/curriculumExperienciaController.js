
jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

        //Limpiamos entradas 
        $('#txtExpId').attr('value','');
        $('#txtExpCar').attr('value','');
        $('#txtExpIns').attr('value','');
        $('#dateDesde').attr('value','');
        $('#dateHasta').attr('value','');
        $('#txtPos').attr('value','');
        $('#txtExpDes').attr('value','');
        
        //deshabilitamos botones
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);
//        $('#btnProbar').prop('disabled',true);
                       
        //AJAX
        
        var parametros = { "rut" : $('#rut').val() };   
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumExperienciaConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                    $("#espera").show();
                    $("#botonera").hide();
            },
            success:  function (xml){
                
                //alert('curriculumExperienciaConsultaModel ' + xml);
                
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
                        $('#tbody').html('');
                        break;     
                        
                    case '8':
                                                
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                                              
                        desHabilitar();
                        $('#tbody').html('');
                        break;     
                    
                    case '99':
                                                
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                                              
                        desHabilitar();
                        $('#tbody').html('');
                        break; 
                        
                    case '100':
                                                
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                                              
                        desHabilitar();
                        $('#tbody').html('');
                        break; 
                        
                    case '98':
                                                
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 13px; color: blue;">FAVOR INGRESA TU EXPERIENCIA!</sapn></span></b>';
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();

                        setTimeout(function() {
                            $('#conWarning').hide();
                        }
                        , 5000); 
                        $('#tbody').html('');                     
                        break; 
                    
                    default:
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;                     
                        $("#botonera").show();
                        $("#espera").hide();
                        $('#tbody').html(datos);
                        break;
                }
            }
        });
    
 $('#btnGuardar').click(function(){
     
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#conWarning').hide();
          
       //obtenemos entradas       
        var rut = $('#rut').val();      
        var id = $('#txtExpId').val();      
        var car = $('#txtExpCar').val();      
        var ins = $('#txtExpIns').val();      
        var des = $('#dateDesde').val();
        var has = $('#dateHasta').val(); 
        var pos = $('#txtPos').val(); 
        var desc = $('#txtExpDes').val(); 
        var ta = 'NO';
        
        if($("#ta").is(":checked")){
            var ta = 'SI';
        }
        
        //alert($("#ta").is(":checked"));

        if(car.length == 0) {
                        
            $('#txtExpIns').removeClass('error');   
            $('#txtPosck').removeClass('error'); 
            $('#txtExpDes').removeClass('error');
            $('#dateDesde').removeClass('error');
            $('#dateHasta').removeClass('error');
    
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue cargo.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtExpCar').addClass('error');
            return false;
            
        }
        if(ins.length == 0) {
            
            $('#txtExpCar').removeClass('error');     
            $('#dateDesde').removeClass('error');
            $('#dateHasta').removeClass('error');   
            $('#txtPosck').removeClass('error');  
            $('#txtExpDes').removeClass('error');
                  
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue institución.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtExpIns').addClass('error');
            return false;
            
        }    
        
        //alert('des  ' + des );
        
        if(des.length == 0) {
            
            $('#txtExpCar').removeClass('error');    
            $('#txtExpIns').removeClass('error');     
            $('#txtPosck').removeClass('error');   
            $('#txtExpDes').removeClass('error');
            $('#dateHasta').removeClass('error');

            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<strong>Por favor agregue fecha <b>desde</b>.<strong>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#dateDesde').addClass('error');
            return false;
            
        }
        
        if(validarFormatoFecha($('#dateDesde').val())){
            if(!existeFecha($('#dateDesde').val())){
                //alert("La fecha introducida no existe.");
                $('#txtExpCar').removeClass('error');    
                $('#txtExpIns').removeClass('error');     
                $('#txtPosck').removeClass('error');   
                $('#txtExpDes').removeClass('error');
                $('#dateHasta').removeClass('error');

                var msg='<div style="text-align:center;" class="alert alert-block">';
                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                msg+='<b><span style="color: #000;">La fecha <b>desde</b> no es válida.</span></b>';
                msg+='</div>';

                $('#conWarning').html(msg);
                $('#conWarning').show();
                $('#dateDesde').addClass('error');
                return false;
            }
        }else{
            //alert("El formato de la fecha es incorrecto.");
            $('#txtExpCar').removeClass('error');    
            $('#txtExpIns').removeClass('error');     
            $('#txtPosck').removeClass('error');   
            $('#txtExpDes').removeClass('error');
            $('#dateHasta').removeClass('error');

            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<strong>El formato de la fecha <b>desde</b> es incorrecto, debe ser del tipo dd/mm/yyyy.<strong>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#dateDesde').addClass('error');
            return false;
            
        }
        
        if(has.length == 0) {
            
            $('#txtExpCar').removeClass('error');    
            $('#txtExpIns').removeClass('error');     
            $('#txtPosck').removeClass('error');   
            $('#txtExpDes').removeClass('error');
            $('#dateDesde').removeClass('error');
            
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<strong>Por favor agregue fecha <b>hasta</b>.<strong>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#dateHasta').addClass('error');
            return false;
            
        }
        if(validarFormatoFecha($('#dateHasta').val())){
            if(!existeFecha($('#dateHasta').val())){
                
                $('#txtExpCar').removeClass('error');    
                $('#txtExpIns').removeClass('error');     
                $('#txtPosck').removeClass('error');   
                $('#txtExpDes').removeClass('error');
                $('#dateHasta').removeClass('error');

                var msg='<div style="text-align:center;" class="alert alert-error">';
                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                msg+='<strong>La fecha <b>hasta</b> introducida no existe.<strong>';
                msg+='</div>';

                $('#conWarning').html(msg);
                $('#conWarning').show();
                $('#dateDesde').addClass('error');
                return false;
            }
        }else{
            //alert("El formato de la fecha es incorrecto.");
            $('#txtExpCar').removeClass('error');    
            $('#txtExpIns').removeClass('error');     
            $('#txtPosck').removeClass('error');   
            $('#txtExpDes').removeClass('error');
            $('#dateHasta').removeClass('error');

            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<strong>El formato de la fecha <b>hasta</b> es incorrecto, debe ser del tipo dd/mm/yyyy.<strong>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#dateDesde').addClass('error');
            return false;
            
        }
          
        if(pos == ''){
            pos=1;
        }
        
        //alert('desc.length ' + desc.length);
        
        if(desc.length == 0) {
            
            $('#txtExpCar').removeClass('error');
            $('#txtExpIns').removeClass('error');
            $('#dateDesde').removeClass('error');
            $('#dateHasta').removeClass('error'); 
            $('#txtPosck').removeClass('error');
               
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue una breve descripción del cargo.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtExpDes').addClass('error');
            return false;
            
        }
                       
        $('#txtExpCar').removeClass('error');
        $('#txtExpIns').removeClass('error');
        $('#dateDesde').removeClass('error');
        $('#dateHasta').removeClass('error'); 
        $('#txtPos').removeClass('error');
        $('#txtExpDes').removeClass('error');
        $('#conWarning').hide();                  
     
        des = des.replace(/-/g,'/');
        has = has.replace(/-/g,'/');

        //AJAX
            var parametros = {
                            "rut" : rut,
                            "id" : id,
                            "car": car,
                            "ins": ins,
                            "des": des,
                            "has": has,
                            "pos": pos,
                            "desc": desc,
                            "ta" : ta
            };            

            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumExperienciaAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#espera").show();
            },
            success:  function(xml){     
                
                //alert('curriculumExperienciaAgregaModel ' + xml);
                
                $("#espera").hide();
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
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $("#txtExpId").val(datos);

                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        if (codErr==1){
                            msg+='<b><span style="color: #000;">Ingreso exitoso!.</span></b>';
                        }else{
                            msg+='<b><span style="color: #000;">Modificación exitosa!.</span></b>';
                        }    
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();     
                        setTimeout(function() {$('#conWarning').hide();}, 2000); 
                        
                        consultaExperiencia();
                        pintaRegistro();
                        habilitar();
                        break;
                    
                }              
            }
        });
    });
   
    
$('#tblExperiencia').on('click', 'tbody tr', function(event){
        
    //Pintamos Fila    
    $(this).addClass('highlight').siblings().removeClass('highlight');    
        
    $('#conWarning').html('');
    
    habilitar();
        
    //Obtenemos valores de campos    
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                        esId = $(this).text();
                        break;
                case 1:	
                        esCar = $(this).text();
                        break;
                case 2:
                        esIns = $(this).text();
                        break;
                case 3:
                        esDes = $(this).text();
                        break;
                case 4:
                        esHas = $(this).text();
                        break;        
                case 5:
                        esFli = $(this).text();
                        break;
                case 6:
                        esDescripcion = $(this).text();
                        break;
                case 7:
                        esEx = $(this).text();
                        break;        
            }
        });
    
    //Asignamos valores
    $('#txtExpId').val(esId);
    $('#txtExpCar').val(esCar);
    $('#txtExpIns').val(esIns);
    $('#dateDesde').val(esDes);
    $('#dateHasta').val(esHas);
    $('#txtPos').val(esFli);
    
    if(esEx=='SI'){
        $('#ta').prop('checked', true);
    }else{
        $('#ta').prop('checked', false);
    }
        
    $('#txtExpDes').cleditor()[0].focus();
    $('#txtExpDes').cleditor()[0].clear();
    $('#txtExpDes').cleditor()[0].execCommand('inserthtml',esDescripcion); 
       
});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var car = $('#txtExpCar').val();
    var id = $('#txtExpId').val();
            
        strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
            strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
            strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar experiencia</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar la experiencia <b>' + car + '</b>?</p><br>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
            strModal+='<a style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" id="btnEliExp" class="btn btn-primary"><i class="fa fa-minus-circle"></i>&nbsp;Eliminar</a>';
        strModal+='</div>';
    
    $('#myModal').html(strModal);
   
});

$(document).on("click", "#btnEliExp", function(event){
    
    var rut = $('#rut').val();
    var exId = $('#txtExpId').val();
   
    //Div de Carga
    var strLoad='<div id="espera3" class="modal-body"></div>';

    //AJAX
    var parametros = {"exId" : exId};            
       
    //escondemos mensajería
    $('#conWarning').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumExperienciaEliminaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (xml){  
            
            alert('curriculumExperienciaEliminaModel ' + xml);
            
            $("#modalBody").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            if(codErr==0){
                
                var msg='<div style="text-align:center;">';
                msg+='<b><span style="color: #000;">Eliminación exitosa!.</span></b>';
                msg+='</div>';
                
                $("#modalBody").html(msg);
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000);
                
                var parametros = { "rut" : rut };            
                $.ajax({
                        data:  parametros,
                        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumExperienciaConsultaModel.php",
                        type:  'post',
                        datetype: 'xml',
                    beforeSend: function(){
                            $("#espera").show();
                            $("#botonera").hide();
                    },
                    success:  function (xml){

                        //alert('curriculumExperienciaConsultaModel ' + xml);

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

                                $('#tbody').html('');

                                break;     

                            case '8':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                desHabilitar();

                                $('#tbody').html('');

                                break;     

                            case '99':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                desHabilitar();

                                $('#tbody').html('');

                                break; 
                            
                            case '100':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                desHabilitar();

                                $('#tbody').html('');

                                break; 


                            case '98':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                limpiar();
                                $('#tbody').html('');
                                break; 

                            default:

                                var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                                $("#botonera").show();
                                $("#espera").hide();
                                $('#tbody').html(datos);

                                habilitar();
                                limpiar();

                                break;
                        }
                    }
                });

            }else{

                var msg='<div style="text-align:center;" class="alert alert-block">';
                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                msg+='</div>';
                
                var msg2='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                $("#modalBody").html(msg2);
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000);

                $('#conWarning').html(msg);
                $('#conWarning').show();
               
            }                    
        }
    });
    
});

$('#btnLimpiar').click(function(){

        //limpiamos entradas  
        $('#txtExpId').val('');
        $('#txtExpCar').val('');      
        $('#txtExpIns').val('');      
        $('#dateDesde').val('');
        $('#dateHasta').val('');
        $('#txtPos').val(''); 

    //habilitamos boton modificar, eliminar y cancelar
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);
//        $('#btnProbar').prop('disabled',true);    

        $('#conWarning').html('');

        $('#txtExpDes').cleditor()[0].focus();
        $('#txtExpDes').cleditor()[0].clear();
        $('#txtExpDes').cleditor()[0].execCommand('inserthtml','&nbsp;'); 
    
        //grilla
        $('#tblExperiencia tr').each(function(){            
            $(this).removeClass('highlight'); 
        });

});

    $('#txtPos').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });

});

function validarFormatoFecha(campo) {
      var RegExPattern = /^\d{1,2}\-\d{1,2}\-\d{2,4}$/;
      if ((campo.match(RegExPattern)) && (campo!='')) {
            return true;
      } else {
            return false;
      }
}

function existeFecha(fecha){
      var fechaf = fecha.split("/");
      var day = fechaf[0];
      var month = fechaf[1];
      var year = fechaf[2];
      var date = new Date(year,month,'0');
      if((day-0)>(date.getDate()-0)){
            return false;
      }
      return true;
}

function habilitar(){
    
    //alert('habilitar');
    
    $('#txtExpCar').prop('disabled',false);
    $('#txtExpIns').prop('disabled',false);
    $('#dateDesde').prop('disabled',false);
    $('#dateHasta').prop('disabled',false);
    $('#txtPos').prop('disabled',false);
    $('#txtExpDes').prop('disabled',false);

    //deshabilitamos botones
    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
    $('#btnLimpiar').prop('disabled',false);
//    $('#btnProbar').prop('disabled',false);
    
}

function desHabilitar(){
    
    $('#txtExpCar').prop('disabled',true);
    $('#txtExpIns').prop('disabled',true);
    $('#dateDesde').prop('disabled',true);
    $('#dateHasta').prop('disabled',true);
    $('#txtPos').prop('disabled',true);
    $('#txtExpDes').prop('disabled',true);

    //deshabilitamos botones
    $('#btnGuardar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
    $('#btnLimpiar').prop('disabled',true);
//    $('#btnProbar').prop('disabled',true);
    
}

function limpiar(){
    
    
    //limpiamos entradas  
        $('#txtExpId').val('');
        $('#txtExpCar').val('');      
        $('#txtExpIns').val('');      
        $('#dateDesde').val('');
        $('#dateHasta').val('');
        $('#txtPos').val(''); 

    //habilitamos boton modificar, eliminar y cancelar
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);
//        $('#btnProbar').prop('disabled',true);    

        $('#conWarning').html('');

        $('#txtExpDes').cleditor()[0].focus();
        $('#txtExpDes').cleditor()[0].clear();
                
        //grilla
        $('#tblExperiencia tr').each(function(){            
            $(this).removeClass('highlight'); 
        });

    
}

function pintaRegistro(){  
    
    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblExperiencia tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#txtExpId').val()){
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
 
 
 function consultaExperiencia(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
     
        var parametros = { "rut" : $('#rut').val() };                     
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumExperienciaConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            success:  function (xml){
                
                //alert('curriculumExperienciaConsultaModel ' + xml);                
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
                        
                        $('#tbody').html('');
                       
                        break;     
                        
                    case '8':
                                                
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                                              
                        desHabilitar();
                        
                        $('#tbody').html('');
                       
                        break;     
                    
                    case '99':
                                                
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                                              
                        desHabilitar();
                        
                        $('#tbody').html('');
                       
                        break; 
                        
                    case '100':
                                                
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                                              
                        desHabilitar();
                        
                        $('#tbody').html('');
                       
                        break; 
                        
                    case '98':
                                                
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 13px; color: blue;">FAVOR INGRESA TU EXPERIENCIA!</sapn></span></b>';
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';

                        setTimeout(function() {
                            $('#conWarning').hide();
                        }
                        , 5000); 
                        $('#tbody').html('');                     
                        break; 
                    
                    default:
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;                        
                        $('#tbody').html(datos);
                        break;
                        
                }
            }
        });
 }

jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

        //Limpiamos entradas  
        $('#appendedInput3').attr('value','');      
        $('#textarea2').attr('value','');
                                           
        //AJAX
        var parametros = { "rut" : rut };            
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/presentacionConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){
                
                //alert(xml);
                
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
                    
                    
                    case '98':
                        
                        //limpiar();
                        $("#espera").hide();

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        //BOTONES
                        $('#btnAgregar').prop('disabled',false);
                        $('#btnEliminar').prop('disabled',true);
//                        $('#btnProbar').prop('disabled',true);

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break;    
                    
                    default:
                        
                        $("#espera").hide();
                        
                        var presentacion = xmlDoc.getElementsByTagName('PRESENTACION')[0].childNodes[0].nodeValue;                        
                        var url = xmlDoc.getElementsByTagName('URL')[0].childNodes[0].nodeValue;                        

                        //BOTONES
                        $('#btnAgregar').prop('disabled',false);
                        $('#btnEliminar').prop('disabled',false);
//                        $('#btnProbar').prop('disabled',false);

                        $("#appendedInput3").val(url);                            
                        $('#textarea2').cleditor()[0].focus();
                        $('#textarea2').cleditor()[0].clear();
                        $('#textarea2').cleditor()[0].execCommand('inserthtml',presentacion);  

                        break;
                }
            }
        });
    
 $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#conWarning').hide();
                  
        var rut = $('#rut').val();
        var flic = $('#appendedInput3').val();
        var text = $('#textarea2').val();

        //alert('text ' + text);

        if(text == '') {

            $('#conFlick').removeClass('error');
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor escriba su presentación.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            return false;
            
        }
        
        if(flic == '') {

            $('#conFlick').removeClass('error');
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese ID Google Drive de foto principal.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            return false;
            
        }
        
        $('#conFlick').removeClass('error');
        $('#conWarning').hide();
                          
        //AJAX
            var parametros = {
                            "rut" : rut,
                            "flic": flic,
                            "text": text
                        };            
       
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/presentacionAgregaModel.php",
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

                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();    

                        //deshabilitamos botones
                        $('#btnAgregar').prop('disabled',false);
                        $('#btnEliminar').prop('disabled',false);               
                        break;
                }              
            }
        });
                
    });
    
    
    $('#btnEliminar').click(function(){

        var strModal='';
        var rut = $('#rut').val();

        if(rut.length>0){
            
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3>Eliminar Presentación</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>¿Desea eliminar la presentación de su perfil?</p>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                strModal+='<a id="btnEliReg" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Eliminar</a>';
            strModal+='</div>';
            
            $('#myModal').html(strModal);
            $('#myModal').show();
        };

    });

    $(document).on("click", "#btnEliReg", function(event){

        //Div de Carga
        var strLoad='<div id="espera2" class="modal-body"></div>';

        //AJAX
        var rut = $('#rut').val();
        var img = $('#nomImg').val();
        var parametros = {
                            "rut" : rut,
                            "img" : img  
                         };            

        //escondemos mensajería
        $('#conWarning').hide();

        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/presentacionEliminaModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            beforeSend: function(){
                $("#modalBody").html(strLoad);
            },
            success:  function (xml){  
                
                //alert('presentacionEliminaModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                if(codErr==0){

                    var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                    $("#modalBody").html(msg);
                    $("#modalBody").show();
                    setTimeout(function() {$('#myModal').modal('hide');}, 1000);

                    var msg2='<div style="text-align:center;" class="alert alert-block">';
                    msg2+='<b><span style="color: black;">' + '[98] ' + 'SIN PRESENTACIÓN INGRESADA' + '</span></b>';
                    msg2+='</div>';

                    $('#conWarning').html(msg2);
                    $('#conWarning').show();

                    //INICIALIZAMOS
                    $('#btnAgregar').prop('disabled',false);
                    $('#btnEliminar').prop('disabled',true);
//                    $('#btnProbar').prop('disabled',true); 
                    
                    $('#appendedInput3').val('');
                    $('#textarea2').val('');

                    $('#textarea2').cleditor()[0].focus();
                    $('#textarea2').cleditor()[0].clear();
                    $('#textarea2').cleditor()[0].execCommand('inserthtml','&nbsp;');  

                }else{

                    var msg='<div style="text-align:center;" class="alert alert-block">';
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

        $('#appendedInput3').val('');
        $('#textarea2').val('');

        //deshabilitamos botones
        $('#btnAgregar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
//        $('#btnProbar').prop('disabled',true); 

        $('#conWarning').html('');
        
        $('#textarea2').cleditor()[0].focus();
        $('#textarea2').cleditor()[0].clear();
        $('#textarea2').cleditor()[0].execCommand('inserthtml','&nbsp;');  
                        
    });

});

function limpiar(){

    $('#appendedInput3').val('');
    $('#textarea2').val('');

    //deshabilitamos botones
    $('#btnAgregar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',true);
//    $('#btnProbar').prop('disabled',true); 

    $('#conWarning').html('');

    $('#textarea2').cleditor()[0].focus();
    $('#textarea2').cleditor()[0].clear();
    $('#textarea2').cleditor()[0].execCommand('inserthtml','&nbsp;');  

 
}

 function is_url(str){
   
    //Declaramos la expresión regular que se usará para validar la url pasada por parámetro
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    //Retorna true en caso de que la url sea valida o false en caso contrario
    return regexp.test(str);
    
 }
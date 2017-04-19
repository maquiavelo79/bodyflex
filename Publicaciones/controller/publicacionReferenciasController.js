
jQuery(document).ready(function() {

var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        //var rut=13661574;
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
        
    
    $(document).on("click", "#btnAgrRef", function(event){

        var puId = $('#txtPuId').val(); 
        var tipRef = $('#cmbTipRef').val(); 
        var ref = $('#txtNomRef').val(); 
        var desRef = $('#txtDesRef').val(); 
        var idPubRef = $('#txtIdRef').val(); // ID de referencia ingresada si existe //

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
                
        //AJAX
        var parametros = {
                        "puId" : puId,
                        "tipRef" : tipRef,
                        "ref" : ref,
                        "desRef" : desRef,
                        "idPubRef" : idPubRef
        };            

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionReferenciaAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#modalBody").html(strLoad);
                },
                success:  function(xml){     
                
                //alert('publicacionReferenciaAgregaModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                            
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningRefAso').html(msg);
                        break;

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningRefAso').html(msg);
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningRefAso').html(msg);
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningRefAso').html(msg);
                        break;    

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningRefAso').html(msg);
                        break;
                    
                    default:

                        var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        $("#modalBody").html(msg);

                        //limpiamos inpuT, menos ID de Publicación
                        $('#cmbTipRef option[value="(SELECCIONE)"]').prop('selected', true);
                        $('#cmbTipRef').trigger('liszt:updated');
                        $('#txtNomRef').val(''); 
                        $('#txtDesRef').val(''); 
                        $('#txtIdRef').val(''); 
   
                        //Limpiamos warning
                        $('#warningRefAso').html('');
   
                        var parametros2 = {"puId" : puId};  
                        $.ajax({
                            data:  parametros2,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionConsultaReferenciaAsociadaModel.php",
                            type:  'post',
                            datetype: 'xml',
                            async: true,
                            success:  function (xml){     
                            
                                //alert(xml);
                            
                                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                            
                                switch(codErr){
                                    case '9':
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        var msg2='<div style="text-align:center;" class="alert alert-block">';
                                        msg2+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg2+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg2+='</div>';
                            
                                        $('#warningRefAso').html(msg2);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                        
                                    case '8':
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        var msg2='<div style="text-align:center;" class="alert alert-block">';
                                        msg2+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg2+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg2+='</div>';
                            
                                        $('#warningRefAso').html(msg2);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                    
                                    case '99':
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        var msg2='<div style="text-align:center;" class="alert alert-block">';
                                        msg2+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg2+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg2+='</div>';
                            
                                        $('#warningRefAso').html(msg2);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                     
                                    case '100':
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        var msg2='<div style="text-align:center;" class="alert alert-block">';
                                        msg2+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg2+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg2+='</div>';
                            
                                        $('#warningRefAso').html(msg2);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break; 
                                    
                                    case '98':
                            
                                        var msg='<div style="text-align:center;">';
                                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        var msg2='<div style="text-align:center;" class="alert alert-block">';
                                        msg2+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg2+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg2+='</div>';
                            
                                        $('#warningRefAso').html(msg2);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                        
                                    default:
                                        //alert(response);
                                        
                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $('#listRefAsociadas').html(datos);
                                            
                                }              
                            }
                        });   
                            
                        setTimeout(function() {$('#myModal').modal('hide');}, 750);
                        break;  
                        
                }              
            }
        });
  
    });
   
   
   
    $('#a-table').on('click', 'tbody tr', function(event){

        //alert('a-table');
        
        //asignamos valores a elementos
        $('#txtIdRef').attr('value','');
        $('#txtNomRef').attr('value','');
        $('#txtDesRef').attr('value','');
        $("#cmbTipRef").prop('selectedIndex',0);
        $('#cmbTipRef').trigger('liszt:updated');

        //restablecemos formato
        $('table tr').css('background','white');
        $('table tr').css('color','black');

        //aplicamos formato
        $(this).css('background','gray');
        $(this).css('color','white');

        //Obtenemos valores de campos    
            $(this).children("td").each(function(index){
                switch(index){
                    case 0:	
                        pubID = $(this).text();
                        break;
                    case 1:
                        refTip = $(this).text();
                        break;
                    case 2:
                        refID = $(this).text();
                        break;
                    case 3:
                        nomRef = $(this).text();
                        break;
                    case 4:
                        desRef = $(this).text();
                        break;
                }
            });
                
            $('#botoneraRef').hide();
            $('#esperaRef').show();
               
            setTimeout(function(){
                
                //asignamos valores a elementos
                $('#txtIdRef').attr('value',refID);
                $('#txtNomRef').attr('value',nomRef);
                $('#txtDesRef').attr('value',desRef);
                
                var cmb = document.getElementById("cmbTipRef"); 
                for (var i = 0; i < cmb.length; i++) {
                    //  Aca haces referencia al "option" actual
                    var opt = cmb[i];

                    // Haces lo que te de la gana aca
                    if(refTip == opt.value){
                       $("#cmbTipRef").prop('selectedIndex',i);
                       $('#cmbTipRef').trigger('liszt:updated');
                       break;
                    }
                }
                                
                //restablecemos
                $('#botoneraRef').show();
                $('#esperaRef').hide();
                
            }, 750);
            
            
                
  
    });
        
    $(document).on("click", "#btnLimpiarRef", function(event){

        $('#botoneraRef').hide();
        $('#esperaRef').show();

        $('#a-table tr').each(function(){
            $(this).css('background','white');
            $(this).css('color','black');
        });    

        setTimeout(function(){
                
            //$('#txtPuId').val(''); IDENTIFICADOR DE PUBLICACIÓN NO LIMPIAR
            $('#cmbTipRef').val('SELECCIONE'); 
            $('#cmbTipRef').trigger('liszt:updated');
            $('#txtNomRef').val(''); 
            $('#txtDesRef').val(''); 
            $('#txtIdRef').val(''); // ID de referencia ingresada si existe //

            //restablecemos
            $('#botoneraRef').show();
            $('#esperaRef').hide();
                
        }, 250);


    });

    $('#btnGuardarRef').click(function(){
            
        var strModal='';
        var nom = $('#txtNomRef').val();

        if(nom.length>0){
            
            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación - Agregar referencia</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>¿Desea agregar referencia <b>' + nom + '</b> al listado de referencias?</p><br>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
                strModal+='<a id="btnAgrRef" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-plus-circle"></i>&nbsp;Agregar</a>';
            strModal+='</div>';

            $('#myModal').html(strModal);
            
        }else{
            $('#myModal').modal('hide');
        }
    }); 
    
    $('#btnEliminarRef').click(function(){
            
        var strModal='';
        var nom = $('#txtNomRef').val();

        //alert('nom ' + nom);

        if(nom.length>0){

            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3>Publicación - Eliminar referencia</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>¿Desea eliminar referencia <b>' + nom + '</b> al listado de referencias?</p><br>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
                strModal+='<a id="btnEliRef" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-minus-circle"></i>&nbsp;Eliminar</a>';
            strModal+='</div>';

           $('#myModal').html(strModal);
            
        }else{
            $('#myModal').modal('hide');
        }
    }); 
    
    $(document).on("click", "#btnEliRef", function(event){

        var puId = $('#txtPuId').val(); 
        var reId = $('#txtIdRef').val(); // ID de referencia ingresada si existe //

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
                
        //alert('puId ' + puId);
        //alert('reId ' + reId);
                
        //AJAX
        var parametros = {
                        "puId" : puId,
                        "reId" : reId
        };            

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionReferenciaEliminaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#modalBody").html(strLoad);
                },
                success:  function (xml){     
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                                
                switch(codErr){
                    case '9':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningRefAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;
                    
                    case '8':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningRefAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;
                    
                    case '99':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningRefAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;
                        
                    case '100':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningRefAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;    
                    
                    default:

                        var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                       
                        $("#modalBody").html(msg);

                        //limpiamos inpuT, menos ID de Publicación
                        $('#cmbTipRef option[value="(SELECCIONE)"]').prop('selected', true);
                        $('#cmbTipRef').trigger('liszt:updated');
                        $('#txtNomRef').val(''); 
                        $('#txtDesRef').val(''); 
                        $('#txtIdRef').val(''); 
                              
                        //Consulta actualiza referencias      
                        var parametros2 = {"puId" : puId};  
                        $.ajax({
                            data:  parametros2,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionConsultaReferenciaAsociadaModel.php",
                            type:  'post',
                            datetype: 'xml',
                            async: true,
                            success:  function (xml){     
                            
                                //alert(xml);
                            
                                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                            
                                switch(codErr){
                                    case '9':
                                        
                                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        $("#warningRefAso").html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                        
                                    case '8':
                                        
                                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        $("#warningRefAso").html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                      
                                    case '100':
                                        
                                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        $("#warningRefAso").html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                    
                                    case '99':
                                        
                                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        $("#warningRefAso").html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                    
                                    case '98':
                                        
                                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        $("#warningRefAso").html(msg);
                                        $("#modalBody").html(msg);
                                        
                                        //limpiamos listado
                                        $('#listRefAsociadas').html('');
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                        
                                    default:
                                        
                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $('#listRefAsociadas').html(datos);
                                            
                                }              
                            }
                        });         
                              
                        setTimeout(function() {$('#myModal').modal('hide');}, 750);
                        break;  
                        
                }              
            }
        });
  
    });
   
    
});

function cargaReferencias(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        //Consultamos referencias para actualización de tabla
            var puId = $('#txtPuId').val();
            var parametros2 = {"puId" : puId};  
            $.ajax({
                    data:  parametros2,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionConsultaReferenciaModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async: true,
                    success:  function (xml){     
                    
                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                    
                        switch(codErr){
                            case '9':

                                var msg='<div style="text-align:center;">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                                msg+='</div>';
                                $('#listRefAsociadas').html('');
                                break;

                            case '8':

                                var msg='<div style="text-align:center;">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Error: Procedimiento no retorna datos.</span></b>';
                                msg+='</div>';
                                $('#listRefAsociadas').html('');
                                break;

                            case '99':

                                var msg='<div style="text-align:center;">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + codErr + ' ' + desErr + '</span></b>';
                                msg+='</div>';
                                $('#listRefAsociadas').html('');
                                break;

                            case '100':

                                var msg='<div style="text-align:center;">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + codErr + ' ' + desErr + '</span></b>';
                                msg+='</div>';
                                $('#listRefAsociadas').html('');
                                break;    

                            case '98':

                                var msg='<div style="text-align:center;">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Favor agregue referencias.</span></b>';
                                msg+='</div>';
                                $('#listRefAsociadas').html('');
                                break;

                            default:

                                var strVal;
                                $('#cmbTipRef').empty();
                                $('#cmbTipRef').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                                $xml.find('REGISTRO').each(function () {  
                                    strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                                    if(strVal.length>0){
                                        $('#cmbTipRef').append($('<option>', {value:strVal, text:strVal}));
                                    }
                                });
                                $('#cmbTipRef').trigger('liszt:updated');
                                break;
                                
                        }             
                    }
            }); 
            
    }
    
    function publicacionObtenerReferenciasAsociadas(){
        //OBTENEMOS REFERENCIAS ASOCIADAS A LA PUBLICACIÓN
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
            $("#warningRefAso").html('');
            $("#listRefAsociadas").html('');
            $('#listRefAsociadas').trigger('liszt:updated'); 
        
            var puId = $('#txtPuId').val();
            var parametros2 = {"puId" : puId};  
            $.ajax({
                    data:  parametros2,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionConsultaReferenciaAsociadaModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async: true,
                    success:  function (xml){     
                    
                    //alert('xml ' + xml);
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                    
                    switch(codErr){
                        case '9':
                            
                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $('#warningRefAso').html(msg);
                            break;
                            
                        case '8':

                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $('#warningRefAso').html(msg);
                            break;
                        
                        case '99':

                            var msg='<div style="text-align:center;" style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $('#warningRefAso').html(msg);
                            break;
                          
                        case '100':

                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $('#warningRefAso').html(msg);
                            break;    
                            
                        case '98':
                            
                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $('#warningRefAso').html(msg);
                            break;
                        
                        default:
                            
                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            $("#listRefAsociadas").html(datos);
                            $('#listRefAsociadas').trigger('liszt:updated');    
                            
                    }              
                }
            }); 
    }
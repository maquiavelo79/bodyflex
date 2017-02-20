
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
    $('#cmbTip').empty();
    $('#cmbTip').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));                                           
    $('#cmbTip').append($('<option>', {value:'CUENTA CORRIENTE', text:'CUENTA CORRIENTE'}));      
    $('#cmbTip').append($('<option>', {value:'CUENTA AHORRO', text:'CUENTA AHORRO'}));      
    $('#cmbTip').append($('<option>', {value:'CUENTA VISTA', text:'CUENTA VISTA'}));  
    $('#cmbTip').trigger('liszt:updated');

    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/regProCtaCsuBcoModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function (xml){
            
            //alert('regProDirCsuRegModel ' + xml);
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#bcoWarning1").html(msg);
                        break;   
                    
                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#bcoWarning1").html(msg);
                        break;     
                    
                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#bcoWarning1").html(msg);
                        break;     
                        
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#bcoWarning1").html(msg);
                        break;         
                       
                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#bcoWarning1").html(msg);
                        break;     
                    
                    default:
                       
                        var strVal;
                        
                        $('#cmbBanco').empty();
                        $('#cmbBanco').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        
                        $xml.find('REGISTRO').each(function () {
                            strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            if(strVal.length>0){
                                $('#cmbBanco').append($('<option>', {value:strVal, text:strVal}));
                            }
                        });
                        
                        $('#cmbBanco').trigger('liszt:updated');
                        break;

                }

        }
    });   
              
        
        $('#id').val($('#idPos').val());

        //OBTENEMOS VALORES
        $('#bcoWarning1').html('');
        limpiar();

       
        var parametros = { 
            "id" : $('#idPos').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/regProCtaCsuModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProCtaCsuModel ' + xml);                

                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#bcoWarning1').hide();
                        $('#bcoWarning1').hide();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();
                        limpiarHead();    

                        break;     

                    case '97':

                        var estado = xmlDoc.getElementsByTagName('ESTADO')[0].childNodes[0].nodeValue;
                        var rut = xmlDoc.getElementsByTagName('RUT')[0].childNodes[0].nodeValue;
                        var nombres = xmlDoc.getElementsByTagName('NOMBRES')[0].childNodes[0].nodeValue;
                        var apellidos = xmlDoc.getElementsByTagName('APELLIDOS')[0].childNodes[0].nodeValue;

                        $('#resEst').val(estado);
                        $('#resRut').val(rut);
                        $('#resRut').keyup();
                        $('#resNom').val(nombres);
                        $('#resApe').val(apellidos);

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';

                        $('#direccion').show();
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();
                        $('#botonera').show();
                        setTimeout(function() {
                            $('#bcoWarning1').hide();
                            $('#bcoWarning2').hide();
                        }, 2000);
                        break;         

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();
                        break;     

                    default:

                        var estado = xmlDoc.getElementsByTagName('ESTADO')[0].childNodes[0].nodeValue;
                        var rut = xmlDoc.getElementsByTagName('RUT')[0].childNodes[0].nodeValue;
                        var nombres = xmlDoc.getElementsByTagName('NOMBRES')[0].childNodes[0].nodeValue;
                        var apellidos = xmlDoc.getElementsByTagName('APELLIDOS')[0].childNodes[0].nodeValue;
                        var datos = xmlDoc.getElementsByTagName('DIRECCIONES')[0].childNodes[0].nodeValue;

                        $('#direccion').show();
                        $('#botonera').show();
                        $('#direcciones').show();
                        
                        $('#resEst').val(estado);
                        $('#resRut').val(rut);
                        $('#resRut').keyup();
                        $('#resNom').val(nombres);
                        $('#resApe').val(apellidos);
                        $('#tbody').html(datos);
                                                
                        break;
                }
            }
        });

            
    $('#tblCuentas').on('click', 'tbody tr', function(event){

        $('#bcoWarning1').html('');    
        $('#bcoWarning2').html('');    

        //Obtenemos valores de campos    
            $(this).children("td").each(function(index2){
                switch (index2){
                    case 0:	
                            bcoId = $(this).text();
                            break;
                    case 1:
                            bcoBco = $(this).text();
                            break;
                    case 2:
                            bcoNum = $(this).text();
                            break;
                    case 3:
                            bcoTip = $(this).text();
                            break;    
                }
            });

        //Asignamos valores
            $('#txtId').val(bcoId);
            $('#txtNum').val(bcoNum);
            
            $("#cmbBanco option").each(function(){
                if(bcoBco==$(this).val()){
                    $("#cmbBanco option[value='" + bcoBco + "']").prop('selected', true);   //ESTABLECEMOS COMO SELECCIONADO 
                    $('#cmbBanco').trigger('liszt:updated');
                }
            });
            $("#cmbTip option").each(function(){
                if(bcoTip==$(this).val()){
                    $("#cmbTip option[value='" + bcoTip + "']").prop('selected', true);   //ESTABLECEMOS COMO SELECCIONADO 
                    $('#cmbTip').trigger('liszt:updated');
                }
            });
            
            $(this).addClass('highlight').siblings().removeClass('highlight');

    });
    

    $('#btnGuardar').click(function(){
    
        //OBTENEMOS VALORES
        $('#bcoWarning1').html('');    
        $('#bcoWarning1').html('');    

        if($('#cmbBanco').val()=='(SELECCIONE)'){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione el banco de la cuenta.</span></b>';
            msg+='</div>'; 
            $('#bcoWarning1').html(msg);
            $('#bcoWarning1').show();
            $('#bcoWarning2').html(msg);
            $('#bcoWarning2').show();
            return false;
        } 

        if($('#cmbTip').val()=='(SELECCIONE)'){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione el tipo de cuenta.</span></b>';
            msg+='</div>'; 
            $('#bcoWarning1').html(msg);
            $('#bcoWarning1').show();
            $('#bcoWarning2').html(msg);
            $('#bcoWarning2').show();
            return false;
        } 

        if($('#txtNum').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese el número de cuenta.</span></b>';
            msg+='</div>'; 
            $('#bcoWarning1').html(msg);
            $('#bcoWarning1').show();
            $('#bcoWarning2').html(msg);
            $('#bcoWarning2').show();
            return false;
        } 
        
        var idBco;
        if($('#txtId').val()==''){
            idBco=0;
        }else{
            idBco=$('#txtId').val();
        }
                
        var parametros = { 
            "id" : idBco
            , "banco" : $('#cmbBanco').val()
            , "tipo" : $('#cmbTip').val()
            , "num" : $('#txtNum').val()
            , "rut" : $('#resRut').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/regProCtaIngModModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProCtaIngModModel ' + xml);                

                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        $("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();
                        break; 

                    case '8':

                        $("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();
                        $("#botonera").hide();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();
                        $("#botonera").hide();
                        break;     

                    default:

                        consultaCuentas();
                        pintaRegistro();
                        
                        $("#botonera").show();
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var id = xmlDoc.getElementsByTagName('IDENTIFICADOR')[0].childNodes[0].nodeValue;
                        
                        $('#txtId').val(id);
                        
                        if(datos==1){
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Cuenta ingresada exitosamente!.</span></b>';
                            msg+='<div id="esperaWarning"></div>';
                            msg+='</div>';
                        }else{
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Cuenta modificada exitosamente!.</span></b>';
                            msg+='<div id="esperaWarning"></div>';
                            msg+='</div>';
                        }    

                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();
                        
                        setTimeout(function() {
                            $('#bcoWarning1').hide();
                            $('#bcoWarning2').hide();
                        }, 2000);
                        
                        break;
                }
            }
        });

    });

    $('#btnEliminar').click(function(){
    
        var strModal='';
        var id = $('#txtId').val();
        var num = $('#txtNum').val();

        if(id.length>0){
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar Dirección</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>¿Desea eliminar cuenta número ' + '<b>' + num + '</b>?' + '</p>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
                strModal+='<a id="btnEliReg" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-minus-circle"></i>&nbsp;Eliminar</a>';
            strModal+='</div>';
            $('#myModal').html(strModal);
            $('#myModal').modal('show');
        };

    });

    $(document).on("click", "#btnEliReg", function(event){
    
        //Div de Carga
        var strLoad='<div id="espera2" class="modal-body"></div>';
    
        //OBTENEMOS VALORES
        $('#bcoWarning1').html('');    
        $('#bcoWarning2').html('');    

        if($('#txtId').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-alert">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Para eliminar debe seleccionar un registro.</span></b>';
            msg+='</div>'; 
            
            $('#bcoWarning1').html(msg);
            $('#bcoWarning1').show();
            
            $('#bcoWarning2').html(msg);
            $('#bcoWarning2').show();
            return false;
        } 

        var parametros = { 
            "id" : $('#txtId').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/regProCtaEliModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#modalBody").html(strLoad);
            },
            success:  function (xml){

                //alert('regProDirEliModel ' + xml);                

                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        $("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                        break; 

                    case '8':

                        $("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                        break;     

                    default:

                        limpiar();
                        consultaCuentas();
                                 
                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: #000;">Cuenta eliminada exitosamente!.</span></b>';
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';

                        $("#botonera").show();    
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                        break;
                }
            }
        });

    });
    
    
    $('#btnLimpiar').click(function(){
    
        $('#txtId').val('');
        
        $("select#cmbBanco").prop('selectedIndex', 0);
        $('#cmbBanco').trigger('liszt:updated');
        
        $("select#cmbTip").prop('selectedIndex', 0);
        $('#cmbTip').trigger('liszt:updated');
        
        $('#txtNum').val('');
        
        $('#bcoWarning1').html('');
        $('#bcoWarning2').html('');
        
        $('#tblCuentas tr').each(function(){
            $(this).removeClass('highlight');   
        });
                
    });
    
    
           
});

    function limpiar(){
        
        $('#txtId').val('');
        
        $("select#cmbBanco").prop('selectedIndex', 0);
        $('#cmbBanco').trigger('liszt:updated');
        
        $("select#cmbTip").prop('selectedIndex', 0);
        $('#cmbTip').trigger('liszt:updated');
        
        $('#txtNum').val('');
        
        $('#bcoWarning1').html('');
        $('#bcoWarning2').html('');
        
        $('#tblCuentas tr').each(function(){
            $(this).removeClass('highlight');   
        });
        
    }
    
    function limpiarHead(){
        
        $('#resEst').val('');
        $('#resRut').val('');
        $('#resNom').val('');
        $('#resApe').val('');
        
    }
    

    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }
 
 function consultaCuentas(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol; 
    
        //OBTENEMOS VALORES
        $('#bcoWarning1').html('');

        if($('#id').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese ID de postulación</span></b>';
            msg+='</div>'; 
            $('#bcoWarning1').html(msg);
            $('#bcoWarning1').show();
            $('#bcoWarning2').html(msg);
            $('#bcoWarning2').show();
            return false;
        }else{
            $('#bcoWarning1').html('');
        } 

        var parametros = { 
            "id" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/regProCtaCsuModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProDirCsuModel ' + xml);                

                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();

                        break;     

                    case '97':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').show();
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').hide();
                        $('#direcciones').hide();
                        setTimeout(function() {
                            $('#bcoWarning1').hide();
                            $('#bcoWarning2').hide();
                        }, 2000);
                        break;         

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();

                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#bcoWarning1').html(msg);
                        $('#bcoWarning1').show();
                        $('#bcoWarning2').html(msg);
                        $('#bcoWarning2').show();

                        break;     

                    default:

                        var estado = xmlDoc.getElementsByTagName('ESTADO')[0].childNodes[0].nodeValue;
                        var rut = xmlDoc.getElementsByTagName('RUT')[0].childNodes[0].nodeValue;
                        var nombres = xmlDoc.getElementsByTagName('NOMBRES')[0].childNodes[0].nodeValue;
                        var apellidos = xmlDoc.getElementsByTagName('APELLIDOS')[0].childNodes[0].nodeValue;
                        //var correo = xmlDoc.getElementsByTagName('CORREO')[0].childNodes[0].nodeValue;
                        var datos = xmlDoc.getElementsByTagName('DIRECCIONES')[0].childNodes[0].nodeValue;

                        $('#direccion').show();
                        $('#botonera').show();
                        $('#direcciones').show();
                        
                        $('#resEst').val(estado);
                        $('#resRut').val(rut);
                        $('#resRut').keyup();
                        $('#resNom').val(nombres);
                        $('#resApe').val(apellidos);
                        $('#tbody').html(datos);
                                                
                        break;
                }
            }
        });

 }
 
 function pintaRegistro(){  

    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblCuentas tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#txtId').val()){
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
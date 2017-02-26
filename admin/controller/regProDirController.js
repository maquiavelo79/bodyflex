

jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
          
    $('#cmbTipo').empty();
    $('#cmbTipo').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));                                           
    $('#cmbTipo').append($('<option>', {value:'PARTICULAR', text:'PARTICULAR'}));      
    $('#cmbTipo').append($('<option>', {value:'COMERCIAL', text:'COMERCIAL'}));      
    $('#cmbTipo').trigger('liszt:updated');
    
    $('#cmbPublica').empty();
    $('#cmbPublica').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));                                           
    $('#cmbPublica').append($('<option>', {value:'NO', text:'NO'}));      
    $('#cmbPublica').append($('<option>', {value:'SI', text:'SI'}));      
    $('#cmbPublica').trigger('liszt:updated');

    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProDirCsuRegModel.php",
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

                        $("#warningCat").html(msg);
                        break;   
                    
                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningCat").html(msg);
                        break;     
                    
                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningCat").html(msg);
                        break;     
                        
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningCat").html(msg);
                        break;         
                       
                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningCat").html(msg);
                        break;     
                    
                    default:
                       
                        var strVal;
                        
                        $('#cmbRegion').empty();
                        $('#cmbRegion').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        
                        $('#cmbProvincia').empty();
                        $('#cmbProvincia').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        
                        $('#cmbComuna').empty();
                        $('#cmbComuna').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        
                        $xml.find('REGISTRO').each(function () {
                            strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            if(strVal.length>0){
                                $('#cmbRegion').append($('<option>', {value:strVal, text:strVal}));
                            }
                        });
                        
                        $('#cmbRegion').trigger('liszt:updated');
                        $('#cmbProvincia').trigger('liszt:updated');
                        $('#cmbComuna').trigger('liszt:updated');
                        break;

                }

        }
    });   
              
    $('#btnBsq').click(function(){

        //OBTENEMOS VALORES
        $('#dirWarning1').html('');
        //limpiar();

        if($('#id').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese ID de postulación</span></b>';
            msg+='</div>'; 
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            return false;
        }else{
            $('#dirWarning1').html('');
        } 

        $('#idPos').val($('#id').val());

        var parametros = { 
            "id" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProDirCsuModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
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
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#dirWarning2').hide();
                        $('#direcciones').hide();
                        
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
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
                        msg+='</div>';

                        $('#direccion').show();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#botonera').show();

                        break;         

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();

                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();

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

    });
    
    //Cuando cambia categoría deben cambiar etiquetas!!
    $("#cmbRegion").change(function(){
      
        if($('#cmbRegion').val()!='(SELECCIONE)'){        
            var parametros = {"region" : $('#cmbRegion').val()};            
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProDirCsuProvModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                success:  function (xml){

                //alert('regProDirCsuProvModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;   

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;     
                            
                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;         

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;     

                    default:

                        var strVal;
                        
                        $('#cmbProvincia').empty();
                        $('#cmbProvincia').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        
                        $xml.find('REGISTRO').each(function () {
                            strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            if(strVal.length>0){
                                $('#cmbProvincia').append($('<option>', {value:strVal, text:strVal}));
                            }
                        });
                        
                        $('#cmbProvincia').trigger('liszt:updated');
                        break;
                        
                    }
                }
            });
        }else{

            $('#cmbProvincia').empty();
            $('#cmbProvincia').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
            $('#cmbProvincia').trigger('liszt:updated');

            $('#cmbComuna').empty();
            $('#cmbComuna').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
            $('#cmbComuna').trigger('liszt:updated');
  
        }
        
        
    });   
    
    //Cuando cambia categoría deben cambiar etiquetas!!
    $("#cmbProvincia").change(function(){
      
        if($('#cmbProvincia').val()!='(SELECCIONE)'){   
            
            //alert($('#cmbProvincia').val());
            
            var parametros = {"provincia" : $('#cmbProvincia').val()};            
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProDirCsuComModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                success:  function (xml){

                //alert('regProDirCsuComModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;   

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;     
                            
                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;         

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;     

                    default:

                        var strVal;
                        
                        $('#cmbComuna').empty();
                        $('#cmbComuna').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        
                        $xml.find('REGISTRO').each(function () {
                            strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            if(strVal.length>0){
                                $('#cmbComuna').append($('<option>', {value:strVal, text:strVal}));
                            }
                        });
                        
                        $('#cmbComuna').trigger('liszt:updated');
                        break;
                        
                    }
                }
            });
        }else{
            $('#cmbComuna').empty();
            $('#cmbComuna').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
            $('#cmbComuna').trigger('liszt:updated');
        }
        
        
    });  
        
    $('#tblDirecciones').on('click', 'tbody tr', function(event){

            //$("input[type='checkbox']").prop('checked', true).change();
            //$('#chkPub').prop('checked', true).change();
            //$('#chkPub').trigger('liszt:updated');
            //$('#chkPub').attr("checked","checked");
            //$('#chkPub').attr('checked', $('#chkPub').is(':checked'));
            //document.getElementById("chkPub").checked = true;

        $('#dirWarning1').html('');    
        $('#dirWarning2').html('');    

        //Obtenemos valores de campos    
            $(this).children("td").each(function(index2){
                switch (index2){
                    case 0:	
                            dirId = $(this).text();
                            break;
                    case 1:
                            dirReg = $(this).text();
                            break;
                    case 2:
                            dirPro = $(this).text();
                            break;
                    case 3:
                            dirCom = $(this).text();
                            break;
                    case 4:
                            dirTip = $(this).text();
                            break;
                    case 5:
                            dirCal= $(this).text(); 
                            break;    
                    case 6:
                            dirVp= $(this).text(); 
                            break;    
                    case 7:
                            dirNum= $(this).text(); 
                            break; 
                    case 8:
                            dirPub= $(this).text(); 
                            break;  
                    case 9:
                            dirLat= $(this).text(); 
                            break;      
                    case 10:
                            dirLon= $(this).text(); 
                            break;    
                }
            });

        //Asignamos valores
            $('#txtIdDir').val(dirId);
            $('#txtVp').val(dirVp);   

            $('#txtCal').val(dirCal);
            $('#txtNum').val(dirNum);

            $("#cmbRegion option").each(function(){
                if(dirReg==$(this).val()){
                    $("#cmbRegion option[value='" + dirReg + "']").prop('selected', true);   //ESTABLECEMOS COMO SELECCIONADO 
                    $('#cmbRegion').trigger('liszt:updated');
                    obtieneProvincias();
                }
            });
            $("#cmbProvincia option").each(function(){
                if(dirPro==$(this).val()){
                    $("#cmbProvincia option[value='" + dirPro + "']").prop('selected', true);   //ESTABLECEMOS COMO SELECCIONADO 
                    $('#cmbProvincia').trigger('liszt:updated');
                    obtieneComunas();
                }
            });
            $("#cmbComuna option").each(function(){
                if(dirCom==$(this).val()){
                    $("#cmbComuna option[value='" + dirCom + "']").prop('selected', true);   //ESTABLECEMOS COMO SELECCIONADO 
                    $('#cmbComuna').trigger('liszt:updated');
                }
            });
            $("#cmbTipo option").each(function(){
                if(dirTip==$(this).val()){
                    $("#cmbTipo option[value='" + dirTip + "']").prop('selected', true);   //ESTABLECEMOS COMO SELECCIONADO 
                    $('#cmbTipo').trigger('liszt:updated');
                }
            });
            $("#cmbPublica option").each(function(){
                if(dirPub==$(this).val()){
                    $("#cmbPublica option[value='" + dirPub + "']").prop('selected', true);   //ESTABLECEMOS COMO SELECCIONADO 
                    $('#cmbPublica').trigger('liszt:updated');
                }
            });

            //alert('dirLat ' + dirLat);
            //alert('dirLon ' + dirLon);

            $("#txtLatitud").val(dirLat);
            $("#txtLongitud").val(dirLon);

            $(this).addClass('highlight').siblings().removeClass('highlight');

    });
    

    $('#btnGuardar').click(function(){
    
        //OBTENEMOS VALORES
        $('#dirWarning1').html('');    
        $('#dirWarning2').html('');    

        if($('#cmbRegion').val()=='(SELECCIONE)'){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione región para la dirección.</span></b>';
            msg+='</div>'; 
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false;
        } 

        if($('#cmbProvincia').val()=='(SELECCIONE)'){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione provincia para la dirección.</span></b>';
            msg+='</div>'; 
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false;
        } 

        if($('#cmbComuna').val()=='(SELECCIONE)'){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione comuna para la dirección.</span></b>';
            msg+='</div>'; 
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false;
        } 

        if($('#cmbTipo').val()=='(SELECCIONE)'){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione el tipo de dirección.</span></b>';
            msg+='</div>'; 
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false;
        } 

        if($('#cmbPublica').val()=='(SELECCIONE)'){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor indique si la dirección puede ser mostrada en su perfil.</span></b>';
            msg+='</div>'; 
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false;
        } 

        if($('#txtCal').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue calle de dirección.</span></b>';
            msg+='</div>'; 
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false;
        } 

        if($('#txtNum').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue número de la dirección.</span></b>';
            msg+='</div>'; 
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false;
        } 
        
        var idDir;
        if($('#txtIdDir').val()==''){
            idDir=0;
        }else{
            idDir=$('#txtIdDir').val();
        }
        
        //alert($('#resRut').val());
        
        var parametros = {
            "idPos" : $('#idPos').val()
            , "id" : $('#txtIdDir').val()
            , "region" : $('#cmbRegion').val()
            , "provincia" : $('#cmbProvincia').val()
            , "comuna" : $('#cmbComuna').val()
            , "tipo" : $('#cmbTipo').val()
            , "publica" : $('#cmbPublica').val()
            , "txtVp" : $('#txtVp').val()
            , "txtCal" : $('#txtCal').val()
            , "txtNum" : $('#txtNum').val()
            , "rut" : $('#resRut').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProDirIngModModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProDirIngModModel ' + xml);                

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
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        break; 

                    case '8':

                        $("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        $("#botonera").hide();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        $("#botonera").hide();
                        break;     

                    default:

                        $("#botonera").show();
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var id = xmlDoc.getElementsByTagName('IDENTIFICADOR')[0].childNodes[0].nodeValue;
                        
                        $('#txtIdDir').val(id);
                        
                        if($('#cmbPublica').val()=='SI'){
                            var resp = asociarCoordenadas(id);
                        }
                        
                        consultaDirecciones();
                        pintaRegistro();
                        
                        if(datos==1){
                            if(resp==true){
                                var msg='<div style="text-align:center;" class="alert alert-success">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Dirección ingresada exitosamente!.</span></b>';
                                msg+='</div>';
                            }else{
                                var msg='<div style="text-align:center;" class="alert alert-success">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Dirección ingresada exitosamente!.</span></b><br>';
                                msg+='<b><span style="color: red;">Coordenadas no fueron registradas!</span></b>';
                                msg+='</div>';
                            }
                        }else{
                            if(resp==true){
                                var msg='<div style="text-align:center;" class="alert alert-success">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Dirección modificada exitosamente!.</span></b>';
                                msg+='</div>';
                            }else{
                                var msg='<div style="text-align:center;" class="alert alert-success">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Dirección modificada exitosamente!.</span></b><br>';
                                msg+='<b><span style="color: red;">Coordenadas no fueron registradas!</span></b>';
                                msg+='</div>';
                            }    
                        }    

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        break;
                }
            }
        });

    });

    $('#btnEliminar').click(function(){
    
        //OBTENEMOS VALORES
        $('#dirWarning1').html('');    
        $('#dirWarning2').html('');    

        if($('#txtIdDir').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-alert">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Para eliminar debe seleccionar un registro.</span></b>';
            msg+='</div>'; 
            
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false;
        } 

        var parametros = { 
            "id" : $('#txtIdDir').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProDirEliModel.php",
                type:  'post',
                datetype: 'xml',
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
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
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        break; 

                    case '8':

                        $("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        $("#botonera").hide();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        $("#botonera").hide();
                        break;     

                    default:

                        limpiar();
                        consultaDirecciones();

                        $("#botonera").show();
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        if(datos==1){
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Dirección eliminada exitosamente!.</span></b>';
                            msg+='</div>';
                        }    

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        
                        break;
                }
            }
        });

    });
    
    
    $('#btnLimpiar').click(function(){
    
        $('#txtIdDir').val('');
        
        $("select#cmbRegion").prop('selectedIndex', 0);
        $('#cmbRegion').trigger('liszt:updated');
        
        $("select#cmbProvincia").prop('selectedIndex', 0);
        $('#cmbProvincia').trigger('liszt:updated');
        
        $("select#cmbComuna").prop('selectedIndex', 0);
        $('#cmbComuna').trigger('liszt:updated');
        
        $("select#cmbTipo").prop('selectedIndex', 0);
        $('#cmbTipo').trigger('liszt:updated');
        
        $("select#cmbPublica").prop('selectedIndex', 0);
        $('#cmbPublica').trigger('liszt:updated');
        
        $('#txtVp').val('');
        $('#txtCal').val('');
        $('#txtNum').val('');
        
        $('#txtLatitud').val('');
        $('#txtLongitud').val('');
        
        $('#dirWarning1').html('');
        $('#dirWarning2').html('');
        
        $('#tblDirecciones tr').each(function(){
            $(this).removeClass('highlight');   
        });
                
    });
    
    
           
});



    function limpiar(){
        
        $('#txtIdDir').val('');
        
        $("select#cmbRegion").prop('selectedIndex', 0);
        $('#cmbRegion').trigger('liszt:updated');
        
        $("select#cmbProvincia").prop('selectedIndex', 0);
        $('#cmbProvincia').trigger('liszt:updated');
        
        $("select#cmbComuna").prop('selectedIndex', 0);
        $('#cmbComuna').trigger('liszt:updated');
        
        $("select#cmbTipo").prop('selectedIndex', 0);
        $('#cmbTipo').trigger('liszt:updated');
        
        $("select#cmbPublica").prop('selectedIndex', 0);
        $('#cmbPublica').trigger('liszt:updated');
        
        $('#txtVp').val('');
        $('#txtCal').val('');
        $('#txtNum').val('');
        
        $('#dirWarning1').html('');
        $('#dirWarning2').html('');
        
        $('#tblDirecciones tr').each(function(){
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

 function obtieneProvincias(){
     
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //alert('obtieneProvincias');
    
     if($('#cmbRegion').val()!='(SELECCIONE)'){        
            var parametros = {"region" : $('#cmbRegion').val()};            
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProDirCsuProvModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
                success:  function (xml){

                //alert('regProDirCsuProvModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#dirWarning1').html(msg);
                            $('#dirWarning1').show();
                            $('#dirWarning2').html(msg);
                            $('#dirWarning2').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#dirWarning1').html(msg);
                            $('#dirWarning1').show();
                            $('#dirWarning2').html(msg);
                            $('#dirWarning2').show();
                            break;   

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#dirWarning1').html(msg);
                            $('#dirWarning1').show();
                            $('#dirWarning2').html(msg);
                            $('#dirWarning2').show();
                            break;     
                            
                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#dirWarning1').html(msg);
                            $('#dirWarning1').show();
                            $('#dirWarning2').html(msg);
                            $('#dirWarning2').show();
                            break;         

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#dirWarning1').html(msg);
                            $('#dirWarning1').show();
                            $('#dirWarning2').html(msg);
                            $('#dirWarning2').show();
                            break;     

                    default:

                        var strVal;
                        
                        $('#cmbProvincia').empty();
                        $('#cmbProvincia').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        
                        $xml.find('REGISTRO').each(function () {
                            strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            if(strVal.length>0){
                                $('#cmbProvincia').append($('<option>', {value:strVal, text:strVal}));
                            }
                        });
                        
                        $('#cmbProvincia').trigger('liszt:updated');
                        break;
                        
                    }
                }
            });
        }else{

            $('#cmbProvincia').empty();
            $('#cmbProvincia').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
            $('#cmbProvincia').trigger('liszt:updated');

            $('#cmbComuna').empty();
            $('#cmbComuna').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
            $('#cmbComuna').trigger('liszt:updated');
  
        }
 }
 
 function obtieneComunas(){
     
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //alert('obtieneComunas');
    
    if($('#cmbProvincia').val()!='(SELECCIONE)'){   
            
        //alert($('#cmbProvincia').val());

        var parametros = {"provincia" : $('#cmbProvincia').val()};            
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProDirCsuComModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            success:  function (xml){

            //alert('regProDirCsuComModel ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        break;   

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        break;     

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        break;         

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        break;     

                default:

                    var strVal;

                    $('#cmbComuna').empty();
                    $('#cmbComuna').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));

                    $xml.find('REGISTRO').each(function () {
                        strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                        if(strVal.length>0){
                            $('#cmbComuna').append($('<option>', {value:strVal, text:strVal}));
                        }
                    });

                    $('#cmbComuna').trigger('liszt:updated');
                    break;

                }
            }
        });
    }else{
        $('#cmbComuna').empty();
        $('#cmbComuna').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
        $('#cmbComuna').trigger('liszt:updated');
    }
    
 }
 
 function consultaDirecciones(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol; 
    
        //OBTENEMOS VALORES
        $('#dirWarning1').html('');

        if($('#id').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese ID de postulación</span></b>';
            msg+='</div>'; 
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false;
        }else{
            $('#dirWarning1').html('');
        } 

        var parametros = { 
            "id" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProDirCsuModel.php",
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
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();

                        break;     

                    case '97':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').show();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').hide();
                        $('#direcciones').hide();

                        break;         

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();

                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#direccion').hide();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();

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
    $('#tblDirecciones tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#txtIdDir').val()){
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
 
function asociarCoordenadas(idDir){  
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol; 
    
    var comuna = document.getElementById("cmbComuna").value;
    var provincia = document.getElementById("cmbProvincia").value;
    var region = document.getElementById("cmbRegion").value;
    var calle = document.getElementById("txtCal").value;
    var numero = document.getElementById("txtNum").value;
    var address = calle +' '+ numero +' '+ comuna +' '+ provincia+' '+region;
        
    alert('address '+address);    
        
    var rsp=0;
    
        var parametros = { 
            "idDir" : idDir
            ,   "address" : address
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProDirIngCorModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProDirIngCorModel ' + xml);                

                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':
                        rsp=9;
                        break; 

                    case '8':
                        rsp=8;
                        break; 

                    case '98':
                        rsp=98;
                        break;     

                    case '97':
                        rsp=97;
                        break;         

                    case '99':
                        return false;
                        break; 

                    case '100':
                        rsp=100;
                        break;  
                        
                    case '101': //IMPOSIBLE OBTENER COORDENADAS
                        rsp=100;
                        break;  

                    default:
                        rsp = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        break;
                }
            }
        });
    
        if(rsp==1){
            return true;
        }else{
            return false;
        }
            
}


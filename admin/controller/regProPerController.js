
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
    $('#cmbTec').empty();
    $('#cmbTec').append($('<option>', {value:0, text:'(TECNICO)'}));                                           
    $('#cmbTec').append($('<option>', {value:1, text:'SI'}));      
    $('#cmbTec').append($('<option>', {value:2, text:'NO'}));      
    $('#cmbTec').trigger('liszt:updated');
    
    $('#cmbPro').empty();
    $('#cmbPro').append($('<option>', {value:0, text:'(PROFESIONAL)'}));                                           
    $('#cmbPro').append($('<option>', {value:1, text:'SI'}));      
    $('#cmbPro').append($('<option>', {value:2, text:'NO'}));      
    $('#cmbPro').trigger('liszt:updated');

    $('#cmbLic').empty();
    $('#cmbLic').append($('<option>', {value:0, text:'(LICENCIADO)'}));                                           
    $('#cmbLic').append($('<option>', {value:1, text:'SI'}));      
    $('#cmbLic').append($('<option>', {value:2, text:'NO'}));      
    $('#cmbLic').trigger('liszt:updated');

    $('#cmbMas').empty();
    $('#cmbMas').append($('<option>', {value:0, text:'(MASTER)'}));                                           
    $('#cmbMas').append($('<option>', {value:1, text:'SI'}));      
    $('#cmbMas').append($('<option>', {value:2, text:'NO'}));      
    $('#cmbMas').trigger('liszt:updated');

    $('#cmbMba').empty();
    $('#cmbMba').append($('<option>', {value:0, text:'(MBA)'}));                                           
    $('#cmbMba').append($('<option>', {value:1, text:'SI'}));      
    $('#cmbMba').append($('<option>', {value:2, text:'NO'}));      
    $('#cmbMba').trigger('liszt:updated');

    $('#cmbDoc').empty();
    $('#cmbDoc').append($('<option>', {value:0, text:'(DOCTOR)'}));                                           
    $('#cmbDoc').append($('<option>', {value:1, text:'SI'}));      
    $('#cmbDoc').append($('<option>', {value:2, text:'NO'}));      
    $('#cmbDoc').trigger('liszt:updated');

    $('#cmbCer').empty();
    $('#cmbCer').append($('<option>', {value:0, text:'(SELECCIONE)'}));                                           
    $('#cmbCer').append($('<option>', {value:1, text:'SI'}));      
    $('#cmbCer').append($('<option>', {value:2, text:'NO'}));      
    $('#cmbCer').trigger('liszt:updated');

    $('#cmbDip').empty();
    $('#cmbDip').append($('<option>', {value:0, text:'(SELECCIONE)'}));                                           
    $('#cmbDip').append($('<option>', {value:1, text:'SI'}));      
    $('#cmbDip').append($('<option>', {value:2, text:'NO'}));      
    $('#cmbDip').trigger('liszt:updated');

    $('#cmbTor').empty();
    $('#cmbTor').append($('<option>', {value:0, text:'(SELECCIONE)'}));                                           
    $('#cmbTor').append($('<option>', {value:1, text:'SI'}));      
    $('#cmbTor').append($('<option>', {value:2, text:'NO'}));      
    $('#cmbTor').trigger('liszt:updated');

                  
    $('#btnBsq').click(function(){

        //OBTENEMOS VALORES
        $('#dirWarning1').html('');
        $('#dirWarning2').html('');
        
        //LIMPIAMOS
        limpiar();

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
            $('#dirWarning2').html('');
        } 

        var parametros = { 
            "id" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProPerCsuModel.php",
                type:  'post',
                datetype: 'xml',
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProPerCsuModel ' + xml);                

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

                        $('#perfilacion').hide();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#perfilacion').hide();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#perfilacion').hide();
                        
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        limpiarHead();    

                        break;     

                    case '97':

                        var estado = xmlDoc.getElementsByTagName('ESTADO')[0].childNodes[0].nodeValue;
                        var rut = xmlDoc.getElementsByTagName('RUT')[0].childNodes[0].nodeValue;
                        var nombres = xmlDoc.getElementsByTagName('NOMBRE')[0].childNodes[0].nodeValue;
                        var apellidos = xmlDoc.getElementsByTagName('APELLIDO')[0].childNodes[0].nodeValue;

                        $('#resEst').val(estado);
                        $('#resRut').val(rut);
                        $('#resRut').keyup();
                        $('#resNom').val(nombres);
                        $('#resApe').val(apellidos);

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#perfilacion').show();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        $('#botonera').show();
                        $('#btnAlta').hide();    

                        break;         

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#perfilacion').hide();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();

                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#perfilacion').hide();
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();

                        break;     

                    default:
                        
                        var estado = xmlDoc.getElementsByTagName('ESTADO')[0].childNodes[0].nodeValue;
                        var rut = xmlDoc.getElementsByTagName('RUT')[0].childNodes[0].nodeValue;
                        var nombres = xmlDoc.getElementsByTagName('NOMBRE')[0].childNodes[0].nodeValue;
                        var apellidos = xmlDoc.getElementsByTagName('APELLIDO')[0].childNodes[0].nodeValue;
                        var email = xmlDoc.getElementsByTagName('EMAIL')[0].childNodes[0].nodeValue;
                        
                        var perId = xmlDoc.getElementsByTagName('perId')[0].childNodes[0].nodeValue;
                        var perEst1 = xmlDoc.getElementsByTagName('perEst1')[0].childNodes[0].nodeValue;
                        var perEst2 = xmlDoc.getElementsByTagName('perEst2')[0].childNodes[0].nodeValue;
                        var perEst3 = xmlDoc.getElementsByTagName('perEst3')[0].childNodes[0].nodeValue;
                        var perEst4 = xmlDoc.getElementsByTagName('perEst4')[0].childNodes[0].nodeValue;
                        var perEst5 = xmlDoc.getElementsByTagName('perEst5')[0].childNodes[0].nodeValue;
                        var perEst6 = xmlDoc.getElementsByTagName('perEst6')[0].childNodes[0].nodeValue;
                        var perCer = xmlDoc.getElementsByTagName('perCer')[0].childNodes[0].nodeValue;
                        var perDip = xmlDoc.getElementsByTagName('perDip')[0].childNodes[0].nodeValue;
                        var perTor = xmlDoc.getElementsByTagName('perTor')[0].childNodes[0].nodeValue;
                        var perSex = xmlDoc.getElementsByTagName('perSex')[0].childNodes[0].nodeValue;
                        var perExp = xmlDoc.getElementsByTagName('perExp')[0].childNodes[0].nodeValue;
                        var perReg = xmlDoc.getElementsByTagName('perReg')[0].childNodes[0].nodeValue;
                        var perEda = xmlDoc.getElementsByTagName('perEda')[0].childNodes[0].nodeValue;
                        var perEsp = xmlDoc.getElementsByTagName('perEsp')[0].childNodes[0].nodeValue;

                        //alert('email ' + email);

                        $('#perfilacion').show();
                        $('#botonera').show();
                        
                        $('#resEst').val(estado);
                        $('#resRut').val(rut);
                        $('#resRut').keyup();
                        $('#resNom').val(nombres);
                        $('#resApe').val(apellidos);    
                        $('#resEma').val(email); 
                        
                        $('#txtId').val(perId);
                        $('#cmbTec').val(perEst1);
                        $('#cmbTec').trigger('liszt:updated');
                        $('#cmbPro').val(perEst2);
                        $('#cmbPro').trigger('liszt:updated');
                        $('#cmbLic').val(perEst3);
                        $('#cmbLic').trigger('liszt:updated');
                        $('#cmbMas').val(perEst4);
                        $('#cmbMas').trigger('liszt:updated');
                        $('#cmbMba').val(perEst5);
                        $('#cmbMba').trigger('liszt:updated');
                        $('#cmbDoc').val(perEst6);
                        $('#cmbDoc').trigger('liszt:updated');
                        $('#cmbCer').val(perCer);
                        $('#cmbCer').trigger('liszt:updated');
                        $('#cmbDip').val(perDip);
                        $('#cmbDip').trigger('liszt:updated');
                        $('#cmbTor').val(perTor);
                        $('#cmbTor').trigger('liszt:updated');
                        $('#cmbSex').val(perSex);
                        $('#cmbSex').trigger('liszt:updated');
                        $('#cmbExp').val(perExp);
                        $('#cmbExp').trigger('liszt:updated');
                        $('#cmbReg').val(perReg);
                        $('#cmbReg').trigger('liszt:updated');
                        $('#cmbEda').val(perEda);
                        $('#cmbEda').trigger('liszt:updated');
                        $('#txtEsp').val(perEsp);
                        $('#txtEsp').trigger('liszt:updated');
                        
                        //ALTA DE PROFESIONAL
                        $('#btnAlta').show();                 
                        break;
                }
            }
        });

    });
    
    $('#btnGuardar').click(function(){
    var swEst=0;
        
        //OBTENEMOS VALORES
        $('#dirWarning1').html('');    
        $('#dirWarning2').html('');  

        if($('#cmbTec').val()!=0){
            //alert('cmbTec '+$('#cmbTec').val());
            swEst=1;
        } 

        if($('#cmbPro').val()!=0){
            //alert('cmbPro '+$('#cmbPro').val());
            swEst=1;
        } 

        if($('#cmbLic').val()!=0){
            //alert('cmbLic '+$('#cmbLic').val());
            swEst=1;
        } 

        if($('#cmbMas').val()!=0){
            //alert('cmbMas '+$('#cmbMas').val());
            swEst=1;
        } 
        
        if($('#cmbMba').val()!=0){
            //alert('cmbMba '+$('#cmbMba').val());
            swEst=1;
        } 

        if($('#cmbDoc').val()!=0){
            //alert('cmbDoc '+$('#cmbDoc').val());
            swEst=1;
        } 
        
        if(swEst==0){
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: black;">Seleccione nivel estudios!</span></b>';
            msg+='</div>';
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false; 
        }
        
        if(!($('#cmbTec').val()==1 || $('#cmbPro').val()==1 || $('#cmbLic').val()==1 || $('#cmbMas').val()==1 || $('#cmbMba').val()==1 || $('#cmbDoc').val()==1)){
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: black;">El profesional debe tener al menos un título o grado académico!</span></b>';
            msg+='</div>';
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false; 
        }
        
        if($('#cmbCer').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: black;">Debe indicar si el profesional posee certificaciones</span></b>';
            msg+='</div>';
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false; 
        } 
        
        if($('#cmbDip').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: black;">Debe indicar si el profesional posee diplomados</span></b>';
            msg+='</div>';
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false; 
        } 
        
        if($('#cmbTor').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: black;">Debe indicar si el profesional ha participado en torneos deportivos</span></b>';
            msg+='</div>';
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false; 
        } 
        
        if($('#cmbReg').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: black;">Debe seleccionar la región en donde se imparte la accesoría</span></b>';
            msg+='</div>';
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false; 
        } 
        
        if($('#cmbSex').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: black;">Debe seleccionar sexo</span></b>';
            msg+='</div>';
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false; 
        }
        
        if($('#cmbExp').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: black;">Debe seleccionar experiencia</span></b>';
            msg+='</div>';
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false; 
        }
        
        if($('#cmbEda').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: black;">Debe seleccionar edad</span></b>';
            msg+='</div>';
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false; 
        }
        
        if($('#txtEsp').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: black;">Debe ingresar especialidad</span></b>';
            msg+='</div>';
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false; 
        }
        
        var id;
        if($('#txtId').val()==''){
            id=0;
        }else{
            id=$('#txtId').val();
        }
        
        var region=$('#cmbReg').val();
        var tecnico=$('#cmbTec').val();
        var profesional=$('#cmbPro').val();
        var licenciado=$('#cmbLic').val();
        var master=$('#cmbMas').val();
        var mba=$('#cmbMba').val();
        var doctor=$('#cmbDoc').val();
        var certificacion=$('#cmbCer').val();
        var diplomado=$('#cmbDip').val();
        var torneo=$('#cmbTor').val();
        var sexo=$('#cmbSex').val();
        var experiencia=$('#cmbExp').val();
        var edad=$('#cmbEda').val();
        var especialidad=$('#txtEsp').val();

        var parametros = { 
            "id" : id
            , "region" : region
            , "tecnico" : tecnico
            , "profesional" : profesional
            , "licenciado" : licenciado
            , "master" : master
            , "mba" : mba
            , "doctor" : doctor
            , "certificacion" : certificacion
            , "diplomado" : diplomado
            , "torneo" : torneo
            , "sexo" : sexo
            , "experiencia" : experiencia
            , "edad" : edad
            , "especialidad" : especialidad
            , "rut" : $('#resRut').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProPerIngModModel.php",
                type:  'post',
                datetype: 'xml',
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProPerIngModModel ' + xml);                

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
                        var datos = xmlDoc.getElementsByTagName('ACCION')[0].childNodes[0].nodeValue;
                        var id = xmlDoc.getElementsByTagName('IDENTIFICADOR')[0].childNodes[0].nodeValue;
                        
                        $('#txtId').val(id);
                        
                        if(datos==1){
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Perfil ingresada exitosamente!.</span></b>';
                            msg+='</div>';
                        }else{
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Perfil modificado exitosamente!.</span></b>';
                            msg+='</div>';
                        }    

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        $('#btnAlta').show();
                        location.reload();
                        
                        break;
                }
            }
        });

    });

    $('#btnAlta').click(function(){
        
                
        //OBTENEMOS VALORES
        $('#dirWarning1').html('');    
        $('#dirWarning2').html('');  

        var id;
        if($('#id').val()==''){
            id=0;
        }else{
            id=$('#id').val();
        }
       
        var nom=$('#resNom').val();
        var ape=$('#resApe').val();
        var email=$('#resEma').val();
       
        var parametros = {"id":id, "nom":nom, "ape":ape, "email":email };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProPerAltModel.php",
                type:  'post',
                datetype: 'xml',
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProPerIngModModel ' + xml);                

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

                    case '98':

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

                    case '97':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        $("#botonera").show();
                        $("#btnAlta").hide();
                        break;         

                    case '96':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        $("#botonera").show();
                        $("#btnAlta").hide();
                        break;      

                    case '95':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        $("#botonera").show();
                        $("#btnAlta").hide();
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
                         
                        $('#txtId').val(id);
                        
                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Profesional dado de alta exitosamente!.</span></b>';
                        msg+='</div>';
                        
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        $('#dirWarning2').html(msg);
                        $('#dirWarning2').show();
                        $('#btnAlta').hide();
                        break;
                }
            }
        });

    });



    $('#btnEliminar').click(function(){
    
        //OBTENEMOS VALORES
        $('#dirWarning1').html('');  
        $('#dirWarning2').html('');    

        if($('#txtId').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-alert">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Para eliminar debe existir un perfil actual o identificador de postulación.</span></b>';
            msg+='</div>'; 
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            $('#dirWarning2').html(msg);
            $('#dirWarning2').show();
            return false;
        } 

        var parametros = { 
            "id" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProPerEliModel.php",
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

                        $("#botonera").show();
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        if(datos==1){
                            
                            limpiar();                       
                            
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Perfil eliminado exitosamente!.</span></b>';
                            msg+='</div>';
                            
                            $('#dirWarning1').html(msg);
                            $('#dirWarning1').show();    
                            $('#dirWarning2').html(msg);
                            $('#dirWarning2').show();
                            $('#btnAlta').hide();
                            
                        }    
                        
                        break;
                }
            }
        });

    });
    
    
    $('#btnLimpiar').click(function(){
    
        $('#txtId').val('');
        $('#txtEsp').val('');

        $("select#cmbTec").prop('selectedIndex', 0);
        $('#cmbTec').trigger('liszt:updated');

        $("select#cmbPro").prop('selectedIndex', 0);
        $('#cmbPro').trigger('liszt:updated');

        $("select#cmbLic").prop('selectedIndex', 0);
        $('#cmbLic').trigger('liszt:updated');

        $("select#cmbMas").prop('selectedIndex', 0);
        $('#cmbMas').trigger('liszt:updated');

        $("select#cmbDoc").prop('selectedIndex', 0);
        $('#cmbDoc').trigger('liszt:updated');

        $("select#cmbCer").prop('selectedIndex', 0);
        $('#cmbCer').trigger('liszt:updated');

        $("select#cmbDip").prop('selectedIndex', 0);
        $('#cmbDip').trigger('liszt:updated');

        $("select#cmbTor").prop('selectedIndex', 0);
        $('#cmbTor').trigger('liszt:updated');

        $("select#cmbReg").prop('selectedIndex', 0);
        $('#cmbReg').trigger('liszt:updated');

        $("select#cmbSex").prop('selectedIndex', 0);
        $('#cmbSex').trigger('liszt:updated');

        $("select#cmbExp").prop('selectedIndex', 0);
        $('#cmbExp').trigger('liszt:updated');

        $("select#cmbEda").prop('selectedIndex', 0);
        $('#cmbEda').trigger('liszt:updated');

        $('#dirWarning1').html('');   
        $('#dirWarning2').html('');        
    
    });
    
    
           
});


    function limpiar(){

        $('#txtId').val('');
        $('#txtEsp').val('');

        $("select#cmbTec").prop('selectedIndex', 0);
        $('#cmbTec').trigger('liszt:updated');

        $("select#cmbPro").prop('selectedIndex', 0);
        $('#cmbPro').trigger('liszt:updated');

        $("select#cmbLic").prop('selectedIndex', 0);
        $('#cmbLic').trigger('liszt:updated');

        $("select#cmbMas").prop('selectedIndex', 0);
        $('#cmbMas').trigger('liszt:updated');

        $("select#cmbDoc").prop('selectedIndex', 0);
        $('#cmbDoc').trigger('liszt:updated');

        $("select#cmbCer").prop('selectedIndex', 0);
        $('#cmbCer').trigger('liszt:updated');

        $("select#cmbDip").prop('selectedIndex', 0);
        $('#cmbDip').trigger('liszt:updated');

        $("select#cmbTor").prop('selectedIndex', 0);
        $('#cmbTor').trigger('liszt:updated');

        $("select#cmbReg").prop('selectedIndex', 0);
        $('#cmbReg').trigger('liszt:updated');

        $("select#cmbSex").prop('selectedIndex', 0);
        $('#cmbSex').trigger('liszt:updated');

        $("select#cmbExp").prop('selectedIndex', 0);
        $('#cmbExp').trigger('liszt:updated');

        $("select#cmbEda").prop('selectedIndex', 0);
        $('#cmbEda').trigger('liszt:updated');

        $('#dirWarning1').html('');   
        $('#dirWarning2').html('');        


    }

    function limpiarHead(){

        $('#resEst').val('');
        $('#resRut').val('');
        $('#resNom').val('');
        $('#resApe').val('');

    }

 
 
 
 
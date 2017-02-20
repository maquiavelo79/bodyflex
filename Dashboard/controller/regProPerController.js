
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
     
        $('#id').val($('#idPos').val());              

        //OBTENEMOS VALORES
        $('#dirWarning1').html('');
        $('#dirWarning2').html('');
        
        var parametros = { 
            "id" : $('#idPos').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/regProPerCsuModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
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

                        $('#perfilacion').show();
                        $('#botonera').show();
                        
                        $('#resEst').val(estado);
                        $('#resRut').val(rut);
                        $('#resRut').keyup();
                        $('#resNom').val(nombres);
                        $('#resApe').val(apellidos);             
                        $('#txtId').val(perId);
                        
                        //TECNICO
                            $('#cmbTec').empty();
                            if(perEst1==1){
                                $('#cmbTec').append($('<option>', {value:1, text:'SI'}));      
                            }else{
                                $('#cmbTec').append($('<option>', {value:2, text:'NO'}));      
                            }    
                            $('#cmbTec').val(perEst1);
                            $('#cmbTec').trigger('liszt:updated');
                        
                        //PROFESIONAL
                            $('#cmbPro').empty();
                            if(perEst2==1){
                                $('#cmbPro').append($('<option>', {value:1, text:'SI'}));      
                            }else{
                                $('#cmbPro').append($('<option>', {value:2, text:'NO'}));      
                            }    
                            $('#cmbPro').val(perEst2);
                            $('#cmbPro').trigger('liszt:updated');
                        
                        //LICENCIADO
                            $('#cmbLic').empty();
                            if(perEst3==1){
                                $('#cmbLic').append($('<option>', {value:1, text:'SI'}));      
                            }else{
                                $('#cmbLic').append($('<option>', {value:2, text:'NO'}));      
                            }    
                            $('#cmbLic').val(perEst3);
                            $('#cmbLic').trigger('liszt:updated');
                        
                        //MAGISTER
                            $('#cmbMas').empty();
                            if(perEst4==1){
                                $('#cmbMas').append($('<option>', {value:1, text:'SI'}));      
                            }else{
                                $('#cmbMas').append($('<option>', {value:2, text:'NO'}));      
                            }    
                            $('#cmbMas').val(perEst4);
                            $('#cmbMas').trigger('liszt:updated');
                        
                        //MBA
                            $('#cmbMba').empty();
                            if(perEst5==1){
                                $('#cmbMba').append($('<option>', {value:1, text:'SI'}));      
                            }else{
                                $('#cmbMba').append($('<option>', {value:2, text:'NO'}));      
                            }    
                            $('#cmbMba').val(perEst5);
                            $('#cmbMba').trigger('liszt:updated');
                        
                        //DOCTORADO
                            $('#cmbDoc').empty();
                            if(perEst6==1){
                                $('#cmbDoc').append($('<option>', {value:1, text:'SI'}));      
                            }else{
                                $('#cmbDoc').append($('<option>', {value:2, text:'NO'}));      
                            }                      
                            $('#cmbDoc').trigger('liszt:updated');
                        
                        //CERTIFICACIONES    
                            $('#cmbCer').empty();
                            if(perCer==1){
                                $('#cmbCer').append($('<option>', {value:1, text:'SI'}));      
                            }else{
                                $('#cmbCer').append($('<option>', {value:2, text:'NO'}));      
                            }    
                            $('#cmbCer').val(perCer);
                            $('#cmbCer').trigger('liszt:updated');
                        
                        //DIPLOMADO
                            $('#cmbDip').empty();
                            if(perDip==1){
                                $('#cmbDip').append($('<option>', {value:1, text:'SI'}));      
                            }else{
                                $('#cmbDip').append($('<option>', {value:2, text:'NO'}));      
                            } 
                            $('#cmbDip').val(perDip);
                            $('#cmbDip').trigger('liszt:updated');
                        
                        //TORNEOS
                            $('#cmbTor').empty();
                            if(perTor==1){
                                $('#cmbTor').append($('<option>', {value:1, text:'SI'}));      
                            }else{
                                $('#cmbTor').append($('<option>', {value:2, text:'NO'}));      
                            }    
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

 
 
 
 
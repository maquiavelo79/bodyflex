
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
              
    $('#btnBsq').click(function(){

        //OBTENEMOS VALORES
        $('#colWarning1').html('');
        $('#colWarning2').html('');
        limpiar();

        if($('#id').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese ID de producto</span></b>';
            msg+='</div>'; 
            $('#colWarning1').html(msg);
            $('#colWarning1').show();
            return false;
        }else{
            $('#colWarning1').html('');
            $('#colWarning1').hide();
        } 

        var parametros = { 
            "id" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProColCsuProModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProMedCsuProModel ' + xml);                

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

                        $('#color').hide();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#color').hide();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divColores').hide();
                        $('#divColTbl').hide();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        break;     

                    case '97':

                        var NOMBRE = xmlDoc.getElementsByTagName('NOMBRE')[0].childNodes[0].nodeValue;
                        var MARCA = xmlDoc.getElementsByTagName('MARCA')[0].childNodes[0].nodeValue;
                        var CAT1 = xmlDoc.getElementsByTagName('CAT1')[0].childNodes[0].nodeValue;
                        
                        if(xmlDoc.getElementsByTagName('CAT2')[0].childNodes[0].nodeValue==0){
                            $('#proCat2').hide();
                        }else{
                            $('#proCat2').val(xmlDoc.getElementsByTagName('CAT2')[0].childNodes[0].nodeValue);
                        }    
                        if(xmlDoc.getElementsByTagName('CAT3')[0].childNodes[0].nodeValue==0){
                            $('#proCat3').hide();
                        }else{
                            $('#proCat3').val(xmlDoc.getElementsByTagName('CAT2')[0].childNodes[0].nodeValue);
                        }    

                        $('#proNom').val(NOMBRE);
                        $('#proMar').val(MARCA);
                        $('#proCat1').val(CAT1);
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divColores').show();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        $('#botonera').show();
                        $('#divColTbl').hide();
                        
                        setTimeout(function() {
                            $('#colWarning1').html('');
                            $('#colWarning2').html('');
                            $('#colWarning1').hide('');
                            $('#colWarning2').hide('');
                        }, 1500); 

                        break;         

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divColores').hide();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();

                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divColores').hide();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();

                        break;     

                    default:

                        var NOMBRE = xmlDoc.getElementsByTagName('NOMBRE')[0].childNodes[0].nodeValue;
                        var MARCA = xmlDoc.getElementsByTagName('MARCA')[0].childNodes[0].nodeValue;
                        var CAT1 = xmlDoc.getElementsByTagName('CAT1')[0].childNodes[0].nodeValue;
                        var DATOS = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        if(xmlDoc.getElementsByTagName('CAT2')[0].childNodes[0].nodeValue==0){
                            $('#proCat2').hide();
                        }else{
                            $('#proCat2').val(xmlDoc.getElementsByTagName('CAT2')[0].childNodes[0].nodeValue);
                        }    
                        if(xmlDoc.getElementsByTagName('CAT3')[0].childNodes[0].nodeValue==0){
                            $('#proCat3').hide();
                        }else{
                            $('#proCat3').val(xmlDoc.getElementsByTagName('CAT2')[0].childNodes[0].nodeValue);
                        }    

                        $('#tbody').html(DATOS);

                        $('#proNom').val(NOMBRE);
                        $('#proMar').val(MARCA);
                        $('#proCat1').val(CAT1);                                 
                        $('#divColTbl').show();
                        $('#divColores').show();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#botonera').show();
                        
                        break;
                }
            }
        });

    });
       
       
    $('#tblColores').on('click', 'tbody tr', function(event){

        $('#colWarning1').html('');    
        $('#colWarning2').html('');  
        $('#colWarning1').hide();
        $('#colWarning2').hide();

        //Obtenemos valores de campos    
            $(this).children("td").each(function(index2){
                switch (index2){
                    case 0:	
                            coId = $(this).text();
                            break;
                    case 1:
                            coCo = $(this).text();
                            break;
                    case 2:
                            coBa = $(this).text();
                            break;
                }
            });

        $('#codCol').val(coId);
        $('#proCol').val(coCo);
        $('#proBac').val(coBa);
        $(this).addClass('highlight').siblings().removeClass('highlight');

    });
    

    $('#btnGuardar').click(function(){
    
        //OBTENEMOS VALORES
        $('#colWarning1').html('');    
        $('#colWarning1').html('');  
        $('#colWarning1').hide();
        $('#colWarning2').hide();

        if($('#proCol').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese color.</span></b>';
            msg+='</div>'; 
            $('#colWarning1').html(msg);
            $('#colWarning1').show();
            $('#colWarning2').html(msg);
            $('#colWarning2').show();
            return false;
        } 

        if($('#proBac').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese background-color.</span></b>';
            msg+='</div>'; 
            $('#colWarning1').html(msg);
            $('#colWarning1').show();
            $('#colWarning2').html(msg);
            $('#colWarning2').show();
            return false;
        } 

        var codCol;
        if($('#codCol').val()==''){
            codCol=0;
        }else{
            codCol=$('#codCol').val();
        }
                
        var parametros = { 
            "codCol" : codCol
            , "color" : $('#proCol').val().toUpperCase()
            , "back" : $('#proBac').val()
            , "proId" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProColIngModModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            beforeSend: function(){
                $("#espera").show();
                $("#espera2").show();
            },
            success:  function (xml){

                //alert('regProColIngModModel ' + xml);                

                $("#espera").hide();
                $("#espera2").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        //$("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        $("#botonera").hide();
                        break; 

                    case '8':

                        //$("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        $("#botonera").hide();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        $("#botonera").hide();
                        break; 

                    case '97':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        
                        setTimeout(function() {
                            $('#colWarning1').html('');
                            $('#colWarning2').html('');
                            $('#colWarning1').hide('');
                            $('#colWarning2').hide('');
                        }, 1500); 
                        
                        break;     

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        $("#botonera").hide();
                        break;     

                    default:
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var id = xmlDoc.getElementsByTagName('IDENTIFICADOR')[0].childNodes[0].nodeValue;
                        
                        $('#codCol').val(id);
                        
                        if(datos==1){
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Color ingresado exitosamente!.</span></b>';
                            msg+='</div>';
                        }else{
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Color modificado exitosamente!.</span></b>';
                            msg+='</div>';
                        }    

                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        
                        setTimeout(function() {
                            $('#colWarning1').html('');
                            $('#colWarning2').html('');
                            $('#colWarning1').hide('');
                            $('#colWarning2').hide('');
                        }, 1500); 
                        
                        //limpiar();
                        consultaColoresAsociados();
                        pintaRegistro();
                        
                        break;
                }
            }
        });

    });

    $('#btnEliminar').click(function(){
    
        //OBTENEMOS VALORES
        $('#colWarning1').html('');    
        $('#colWarning2').html('');  
        $('#colWarning1').hide();
        $('#colWarning2').hide();

        var parametros = { 
            "codCol" : $('#codCol').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProColEliModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            beforeSend: function(){
                $("#espera").show();
                $("#espera2").show();
            },
            success:  function (xml){

                //alert('regProMedEliModel ' + xml);                

                $("#espera").hide();
                $("#espera2").hide();
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
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        break; 

                    case '8':

                        $("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        $("#botonera").hide();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        $("#botonera").hide();
                        break;     

                    default:

                        //$("#botonera").show();
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        if(datos==1){
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Color eliminado exitosamente!.</span></b>';
                            msg+='</div>';
                        }    

                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        
                        setTimeout(function() {
                            $('#colWarning1').html('');
                            $('#colWarning2').html('');
                            $('#colWarning1').hide('');
                            $('#colWarning2').hide('');
                        }, 1500); 

                        //limpiar();
                        consultaColoresAsociados();

                        break;
                }
            }
        });

    });
    
    
    $('#btnLimpiar').click(function(){
    
        $('#codCol').val('');
        $('#proCol').val('');
        $('#proBac').val('');
        
        $('#tblColores tr').each(function(){
            $(this).removeClass('highlight');   
        });
                
        $('#colWarning1').html('');
        $('#colWarning1').hide();
        $('#colWarning2').html('');
        $('#colWarning2').hide();        
                
    });
    
    $('#id').keyup(function(){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){
            $('#colWarning1').html('');
            $('#colWarning2').html('');
            $('#divColores').hide();
            $('#divColTbl').hide();
            $('#botonera').hide();
            $('#proCol').val('');
            $('#proBac').val('');
            $('#proNom').val('');
            $('#proMar').val('');
            $('#proCat1').val('');
            $('#proCat2').val('');
            $('#proCat3').val('');
        }else{
            $('#id').val('');
        }
    });
    
           
});


function limpiar(){

    $('#codCol').val('');

    $('#cmbMed').empty();
    $('#cmbMed').append($('<option>', {value:0, text:'(SELECCIONE)'}));
    $('#cmbMed').trigger('liszt:updated');

//    $("select#cmbTipo").prop('selectedIndex', 0);
//    $('#cmbTipo').trigger('liszt:updated');

    $("select#cmbMed").prop('selectedIndex', 0);
    $('#cmbMed').trigger('liszt:updated');

    $('#tblColores tr').each(function(){
        $(this).removeClass('highlight');   
    });

    $('#colWarning1').html('');
    $('#colWarning1').hide();
    $('#colWarning2').html('');
    $('#colWarning2').hide();    

}
  

 function pintaRegistro(){  

    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblColores tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#codCol').val()){
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
 
 
 function consultaColoresAsociados(){
     
    //alert('consultaColoresAsociados'); 
          
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
     
     var parametros = { 
            "id" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProColCsuProModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            success:  function (xml){

                //alert('regProMedCsuProModel ' + xml);                

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#color').hide();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#color').hide();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divColores').hide();
                        $('#divColTbl').hide();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        break;     

                    case '97':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divColores').show();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();
                        $('#colWarning2').html(msg);
                        $('#colWarning2').show();
                        $('#botonera').show();
                        $('#divColTbl').hide();
                        break;         

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divColores').hide();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();

                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divColores').hide();
                        $('#colWarning1').html(msg);
                        $('#colWarning1').show();

                        break;     

                    default:

                        var DATOS = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $('#tbody').html(DATOS);
                                           
                        $('#divColores').show();
                        $('#divColTbl').show();
                                                
                        break;
                }
            }
        });
     
 }
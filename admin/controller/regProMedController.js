
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
    $('#cmbTipo').empty();
    $('#cmbTipo').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));                                           
    $('#cmbTipo').append($('<option>', {value:'LETRA', text:'LETRA'}));      
    $('#cmbTipo').append($('<option>', {value:'NUMERO', text:'NUMERO'}));      
    $('#cmbTipo').trigger('liszt:updated');
              
    $('#btnBsq').click(function(){

        //OBTENEMOS VALORES
        $('#medWarning1').html('');
        $('#divMedidas').hide();
        $('#divMedTbl').hide();
        
        $("select#cmbTipo").prop('selectedIndex', 0);
        
        limpiar();

        if($('#id').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese ID de producto</span></b>';
            msg+='</div>'; 
            $('#medWarning1').html(msg);
            $('#medWarning1').show();
            return false;
        }else{
            $('#medWarning1').html('');
            $('#medWarning1').hide();
        } 

        var parametros = { 
            "id" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProMedCsuProModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            beforeSend: function(){
                $("#espera2").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProMedCsuProModel ' + xml);                

                $("#espera2").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#medida').hide();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#medida').hide();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divMedidas').hide();
                        $('#divMedTbl').hide();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
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

                        $('#divMedidas').show();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        
                        setTimeout(function() {
                            $('#medWarning1').html('');
                            $('#medWarning2').html('');
                            $('#medWarning1').hide('');
                            $('#medWarning2').hide('');
                        }, 1500);  

                        $('#botonera').show();
                        $('#divMedTbl').hide();

                        break;         

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divMedidas').hide();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();

                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divMedidas').hide();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();

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
                        $('#divMedTbl').show();                   
                        $('#divMedidas').show();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#botonera').show();
                        
                        break;
                }
            }
        });

    });
       
    $('#cmbTipo').change(function(){
        if($(this).val()!='(SELECCIONE)'){
            consultaMedida($(this).val());
        }else{
            
            $('#cmbMed').attr("size", 1);
            $('#cmbMed').empty();
            $('#cmbMed').append($('<option>', {value:0, text:'(SELECCIONE)'}));
            $('#cmbMed').trigger('liszt:updated');
            
            $('#medWarning1').html('');
            $('#medWarning1').hide();
            $('#medWarning2').html('');
            $('#medWarning2').hide();
            
        }
    });
     
    $('#id').keyup(function(){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){
            $('#cmbTipo').empty();
            $('#cmbTipo').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));                                           
            $('#cmbTipo').append($('<option>', {value:'LETRA', text:'LETRA'}));      
            $('#cmbTipo').append($('<option>', {value:'NUMERO', text:'NUMERO'}));      
            $('#cmbTipo').trigger('liszt:updated');

            $('#medWarning1').html('');
            $('#medWarning2').html('');
            $('#divMedidas').hide();
            $('#divMedTbl').hide();
            $('#botonera').hide();

            $("select#cmbMed").prop('selectedIndex', 0);
            $('#cmbMed').trigger('liszt:updated');

            $('#tblMedidas tr').each(function(){
                $(this).removeClass('highlight');   
            });

            $('#proNom').val('');
            $('#proMar').val('');
            $('#proCat1').val('');
            $('#proCat2').val('');
            $('#proCat3').val('');
        }else{
            $('#id').val('');
        }
    });
    
    $('#tblMedidas').on('click', 'tbody tr', function(event){

        $('#medWarning1').html('');    
        $('#medWarning2').html('');  
        $('#medWarning1').hide();
        $('#medWarning2').hide();

        //Obtenemos valores de campos    
            $(this).children("td").each(function(index2){
                switch (index2){
                    case 0:	
                            meId = $(this).text();
                            break;
                    case 1:
                            meMe = $(this).text();
                            break;
                    case 2:
                            meTi = $(this).text();
                            break;
                }
            });

        //Asignamos valores
        consultaMedida(meTi);
       
        $('#codMed').val(meId);
        $("#cmbTipo option").each(function(){
            if(meTi==$(this).val()){
                $("#cmbTipo option[value='" + meTi + "']").prop('selected', true);   //ESTABLECEMOS COMO SELECCIONADO 
                $('#cmbTipo').trigger('liszt:updated');
            }
        });
                
        $("#cmbMed option").each(function(){
            if(meMe==$(this).text()){
                var id=$(this).val();
                $("#cmbMed option[value='" + id + "']").prop('selected', true);   //ESTABLECEMOS COMO SELECCIONADO 
                $('#cmbMed').trigger('liszt:updated');
            }
        });

        $(this).addClass('highlight').siblings().removeClass('highlight');

    });
    

    $('#btnGuardar').click(function(){
    
        //OBTENEMOS VALORES
        $('#medWarning1').html('');    
        $('#medWarning1').html('');  
        $('#medWarning1').hide();
        $('#medWarning2').hide();

        if($('#cmbTipo').val()=='(SELECCIONE)' || $('#cmbTipo').val()=='' || $('#cmbTipo').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione tipo de medida.</span></b>';
            msg+='</div>'; 
            $('#medWarning1').html(msg);
            $('#medWarning1').show();
            $('#medWarning2').html(msg);
            $('#medWarning2').show();
            
            setTimeout(function() {
                $('#medWarning1').html('');
                $('#medWarning2').html('');
            }, 1500);  
            
            return false;
        } 
                
        if($('#cmbMed').val()=='(SELECCIONE)' || $('#cmbMed').val()=='' || $('#cmbMed').val()==0){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione medida.</span></b>';
            msg+='</div>'; 
            $('#medWarning1').html(msg);
            $('#medWarning1').show();
            $('#medWarning2').html(msg);
            $('#medWarning2').show();
            
            setTimeout(function() {
                $('#medWarning1').html('');
                $('#medWarning2').html('');
            }, 1500);  
            
            return false;
        } 

        var codMed;
        if($('#codMed').val()==''){
            codMed=0;
        }else{
            codMed=$('#codMed').val();
        }
                
        var parametros = { 
            "codMed" : codMed
            , "medida" : $('#cmbMed').val()
            , "proId" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProMedIngModModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            beforeSend: function(){
                $("#espera").show();
                $("#espera2").show();
            },
            success:  function (xml){

                //alert('regProMedIngModModel ' + xml);                

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
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        $("#botonera").hide();
                        break; 

                    case '8':

                        //$("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        $("#botonera").hide();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        $("#botonera").hide();
                        break; 

                    case '97':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        
                        setTimeout(function() {
                            $('#medWarning1').html('');
                            $('#medWarning2').html('');
                            $('#medWarning1').hide('');
                            $('#medWarning2').hide('');
                        }, 1500); 
                        
                        $("select#cmbMed").prop('selectedIndex', 0);
                        $('#cmbMed').trigger('liszt:updated');
                        
                        break;     

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        $("#botonera").hide();
                        break;     

                    default:
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var id = xmlDoc.getElementsByTagName('IDENTIFICADOR')[0].childNodes[0].nodeValue;
                        
                        $('#codMed').val(id);
                        
                        if(datos==1){
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Medida ingresada exitosamente!.</span></b>';
                            msg+='</div>';
                        }else{
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Medida modificada exitosamente!.</span></b>';
                            msg+='</div>';
                        }    

                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        
                        setTimeout(function() {
                            $('#medWarning1').html('');
                            $('#medWarning2').html('');
                            $('#medWarning1').hide('');
                            $('#medWarning2').hide('');
                        }, 1500); 
                        
                        //limpiar();
                        consultaMedidasAsociadas();
                        pintaRegistro();
                        
                        break;
                }
            }
        });

    });

    $('#btnEliminar').click(function(){
    
        //alert('cmbTipo ' + ("#cmbTipo").prop('selectedIndex'));
    
        //OBTENEMOS VALORES
        $('#medWarning1').html('');    
        $('#medWarning2').html('');  
        $('#medWarning1').hide();
        $('#medWarning2').hide();

        var parametros = { 
            "codMed" : $('#codMed').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProMedEliModel.php",
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
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        break; 

                    case '8':

                        $("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        $("#botonera").hide();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        $("#botonera").hide();
                        break;     

                    default:

                        //$("#botonera").show();
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        if(datos==1){
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">Medida eliminada exitosamente!.</span></b>';
                            msg+='</div>';
                        }    

                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();

                        setTimeout(function() {
                            $('#medWarning1').html('');
                            $('#medWarning2').html('');
                            $('#medWarning1').hide('');
                            $('#medWarning2').hide('');
                        }, 1500); 

                        //limpiar();
                        consultaMedidasAsociadas();

                        break;
                }
            }
        });

    });
    
    
    $('#btnLimpiar').click(function(){
        
        $('#cmbMed').attr("size", 1);
        $('#codMed').val('');
        $('#cmbMed').empty();
        $('#cmbMed').append($('<option>', {value:0, text:'(SELECCIONE)'}));
        $('#cmbMed').trigger('liszt:updated');
        $("select#cmbTipo").prop('selectedIndex', 0);
        $("select#cmbMed").prop('selectedIndex', 0);
        $('#cmbMed').trigger('liszt:updated');
        
        $('#tblMedidas tr').each(function(){
            $(this).removeClass('highlight');   
        });
                
        $('#medWarning1').html('');
        $('#medWarning1').hide();
        $('#medWarning2').html('');
        $('#medWarning2').hide();        
                
    });
    
    
           
});


function limpiar(){

    $('#cmbMed').attr("size", 1);
    $('#codMed').val('');
    $('#cmbMed').empty();
    $('#cmbMed').append($('<option>', {value:0, text:'(SELECCIONE)'}));
    $('#cmbMed').trigger('liszt:updated');
    $("select#cmbTipo").prop('selectedIndex', 0);
    $("select#cmbMed").prop('selectedIndex', 0);
    $('#cmbMed').trigger('liszt:updated');

    $('#tblMedidas tr').each(function(){
        $(this).removeClass('highlight');   
    });

    $('#medWarning1').html('');
    $('#medWarning1').hide();
    $('#medWarning2').html('');
    $('#medWarning2').hide();        

}
  
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

 
 function consultaMedida(med){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol; 
    
        //OBTENEMOS VALORES
        $('#medWarning1').html('');
        $('#medWarning2').html('');
        $('#medWarning1').hide();
        $('#medWarning2').hide();

        var parametros = { "medida" : med };
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProMedCsuMedModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
                $("#espera2").show();
            },
            success:  function (xml){

                //alert('regProDirCsuModel ' + xml);                

                $("#espera").hide();
                $("#espera2").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();

                        var strVal;
                        $('#cmbMed').empty();
                        $('#cmbMed').append($('<option>', {value:0, text:'(SELECCIONE)'}));
                        $('#cmbMed').trigger('liszt:updated');

                        break;     

                    case '97':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').hide();
                      
                        break;         

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();

                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();

                        break;     

                    default:

                        var strVal;
                        var cont = xmlDoc.getElementsByTagName('CONTADOR')[0].childNodes[0].nodeValue;
                        
                        $('#cmbMed').attr("size", cont);
                        $('#cmbMed').empty();
                        $('#cmbMed').append($('<option>', {value:0, text:'(SELECCIONE)'}));

                        $xml.find('REGISTRO').each(function () {
                            strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            var res = strVal.split("|"); 
                            if(res[0].length>0){
                                $('#cmbMed').append($('<option>', {value:res[0], text:res[1]}));
                            }
                        });
                        
                        $('#cmbMed').trigger('liszt:updated');
                        break;
                }
            }
        });

 }
 
 function pintaRegistro(){  

    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblMedidas tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#codMed').val()){
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
 
 
 function consultaMedidasAsociadas(){
     
    //alert('consultaMedidasAsociadas'); 
          
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
     
     var parametros = { 
            "id" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProMedCsuProModel.php",
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

                        $('#medida').hide();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#medida').hide();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divMedidas').hide();
                        $('#divMedTbl').hide();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        break;     

                    case '97':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divMedidas').show();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();
                        $('#medWarning2').html(msg);
                        $('#medWarning2').show();
                        $('#botonera').show();
                        $('#divMedTbl').hide();
                        break;         

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divMedidas').hide();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();

                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#divMedidas').hide();
                        $('#medWarning1').html(msg);
                        $('#medWarning1').show();

                        break;     

                    default:

                        var DATOS = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $('#tbody').html(DATOS);
                                           
                        $('#divMedidas').show();
                        $('#divMedTbl').show();
                                                
                        break;
                }
            }
        });
     
 }
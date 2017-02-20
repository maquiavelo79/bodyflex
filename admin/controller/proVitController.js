
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    muestraProductoVitrina(0,0,1);
    
    $('#btnBsq').click(function(){

        if($('#id').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese ID de producto</span></b>';
            msg+='</div>'; 
            $('#warningBsq').html(msg);
            $('#warningBsq').show();
            return false;
        }else{
            $('#warningBsq').html('');
        } 

        var parametros = { 
            "id" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/proVitCsuModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){

                //alert('proVitCsuModel ' + xml);                

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

                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningBsq').hide();
                        $('#warningBsq').hide();

                        limpiarHead();    

                        break;     

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();

                        break; 
                    
                    case '97':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();

                        break; 
                    
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();

                        break;     

                    default:

                        var estado = xmlDoc.getElementsByTagName('ESTADO')[0].childNodes[0].nodeValue;
                        var nombre = xmlDoc.getElementsByTagName('NOMBRE')[0].childNodes[0].nodeValue;
                        var marca = xmlDoc.getElementsByTagName('MARCA')[0].childNodes[0].nodeValue;
                        
                        $('#resEst').val(estado);
                        $('#resNom').val(nombre);
                        $('#resMar').val(marca);
                        $('#botonera').show();
                                                
                        break;
                }
            }
        });

    });
            
    $('#tblProVit').on('click', 'tbody tr', function(event){

        $('#warningBsq').html('');    

        //Obtenemos valores de campos    
            $(this).children("td").each(function(index2){
                switch (index2){
                    case 0:	
                            etId = $(this).text();
                            break;
                    case 1:
                            etNom = $(this).text();
                            break;
                    case 2:
                            etMar = $(this).text();
                            break;
                    case 3:
                            etEti = $(this).text();
                            break;    
                    case 4:
                            etEst = $(this).text();
                            break;            
                }
            });

        //Asignamos valores
            $('#id').val(etId);
            $('#resEst').val(etEst);
            $('#resNom').val(etNom);
            $('#resMar').val(etMar);
            $('#botonera').show();
            $(this).addClass('highlight').siblings().removeClass('highlight');

    });
    

    $('#btnGuardar').click(function(){
    
        //OBTENEMOS VALORES
        $('#warningBsq').html('');     

        if($('#id').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione etiqueta para asociar.</span></b>';
            msg+='</div>'; 
            $('#warningBsq').html(msg);
            $('#warningBsq').show();
            return false;
        } 
    
        var parametros = { 
            "id" : $('#id').val()
            ,   "sw" : 1 //AGREGA A VITRINA
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/proVitAsoVitModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){

                //alert('regProCtaIngEtiModel ' + xml);                

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
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $("#botonera").hide();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $("#botonera").hide();
                        break;     

                    default:
                        
                        muestraProductoVitrina(0,0,1);
                        pintaRegistro();
                        
                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Asociación exitosa!.</span></b>';
                        msg+='</div>';

                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        
                        $('#id').val('');
                        $('#resEst').val('');
                        $('#resNom').val('');
                        $('#resMar').val('');
                        $('#botonera').hide();
                        
                        break;
                }
            }
        });

    });

    $('#btnEliminar').click(function(){
    
        //OBTENEMOS VALORES
        $('#warningBsq').html('');    

        if($('#id').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-alert">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Para eliminar debe seleccionar un registro.</span></b>';
            msg+='</div>'; 
            
            $('#warningBsq').html(msg);
            $('#warningBsq').show();

            return false;
        } 

        var parametros = { 
            "id" : $('#id').val()
            ,   "sw" : 0 //ELIMINA DE VITRINA
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/proVitAsoVitModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){

                //alert('regProEliEtiModel ' + xml);                

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
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        break; 

                    case '8':

                        $("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $("#botonera").hide();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $("#botonera").hide();
                        break;     

                    default:
                     
                        limpiar();
                        $('#botonera').hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Etiqueta eliminada exitosamente!.</span></b>';
                        msg+='</div>';
 
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();

                        muestraProductoVitrina(0,0,1);

                        break;
                }
            }
        });

    });
    
    
    $('#btnLimpiar').click(function(){
        
        $('#warningBsq').html('');
        
        $('#tblProVit tr').each(function(){
            $(this).removeClass('highlight');   
        });
                
        $('#id').val('');
        $('#resEst').val('');
        $('#resNom').val('');
        $('#resMar').val('');
        $('#botonera').hide();
                
    });
               
});

    function limpiar(){
        
       
        $('#warningBsq').html('');
        $('#tblProVit tr').each(function(){
            $(this).removeClass('highlight');   
        });
        $('#id').val('');
        $('#resEst').val('');
        $('#resNom').val('');
        $('#resMar').val('');
        $('#botonera').hide();
                
    }
    
    function limpiarHead(){
        
        $('#resEst').val('');
        $('#resNom').val('');
        $('#resMar').val('');
        
    }
    
    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }
 
 function pintaRegistro(){  

    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblProVit tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#id').val()){
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
 
    $('#id').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
 
 function muestraProductoVitrina(sw, ultimo, paginacion){
     
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    var parametros = { "sw" : sw, "ultimo" : ultimo, "pa" : paginacion };

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/proVitCsuProVitModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            success:  function (xml){
            
            //alert('regProCsuRelEtiProModel ' + xml);
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningBsq").html(msg);
                        break;   
                    
                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningBsq").html(msg);
                        break;     
                    
                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningBsq").html(msg);
                        break;     
                        
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningBsq").html(msg);
                        break;         
                       
                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningBsq").html(msg);
                        $("#tbody").html('').trigger('liszt:updated');
                        $("#idPag").html('').trigger('liszt:updated');
                        break;     
                    
                    default:
                       
                        var dat = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var pag = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                        $("#tbody").html(dat).trigger('liszt:updated');
                        $("#idPag").html(pag).trigger('liszt:updated');
                        
                        break;

                }

        }
    });   
    
 }
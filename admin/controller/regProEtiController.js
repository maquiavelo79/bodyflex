
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    cargaEtiquetas();
    muestraProductoEtiqueta(0,0,1);
              
    $('#id').keyup(function(){

        this.value = (this.value + '').replace(/[^0-9]/g, '');
        var idPro = $.trim($('#id').val());
        $("#tbody").html("");
        $("#idPag").html("");
        $("#etiqueta").hide();
        
        if( idPro.length>0 ){
            muestraEtiquetaDelProducto(0,0,1,idPro);
        }else{    
            muestraProductoEtiqueta(0,0,1);
        }   
        
    });
       
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProEtiCsuModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera3").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProEtiCsuModel ' + xml);                

                $("#espera3").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#etiqueta').hide();
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#etiqueta').hide();
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#etiqueta').hide();
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        limpiarHead();    

                        break;     

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#etiqueta').hide();
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();

                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#etiqueta').hide();
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();

                        break;     

                    default:

                        var estado = xmlDoc.getElementsByTagName('ESTADO')[0].childNodes[0].nodeValue;
                        var nombre = xmlDoc.getElementsByTagName('NOMBRE')[0].childNodes[0].nodeValue;
                        var marca = xmlDoc.getElementsByTagName('MARCA')[0].childNodes[0].nodeValue;
                        
                        $('#etiqueta').show();
                        $('#botonera').show();
                        $('#resEst').val(estado);
                        $('#resNom').val(nombre);
                        $('#resMar').val(marca);
                        cargaEtiquetas(); 
                        muestraEtiquetaDelProducto(0,0,1,$('#id').val());
                        break;
                }
            }
        });

    });
            
    $('#tblProEti').on('click', 'tbody tr', function(event){

        $('#warningBsq').html('');    
        $('#warningDet').html('');    

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
            
            var cmb = document.getElementById("cmbETI"); 
            for (var i = 0; i < cmb.length; i++) {
                //  Aca haces referencia al "option" actual
                var opt = cmb[i];
                //alert('opt.value ' + opt.text);
                // Haces lo que te de la gana aca
                if(etEti == opt.text){
                   $("#cmbETI").prop('selectedIndex',i);
                   $('#cmbETI').trigger('liszt:updated');
                   break;
                }
            }
            
            $('#etiqueta').show();
            $(this).addClass('highlight').siblings().removeClass('highlight');

    });
    

    $('#btnGuardar').click(function(){
    
        //OBTENEMOS VALORES
        $('#warningBsq').html('');    
        $('#warningDet').html('');    

        if($('#cmbETI').val()=='(SELECCIONE)'){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione etiqueta para asociar.</span></b>';
            msg+='</div>'; 
            $('#warningBsq').html(msg);
            $('#warningBsq').show();
            $('#warningDet').html(msg);
            $('#warningDet').show();
            return false;
        } 
        
        if($('#id').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione etiqueta para asociar.</span></b>';
            msg+='</div>'; 
            $('#warningBsq').html(msg);
            $('#warningBsq').show();
            $('#warningDet').html(msg);
            $('#warningDet').show();
            return false;
        } 
    
        //alert('id ' + $('#id').val());
        //alert('cmbETI ' + $('#cmbETI').val());
    
        var parametros = { 
            "id" : $('#id').val()
            , "eti" : $('#cmbETI').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProCtaIngEtiModel.php",
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
                        $('#warningDet').html(msg);
                        $('#warningDet').show();
                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $('#warningDet').html(msg);
                        $('#warningDet').show();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $('#warningDet').html(msg);
                        $('#warningDet').show();
                        $("#botonera").hide();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $('#warningDet').html(msg);
                        $('#warningDet').show();
                        $("#botonera").hide();
                        break;     

                    default:
                        
                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Asociación exitosa!.</span></b>';
                        msg+='</div>';
                        
                        muestraProductoEtiqueta(0,0,1);
                        pintaRegistro();
                        
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $('#warningDet').html(msg);
                        $('#warningDet').show();
                        
                        break;
                }
            }
        });

    });

    $('#btnEliminar').click(function(){
    
        //OBTENEMOS VALORES
        $('#warningBsq').html('');    
        $('#warningDet').html('');    

        if($('#id').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-alert">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Para eliminar debe seleccionar un registro.</span></b>';
            msg+='</div>'; 
            
            $('#warningBsq').html(msg);
            $('#warningBsq').show();
            
            $('#warningDet').html(msg);
            $('#warningDet').show();
            return false;
        } 

        var parametros = { 
            "id" : $('#id').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProEliEtiModel.php",
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
                        $('#warningDet').html(msg);
                        $('#warningDet').show();
                        break; 

                    case '8':

                        $("#botonera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $('#warningDet').html(msg);
                        $('#warningDet').show();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $('#warningDet').html(msg);
                        $('#warningDet').show();
                        $("#botonera").hide();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $('#warningDet').html(msg);
                        $('#warningDet').show();
                        $("#botonera").hide();
                        break;     

                    default:
                     
                        limpiar();
                        
                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Etiqueta eliminada exitosamente!.</span></b>';
                        msg+='</div>';
 
                        $('#warningBsq').html(msg);
                        $('#warningBsq').show();
                        $('#warningDet').html('');
                        $('#warningDet').hide();

                        muestraProductoEtiqueta(0,0,1);

                        break;
                }
            }
        });

    });
    
    
    $('#btnLimpiar').click(function(){
       
        $("select#cmbETI").prop('selectedIndex', 0);
        $('#cmbETI').trigger('liszt:updated');
        
        $('#warningBsq').html('');
        $('#warningDet').html('');
        
        $('#tblProEti tr').each(function(){
            $(this).removeClass('highlight');   
        });
                
        $('#id').val('');
        $('#resEst').val('');
        $('#resNom').val('');
        $('#resMar').val('');
        
        $('#etiqueta').hide();
                
    });
               
});

    function limpiar(){
        
        $("select#cmbETI").prop('selectedIndex', 0);
        $('#cmbETI').trigger('liszt:updated');
        
        $('#warningBsq').html('');
        $('#warningDet').html('');
        
        $('#tblProEti tr').each(function(){
            $(this).removeClass('highlight');   
        });
                
        $('#id').val('');
        $('#resEst').val('');
        $('#resNom').val('');
        $('#resMar').val('');
        
        $('#etiqueta').hide();
        
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
    $('#tblProEti tr').each(function(){
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
 
 function cargaEtiquetas(){
     
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProEtiCsuEtiModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            success:  function (xml){
            
            //alert('regProEtiCsuEtiModel ' + xml);
            
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
                        break;     
                    
                    default:
                       
                        var strVal;
                        var cant = xmlDoc.getElementsByTagName('CANTIDAD')[0].childNodes[0].nodeValue;
                        
                        //1° Actualizamos Cantidad
                        var strCmb='<select id="cmbETI" size="'+ cant +'" style="box-shadow: 0 0 2px black; font-weight: bold; height: 120px; width: 270px;" data-rel="chosen"></select>';
                        $('#divCmbEti').html(strCmb);
                        $('#divCmbEti').trigger('liszt:updated');
                        
                        $('#cmbETI').empty();
                        $('#cmbETI').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        
                        $xml.find('REGISTRO').each(function () {
                            strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            var res = strVal.split("|"); 
                            if(strVal.length>0){
                                $('#cmbETI').append($('<option>', {value:res[0], text:res[1]}));
                            }
                        });
                        
                        $('#cmbETI').trigger('liszt:updated');
                        break;

                }

        }
    });   
    
 }
 
    
 
 function muestraProductoEtiqueta(sw, ultimo, paginacion){
     
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var parametros = { "sw" : sw, "ultimo" : ultimo, "pa" : paginacion };

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProCsuRelEtiProModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            beforeSend: function(){
                $("#espera3").show();
                $("#botonera").hide();
            },
            success:  function (xml){
            
            //alert('regProCsuRelEtiProModel ' + xml);
            $("#espera3").hide();
            $("#botonera").show();
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
 
 function muestraEtiquetaDelProducto(sw, ultimo, paginacion, id){
    //consulta etiquetas del producto 
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var parametros = { "sw" : sw, "ultimo" : ultimo, "pa" : paginacion, "id" : id};

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProCsuEtiProModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            beforeSend: function(){
                $("#espera3").show();
                $("#botonera").hide();
            },
            success:  function (xml){
            
            //alert('regProCsuRelEtiProModel ' + xml);
            $("#espera3").hide();
            $("#botonera").show();
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

jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
   //AJAX
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/coleccionesCsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function(xml){

            //alert('coleccionesCsuModel '+xml);
            
            $('#esperaColeccion').hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#colecciones').html(msg);
                    $('#colecciones').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#colecciones').html(msg);
                    $('#colecciones').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#colecciones').html(msg);
                    $('#colecciones').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#colecciones').html(msg);
                    $('#colecciones').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#colecciones').html(msg);
                    $('#colecciones').show();

                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $('#colecciones').html(datos).trigger('liszt:updated');
                    break;
                    
            }
        }
    });
        
//    $('.tooltipHere').click(function(){
//        alert('WishlistX');
//    });
    
    $('.description1').click(function(){
        
        //alert('description1');
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proDetView.php";
        var id=$(this).attr('id_des1');
        
          var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
            '<input type="hidden" id="id" name="id" value="' + id + '" />' +
            '</form>');
          $('body').append(form);
          form.submit();
        
    });
    
    $('.description2').click(function(){
        
        //alert('description2');
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proDetView.php";
        var id=$(this).attr('id_des2');
        
       var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
            '<input type="hidden" id="id" name="id" value="' + id + '" />' +
            '</form>');
          $('body').append(form);
          form.submit();
        
    });
    
    $('.product-largeimg-link').click(function(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proDetView.php";
        var id=$('#txtProID').val();
        
        var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
            '<input type="hidden" id="id" name="id" value="' + id + '" />' +
            '</form>');
        $('body').append(form);
        form.submit();
        
    });
 
    $( "#colecciones" ).on( "click", ".img-responsive", function() {
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proColView.php";
        var id=$(this).attr('id').replace('col_','');
        
        var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
            '<input type="hidden" id="id" name="id" value="' + id + '" />' +
            '<input type="hidden" id="id" name="idCat1" value="0" />' +
            '<input type="hidden" id="id" name="idCat2" value="0" />' +
            '<input type="hidden" id="id" name="idCat3" value="0" />' +
            '</form>');
        $('body').append(form);
        form.submit();
        
    });
    
    $("#productSetailsModalAjax").on("shown.bs.modal", function(e) {
              
        //alert('productSetailsModalAjax');      
              
        $('#proNomMod').text($('#txtProNomMod').val()).trigger('liszt:updated');
        $('#proCodMod').text("CODIGO: " + $('#txtProCodMod').val()).trigger('liszt:updated');
        $('#proPreMod').text($('#txtProPreMod').val()).trigger('liszt:updated');
        $('#proPraMod').text($('#txtProPraMod').val()).trigger('liszt:updated');
        $('#proDetMod').text($('#txtProDetMod').val()).trigger('liszt:updated');
        $('#proCanMod').html($('#txtProCanMod').val()).trigger('liszt:updated');
        $('#proMedMod').html($('#txtProMedMod').val()).trigger('liszt:updated');
        $('#proColMod').html($('#txtProColMod').val()).trigger('liszt:updated');          
        $('#proImpMod').html($('#txtProImpMod').val()).trigger('liszt:updated');         
        $('#proImrMod').html($('#txtProImrMod').val()).trigger('liszt:updated');         
                
    });
    
    $('#productSetailsModalAjax').on('hidden.bs.modal', function () {
        
        $('#txtProNomMod').val('');
        $('#txtProCodMod').val('');
        $('#txtProPreMod').val('');
        $('#txtProPraMod').val('');
        $('#txtProDetMod').val('');
        $('#txtProCanMod').val('');
        $('#txtProMedMod').val('');
        $('#txtProColMod').val('');         
        $('#txtProImpMod').val('');         
        $('#txtProImrMod').val('');
        
        $('#item').val('');
        $('#producto').val('');
        $('#load').val('');
        $('#mensaje').val('');
        
        //product.html
            $('#proImpMod').html('');
            $('#proImrMod').html('');
            $('#proNomMod').html('');
            $('#proCodMod').html('');
            $('#proPreMod').html('');
            $('#proPraMod').html('');
            $('#proDetMod').html('');
            $('#proColMod').html('');
            $('#proCanMod').html('');
            $('#proMedMod').html('');
        
    });
           
});

 
function SP_CAT_PRO_SET_CAT(){
    
    //CONTROLADOR DE EVENTOS BOTÓN AGREGAR A MI CATÁLOGO
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //alert('btnCatalogoMod');

    var idPro=$('#txtProID').val();
    var rut=$('#rut').val();
    
    //alert('idPro ' + idPro);
    //alert('rut ' + idPro);
    
    var parametros = { 
                        "idPro" : idPro 
                        ,   "rut" : rut 
                    };    

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetSetCatModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#esperaAddCatMod").show();
            $("#btnCatalogoMod").hide();
        },
        success:  function(xml){

            //alert('proDetSetCatModel '+xml);

            $("#btnCatalogoMod").show();
            $("#esperaAddCatMod").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<strong>Error [' + codErr + ']'+'</strong> '+desErr;
                    $('#msgModal').html(msg);
                    $('#msgModal').show();
                    break;

                case "8":

                    var msg='<strong>Error [' + codErr + ']'+'</strong> '+desErr;
                    $('#msgModal').html(msg);
                    $('#msgModal').show();
                    break;

                case "99":

                    var msg='<strong>Error [' + codErr + ']'+'</strong> '+desErr;
                    $('#msgModal').html(msg);
                    $('#msgModal').show();
                    break;

                case "100":

                    var msg='<strong>Error [' + codErr + ']'+'</strong> '+desErr;
                    $('#msgModal').html(msg);
                    $('#msgModal').show();
                    break;   

                default:

                    var DATO = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    if(DATO=="1"){
                        $("#btnCatalogoMod").html('PRODUCTO EN MI CATÁLOGO');
                        $("#btnCatalogoMod").css("background-color", "#4EC67F"); 
                    }else{
                        $("#btnCatalogoMod").css("background-color", ""); 
                        $("#btnCatalogoMod").html('AGREGAR A MI CATÁLOGO');
                    }                               
                    break;
            }
        }
    });
    

} 
 
 
function SP_CAT_CSU_PRO_CAT(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //CONSULTA EXISTENCIA DE PRODUCTO EN CATALOGO DEL PROFESIONAL
    var id = $('#txtProID').val();
    var parametros = { "idPro" : id };  
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuProCatModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function(xml){

            //alert('proDetCsuProCatModel '+xml);

            $("#esperaAddCatMod").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "8":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "99":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "100":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;    

                case "98":

                    $('#txtMsg').val('OK5');
                    $("#btnCat").html('AGREGAR A MI CATÁLOGO');
                    $("#proCat").val(codErr);
                    break;

                default:

                    $('#txtMsg').val('OK5');
                    $("#btnCat").html('ESTE PRODUCTO ES PARTE DE MI CATÁLOGO');
                    $("#btnCat").css("background-color", "#4EC67F"); 
                    $("#proCat").val(codErr);                   
                    break;
            }
        }
    });
} 
 
function SP_CAT_CSU_DET_PRO(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
      
    //OBTIENE DETALLE PRODUCTO
    var id = $('#txtProID').val();
    var parametros = { "idPro" : id };  
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuDetProModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function(xml){

            //alert('proDetCsuDetProModel '+xml);
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "8":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "99":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "100":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;  

                case "98":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                default:

                    $('#txtMsg').val('OK1');
                    
                    var PROID = xmlDoc.getElementsByTagName('PROID')[0].childNodes[0].nodeValue;
                    var PRONOM = xmlDoc.getElementsByTagName('PRONOM')[0].childNodes[0].nodeValue;
                    var PROMAR = xmlDoc.getElementsByTagName('PROMAR')[0].childNodes[0].nodeValue;
                    var PRODES = xmlDoc.getElementsByTagName('PRODES')[0].childNodes[0].nodeValue;
                    var PROPVP = xmlDoc.getElementsByTagName('PROPVP')[0].childNodes[0].nodeValue;
                    var PROPO1 = xmlDoc.getElementsByTagName('PROPO1')[0].childNodes[0].nodeValue;
                    var PROPO2 = xmlDoc.getElementsByTagName('PROPO2')[0].childNodes[0].nodeValue;
                    var PROMC = xmlDoc.getElementsByTagName('PROMC')[0].childNodes[0].nodeValue;
                    var PROUN = xmlDoc.getElementsByTagName('PROUN')[0].childNodes[0].nodeValue;
                    var PROPV = xmlDoc.getElementsByTagName('PROPV')[0].childNodes[0].nodeValue;
                    var PROMU1 = xmlDoc.getElementsByTagName('PROMU1')[0].childNodes[0].nodeValue;
                    var PROMU2 = xmlDoc.getElementsByTagName('PROMU2')[0].childNodes[0].nodeValue;
                    var PROPREANT = xmlDoc.getElementsByTagName('PROPREANT')[0].childNodes[0].nodeValue;
                    var PRODESCOR = xmlDoc.getElementsByTagName('PRODESCOR')[0].childNodes[0].nodeValue;
                                        
                    var i;
                    var cmbCan='<select class="form-control">';
                        cmbCan+='<option value="strawberries" selected>Cantidad</option>';
                        for(i=1;i<=PROUN; i++){
                            cmbCan+='<option value="'+i+'">'+i+'</option>';
                        };
                    cmbCan+='</select>';
                   
                    $('#txtProNomMod').val(PRONOM);
                    $('#txtProCodMod').val(PROID);
                    $('#txtProPreMod').val(PROPVP);
                    $('#txtProPraMod').val(PROPREANT);
                    $('#txtProDetMod').val(PRODESCOR);
                    $('#txtProCanMod').val(cmbCan);
                    break;
            }
        }

    });
    
} 

function SP_CAT_PRO_GET_MED(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //OBTIENE TALLA DE PRODUCTO
    var id=$('#txtProID').val();
    var parametros = { "idPro" : id };  
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuMedProModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function(xml){

            //alert('proDetCsuDetProModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "8":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "99":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "100":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;    

                case "98":

                    $('#txtMsg').val('OK2');
                    var TALLA = xmlDoc.getElementsByTagName('TALLA')[0].childNodes[0].nodeValue;                   
                    $('#cmbMed').html(TALLA).trigger('liszt:updated');
                    break;

                default:

                    $('#txtMsg').val('OK2');
                    var TALLA = xmlDoc.getElementsByTagName('TALLA')[0].childNodes[0].nodeValue;                   
                    $('#txtProMedMod').val(TALLA);
                    break;
            }
        }
    });
    
}

function SP_CAT_PRO_GET_IMG(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //OBTIENE IMAGENES DEL PRODUCTO
    var id = $('#txtProID').val();
    var parametros = { "idPro" : id };    
    
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuImgMModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function(xml){

            //alert('proDetCsuImgModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "8":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "99":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "100":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;    

                case "98":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                default:

                    $('#txtMsg').val('OK3');
                    var S1 = xmlDoc.getElementsByTagName('SECCION1')[0].childNodes[0].nodeValue;
                    var S2 = xmlDoc.getElementsByTagName('SECCION2')[0].childNodes[0].nodeValue;
                    
                    //alert('S1 ' + S1);
                    //alert('S2 ' + S2);
                    
                    $('#txtProImpMod').val(S1);
                    $('#txtProImrMod').val(S2);
                    break;
            }
        }
    });
    
    
}

function SP_CAT_CSU_COL_PRO(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //OBTIENE COLORES PRODUCTO
    var id = $('#txtProID').val();
    var parametros = { "idPro" : id };    
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuColoresMModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function(xml){

            //alert('proDetCsuColoresModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "8":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "99":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;

                case "100":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraError();
                    break;    

                case "98":

                    $('#txtMsg').val('OK4');
                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $('#txtProColMod').val(datos);
                    break;

                default:

                    $('#txtMsg').val('OK4');
                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $('#txtProColMod').val(datos);
                    break;
            }
        }
    });
    
}

function modalFunction(id){
    
    //alert('modalFunction');
    
    var item='#item_'+id;
    var producto='#pro_'+id;
    var load='#load_'+id;
    var mensaje='#msg_'+id;
    
    //GUARDAMOS EN INPUTS
    $('#item').val(item);
    $('#producto').val(producto);
    $('#load').val(load);
    $('#mensaje').val(mensaje);
    
    $('#txtProID').val(id);

    $(producto).hide();
    $(item).append('<div id="'+load.replace('#','')+'"></div>').trigger('liszt:updated');
    $(load).addClass("loadModal");
    $(load).show();
    
    SP_CAT_CSU_DET_PRO();
    SP_CAT_PRO_GET_MED();
    SP_CAT_CSU_COL_PRO();
    SP_CAT_CSU_PRO_CAT();
    SP_CAT_PRO_GET_IMG();
    
    $(load).hide();
    $(producto).show();
    
}
 
function muestraError(){
    
    var load=$('#load').val();
    var item=$('#item').val();
    var mensaje= $('#mensaje').val();
    
    $(load).hide();
    $(item).append('<div id="'+mensaje.replace('#','')+'" class="alert alert-danger msgError">'+$('#txtMsg').val()+'</div>').trigger('liszt:updated');
    $(mensaje).show();
    
} 


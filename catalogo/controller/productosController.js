
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
   //AJAX
   var parametros = { "ultimo" : 0 };    
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/productosCsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $('#productos').html('');
            $('#productos').addClass("esperaProductos").trigger('liszt:updated');
        },
        success:  function(xml){

            //alert('productosCsuModel ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $('#productos').removeClass('esperaProductos');
                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#btnMas').hide();
                    $('#productos').html(msg);
                    $('#productos').show();
                    break;

                case "8":

                    $('#productos').removeClass('esperaProductos');
                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#btnMas').hide();
                    $('#productos').html(msg);
                    $('#productos').show();
                    break;

                case "99":

                    $('#productos').removeClass('esperaProductos');
                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#btnMas').hide();
                    $('#productos').html(msg);
                    $('#productos').show();
                    break;

                case "100":

                    $('#productos').removeClass('esperaProductos');
                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#btnMas').hide();
                    $('#productos').html(msg);
                    $('#productos').show();
                    break;    

                case "98":

                    $('#productos').removeClass('esperaProductos');
                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#btnMas').hide();
                    $('#productos').html(msg);
                    $('#productos').show();
                    break;

                default:
                    
                    $('#productos').removeClass('esperaProductos');
                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    var ultimo = xmlDoc.getElementsByTagName('ULTIMO')[0].childNodes[0].nodeValue;
                    
                    var sHtml='<a id="btnMas" ultimo="'+ultimo+'" class="btn btn-thin">'; 
                    sHtml+='<i class="fa fa-plus-sign">+</i> M&aacute;s productos';
                    sHtml+='</a>';
                    
                    $('#ultimo').html(sHtml).trigger('liszt:updated');
                    $('#productos').html(datos).trigger('liszt:updated');
                    break;
                    
            }
        }
    });
      
//    $('.clsProHeart').click(function(){
//        alert('clsProHeart');
//    });  
      
    $(document).on("click", ".description1", function(event){

        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proDetView.php";
        var id=$(this).attr('id_des1');
        
		alert('productosController.js ' + urlPerfil +' '+id);
		
          var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
            '<input type="hidden" id="id" name="id" value="' + id + '" />' +
            '</form>');
          $('body').append(form);
          form.submit();
        
    });
    
    $(document).on("click", ".description2", function(event){
    
    //$('.description2').click(function(){
        
        //alert('Producto: description2');
        
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
        
    $(document).on("click", "#btnMas", function(event){
        
        var ultimo=$(this).attr("ultimo");    
        $('#myModal').modal('show'); 
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;

        //alert('ultimo ' + ultimo);

        //AJAX
        var parametros = { "ultimo" : ultimo };    
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/productosCsuModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            success:  function(xml){

                $('#myModal').modal('hide');
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case "9":

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#productos').html(msg);
                        $('#productos').show();
                        break;

                    case "8":

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#productos').html(msg);
                        $('#productos').show();
                        break;

                    case "99":

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#productos').html(msg);
                        $('#productos').show();
                        break;

                    case "100":

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#productos').html(msg);
                        $('#productos').show();
                        break;    

                    case "98":

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#productos').html(msg);
                        $('#productos').show();
                        break;

                    default:

                        var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                        var ultimo = xmlDoc.getElementsByTagName('ULTIMO')[0].childNodes[0].nodeValue;

                        var sHtml='<a id="btnMas" ultimo="'+ultimo+'" class="btn btn-thin">'; 
                        sHtml+='<i class="fa fa-plus-sign">+</i> M&aacute;s productos';
                        sHtml+='</a>';
                    
                        $('#ultimo').html(sHtml).trigger('liszt:updated');
                        $('#productos').html(datos).trigger('liszt:updated');
                        break;

                }
            }
        });
    });
    
      
});
 
 
function modalFunctionProducto(id){
    
    //alert('modalFunctionProducto');
    
    var item='#itemP_'+id;
    var producto='#proP_'+id;
    var load='#loadP_'+id;
    var mensaje='#msgP_'+id;
    
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
    
    SP_CAT_CSU_DET_PRO_PRO();
    SP_CAT_PRO_GET_MED_PRO();
    SP_CAT_CSU_COL_PRO_PRO();
    SP_CAT_CSU_PRO_CAT_PRO();
    SP_CAT_PRO_GET_IMG_PRO();
    
    $(load).hide();
    $(producto).show();
    
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
    //$('#divModalProducto').click();
    
}  

function SP_CAT_PRO_GET_IMG_PRO(){
    
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
            async: false,
        success:  function(xml){

            //alert('proDetCsuImgMModel '+xml);

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
                    var urlImgPri = xmlDoc.getElementsByTagName('URLIMGPRI')[0].childNodes[0].nodeValue;
                    
                    //alert('S1 ' + S1);
                    //alert('S2 ' + S2);
                    
                    $('#txtProImpMod').val(S1);
                    $('#txtProImrMod').val(S2);
                    $('#txtUrlImgPri').val(urlImgPri);
                    break;
            }
        }
    });
    
    
}

function SP_CAT_CSU_DET_PRO_PRO(){
    
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

function SP_CAT_PRO_GET_MED_PRO(){
    
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

            //alert('proDetCsuMedProModel '+xml);

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

function SP_CAT_CSU_COL_PRO_PRO(){
    
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

            //alert('proDetCsuColoresMModel '+xml);

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

function SP_CAT_CSU_PRO_CAT_PRO(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //CONSULTA EXISTENCIA DE PRODUCTO EN CATALOGO DEL PROFESIONAL
    var id = $('#txtProID').val();
    
    //alert('id ' + id);
    
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
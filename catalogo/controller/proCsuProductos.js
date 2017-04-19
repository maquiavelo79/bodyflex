
jQuery(document).ready(function(){
    
    $(window).scroll(function(){
      if ( $(this).scrollTop() > 100 ){
        $('.scroll-to-top').fadeIn();
      }else{
        $('.scroll-to-top').fadeOut();
      }
    });
    
    $('.scroll-to-top').click( function( e ) {
      e.preventDefault();
      $('html, body').animate( {scrollTop : 0}, 1500 );
    });
    
    $('.tooltipHere').click(function(){
        alert('Wishlist');
    });
    
    //COMBO ORDEN PRODUCTO
    $('#proOrden').change(function(){
        $('#proOrden').trigger('liszt:updated');
        consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
    });
    
    $("#proImrMod").on( "click", ".thumbLink", function(){
        //Imagen pequeña secundaria
        var imgPri='';
        var imgPeq='';
        var img=$(this).attr('urlImg');
        
        imgPri+='<a class="product-largeimg-link">';
            imgPri+='<img src="'+img+'" class="img-responsive product-largeimg" alt="img">';
        imgPri+='</a>';
        
        //1° Insertamos imagen pequeña en principal
            $('#proImpMod').html(imgPri);
            $('#proImpMod').trigger('liszt:updated');
        
        //2° Armamos de imagen principal una pequeña
            var imgAdd='';
            var sGD=$('#txtUrlImgPri').val();
            imgAdd+='<a urlImg="'+sGD+'" class="thumbLink">';
            imgAdd+='<img data-large="'+sGD+'" alt="img" class="img-responsive" src="'+sGD+'">';
            imgAdd+='</a>';
        
        //3° Agregamos imagen principal al conjunto de pequeñas
            imgPeq+=$('#txtProImrMod').val();
            imgPeq+=imgAdd;
            $('#proImrMod').html(imgPeq);
            $('#proImrMod').trigger('liszt:updated');
        
    });
    
    $("#proImpMod").on( "click", ".product-largeimg-link", function() {
        //Imagen grande principal
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proDetView.php";
        var id=$('#txtProID').val();

        var form = $('<form action="' + urlPerfil + '" method="post" target="_blank">' +
          '<input type="hidden" id="id" name="id" value="' + id + '" />' +
          '</form>');
        $('body').append(form);
        form.submit();
        
    });

    $('.description1').click(function(){
      
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
    
    
//    $('#productSetailsModalAjax').on('loaded.bs.modal', function () {
//        //REFRESH DIV
//        $('#productSetailsModalAjax').trigger('liszt:updated');   
//    });
    
    
});


function consultarProductosCatalogo(ultimo, pa){

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
   
    $('#ultimo').val(ultimo); 
    $('#pa').val(pa); 
    
    var rangos=$('#rangos').val().replace(/ran_/g, ""); 
    var marcas=$('#marcas').val().replace(/mar_/g, ""); 
    var colores=$('#colores').val(); 
    var etiquetas=$('#etiquetas').val().replace(/eti_/g, "");  
    var idColeccion=$('#idColeccion').val(); 
    var idCat1=$('#idCat1').val(); 
    var idCat2=$('#idCat2').val(); 
    var idCat3=$('#idCat3').val(); 
    var proOrden=$('#proOrden').val();
   
    if (ultimo!=0 || rangos!=0 || marcas!='' || colores!='' || etiquetas!=''){
        $('#myModal').modal('show'); 
    }
    
    if (rangos!=0 || marcas!='' || colores!='' || etiquetas!=''){
       //Simpre que se agregue una condición se tomará como la primera consulta
       ultimo=0;
       $('#pa').val(1); 
       pa=1;
    }
    
    //alert(pa+'|'+ultimo+'|'+rangos+'|'+marcas+'|'+colores+'|'+etiquetas+'|'+idColeccion+'|'+idCat1+'|'+idCat2+'|'+idCat3+'|'+proOrden);
    //return true;
    
    var parametros = { 
        "ultimo" : ultimo
        , "pa" : pa
        , "rangos" : (rangos!=''?rangos:0)
        , "marcas" : (marcas!=''?marcas:'')
        , "colores" : (colores!=''?colores:'')
        , "etiquetas" : (etiquetas!=''?etiquetas:'') 
        , "coleccion" : idColeccion 
        , "categoria1" : idCat1 
        , "categoria2" : idCat2 
        , "categoria3" : idCat3 
        , "proOrden" : (proOrden!=''?proOrden:0) 
    };
    
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/csuProCatModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            cache: false,
        success:  function(xml){

            //alert('csuProCatModel '+xml);
            
            $('#myModal').modal('hide');
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgProductos').html(msg);
                    $('#msgProductos').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgProductos').html(msg);
                    $('#msgProductos').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgProductos').html(msg);
                    $('#msgProductos').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgProductos').html(msg);
                    $('#msgProductos').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgProductos').html(msg);
                    $('#msgProductos').show();
                    break;

                default:

                    var dato = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                    var registros = xmlDoc.getElementsByTagName('REGISTROS')[0].childNodes[0].nodeValue;
                    var ultimo = xmlDoc.getElementsByTagName('ULTIMO')[0].childNodes[0].nodeValue;
                       
                    $('#productosCatalogo').html(dato);
                    $('#productosCatalogo').trigger('liszt:updated');
                    $('#paginacion').html(paginacion);
                    $('#ultimo').val(ultimo);
                    
                    //Filtro Productos
                        $('#espera_filtro').hide();
                        $('#proFiltro').show();
                        $('#numProFil').html('Mostrando <strong><b>'+registros+'</b></strong> productos'); 
                    //Filtro Productos
                    
                    $('#paginacion').trigger('liszt:updated');
                    $('.scroll-to-top').click();
                    break;
            }
        }
       
    });
      
}

function SP_CAT_PRO_SET_COL(){
    
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
 
 
function SP_CAT_CSU_PRO_CAT_COL(){
    
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
            async: false,
        success:  function(xml){

            //alert('proDetCsuProCatModel '+xml);

            $("#esperaAddCatMod").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "8":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "99":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "100":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;    

                case "98":

                    $('#txtMsg').val('OK5');
                    $("#btnCat").html('AGREGAR A MI CATÁLOGO');
                    $("#proCat").val(codErr);
                    //REFRESH DIV
                    $('#productSetailsModalAjax').trigger('liszt:updated');
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
 
function SP_CAT_CSU_DET_PRO_COL(){
    
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
            async: false,
        success:  function(xml){

            //alert('proDetCsuDetProModel '+xml);
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "8":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "99":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "100":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;  

                case "98":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
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

function SP_CAT_PRO_GET_MED_COL(){
    
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
            async: false,
        success:  function(xml){

            //alert('proDetCsuMedProModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "8":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "99":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "100":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
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

function SP_CAT_PRO_GET_IMG_COL(){
    
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
                    muestraErrorColeccion();
                    break;

                case "8":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "99":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "100":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;    

                case "98":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
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

function SP_CAT_CSU_COL_PRO_COL(){
    
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
            async: false,
        success:  function(xml){

            //alert('proDetCsuColoresMModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "8":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "99":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
                    break;

                case "100":

                    $('#txtMsg').val('<strong>Error [' + codErr + ']'+'</strong> '+desErr);
                    muestraErrorColeccion();
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

function modalFunctionCollection(id){
    
    //alert('modalFunctionVitrina');
    
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
   
    //LLAMADAS ORDENADAS DESDE LA MAS SIMPLE A LA MAS COMPLEJA
    SP_CAT_CSU_PRO_CAT_COL();
    SP_CAT_CSU_COL_PRO_COL();
    SP_CAT_PRO_GET_MED_COL();
    SP_CAT_PRO_GET_IMG_COL(); 
    SP_CAT_CSU_DET_PRO_COL();
    
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
    $('#divModalColeccion').click();
    
}
 
function muestraErrorColeccion(){
    
    var load=$('#load').val();
    var item=$('#item').val();
    var mensaje= $('#mensaje').val();
    
    $(load).hide();
    $(item).append('<div id="'+mensaje.replace('#','')+'" class="alert alert-danger msgError">'+$('#txtMsg').val()+'</div>').trigger('liszt:updated');
    $(mensaje).show();
    
} 

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
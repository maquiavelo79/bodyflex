
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
    //OBTIENE DETALLE PRODUCTO
    var parametros = { "idPro" : $('#idPro').val() };  
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuDetProModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('proDetCsuDetProModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;    

                case "98":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();
                    break;

                default:

                    $("#espera").hide();
                    //var PROID = xmlDoc.getElementsByTagName('PROID')[0].childNodes[0].nodeValue;
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
                    
                    var i;
                    var cmbCan='<select class="form-control">';
                        cmbCan+='<option value="strawberries" selected>Cantidad</option>';
                        for(i=1;i<=PROUN; i++){
                            cmbCan+='<option value="'+i+'">'+i+'</option>';
                        };
                    cmbCan+='</select>';
                   
                    if(PROPREANT!='$0'){
                        $('#proPreAnt').html(PROPREANT).trigger('liszt:updated');
                    }else{
                        $('#proPreAnt').hide();
                    }
                        
                    $('#cmbCan').html(cmbCan).trigger('liszt:updated');
                    $('#proNom1').html(PRONOM).trigger('liszt:updated');
                    $('#proNom2').html(PRONOM).trigger('liszt:updated');
                    $('#proMar1').html(PROMAR).trigger('liszt:updated');
                    $('#proMar2').html(PROMAR).trigger('liszt:updated');
                    $('#proDes').html(PRODES).trigger('liszt:updated');
                    $('#proPvp').html(PROPVP).trigger('liszt:updated');
                    
                    //VENTA PRESENCIAL
                    $('#pou1_1').html(PROPO2).trigger('liszt:updated');
                    $('#plb1').html(PROPV).trigger('liszt:updated');
                    $('#plp1').html(PROPVP).trigger('liszt:updated');
                    $('#pou1_2').html(PROPO2).trigger('liszt:updated');
                    $('#mtoUt1').html(PROMU1).trigger('liszt:updated');
                    
                    //VENTA X CATALOGO
                    $('#pou2_1').html(PROPO1).trigger('liszt:updated');
                    $('#plb2').html(PROPV).trigger('liszt:updated');
                    $('#pou2_2').html(PROPO1).trigger('liszt:updated');
                    $('#mtoUt2').html(PROMU2).trigger('liszt:updated');
                    break;
            }
        }
    });
    
    //CONSULTA EXISTENCIA DE PRODUCTO EN CATALOGO DEL PROFESIONAL
    var parametros = { "idPro" : $('#idPro').val() };  
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuProCatModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('proDetCsuProCatModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;    

                case "98":

                    $("#espera").hide();
                    $("#btnCat").html('AGREGAR A MI CATÁLOGO');
                    $("#proCat").val(codErr);
                    break;

                default:

                    $("#espera").hide();
                    $("#btnCat").html('ESTE PRODUCTO ES PARTE DE MI CATÁLOGO');
                    $("#btnCat").css("background-color", "#4EC67F"); 
                    $("#proCat").val(codErr);                   
                    break;
            }
        }
    });


    //OBTIENE TALLA DE PRODUCTO
    var parametros = { "idPro" : $('#idPro').val() };  
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuMedProModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('proDetCsuDetProModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;    

                case "98":

                    $("#espera").hide();
                    var TALLA = xmlDoc.getElementsByTagName('TALLA')[0].childNodes[0].nodeValue;                   
                    $('#cmbMed').html(TALLA).trigger('liszt:updated');
                    break;

                default:

                    $("#espera").hide();
                    var TALLA = xmlDoc.getElementsByTagName('TALLA')[0].childNodes[0].nodeValue;                   
                    $('#cmbMed').html(TALLA).trigger('liszt:updated');
                    break;
            }
        }
    });


    //OBTIENE IMAGENES DEL PRODUCTO
    var parametros = { "idPro" : $('#idPro').val() };    

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuImgModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function(xml){

            $("#espera_img").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warningIMG').html(msg);
                    $('#warningIMG').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warningIMG').html(msg);
                    $('#warningIMG').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warningIMG').html(msg);
                    $('#warningIMG').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warningIMG').html(msg);
                    $('#warningIMG').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warningIMG').html(msg);
                    $('#warningIMG').show();

                    break;

                default:

                    var S1 = xmlDoc.getElementsByTagName('SECCION1')[0].childNodes[0].nodeValue;
                    var S2 = xmlDoc.getElementsByTagName('SECCION2')[0].childNodes[0].nodeValue;
                    var S3 = xmlDoc.getElementsByTagName('SECCION3')[0].childNodes[0].nodeValue;

                    //alert('S3 ' + S3);

                    $("#divImgS1").html(S1+S2).trigger('liszt:updated');
                    $("#imgEspPri").html(S3).trigger('liszt:updated');
                    contenidoImagen();

                    break;
            }
        }
    });
    
    
     //OBTIENE COLORES PRODUCTO
    var parametros = { "idPro" : $('#idPro').val() };    
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuColoresModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('proDetCsuColoresModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;    

                case "98":

                    $("#espera").hide();
                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $('#proColores').html(datos);
                    $('#proColores').trigger('liszt:updated');
                    break;

                default:

                    $("#espera").hide();
                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $('#proColores').html(datos);
                    $('#proColores').trigger('liszt:updated');
                    break;
            }
        }
    });
    
    //CONTROLADOR DE EVENTOS BOTÓN AGREGAR A MI CATÁLOGO
    $('.btn-gray').click(function(){
        
        var idPro=$('#idPro').val();
        var rut=$('#rut').val();
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
                $("#esperaAddCat").show();
                $("#btnCat").hide();
            },
            success:  function(xml){

                //alert('proDetSetCatModel '+xml);

                $("#btnCat").show();
                $("#esperaAddCat").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case "9":

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#proColores').html(msg);
                        $('#proColores').show();

                        break;

                    case "8":

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#proColores').html(msg);
                        $('#proColores').show();

                        break;

                    case "99":

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#proColores').html(msg);
                        $('#proColores').show();

                        break;

                    case "100":

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#proColores').html(msg);
                        $('#proColores').show();

                        break;    

                    default:

                        var DATO = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                        if(DATO=="1"){
                            $("#btnCat").html('ESTE PRODUCTO ES PARTE DE MI CATÁLOGO');
                            $("#btnCat").css("background-color", "#4EC67F"); 
                            $("#proCat").val(1);
                        }else{
                            $("#btnCat").css("background-color", ""); 
                            $("#btnCat").html('AGREGAR A MI CATÁLOGO');
                            $("#proCat").val(98);
                        }                               
                        break;
                }
            }
        });
                   
    });

});
 
 



jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX     
              
        //desHabilita_contenido();
        
        $('#divConPro').hide();
        $('#divConProVta').hide();
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',false);
        $('#btnPublicar').prop('disabled',true);       
    
        var sw=0;
        var pa=1;
        var ultimo=0;
    
        //AJAX
        var parametros = { 
                    "rut" : rut ,
                    "sw" : sw  ,
                    "ultimo" : ultimo ,
                    "pa" : pa 
                };             
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/catProVtaCsuModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){
                
                //alert('catProVtaCsuModel ' + xml);                
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                        
                    case '8':
                       
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                    
                    case '99':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                        $('#tbody').html('');
                       
                        desHabilitar();
                        
                        break; 

                    case '100':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                        $('#tbody').html('');
                       
                        desHabilitar();
                        
                        break; 

                    
                    case '98':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 16px; color: blue;">Te invitamos a agregar productos de nuestro catálogo <b style="font-size: 16px; color: black;">Bodyflex</b></sapn></span></b>';
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                        $('#tbody').html('');
                        
                        setTimeout(function() {
                            $('#conWarning').hide();
                        }
                        , 5000); 
                        
                        break;
                    
                    default:
                       
                        $("#botonera").show();
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                        $('#tbody').html(datos);
                        $('#idPag').html(paginacion);
                        break;
                        
                }
            }
        });
    
        var nivelCat = 1;
        var nivelCod = 0;
        var parametros2 = { 
            "nivelCat" : nivelCat
            , "nivelCod" : nivelCod
        };
        
        $.ajax({
                data:  parametros2,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoCsuCategoriaModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){
                
                //alert('productoCsuCategoriaModel ' + xml);                
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                        
                    case '8':
                       
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                    
                    case '99':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                       
                        desHabilitar();
                        
                        break; 
                    
                    case '100':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                       
                        desHabilitar();
                        
                        break; 
                    
                    case '98':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        $("#botonera").show();     
                        break;
                    
                    default:
                       
                        $("#botonera").show();
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        $('#divCat1').html(datos);
                        $('#divCat1').trigger('liszt:updated');
                        break;
                }
            }
        });

$('#tblProducto').on('click', 'tbody tr', function(event){

    var proCat1=0;
    var proCat2=0;
    var proCat3=0;
            
    $('#conWarning').html('');    
                
    //Obtenemos valores de campos    
        $(this).children("td").each(function(index2){
            switch (index2){
                case 0:	
                        proID = $(this).text(); //ID PRODUCTO
                        break;
                case 1:
                        proNom = $(this).text(); //NOMBRE PRODUCTO
                        break;
                case 2:
                        proMar = $(this).text(); //MARCA
                        break;
                case 3:
                        proVtaBfx = $(this).text(); //PRECIO VENTA BFX
                        break;
                case 4:
                        proVtaPro = $(this).text(); //PRECIO VENTA PROFESIONAL
                        break;
                case 5:
                        proMarPre = $(this).text(); //MARGEN VENTA PRESENCIAL
                        break;
                case 6:
                        proMarCat = $(this).text(); //MARGEN VENTA X CATALOGO
                        break;    
               
                // <-- OCULTOS --> 
                    case 7:
                        proDesCor= $(this).text(); //
                        break;   
                    case 8:
                        proCat1= $(this).text(); //CATEGORIA 1 
                        break;    
                    case 9:
                        proCat2= $(this).text(); //CATEGORIA 2
                        break; 
                    case 10:
                        proCat3= $(this).text(); //CATEGORIA 3
                        break;     
                    case 11:
                        proDeLa= $(this).html(); //DESCRIPCIÓN DETALLADA
                        break;                       
                    case 12:
                        proIva= $(this).text(); //IVA
                        break;                           
                    case 13:
                        proNet= $(this).text(); //NETO
                        break;
                    case 14:
                        proTbk= $(this).text(); //TRANSBANK
                        break;
                    case 15:
                        proPC= $(this).text(); //% COMISIÓN
                        break;    
                // <-- OCULTOS -->         
                        
            }
        });

    //Asignamos valores
        $('#txtProId').val(proID);
        $('#txtProNom').val(proNom);
        $('#txtProMar').val(proMar);    
        $('#proDes').val(proDesCor);   
        
        $('#txtPreVtaBfx').val(proVtaBfx);
        $('#txtCatPreVta').val(proVtaBfx);
        $('#txtPreVtaPro').val(proVtaPro);
        
        var precioPro=proVtaPro.replace("$",'').replace('.','');
        var precioBfx=proVtaBfx.replace("$",'').replace('.','');
        var diferencia=precioBfx-precioPro;
        var porcentaje=((diferencia*100)/precioBfx).toFixed(2).replace('.',','); 
        
        $('#txtPrePorVta').val(porcentaje);
        $('#txtPreUtVta').val(formatNumber.new(diferencia, "$"));
        $('#txtCatUtiVta').val(proMarCat);
        $('#txtCatIvaVta').val(proIva);
        $('#txtCatNetVta').val(proNet);
        $('#txtCatTbkVta').val(proTbk);
        $('#txtCatPorVta').val(proPC);
        
       //INICIALIZAMOS CONTENIDO
        $("select#cmbTipConPro")[0].selectedIndex = 0;
        $('#txtIdDrivePro').val('');
        $('#txtIdConPro').val('');
        $('#idDrive').val('');
        
        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>'; 
        $('#right').html(botones);
        
        //Setamos Categorias
            //combo categoria 1 siempre existe
            if(proCat1!=0 && typeof proCat1 != 'undefined'){
               $('#cmbCat1').val(proCat1);
               $('#cmbCat1').trigger('liszt:updated');
            }
            
            //alert('proCat2 ' + proCat2);
            if(proCat2!=0 && typeof proCat2 != 'undefined'){
                if(ExisteObj('cmbCat2')){
                    $('#cmbCat2').val(proCat2);
                }else{
                    getSubCat(2, proCat1, proCat2);
                }
            }
           
            //alert('proCat3 ' + proCat3);
            if(proCat3!=0 && typeof proCat3 != 'undefined'){
                if(ExisteObj('cmbCat3')){
                    $('#cmbCat3').val(proCat3);
                }else{
                    getSubCat(3, proCat2, proCat3);
                }
            }
            
        //Obtener descripción larga    
        $('#detPro').cleditor()[0].focus();
        $('#detPro').cleditor()[0].clear();
        $('#detPro').cleditor()[0].execCommand('inserthtml',proDeLa); 
            
        //Obtenemos el contenido asociado
        $('#listConPro').html('');
        $('#warningConAso').html('');
               
        //alert($('#txtProId').val());       

        var parametros = {
            "proId" : ($('#txtProId').val()!=''?$('#txtProId').val():0) 
        };  
        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/catProVtaCsuContenidoModel.php",
            type:  'post',
            datetype: 'xml',
            success:  function (xml){     

                //alert('productoConsultaContenidoModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    default:
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $('#listConPro').html(datos);

                }              
            }
        }); 
    
        //CONTENIDO
        $('#divConPro').show();
        $('#divConProVta').show();

        //Pintamos Fila    
        $(this).addClass('highlight').siblings().removeClass('highlight');

});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var nom = $('#txtProNom').val();
            
        strModal+='<div class="modal-header">';
            strModal+='<h3><i class="icon-warning-sign"></i>&nbsp;Eliminar Producto Catálogo Profesional</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar producto <b>' + nom + '</b> de su catálogo de productos?<br>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
            strModal+='<a style="border-color: silver; background-color: #FFCC00; color: black;" id="btnEliPro" class="btn btn-primary">Eliminar</a>';
        strModal+='</div>';
    
    $('#myModal').html(strModal);
   
});

$(document).on("click", "#btnEliPro", function(event){
    
    var proId = $('#txtProId').val();
   
    //Div de Carga
    var strLoad='<div id="espera3" class="modal-body"></div>';

    //AJAX
    var parametros = {"proId" : (proId!=''?proId:0)};            
       
    //escondemos mensajería
    $('#conWarning').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/catProVtaEliminaModel.php",
        type:  'post',
        datetype: 'xml',
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (xml){     
            
            //alert('xml ' + xml);
            
            $("#modalBody").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            if(codErr==0){
                 
                var sw=0; 
                $('#txtPa').val;     
                $('#txtUlt').val;     
                     
                //AJAX
                var parametros = { 
                            "rut" : rut ,
                            "sw" : sw  ,
                            "ultimo" : ultimo   ,
                            "pa" : pa 
                        };         
                $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/catProVtaCsuModel.php",
                    type:  'post',
                    datetype: 'xml',
                    beforeSend: function(){
                        $("#espera").show();
                        $("#botonera").hide();
                    },
                    success:  function (xml){

                        //alert(xml);                

                        $("#espera").hide();
                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                        switch(codErr){
                            case '9':

                                $("#botonera").show();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                desHabilitar();
                                break; 

                            case '8':

                                $("#botonera").show();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                desHabilitar();
                                break; 

                            case '99':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                $("#botonera").show();
                                $('#tbody').html('');

                                //habilitar();

                                break; 

                            case '98':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                $("#divConPro").hide(); //escondemos sección contenido
                                $("#botonera").show();
                                $('#tbody').html('');

                                //desHabilita_contenido();
                                //habilitar();
                                break;

                            default:

                                $("#divConPro").hide(); //escondemos sección contenido
                                $("#botonera").show();
                                var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                                $('#tbody').html(datos);
                                $('#idPag').html(paginacion);
                                break;

                        }
                    }
                });
     
                var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';                
                $("#modalBody").html(msg);
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 750);    
                
                limpiar();
                
            }else{

                var msg='<div style="text-align:center;" class="alert alert-block">';
                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                msg+='</div>';

                $("#modalBody").html(msg);
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000);
                
                $('#conWarning').html(msg);
                $('#conWarning').show();
                
            }                    
        }
    });
    
});

    $('#btnLimpiar').click(function(){

        //alert('btnLimpiar');

        $('#txtProId').val('');
        $('#txtProEst').val('NUEVA');   
        $('#cmbCon').val('');   
        $('#txtProNom').val('');   
        $('#txtProPre').val('');
        $('#cmbCat1').val('');
        
        $('#divCat2').html('');
        $('#divCat2').hide();
        $('#divCat3').html('');
        $('#divCat3').hide();
        $('#proDes').val('');
        
        $('#txtProMar').val('');   
        $('#txtProPreRef').val(''); 
       
        $('#txtPreVtaBfx').val('');
        $('#txtPreVtaPro').val('');
        $('#txtPrePorVta').val('');
        $('#txtPreUtVta').val('');
        
        $('#txtCatPreVta').val('');
        $('#txtCatIvaVta').val('');
        $('#txtCatNetVta').val('');
        $('#txtCatTbkVta').val('');
        $('#txtCatPorVta').val('');
        $('#txtCatUtiVta').val('');
       
        $('#detPro').cleditor()[0].clear();
        
        //habilitamos boton modificar, eliminar y cancelar
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',false);
        $('#btnPublicar').prop('disabled',true);    
        
        $('#conWarning').html('');
    
        //grilla
        $('#tblProducto tr').each(function(){            
            $(this).removeClass('highlight'); 
        });
        
        $('#a-table-con tr').each(function(){
            $(this).css('background','white');
            $(this).css('color','black');
        });    
                
        $('#txtIdConPro').val('0');
        $('#cmbTipConPro').val('');
        $('#txtIdDrivePro').val(' ');

        var conTip='';
        var cmb = document.getElementById("cmbTipConPro"); 
        for (var i = 0; i < cmb.length; i++) {
            //  Aca haces referencia al "option" actual
            var opt = cmb[i];
            // Haces lo que te de la gana aca
            if(conTip == opt.value){
               $("#cmbTipConPro").prop('selectedIndex',i);
               $('#cmbTipConPro').trigger('liszt:updated');
               break;
            }
        }
        
//        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';
//        $('#right').html(botones);

        $('#divPublicar').html('');
        $("#warningConAso").html('');
        $("#listConPro").html('');
        
        //habilitar();
        $("#divConPro").hide();
        $("#divConProVta").hide();
            
    });
    
    $('#txtProPre').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
    
    $('#txtProPreRef').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
    
    $('#btnCatalogo').click(function(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/index.php";
        var form = $('<form action="' + urlPerfil + '" method="post" target="_self"></form>');
        $('body').append(form);
        form.submit();
                
    });
    
});


function getSubCat(catBsq, catPad, valor) {
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    var nivelCat = catBsq; //CATEGORIA BUSCADA
    var nivelCod = catPad; //CATEGORIA PADRE
    
    //alert('nivelCat ' + nivelCat);
    //alert('nivelCod ' + nivelCod);
    
    if(nivelCod!=0){
    
        var parametros2 = { 
            "nivelCat" : nivelCat
            , "nivelCod" : nivelCod
        };

        $.ajax({
                data:  parametros2,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoCsuCategoriaModel.php",
                type:  'post',
                datetype: 'xml',
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert(xml);                

                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        $("#botonera").show();

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();

                        desHabilitar();
                        break; 

                    case '8':

                        $("#botonera").show();

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();

                        desHabilitar();
                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();

                        $("#botonera").show();

                        //habilitar();

                        break; 

                    case '98':
                        // PARA ESTE ESCENARIO NO MOSTRAMOS NADA, SOLO ESCONDEMOS SI APLICA    
                            
                        switch(nivelCat){
                            case 2:
                                
                                $('#divCat2').html('');
                                $('#divCat2').hide();
                                $('#divCat2').trigger('liszt:updated');
                                break;    
                                
                            case 3:
                                
                                $('#divCat3').html('');
                                $('#divCat3').hide();
                                $('#divCat3').trigger('liszt:updated');
                                break;        
                                
                        }
                            
                        $("#botonera").show();
                        
                        //habilitar();
                        
                        break;

                    default:

                        $("#botonera").show();
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                        $('#cmbCat1').attr("disabled", 'disabled');
                        if (nivelCat==2){ 
                            
                            $('#divCat2').html(datos);
                            $('#divCat2').show();
                            $('#divCat2').trigger('liszt:updated');
                            
                            if(valor!=0){
                                $("#cmbCat2 option").each(function(){
                                    if(valor==$(this).val()){
                                        $("#cmbCat2 option[value="+valor+"]").attr("selected",true);
                                        $('#cmbCat2').trigger('liszt:updated');
                                    }
                                });
                            }
                            $('#cmbCat2').attr("disabled", 'disabled');
                            
                        }else{
                            
                            $('#divCat3').html(datos);
                            $('#divCat3').show();
                            $('#divCat3').trigger('liszt:updated');
                            
                            if(valor!=0){
                                $("#cmbCat3 option").each(function(){
                                    if(valor==$(this).val()){
                                        $("#cmbCat3 option[value="+valor+"]").attr("selected",true);
                                        $('#cmbCat3').trigger('liszt:updated');
                                    }
                                });
                            }
                            $('#cmbCat3').attr("disabled", 'disabled');
                        }

                        //habilitar();
                        break;
                }
            }
        });
    }else{
        
        switch(nivelCat){
            case 2:
           
                $('#divCat2').html('');
                $('#divCat2').hide();
                $('#divCat2').trigger('liszt:updated');

                $('#divCat3').html('');
                $('#divCat3').hide();
                $('#divCat3').trigger('liszt:updated');   
                    
                break;
            case 3:
  
                $('#divCat3').html('');
                $('#divCat3').hide();
                $('#divCat3').trigger('liszt:updated');              

                break;
        }
        
    }
}

function desHabilitar(){
    
    //alert('desHabilitar');
    
//    //deshabilitamos entradas    
    $('#cmbCon').prop('disabled',true);   
    $('#txtProNom').prop('disabled',true);   
    $('#txtProPre').prop('disabled',true);   
    $('#cmbCat1').prop('disabled',true);   
    $('#cmbCat2').prop('disabled',true);   
    $('#cmbCat3').prop('disabled',true);   
    $('#proDes').prop('disabled',true); 
    //$('#detPro').cleditor()[0].disable(true);
            
        $('#txtProMar').prop('disabled',true);
        $('#txtProPreRef').prop('disabled',true);

//    //deshabilitamos botones
    $('#btnEliminar').prop('disabled',true);
    $('#btnLimpiar').prop('disabled',false); 
    
}

function habilitar(){
        
    //alert('habilitar');   
 
    $('#cmbCon').prop('disabled',false);   
    $('#txtProNom').prop('disabled',false);   
    $('#txtProPre').prop('disabled',false);   
    $('#cmbCat1').prop('disabled',false);   
    $('#cmbCat2').prop('disabled',false);   
    $('#cmbCat3').prop('disabled',false);   
    $('#proDes').prop('disabled',false);   
    //$('#detPro').cleditor()[0].disable(false).refresh();

        $('#txtProMar').prop('disabled',false);
        $('#txtProPreRef').prop('disabled',false);

    //deshabilitamos botones
    $('#btnEliminar').prop('disabled',false);
    $('#btnLimpiar').prop('disabled',false);
    
}

function desHabilitarContenido(){
    
//    alert('desHabilitarContenido');
//    
    //deshabilitamos entradas    
    $('#cmbTipConPro').prop('disabled',true);   
    $('#txtIdDrivePro').prop('disabled',true);   

    //tabla contenido
    $("#divConPro").hide();
    
    //deshabilitamos botones
    $('#btnGuardarConPro').prop('disabled',true);
    $('#btnEliminarConPro').prop('disabled',true);
    $('#btnLimpiarConPro').prop('disabled',true);
    
    var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';
    $('#right').html(botones);
       
}



function habilitarBtnProbar(){
    $('#btnProbar').prop('disabled',false);
}
function habilitarBtnPublicar(){
    $('#btnPublicar').prop('disabled',false);
}
function desHabilitarBtnProbar(){
    $('#btnProbar').prop('disabled',true);
}
function desHabilitarBtnPublicar(){
    $('#btnPublicar').prop('disabled',true);
}

function habilitarContenido(){
    
//    alert('habilitarContenido');
//    
//    //deshabilitamos entradas    
    $('#cmbTipConPro').prop('disabled',false);   
    $('#txtIdDrivePro').prop('disabled',false);   

    //tabla contenido
    //$("#divConPro").show();
    
    //deshabilitamos botones
    $('#btnGuardarConPro').prop('disabled',false);
    $('#btnEliminarConPro').prop('disabled',false);
    $('#btnLimpiarConPro').prop('disabled',false);

}

function limpiar(){
    //limpiamos entradas  
                
        $('#txtProId').val(0);
        $('#txtProEst').val('NUEVA');   
        $('#cmbCon').val('');   
        $('#txtProNom').val('');   
        $('#txtProPre').val('');
        $('#cmbCat1').val('');
        
        $('#txtProMar').val('');
        $('#txtProPreRef').val('');
        
        $('#divCat2').html('');
        $('#divCat2').hide();
        $('#divCat3').html('');
        $('#divCat3').hide();
        $('#proDes').val('');
               
        $('#detPro').cleditor()[0].clear();
        
        //habilitamos boton modificar, eliminar y cancelar
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);  
        $('#btnPublicar').prop('disabled',true);    
        
        $('#conWarning').html('');
    
        //grilla
        $('#tblProducto tr').each(function(){            
            $(this).removeClass('highlight'); 
        });
        
        $('#a-table-con tr').each(function(){
            $(this).css('background','white');
            $(this).css('color','black');
        });    
                
        $('#txtIdConPro').val('0');
        $('#cmbTipConPro').val('');
        $('#txtIdDrivePro').val(' ');

        var conTip='';
        var cmb = document.getElementById("cmbTipConPro"); 
        for (var i = 0; i < cmb.length; i++) {
            //  Aca haces referencia al "option" actual
            var opt = cmb[i];
            // Haces lo que te de la gana aca
            if(conTip == opt.value){
               $("#cmbTipConPro").prop('selectedIndex',i);
               $('#cmbTipConPro').trigger('liszt:updated');
               break;
            }
        }
        
        $("#warningConAso").html('');
        $("#listConPro").html('');
    
}

function ExisteObj(sObjeto){
    return(document.all(sObjeto) != null);
}

function consultaProductos(rut,sw,ultimo,pa){

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    var parametros = { 
                    "rut" : rut ,
                    "sw" : sw  ,
                    "ultimo" : ultimo   ,
                    "pa" : pa 
                };             
        
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/catProVtaCsuModel.php",
                type:  'post',
                datetype: 'xml',
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){
                
                //alert(xml);                
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                        
                    case '8':
                       
                        $("#botonera").show();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        desHabilitar();
                        break; 
                    
                    case '99':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                        $('#tbody').html('');
                       
                        //habilitar();
                        
                        break; 
                    
                    case '98':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                       
                        $("#botonera").show();
                        $('#tbody').html('');
                      
                        //habilitar();
                        break;
                    
                    default:
                       
                        $("#botonera").show();
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                        
                        //alert('datos ' + datos);
                        
                        $('#tbody').html(datos);
                        $('#idPag').html(paginacion);
                        break;
                        
                }
            }
        });
        
};

    
function pintaRegistroProducto(){  
    
    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblProducto tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#txtProId').val()){
                        sw=1;
                    }
                    break;  
            }
        });
        if(sw==1){
            //alert('pintaRegistro: Entro!!');
            $(this).addClass('highlight').siblings().removeClass('highlight'); 
        }    
    });
 }
 
 var formatNumber = {
 separador: ".", // separador para los miles
 sepDecimal: ',', // separador para los decimales
 formatear:function (num){
  num +='';
  var splitStr = num.split('.');
  var splitLeft = splitStr[0];
  var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
  var regx = /(\d+)(\d{3})/;
  while (regx.test(splitLeft)) {
  splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
  }
  return this.simbol + splitLeft  +splitRight;
 },
 new:function(num, simbol){
  this.simbol = simbol ||'';
  return this.formatear(num);
 }
};
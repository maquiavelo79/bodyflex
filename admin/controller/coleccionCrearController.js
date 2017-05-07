
jQuery(document).ready(function() {
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
    $('#btnEliminar').prop('disabled',true);       

    var parametros = { 
            "ultimo" : 0   
            , "pa" : 1 
        };    
       
    //Limpiamos entradas
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionCrearConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('categoria1ConsultaModel ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;    

                case "98":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    $('#tbody').html('');
                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var cant = xmlDoc.getElementsByTagName('REGISTROS')[0].childNodes[0].nodeValue;
                    var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;

                    $("#espera").hide();
                    $('#tbody').html(datos);
                    $('#cantCol').val(cant);
                    $('#idPag').html(paginacion);
                    break;
            }
        }
    });
    
 $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#warning').hide();
                       
        var id = $('#txtColId').val();  
        var nom = $('#txtColNom').val();
        var des = $('#txtColDes').val();
        var gd1 = $('#txtCol1GD').val();
        var gd2 = $('#txtCol2GD').val();
        var gd3 = $('#txtCol3GD').val();
        var gd4 = $('#txtCol4GD').val();
        //var enMenu = $('#enMenu').val();

        if(nom == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue nombre colección.</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(des == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue descripción de la colección.</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(gd1 == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue ID Google Drive (850x300).</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(gd2 == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue ID Google Drive (217x217).</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(gd3 == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue ID Google Drive (400x180).</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(gd4 == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue ID Google Drive (300x250).</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        var enMenu='';
        if($("#enMenu").is(':checked')){
            enMenu=1;
        }else{
            enMenu=0;
        }  
                
        $('#warning').hide();
     
        //AJAX
            var parametros = { 
                "id" : (id!=''?id:0)
                , "nom" : nom
                , "des" : des
                , "gd1" : gd1 
                , "gd2" : gd2 
                , "gd3" : gd3 
                , "gd4" : gd4 
                , "enMenu" : enMenu 
            };            
       
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionCrearAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
                beforeSend: function(){
                    $("#espera").show();
            },
            success:  function (xml){     
                
                //alert(xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#espera").hide();
                    
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warning').html(msg);
                        $('#warning').show();
                        break;
                        
                    case '8':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warning').html(msg);
                        $('#warning').show();
                        break;
                    
                    case '99':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warning').html(msg);
                        $('#warning').show();
                        break;
                    
                    case '100':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warning').html(msg);
                        $('#warning').show();
                        break;
                    
                    default:
                        
                        $("#espera").hide();
                        
                        habilitar();
                        var id = xmlDoc.getElementsByTagName('ID')[0].childNodes[0].nodeValue;
                        $("#txtCat1Id").val(id);

                        var msg='<div class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();
                        
                        consultaColeccion(0,1);
                        
                        //recorremos tabla para pintar registro actual
                        var puID=0;
                        $('#tblCol tr').each(function(){
                            var sw=0;
                            $(this).children("td").each(function(index){
                                switch (index){
                                    case 0:	
                                        puID = $(this).text();                    
                                        if(puID==$('#txtColId').val()){
                                            sw=1;
                                        }
                                        break;  
                                }
                            });
                            if(sw==1){
                                $(this).addClass('highlight').siblings().removeClass('highlight'); 
                            }    
                        });
                                                
                        break;
                }              
            }
        });
    });
    
    $('#tblCol').on('click', 'tbody tr', function(event) {

        //Pintamos Fila    
        $(this).addClass('highlight').siblings().removeClass('highlight');
        
        //Borramos sección mensajería
        $('#warning').html('');
                
        habilitar();
    
        //Obtenemos valores de campos    
        $(this).children("td").each(function(index2){
            switch (index2){
                case 0:	
                        idTd = $(this).text();
                        break;
                case 1:
                        nomTd = $(this).text();
                        break;
                case 2:
                        desTd = $(this).text();
                        break;
                case 3:
                        gd1Td = $(this).text();
                        break;
                case 4:
                        gd2Td = $(this).text();
                        break;    
                case 5:
                        gd3Td = $(this).text();
                        break; 
                case 6:
                        gd4Td = $(this).text();
                        break;     
                case 7:
                        enMenu = $(this).text();
                        break;          
            }
        });
         
    //asignamos ID a elemento hidden
        if(enMenu=="SI"){
            $('#divChkMnu').html('<input id="enMenu" type="checkbox" name="enMenu" value="1" checked> Imagen en menú?');
        }else{
            $('#divChkMnu').html('<input id="enMenu" type="checkbox" name="enMenu" value="1"> Imagen en menú?');
        }
        $('#enMenu').trigger('liszt:updated');
        
        $('#txtColId').val(idTd);
        $('#txtColNom').val(nomTd);
        $('#txtColDes').val(desTd);
        $('#txtCol1GD').val(gd1Td);
        $('#txtCol2GD').val(gd2Td);
        $('#txtCol3GD').val(gd3Td);
        $('#txtCol4GD').val(gd4Td);
        $('#sVerImg').html('<i style="color: green; cursor: pointer;" onclick="verImagen();" class="fa fa-picture-o fa-2x"></i>');
        $('#sVerImg2').html('<i style="color: green; cursor: pointer;" onclick="verImagen2();" class="fa fa-picture-o fa-2x"></i>');
        $('#sVerImg3').html('<i style="color: green; cursor: pointer;" onclick="verImagen3();" class="fa fa-picture-o fa-2x"></i>');
        $('#sVerImg4').html('<i style="color: green; cursor: pointer;" onclick="verImagen4();" class="fa fa-picture-o fa-2x"></i>');
                
});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var id = $('#txtColId').val();

    if(id.length>0){
        strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
            strModal+='<h3>Eliminar Colección</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar colección con identificador ' + '<b>' + id + '</b>?' + '<br>';
            strModal+='<b>Atención:</b> Esta acción eliminará todos los productos asociados a esta colección.</p>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
            strModal+='<a style="font-weight: bold; border-color: silver; background-color: #FFCC00; color: black;" id="btnEliCol" class="btn btn-primary">Eliminar</a>';
        strModal+='</div>';
        $('#myModal').html(strModal);
    };

});

$(document).on("click", "#btnEliCol", function(event){
   
    //Div de Carga
    var strLoad='<div id="espera2" class="modal-body"></div>';

    //AJAX
    var id = $('#txtColId').val();
    var parametros = {"id" : id};            
       
    //escondemos mensajería
    $('#warning').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionCrearEliminaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (xml){    
            
            $("#modalBody").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            if(codErr==0){
                
                consultaColeccion(0,1);
                limpiar();
                
                var msg='<div style="text-align:center;" class="alert alert-success">';
                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                msg+='</div>';

                $("#modalBody").html('<b><span style="color: #000;">Operación exitosa!.</span></b>');
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
               
                $('#warning').html(msg);
                $('#warning').show();
                
               
            }else{                
                
                var msg='<div style="text-align:center;" class="alert alert-block">';
                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                msg+='</div>';

                $("#modalBody").html('<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>');
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000); 

                $('#warning').html(msg);
                $('#warning').show();
                
            }                    
        }
    });
    
});

    $('#btnLimpiar').click(function(){

        $('#txtColId').val('');        
        $('#txtColNom').val('');
        $('#txtColDes').val('');
        $('#txtCol1GD').val('');
        $('#txtCol2GD').val('');
        $('#txtCol3GD').val('');
        $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
        $('#sVerImg2').html('<i class="fa fa-picture-o fa-2x"></i>');
        $('#sVerImg3').html('<i class="fa fa-picture-o fa-2x"></i>');
        $('#sVerImg4').html('<i class="fa fa-picture-o fa-2x"></i>');

        //Borramos sección mensajería
        $('#warning').html('');

        //deshabilitamos botones
        $('#btnAgregar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);

        //grilla
        $('#tblCol tr').each(function(){
            $(this).removeClass('highlight'); 
        });

    });
    
    $('#txtCol1GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg').html('<i style="color: green; cursor: pointer;" onclick="verImagen();" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol2GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg2').html('<i style="color: green; cursor: pointer;" onclick="verImagen2();" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg2').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });

    $('#txtCol3GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg3').html('<i style="color: green; cursor: pointer;" onclick="verImagen3();" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg3').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol4GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg4').html('<i style="color: green; cursor: pointer;" onclick="verImagen4();" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg4').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });

});

function pintaRegistro(){  

    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblCol tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#txtColId').val()){
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
 
 function limpiar(){
        
    $('#txtColId').val('');        
    $('#txtColNom').val('');
    $('#txtColDes').val('');
    $('#txtCol1GD').val('');
    $('#txtCol2GD').val('');
    $('#txtCol3GD').val('');
    $('#myCheckbox').attr('checked', false);
    
    $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
    $('#sVerImg2').html('<i class="fa fa-picture-o fa-2x"></i>');
    $('#sVerImg3').html('<i class="fa fa-picture-o fa-2x"></i>');
    $('#sVerImg4').html('<i class="fa fa-picture-o fa-2x"></i>');

    //Borramos sección mensajería
    $('#warning').html('');

    //deshabilitamos botones
    $('#btnGuardar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);

    //grilla
    $('#tblCol tr').each(function(){
        $(this).removeClass('highlight'); 
    });
  
    
 }
 
 function habilitar(){
     
    //$('#txtCat1Nom').prop('disabled',false); 
    //$('#txtCol1GD').prop('disabled',false); 
     
    //habilitamos botones
    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
    $('#btnLimpiar').prop('disabled',false);

    
 }
 
  function desHabilitar(){
     
    //$('#txtCat1Nom').prop('disabled',true); 
    //$('#txtCol1GD').prop('disabled',true); 
     
    //habilitamos botones
    $('#btnGuardar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
    $('#btnLimpiar').prop('disabled',true);

    
 }
 
function consultaColeccion(ultimo,pa){
    
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;
    
    var parametros = { 
            "ultimo" : ultimo   
            , "pa" : pa 
        };    
       
    //Limpiamos entradas
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionCrearConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('categoria1ConsultaModel ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;    

                case "98":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    $('#tbody').html('');
                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var cant = xmlDoc.getElementsByTagName('REGISTROS')[0].childNodes[0].nodeValue;
                    var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;

                    $("#espera").hide();
                    $('#tbody').html(datos);
                    $('#cantCol').val(cant);
                    $('#idPag').html(paginacion);
                    break;
            }
        }
        
    });
    
}


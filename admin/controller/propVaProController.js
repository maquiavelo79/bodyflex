
jQuery(document).ready(function() {
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
    $('#btnEliminar').prop('disabled',true);       
       
    //Limpiamos entradas
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/propVaProCsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('propVaProCsuModel ' + xml);

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
                    $("#espera").hide();
                    $('#tbody').html(datos);
                    break;
            }
        }
    });
    
 $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#warning').hide();
                       
        var id = $('#txtColId').val();  
        var acr = $('#txtColAcr').val();
        var nom = $('#txtColNom').val();
        var tit = $('#txtColTit').val();
        var des = $('#txtColDes').val();
        var gd = $('#txtColGD').val();
 
        if(acr == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue acronimo de la propuesta.</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
 
        if(nom == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue nombre de la propuesta.</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(tit == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue titulo de la propuesta.</span></b>';
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
        
        if(gd == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue ID Google Drive.</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
                        
        $('#warning').hide();
     
        //AJAX
            var parametros = { 
                "id" : (id!=''?id:0)
                , "acr" : acr
                , "nom" : nom
                , "tit" : tit
                , "des" : des
                , "gd" : gd                  
            };            
       
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/propVaProAddModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#espera").show();
            },
            success:  function (xml){     
                
                //alert('propVaProAddModel ' + xml);
                
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
                        acrTd = $(this).text();
                        break;
                case 2:
                        nomTd = $(this).text();
                        break;
                case 3:
                        titTd = $(this).text();
                        break;
                case 4:
                        desTd = $(this).text();
                        break;    
                case 5:
                        gdTd = $(this).text();
                        break;        
            }
        });
         
        $('#txtColId').val(idTd);
        $('#txtColAcr').val(acrTd);
        $('#txtColNom').val(nomTd);
        $('#txtColTit').val(titTd);
        $('#txtColDes').val(desTd);
        $('#txtColGD').val(gdTd);
        $('#sVerImg').html('<i style="color: green; cursor: pointer;" onclick="verImagen();" class="fa fa-picture-o fa-2x"></i>');
       
});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var id = $('#txtColId').val();

    if(id.length>0){
        strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
            strModal+='<h3>Eliminar Colección</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar la oferta de valor con identificador ' + '<b>' + id + '</b>?' + '<br>';
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

    //alert('btnEliCol ' + id);
    
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/propVaProEliModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (xml){    
            
            //alert('propVaProEliModel ' + xml);
            
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
        $('#txtColAcr').val('');
        $('#txtColNom').val('');
        $('#txtColTit').val('');
        $('#txtColDes').val('');
        $('#txtColGD').val('');
        $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
       
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
    
    $('#txtColGD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg').html('<i style="color: green; cursor: pointer;" onclick="verImagen();" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
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
        $('#txtColAcr').val('');
        $('#txtColNom').val('');
        $('#txtColTit').val('');
        $('#txtColDes').val('');
        $('#txtColGD').val('');
        $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
       
        //Borramos sección mensajería
        $('#warning').html('');

        //deshabilitamos botones
        $('#btnAgregar').prop('disabled',true);
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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/propVaProCsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('propVaProCsuModel ' + xml);

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
                    $("#espera").hide();
                    $('#tbody').html(datos);
                    break;
            }
        }
    });
    
}



jQuery(document).ready(function() {
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
    $('#btnEliminar').prop('disabled',true);     
       
    var parametros = { 
            "ultimo" : 0   
            , "pa" : 1 
            , "cat1" : 0 
        };    
              
    //CSU CAT1 PARA EL COMBO CATEGORÍA
    $.ajax({
            //data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/categoria2CsuCat1CmbModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

           //alert('categoria2CsuCat1CmbModel ' + xml);

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
                    break;

                default:
                    
                    //var cmb = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    
                    //alert('aqui!!');
                    
                    var strVal;
                    $('#cmbCat1').empty();
                    $('#cmbCat1').append($('<option>', {value:0, text:'(SELECCIONE)'}));

                    $xml.find('REGISTRO').each(function () {
                        strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                        var res = strVal.split("|"); 
                        if(res[0].length>0){
                            $('#cmbCat1').append($('<option>', {value:res[0], text:res[1]}));
                        }
                    });
                    $('#cmbCat1').trigger('liszt:updated');
                    
                    break;
                    
            }
        }
    });   
       
    //Limpiamos entradas
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/categoria2ConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('categoria2ConsultaModel ' + xml);

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
                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var cant = xmlDoc.getElementsByTagName('REGISTROS')[0].childNodes[0].nodeValue;
                    var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;

                    $("#espera").hide();
                    $('#tbody').html(datos);
                    $('#cantCat2').val(cant);
                    $('#idPag').html(paginacion);
                    break;
            }
        }
    });
    
 $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#warning').hide();
                       
        var id = $('#txtCat2Id').val();  
        var cat1=$('#cmbCat1').val();  
        var nom = $('#txtCat2Nom').val();
        var gd = $('#txtCat2GD').val();
        var gd2 = $('#txtCat2GD2').val();

        if(nom == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue nombre categoría.</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(cat1 == '0') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione primera categoría.</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(gd == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue ID Google Drive (850x300)</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(gd2 == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue ID Google Drive (217x217)</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
                
        $('#warning').hide();
     
        //AJAX
            var parametros = { 
                "id" : (id!=''?id:0)
                , "cat1" : cat1
                , "nom" : nom
                , "gd" : gd 
                , "gd2" : gd2 
            };            
       
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/categoria2AgregaModel.php",
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
                        $("#txtCat2Id").val(id);

                        var msg='<div class="alert alert-success">';
                        msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();
                        
                        consultaCategoria2($('#cmbCat1').val(), 0, 1);
                        pintaRegistro();
                                                
                        break;
                }              
            }
        });
    });
    
    $('#tblCat2').on('click', 'tbody tr', function(event) {
        
        habilitar();
        
        //Pintamos Fila    
        $(this).addClass('highlight').siblings().removeClass('highlight');
        
        //Borramos sección mensajería
        $('#warning').html('');
           
        //Obtenemos valores de campos    
        $(this).children("td").each(function(index2){
            switch (index2){
                case 0:	
                        cat1Id = $(this).text();
                        break;
                case 1:
                        cat1Nom = $(this).text();
                        break;
                case 2:
                        cat2Id = $(this).text();
                        break;
                case 3:
                        cat2Nom = $(this).text();
                        break;     
                case 4:
                        cat2GD = $(this).text();
                        break;   
                case 5:
                        cat2GD2 = $(this).text();
                        break;        
               
            }
        });
         
    //asignamos ID a elemento hidden
        $('#txtCat2Id').val(cat2Id);
        $('#txtCat2Nom').val(cat2Nom);
        $('#txtCat2GD').val(cat2GD);
        $('#txtCat2GD2').val(cat2GD2);
        
        //$('#cmbCat1').val(cat1Id);
        
        var cont=0;
        $("#cmbCat1 option").each(function(){
            if(cat1Id==$(this).val()){
                $("#cmbCat1 option[value="+cat1Id+"]").attr("selected",true);
                $('#cmbCat1').trigger('liszt:updated');
            }
            cont+=1;
        });
                
        $('#sVerImg').html('<i style="color: green; cursor: pointer;" onclick="verImagen();" class="fa fa-picture-o fa-2x"></i>');
        $('#sVerImg2').html('<i style="color: green; cursor: pointer;" onclick="verImagen2();" class="fa fa-picture-o fa-2x"></i>');

});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var id = $('#txtCat2Id').val();

    if(id.length>0){
        strModal+='<div class="modal-header">';
            strModal+='<h3>Eliminar Categoría</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar la categoría con identificador ' + '<b>' + id + '</b>?' + '</p>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
            strModal+='<a style="border-color: silver; background-color: #FFCC00; color: black;" id="btnEliCat" class="btn btn-primary">Eliminar</a>';
        strModal+='</div>';
        $('#myModal').html(strModal);
    };

});

$(document).on("click", "#btnEliCat", function(event){
   
    //Div de Carga
    var strLoad='<div id="espera2" class="modal-body"></div>';

    //AJAX
    var id = $('#txtCat2Id').val();
    var parametros = {"id" : id};            
       
    //escondemos mensajería
    $('#warning').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/categoria2EliminaModel.php",
        type:  'post',
        datetype: 'xml',
        async: false,
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (xml){    
            
            //alert('categoria2EliminaModel ' + xml);
            
            //$("#modalBody").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            if(codErr==0){
                
                consultaCategoria2(0,0,1);
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
                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
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

        $('#txtCat2Id').val('');        
        $('#txtCat2Nom').val('');
        $('#txtCat2GD').val('');
        $('#txtCat2GD2').val('');
        $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
        $('#sVerImg2').html('<i class="fa fa-picture-o fa-2x"></i>');

        var opc='0';
        $("#cmbCat1 option").each(function(){
            if($(this).val()==opc){
                $("#cmbCat1 option[value="+opc+"]").attr("selected",true);
                $('#cmbCat1').trigger('liszt:updated');
                return false;
            }
        });

        //Borramos sección mensajería
        $('#warning').html('');

        //deshabilitamos botones
        $('#btnAgregar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);

        //grilla
        $('#tblCat2 tr').each(function(){
            $(this).removeClass('highlight'); 
        });

        consultaCategoria2(0, 0, 1);

    });
    
    $('#txtCat2GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg').html('<i style="color: green; cursor: pointer;" onclick="verImagen();" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCat2GD2').keyup(function(){
        if($(this).length>0){
            $('#sVerImg2').html('<i style="color: green; cursor: pointer;" onclick="verImagen2();" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg2').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#cmbCat1').change(function(){
        $('#txtCat2Id').val('');
        $('#txtCat2Nom').val('');
        $('#txtCat2GD').val('');
        $('#txtCat2GD2').val('');
        consultaCategoria2($('#cmbCat1').val(), 0, 1);
    });
    
});

function pintaRegistro(){  

    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblCat2 tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 2:	
                    puID = $(this).text();                    
                    if(puID==$('#txtCat2Id').val()){
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
 
    $('#txtCat2Id').val('');   
    $('#txtCat2Nom').val('');
    $('#txtCat2GD').val('');
    $('#txtCat2GD2').val('');
    $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
    $('#sVerImg2').html('<i class="fa fa-picture-o fa-2x"></i>');
    
    var opc='0';
    $("#cmbCat1 option").each(function(){
        if($(this).val()==opc){
            $("#cmbCat1 option[value="+opc+"]").attr("selected",true);
            $('#cmbCat1').trigger('liszt:updated');
            return false;
        }
    });

    //Borramos sección mensajería
    $('#warning').html('');

    //deshabilitamos botones
    $('#btnAgregar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',true);

    //grilla
    $('#tblCat2 tr').each(function(){
        $(this).removeClass('highlight'); 
    });
  
    consultaCategoria2(0, 0, 1);
    
 }
 
 function habilitar(){
     
    $('#txtCat2Nom').prop('disabled',false); 
    $('#txtCat2GD').prop('disabled',false); 
     
    //habilitamos botones
    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
    $('#btnLimpiar').prop('disabled',false);

    
 }
 
  function desHabilitar(){
     
    $('#txtCat2Nom').prop('disabled',true); 
    $('#txtCat2GD').prop('disabled',true); 
     
    //habilitamos botones
    $('#btnGuardar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
    $('#btnLimpiar').prop('disabled',true);

    
 }
 
function consultaCategoria2(cat1,ultimo,pa){
    
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;
    
    var parametros = { 
            "cat1" : cat1
            ,"ultimo" : ultimo   
            , "pa" : pa 
        };    
       
    //Limpiamos entradas
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/categoria2ConsultaModel.php",
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
                    $('#cantCat1').val(0);
                    $('#divTblCat2').hide();
                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var cant = xmlDoc.getElementsByTagName('REGISTROS')[0].childNodes[0].nodeValue;
                    var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;

                    $('#warning').html('');
                    $("#espera").hide();
                    $('#tbody').html(datos);
                    $('#cantCat1').val(cant);
                    $('#idPag').html(paginacion);
                    $('#divTblCat2').show();
                    
                    break;
            }
        }
        
    });
    
}


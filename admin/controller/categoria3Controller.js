
jQuery(document).ready(function() {
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
    $('#btnEliminar').prop('disabled',true);   
       
    var parametros = { 
            "ultimo" : 0   
            , "pa"   : 1 
            , "cat1" : 0 
            , "cat2" : 0 
        };    
              
    //CSU CAT1 PARA EL COMBO CATEGORÍA
    $.ajax({
            //data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/categoria3CsuCat1CmbModel.php",
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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/categoria3ConsultaModel.php",
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
                    $('#cantCat3').val(cant);
                    $('#idPag').html(paginacion);
                    break;
            }
        }
    });
    
 $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#warning').hide();
                       
        var id = $('#txtCat3Id').val();  
        var cat1=$('#cmbCat1').val();  
        var cat2=$('#cmbCat2').val();  
        var nom = $('#txtCat3Nom').val();
        var gd = $('#txtCat3GD').val();
        var gd2 = $('#txtCat3GD2').val();

        //alert('id ' + id);
        //alert('gd ' + gd);

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
        
        if(cat2 == '0') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione segunda categoría.</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(gd == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue ID Google Drive (850X300)</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(gd2 == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue ID Google Drive (217X217)</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
                
        $('#warning').hide();
     
        //AJAX
            var parametros = { 
                "id" : (id!=''?id:0)
                , "cat2" : cat2
                , "nom" : nom
                , "gd" : gd 
                , "gd2" : gd2 
            };            
       
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/categoria3AgregaModel.php",
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
                        $("#txtCat3Id").val(id);

                        var msg='<div class="alert alert-success">';
                        msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();
                        
                        consultaCategoria3($('#cmbCat1').val(),$('#cmbCat2').val(), 0, 1);
                        pintaRegistro();
                                                
                        break;
                }              
            }
        });
    });
    
    $('#tblCat3').on('click', 'tbody tr', function(event) {
        
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
                        cat3Id = $(this).text();
                        break;
                case 5:
                        cat3Nom = $(this).text();
                        break;             
                case 6:
                        cat3GD = $(this).text();
                        break;      
                case 7:
                        cat3GD2 = $(this).text();
                        break;              
               
            }
        });
         
    //asignamos ID a elemento hidden
        $('#txtCat3Id').val(cat3Id);
        $('#txtCat3Nom').val(cat3Nom);
        $('#txtCat3GD').val(cat3GD);
        $('#txtCat3GD2').val(cat3GD2);
        
        var cont=0;
        $("#cmbCat1 option").each(function(){
            if(cat1Id==$(this).val()){
                $("#cmbCat1 option[value="+cat1Id+"]").attr("selected",true);
                $('#cmbCat1').trigger('liszt:updated');
                cargaComboCat2($('#cmbCat1').val());
            }
            cont+=1;
        });
        
        var cont=0;
        $("#cmbCat2 option").each(function(){
            if(cat2Id==$(this).val()){
                $("#cmbCat2 option[value="+cat2Id+"]").attr("selected",true);
                $('#cmbCat2').trigger('liszt:updated');
            }
            cont+=1;
        });
                
        $('#sVerImg').html('<i style="color: green; cursor: pointer;" onclick="verImagen();" class="fa fa-picture-o fa-2x"></i>');
        $('#sVerImg2').html('<i style="color: green; cursor: pointer;" onclick="verImagen2();" class="fa fa-picture-o fa-2x"></i>');

});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var id = $('#txtCat3Id').val();

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
    var id = $('#txtCat3Id').val();
    var parametros = {"id" : id};            
       
    //escondemos mensajería
    $('#warning').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/categoria3EliminaModel.php",
        type:  'post',
        datetype: 'xml',
        async: false,
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (xml){    
            
            $("#modalBody").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            if(codErr==0){
                
                limpiar();
                
                var msg='<div style="text-align:center;" class="alert alert-success">';
                msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                msg+='</div>';

                $("#modalBody").html('<b><span style="color: #000;">Operación exitosa!.</span></b>');
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
               
                $('#warning').html(msg);
                $('#warning').show();
                
                consultaCategoria3(0,0,0,1);
               
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

        $('#txtCat3Id').val('');        
        $('#txtCat3Nom').val('');
        $('#txtCat3GD').val('');
        $('#txtCat3GD2').val('');
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
        $("#cmbCat2 option").each(function(){
            if($(this).val()==opc){
                $("#cmbCat2 option[value="+opc+"]").attr("selected",true);
                $('#cmbCat2').trigger('liszt:updated');
                return false;
            }
        });

        //Borramos sección mensajería
        $('#warning').html('');

        //deshabilitamos botones
        $('#btnAgregar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);

        //grilla
        $('#tblCat3 tr').each(function(){
            $(this).removeClass('highlight'); 
        });

        consultaCategoria3(0,0,0,1);

    });
    
    $('#txtCat3GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg').html('<i style="color: green; cursor: pointer;" onclick="verImagen();" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCat3GD2').keyup(function(){
        if($(this).length>0){
            $('#sVerImg2').html('<i style="color: green; cursor: pointer;" onclick="verImagen2();" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg2').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#cmbCat1').change(function(){
        if($('#cmbCat1').val()!=0){
            cargaComboCat2($('#cmbCat1').val());
        }else{
            $('#divCat2').html('<select id="cmbCat2" data-rel="chosen"></select>');
        }
    });
    $('#cmbCat2').change(function(){
        consultaCategoria3($('#cmbCat1').val(),$('#cmbCat2').val(),0, 1);
    });
    
});

function pintaRegistro(){  

    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblCat3 tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 2:	
                    puID = $(this).text();                    
                    if(puID==$('#txtCat3Id').val()){
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
 
    $('#txtCat3Id').val('');   
    $('#txtCat3Nom').val('');
    $('#txtCat3GD').val('');
    $('#txtCat3GD2').val('');
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
    $("#cmbCat2 option").each(function(){
        if($(this).val()==opc){
            $("#cmbCat2 option[value="+opc+"]").attr("selected",true);
            $('#cmbCat2').trigger('liszt:updated');
            return false;
        }
    });

    //Borramos sección mensajería
    $('#warning').html('');

    //deshabilitamos botones
    $('#btnAgregar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',true);

    //grilla
    $('#tblCat3 tr').each(function(){
        $(this).removeClass('highlight'); 
    });
  
    consultaCategoria3(0,0,0,1);
    
 }
 
 function habilitar(){
     
    $('#txtCat3Nom').prop('disabled',false); 
    $('#txtCat3GD').prop('disabled',false); 
     
    //habilitamos botones
    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
    $('#btnLimpiar').prop('disabled',false);
    
 }
 
  function desHabilitar(){
     
    $('#txtCat3Nom').prop('disabled',true); 
    $('#txtCat3GD').prop('disabled',true); 
     
    //habilitamos botones
    $('#btnGuardar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
    $('#btnLimpiar').prop('disabled',true);

    
 }
 
function consultaCategoria3(cat1,cat2,ultimo,pa){
    
 //alert('cat1, cat2 '+ cat1 +' '+ cat2);   
    
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;
    
    var parametros = { 
            "cat1" : cat1
            ,"cat2" : cat2   
            ,"ultimo" : ultimo   
            ,"pa" : pa 
        };    
       
    //Limpiamos entradas
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/categoria3ConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('consultaCategoria3: categoria3ConsultaModel.php ' + xml);

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
                    $('#cantCat3').val(0);
                    $('#divTblCat3').hide();
                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var cant = xmlDoc.getElementsByTagName('REGISTROS')[0].childNodes[0].nodeValue;
                    var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;

                    $('#warning').html('');
                    $("#espera").hide();
                    $('#tbody').html(datos);
                    $('#cantCat3').val(cant);
                    $('#idPag').html(paginacion);
                    $('#divTblCat3').show();
                    
                    break;
            }
        }
        
    });
    
}

function cargaComboCat2(cat1){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var parametros = { "cat1" : cat1 };   
    
    //CSU CAT1 PARA EL COMBO CATEGORÍA
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/categoria3CsuCat2CmbModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('categoria2CsuCat1CmbModel ' + xml);
            $("#espera").hide();
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
                    $('#cmbCat2').empty();
                    $('#cmbCat2').append($('<option>', {value:0, text:'(SELECCIONE)'}));

                    $xml.find('REGISTRO').each(function () {
                        strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                        var res = strVal.split("|"); 
                        if(res[0].length>0){
                            $('#cmbCat2').append($('<option>', {value:res[0], text:res[1]}));
                        }
                    });
                    $('#cmbCat2').trigger('liszt:updated');
                    
                    break;
                    
            }
        }
    });   
}
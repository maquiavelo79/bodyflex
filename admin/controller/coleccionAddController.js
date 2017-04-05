
jQuery(document).ready(function() {
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
        
    //limpiar();
    
    //CARGA COLECCIONES
    var cat1=0;
    var cat2=0;
    var cat3=0;
    var ultimo=0;
    var pa=1;

    consultaProductos(cat1, cat2, cat3, ultimo, pa, ultimo, pa);
    
    $('#btnEliminar').prop('disabled',true);   
    $('#btnGuardar').prop('disabled',true);   
    
    $('#cmbCol').empty();
    $('#cmbCol').append($('<option>', {value:0, text:'(SELECCIONE)'}));
     
    var parametros = { 
            "ultimo" : 0   
            , "pa"   : 1 
            , "cat1" : 0 
            , "cat2" : 0 
    };    
              
    //CSU CAT1 PARA EL COMBO CATEGORÍA
    $.ajax({
            //data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionAddCsuCat1CmbModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

           //alert('coleccionAddCsuCat1CmbModel ' + xml);

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
    
    //VERIFICA EXISTENCIA DE COLECCIONES INGRESADAS
    verificaExistenciaColeciones(); 
       
    $('#cmbCol').change(function(){

        //alert($('#cmbCol').val());

        $("#cmbCol option").each(function(){
        var id = $('#txtProId').val();
                
            if($(this).attr('selected')){
                //INGRESO
                var val = $(this).attr('value');
                agregarColeccion(id, val);

            }else{
                //ELIMINACION    
                var val = $(this).attr('value');
                eliminarColeccion(id, val);
                
            };
         });
        
    });     
       
    $('#cmbCat1').change(function(){
        
        //alert($(this).val());
        
        if($(this).val()!=0){
            
            var cat1=$('#cmbCat1').val();
            var cat2=0;
            var cat3=0;
            var ultimo=0;
            var pa=1;
            
            cargaComboCat2($(this).val());
            consultaProductos(cat1, cat2, cat3, ultimo, pa, ultimo, pa);
            
        }else{
            limpiar();
        }
    });  
    
    $('#cmbCat2').change(function(){
        if($(this).val()!=0){
            
            var cat1=$('#cmbCat1').val();
            var cat2=$('#cmbCat2').val();
            var cat3=0;
            var ultimo=0;
            var pa=1;
         
            cargaComboCat3(cat2);    
            consultaProductos(cat1, cat2, cat3, ultimo, pa, ultimo, pa);
            
        }else{
            cmb2Limpiar();
        }
    }); 
    
    $('#cmbCat3').change(function(){
        if($(this).val()!=0){
            
            var cat1=$('#cmbCat1').val();
            var cat2=$('#cmbCat2').val();
            var cat3=$(this).val();
            var ultimo=0;
            var pa=1;
            
            consultaProductos(cat1, cat2, cat3, ultimo, pa, ultimo, pa);
        }else{
            cmb3Limpiar();
        }
    }); 
    
    $('#cmbCol').change(function(){
        if($('#codCol').val()==0){
            //ESCENARIO 1: GUARDA UNA NUEVA COLECCIÓN 
            $('#btnEliminar').prop('disabled',true);   
            $('#btnGuardar').prop('disabled',false);   
        }else{
            //ESCENARIO 2.1: GUARDA UNA NUEVA COLECCIÓN 
            //ESCENARIO 2.2: ELIMINA LA COLECCIÓN QUE POSEE
            $('#btnEliminar').prop('disabled',false);   
            $('#btnGuardar').prop('disabled',false);   
        }
    }); 
           
    $('#btnGuardar').click(function(){
             
        var idPrId = $('#idPrId').val();  
        var idCol = $('#cmbCol').val();  
        var idPro = $('#txtProId').val();  

        if(idCol == '') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione colección.</span></b>';
            msg+='</div>';
            
            $('#warningCol').html(msg);
            $('#warningCol').show();
            return false;
            
        }
        
        $('#warning').hide();
     
        //AJAX
            var parametros = { 
                "idPrId" : idPrId
                ,   "idCol" : (idCol!=''?idCol:0)
                , "idPro" : idPro
            };            
       
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionAddAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
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
                        
                        $('#warningCol').html(msg);
                        $('#warningCol').show();
                        break;
                        
                    case '8':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warningCol').html(msg);
                        $('#warningCol').show();
                        break;
                    
                    case '99':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warningCol').html(msg);
                        $('#warningCol').show();
                        break;
                    
                    case '100':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warningCol').html(msg);
                        $('#warningCol').show();
                        break;
                    
                    default:
                        
                        $("#espera").hide();
                        
                        var id = xmlDoc.getElementsByTagName('ID')[0].childNodes[0].nodeValue;
                        $("#idPrId").val(id);

                        var msg='<div class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        msg+='</div>';

                        $('#warningCol').html(msg);
                        $('#warningCol').show();

                        var cat1=$('#cmbCat1').val();
                        var cat2=$('#cmbCat2').val();
                        var cat3=$('#cmbCat3').val();
                        var ultimo=0;
                        var pa=1;
                        
                        consultaProductos(cat1, cat2, cat3, ultimo, pa);
                        pintaRegistro();
                                                
                        break;
                }              
            }
        });
    });
    
    $('#tblPro').on('click', 'tbody tr', function(event) {
    
        var pId, pNom, pMar, pEst, pGD;
        var pNomCat1, pNomCat2, pNomCat3;
        var pCodCat1, pCodCat2, pCodCat3;
        
        if($("#ExistenColecciones").val()==0){
            var msg="<p style='color: black; font-size: 16px; font-family: Helvetica, Georgia, Arial, Garamond;'>Antes de gestionar colecciones y productos debe existir al menos una colección ingresada en el sistema.</p>";
            swal({
                title: "Atención",
                type: "warning",
                confirmButtonColor: "#DD6B55",
                html: msg,
                animation: false
            });
           
            desHabilitarForm();
            return false;
        }
        
        //Pintamos Fila    
        $(this).addClass('highlight').siblings().removeClass('highlight');
        
        //Borramos sección mensajería
        $('#warning').html('');
           
        //Obtenemos valores de campos    
        $(this).children("td").each(function(index2){
            switch (index2){
                case 0:	
                        pId = $(this).text();
                        break;
                case 1:
                        pNom = $(this).text();
                        break;
                case 2:
                        pMar = $(this).text();
                        break;     
                case 3:
                        pEst = $(this).text();
                        break;      
                case 4:
                        pGD = $(this).text();
                        break;        
                case 5:
                        pNomCat1 = $(this).text();
                        break;  
                case 6:
                        pNomCat2 = $(this).text();
                        break;  
                case 7:
                        pNomCat3 = $(this).text();
                        break;   
                    
                case 8:
                        pCodCat1 = $(this).text();
                        break;  
                case 9:
                        pCodCat2 = $(this).text();
                        break;  
                case 10:
                        pCodCat3 = $(this).text();
                        break;       
            }
        });
        
        $('#cmbCat1').empty();
        $('#cmbCat1').append($('<option>', {value: pCodCat1, text: pNomCat1}));
        $('#cmbCat1').trigger('liszt:updated'); 
        
        $('#cmbCat2').empty();
        $('#cmbCat2').append($('<option>', {value: pCodCat2, text: pNomCat2}));
        $('#cmbCat2').trigger('liszt:updated'); 
        
        $('#cmbCat3').empty();
        $('#cmbCat3').append($('<option>', {value: pCodCat3, text: pNomCat3}));
        $('#cmbCat3').trigger('liszt:updated'); 
        
    //asignamos ID a elemento hidden
        $('#txtProId').val(pId);
        $('#txtProNom').val(pNom);
        $('#txtProGD').val(pGD);               
        $('#sVerImg').html('<i style="color: green; cursor: pointer;" onclick="verImagen();" class="fa fa-picture-o fa-2x"></i>');
                     
        cargaColecciones(pId); 
        
        
        
});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var id = $('#codCol').val();
    var nomCol = $('#nomCol').val();

    if(id.length>0){
        strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
            strModal+='<h3>Quitar Producto de Colección</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea <b>Quitar</b> el Producto de la Colección ' + '<b>' + nomCol + '</b>?' + '</p>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
            strModal+='<a style="border-color: silver; background-color: #FFCC00; color: black;" id="btnEliProCol" class="btn btn-primary">Quitar</a>';
        strModal+='</div>';
        $('#myModal').html(strModal);
    };

});

$(document).on("click", "#btnEliProCol", function(event){
   
    //Div de Carga
    var strLoad='<div id="espera2" class="modal-body"></div>';

    //AJAX
    var idCol = $('#codCol').val();
    var idPro = $('#txtProId').val();
    var parametros =    {
                            "idCol" : idCol
                            ,   "idPro" : idPro
                        };            
       
    //escondemos mensajería
    $('#warningCol').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionAddEliminaModel.php",
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
              
                var msg='<div style="text-align:center;" class="alert alert-success">';
                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                msg+='</div>';

                $("#modalBody").html('<b><span style="color: #000;">Operación exitosa!.</span></b>');
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
               
                $('#warningCol').html(msg);
                $('#warningCol').show();
               
                var cat1=$('#cmbCat1').val();
                var cat2=$('#cmbCat2').val();
                var cat3=$('#cmbCat3').val();
                var ultimo=0;
                var pa=1;
                
                consultaProductos(cat1, cat2, cat3, ultimo, pa);
                pintaRegistro();
                
                var opc='0';
                $("#cmbCol option").each(function(){
                    if($(this).val()==opc){
                        $("#cmbCol option[value="+opc+"]").attr("selected",true);
                        $('#cmbCol').trigger('liszt:updated');
                        return false;
                    }
                });
               
            }else{                
                
                var msg='<div style="text-align:center;" class="alert alert-block">';
                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                msg+='</div>';

                $("#modalBody").html('<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>');
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000); 

                $('#warningCol').html(msg);
                $('#warningCol').show();
                
            }                    
        }
    });
    
});

    $('#btnLimpiar').click(function(){

        $('#txtProId').val('');        
        $('#txtProNom').val('');
        $('#txtProGD').val('');
        $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
        
        var opc='0';
        $("#cmbCat1 option").each(function(){
            if($(this).val()==opc){
                $("#cmbCat1 option[value="+opc+"]").attr("selected",true);
                $('#cmbCat1').trigger('liszt:updated');
                return false;
            }
        });
     
        $('#cmbCat1').empty();
        $('#cmbCat1').append($('<option>', {value:0, text:'(SELECCIONE)'}));
        $('#cmbCat1').trigger('liszt:updated');
        
        $('#cmbCat2').empty();
        $('#cmbCat2').append($('<option>', {value:0, text:'(SELECCIONE)'}));
        $('#cmbCat2').trigger('liszt:updated');
        
        $('#cmbCat3').empty();
        $('#cmbCat3').append($('<option>', {value:0, text:'(SELECCIONE)'}));
        $('#cmbCat3').trigger('liszt:updated');
          
        $('#cmbCol').html('');
        $('#cmbCol').trigger('liszt:updated');

        reiniciaCategorias();

        //Borramos sección mensajería
        $('#warning').html('');

        //deshabilitamos botones
        $('#btnGuardar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);

        //grilla
        $('#tblPro tr').each(function(){
            $(this).removeClass('highlight'); 
        });

        $('#warningCol').html('');
        $('#tbody').html('');
        
        var cat1=0; var cat2=0; var cat3=0; var ultimo=0; var pa=1;
        consultaProductos(cat1, cat2, cat3, ultimo, pa, ultimo, pa);
        
    });
    
    $('#txtProId').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(!this.value.length>0){

            $('#txtProId').val('');        
            $('#txtProNom').val('');
            $('#txtProGD').val('');
            $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');

            var opc='0';
            $("#cmbCat1 option").each(function(){
                if($(this).val()==opc){
                    $("#cmbCat1 option[value="+opc+"]").attr("selected",true);
                    $('#cmbCat1').trigger('liszt:updated');
                    return false;
                }
            });

            $('#cmbCat2').empty();
            $('#cmbCat2').append($('<option>', {value:0, text:'(SELECCIONE)'}));
            $('#cmbCat2').trigger('liszt:updated');

            $('#cmbCat3').empty();
            $('#cmbCat3').append($('<option>', {value:0, text:'(SELECCIONE)'}));
            $('#cmbCat3').trigger('liszt:updated');

            $('#cmbCol').html('');
            $('#cmbCol').trigger('liszt:updated');

            reiniciaCategorias();

            //Borramos sección mensajería
            $('#warning').html('');

            //deshabilitamos botones
            $('#btnGuardar').prop('disabled',true);
            $('#btnEliminar').prop('disabled',true);

            //grilla
            $('#tblPro tr').each(function(){
                $(this).removeClass('highlight'); 
            });

            $('#warningCol').html('');
            $('#tbody').html('');

        }        
       
    });
    
    $('#btnBsq').click(function(){

        //OBTENEMOS VALORES
        $('#warning').html('');
        
        if($('#txtProId').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese ID de producto</span></b>';
            msg+='</div>'; 
            $('#warning').html(msg);
            $('#warning').show();
            return false;
        }else{
            $('#warning').html('');
        } 

        var parametros = { 
            "id" : $('#txtProId').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionAddCsuProModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){

                //alert('coleccionAddCsuProModel ' + xml);                

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

                        $('#warning').html(msg);
                        $('#warning').show();
                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();
                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();
                        break;  
                        
                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warning').html(msg);
                        $('#warning').show();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();
                        break;     

                    default:

                        var NOMBRE = xmlDoc.getElementsByTagName('NOMBRE')[0].childNodes[0].nodeValue;
                        var URL = xmlDoc.getElementsByTagName('URL')[0].childNodes[0].nodeValue;
                        
                        $('#txtProNom').val(NOMBRE);
                        $('#txtProGD').val(URL);
                        
                        if(xmlDoc.getElementsByTagName('CAT1_COD')[0].childNodes[0].nodeValue!=0){
                            
                            var CAT1_NOM = xmlDoc.getElementsByTagName('CAT1_NOM')[0].childNodes[0].nodeValue;
                            var CAT1_COD = xmlDoc.getElementsByTagName('CAT1_COD')[0].childNodes[0].nodeValue;
                            
                            $('#cmbCat1').empty();
                            $('#cmbCat1').append($('<option>', {value:CAT1_COD, text:CAT1_NOM}));
                            $("#cmbCat1").prop('selectedIndex',0);
                            $('#cmbCat1').trigger('liszt:updated');
                        }
                        if(xmlDoc.getElementsByTagName('CAT2_COD')[0].childNodes[0].nodeValue!=0){
                            
                            var CAT2_NOM = xmlDoc.getElementsByTagName('CAT2_NOM')[0].childNodes[0].nodeValue;
                            var CAT2_COD = xmlDoc.getElementsByTagName('CAT2_COD')[0].childNodes[0].nodeValue;
                        
                            $('#cmbCat2').empty();
                            $('#cmbCat2').append($('<option>', {value:CAT2_COD, text:CAT2_NOM}));
                            $("#cmbCat2").prop('selectedIndex',0);
                            $('#cmbCat2').trigger('liszt:updated');
                        }
                        
                        //alert('CAT3_COD ' + CAT3_COD);
                        
                        if(xmlDoc.getElementsByTagName('CAT3_COD')[0].childNodes[0].nodeValue!=0){
                            
                            var CAT3_NOM = xmlDoc.getElementsByTagName('CAT3_NOM')[0].childNodes[0].nodeValue;
                            var CAT3_COD = xmlDoc.getElementsByTagName('CAT3_COD')[0].childNodes[0].nodeValue;
                            
                            $('#cmbCat3').empty();
                            $('#cmbCat3').append($('<option>', {value:CAT3_COD, text:CAT3_NOM}));
                            $("#cmbCat3").prop('selectedIndex',0);
                            $('#cmbCat3').trigger('liszt:updated');
                        }
                        
                        $('#sVerImg').html('<i style="color: green; cursor: pointer;" onclick="verImagen();" class="fa fa-picture-o fa-2x"></i>');
                        cargaColecciones($('#txtProId').val()); 
                        
                        break;
                }
            }
        });

    });  
    
});

function pintaRegistro(){  

//alert('pintaRegistro');

    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblPro tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();
                    
                    //alert('puID, txtProId ' + puID +' '+$('#txtProId').val());
                    if(puID==$('#txtProId').val()){
                        sw=1;
                    }
                    break;  
            }
        });
        if(sw==1){
            //alert('entro');
            $(this).addClass('highlight').siblings().removeClass('highlight'); 
        }    
    });
 }
 
 function limpiar(){
 
    //alert('limpiar');
 
        $('#txtProId').val('');        
        $('#txtProNom').val('');
        $('#txtProGD').val('');
        $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
        
        var opc='0';
        $("#cmbCat1 option").each(function(){
            if($(this).val()==opc){
                $("#cmbCat1 option[value="+opc+"]").attr("selected",true);
                $('#cmbCat1').trigger('liszt:updated');
                return false;
            }
        });
        
        $('#cmbCat2').empty();
        $('#cmbCat2').append($('<option>', {value:0, text:'(SELECCIONE)'}));
        $('#cmbCat2').trigger('liszt:updated');
        
        $('#cmbCat3').empty();
        $('#cmbCat3').append($('<option>', {value:0, text:'(SELECCIONE)'}));
        $('#cmbCat3').trigger('liszt:updated');
     
        $('#cmbCol').html('');
        $('#cmbCol').trigger('liszt:updated');

        reiniciaCategorias();

        //Borramos sección mensajería
        $('#warning').html('');

        //deshabilitamos botones
        $('#btnGuardar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);

        //grilla
        $('#tblPro tr').each(function(){
            $(this).removeClass('highlight'); 
        });

        $('#warningCol').html('');
        $('#tbody').html('');
    
 }
 
 function desHabilitarForm(){
 
    //alert('limpiar');
 
        $('#txtProId').prop('disabled', true);
        $('#txtProNom').prop('disabled', true);
        $('#txtProGD').prop('disabled', true);
        $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>').prop('disabled', true);
        $('#btnBsq').hide();
        $('#idPag').hide();
        
        var opc='0';
        $("#cmbCat1 option").each(function(){
            if($(this).val()==opc){
                $("#cmbCat1 option[value="+opc+"]").attr("selected",true);
                $('#cmbCat1').trigger('liszt:updated');
                return false;
            }
        });
        $('#cmbCat1').prop('disabled', true);
        $('#cmbCat1').trigger('liszt:updated');
        
        $('#cmbCat2').empty();
        $('#cmbCat2').append($('<option>', {value:0, text:'(SELECCIONE)'}));
        $('#cmbCat2').prop('disabled', true);
        $('#cmbCat2').trigger('liszt:updated');
        
        $('#cmbCat3').empty();
        $('#cmbCat3').append($('<option>', {value:0, text:'(SELECCIONE)'}));
        $('#cmbCat3').prop('disabled', true);
        $('#cmbCat3').trigger('liszt:updated');
     
        $('#cmbCol').html('');
        $('#cmbCol').prop('disabled', true);
        $('#cmbCol').trigger('liszt:updated');

        //reiniciaCategorias();

        //deshabilitamos botones
        $('#btnGuardar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);

        //grilla
        $('#tblPro tr').each(function(){
            $(this).removeClass('highlight'); 
        });

        //$('#warningCol').html('');
        //$('#tbody').html('');
    
 }
 
 function cmb3Limpiar(){
 
    //alert('cmb3Limpiar');
 
        $('#txtProId').val('');        
        $('#txtProNom').val('');
        $('#txtProGD').val('');
        $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
        
        $('#cmbCol').html('');
        $('#cmbCol').trigger('liszt:updated');

        //Borramos sección mensajería
        $('#warning').html('');

        //deshabilitamos botones
        $('#btnGuardar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);

        //grilla
        $('#tblPro tr').each(function(){
            $(this).removeClass('highlight'); 
        });

        $('#warningCol').html('');
        $('#tbody').html('');
    
 }
 
 function cmb2Limpiar(){
 
    //alert('cmb2Limpiar');
 
        $('#txtProId').val('');        
        $('#txtProNom').val('');
        $('#txtProGD').val('');
        $('#sVerImg').html('<i class="fa fa-picture-o fa-2x"></i>');
        
            $('#cmbCat3').empty();
            $('#cmbCat3').append($('<option>', {value:0, text:'(SELECCIONE)'}));
            $('#cmbCat3').trigger('liszt:updated');
          
        $('#cmbCol').html('');
        $('#cmbCol').trigger('liszt:updated');

        //Borramos sección mensajería
        $('#warning').html('');

        //deshabilitamos botones
        $('#btnGuardar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);

        //grilla
        $('#tblPro tr').each(function(){
            $(this).removeClass('highlight'); 
        });

        $('#warningCol').html('');
        $('#tbody').html('');
    
 }
 
 
function consultaProductos(cat1, cat2, cat3, ultimo, pa){
    
    //alert('consultaProductos ' + cat1+' '+cat2+' '+cat3+' '+ultimo+' '+pa);
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var parametros = { 
                        "cat1" : (cat1!=''?cat1:0)
                        ,   "cat2" : (cat2!=''?cat2:0)
                        ,   "cat3" : (cat3!=''?cat3:0)
                        ,   "ultimo" : ultimo
                        ,   "pa" : pa
                    };   
    
    //CSU CAT1 PARA EL COMBO CATEGORÍA
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionAddConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('consultaProductos: coleccionAddConsultaModel ' + xml);
            
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
                    
                    $('#tbody').html('');
                    $('#warning').html(msg);
                    $('#warning').show();
                    break;

                default:
                    
                    $('#warning').html('');
                    $('#warning').hide();
                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var pagina = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                    $('#tbody').html(datos);
                    $('#idPag').html(pagina);
                    break;
                    
            }
        }
    });   
    
}
 
 
function cargaComboCat3(cat2){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var parametros = { "cat2" : cat2 };   
    
    //CSU CAT1 PARA EL COMBO CATEGORÍA
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionAddCsuCat3CmbModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('coleccionAddCsuCat3CmbModel ' + xml);
            
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
                    //$("#divCat3").html('<select id="cmbCat3" data-rel="chosen"></select>');
                    //$('#divCat3').trigger('liszt:updated');
                    $('#warning').html('');
                    $('#warning').hide();
                    break;

                default:

                    var strVal;
                    $('#cmbCat3').empty();
                    $('#cmbCat3').append($('<option>', {value:0, text:'(SELECCIONE)'}));

                    $xml.find('REGISTRO').each(function () {
                        strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                        var res = strVal.split("|"); 
                        if(res[0].length>0){
                            $('#cmbCat3').append($('<option>', {value:res[0], text:res[1]}));
                        }
                    });
                    $('#cmbCat3').trigger('liszt:updated');
                    
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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionAddCsuCat2CmbModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('coleccionAddCsuCat2CmbModel ' + xml);
            
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
                    //$("#divCat2").html('<select id="cmbCat2" data-rel="chosen"></select>');
                    //$('#divCat2').trigger('liszt:updated');
                    //$("#divCat3").html('<select id="cmbCat3" data-rel="chosen"></select>');
                    //$('#divCat3').trigger('liszt:updated');
                    $('#warning').html('');
                    $('#warning').hide();
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

function cargaColecciones(idPro){
    
    //alert('cargaColeccion')ones;
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var parametros = { "idPro" : idPro };   
    
    //CSU CAT1 PARA EL COMBO CATEGORÍA
    $.ajax({
            data:  parametros,
            //url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionAddCsuProModel2.php",
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionLoadCmbModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('coleccionAddCsuProModel2 ' + xml);
            
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

                    var strVal;
                    $('#cmbCol').empty();
                    //$('#cmbCol').append($('<option>', {value:0, text:'(SELECCIONE)'}));

                    $xml.find('REGISTRO').each(function () {
                        strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                        var res = strVal.split("|"); 
                        if(res[0].length>0){
                            $('#cmbCol').append($('<option>', {value:res[0], text:res[1]}));
                            if(res[2]!=0){
                                $("#cmbCol option[value='" + res[0] + "']").prop('selected', true);
                            }
                        }
                    });
                    $('#cmbCol').trigger('liszt:updated');
                    
                    break;
                    
            }
        }
    });   
}


function verificaExistenciaColeciones(){
    
    //alert('cargaColeccion')ones;
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //CSU CAT1 PARA EL COMBO CATEGORÍA
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionVerificaModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('coleccionVerificaModel ' + xml);
            
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

                default:

                    var existe = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    if(existe==0){
                        
                        $("#espera").hide();
                        var msg='<div style="text-align:center;" class="alert alert-error">';
                        msg+='<b><span style="color: black;">SIN COLECCIONES INGRESADAS</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();
                        $('#ExistenColecciones').val(0);
                        desHabilitarForm();            
                        
                    }else{
                        $('#ExistenColecciones').val(1);
                    }
                    break;
                    
            }
        }
    });   
}


function reiniciaCategorias(){
    
    //alert('reiniciaCategorias');
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
    $('#btnEliminar').prop('disabled',true);   
    $('#btnGuardar').prop('disabled',true);   
    $('#cmbCol').empty();
    $('#cmbCol').append($('<option>', {value:0, text:'(SELECCIONE)'}));
       
    var parametros = { 
            "ultimo" : 0   
            , "pa"   : 1 
            , "cat1" : 0 
            , "cat2" : 0 
    };    
              
    //CSU CAT1 PARA EL COMBO CATEGORÍA
    $.ajax({
            //data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionAddCsuCat1CmbModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
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
}


function agregarColeccion(id, col){
    
   alert('agregarColeccion ' + id+' '+col);
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var parametros = { "id" : id, "col" : col };   
    
    //CSU CAT1 PARA EL COMBO CATEGORÍA
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionAgregaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('coleccionAgregaModel ' + xml);
            
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
                    
            }
        }
    });   
    
}

function eliminarColeccion(id, col){
    
    //alert('eliminarColeccion ' + id+' '+col);
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var parametros = { "id" : id, "col" : col };   
    
    //CSU CAT1 PARA EL COMBO CATEGORÍA
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionEliminaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('coleccionEliminaModel ' + xml);
            
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

            }
        }
    });   
    
}

function consultaColecciones(){

    //OBTENEMOS VALORES
    $('#warning').html('');

    if($('#txtProId').val()==''){
        var msg='<div style="text-align:center;" class="alert alert-error">';
        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
        msg+='<b><span style="color: #000;">Favor ingrese ID de producto</span></b>';
        msg+='</div>'; 
        $('#warning').html(msg);
        $('#warning').show();
        return false;
    }else{
        $('#warning').html('');
    } 

    var parametros = { 
        "id" : $('#txtProId').val()
    };

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/coleccionAddCsuProModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            //alert('coleccionAddCsuProModel ' + xml);                

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

                    $('#warning').html(msg);
                    $('#warning').show();
                    break; 

                case '8':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break; 

                case '98':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;  

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break; 

                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;     

                default:

                    var NOMBRE = xmlDoc.getElementsByTagName('NOMBRE')[0].childNodes[0].nodeValue;
                    var URL = xmlDoc.getElementsByTagName('URL')[0].childNodes[0].nodeValue;

                    $('#txtProNom').val(NOMBRE);
                    $('#txtProGD').val(URL);

                    if(xmlDoc.getElementsByTagName('CAT1_COD')[0].childNodes[0].nodeValue!=0){

                        var CAT1_NOM = xmlDoc.getElementsByTagName('CAT1_NOM')[0].childNodes[0].nodeValue;
                        var CAT1_COD = xmlDoc.getElementsByTagName('CAT1_COD')[0].childNodes[0].nodeValue;

                        $('#cmbCat1').empty();
                        $('#cmbCat1').append($('<option>', {value:CAT1_COD, text:CAT1_NOM}));
                        $("#cmbCat1").prop('selectedIndex',0);
                        $('#cmbCat1').trigger('liszt:updated');
                    }
                    if(xmlDoc.getElementsByTagName('CAT2_COD')[0].childNodes[0].nodeValue!=0){

                        var CAT2_NOM = xmlDoc.getElementsByTagName('CAT2_NOM')[0].childNodes[0].nodeValue;
                        var CAT2_COD = xmlDoc.getElementsByTagName('CAT2_COD')[0].childNodes[0].nodeValue;

                        $('#cmbCat2').empty();
                        $('#cmbCat2').append($('<option>', {value:CAT2_COD, text:CAT2_NOM}));
                        $("#cmbCat2").prop('selectedIndex',0);
                        $('#cmbCat2').trigger('liszt:updated');
                    }

                    //alert('CAT3_COD ' + CAT3_COD);

                    if(xmlDoc.getElementsByTagName('CAT3_COD')[0].childNodes[0].nodeValue!=0){

                        var CAT3_NOM = xmlDoc.getElementsByTagName('CAT3_NOM')[0].childNodes[0].nodeValue;
                        var CAT3_COD = xmlDoc.getElementsByTagName('CAT3_COD')[0].childNodes[0].nodeValue;

                        $('#cmbCat3').empty();
                        $('#cmbCat3').append($('<option>', {value:CAT3_COD, text:CAT3_NOM}));
                        $("#cmbCat3").prop('selectedIndex',0);
                        $('#cmbCat3').trigger('liszt:updated');
                    }
                    
                    $('#sVerImg').html('<i style="color: green; cursor: pointer;" onclick="verImagen();" class="fa fa-picture-o fa-2x"></i>');
                    cargaColecciones($('#txtProId').val()); 
                    
                    break;
            }
        }
    });

}
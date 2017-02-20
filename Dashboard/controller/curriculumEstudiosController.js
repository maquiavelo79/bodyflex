
jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        //var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

    $('#btnEliminar').prop('disabled',true); 
                       
        //AJAX
        var parametros = { "rut" : $('#rut').val() };            
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumEstudiosConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){
                
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
                        msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 13px; color: blue;">INGRESA TUS ESTUDIOS!</sapn></span></b>';
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';
                        
                        $('#tbody').html('');
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        $("#botonera").show();
                        setTimeout(function() {
                            $('#conWarning').hide();
                        }
                        , 5000); 
                        break;
                    
                    default:
                       
                        $("#botonera").show();
                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Eliminación exitosa!.</span></b>';
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';

                        setTimeout(function() {$('#conWarning').hide();}, 2000); 
                        consultaEstudios();
                        break;
                        
                }
            }
        });
    
 $('#btnGuardar').click(function(){
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#conWarning').hide();
          
       //Limpiamos entradas       
        var rut = $('#rut').val();      
        var id = $('#txtEstId').val();      
        var nom = $('#txtEstNom').val();      
        var tip = $('#txtEstTip').val();      
        var ins = $('#txtEstIns').val();
        var con = $('#cmbEstCon').val(); 
        var pos = $('#txtPos').val(); 
        var fec = $('#date').val(); 
        var dur = $('#cmbDur').val(); 
        //var des = $('#txtEstDes').val(); 
        
        //alert('rut ' + rut + ' ' + 'id ' + id + ' ' + 'nom  ' + nom + ' ' + 'tip ' + tip + ' ' + 'ins ' + ins + ' ' + 'con ' + con + ' ' + 'pos ' + pos + ' ' + 'fec ' + fec + ' ' + 'dur ' + dur);
        //return false;
                       
        if(nom == '') {
                        
            $('#txtEstTip').removeClass('error');   
            $('#txtEstIns').removeClass('error');
            $('#cmbEstCon').removeClass('error'); 
                       
            var msg='<div style="text-align: center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue nombre profesión.</span></b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';

            $('#txtEstNom').addClass('error');
            $('#conWarning').html(msg);
            $('#conWarning').show();
            setTimeout(function() {
                $('#conWarning').hide();
            }
            , 2000); 
            return false;
            
        }
        if(tip == '(SELECCIONE)') {
            
            $('#txtEstNom').removeClass('error');     
            $('#txtEstIns').removeClass('error');   
            $('#cmbEstCon').removeClass('error');  
                              
            var msg='<div style="text-align: center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione tipo.</span></b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#txtEstTip').addClass('error');
            $('#conWarning').html(msg);
            $('#conWarning').show();
            setTimeout(function() {
                $('#conWarning').hide();
            }
            , 2000); 
            return false;
            
        }
        if(ins == '') {
            
            $('#txtEstNom').removeClass('error');    
            $('#txtEstTip').removeClass('error');     
            $('#cmbEstCon').removeClass('error');   
                        
            var msg='<div style="text-align: center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese institución.</span></b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#txtEstIns').addClass('error');
            $('#conWarning').html(msg);
            $('#conWarning').show();
            setTimeout(function() {
                $('#conWarning').hide();
            }
            , 2000); 
            
            return false;
            
        }
        if(con == '(SELECCIONE)'){
            
            $('#txtEstNom').removeClass('error');
            $('#txtEstTip').removeClass('error');
            $('#txtEstIns').removeClass('error');
                        
            var msg='<div style="text-align: center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese condición.</span></b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#cmbEstCon').addClass('error');
            $('#conWarning').html(msg);
            $('#conWarning').show();
            setTimeout(function() {
                $('#conWarning').hide();
            }
            , 2000); 
            return false;
            
        }
        
//        if(des == '') {
//                        
//            $('#txtEstTip').removeClass('error');   
//            $('#txtEstIns').removeClass('error');
//            $('#cmbEstCon').removeClass('error'); 
//                       
//            var msg='<div style="text-align: center;" class="alert alert-block">';
//            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
//            msg+='<b><span style="color: #000;">Favor agregue breve descripción de la formación.</span></b>';
//            msg+='<div id="esperaWarning"></div>';
//            msg+='</div>';
//
//            $('#txtEstNom').addClass('error');
//            $('#conWarning').html(msg);
//            $('#conWarning').show();
//            setTimeout(function() {
//                $('#conWarning').hide();
//            }
//            , 2000); 
//            return false;
//            
//        }
        
        if(pos == '') {
            pos=1;
        }
        
        if(fec == '') {
            
            $('#txtEstNom').removeClass('error');
            $('#txtEstTip').removeClass('error');
            $('#txtEstIns').removeClass('error');
            $('#cmbEstCon').removeClass('error');
            $('#cmbDur').removeClass('error');
         
            var msg='<div style="text-align: center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor establezca fecha.</span></b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#date').addClass('error');
            $('#conWarning').html(msg);
            $('#conWarning').show();
            setTimeout(function() {
                $('#conWarning').hide();
            }
            , 2000); 
            return false;
            
        }
        
        if(validarFormatoFecha($('#date').val())){
            if(!existeFecha($('#date').val())){
                //alert("La fecha introducida no existe.");
                $('#txtEstNom').removeClass('error');
                $('#txtEstTip').removeClass('error');
                $('#txtEstIns').removeClass('error');
                $('#cmbEstCon').removeClass('error');
                $('#cmbDur').removeClass('error');

                var msg='<div style="text-align: center;" class="alert alert-block">';
                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                msg+='<b><span style="color: #000;">Favor establezca fecha válida.</span></b>';
                msg+='<div id="esperaWarning"></div>';
                msg+='</div>';

                $('#date').addClass('error');
                $('#conWarning').html(msg);
                $('#conWarning').show();
                setTimeout(function() {
                    $('#conWarning').hide();
                }
                , 2000); 
                return false;
            }
        }else{
            //alert("El formato de la fecha es incorrecto.");
            $('#txtEstNom').removeClass('error');
            $('#txtEstTip').removeClass('error');
            $('#txtEstIns').removeClass('error');
            $('#cmbEstCon').removeClass('error');
            $('#cmbDur').removeClass('error');

            var msg='<div style="text-align: center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<strong>El formato de la fecha es incorrecto, debe ser del tipo dd/mm/yyyy.<strong>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#date').addClass('error');
            $('#conWarning').html(msg);
            $('#conWarning').show();
            setTimeout(function() {
                $('#conWarning').hide();
            }
            , 2000); 
            return false;
            
        }
        
        if(dur == '(SELECCIONE)') {
            
            $('#txtEstNom').removeClass('error');
            $('#txtEstTip').removeClass('error');
            $('#txtEstIns').removeClass('error');
            $('#cmbEstCon').removeClass('error');
            $('#date').removeClass('error');
         
            var msg='<div style="text-align: center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor establezca duración.</span></b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#cmbDur').addClass('error');
            $('#conWarning').html(msg);
            $('#conWarning').show();
            setTimeout(function() {
                $('#conWarning').hide();
            }
            , 2000); 
            return false;
            
        }
                       
        $('#txtEstNom').removeClass('error');
        $('#txtEstTip').removeClass('error');
        $('#txtEstIns').removeClass('error');
        $('#cmbEstCon').removeClass('error');
        $('#cmbDur').removeClass('error');
        $('#date').removeClass('error');
        $('#cmbDur').removeClass('error');
        $('#conWarning').hide();
                              
        //AJAX
            var parametros = {
                            "rut" : rut
                            , "id" : id
                            , "nom": nom
                            , "tip": tip
                            , "ins": ins
                            , "con": con
                            , "pos": pos
                            , "fec": fec
                            , "dur": dur
                            //, "des": des
            };            

            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumEstudiosAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#espera").show();
                    $("#botonera").hide();
                    
            },
            success:  function (xml){     
                
                $("#espera").hide();
                $("#botonera").show();
                
                //alert('curriculumEstudiosAgregaModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#espera").hide();
                        $("#botonera").show();

                        deshabilitar();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        break;
                        
                    case '8':
                        
                        $("#espera").hide();
                        $("#botonera").show();
                        
                        desHabilitar();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        break;
                    
                    case '99':
                        
                        $("#espera").hide();
                        $("#botonera").show();
                        
                        desHabilitar();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        break;
                     
                    case '100':
                        
                        $("#espera").hide();
                        $("#botonera").show();
                        
                        desHabilitar();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        break;
                        
                    default:
                                               
                       var identificador = xmlDoc.getElementsByTagName('IDENTIFICADOR')[0].childNodes[0].nodeValue;
                       
                        $("#espera").hide();
                        $("#botonera").show();
                        $("#txtEstId").val(identificador);
                       
                        //alert('identificador ' + identificador);
                        
                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            if (codErr==1){
                                msg+='<b><span style="color: #000;">Ingreso exitoso!.</span></b>';
                            }else{
                                msg+='<b><span style="color: #000;">Modificación exitosa!.</span></b>';
                            }    
                            msg+='<div id="esperaWarning"></div>';
                            msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        setTimeout(function() {
                            $('#conWarning').hide();
                        }
                        , 2000); 
                       
                        habilitar();
                        consultaEstudios();
                        pintaEstudio();
                        break;
                        
                }              
            }
        });
        
        
    });
   
    
$('#tblEstudios').on('click', 'tbody tr', function(event){
        
    $('#conWarning').html('');    
        
    habilitar();
        
    //Obtenemos valores de campos    
        $(this).children("td").each(function(index2){
            switch (index2){
                case 0:	
                        esID = $(this).text();
                        break;
                case 1:
                        esNom = $(this).text();
                        break;
                case 2:
                        esTip = $(this).text();
                        break;
                case 3:
                        esIns = $(this).text();
                        break;
                case 4:
                        esCon = $(this).text();
                        break;
                case 5:
                        esFec= $(this).text(); 
                        break;
                case 6:
                        esDur = $(this).text();
                        break; 
                case 7:
                        esPos = $(this).text();
                        break; 
                case 8:
                        esDes = $(this).text();
                        break;         
            }
        });
    
    //alert(esID + ' ' + esNom + ' ' + esTip + ' ' + esIns + ' ' + esCon + ' ' + esPos + ' ' + esFec + ' ' + esDur);    
    //return false;
    
    //asignamos ID a elemento hidden
        $('#txtEstId').val(esID);
    
    //Asignamos valores
        $('#txtEstNom').val(esNom);
        $('#txtEstTip').val(esTip);
        $('#txtEstIns').val(esIns);
        $('#cmbEstCon').val(esCon);
        $('#txtPos').val(esPos);       
        $('#date').val(esFec);
        $('#cmbDur').val(esDur);
        
        //$('#txtEstDes').cleditor()[0].focus();
        //$('#txtEstDes').cleditor()[0].clear();
        //$('#txtEstDes').cleditor()[0].execCommand('inserthtml',esDes); 
    
    //Pintamos Fila    
        $(this).addClass('highlight').siblings().removeClass('highlight');
   
});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var nom = $('#txtEstNom').val();
            
        strModal+='<div class="modal-header">';
            strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
            strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar estudio</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar el estudio <b>' + nom + '</b>?</p><br>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
            strModal+='<a id="btnEliEst" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-minus-circle"></i>&nbsp;Eliminar</a>';
        strModal+='</div>';
    
    $('#myModal').html(strModal);
   
});

$(document).on("click", "#btnEliEst", function(event){
    
    var rut = $('#rut').val();
    var esId = $('#txtEstId').val();
   
    //Div de Carga
    var strLoad='<div id="espera3" class="modal-body"></div>';

    //AJAX
    var parametros = {"esId" : esId};            
       
    //escondemos mensajería
    $('#conWarning').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumEstudiosEliminaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (xml){     
            
            //alert('curriculumEstudiosEliminaModel ' + xml);
            
            $("#modalBody").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            if(codErr==0){
                
                var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                $("#modalBody").html(msg);
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000);
                                
                var parametros = { "rut" : rut };            
                $.ajax({
                        data:  parametros,
                        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumEstudiosConsultaModel.php",
                        type:  'post',
                        datetype: 'xml',
                        async: true,
                    beforeSend: function(){
                        $("#espera").show();
                        $("#botonera").hide();
                    },
                    success:  function (xml){

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

                                habilitar();

                                break; 

                            case '100':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarning').html(msg);
                                $('#conWarning').show();

                                $("#botonera").show();
                                $('#tbody').html('');

                                habilitar();

                                break;     

                            case '98':
                                              
                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 13px; color: blue;">INGRESA TUS ESTUDIOS!</sapn></span></b>';
                                msg+='<div id="esperaWarning"></div>';
                                msg+='</div>';

                                $('#tbody').html('');
                                $('#conWarning').html(msg);
                                $('#conWarning').show();
                                $("#botonera").show();
                                setTimeout(function() {
                                    $('#conWarning').hide();
                                }
                                , 5000); 
                                break;

                            default:
                                
                                $("#botonera").show();
                                consultaEstudios();
                                habilitar();
                                limpiar();
                                break;
                        }
                    }
                });
                
                
                
            }else{

                var msg='<div style="text-align:center;" class="alert alert-block">';
                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                msg+='</div>';
                var msg2='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';

                $("#modalBody").html(msg2);
                $("#modalBody").show();
                setTimeout(function() {$('#myModal').modal('hide');}, 1000);
                
                $('#conWarning').html(msg);
                $('#conWarning').show();
                
            }                    
        }
    });
    
});

$('#btnLimpiar').click(function(){

        //limpiamos entradas  
        $('#txtEstId').val('');
        $('#txtEstNom').val('');      
        $('#txtEstTip').val('');      
        $('#txtEstIns').val('');
        $('#cmbEstCon').val('');
        $('#date').val('');
        $('#cmbDur').val('');

        //$('#txtEstDes').cleditor()[0].focus();
        //$('#txtEstDes').cleditor()[0].clear();

    //habilitamos boton modificar, eliminar y cancelar
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#conWarning').html('');
    
        //grilla
        $('#tblEstudios tr').each(function(){            
            $(this).removeClass('highlight'); 
        });

});

    $('#txtPos').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });

});

function validarFormatoFecha(campo) {
      var RegExPattern = /^\d{1,2}\-\d{1,2}\-\d{2,4}$/;
      if ((campo.match(RegExPattern)) && (campo!='')) {
        return true;
      } else {
        return false;
      }
}

function existeFecha(fecha){
      var fechaf = fecha.split("/");
      var day = fechaf[0];
      var month = fechaf[1];
      var year = fechaf[2];
      var date = new Date(year,month,'0');
      if((day-0)>(date.getDate()-0)){
            return false;
      }
      return true;
}

function desHabilitar(){
    //deshabilitamos entradas    
    $('#txtEstNom').prop('disabled',true);      
    $('#txtEstTip').prop('disabled',true);      
    $('#txtEstIns').prop('disabled',true);
    $('#cmbEstCon').prop('disabled',true);
    $('#date').prop('disabled',true);
    $('#cmbDur').prop('disabled',true);
    $('#txtPos').prop('disabled',true);

    //deshabilitamos botones
    $('#btnGuardar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
    $('#btnLimpiar').prop('disabled',true);
//    $('#btnProbar').prop('disabled',true);
    
}

function habilitar(){
    //habilitamos entradas    
    $('#txtEstNom').prop('disabled',false);      
    $('#txtEstTip').prop('disabled',false);      
    $('#txtEstIns').prop('disabled',false);
    $('#cmbEstCon').prop('disabled',false);
    $('#date').prop('disabled',false);
    $('#cmbDur').prop('disabled',false);
    $('#txtPos').prop('disabled',false);

    //deshabilitamos botones
    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
    $('#btnLimpiar').prop('disabled',false);
//    $('#btnProbar').prop('disabled',false);
}

function limpiar(){
    //limpiamos entradas  
        $('#txtEstId').val('');
        $('#txtEstNom').val('');      
        $('#txtEstTip').val('');      
        $('#txtEstIns').val('');
        $('#txtPos').val('');
        $('#cmbEstCon').val('');
        $('#date').val('');
        $('#cmbDur').val('');

        //$('#txtEstDes').cleditor()[0].focus();
        //$('#txtEstDes').cleditor()[0].clear();

    //habilitamos boton modificar, eliminar y cancelar
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);
//        $('#btnProbar').prop('disabled',true);    

        $('#conWarning').html('');
    
        //grilla
        $('#tblEstudios tr').each(function(){            
            $(this).removeClass('highlight'); 
        });
    
}

function pintaEstudio(){  

    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblEstudios tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#txtEstId').val()){
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
 
 
 function consultaEstudios(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var parametros = { "rut" : $('#rut').val() };            

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumEstudiosConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: false, //DEBE SER FALSO
        beforeSend: function(){
            $("#espera").show();
            $("#botonera").hide();
        },
        success:  function (xml){

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
                    msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 13px; color: blue;">INGRESA TUS ESTUDIOS!</sapn></span></b>';
                    msg+='<div id="esperaWarning"></div>';
                    msg+='</div>';

                    $('#tbody').html('');
                    $('#conWarning').html(msg);
                    $('#conWarning').show();
                    $("#botonera").show();
                    setTimeout(function() {
                        $('#conWarning').hide();
                    }
                    , 5000); 
                    break;

                default:

                    $("#botonera").show();
                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    $('#tbody').html(datos);                       
                    break;

            }
        }
    });
    
 }
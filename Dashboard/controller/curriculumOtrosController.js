
jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

        //Limpiamos entradas
        $('#txtOtId').attr('value','');      
        $('#txtOtNom').attr('value','');      
        $('#date').attr('value','');      

        $('#txtOtDes').attr('value','');
        $('#cmbOtTip').attr('value',0);
 
        //TRATAMIENTO DE BOTONES
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);
                       
        //AJAX
        var parametros = {"rut" : $('#rut').val()};            
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumOtrosConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
           
                        desHabilitar();             
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#conWarning').html(msg);
                        $('#conWarning').show();               
                        break;     
                        
                    case '8':
                   
                        desHabilitar();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();             
                        break;     
                    
                    case '99':
                       
                        desHabilitar();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#conWarning').html(msg);
                        $('#conWarning').show();          
                        break;     
                        
                    case '100':
                       
                        desHabilitar();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                                                
                        break;     
                    
                    case '98':
                        
                        //habilitar();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 13px; color: blue;">FAVOR AGREGA OTRAS PARTICIPACIONES!</sapn></span></b>';
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        setTimeout(function() {
                            $('#conWarning').hide();
                        }
                        , 5000);  
                        break;     
                        
                    default:
                        
                        var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $('#tbody').html(dato);
                        //habilitar();
                        break;
                        
                }
            }
        });
    
 $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#conWarning').hide();
            
       //OBTENEMOS VALORES
        var rut = $('#rut').val();             
        var id = $('#txtOtId').val();
        var nom = $('#txtOtNom').val();
        var fec = $('#date').val();
        var pos = $('#txtPos').val();
        var des = $('#txtOtDes').val();
        var tip = $('#cmbOtTip').val();
           
        //alert('rut ' + rut + 'id ' + id + 'nom ' + nom + 'pos ' + pos + 'des ' + des + 'tip ' + tip);
           
        if(tip == '') {

            $('#txtOtNom').removeClass('error'); 
            $('#date').removeClass('error'); 
            $('#txtOtDes').removeClass('error'); 
           
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor seleccione tipo.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#cmbOtTip').addClass('error');
            return false;
            
        }  
        if(nom == '') {
                        
            $('#date').removeClass('error');   
            $('#txtOtDes').removeClass('error');
            $('#cmbOtTip').removeClass('error');
           
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue nombre.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtOtNom').addClass('error');
            return false;
            
        }
        if(pos == 0) {
            pos=1;
        }
        
        if(des == '') {
            
            $('#txtOtNom').removeClass('error');
            $('#date').removeClass('error');
            $('#cmbOtTip').removeClass('error');            
                    
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue breve descripción del curso.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#txtOtDes').addClass('error');
            return false;
            
        }        
        if(fec == '') {
            
            $('#txtOtNom').removeClass('error');      
            $('#txtOtDes').removeClass('error');
            $('#cmbOtTip').removeClass('error');

            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor agregue fecha.</span></b>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#date').addClass('error');
            return false;
            
        }
        
        if(validarFormatoFecha($('#date').val())){
            if(!existeFecha($('#date').val())){
                $('#txtOtNom').removeClass('error');    
                $('#date').removeClass('error');     
                $('#txtOtDes').removeClass('error');

                var msg='<div style="text-align:center;" class="alert alert-block">';
                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                msg+='<b><span style="color: #000;">Error: Fecha invalida.</span></b>';
                msg+='</div>';

                $('#conWarning').html(msg);
                $('#conWarning').show();
                $('#date').addClass('error');
                return false;
            }
        }else{
            $('#txtOtNom').removeClass('error');    
            $('#date').removeClass('error');     
            $('#txtOtDes').removeClass('error');

            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<strong>El formato de la fecha es incorrecto, debe ser del tipo dd/mm/yyyy.<strong>';
            msg+='</div>';
            
            $('#conWarning').html(msg);
            $('#conWarning').show();
            $('#date').addClass('error');
            return false;
            
        }
              
        $('#txtOtNom').removeClass('error');
        $('#date').removeClass('error');

        $('#txtOtDes').removeClass('error');        
        $('#conWarning').hide();

        fec = fec.replace(/-/g,'/');

        //AJAX
            var parametros = {
                            "rut" : rut,
                            "id" : id,
                            "nom": nom,
                            "fec": fec,
                            "pos": pos,
                            "des": des,
                            "tip": tip
            };            

            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumOtrosAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#espera").show();
            },
            success:  function (xml){     
                
                //alert(xml);
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break;
                        
                    case '8':
                       
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break;
                        
                    case '99':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break;    
                     
                    case '100':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break;    
                    
                    default:
                        
                        var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $("#txtOtId").val(dato);
                        
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
                        consultaOtras();
                        pintaOtros();
                        break;
                        
                }              
            }
        });
        
        
    });
   
    
$('#tblOtros').on('click', 'tbody tr', function(event){
        
    habilitar();

    //Obtenemos valores de campos    
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                        otID = $(this).text();
                        break;
                case 1:
                        otNom = $(this).text();
                        break;
                case 2:
                        otTip = $(this).text();
                        break;
                case 3:
                        otFec = $(this).text();
                        break;
                case 4:
                        otPos = $(this).text();
                        break;
                case 5:
                        otDesc = $(this).text();
                        break;
            }
        });
    
    //asignamos valores a elementos
        $('#txtOtId').val(otID);
        $('#txtOtNom').val(otNom);
        $('#txtPos').val(otPos);
        $('#date').val(otFec);
        $('#cmbOtTip').val(otTip);
                     
        $('#txtOtDes').cleditor()[0].focus();
        $('#txtOtDes').cleditor()[0].clear();
        $('#txtOtDes').cleditor()[0].execCommand('inserthtml',otDesc); 
        
    //Pintamos Fila    
        $(this).addClass('highlight').siblings().removeClass('highlight');
   
});

$('#btnEliminar').click(function(){
    
    var strModal='';
    var nom = $('#txtOtNom').val();
            
        strModal+='<div class="modal-header">';
            strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
            strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar Otro</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>¿Desea eliminar registro <b>' + nom + '</b>?</p><br>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
            strModal+='<a id="btnEliOt" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-minus-circle"></i>&nbsp;Eliminar</a>';
        strModal+='</div>';
    
    $('#myModal').html(strModal);
   
});

$(document).on("click", "#btnEliOt", function(event){
    
    var rut = $('#rut').val();
    var otId = $('#txtOtId').val();
   
    //Div de Carga
    var strLoad='<div id="espera3" class="modal-body"></div>';

    //AJAX
    var parametros = {"otId" : otId};            
       
    //escondemos mensajería
    $('#conWarning').hide();
       
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumOtrosEliminaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#modalBody").html(strLoad);
        },
        success:  function (xml){     

            //alert('curriculumOtrosEliminaModel ' + xml);
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            if(codErr==0){
                
                var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';               
                $("#modalBody").html(msg);
                $("#modalBody").show();    
                setTimeout(function() {$('#myModal').modal('hide');}, 1000);
                                
                var parametros2 = {"rut" : rut };            
                $.ajax({
                        data:  parametros2,
                        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumOtrosConsultaModel.php",
                        type:  'post',
                        datetype: 'xml',
                        async: true,
                    beforeSend: function(){
                        $("#espera").show();
                    },
                    success:  function (xml){

                        //alert('curriculumOtrosConsultaModel ' + xml);

                        $("#espera").hide();
                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                        switch(codErr){
                            case '9':

                                desHabilitar();
                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';
                                $('#conWarning').html(msg);
                                $('#conWarning').show();
                                break;     

                            case '8':

                                desHabilitar();
                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';
                                $('#conWarning').html(msg);
                                $('#conWarning').show();
                                break;     

                            case '99':

                                desHabilitar();
                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';
                                $('#conWarning').html(msg);
                                $('#conWarning').show();
                                break;     

                            case '98':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 13px; color: blue;">FAVOR AGREGA OTRAS PARTICIPACIONES!</sapn></span></b>';
                                msg+='<div id="esperaWarning"></div>';
                                msg+='</div>';
                                $('#tbody').html('');
                                setTimeout(function() {
                                    $('#conWarning').hide();
                                }
                                , 5000); 
                                habilitar();
                                break;     

                            default:

                                var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                $('#tbody').html(dato);
                                habilitar();
                                break;
                                
                        }
                    }
                });
            }else{

                var msg='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
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

    //limpiamos entradas  
    $('#txtOtId').val('');
    $('#txtOtNom').val('');
    $('#cmbOtTip').val(0);
    $('#date').val('');
    $('#txtOtDes').val(''); 

    //habilitamos boton modificar, eliminar y cancelar
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);
//        $('#btnProbar').prop('disabled',true);    

        $('#txtOtDes').cleditor()[0].focus();
        $('#txtOtDes').cleditor()[0].clear();
        $('#txtOtDes').cleditor()[0].execCommand('inserthtml','&nbsp;');     

    $('#conWarning').html('');
    
    //grilla
    $('#tblOtros tr').each(function(){            
        $(this).removeClass('highlight'); 
    });

});

    $('#txtPos').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
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

});

function desHabilitar(){
    $('#txtOtNom').prop('disabled',true);   
    $('#date').prop('disabled',true);   
    $('#txtOtFli').prop('disabled',true); 
    $('#txtOtDes').prop('disabled',true); 
    $('#txtPos').prop('disabled',true); 
    $('#cmbOtTip').prop('disabled',true); 
    $('#txtOtDes').prop('disabled',true);

    //deshabilitamos botones
    $('#btnGuardar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
    $('#btnLimpiar').prop('disabled',true);
//    $('#btnProbar').prop('disabled',true);
}

function habilitar(){
    $('#txtOtNom').prop('disabled',false);   
    $('#date').prop('disabled',false);   
    $('#txtOtFli').prop('disabled',false); 
    $('#txtOtDes').prop('disabled',false); 
    $('#cmbOtTip').prop('disabled',false); 
    $('#txtPos').prop('disabled',false);
    $('#txtOtDes').prop('disabled',false);

    //deshabilitamos botones
    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
    $('#btnLimpiar').prop('disabled',false);
//    $('#btnProbar').prop('disabled',false);
    
}

function limpiar(){
    //limpiamos entradas  
    $('#txtOtId').val('');
    $('#txtOtNom').val('');
    $('#cmbOtTip').val(0);
    $('#date').val('');
    $('#txtOtFli').val('');
    $('#txtOtDes').val(''); 
    $('#txtPos').val(''); 

    $('#txtOtDes').cleditor()[0].focus();
    $('#txtOtDes').cleditor()[0].clear();

//habilitamos boton modificar, eliminar y cancelar
    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',true);
    $('#btnLimpiar').prop('disabled',true);
//    $('#btnProbar').prop('disabled',true);    

    $('#conWarning').html('');

    //grilla
    $('#tblOtros tr').each(function(){            
        $(this).removeClass('highlight'); 
    });
   

}

function consultaOtras(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var parametros = {"rut" : $('#rut').val()};  

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/curriculumOtrosConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: false, //DEBE SER SINCRONO
        success:  function (xml){

            $("#espera").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    desHabilitar();             
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#conWarning').html(msg);
                    $('#conWarning').show();               
                    break;     

                case '8':

                    desHabilitar();
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';                        
                    $('#conWarning').html(msg);
                    $('#conWarning').show();             
                    break;     

                case '99':

                    desHabilitar();
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#conWarning').html(msg);
                    $('#conWarning').show();          
                    break;     

                case '100':

                    desHabilitar();
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    break;     

                case '98':

                    habilitar();
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 13px; color: blue;">FAVOR AGREGA OTRAS PARTICIPACIONES!</sapn></span></b>';
                    msg+='<div id="esperaWarning"></div>';
                    msg+='</div>';
                    setTimeout(function() {
                        $('#conWarning').hide();
                    }
                    , 5000); 
                    break;     

                default:

                    var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    $('#tbody').html(dato);
                    habilitar();
                    break;

            }
        }
    });
    
}

function pintaOtros(){  

    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblOtros tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#txtOtId').val()){
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
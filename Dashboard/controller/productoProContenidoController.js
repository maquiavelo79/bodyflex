
jQuery(document).ready(function() {

var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        //var rut=13661574;
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
        
    //desHabilita_contenido();    
      
    $('#a-table-con').on('click', 'tbody tr', function(event){

        var conID, conTip, conURL;

        if($('#txtProEst').val()=='INGRESADO'){
            habilita_contenido();
        }
        
        //asignamos valores a elementos
        $('#txtIdConPro').attr('value','');
        $('#txtIdDrivePro').attr('value','');
        $("#cmbTipConPro").prop('selectedIndex',0);
        $('#cmbTipConPro').trigger('liszt:updated');

        //restablecemos formato
        $('table tr').css('background','white');
        $('table tr').css('color','black');

        //aplicamos formato
        $(this).css('background','gray');
        $(this).css('color','white');

        //Obtenemos valores de campos    
        $(this).children("td").each(function(index){
            switch(index){
                case 0:	
                    conID = $(this).text();
                    break;
                case 1:
                    conTip = $(this).text();
                    break;
                case 2:
                    conURL = $(this).text();
                    break;
            }
        });
   
        //asignamos valores a elementos
        $('#txtIdConPro').attr('value',conID);
        $('#txtIdDrivePro').attr('value',conURL);
        $('#idDrive').val($('#txtIdDrivePro').val());

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

        //alert('conTip ' + conTip);

        switch(conTip){
            case "URL_IMAGEN":
                var botones="<i data-toggle='tooltip' title='ver imagen!' onclick='getImagen("  +'"'+ conURL + '"' + ");' style='color: green; margin-top: 100px; cursor: pointer;' class='fa fa-picture-o fa-4x'></i>";        
                botones+='<i class="fa fa-info-circle fa-4x" style="margin-top: 40px; color: green; cursor: pointer;" onclick="getInformacion();"></i>';
                break;
            case "YOUTUBE":    
                var botones='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';        
                botones+='<i class="fa fa-info-circle fa-4x" style="margin-top: 40px; color: green; cursor: pointer;" onclick="getInformacion();"></i>';
                break;
            case "ID_GOOGLE_DRIVE":
                var botones="<i data-toggle='tooltip' title='ver imagen!' onclick='getImagen("  +'"'+ conURL + '"' + ");' style='color: green; margin-top: 100px; cursor: pointer;' class='fa fa-picture-o fa-4x'></i>";        
                botones+='<i class="fa fa-info-circle fa-4x" style="margin-top: 40px; color: green; cursor: pointer;" onclick="getInformacion();"></i>';
                break;    
        }
        $('#right').html(botones);
        
    });
        
    $(document).on("click", "#btnLimpiarConPro", function(event){

        //alert('btnLimpiarConPro');

        $('#a-table-con tr').each(function(){
            $(this).css('background','white');
            $(this).css('color','black');
        });    
        
        var strDiv='<div class="controls">';
            strDiv+='<div class="input-append">';
                strDiv+='<input placeholder="[Seleccione el tipo de contenido a agregar]" id="txtIdDrivePro" size="16" type="text" maxlength="500" >';
            strDiv+='</div>';
        strDiv+='</div>';

        $('#txtIdConPro').val('0');
        $('#cmbTipConPro').val('');
        $('#divImgDrivePro').html(strDiv);
        $('#divImgDrivePro').prop('disabled',false);
        $('#divImgDrivePro').trigger('liszt:updated');

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

        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';  
        $('#right').html(botones);

    });

    $('#btnGuardarConPro').click(function(){
            
        var strModal='';
        var cmb = $('#cmbTipConPro').val();
        var id = $('#txtIdDrivePro').val();

        //alert('cmb.length ' + cmb.length);
        //alert('id.length ' + id.length);

        if(cmb.length>0 && id.length>0){
            
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="icon-warning-sign"></i>&nbspProducto - Agregar contenido</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>¿Desea agregar contenido <b>' + id + '</b> al listado de contenidos?</p>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                strModal+='<a id="btnAgrCon" style="border-color: silver; background-color: #FFCC00; color: black;" class="btn btn-primary">Agregar</a>';
            strModal+='</div>';

            $('#myModal').html(strModal);
            
        }else{
            
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="icon-warning-sign"></i>&nbsp;Atención</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                //strModal+='<p nowrap>Debe establecer el <b>tipo de contenido</b> y <b>ID google drive</b>!</p><i class="glyphicons-icon warning_sign"></i><br>';
                strModal+='<p style="text-align: center;">Por favor seleccione <b>tipo de contenido</b> e ingrese <b>ID google drive</b>!</p>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black;" data-dismiss="modal">Aceptar</a>';
            strModal+='</div>';
            
            $('#myModal').html(strModal);
            
        }
    }); 
    
    $(document).on("click", "#btnAgrCon", function(event){

        var proId = $('#txtProId').val(); 
        var tipCon = $('#cmbTipConPro').val(); 
        var IdDri = $('#txtIdDrivePro').val(); 
        var idCon = $('#txtIdConPro').val(); // ID de contenido ingresada si existe //
        
        //alert('tipCon ' + tipCon);
        
        switch(tipCon){
            case "URL_IMAGEN": 
                if(!checkURL(IdDri)){
                    $('#myModal').modal('hide');
                    var msgVtaPre="<p style='color: black; font-size: 18px; font-family: sans-serif;'>Debes ingresar URL válida que contiene la imagen del producto que vas a promocionar bajo tu perfil. <br><br>";

                    msgVtaPre+="<br>";
                    msgVtaPre+="<b>";
                        msgVtaPre+="<a target='_blank' style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
                        msgVtaPre+="href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAa3poVUVQMk1OS00'>";
                        msgVtaPre+='<img style="width: 210px; height: 140px;" src="../../images/url.jpg"><br>Ejemplo';
                        msgVtaPre+="</a>";
                    msgVtaPre+="</b>";

                    swal({   
                        title: 'URL Imagen',   
                        html: msgVtaPre,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    return false;
                }
                break;
            case "YOUTUBE":
                if(!validateYouTubeUrl(IdDri)){
                    $('#myModal').modal('hide');
                    var msgVtaPre="<p style='color: black; font-size: 18px; font-family: sans-serif;'>Debes ingresar URL de youtube válida que contiene el video del producto que vas a promocionar bajo tu perfil. <br>";
                    
                    msgVtaPre+="<b>";
                        msgVtaPre+="<a target='_blank' style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
                        msgVtaPre+="href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAa3poVUVQMk1OS00'>";
                        msgVtaPre+='<img style="width: 210px; height: 140px;" src="../../images/youtube.png"><br>Ejemplo';
                        msgVtaPre+="</a>";
                    msgVtaPre+="</b>";

                    swal({   
                        title: 'Youtube',   
                        html: msgVtaPre,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    return false;
                }
                break;
            case "ID_GOOGLE_DRIVE":
                break;    
        }
        
        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
        
        //AJAX
        var parametros = {
            "proId" : proId,
            "tipCon" : tipCon,
            "IdDri" : IdDri,
            "idCon" : idCon
        };        
        
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoAgregaContenidoModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#modalBody").html(strLoad);
                },
                success:  function(xml){     
                
                //alert('productoAgregaContenidoModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                            
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        break;

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        break;    

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        break;
                    
                    default:
                        
                        //limpiamos inpuT, menos ID de Publicación
                        $('#cmbTipConPro option[value=""]').prop('selected', true);
                        $('#cmbTipConPro').trigger('liszt:updated');
                        $('#txtIdDrivePro').val('');
                        $('#txtIdConPro').val('0'); 
   
                        //Limpiamos warning
                        $('#warningConAso').html('');

                        $.ajax({
                            data:  parametros,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoConsultaContenidoModel.php",
                            type:  'post',
                            datetype: 'xml',
                            async: true,
                            success:  function (xml){     
                            
                                //alert(xml);
                            
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
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                                        break;
                                        
                                    case '8':
                                        
                                        var msg='<div style="text-align:center;" class="alert alert-block">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                                        break;
                                    
                                    case '99':
                                        
                                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                                        break;
                                        
                                    case '100':
                                        
                                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                                        break;    
                                    
                                    case '98':
                            
                                        var msg='<div style="text-align:center;" class="alert alert-block">';
                                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';

                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                                        break;
                        
                                    default:
                                        //alert(response);
                                        
                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $('#listConPro').html(datos);
                                            
                                }              
                            }
                        });   
                          
                        var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000);    
                        break;  
                        
                }              
            }
        });
                
    });
        
    $('#btnEliminarConPro').click(function(){
            
        //alert('btnEliminarConPro');    
            
        var strModal='';
        var cmb = $('#cmbTipConPro').val();
        var id = $('#txtIdDrivePro').val();

        //alert('cmb.length ' + cmb.length);
        //alert('id.length ' + id.length);

        if(cmb.length>0 && id.length>0){

            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="icon-warning-sign"></i>&nbspProducto - Eliminar contenido</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>¿Desea eliminar el contenido <b>' + id + '</b> del listado de contenidos?</p>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                strModal+='<a id="btnEliCon" style="border-color: silver; background-color: #FFCC00; color: black;;" class="btn btn-primary">Eliminar</a>';
            strModal+='</div>';

            $('#myModal').html(strModal);
            $('#myModal').show();
            
        }else{

            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="icon-warning-sign"></i>&nbspProducto - Eliminar contenido</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>Favor seleccione el contenido a eliminar.</p>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black;" data-dismiss="modal">Aceptar</a>';
            strModal+='</div>';

            $('#myModal').html(strModal);
            $('#myModal').show();
        }

    }); 
    
    $(document).on("click", "#btnEliCon", function(event){

        var proId = $('#txtProId').val(); 
        var conId = $('#txtIdConPro').val(); // ID de referencia ingresada si existe //

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
                
        //AJAX
        var parametros = {"proId" : proId, "conId" : conId};            

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoEliminaContenidoModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#modalBody").html(strLoad);
                },
                success:  function (xml){     
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                                
                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningConAso').html(msg);
                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#modalBody").html(msg2);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                        break;
                    
                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg2);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                        break;
                    
                    case '99':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg2);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                        break;
                        
                    case '100':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg2);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                        break;    
                    
                    default:

                        //limpiamos inpuT, menos ID de Publicación
                        $('#txtIdConPro').val('0'); 
                        $('#cmbTipConPro option[value="(SELECCIONE)"]').prop('selected', true);
                        $('#cmbTipConPro').trigger('liszt:updated');
                        $('#txtIdDrivePro').val('');
                              
                        //Consulta actualiza referencias      
                        $.ajax({
                            data:  parametros,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/productoConsultaContenidoModel.php",
                            type:  'post',
                            datetype: 'xml',
                            async: true,
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
                                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg2);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                                        break;

                                    case '8':

                                        var msg='<div style="text-align:center;" class="alert alert-block">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg2);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                                        break;

                                    case '99':

                                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg2);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                                        break;
                                        
                                    case '100':

                                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg2);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 1000); 
                                        break;    

                                    case '98':

                                        var msg='<div style="text-align:center;" class="alert alert-block">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg2);
                                        $('#listConPro').html('');
                                        break;

                                    default:

                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $('#listConPro').html(datos);

                                }              
                            }
                        });   
                              
                        limpiarContenido();      
                        var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        $("#modalBody").html(msg);      
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000);
                        break;  
                        
                }              
            }
        });
  
    });
   
    $("#cmbTipConPro").change(function(){
        
        $('#a-table-con tr').each(function(){
            $(this).css('background','white');
            $(this).css('color','black');
        });    
        
        //alert($("#cmbTipConPro").val());
        
        var strDiv='<div class="controls">';
            strDiv+='<div class="input-append">';
            switch($("#cmbTipConPro").val()){
                case "URL_IMAGEN":
                    strDiv+='<input placeholder="http://www.headoverheelsfitness.org/fitness-nail.jpg" id="txtIdDrivePro" size="16" type="text" maxlength="500" >';
                    break;
                case "YOUTUBE":
                    strDiv+='<input placeholder="https://www.youtube.com/watch?v=ZcQK62PokVU" id="txtIdDrivePro" size="16" type="text" maxlength="500" >';
                    break;
                case "ID_GOOGLE_DRIVE":
                        strDiv+='<input placeholder="0B82UUH1gaEMAZDBMSmk0YWwxMU0" id="txtIdDrivePro" size="16" type="text" maxlength="500" >';
                    break;    
            }
            strDiv+='</div>';
        strDiv+='</div>';

        $('#txtIdConPro').val('0');
        $('#divImgDrivePro').html(strDiv);
        $('#divImgDrivePro').prop('disabled',false);
        $('#divImgDrivePro').trigger('liszt:updated');

//        var conTip='';
//        var cmb = document.getElementById("cmbTipConPro"); 
//        for (var i = 0; i < cmb.length; i++) {
//            //  Aca haces referencia al "option" actual
//            var opt = cmb[i];
//
//            // Haces lo que te de la gana aca
//            if(conTip == opt.value){
//               $("#cmbTipConPro").prop('selectedIndex',i);
//               $('#cmbTipConPro').trigger('liszt:updated');
//               break;
//            }
//        }

        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';  
        $('#right').html(botones);
        
    });  
    
});

function desHabilita_contenido(){
    
    //alert('desHabilita_contenido');
    
    $('#txtIdConPro').prop('disabled',true);
    $('#cmbTipConPro').prop('disabled',true);
    $('#txtIdDrivePro').prop('disabled',true);
    
    $('#btnGuardarConPro').prop('disabled',true);
    $('#btnEliminarConPro').prop('disabled',true);
    $('#btnLimpiarConPro').prop('disabled',true);
    
}

function habilita_contenido(){

    //alert('habilita_contenido');

    $('#txtIdConPro').prop('disabled',false);
    $('#cmbTipConPro').prop('disabled',false);
    $('#txtIdDrivePro').prop('disabled',false);
    
    $('#btnGuardarConPro').prop('disabled',false);
    $('#btnEliminarConPro').prop('disabled',false);
    $('#btnLimpiarConPro').prop('disabled',false);
    
}

function limpiarContenido(){
        
    $('#a-table-con tr').each(function(){
            $(this).css('background','white');
            $(this).css('color','black');
        });    
        
        var strDiv='<div class="controls">';
            strDiv+='<div class="input-append">';
                strDiv+='<input placeholder="[Seleccione el tipo de contenido a agregar]" id="txtIdDrivePro" size="16" type="text" maxlength="500" >';
            strDiv+='</div>';
        strDiv+='</div>';

        $('#txtIdConPro').val('0');
        $('#cmbTipConPro').val('');
        $('#divImgDrivePro').html(strDiv);
        $('#divImgDrivePro').prop('disabled',false);
        $('#divImgDrivePro').trigger('liszt:updated');

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

        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';  
        $('#right').html(botones);
    
}

//VALIDA URL DE IMAGEN
function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

//VALIDA URL YOUTUBE
function validateYouTubeUrl(url){
    var p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
    return (url.match(p)) ? true : false;
}
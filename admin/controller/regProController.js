
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
        var sw=0;
        var pa=1;
        var ultimo=0;
    
        //AJAX
        var parametros = { 
            "sw" : sw,
            "ultimo" : ultimo,
            "pa" : pa 
        };             
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProCsuModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){
                
                //alert('regProCsuModel ' + xml);                
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
    
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#regWarning2').html(msg);
                        $('#regWarning2').show();
    
                        break; 
                        
                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#regWarning2').html(msg);
                        $('#regWarning2').show();

                        break; 
                    
                    case '99':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#regWarning2').html(msg);
                        $('#regWarning2').show();
                       
                        break; 

                    case '100':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#regWarning2').html(msg);
                        $('#regWarning2').show();

                        break; 
  
                    case '98':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#regWarning2').html(msg);
                        $('#regWarning2').show();

                        break;
                    
                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;

                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black; font-size: 12px;">Favor al seleccionar registro complete la información complementaria solicitada del postulante.</span></b>';
                        msg+='</div>';

                        $('#regWarning2').html(msg);
                        $('#regWarning2').show();

                        $('#tbody').html(datos);
                        $('#idPag').html(paginacion);
                        
                        break;
                        
                }
            }
        });

        $('#tblAprobados').on('click', 'tbody tr', function(event){
        
            $('#conWarning').html('');    
                        
            $('#proIdPos').val('');
            $('#proRut').val('');
            $('#proNom').val('');
            $('#proApe').val('');
            $('#proEml').val('');
            $('#proFon').val('');
            $('#proCel').val('');
            $('#proTip').val('');
            $('#proPro').val('');
            $('#proFecNac').val('');

            //Obtenemos valores de campos    
            $(this).children("td").each(function(index2){
                switch (index2){
                    case 0:	
                            aprID = $(this).text();
                            break;
                    case 1:	
                            aprEst = $(this).text();
                            break;        
                    case 2:
                            aprNom = $(this).text();
                            break;
                    case 3:
                            aprApe = $(this).text();
                            break;
                    case 4:
                            aprEml = $(this).text();
                            break;
                }
            });
            
            //Asignamos valores
            $('#proIdPos').val(aprID);
            $('#proEst').val(aprEst);
            $('#proNom').val(aprNom);
            $('#proApe').val(aprApe);
            $('#proEml').val(aprEml);
            
            //alert('aprEst ' + aprEst);
            
            //if(aprEst=='REGISTRADA' || aprEst=='ALTA'){
                //AJAX
                var parametros = { 
                    "id" : aprID 
                };             

                $.ajax({
                        data:  parametros,
                        url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProCsuDetPosModel.php",
                        type:  'post',
                        datetype: 'xml',
                    beforeSend: function(){
                        $("#espera").show();
                    },
                    success:  function (xml){

                        //alert('regProCsuDetPosModel ' + xml);                

                        $("#espera").hide();
                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                        switch(codErr){
                            case '9':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#regWarning').html(msg);
                                $('#regWarning').show();

                                break; 

                            case '8':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#regWarning').html(msg);
                                $('#regWarning').show();

                                break; 

                            case '99':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#regWarning').html(msg);
                                $('#regWarning').show();

                                break; 

                            case '100':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#regWarning').html(msg);
                                $('#regWarning').show();

                                break; 

                            case '98':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#regWarning').html(msg);
                                $('#regWarning').show();

                                break;

                            default:

                                var rut = xmlDoc.getElementsByTagName('RUT')[0].childNodes[0].nodeValue;
                                var nom = xmlDoc.getElementsByTagName('NOM')[0].childNodes[0].nodeValue;
                                var ape = xmlDoc.getElementsByTagName('APE')[0].childNodes[0].nodeValue;
                                var mai = xmlDoc.getElementsByTagName('MAI')[0].childNodes[0].nodeValue;
                                var fon = xmlDoc.getElementsByTagName('FON')[0].childNodes[0].nodeValue;
                                var cel = xmlDoc.getElementsByTagName('CEL')[0].childNodes[0].nodeValue;
                                var pro = xmlDoc.getElementsByTagName('PRO')[0].childNodes[0].nodeValue;
                                var fna = xmlDoc.getElementsByTagName('FNA')[0].childNodes[0].nodeValue;
                                
                                $('#proRut').val(rut);
                                $('#proRut').keyup();
                                $('#proNom').val(nom);
                                $('#proApe').val(ape);
                                $('#proEml').val(mai);
                                $('#proFon').val(fon);
                                $('#proCel').val(cel);
                                $('#proPro').val(pro);
                                $('#proFecNac').val(fna);
                                                                
                                break;

                        }
                    }
                });
            //}
            
            //Mostramos formulario
            $('#registro').show();
            
            $(this).addClass('highlight').siblings().removeClass('highlight');

        });
        
        $('#btnCancelar').click(function(){
            $('#conWarning').html('');
            $('#regWarning').html('');
            $('#tblAprobados tr').each(function () {
                $(this).removeClass('highlight').siblings().addClass('highlight');
            });
            $('#registro').hide();        
        });
        
        $('#btnGuardar').click(function(){
    
            //OBTENEMOS VALORES
            $('#conWarning').html('');

            if($('#proRut').val()==''){
                var msg='<div style="text-align:center;" class="alert alert-error">';
                msg+='<b><span style="color: #000;">Favor ingrese RUT</span></b>';
                msg+='</div>'; 
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            } 

            if($('#proNom').val()==''){
                var msg='<div style="text-align:center;" class="alert alert-error">';
                msg+='<b><span style="color: #000;">Favor ingrese nombre</span></b>';
                msg+='</div>'; 
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            }

            if($('#proApe').val()==''){
                var msg='<div style="text-align:center;" class="alert alert-error">';
                msg+='<b><span style="color: #000;">Favor ingrese apellido</span></b>';
                msg+='</div>'; 
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            } 

            if($('#proEml').val()==''){
                var msg='<div style="text-align:center;" class="alert alert-error">';
                msg+='<b><span style="color: #000;">Favor ingrese Email</span></b>';
                msg+='</div>'; 
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            } 
            
            if(!isEmail($('#proEml').val())){
                var msg='<div style="text-align:center;" class="alert alert-error">';
                msg+='<b><span style="color: #000;">Favor ingrese celular</span></b>';
                msg+='</div>'; 
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            } 
            
            if($('#proCel').val()==''){
                var msg='<div style="text-align:center;" class="alert alert-error">';
                msg+='<b><span style="color: #000;">Favor ingrese celular</span></b>';
                msg+='</div>'; 
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            }            

            if($('#proPro').val()==''){
                var msg='<div style="text-align:center;" class="alert alert-error">';
                msg+='<b><span style="color: #000;">Favor ingrese profesión</span></b>';
                msg+='</div>'; 
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            }
            
            if($('#proFecNac').val()==''){
                var msg='<div style="text-align:center;" class="alert alert-error">';
                msg+='<b><span style="color: #000;">Favor ingrese fecha de nacimiento</span></b>';
                msg+='</div>'; 
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            }

            var parametros = { 
                "proId" : $('#proIdPos').val()
                , "proRut" : $('#proRut').val()
                , "proNom" : $('#proNom').val()
                , "proApe" : $('#proApe').val()
                , "proEml" : $('#proEml').val()
                , "proFon" : $('#proFon').val()
                , "proCel" : $('#proCel').val()
                , "proTip" : $('#proTip').val()
                , "proPro" : $('#proPro').val()
                , "proFna" : $('#proFecNac').val()
            };

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProIngModModel.php",
                    type:  'post',
                    datetype: 'xml',
                beforeSend: function(){
                    $("#espera").show();
                    $("#botonera").hide();
                },
                success:  function (xml){

                    //alert('regProIngModModel ' + xml);                

                    $("#espera").hide();
                    $("#botonera").show();
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            $("#botonera").show();

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#regWarning').html(msg);
                            $('#regWarning').show();

                            desHabilitar();
                            break; 

                        case '8':

                            $("#botonera").show();

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#regWarning').html(msg);
                            $('#regWarning').show();

                            desHabilitar();
                            break; 

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#regWarning').html(msg);
                            $('#regWarning').show();

                            $("#botonera").show();

                            //habilitar();
                            break; 

                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#regWarning').html(msg);
                            $('#regWarning').show();

                            $("#botonera").show();

                            //habilitar();
                            break;     

                        default:

                            $("#botonera").show();
                            
                            consultaPostulaciones(0,0,1);
                            pintaRegistroPostulacion();
                            
                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            var estado = xmlDoc.getElementsByTagName('ESTADO')[0].childNodes[0].nodeValue;

                            if(datos==1){
                                var msg='<div style="text-align:center;" class="alert alert-success">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Registro exitoso!.</span></b>';
                                msg+='</div>';
                            }else{
                                var msg='<div style="text-align:center;" class="alert alert-success">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Registro modificado exitosamente!.</span></b>';
                                msg+='</div>';
                            }

                            $('#proEst').val(estado);
                            $('#regWarning').html(msg);
                            $('#regWarning').show();

                            break;
                    }
                }
            });

        });
        
        $("#proEml").focusout(function() {
           if(!isEmail(this.value)){
                this.select();
                var msg='<div style="text-align:center;" class="alert alert-error">';
                msg+='<b><span style="color: #000;">Favor ingrese un Email válido</span></b>';
                msg+='</div>'; 
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
           }else{
               $('#regWarning').html('');
           }
        });
    
});

function consultaPostulaciones(sw,ultimo,pa){

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    //Limpiamos Warning
    $('#regWarning').html('');
        
    //AJAX
    var parametros = { 
        "sw" : sw,
        "ultimo" : ultimo,
        "pa" : pa 
    };             

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/regProCsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
        success:  function (xml){

            //alert('regProCsuModel ' + xml);                

            $("#espera").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#regWarning').html(msg);
                    $('#regWarning').show();

                    break; 

                case '8':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#regWarning').html(msg);
                    $('#regWarning').show();

                    break; 

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#regWarning').html(msg);
                    $('#regWarning').show();

                    break; 

                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#regWarning').html(msg);
                    $('#regWarning').show();

                    break; 

                case '98':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#idPag').html('');
                    $('#tbody').html('');
                    $('#regWarning').html(msg);
                    $('#regWarning').show();

                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;

                    $('#tbody').html(datos);
                    $('#idPag').html(paginacion);

                    break;

            }
        }
    });
        
};

function limpiaForm(){

    $('#proIdPos').val('');
    $('#proRut').val('');
    $('#proNom').val('');
    $('#proApe').val('');
    $('#proEml').val('');
    $('#proFon').val('');
    $('#proCel').val('');
    $('#proTip').val('');
    $('#proPro').val('');
    $('#registro').hide('');
    
};

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function pintaRegistroPostulacion(){  

    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblAprobados tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    if(puID==$('#proIdPos').val()){
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
 
 
var posicion= new Array();

function solo_fecha(e,valor,este){
    n = (document.all) ? e.keyCode : e.which;
    //alert(n);
    //8=backspace | 13=enter | 110=punto decimal teclado numerico | 190=punto decimal teclado alfabetico
    if((n<47 || n>57) && (n != 8 && n != 9 && n != 13 && n !=37 && n !=39) || n == 47){
        return false;
    }else{
        if(valor.length==2 && eval(valor<32) && valor>0){
            este.value +="/";
            posicion[0]=este.value;
            aux=este.value;
            return true;
        }else if((valor.length==2 || valor>31) && n != 8){
            alert("Día no válido");
            este.value="";
            return false;
        }else if (valor.length==4){
            pos1=valor.indexOf("/");
            var aux=valor.substring(pos1+1);
            if(aux>0 && aux>1){
                alert("Introduzca mes con dos (2) dígitos: 01,02,...,11,12");
                este.value=posicion[0];
                return false;
            }
        }else if (valor.length==5){
            este.value +="/";
            posicion[1]=este.value;
        }else if (valor.length==7){
            aux=valor.substring(6);
            if(aux<1 || aux>2){
                este.value=posicion[1];
                alert("Año no válido");
                return false;
            }
        }
    }
}

function sale(este){
//var este=window.document.getElementById("text1");
    if(este.value.length>0){
        
        var pos1=este.value.indexOf("/");
        var dia=este.value.substring(0,pos1);
        var pos2=este.value.indexOf("/",pos1+1);
        var mes=este.value.substring(pos1+1,pos2);
        var anio=este.value.substring(pos2+1,10);
        
        if(anio.length != 4){
            alert("Fecha no válida");
            este.focus();
            este.value="";
            //return false;
        }else if(mes.length != 2){
            alert("mes incorrecto");
            este.value="";
            este.focus();
        }else if(dia.length !=2){
            alert("Día incorrecto");
            este.value="";
            este.focus();
        }
        
    }
}
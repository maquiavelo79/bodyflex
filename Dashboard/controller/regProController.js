
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;    
    var idPos=$('#idPos').val();
        
        //AJAX
        var parametros = { "idPos" : idPos };  
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/regProCsuModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
                $("#btnGuardar").hide();
            },
            success:  function (xml){
                
                //alert('regProCsuModel ' + xml);                
                
                $("#espera").hide();
                $("#btnGuardar").show();
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

                        var id = xmlDoc.getElementsByTagName('ID')[0].childNodes[0].nodeValue;
                        var est = xmlDoc.getElementsByTagName('ESTADO')[0].childNodes[0].nodeValue;
                        var rut = xmlDoc.getElementsByTagName('RUT')[0].childNodes[0].nodeValue;
                        var nom = xmlDoc.getElementsByTagName('NOMBRE')[0].childNodes[0].nodeValue;
                        var ape = xmlDoc.getElementsByTagName('APELLIDO')[0].childNodes[0].nodeValue;
                        var fna = xmlDoc.getElementsByTagName('FECNAC')[0].childNodes[0].nodeValue;
                        var ema = xmlDoc.getElementsByTagName('MAIL')[0].childNodes[0].nodeValue;
                        var fon = xmlDoc.getElementsByTagName('FONO')[0].childNodes[0].nodeValue;
                        var cel = xmlDoc.getElementsByTagName('CELULAR')[0].childNodes[0].nodeValue;
                        var pro = xmlDoc.getElementsByTagName('PRO')[0].childNodes[0].nodeValue;
                        var esp = xmlDoc.getElementsByTagName('ESP')[0].childNodes[0].nodeValue;
                        var fpr = xmlDoc.getElementsByTagName('FPR')[0].childNodes[0].nodeValue;
                      
                        $('#proIdPos').val(id);
                        $('#proEst').val(est);
                        $('#proRut').val(rut);
                        $('#proNom').val(nom);
                        $('#proApe').val(ape);
                        
                        $('#proEsp').val(esp);
                        $('#proFpr').val(fpr);
                        
                        var res=fna.split('-');
                        
                        $('#proFecNac').val(res[2]+'/'+res[1]+'/'+res[0]);
                        
                        //alert(esp);
                        //alert(fpr);
                        
                        $('#proEml').val(ema);
                        $('#proFon').val(fon);
                        $('#proCel').val(cel);
                        $('#proPro').val(pro);

                        break;
                        
                }
            }
        });

        
        $('#btnGuardar').click(function(){
    
            //OBTENEMOS VALORES
            $('#conWarning').html('');
 
            if($('#proCel').val()==''){
                
                var msg='<span class="help-inline">';
                    msg+='<i style="color:red; font-weight: bold;" class="fa fa-times-circle fa-3x"></i>';
                msg+='</span>';
                msg+='<span class="help-inline">';
                    msg+='<p style="color: black; font-size: larger;">Favor ingrese celular</p>';
                msg+='</span>';
                            
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            }            

            if($('#proPro').val()==''){
                var msg='<span class="help-inline">';
                    msg+='<i style="color:red; font-weight: bold;" class="fa fa-times-circle fa-3x"></i>';
                msg+='</span>';
                msg+='<span class="help-inline">';
                    msg+='<p style="color: black; font-size: larger;">Favor ingrese profesión</p>';
                msg+='</span>';
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            }
            
            if($('#proEsp').val()==''){
                var msg='<span class="help-inline">';
                    msg+='<i style="color:red; font-weight: bold;" class="fa fa-times-circle fa-3x"></i>';
                msg+='</span>';
                msg+='<span class="help-inline">';
                    msg+='<p style="color: black; font-size: larger;">Favor ingrese especialidad</p>';
                msg+='</span>';
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            }
            
            if($('#proFpr').val()==''){
                var msg='<span class="help-inline">';
                    msg+='<i style="color:red; font-weight: bold;" class="fa fa-times-circle fa-3x"></i>';
                msg+='</span>';
                msg+='<span class="help-inline">';
                    msg+='<p style="color: black; font-size: larger;">Favor ingrese ID Google Drive de Fotografía Principal del Profesional</p>';
                msg+='</span>';
                $('#regWarning').html(msg);
                $('#regWarning').show();
                return false;
            }else{
                $('#regWarning').html('');
            }
            
            //alert('proIdPos ' + $('#proIdPos').val());
           
            var parametros = { 
                "proId" : $('#proIdPos').val()
                ,   "proFon" : $('#proFon').val()
                ,   "proCel" : $('#proCel').val()
                ,   "proPro" : $('#proPro').val()
                ,   "proEsp" : $('#proEsp').val()
                ,   "proFpr" : $('#proFpr').val()
            };

            //alert('proIdPos ' + $('#proIdPos').val());

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/regProIngModModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async: true,
                beforeSend: function(){
                    $("#espera").show();
                    $("#btnGuardar").hide();
                },
                success:  function (xml){

                    //alert('regProIngModModel ' + xml);                

                    $("#espera").hide();
                    $("#btnGuardar").show();
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            //$("#botonera").show();

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            
                            $('#regWarning').html(msg);
                            $('#regWarning').show();

                            desHabilitar();
                            break; 

                        case '8':

                            //$("#botonera").show();

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

                            //$("#botonera").show();

                            //habilitar();
                            break; 

                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            
                            $('#regWarning').html(msg);
                            $('#regWarning').show();

                            //$("#botonera").show();

                            //habilitar();
                            break;     

                        default:

                            var msg='<span class="help-inline">';
                                msg+='<i style="color:green; font-weight: bold;" class="fa fa-check-circle-o fa-3x"></i>';
                            msg+='</span>';
                            msg+='<span class="help-inline">';
                                msg+='<p style="color: black; font-size: larger;">Modificación exitosa!</p>';
                            msg+='</span>';

                            $('#regWarning').html(msg);
                            $('#regWarning').show();
                            var estado = xmlDoc.getElementsByTagName('ESTADO')[0].childNodes[0].nodeValue;
                            $('#proEst').val(estado);
                            
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
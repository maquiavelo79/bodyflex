
jQuery(document).ready(function() {

var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        //var rut=13661574;
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
        
    //desHabilita_contenido();    
      
    $('#a-table-con').on('click', 'tbody tr', function(event){

        //alert('a-table-con');

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
        
        var botones="<i id='imgGreen' data-toggle='tooltip' title='ver imagen!' onclick='getImagen("  +'"'+ conURL + '"' + ");' style='color: green; margin-top: 100px; cursor: pointer;' class='fa fa-picture-o fa-4x'></i>";        
        botones+='<div id="esperaImgCon"><h4 class="alert-heading">&nbsp;</h4></div>';
        $('#right').html(botones);
        
    });
        
    $(document).on("click", "#btnLimpiarConPro", function(event){

        //alert('btnLimpiarConPro');

        $('#a-table-con tr').each(function(){
            $(this).css('background','white');
            $(this).css('color','black');
        });    

        $('#txtIdConPro').val('0');
        $('#cmbTipConPro').val('');
        $('#txtIdDrivePro').val(' ');

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

        var botones ='<i id="imgGris" style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';  
        botones+='<div id="esperaImgCon"><h4 class="alert-heading">&nbsp;</h4></div>';
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

    $('#txtIdConPro').val('0');
    $('#cmbTipConPro').val('');
    $('#txtIdDrivePro').val(' ');

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

    var botones ='<i id="imgGris" style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';  
    botones+='<div id="esperaImgCon"><h4 class="alert-heading">&nbsp;</h4></div>';
    $('#right').html(botones);
    
}
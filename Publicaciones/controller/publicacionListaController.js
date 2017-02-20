jQuery(document).ready(function() {

var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    $('#tblPublicaciones').on('click', 'tbody tr', function(event){

    var puID, puEst, puFc, puFm, puFp, puTit, puFli, puTip;

    //limpiamos mensajería
        $('#warningEtiPub').html('');
        $('#warRefPub').html('');
        $('#warningPublicacion').html('');
        $('#message').html('');

        //Obtenemos valores de campos    
            $(this).children("td").each(function(index){
                switch (index){
                    case 0:	
                            puID = $(this).text();
                            break;
                    case 1:
                            puEst = $(this).text();
                            break;
                    case 2:
                            puFc = $(this).text();
                            break;
                    case 3:
                            puFm = $(this).text();
                            break;
                    case 4:
                            puFp = $(this).text();
                            break;
                    case 5:
                            puTit = $(this).text();
                            break;
                    case 6:
                            puFli = $(this).text();
                            break;
                    case 7:
                            puTip = $(this).text();
                            break;     
                }
            });

        //asignamos valores a elementos
            $('#txtPuId').attr('value',puID);
            $('#puId').attr('value',puID);
            
            $('#txtPuEst').attr('value',puEst);
            $('#txtPuFCre').attr('value',puFc);
            $('#txtPuFMod').attr('value',puFm);
            $('#txtPuFPu').attr('value',puFp);
            $('#txtPuTit').attr('value',puTit);
            $('#txtPuFli').attr('value',puFli);

            var cont=0;
            $("#cmbTipPub option").each(function(){
                if(puTip==$(this).val()){
                    $("#cmbTipPub option[value="+puTip+"]").attr("selected",true);
                    $('#cmbTipPub').trigger('liszt:updated');
                }
                cont+=1;
            });

        //Establecemos botón
            if(puEst=='PUBLICADA'){
                var boton='<button style="border-color: silver; background-color: silver; color: black; font-weight: bold; margin-left: 10px; width: 100px;" type="button" class="btn btn-info btn-setting" onclick="modalEdicion();" id="btnPublicar">';
                boton+='<i class="fa fa-pencil-square-o"></i>&nbsp;Editar';
                boton+='</button>';
            }else{    
                var boton='<button style="border-color: silver; background-color: silver; color: black; font-weight: bold; margin-left: 10px; width: 100px;" type="button" class="btn btn-info btn-setting" onclick="publicarPublicacion();" id="btnPublicar">';
                boton+='<i class="icon-bullhorn"></i>&nbsp;Publicar';
                boton+='</button>';
            }
            
            $('#divPublicar').html(boton);
            $('#divPublicar').trigger('liszt:updated');
            
            //OBTENCIÓN
            publicacionEstablecerSesion();
            
            //CONTENIDO ESCRITO
            //if($('#txtPuEst').val()!='PUBLICADA'){
                publicacionObtenerContenidoPublicacion();        
            //}    
            publicacionObtenerBajada();
            
            //VALIDACIÓN
            publicacionObtenerEtiquetasRelacionadas();
            publicacionObtenerContenido();     //OBTENER CONTENIDO IMAGENES Y VIDEOS ASOCIADOS   
            publicacionObtenerReferenciasAsociadas();

            //mostramos DIV de etiquetado
            $("#divEtiquetado").css("display", "block");
            $("#divReferencias").css("display", "block");
            $("#divImgPublicacion").css("display", "block");
            $("#divContenido").css("display", "block");

            //Pintamos Fila    
            $(this).addClass('highlight').siblings().removeClass('highlight');

            //Limpiamos alertas anteriores
            $('#warningPublicacion').hide();
            
            //VERIFICAR ELEMENTOS Y MOSTRAR MSG SI APLICA (publicacionVerificaElementosModel)
                mostrarMsgPublicacion();
            
            //EVALUAMOS ESTADO PUBLICACION PARA HABILITAR I INHABILITAR
            evaluarEstadoPublicacion(puEst);
            
    });   
    
});


function pintaRegistro(){
                
    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblPublicaciones tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();
                    if(puID==$('#txtPuId').val()){
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
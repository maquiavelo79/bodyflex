<script>
    jQuery(document).ready(function(){
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
    
        //CONTROLADOR DE EVENTOS BOTÓN CATÁLOGO
        $('#btnEnCom').click(function(){

            var com= $('#txtCom').val();
            var tit= $('#txtTit').val();
            var pts= $('#ptsVal').val();
            var rut= $('#rut').val();
            var idPro= $('#idPro').val();
            
            if(pts==''){
                var msg='<div class="alert alert-danger">';
                    msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                    msg+='<strong>ATENCIÓN</strong> Favor ingrese puntuación';
                msg+='</div>';

                $("#btnEnCom").hide();
                $('#mensajeria').html(msg);
                $('#mensajeria').show();
                return false;
            }
        
            if(tit==''){
                var msg='<div class="alert alert-danger">';
                    msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                    msg+='<strong>ATENCIÓN</strong> Favor agregue título';
                msg+='</div>';

                $("#btnEnCom").hide();
                $('#mensajeria').html(msg);
                $('#mensajeria').show();
                return false;
            }
           
            if(com==''){
                var msg='<div class="alert alert-danger">';
                    msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                    msg+='<strong>ATENCIÓN</strong> Favor agregue un comentario';
                msg+='</div>';

                $("#btnEnCom").hide();
                $('#mensajeria').html(msg);
                $('#mensajeria').show();
                return false;
            }
            
            var parametros = { 
                                "tit" : tit 
                                ,   "com" : com 
                                ,   "pts" : pts 
                                ,   "rut" : rut 
                                ,   "idPro" : idPro 
                            };    

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetIngComModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async: false,
                beforeSend: function(){
                    $("#esperaEnvCom").show();
                    $("#btnEnCom").hide();
                },
                success:  function(xml){

                    //alert('proDetIngComModel '+xml);

                    $("#btnEnCom").show();
                    $("#esperaEnvCom").hide();
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case "9":

                            var msg='<div class="alert alert-danger">';
                                msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                                msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                            msg+='</div>';

                            $('#mensajeria').html(msg);
                            $('#mensajeria').show();

                            break;

                        case "8":

                            var msg='<div class="alert alert-danger">';
                                msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                                msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                            msg+='</div>';

                            $('#mensajeria').html(msg);
                            $('#mensajeria').show();

                            break;

                        case "99":

                            var msg='<div class="alert alert-danger">';
                                msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                                msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                            msg+='</div>';

                            $('#mensajeria').html(msg);
                            $('#mensajeria').show();

                            break;

                        case "100":

                            var msg='<div class="alert alert-danger">';
                                msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                                msg+='<strong>ATENCIÓN </strong>' + '[' + codErr + '] ' + desErr;
                            msg+='</div>';

                            $('#mensajeria').html(msg);
                            $('#mensajeria').show();

                            break;    

                        default:

                            var msg='<div class="alert alert-success"">';
                                msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                                msg+='<strong>ATENCIÓN</strong> Comentario ingresado exitosamente!';
                            msg+='</div>';    
                            
                            $("#btnEnCom").hide();
                            $('#mensajeria').html(msg);
                            $('#mensajeria').show();
                            
                            setTimeout(function() {$('#modal-review').modal('hide');}, 500);
                                 
                            //llama a los ultimos 4 comentarios    
                            consultaComentarios(0);    
                                
                            //RESTABLECEMOS ELEMENTOS DEL FORMULARIO POP-UP
                            $('#txtCom').val('');
                            $('#txtTit').val('');
                            $('#ptsVal').val('');
                            $("#btnEnCom").show();
                            $('#mensajeria').html('').hide();        
                                
                            break;
                    }
                }
            });

        });
                               
        $('#txtCom').keyup(function(){
            if($(this).length>0){
                $("#btnEnCom").show();
                $('#mensajeria').html('');
                $('#mensajeria').hide();
            }else{
                $("#btnEnCom").hide();
            }
        });
        $('#txtTit').keyup(function(){
            if($(this).length>0){
                $("#btnEnCom").show();
                $('#mensajeria').html('');
                $('#mensajeria').hide();
            }else{
                $("#btnEnCom").hide();
            }
        });
        $('#ptsDiv').click(function(){
            if($(this).length>0){
                $("#btnEnCom").show();
                $('#mensajeria').html('');
                $('#mensajeria').hide();
            }else{
                $("#btnEnCom").hide();
            }
        });
            
    });

</script>

<div class="modal  fade" id="modal-review" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> &times; </button>
                <h3 class="modal-title-site text-center">Déjanos un comentario sobre el producto</h3>
            </div>
            <div class="modal-body">
                <h3 class="reviewtitle uppercase">Tu opinión es muy importante para nosotros</h3>
                <div class="form-group">
                    <label>
                        ¿Qué puntuación le darías al producto?
                    </label>
                    <br>
                    <div id="ptsDiv" class="rating-here" style="cursor: pointer;">
                        <input id="ptsVal" type="hidden" class="rating-tooltip-manual" data-filled="fa fa-star fa-2x" data-empty="fa fa-star-o fa-2x" data-fractions="3"/> 
                    </div>
                </div>
                <div class="form-group">
                    <label for="rtext">Título</label>
                    <input type="text" class="form-control" id="txtTit" placeholder="Título" required>
                </div>
                <div class="form-group ">
                    <label>Comentario</label>
                    <textarea id="txtCom" class="form-control" rows="3" placeholder="Comentario" required></textarea>
                </div>
                <button id="btnEnCom" class="btn btn-success">Enviar comentario</button>
                <a id="esperaEnvCom" style="height: 60px; display: none;" class="btn btn-block btn-default"></a>
                <div id="mensajeria" style="display: none;"></div>
            </div>
        </div>
    </div>
</div>
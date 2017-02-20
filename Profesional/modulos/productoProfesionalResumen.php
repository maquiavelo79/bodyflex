<style>
    #rsmPro{
        margin: 0px 3px 30px 3px; 
        width: 250px; 
        border-color: red; 
        border-style: solid; 
        border: 1px solid #222534; 
        border-radius: 7px;
    }
    #titPro{
        text-align: center;
    }
    #conRsm{
        margin: 3px 3px 3px 3px; 
        width: 240px; 
        height: 190px;
    }
    #rsmMar{
        font-weight: bold; 
        font-size: 14px; 
        color: #222534; 
        margin: 3px 3px 3px 3px;
    }
    #rsmCodPro{
        font-size: 14px; 
        color: #222534; 
        margin: 3px 3px 3px 3px;
    }
    #rsmEstPro{
        font-weight: bold; 
        font-size: 14px; 
        color: green; 
        margin: 3px 3px 3px 3px;
    }
    #rsmPrePro{
        font-weight: bold; 
        font-size: 28px; 
        color: red; 
        margin: 3px 3px 3px 3px;
    }
    #rsmPreAntPro{
        font-weight: bold; 
        font-size: 14px; 
        color: #222534; 
        margin: 3px 3px 3px 3px;
    }
    #contCart{
        padding: 15px 5px 5px 5px;
    }
    #cartUni{
        width: 50px; 
        border:1px solid #E5E5E5; 
        color: #222534; 
        float:left; 
        font-size:12px; 
        font-weight: bold; 
        padding:2px;
    }
    #cartAdd{
        padding-left: 5px; 
        padding-right: 5px; 
        text-align: center; 
        margin-left: 10px; 
        width: 160px; 
        font-size: 14px;
    }
   
    #container {  
        width:100%;
        text-align:center;
        height: 60px; 
        width: 310px; 
        height: 60px;
    }

    #left {
        
        float:left;
        width:100px;
        height:25px; 
        padding-top: 5px;
        text-align: center; 
        font-size: 12px; 
        color: #222534; 
        font-family: Helvetica, Georgia, Arial, Garamond; 
        font-weight: bold;

/*        border-style: groove; 
        border-color: black;*/

    }

    #center {
        
        display: inline-block;
        margin:0 auto;
        width:100px;
        height: 25px; 
        padding-top: 5px;
        text-align: center; 
        font-size: 12px; 
        color: #222534; 
        font-family: Helvetica, Georgia, Arial, Garamond; 
        font-weight: bold;

/*        border-style: groove; 
        border-color: grey;*/
    }

    #right {
        float:right;
        width:100px;
        height: 25px; 
        padding-top: 5px;
        text-align: center; 
        font-size: 12px; 
        color: #222534; 
        font-family: Helvetica, Georgia, Arial, Garamond; 
        font-weight: bold;

/*        border-style: groove; 
        border-color: grey;*/
    }
		
    #precio{
        font-weight: bold; 
        font-size: 16px; 
        color: red; 
        text-align: center;
        width: 300px; 
        font-family: Helvetica, Georgia, Arial, Garamond; 
        height: 30px; 

/*        //border-style: solid; 
        //border-color: blue;*/
    }
        
    #resumen{
        font-weight: bold; 
        font-size: 18px; 
        color: red; 
        text-align: center;
        width: 310px; 
        font-family: Helvetica, Georgia, Arial, Garamond; 
        height: 50px; 
        padding-top: 10px;

        border-width: 5px;	
        border-style: double; 
        border-color: #222534;
    }
    
    #nomPro2{
            
            height: 30px; 
            text-align: center; 
            width: 320px; 
            color: black; 
            font-family: Helvetica, Georgia, Arial, Garamond; 
            font-size: 14px;
            font-weight: bold;
            
/*            border-style: solid; 
            border-color: blue; */

        }
        
    #nomPro3{
            
            height: 25px; 
            text-align: center; 
            color: #222534;
            font-family: Helvetica, Georgia, Arial, Garamond; 
            font-size: 18px;
            
/*            border-style: solid; 
            border-color: blue; */

        }    
        
</style>


<script type="text/javascript">
    $(document).ready(function() {

        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        $('#cartAdd').click(function(){
            
            var rutPro=$('#rutPro').val();
            var sesion=$('#session_id').val();
            var rutCli=$('#rut').val();
            var codPro=$('#codPro').val(); 
            var prePro=$('#prePro').val();
            var cantidad=$('#cartUni').val();
            
//            alert('rutPro ' + rutPro);
//            alert('sesion ' + sesion);
//            alert('rutCli ' + rutCli);
//            alert('codPro ' + codPro);
//            alert('prePro ' + prePro);
//            alert('cantidad ' + cantidad);
            
            var parametros = { 
                                "rutPro" : rutPro 
                                ,   "sesion" : sesion
                                ,   "rutCli" : rutCli
                                ,   "codPro" : codPro
                                ,   "prePro" : prePro
                                ,   "cantidad" : cantidad
                              };     
                              
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProAddProModel.php",
                type:  'post',
                async:  true,
                datetype: 'xml',
                success:  function (xml){

                    //alert('perfilProAddProModel ' + xml);

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Resumen').html(msg);    
                            $('#warning-Resumen').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Resumen').html(msg);
                            $('#warning-Resumen').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Resumen').html(msg);
                            $('#warning-Resumen').show();
                            break;
                            
                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Resumen').html(msg);
                            $('#warning-Resumen').show();
                            break;    

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Resumen').html(msg);
                            $('#warning-Resumen').show();
                            break;

                        default:

                            var cantidad = xmlDoc.getElementsByTagName('CANTIDAD')[0].childNodes[0].nodeValue;
                            var codPro = xmlDoc.getElementsByTagName('CODPRO')[0].childNodes[0].nodeValue;
                            var totPro = xmlDoc.getElementsByTagName('TOTPRO')[0].childNodes[0].nodeValue;
                            var prePro = xmlDoc.getElementsByTagName('PREPRO')[0].childNodes[0].nodeValue;
                            var subTot = xmlDoc.getElementsByTagName('SUBTOT')[0].childNodes[0].nodeValue;
                            var nomPro = xmlDoc.getElementsByTagName('NOMPRO')[0].childNodes[0].nodeValue;
                            
                            var items='<a onclick="goCarro();">';
                                items+='<div style="font-size: 12px; font-family: Arial,Helvetica,sans-serif; font-weight: bold;">Carro de compras</div>';
                                items+='<div id="itemsCarrito">';
                                        items+='<div  style="font-size: 10px; font-family: Arial,Helvetica,sans-serif; text-align: right; font-weight: bold;">'+totPro+' &nbsp; Productos &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>';
                                items+='</div>';
                            items+='</a>';
                                                      
                            $('#mnuCarrito').html(items);
                            $('#mnuCarrito').show();
                                            
                                var urlImagen = $('#imgPrincipal').val();
                                var titulo='';
                                titulo+="<div id='nomPro3'>Producto agregado al carro de compras &nbsp; <i class='fa fa-shopping-cart'></i></div>"; 

                                var contenido='';
                                    contenido+="<main style='width: 380px; height: 190px; border-style: solid; border-color: red;' id='main' class='container'>";
                                        contenido+="<div id='nomPro2'>"+nomPro+"</div>";
                                        contenido+="<div id='container' class='box-content'>";
                                            contenido+="<div id='left' class='control-group'>Cantidad: "+cantidad+"</div>";
                                            contenido+="<div id='center'>C&oacute;digo: "+codPro+"</div>";
                                            contenido+="<div id='right'>"+totPro+" productos</div>";
                                            contenido+="<div id='precio'>Precio: "+prePro+"</div>";
                                        contenido+="</div>";
                                        contenido+="<div id='resumen' class='box-content'>";
                                            contenido+="<div>Sub total compra: "+subTot+"</div>";
                                        contenido+="</div>";
                                    contenido+="</main>";

                                swal({
                                    title: titulo,
                                    text: contenido,
                                    imageUrl: urlImagen,
                                    imageSize: "400x175",
                                    showCancelButton: false,
                                    confirmButtonColor: "#DD6B55",
                                    confirmButtonText: "Comprar",
                                    closeOnConfirm: false,
                                    allowOutsideClick: true,
                                    html: true
                                  },
                                  function(isConfirm){
                                    if (isConfirm) {
                                        goCarro();
                                    } 
                                  });
                           
                            break;
                            
                    }
                }
            });
        });    
    });
</script>
<aside id="rsmPro" class="widget post-type"> 
    <h3 style="margin-top: 10px;" id="titPro" class="s-title">Resumen Producto</h3>
    <div id="conRsm">
        <h3 id="rsmMar">Salomon</h3>
        <h3 id="rsmCodPro">Código producto: 4667481</h3>
        <h3 id="rsmEstPro">Producto Nuevo</h3>
        <h3 id="rsmPrePro">Precio: $ 109.990 </h3>
        <h3 id="rsmPreAntPro">Normal: $149.900</h3>
        <div id="contCart">
            <select id="cartUni">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button id="cartAdd" type="button">+ Agregar al Carro</button>
        </div>
    </div>
</aside>

<div id="warning-Resumen" style="text-align:center; border-color: #FFCC00; border-style: solid; display: none;" class="alert alert-block"></div>

<input type="hidden" id="codPro" value= "">
<input type="hidden" id="prePro" value= "">
         


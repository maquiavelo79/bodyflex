<script>
    $( document ).ready(function(){
      
        document.querySelector('button#modalVerCon').onclick = function(){
            
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;

            var url='';
            var msg2='La imagen <b style="font-size: 18px; font-weight: bold;">carga</b> en segundos dependiendo de la velocidad de internet.</p>';  
            var url=$("#txtUrlCon").val();
            var parametros = {"url" : url};      

            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/view/enlaces.php",
                type:  'post',
                datetype: 'xml',
                async: false,
                success:  function (xml){     

                    //alert('enlaces ' + xml);

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                    //alert('dato ' + dato);
                    
                    switch(dato){
                        case '0':

                            var msg1='<p style="color: #1b2426;">Problemas al cargar imagen, <b style="font-size: 16px; font-weight: bold;">verifique la existencia y/o permisos</b> en Google Drive.</p>';                  
                            swal({   
                                title: 'Error al visualizar',   
                                text: msg1,   
                                type: "error", 
                                confirmButtonColor: "#DD6B55",
                                allowOutsideClick: true,
                                animation: false
                            });
                            break;

                        default:

                            swal({   
                                title: 'Imagen!',
                                text: msg2,
                                imageUrl: url,
                                imageWidth: 200,
                                imageHeight: 400,
                                animation: false,
                                confirmButtonColor: '#FFCC00',
                                confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                                    
                            });
                            break;

                    }              
                }
            }); 
            
        };
    });
    function subAgrCon(){
        var msg="<p style='color: black; font-size: 16px; font-family: Helvetica, Georgia, Arial, Garamond;'>En esta sección pudes agregar <b style='font-weight: bold;'>fotografías</b> y/o <b style='font-weight: bold;'>videos</b> ingresando su URL, recuerda que la primera imagen que agregues se establecerá como imagen principal del listado de contenidos.</p>";
        swal({   
            title: 'Contenido',   
            text: msg,
            type: 'info',
            showCancelButton: false,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
	});
    }
    function getImagen(){
        $("#modalVerCon").click();    
    }
    function getHelpImage(){
        
        var msg="<p style='color: black; font-size: 16px; font-family: Helvetica, Georgia, Arial, Garamond;'>";
            msg+="Para asociar contenido a tu publicación por favor revisa los siguientes link: <br><br>";
            
            msg+='<table style="margin-left: 160px;">';
                msg+='<tr>';
                    msg+='<td>';
                        msg+="<a target='_blank' style='font-size: 20px; color: green; text-decoration: underline; font-weight: bold;' href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMASWJYYWhhRkZTREE'>";
                            msg+='<i class="fa fa-picture-o fa-2x"></i>';
                        msg+='</a>';
                    msg+='</td>';   
                    msg+='<td>';
                        msg+="<a target='_blank' style='margin-left: 10px;font-size: 20px; color: green; text-decoration: underline; font-weight: bold;' href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAUkJqblhSNHYzVnM'>";
                            msg+='<i class="fa fa-file-video-o fa-2x"></i>';
                        msg+='</a>';
                    msg+='</td>';    
                msg+='</tr>';
                
                msg+='<tr>';
                    msg+='<td>';
                        msg+="<a target='_blank' style='font-size: 20px; color: green; text-decoration: underline; font-weight: bold;' href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMASWJYYWhhRkZTREE'>";
                            msg+='Imagen';
                        msg+='</a>';
                    msg+='</td>';   
                    msg+='<td>';
                        msg+="<a target='_blank' style='margin-left: 10px;font-size: 20px; color: green; text-decoration: underline; font-weight: bold;' href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAUkJqblhSNHYzVnM'>";
                            msg+='Video';
                        msg+='</a>';
                    msg+='</td>';    
                msg+='</tr>';
            msg+='</table>';    

        swal({   
            title: 'Contenido',   
            text: msg,
            type: 'info',
            showCancelButton: false,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
	});
        
    }
</script>
<style>

    #container {
        width:100%;
        text-align:center;
        height: 270px; 
    }

    #left {
        float:left;
        width:600px;
        height:340px; 
        border-style: groove; 
        border-color: grey;
    }

    #center {
        display: inline-block;
        margin:0 auto;
        width:650px;
        height: 340px; 
        border-style: groove; 
        border-color: grey;
        overflow-y: scroll;
    }

    .right {
        float:right;
        width:100px;
        height: 340px; 
        border-style: groove; 
        border-color: grey;
        width:100px;
    }

    #titCon{
        margin-top: 20px;
        text-align: center; 
        font-weight: bold; 
        font-size: 22px; 
        font-family: Calibri, Helvetica, Georgia, Arial, Garamond;
    }

</style>
<!-- Conmtenido -->
<div id="divContenido" class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header" data-original-title>
            <h2><i class="halflings-icon edit"></i><span class="break"></span><b style="color: black;">Contenido</b></h2>
            <div class="box-icon">
                <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
            </div>
        </div>
        <div id="container" class="box-content">
            <div id="left" class="control-group">
                <h1 class="titH2">Contenido (Fotos / Videos)</h1><br>
                <input type="hidden" id="txtIdCon" value="">
                <div class="controls">
                     <form class="form-horizontal">
                        <fieldset> 
                    
                            <div id="divTipCon" class="control-group">
                                <label id="lblImgDrivePro"  class="control-label" for="appendedInput">Tipo Contenido</label>
                                <select style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 350px;" id="cmbTipCon">
                                    <option value="(SELECCIONE)">(SELECCIONE)</option>
                                    <option value="IMAGEN">IMAGEN</option>
                                    <option value="VIDEO">VIDEO</option>
                                </select> 
                            </div>

                            <div id="divImgDrivePro" class="control-group">
                                <label id="lblImgDrivePro"  class="control-label" for="appendedInput">URL (imagen / video)</label>
                                <div class="controls">
                                    <div class="input-append">
                                        <textarea id="txtUrlCon" maxlength="300" rows="5" style="text-align: justify; background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; color: black; color: black; width: 350px;"  placeholder="Pega aqui la URL de la imagen o video."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div id="esperaCon" class="form-actions" style="display: none;">
                                <h4 class="alert-heading">&nbsp;</h4>
                            </div>   
                            <div id="conWarningCon" class="box-content alerts" style="display:none;"></div>
                            <div id="botoneraCon" style="margin-left: 50px;;">
                                <button type="button" style="margin-bottom: 20px; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-info btn-setting" id="btnGuardarCon">
                                    <i class="fa fa-plus-circle"></i>&nbsp;
                                    Agregar
                                </button> 
                                <button style="margin-bottom: 20px; border-color: silver; background-color: silver; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnEliminarCon">
                                    <i class="fa fa-minus-circle"></i>&nbsp;
                                    Eliminar
                                </button>
                                <button style="margin-bottom: 20px; border-color: silver; background-color: silver; color: black; font-weight: bold;" type="button" class="btn" id="btnLimpiarCon">
                                    <i class="fa fa-refresh"></i>&nbsp;
                                    Limpiar
                                </button>
                                <i onclick="subAgrCon();" style="color: green; margin-left: 20px; cursor: pointer;" class="fa fa-info-circle fa-2x"></i>
                            </div>

                        </fieldset>
                     </form>       
                </div>
            </div>
            <div id="center">
                <table id="a-table-con" class="table table-bordered" style="width: 100%;">
                    <fieldset>
                        <thead>
                            <tr>
                                <th style="width: 10%; text-align: center; font-size: smaller;">ID</th>
                                <th style="width: 10%; text-align: center; font-size: smaller;">Tipo</th>
                                <th style="width: 70%; text-align: center; font-size: smaller;">URL</th>
                            </tr>
                        </thead>   
                        <tbody id="listConAsociadas"></tbody>
                    </fieldset>    
                </table>
                <div id="warningConAso" class="box-content alerts"></div>
            </div>
            <div class="right" id="right">
                <i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>
                <i onclick="getHelpImage();" class="fa fa-info-circle fa-4x" style="margin-top: 40px; color: green; cursor: pointer;"></i>
            </div>
        </div>
    </div>
</div>

<!-- Contenido -->
<button id="modalVerCon" style="display: none;">modalVerCon</button>

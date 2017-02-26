<style>

#container {
/*    width:100%;*/
    text-align:center;
    height: 270px; 
}

#left {
    float:left;
    width:620px;
    height:260px; 
    border-style: groove; 
    border-color: black;
}

#center {
    display: inline-block;
    margin:0 auto;
    width:620px;
    height: 260px; 
    border-style: groove; 
    border-color: grey;
    overflow-y: scroll;
}

#right {
    float:right;
    width:100px;
    height: 260px; 
    border-style: groove; 
    border-color: grey;
    width:100px;
/*    margin-top: 100px;*/
}

#divConPro{
    
    float:left;
    display: none;
/*    border-style: solid; 
    border-color: red; */
    
}

#cmbTipConPro{
    box-shadow: 0 0 2px black; 
    margin: 0px 0px 0px 0px; 
    height: 26px; 
    text-align: center; 
    color: black; 
    font-weight: bold; 
    background-color: whitesmoke; 
    font-size: 14px; 
    text-align: center; 
    width: 200px; 
    text-align: center; 
    color: black;
}

#txtIdDrivePro{
    box-shadow: 0 0 2px black; 
    height: 18px; 
    text-align: center; 
    color: black; 
    font-weight: bold; 
    background-color: whitesmoke; 
    font-size: 15px; 
    color: black; 
    width: 540px;
}

#link{
    font-size: 20px; 
    text-decoration: underline; 
    font-weight: bold;
}

a:link,a:visited {
text-decoration: none;
color: blue;
}
a:hover {
text-decoration: none;
color: red;
}

.precio{
    width: 10%; 
    
}

#imagenesVideos, #urlImagen, #idGD, #youTube{
    cursor: pointer; 
    color: blue; 
    font-size: 14px; 
    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
    font-weight: bold;
    margin-left: 20px;
}    
</style>
<script>
    function misProductos(){
        var msgImpPer='<p style="text-align: center; font-size: 18px; font-family: sans-serif; color: #1b2426;">Los profesionales pueden promocionar sus propios productos por medio de su <b style="font-size: 18px; color: blue; font-family: Impact;">perfil web</b>.</p>';
        swal({   
            title: 'Mis Productos',
            text: msgImpPer,
            imageUrl: '../../images/misProductos.jpg',
            imageWidth: 300,
            imageHeight: 300,
            animation: false,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });
    }
    function proImgVideos(){
    
        var msgVtaPre="<p style='font-size: 18px; font-family: sans-serif; color: #1b2426;'>Agrega imágenes y videos asociados al producto que deseas promocionar</p><br>";                  
            msgVtaPre+="<a id='link'"; 
            msgVtaPre+="href=''>";
            msgVtaPre+='<i class="fa fa-file-image-o fa-3x"></i><i style="margin-left: 20px;" class="fa fa-youtube-play fa-3x"></i>';
            msgVtaPre+="</a>";
        msgVtaPre+="</b>";

        swal({   
            title: 'Imágenes y Videos',   
            html: msgVtaPre,   
            type: "info", 
            allowOutsideClick: true,
            animation: false,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });
    }
    function msgUrlImg(){
    
        var msgImpPer='<p style="text-align: center; font-size: 18px; font-family: sans-serif; color: #1b2426;">Puedes agregar URL de imágenes asociadas al producto promocionado.</p>';
        
        msgImpPer+="<b>";
            msgImpPer+="<a style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
            msgImpPer+="href=''>";
            msgImpPer+='Ejemplo';
            msgImpPer+="</a>";
        msgImpPer+="</b>";
        
        swal({   
            title: 'URL de Imagen',
            text: msgImpPer,
            imageUrl: '../../images/url.jpg',
            imageWidth: 300,
            imageHeight: 300,
            animation: false,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });
        
    }  
    
    function msgYouTube(){
    
        var msgImpPer='<p style="text-align: center; font-size: 18px; font-family: sans-serif; color: #1b2426;">Puedes agregar la URL de un video en youtube para asociarlo al producto.</p>';
        
        msgImpPer+="<b>";
            msgImpPer+="<a style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
            msgImpPer+="href=''>";
            msgImpPer+='Ejemplo';
            msgImpPer+="</a>";
        msgImpPer+="</b>";
        
        swal({   
            title: 'YouTube',
            text: msgImpPer,
            imageUrl: '../../images/youtube.png',
            imageWidth: 300,
            imageHeight: 300,
            animation: false,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });
        
    }  
    
    function msgGoogleDrive(){
    
        var msgImpPer='<p style="text-align: center; font-size: 18px; font-family: sans-serif; color: #1b2426;">Puedes agregar el ID de una imagen que tengas guardada en Google Drive para asociarla al producto.</p>';
        
        msgImpPer+="<b>";
            msgImpPer+="<a style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
            msgImpPer+="href=''>";
            msgImpPer+='Ejemplo';
            msgImpPer+="</a>";
        msgImpPer+="</b>";
        
        swal({   
            title: 'Google Drive',
            text: msgImpPer,
            imageUrl: '../../images/googleDrive.png',
            imageWidth: 200,
            imageHeight: 200,
            animation: false,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });
        
    }  
    
</script>
<div id="divConPro" class="row-fluid sortable"> <!-- style="border-style: solid; border-color: green;"  -->
    <div class="box span12">
        <div class="box-header" data-original-title>
            <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                <i class="halflings-icon edit"></i>
                <span class="break"></span>Im&aacute;genes & Videos
                <span id="imagenesVideos" onclick="proImgVideos();">
                    <u>¿IMÁGENES Y VIDEOS PARA MIS PRODUCTOS?</u>
                </span>
                <span id="urlImagen" onclick="msgUrlImg();">
                    <u>¿URL IMAGEN?</u>
                </span>
                <span id="idGD" onclick="msgGoogleDrive();">
                    <u>¿ID Google Drive?</u>
                </span>
                <span id="youTube" onclick="msgYouTube();">
                    <u>¿YouTube?</u>
                </span>
            </h2>
        </div>
        <br>
        <div id="container" class="box-content">
            <div id="left" class="control-group"> <!-- style="border-style: solid; border-color: red;" -->
                <div class="controls"> <!-- style="border-style: solid; border-color: blue;" -->
<!--                    <form class="form-horizontal">-->
                        <fieldset>
                            <input type="hidden" id="txtIdConPro" value="0"><br><br>
                            <div id="divTipConPro" style="float: left; margin-left: 30px;" class="control-group">
<!--                                <label id="lblConPro"  class="control-label" for="appendedInput"><b>Tipo</b></label>-->
                                <div class="controls">
                                    <select disabled="disabled" id="cmbTipConPro">
                                        <option value="">(SELECCIONE)</option>
                                        <option value="URL_IMAGEN">URL IMAGEN</option>
                                        <option value="YOUTUBE">YOUTUBE</option>
                                        <option value="ID_GOOGLE_DRIVE">ID GOOGLE DRIVE</option>
                                    </select> 
                                </div>
                            </div>    
                            <div id="divImgDrivePro" style="float: left; margin-left: 30px;" class="control-group">
<!--                                <label id="lblImgDrivePro"  class="control-label" for="appendedInput"><b>URL</b></label>-->
                                <div class="controls">
                                    <div class="input-append">
<!--                                        <input style="background-color: silver;" id="txtIdDrivePro" size="100" type="text" maxlength="500" >-->
                                        <input id="txtIdDrivePro" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;" placeholder="[Seleccione el tipo de contenido a agregar]" size="100" type="text" maxlength="500" >
                                    </div>
                                </div>
                            </div>
                        </fieldset>    
<!--                    </form>    -->
                    <div id="botoneraCon" style="margin-top: 20px;">
                        <button id="btnGuardarConPro" class="btn btn-info btn-setting" style="margin-bottom: 20px; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" type="button" disabled="">
                            <i class="fa fa-plus-circle"></i>&nbsp;
                            Agregar
                        </button>
                        <button id="btnEliminarConPro" class="btn btn-info btn-setting" type="button" style="margin-bottom: 20px; border-color: silver; background-color: silver; color: black; font-weight: bold;" disabled="">
                            <i class="fa fa-minus-circle"></i>&nbsp;
                            Eliminar
                        </button>
                        <button id="btnLimpiarConPro" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; margin-bottom: 20px;" type="button" class="btn">
                            <i class="fa fa-paint-brush"></i>&nbsp;
                            Limpiar
                        </button>
                    </div>    
                    <div id="conWarningCon" class="box-content alerts" style="display:none;"></div>
                </div>    
            </div>
            <div id="center">
                <table id="a-table-con" class="table table-bordered" style="width: 100%;">
                    <fieldset>
                        <thead>
                            <tr>
                                <th style="height: 8px; width: 15%; text-align: center; font-size: smaller;">ID</th>
                                <th style="height: 8px; width: 15%; text-align: center; font-size: smaller;">Tipo</th>
                                <th style="height: 8px; width: 70%; text-align: center; font-size: smaller;">URL Imagen</th>
                            </tr>
                        </thead>   
                        <tbody id="listConPro"></tbody>
                    </fieldset>    
                </table>
                <div id="warningConAso" class="box-content alerts"></div>
            </div>
            <div id="right">
                <i class="fa fa-picture-o fa-4x"></i>
            </div>
        </div>
    </div>
</div>

<!-- Contenido -->
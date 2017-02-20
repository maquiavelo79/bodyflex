<script>
    jQuery(document).ready(function(){   
        $('#btnImgGuardar').click(function(e){
            /*ELIMINAR IMAGEN*/
            var parametros = {"id" : $('#sId').val()};            
            $.ajax({
                data:  parametros,
                url:   '../model/serviciosProfesionalVerificaEliminaImagenModel.php',
                type:  'post'
            });
                
            /*AGREGA IMAGEN*/
            e.preventDefault();
            var formObj = $('#multiform');
            var formURL = '../model/serviciosProfesionalSubeImagenModel.php';
            
            $("#message").empty();
            $("#divBtn").hide();
            $('#esperaImg').show();
            
            if(window.FormData !== undefined){  // for HTML5 browsers	
                var formData = new FormData(formObj[0]);
                $.ajax({
                    url: formURL, // Url to which the request is send
                    type: "POST",             // Type of request to be send, called as method
                    data: formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                    mimeType:"multipart/form-data",
                    contentType: false,       // The content type used when sending data to the server.
                    cache: false,             // To unable request pages to be cached
                    processData:false,        // To send DOMDocument or non processed data file it is set to false
                    success: function(data)   // A function to be called if request succeeds
                    {
                        var r=data.split('|');
                        $("#divBtn").show();
                        $('#esperaImg').hide();
                        $("#message").html(r[0]);
                        $("#nomImg").val(r[1]);
                        
                        consultaServicio();
                        establecerImagen();
                        pintaRegistro();
                        establecerSesion();
                        
                    }
                });
            };    
        });
    });    
</script>
<script>
    var loadFile = function(event) {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
    };
</script>

<!-- IMAGEN SLIDER -->
<div id="divImgSlider" class="row-fluid sortable">
<!--    <div class="box span12">-->
        <form class="form-horizontal" id="multiform" method="post" enctype="multipart/form-data">
            <fieldset>
                <div id='divFile'>
                    <input style="cursor: pointer;" type="file" name="file" id="file" required onchange="loadFile(event)">
                </div>
                <span class="help-inline">Imagen de 150 KB m&aacute;ximo</span>
                <br><br>
                <div id="divOut" 
                     style="width: 800px; 
                            height: 350px; 
                            overflow-y: scroll; 
                            overflow-x: scroll;">
                    <div id="divOutPut">    
                        <img id="output" src="http://placehold.it/800x350"/>
                    </div>
                </div>
                <input type="hidden" id="nomImg"> 
                <div id="message" class="box-content alerts"></div>
                <div id="divBtn" class="form-actions">
                    <button class="btn" id="btnImgGuardar">
                        Guardar
                    </button>
                </div>
                <div id="esperaImg" style="height:50px; display:none;"></div>
            </fieldset>        
        </form>
<!--    </div>/span   -->
</div><!--/row-->
<br>
<!-- IMAGEN PUBLICACIÓN -->


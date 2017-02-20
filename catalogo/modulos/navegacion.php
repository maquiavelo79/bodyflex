<script>
    jQuery(document).ready(function() {
        $(document).on("click", ".home", function(event){
			
		var URLdomain   = window.location.host;
		var URLprotocol = window.location.protocol;
		var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/index.php";
		var id=$(this).attr('id_des1');

		var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
		  '<input type="hidden" id="id" name="id" value="' + id + '" />' +
		  '</form>');
		$('body').append(form);
		form.submit();

	});
    });
</script>
<div class="row">
    <div class="breadcrumbDiv col-lg-12">
        <ul id="ruta" class="breadcrumb"></ul>
    </div>
    <div style="display:block;" id="espera_navegacion"></div>
    <div style="display:none;" id="msgNavegacion"></div>
</div>
$(document).ready(function(){

	function colorOE(){
		$('table tr:odd').css('background-color','#E5E5E7');
		$('tabl e tr:even').css('background-color','#FFFFFF');
	}
	
	$('#contenido').html('<div><img src="../img/load.gif"/></div>');
	
	$('#menu ul a').before('<img src="../img/ndice.png"> ');
	
	$.post("administracion/resumen.php",{mostrar:true},function(dates){
		$('#contenido').html(dates);
		colorOE();
	});
	
 	$('#Btnlistado').click(function(){
		$('#contenido').html('<div><img src="../img/load.gif"/></div>');
		
		$.post("administracion/listado.php",{mostrar:"Si"},function(result){
			$('#contenido').html(result);
				$('table tr th').css('background','#A9A9AA');
				$('table tr:odd').css('background-color','#E5E5E7');
				$('table tr').click(function(){
						cssImp = $(this).css('background-color');
						if(cssImp != "rgb(169, 169, 170)"){
							colorOE();
							$(this).css('background-color','#A9A9AA');
						}
						else{
							colorOE();
						}
			});
    });
	});
	
	$('#BtnResumen').click(function(){
		$('#contenido').html('<div><img src="../img/load.gif"/></div>');
		$.post("administracion/resumen.php",{mostrar:true},function(dates){
			$('#contenido').html(dates);
			colorOE();
		});
	});

	$('a[data-reveal-id]').live('click', function(e) {
		e.preventDefault();
		
		var rAmodelo = $(this).attr('data-datos');
		
		$.post("administracion/arcAdjuntos.php",{rut:rAmodelo},function(result){
		$("#testerModal").html(result);
			$('table tr th').css('background','#A9A9AA');
			colorOE();
			$('td').css('text-align','center');
    });

	});
	
	$('#BtnExcel').click(function(e){
		var atributo = $(this).attr('href');
		$(this).attr('href',atributo+"?mostrar=1");
	});
	
	$('#BtnCambiarPassword').click(function(){

		var userpass = $('#tblPassChange #userpass').html();
		var oldpass = $('#tblPassChange #oldpass').val();
		var newpass = $('#tblPassChange #newpass').val();
		var renewpass = $('#tblPassChange #renewpass').val();
		
		if(newpass != renewpass){
			
			alert('las password no coinciden');
			$('#tblPassChange #newpass').val("");
			$('#tblPassChange #renewpass').val("");
			
		}else{
			$.post("administracion/cambiarPassword.php",{mostrar:true,userpass:userpass,oldpass:oldpass,newpass:newpass,renewpass:renewpass},function(cambiopass){
				if(cambiopass == 0){
					alert('error: password actual');
					$('#tblPassChange #oldpass').val("");
				}else if(cambiopass == 1){
					alert('Se cambio con exito');
					$('.close-reveal-modal').click();
				}
			});
		}
		
	});
	
});
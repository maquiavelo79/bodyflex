var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;
$.ajax({
  type: "POST",
  data: "email_user="+$('#email_user').val().trim()+"&pass_user="+$('#pass_user').val().trim(),
  url: URLprotocol+"//"+URLdomain+"/dfbsa/php/plogin.php",
  beforeSend:function(objeto){$("#btn_login").val('Conectando...');},
  success: function(respuesta){
	if(respuesta == "I"){
		alert("Tu cuenta no esta activa..");
	}else{
	  if(respuesta == "E"){
		alert("Correo Eléctronico o Contraseña incorrecta.");
	  }else{
		   if(respuesta == "S"){
			 document.location.href = URLprotocol+"//"+URLdomain+"/dfbsa/account.html"; 
		   }
	  }   
	}
  }
});
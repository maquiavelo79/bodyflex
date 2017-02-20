
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function () {
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        var rutPro=$('#rutPro').val();
        var parametros = {"rutPro" : rutPro};        
        $.ajax({
            data:  parametros,
            //url:   '../model/curGetBioModel.php',
            url: URLprotocol+"//"+URLdomain+"/bodyflex/cv/model/curGetBioModel.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('curGetBioModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#presentacion').html(msg);    
                        $('#presentacion').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#presentacion').html(msg);
                        $('#presentacion').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#presentacion').html(msg);
                        $('#presentacion').show();
                        break;
                        
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#presentacion').html(msg);
                        $('#presentacion').show();
                        break;    

                    case '98':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#presentacion').html(msg);
                        $('#presentacion').show();
                        break;
                        
                    default:

                        var nombre = xmlDoc.getElementsByTagName('NOMBRE')[0].childNodes[0].nodeValue;
                        var tipo = xmlDoc.getElementsByTagName('TIPO')[0].childNodes[0].nodeValue;
                        var especialidad = xmlDoc.getElementsByTagName('ESPECIALIDAD')[0].childNodes[0].nodeValue;
                        var presentacion = xmlDoc.getElementsByTagName('PRESENTACION')[0].childNodes[0].nodeValue;
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        //alert(nombre);
                        //alert(tipo);
                        //alert(especialidad);
                        //alert(presentacion);
                        //alert(datos);
                                                
                        $('#titleName').html(nombre);
                        $('#especialidad').html(tipo + ' / ' + especialidad);
                        $('#presentacion').html(presentacion+datos);
                        $('#galeria').html(datos);
                        $('#galeria').show();
                        break;
                }
            }
        });
    });
</script>
<h2 id="titleName" class="sectionHead">Christopher J. Molitor</h2>

<div id="bio">
	<h2 id="especialidad">Front-End Web Designer / Developer</h2>
	
	<!--SOCIAL ICONS-->
	<div id="socialIcons">
            <a class="socialIcon" target="_blank" id="facebookIcon" href="../model/curGetBioModel.php"></a>
		<a class="socialIcon" target="_blank" id="twitterIcon" href="http://themolitor.com/twitter"></a>
		<a class="socialIcon" target="_blank" id="youTubeIcon" href="http://youtube.com/themolitor"></a>
		<a class="socialIcon" target="_blank" id="gplusIcon" href="http://themolitor.com/gplus"></a>
		<a class="socialIcon" target="_blank" id="dribbbleIcon" href="http://dribbble.com/themolitor"></a>
		<!--MORE ICON OPTIOPS...
		<a class="socialIcon" target="_blank" id="flickrIcon" href="#>"></a>
		<a class="socialIcon" target="_blank" id="vimeoIcon" href="#"></a>
		<a class="socialIcon" target="_blank" id="mySpaceIcon" href="#"></a>
		<a class="socialIcon" target="_blank" id="rssIcon" href="#"></a>
		-->
	</div><!--end socialIcons-->

	<!--BIO PARAGRAPH-->
	<p id="presentacion">
            
		Known as "THE MOLITOR", I'm a web designer and WordPress theme developer living in the outskirts of Seattle with my wife and two kids. I'm an active author on ThemeForest where I enjoy spending my day in Photoshop converting custom designs into fancy-pants 
                
                <a title="Selected Work" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/producer.jpg"></a>
                <a title="Selected Work" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/photopharm.jpg"></a>
                <a title="Selected Work" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/brick.jpg"></a>
                <a title="Selected Work" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/nav.jpg"></a>
                <a title="Selected Work" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/novelist.jpg"></a>
                <a title="Selected Work" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/dailypress.jpg"></a>
                <a title="Selected Work" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/eventure.jpg"></a>
                <a title="Selected Work" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/politico.jpg"></a>
                <a title="Selected Work" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/zoom.jpg"></a>
                <a title="Selected Work" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/chameleon.jpg"></a>
                <a title="Selected Work" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/maitred.jpg"></a>
                <a title="Selected Work" data-rel="prettyPhoto[pp_gal]" href="images/portfolio/noc.jpg">Fotos</a>
                
	</p>
	
</div><!--end bio-->

<div class="clear"></div>
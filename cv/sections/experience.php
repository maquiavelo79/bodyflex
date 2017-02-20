<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function () {
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        var rutPro=$('#rutPro').val();
        var parametros = {"rutPro" : rutPro};        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/cv/model/curGetExpModel.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('curGetExpModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#jobs').html(msg);    
                        $('#jobs').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#jobs').html(msg);
                        $('#jobs').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#jobs').html(msg);
                        $('#jobs').show();
                        break;
                        
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#jobs').html(msg);
                        $('#jobs').show();
                        break;    

                    case '98':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#jobs').html(msg);
                        $('#jobs').show();
                        break;
                        
                    default:

                        var jobs = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        //alert(jobs);
                                            
                        $('#jobs').html(jobs);
                        break;
                }
            }
        });
    });
</script>

<h2 id="clock" class="sectionHead">Experiencia</h2>

<!--EXPERIENCE-->
<ul id="jobs">
	<li>
		<div class="details">
			<h3>Current Company</h3>
			<h4>Overlord - City, State</h4>
			<h5>Jul 2008 - Present</h5>
		</div>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo nibh, mattis sit amet consequat a, varius vitae metus. Proin pharetra sodales pellentesque.</p>
	</li>
	<li>
		<div class="details">
			<h3>Some Other Company</h3>
			<h4>Lead Front-End Developer - City, State</h4>
			<h5>Jan 2010 - Jan 2011</h5>
		</div>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo nibh, mattis sit amet consequat a, varius vitae metus. Proin pharetra sodales pellentesque.</p>
	</li>
	<li>
		<div class="details">
			<h3>Another Company</h3>
			<h4>Creative Director - City, State</h4>
			<h5>Jun 2008 - Dec 2009</h5>
		</div>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo nibh, mattis sit amet consequat a, varius vitae metus. Proin pharetra sodales pellentesque.</p>
	</li>
</ul><!--end jobs-->

<div class="clear"></div>
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function () {
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        var rutPro=$('#rutPro').val();
        var parametros = {"rutPro" : rutPro};        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/cv/model/curGetEstModel.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('curGetEstModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#schools').html(msg);    
                        $('#schools').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#schools').html(msg);
                        $('#schools').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#schools').html(msg);
                        $('#schools').show();
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#schools').html(msg);
                        $('#schools').show();
                        break;    

                    case '98':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#schools').html(msg);
                        $('#schools').show();
                        break;
                        
                    default:

                        var jobs = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        //alert(jobs);
                                            
                        $('#schools').html(jobs);
                        break;
                }
            }
        });
    });
</script>

<h2 id="learn" class="sectionHead">Estudios</h2>

<!--EDUCATION-->
<ul id="schools">
	<li>
		<div class="details">
			<h3>University of State</h3>
			<h4>Degree Title - Concentration</h4>
			<h5>2005 - 2007</h5>
		</div>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo nibh, mattis sit amet consequat a, varius vitae metus. Proin pharetra sodales pellentesque.</p>
	</li>
	<li>
		<div class="details">
			<h3>State University</h3>
			<h4>Degree Title - Concentration</h4>
			<h5>2001 - 2004</h5>
		</div>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo nibh, mattis sit amet consequat a, varius vitae metus. Proin pharetra sodales pellentesque.</p>
	</li>
</ul><!--end schooling-->

<div class="clear"></div>
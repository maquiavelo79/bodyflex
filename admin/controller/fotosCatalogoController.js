
jQuery(document).ready(function() {
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
    //Limpiamos entradas
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/fotosCatalogoConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function (xml){

            alert('fotosCatalogoConsultaModel ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;    

                case "98":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;
                    
                case "97":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;
                
                case "96":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;

                default:

                    $("#espera").hide();
                    var foto1 = xmlDoc.getElementsByTagName('FOTO1')[0].childNodes[0].nodeValue;
                    var foto2 = xmlDoc.getElementsByTagName('FOTO2')[0].childNodes[0].nodeValue;
                    var foto3 = xmlDoc.getElementsByTagName('FOTO3')[0].childNodes[0].nodeValue;
                    var foto4 = xmlDoc.getElementsByTagName('FOTO4')[0].childNodes[0].nodeValue;
                    var foto5 = xmlDoc.getElementsByTagName('FOTO5')[0].childNodes[0].nodeValue;
                    var foto6 = xmlDoc.getElementsByTagName('FOTO6')[0].childNodes[0].nodeValue;
                    var foto7 = xmlDoc.getElementsByTagName('FOTO7')[0].childNodes[0].nodeValue;
                    var foto8 = xmlDoc.getElementsByTagName('FOTO8')[0].childNodes[0].nodeValue;
                    var foto9 = xmlDoc.getElementsByTagName('FOTO9')[0].childNodes[0].nodeValue;
                    var foto10 = xmlDoc.getElementsByTagName('FOTO10')[0].childNodes[0].nodeValue;
                    var foto11 = xmlDoc.getElementsByTagName('FOTO11')[0].childNodes[0].nodeValue;
                    var foto12 = xmlDoc.getElementsByTagName('FOTO12')[0].childNodes[0].nodeValue;
                    var foto13 = xmlDoc.getElementsByTagName('FOTO13')[0].childNodes[0].nodeValue;
                    var foto14 = xmlDoc.getElementsByTagName('FOTO14')[0].childNodes[0].nodeValue;
                    var foto15 = xmlDoc.getElementsByTagName('FOTO15')[0].childNodes[0].nodeValue;
                    var foto16 = xmlDoc.getElementsByTagName('FOTO16')[0].childNodes[0].nodeValue;
                    var foto17 = xmlDoc.getElementsByTagName('FOTO17')[0].childNodes[0].nodeValue;
                    var foto18 = xmlDoc.getElementsByTagName('FOTO18')[0].childNodes[0].nodeValue;
                    var foto19 = xmlDoc.getElementsByTagName('FOTO19')[0].childNodes[0].nodeValue;
                    var foto20 = xmlDoc.getElementsByTagName('FOTO20')[0].childNodes[0].nodeValue;
                                        
                    if(foto1!='' || foto1!=null){
                        $('#txtCol1GD').val(foto1);
                        $('#sVerImg1').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg1').html('<i class="fa fa-picture-o fa-2x"></i>');
                    }
                    
                    if(foto2!='' || foto2!=null){
                        $('#txtCol2GD').val(foto2);
                        $('#sVerImg2').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg2').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }
                    
                    if(foto3!='' || foto3!=null){
                        $('#txtCol3GD').val(foto3);
                        $('#sVerImg3').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg3').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }    

                    if(foto4!='' || foto4!=null){
                        $('#txtCol4GD').val(foto4);
                        $('#sVerImg4').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg4').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }    

                    if(foto5!='' || foto5!=null){
                        $('#txtCol5GD').val(foto5);
                        $('#sVerImg5').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg5').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }    
                    
                    if(foto6!='' || foto6!=null){
                        $('#txtCol6GD').val(foto6);
                        $('#sVerImg6').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg6').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }
                        
                    if(foto7!='' || foto7!=null){    
                        $('#txtCol7GD').val(foto7);
                        $('#sVerImg7').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg7').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }
                        
                    if(foto8!='' || foto8!=null){    
                        $('#txtCol8GD').val(foto8);
                        $('#sVerImg8').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg8').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }   
                    
                    if(foto9!='' || foto9!=null){    
                        $('#txtCol9GD').val(foto9);
                        $('#sVerImg9').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg9').html('<i class="fa fa-picture-o fa-2x"></i>');
                    }    
                    
                    if(foto10!='' || foto10!=null){    
                        $('#txtCol10GD').val(foto10);
                        $('#sVerImg10').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg10').html('<i class="fa fa-picture-o fa-2x"></i>');
                    }    

                    if(foto11!='' || foto11!=null){    
                        $('#txtCol11GD').val(foto11);
                        $('#sVerImg11').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg11').html('<i class="fa fa-picture-o fa-2x"></i>');
                    }
                        
                    if(foto12!='' || foto12!=null){        
                        $('#txtCol12GD').val(foto12);
                        $('#sVerImg12').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg12').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }
                    
                    if(foto13!='' || foto13!=null){        
                        $('#txtCol13GD').val(foto13);
                        $('#sVerImg13').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg13').html('<i class="fa fa-picture-o fa-2x"></i>');        
                    }
                    
                    if(foto14!='' || foto14!=null){        
                        $('#txtCol14GD').val(foto14);
                        $('#sVerImg14').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg14').html('<i class="fa fa-picture-o fa-2x"></i>');        
                    }
                    
                    if(foto15!='' || foto15!=null){       
                        $('#txtCol15GD').val(foto15);
                        $('#sVerImg15').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg15').html('<i class="fa fa-picture-o fa-2x"></i>');        
                    }
                    
                    if(foto16!='' || foto16!=null){       
                        $('#txtCol16GD').val(foto16);
                        $('#sVerImg16').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg16').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }
                    
                    if(foto17!='' || foto17!=null){
                        $('#txtCol17GD').val(foto17);
                        $('#sVerImg17').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg17').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }
                    
                    if(foto18!='' || foto18!=null){
                        $('#txtCol18GD').val(foto18);
                        $('#sVerImg18').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg18').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }
                    
                    if(foto19!='' || foto19!=null){
                        $('#txtCol19GD').val(foto19);
                        $('#sVerImg19').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg19').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }
                    
                    if(foto20!='' || foto20!=null){
                        $('#txtCol20GD').val(foto20);
                        $('#sVerImg20').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                    }else{
                        $('#sVerImg20').html('<i class="fa fa-picture-o fa-2x"></i>');    
                    }
                    break;
                    
            }
        }
    });
    
 $('#btnGuardar').click(function(){
        
        $(this).addClass('btn btn-primary');
        $('#btnNuevo').removeClass('btn-primary');
        $('#warning').hide();
                       
        var gd1 = $('#txtCol1GD').val();
        var gd2 = $('#txtCol2GD').val();
        var gd3 = $('#txtCol3GD').val();
        var gd4 = $('#txtCol4GD').val();
        var gd5 = $('#txtCol5GD').val();
        var gd6 = $('#txtCol6GD').val();
        var gd7 = $('#txtCol7GD').val();
        var gd8 = $('#txtCol8GD').val();
        var gd9 = $('#txtCol9GD').val();
        var gd10 = $('#txtCol10GD').val();
        var gd11 = $('#txtCol11GD').val();
        var gd12 = $('#txtCol12GD').val();
        var gd13 = $('#txtCol13GD').val();
        var gd14 = $('#txtCol14GD').val();
        var gd15 = $('#txtCol15GD').val();
        var gd16 = $('#txtCol16GD').val();
        var gd17 = $('#txtCol17GD').val();
        var gd18 = $('#txtCol18GD').val();
        var gd19 = $('#txtCol19GD').val();
        var gd20 = $('#txtCol20GD').val();
        
        if(gd1=='' && gd2=='' && gd3=='' && gd4=='' && gd5=='' && gd6=='' && gd7=='' && gd8=='' && gd9=='' && gd10=='') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue al menos una imagen Google Drive de 1920x1080.</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
        
        if(gd11=='' && gd12=='' && gd13=='' && gd14=='' && gd15=='' && gd16=='' && gd17=='' && gd18=='' && gd19=='' && gd20=='') {
            
            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<b><span style="color: #000;">Favor agregue al menos una imagen Google Drive de 1024x640.</span></b>';
            msg+='</div>';
            
            $('#warning').html(msg);
            $('#warning').show();
            return false;
            
        }
       
        $('#warning').hide();
     
        //AJAX
            var parametros = { 
                "gd1" : gd1 
                , "gd2" : gd2
                , "gd3" : gd3
                , "gd4" : gd4
                , "gd5" : gd5
                , "gd6" : gd6
                , "gd7" : gd7
                , "gd8" : gd8
                , "gd9" : gd9
                , "gd10" : gd10
                , "gd11" : gd11
                , "gd12" : gd12
                , "gd13" : gd13
                , "gd14" : gd14
                , "gd15" : gd15
                , "gd16" : gd16
                , "gd17" : gd17
                , "gd18" : gd18
                , "gd19" : gd19
                , "gd20" : gd20
            };            
       
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/fotosCatalogoGuardarModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#espera").show();
            },
            success:  function (xml){     
                
                alert('fotosCatalogoGuardarModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#espera").hide();
                    
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warning').html(msg);
                        $('#warning').show();
                        break;
                        
                    case '8':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warning').html(msg);
                        $('#warning').show();
                        break;
                    
                    case '99':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warning').html(msg);
                        $('#warning').show();
                        break;
                    
                    case '100':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warning').html(msg);
                        $('#warning').show();
                        break;
                    
                    default:
                        
                        $("#espera").hide();
                        var msg='<div class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();                            
                        break;
                }              
            }
        });
    });
    
    $('#txtCol1GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg1').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg1').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol2GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg2').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg2').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol3GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg3').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg3').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol4GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg4').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg4').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol5GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg5').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg5').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol6GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg6').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg6').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol7GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg7').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg7').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol8GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg8').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg8').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol9GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg9').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg9').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol10GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg10').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg10').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol11GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg11').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg11').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol12GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg12').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg12').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol13GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg13').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg13').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol14GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg14').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg14').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol15GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg15').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg15').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol16GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg16').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg16').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol17GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg17').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg17').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol18GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg18').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg18').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol19GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg19').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg19').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
    $('#txtCol20GD').keyup(function(){
        if($(this).length>0){
            $('#sVerImg20').html('<i style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
        }else{
            $('#sVerImg20').html('<i class="fa fa-picture-o fa-2x"></i>');
        }
    });
    
});


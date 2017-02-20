jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    //OBTIENE MENU IZQUIERDO EN BASE A SELECCIÓN
    var parametros = { 
                        "idColeccion" : $('#idColeccion').val() 
                        ,   "idCat2" : $('#idCat2').val() 
                        ,   "idCat3" : $('#idCat3').val() 
                    };  
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proColCatModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera_categoria").show();
        },
        success:  function(xml){

            //alert('proColCatModel ' + xml);

            $("#espera_categoria").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgCategorias').html(msg);
                    $('#msgCategorias').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgCategorias').html(msg);
                    $('#msgCategorias').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgCategorias').html(msg);
                    $('#msgCategorias').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgCategorias').html(msg);
                    $('#msgCategorias').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgCategorias').html(msg);
                    $('#msgCategorias').show();
                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    //alert(datos);
                    $('#catList').html(datos);
                    $('#catList').show();
                    $('#catList').trigger('liszt:updated');
                    collapseMenu();
                    consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
                    break;
                    
            }
        }
    });
    
    
    function collapseMenu(){
          
        //alert('collapseMenu');  
          
        var navTree = $('.nav-tree li:has(ul)');
        var navTreeA = navTree.addClass('parent_li').find(' > a');

        navTreeA.each(function () {

            if ($(this).hasClass("child-has-open")) {

            } else {
                $(this).addClass("child-has-close");
                var navTreeAchildren = $(this).parent('li.parent_li').find(' > ul > li');
                navTreeAchildren.hide();
            }

        });

        $('.nav-tree li.parent_li > a').on('click', function (e) {
            var children = $(this).parent('li.parent_li').find(' > ul > li');
            if (children.is(":visible")) {
                children.hide('fast');
                $(this).addClass('child-has-close').removeClass('child-has-open');

            } else {
                children.show('fast');
                $(this).addClass('child-has-open').removeClass('child-has-close');
            }
            e.stopPropagation();
        });
            
    }
   
    $(document).on("click", ".classColCat", function(event){    
        
        var id=$(this).attr('id');
        var idCat1=$(this).attr('idCat1');
        var idCat2=$(this).attr('idCat2');
        var idCat3=$(this).attr('idCat3');
        var url='/bodyflex/catalogo/view/proColView.php';
        
        url=URLprotocol+"//"+URLdomain+url;

        //alert(url);

        if(id!=0){
            var form = $('<form action="' + url + '" method="post" target="_self">' +
                '<input type="hidden" id="id" name="id" value="' + id + '" />' +
                '<input type="hidden" id="id" name="idCat1" value="' + idCat1 + '" />' +
                '<input type="hidden" id="id" name="idCat2" value="' + idCat2 + '" />' +
                '<input type="hidden" id="id" name="idCat3" value="' + idCat3 + '" />' +
                '</form>');
            $('body').append(form);
            form.submit();
        }
        
    });
   
});
 
 


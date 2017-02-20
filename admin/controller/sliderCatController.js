
jQuery(document).ready(function() {

    var idTd, t1Td, t2Td, flTd, teTd, poTd;
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
            
    $('#cmbTipDiv').change(function(){
        
        $('#warning').html('');
        $('#thead').html('');
        $('#tbody').html('');
                
        var op=$(this).val();
        if(op!=''){
            switch(op){
                case '1':
                    $('.D').hide();
                    $('#divTip1').show();
                    $('#opc').val('divTip1');
                    limpiar();
                    consultaDiv(1);
                    break;
                case '2': 
                    $('.D').hide();
                    $('#divTip2').show();
                    $('#opc').val('divTip2');
                    limpiar();
                    consultaDiv(2);
                    break;
                case '3': 
                    $('.D').hide();
                    $('#divTip3').show();
                    $('#opc').val('divTip3');
                    limpiar();
                    consultaDiv(3);
                    break;
                case '4': 
                    $('.D').hide();
                    $('#divTip4').show();
                    $('#opc').val('divTip4');
                    limpiar();
                    consultaDiv(4);
                    break;
                case '5': 
                    $('.D').hide();
                    $('#divTip5').show();
                    $('#opc').val('divTip5');
                    limpiar();
                    consultaDiv(5);
                    break;
                case '6': 
                    $('.D').hide();
                    $('#divTip6').show();
                    $('#opc').val('divTip6');
                    limpiar();
                    consultaDiv(6);
                    break;    
                case '7': 
                    $('.D').hide();
                    $('#divTip7').show();
                    $('#opc').val('divTip7');
                    limpiar();
                    consultaDiv(7);
                    break;    
              
            }
            $('#botonera').show();
        }else{
            $('.D').hide();
            $('#botonera').hide();
        }
                
    });    

       
    $('#btnLimpiar').click(function(){
        var opc=$('#opc').val();
        switch(opc){
            case 'divTip1':
                $('#txtD1Id').val('');
                $('#txtD1Tit').val('');
                $('#txtD1Tex').val('');
                $('#txtD1GD').val('');
                $('#txtD1Ur1').val('');
                break;
            case 'divTip2':
                $('#txtD2Id').val('');
                $('#txtD2Tit').val('');
                $('#txtD2Tex').val('');
//                $('#txtD2p1').val('');
                $('#txtD21GD').val('');
                $('#txtD22GD').val('');
                $('#txtD2Ur1').val('');
                $('#txtD2Ur2').val('');
                break;
            case 'divTip3':
                $('#txtD3Id').val('');
                $('#txtD3Tit').val('');
                $('#txtD3GD').val('');
                $('#txtD3Ur1').val('');
                break;
            case 'divTip4':
                $('#txtD4Id').val('');
                $('#txtD41GD').val('');
                $('#txtD42GD').val('');
                $('#txtD43GD').val('');
                $('#txtD44GD').val('');
                $('#txtD4B1').val('');
                $('#txtD4B2').val('');
                $('#txtD4Ur1').val('');
                $('#txtD4Ur2').val('');
                $('#txtD4Ur3').val('');
                $('#txtD4Ur4').val('');
                break;
            case 'divTip5':
                $('#txtD5Id').val('');
                $('#txtD5Tit').val('');
                $('#txtD5B1').val('');
                $('#txtD5Tex').val('');
                $('#txtD5GD').val('');
                $('#txtD5Ur1').val('');
                break; 
            case 'divTip6':
                $('#txtD6Id').val('');
                $('#txtD61GD').val('');
                $('#txtD62GD').val('');
                $('#txtD63GD').val('');
//                $('#txtD6p1').val('');
//                $('#txtD6p2').val('');
//                $('#txtD6p3').val('');
                $('#txtD6B1').val('');
                $('#txtD6B2').val('');
                $('#txtD6B3').val('');
                $('#txtD6Ur1').val('');
                $('#txtD6Ur2').val('');
                $('#txtD6Ur3').val('');
                break;
            case 'divTip7':
                $('#txtD7Id').val('');
                $('#txtD7Tit').val('');
                $('#txtD7B1').val('');
                $('#txtD7Tex').val('');
                $('#txtD7GD').val('');
                $('#txtD7Ur1').val('');
                break;
        }
    });   
    
    $('#tblSlider').on('click', 'tbody tr', function(event) {
        
        limpiar();

        var opc=$('#opc').val();
        switch(opc){
            case 'divTip1':
                $(this).children("td").each(function(index2){
                    switch (index2){
                        case 0:	
                                slId = $(this).text();
                                break;
                        case 1:	
                                slTit = $(this).text();
                                break;        
                        case 2:
                                slDes = $(this).text();
                                break;
                        case 3:
                                slGD = $(this).text();
                                break;
                        case 4:
                                slUrl = $(this).text();
                                break;
                        case 5:
                                slCol = $(this).text();
                                break;        
                    }
                });
                
                $('#txtD1Id').val(slId);
                $('#txtD1Tit').val(slTit);
                $('#txtD1Tex').val(slDes);
                $('#txtD1GD').val(slGD);
                $('#txtD1Ur1').val(slUrl);
                $('#txtD1Co').val(slCol);
                $('#sVerImgS1I1').html('<i id="S1|I1" style="color: green; cursor: pointer;"  class="fa fa-picture-o fa-2x"></i>');
                pintaRegistro('#txtD1Id');
                break;
                
            case 'divTip2':
                $(this).children("td").each(function(index2){
                    switch (index2){
                        case 0:	
                                slId = $(this).text();
                                break;
                        case 1:	
                                slTit = $(this).text();
                                break;        
                        case 2:
                                slDes = $(this).text();
                                break;
//                        case 3:
//                                slP = $(this).text();
//                                break;
                        case 3:
                                slGD1 = $(this).text();
                                break;
                        case 4:
                                slGD2 = $(this).text();
                                break;    
                        case 5:
                                slUrl1 = $(this).text();
                                break;
                        case 6:
                                slUrl2 = $(this).text();
                                break;   
                        case 7:
                                slCol = $(this).text();
                                break;   
                        case 8:
                                slPro = $(this).text();
                                break;   
                    }
                });
                
                $('#txtD2Id').val(slId);
                $('#txtD2Tit').val(slTit);
                $('#txtD2Tex').val(slDes);
//                $('#txtD2p1').val(slP);
                $('#txtD21GD').val(slGD1);
                $('#txtD22GD').val(slGD2);
                $('#txtD2Ur1').val(slUrl1);
                $('#txtD2Ur2').val(slUrl2);
                $('#txtD2Co').val(slCol);
                $('#txtD2Po').val(slPro);
                $('#sVerImgS2I1').html('<i id="S2|I1" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                $('#sVerImgS2I2').html('<i id="S2|I2" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                pintaRegistro('#txtD2Id');
                break;
                
            case 'divTip3':
                $(this).children("td").each(function(index2){
                    switch (index2){
                        case 0:	
                                slId = $(this).text();
                                break;
                        case 1:	
                                slTit = $(this).text();
                                break;        
                        case 2:
                                slGD = $(this).text();
                                break;
                        case 3:
                                slUrl = $(this).text();
                                break;
                        case 4:
                                slCol = $(this).text();
                                break;        
                    }
                });
                
                $('#txtD3Id').val(slId);
                $('#txtD3Tit').val(slTit);
                $('#txtD3GD').val(slGD);
                $('#txtD3Ur1').val(slUrl);
                $('#txtD3Co').val(slCol);
                $('#sVerImgS3I1').html('<i id="S3|I1" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                pintaRegistro('#txtD3Id');
                break;
                
            case 'divTip4':
                $(this).children("td").each(function(index2){
                    switch (index2){
                        case 0:	
                                slId = $(this).text();
                                break;
                        case 1:	
                                slGD1 = $(this).text();
                                break;        
                        case 2:
                                slGD2 = $(this).text();
                                break;
                        case 3:
                                slGD3 = $(this).text();
                                break;
                        case 4:
                                slGD4 = $(this).text();
                                break;     
                        case 5:
                                slB1 = $(this).text();
                                break;
                        case 6:
                                slB2 = $(this).text();
                                break;      
                        case 7:
                                slURL1 = $(this).text();
                                break;
                        case 8:
                                slURL2 = $(this).text();
                                break;     
                        case 9:
                                slURL3 = $(this).text();
                                break;
                        case 10:
                                slURL4 = $(this).text();
                                break;    
                            
                        case 11:
                                slPro1 = $(this).text();
                                break;    
                        case 12:
                                slPro2 = $(this).text();
                                break;    
                        case 13:
                                slPro3 = $(this).text();
                                break;    
                        case 14:
                                slPro4 = $(this).text();
                                break;        
                            
                    }
                });
                
                $('#txtD4Id').val(slId);
                $('#txtD41GD').val(slGD1);
                $('#txtD42GD').val(slGD2);
                $('#txtD43GD').val(slGD3);
                $('#txtD44GD').val(slGD4);
                $('#txtD4B1').val(slB1);
                $('#txtD4B2').val(slB2);
                $('#txtD4Ur1').val(slURL1);
                $('#txtD4Ur2').val(slURL2);
                $('#txtD4Ur3').val(slURL3);
                $('#txtD4Ur4').val(slURL4);
                
                $('#txtD4Po1').val(slPro1);
                $('#txtD4Po2').val(slPro2);
                $('#txtD4Po3').val(slPro3);
                $('#txtD4Po4').val(slPro4);
                
                $('#sVerImgS4I1').html('<i id="S4|I1" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                $('#sVerImgS4I2').html('<i id="S4|I2" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                $('#sVerImgS4I3').html('<i id="S4|I3" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                $('#sVerImgS4I4').html('<i id="S4|I4" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                pintaRegistro('#txtD4Id');
                break;
                
            case 'divTip5':
                $(this).children("td").each(function(index2){
                    switch (index2){
                        case 0:	
                                slId = $(this).text();
                                break;
                        case 1:	
                                slTit = $(this).text();
                                break;        
                        case 2:
                                slB = $(this).text();
                                break;
                        case 3:
                                slDes = $(this).text();
                                break;
                        case 4:
                                slGD = $(this).text();
                                break;
                        case 5:
                                slURL = $(this).text();
                                break;        
                        case 6:
                                slCol = $(this).text();
                                break;                
                    }
                });
                
                $('#txtD5Id').val(slId);
                $('#txtD5Tit').val(slTit);
                $('#txtD5B1').val(slB);
                $('#txtD5Tex').val(slDes);
                $('#txtD5GD').val(slGD);
                $('#txtD5Ur1').val(slURL);
                $('#txtD5Co').val(slCol);
                $('#sVerImgS5I1').html('<i id="S5|I1" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                pintaRegistro('#txtD5Id');
                break; 
                
            case 'divTip6':
                $(this).children("td").each(function(index2){
                    switch (index2){
                        case 0:	
                                slId = $(this).text();
                                break;
                        case 1:	
                                slGD1 = $(this).text();
                                break;        
                        case 2:
                                slGD2 = $(this).text();
                                break;
                        case 3:
                                slGD3 = $(this).text();
                                break;
//                        case 4:
//                                slP1 = $(this).text();
//                                break;
//                        case 5:
//                                slP2 = $(this).text();
//                                break;  
//                        case 6:
//                                slP3 = $(this).text();
//                                break;  
                        case 4:
                                slB1 = $(this).text();
                                break;
                        case 5:
                                slB2 = $(this).text();
                                break;  
                        case 6:
                                slB3 = $(this).text();
                                break; 
                        case 7:
                                slURL1 = $(this).text();
                                break;
                        case 8:
                                slURL2 = $(this).text();
                                break;  
                        case 9:
                                slURL3 = $(this).text();
                                break;    
                        case 10:
                                slPro1 = $(this).text();
                                break;
                        case 11:
                                slPro2 = $(this).text();
                                break;  
                        case 12:
                                slPro3 = $(this).text();
                                break;         
                    }
                });
                
                $('#txtD6Id').val(slId);
                $('#txtD61GD').val(slGD1);
                $('#txtD62GD').val(slGD2);
                $('#txtD63GD').val(slGD3);
//                $('#txtD6p1').val(slP1);
//                $('#txtD6p2').val(slP2);
//                $('#txtD6p3').val(slP3);
                $('#txtD6B1').val(slB1);
                $('#txtD6B2').val(slB2);
                $('#txtD6B3').val(slB3);
                $('#txtD6Ur1').val(slURL1);
                $('#txtD6Ur2').val(slURL2);
                $('#txtD6Ur3').val(slURL3); 

                $('#txtD6Po1').val(slPro1);
                $('#txtD6Po2').val(slPro2);
                $('#txtD6Po3').val(slPro3); 
                
                $('#sVerImgS6I1').html('<i id="S6|I1" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                $('#sVerImgS6I2').html('<i id="S6|I2" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                $('#sVerImgS6I3').html('<i id="S6|I3" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                pintaRegistro('#txtD6Id');
                break;
                
            case 'divTip7':
                $(this).children("td").each(function(index2){
                    switch (index2){
                        case 0:	
                                slId = $(this).text();
                                break;
                        case 1:	
                                slTit = $(this).text();
                                break;        
                        case 2:
                                slB = $(this).text();
                                break;
                        case 3:
                                slDes = $(this).text();
                                break;
                        case 4:
                                slGD = $(this).text();
                                break;
                        case 5:
                                slURL = $(this).text();
                                break;   
                        case 6:
                                slCol = $(this).text();
                                break;         
                    }
                });
                
                $('#txtD7Id').val(slId);
                $('#txtD7Tit').val(slTit);
                $('#txtD7B1').val(slB);
                $('#txtD7Tex').val(slDes);
                $('#txtD7GD').val(slGD);
                $('#txtD7Ur1').val(slURL);
                $('#txtD7Col').val(slCol);
                $('#sVerImgS7I1').html('<i id="S7|I1" style="color: green; cursor: pointer;" class="fa fa-picture-o fa-2x"></i>');
                pintaRegistro('#txtD7Id');
                break;
                
        }

    });
    

    $('#btnEliminar').click(function(){
    
        var strModal='';
        
        var opc=$('#opc').val();
        switch(opc){
            case 'divTip1':
                var slId = $('#txtD1Id').val();
                break;
            case 'divTip2':
                var slId = $('#txtD2Id').val();
                break;
            case 'divTip3':
                var slId = $('#txtD3Id').val();
                break;
            case 'divTip4':
                var slId = $('#txtD4Id').val();
                break;
            case 'divTip5':
                var slId = $('#txtD5Id').val();
                break;
            case 'divTip6':
                var slId = $('#txtD6Id').val();
                break;
            case 'divTip7':
                var slId = $('#txtD7Id').val();
                break;
        }

        if(slId.length>0){
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3>Eliminar ítem Slider</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>¿Desea eliminar el ítem Slider con ID <b>' + slId + '</b> de la lista?</p>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                strModal+='<a id="btnEliReg" style="border-color: silver; background-color: #FFCC00; color: black;" class="btn btn-primary">Eliminar</a>';
            strModal+='</div>';
            $('#myModal').html(strModal);
        };

    });

    $(document).on("click", "#btnEliReg", function(event){

        //Div de Carga
        var strLoad='<div id="espera2" class="modal-body"></div>';

        //AJAX      
        var opc=$('#opc').val();
        switch(opc){
            case 'divTip1':
                var tipo = 1; var id=$('#txtD1Id').val(); break;
            case 'divTip2':
                var tipo = 2; var id=$('#txtD2Id').val(); break;
            case 'divTip3':
                var tipo = 3; var id=$('#txtD3Id').val(); break;
            case 'divTip4':
                var tipo = 4; var id=$('#txtD4Id').val(); break;
            case 'divTip5':
                var tipo = 5; var id=$('#txtD5Id').val(); break;
            case 'divTip6':
                var tipo = 6; var id=$('#txtD6Id').val(); break;
            case 'divTip7':
                var tipo = 7; var id=$('#txtD7Id').val(); break;
        }

        var parametros = {"tipo" : tipo, "id" : id};            

        //escondemos mensajería
        $('#warning').hide();

        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/sliderCatEliModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            beforeSend: function(){
                $("#modalBody").html(strLoad);
            },
            success:  function (xml){  
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                                
                if(codErr==0){

                    limpiar();
                    var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';                    
                    $("#modalBody").html(msg);
                    $("#modalBody").show();
                    setTimeout(function() {$('#myModal').modal('hide');}, 1000);  
                    consultaDiv(tipo);
                    
                }else{

                    var msg2='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $("#modalBody").html(msg2);
                    $("#modalBody").show();
                    setTimeout(function() {$('#myModal').modal('hide');}, 1000);  

                    $('#warning').html(msg);
                    $('#warning').show();
                }                    
            }
        });
    });
        
//    $('#txtD2p1').keyup(function (){
//        this.value = (this.value + '').replace(/[^0-9]/g, '');
//        if(this.value.length>0){
//            var precio=this.value;               
//            $('#mtoD2p1').val($('#txtD2p1').val());
//            $('#txtD2p1').val(formatNumber.new($('#txtD2p1').val(), "$"));
//        }else{
//            $('#txtD2p1').val('');       
//            $('#mtoD2p1').val('');
//        }     
//    });
    
//    $('#txtD6p1').keyup(function (){
//        this.value = (this.value + '').replace(/[^0-9]/g, '');
//        if(this.value.length>0){
//            var precio=this.value;               
//            $('#mtoD6p1').val($('#txtD6p1').val());
//            $('#txtD6p1').val(formatNumber.new($('#txtD6p1').val(), "$"));
//        }else{
//            $('#txtD6p1').val('');       
//            $('#mtoD6p1').val('');
//        }     
//    });
    
//    $('#txtD6p2').keyup(function (){
//        this.value = (this.value + '').replace(/[^0-9]/g, '');
//        if(this.value.length>0){
//            var precio=this.value;               
//            $('#mtoD6p2').val($('#txtD6p2').val());
//            $('#txtD6p2').val(formatNumber.new($('#txtD6p2').val(), "$"));
//        }else{
//            $('#txtD6p2').val('');       
//            $('#mtoD6p2').val('');
//        }     
//    });
    
//    $('#txtD6p3').keyup(function (){
//        this.value = (this.value + '').replace(/[^0-9]/g, '');
//        if(this.value.length>0){
//            var precio=this.value;               
//            $('#mtoD6p3').val($('#txtD6p3').val());
//            $('#txtD6p3').val(formatNumber.new($('#txtD6p3').val(), "$"));
//        }else{
//            $('#txtD6p3').val('');       
//            $('#mtoD6p3').val('');
//        }     
//    });
        
    $('#txtD1Co').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD1Co').val(this.value);
        }else{
            $('#txtD1Co').val('');       
        }     
    });
    
    $('#txtD2Co').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD2Co').val(this.value);
        }else{
            $('#txtD2Co').val('');       
        }     
    });
    
    $('#txtD2Po').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD2Po').val(this.value);
        }else{
            $('#txtD2Po').val('');       
        }     
    });
    
    $('#txtD3Co').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD3Co').val(this.value);
        }else{
            $('#txtD3Co').val('');       
        }     
    });
    
    $('#txtD4Po1').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD4Po1').val(this.value);
        }else{
            $('#txtD4Po1').val('');       
        }     
    });
    
    $('#txtD4Po2').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD4Po2').val(this.value);
        }else{
            $('#txtD4Po2').val('');       
        }     
    });
    
    $('#txtD4Po3').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD4Po3').val(this.value);
        }else{
            $('#txtD4Po3').val('');       
        }     
    });
    
    $('#txtD4Po4').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD4Po4').val(this.value);
        }else{
            $('#txtD4Po4').val('');       
        }     
    });
    
    $('#txtD5Co').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD5Co').val(this.value);
        }else{
            $('#txtD5Co').val('');       
        }     
    });
    
    $('#txtD6Po1').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD6Po1').val(this.value);
        }else{
            $('#txtD6Po1').val('');       
        }     
    });
    
    $('#txtD6Po2').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD6Po2').val(this.value);
        }else{
            $('#txtD6Po2').val('');       
        }     
    });
    
    $('#txtD6Po3').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD6Po3').val(this.value);
        }else{
            $('#txtD6Po3').val('');       
        }     
    });
    
    $('#txtD7Col').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if(this.value.length>0){             
            $('#txtD7Col').val(this.value);
        }else{
            $('#txtD7Col').val('');       
        }     
    });
    
    $('#btnGuardar').click(function(){

        $('#warning').html();

        var opc=$('#opc').val();
        var strXml=0;

            switch(opc){
                case 'divTip1': 
                    strXml = valida_divTip1();
                    break;
                case 'divTip2':
                    strXml = valida_divTip2();
                    break;
                case 'divTip3':
                    strXml = valida_divTip3();
                    break;
                case 'divTip4':
                    strXml = valida_divTip4();
                    break;
                case 'divTip5':
                    strXml = valida_divTip5();
                    break; 
                case 'divTip6':
                    strXml = valida_divTip6();
                    break;
                case 'divTip7':
                    strXml = valida_divTip7();
                    break;
            }

            var xmlDoc = $.parseXML(strXml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;    
            var ruta='';    

            if(codErr==0){
                switch(opc){
                    case 'divTip1': 
                        var parametros = { 
                            "D1Id" : ($('#txtD1Id').val()!=''?$('#txtD1Id').val():0)
                            , "D1Tit" : $('#txtD1Tit').val()
                            , "D1Tex" : $('#txtD1Tex').val()
                            , "D1GD" : $('#txtD1GD').val()
                            , "D1Ur1" : $('#txtD1Ur1').val()
                            , "D1Co" : $('#txtD1Co').val()          
                        };
                        ruta=URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/sliderCarIngModModelA.php";
                        break;
                    case 'divTip2':
                        var parametros = { 
                            "D2Id" : ($('#txtD2Id').val()!=''?$('#txtD2Id').val():0)
                            , "D2Tit" : $('#txtD2Tit').val()
                            , "D2Tex" : $('#txtD2Tex').val()
                            , "D2p1" : $('#mtoD2p1').val()
                            , "D21GD" : $('#txtD21GD').val()
                            , "D22GD" : $('#txtD22GD').val()
                            , "D2Ur1" : $('#txtD2Ur1').val()
                            , "D2Ur2" : $('#txtD2Ur2').val()
                            , "D2Co" : $('#txtD2Co').val()  
                            , "D2Po" : $('#txtD2Po').val()
                        };
                        ruta=URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/sliderCarIngModModelB.php";
                        break;
                    case 'divTip3':
                        var parametros = { 
                            "D3Id" : ($('#txtD3Id').val()!=''?$('#txtD3Id').val():0)
                            , "D3Tit" : $('#txtD3Tit').val()
                            , "D3GD" : $('#txtD3GD').val()
                            , "D3Ur1" : $('#txtD3Ur1').val()
                            , "D3Co" : $('#txtD3Co').val()
                        };
                        ruta=URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/sliderCarIngModModelC.php";
                        break;
                    case 'divTip4':
                        var parametros = { 
                            "D4Id" : ($('#txtD4Id').val()!=''?$('#txtD4Id').val():0)
                            ,   "D41GD" : $('#txtD41GD').val()
                            ,   "D42GD" : $('#txtD42GD').val()
                            ,   "D43GD" : $('#txtD43GD').val()
                            ,   "D44GD" : $('#txtD44GD').val()
                            ,   "D4B1" : $('#txtD4B1').val()
                            ,   "D4B2" : $('#txtD4B2').val()
                            ,   "D4Ur1" : $('#txtD4Ur1').val()
                            ,   "D4Ur2" : $('#txtD4Ur2').val()
                            ,   "D4Ur3" : $('#txtD4Ur3').val()
                            ,   "D4Ur4" : $('#txtD4Ur4').val()
                            ,   "D4Po1" : $('#txtD4Po1').val()
                            ,   "D4Po2" : $('#txtD4Po2').val()
                            ,   "D4Po3" : $('#txtD4Po3').val()
                            ,   "D4Po4" : $('#txtD4Po4').val()
                        };
                        ruta=URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/sliderCarIngModModelD.php";
                        break;
                    case 'divTip5':
                        var parametros = { 
                            "D5Id" : ($('#txtD5Id').val()!=''?$('#txtD5Id').val():0)
                            ,   "D5Tit" : $('#txtD5Tit').val()
                            ,   "D5B1" : $('#txtD5B1').val()
                            ,   "D5Tex" : $('#txtD5Tex').val()
                            ,   "D54GD" : $('#txtD5GD').val()
                            ,   "D5Ur1" : $('#txtD5Ur1').val()
                            ,   "D5Co" : $('#txtD5Co').val()
                        };
                        ruta=URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/sliderCarIngModModelE.php";
                        break; 
                    case 'divTip6':
                        var parametros = { 
                            "D6Id" : ($('#txtD6Id').val()!=''?$('#txtD6Id').val():0)
                            ,   "D61GD" : $('#txtD61GD').val()
                            ,   "D62GD" : $('#txtD62GD').val()
                            ,   "D63GD" : $('#txtD63GD').val()
                            ,   "D6p1" : $('#mtoD6p1').val()
                            ,   "D6p2" : $('#mtoD6p2').val()
                            ,   "D6p3" : $('#mtoD6p3').val()
                            ,   "D6B1" : $('#txtD6B1').val()
                            ,   "D6B2" : $('#txtD6B2').val()
                            ,   "D6B3" : $('#txtD6B3').val()
                            ,   "D6Ur1" : $('#txtD6Ur1').val()
                            ,   "D6Ur2" : $('#txtD6Ur2').val()
                            ,   "D6Ur3" : $('#txtD6Ur3').val()
                            ,   "D6Po1" : $('#txtD6Po1').val()
                            ,   "D6Po2" : $('#txtD6Po2').val()
                            ,   "D6Po3" : $('#txtD6Po3').val()
                        };
                        ruta=URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/sliderCarIngModModelF.php";
                        break;
                    case 'divTip7':
                        var parametros = { 
                            "D7Id" : ($('#txtD7Id').val()!=''?$('#txtD7Id').val():0)
                            ,   "D7Tit" : $('#txtD7Tit').val()
                            ,   "D7B1" : $('#txtD7B1').val()
                            ,   "D7Tex" : $('#txtD7Tex').val()
                            ,   "D7GD" : $('#txtD7GD').val()
                            ,   "D7Ur1" : $('#txtD7Ur1').val()
                            ,   "D7Col" : $('#txtD7Col').val()
                        };
                        ruta=URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/sliderCarIngModModelG.php";
                        break;
                }
                
                //alert(ruta);
                
                $.ajax({
                        data:  parametros,
                        url: ruta,
                        type:  'post',
                        datetype: 'xml',
                        async: false,
                    beforeSend: function(){
                        $("#espera").show();
                        $("#botonera").hide();
                    },
                    success:  function (xml){

                        //alert(ruta + xml);                

                        $("#espera").hide();
                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                        switch(codErr){
                            case '9':

                                $("#botonera").show();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning').html(msg);
                                $('#warning').show();

                                desHabilitar();
                                break; 

                            case '8':

                                $("#botonera").show();

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning').html(msg);
                                $('#warning').show();

                                desHabilitar();
                                break; 

                            case '99':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning').html(msg);
                                $('#warning').show();

                                $("#botonera").show();

                                desHabilitar();
                                break; 

                            case '100':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning').html(msg);
                                $('#warning').show();

                                $("#botonera").show();

                                desHabilitar();
                                break;     

                            default:

                                $("#botonera").show();
                                var id = xmlDoc.getElementsByTagName('IDENTIFICADOR')[0].childNodes[0].nodeValue;

                                switch(opc){
                                    case 'divTip1': 
                                        consultaDiv(1);
                                        pintaRegistro('#txtD1Id');
                                        $('#txtD1Id').val(id);
                                        break;
                                    case 'divTip2':
                                        consultaDiv(2);
                                        pintaRegistro('#txtD2Id');
                                        $('#txtD2Id').val(id);
                                        break;
                                    case 'divTip3':
                                        consultaDiv(3);
                                        pintaRegistro('#txtD3Id');
                                        $('#txtD3Id').val(id);
                                        break;
                                    case 'divTip4':
                                        consultaDiv(4);
                                        pintaRegistro('#txtD4Id');
                                        $('#txtD4Id').val(id);
                                        break;
                                    case 'divTip5':
                                        consultaDiv(5);
                                        pintaRegistro('#txtD5Id');
                                        $('#txtD5Id').val(id);
                                        break; 
                                    case 'divTip6':
                                        consultaDiv(6);
                                        pintaRegistro('#txtD6Id');
                                        $('#txtD6Id').val(id);
                                        break;
                                    case 'divTip7':
                                        consultaDiv(7);
                                        pintaRegistro('#txtD7Id');
                                        $('#txtD7Id').val(id);
                                        break;
                                }    
                
                                var msg='<div style="text-align:center;" class="alert alert-success">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                                msg+='</div>';

                                $('#warning').html(msg);
                                $('#warning').show();
                                
                                break;
                        }
                    }
                });
                
            }else{
                var msg='<div style="text-align:center;" class="alert alert-block">';
                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                msg+='</div>';
                $('#warning').html(msg);
                $('#warning').show();
            }        

    });
    
    
    
});

function pintaRegistro(id){  
    
    //alert('pintaRegistro ' + id);
    
    //recorremos tabla para pintar registro actual
    var puID=0;
    $('#tblSlider tr').each(function(){
        var sw=0;
        $(this).children("td").each(function(index){
            switch (index){
                case 0:	
                    puID = $(this).text();                    
                    
                    //alert('puID ' + puID);
                    //alert('id ' + $(id).val());
                    
                    if(puID==$(id).val()){
                        //alert('entro!');
                        sw=1;
                    }
                    break;  
            }
        });
        if(sw==1){
            //alert('entro al sw');
            $(this).addClass('highlight').siblings().removeClass('highlight'); 
        }    
    });
 }
 
 function limpiar(){
        
    var opc=$('#opc').val();
    switch(opc){
        case 'divTip1':
            $('#txtD1Id').val('');
            $('#txtD1Tit').val('');
            $('#txtD1Tex').val('');
            $('#txtD1GD').val('');
            $('#txtD1Ur1').val('');
            $('#sVerImgS1I1').html('<i class="fa fa-picture-o fa-2x"></i>');
            break;
        case 'divTip2':
            $('#txtD2Id').val('');
            $('#txtD2Tit').val('');
            $('#txtD2Tex').val('');
//            $('#txtD2p1').val('');
            $('#txtD21GD').val('');
            $('#txtD22GD').val('');
            $('#txtD2Ur1').val('');
            $('#txtD2Ur2').val('');
            $('#sVerImgS2I1').html('<i class="fa fa-picture-o fa-2x"></i>');
            $('#sVerImgS2I2').html('<i class="fa fa-picture-o fa-2x"></i>');
            break;
        case 'divTip3':
            $('#txtD3Id').val('');
            $('#txtD3Tit').val('');
            $('#txtD3GD').val('');
            $('#txtD3Ur1').val('');
            $('#sVerImgS3I1').html('<i class="fa fa-picture-o fa-2x"></i>');
            break;
        case 'divTip4':
            $('#txtD4Id').val('');
            $('#txtD41GD').val('');
            $('#txtD42GD').val('');
            $('#txtD43GD').val('');
            $('#txtD44GD').val('');
            $('#txtD4B1').val('');
            $('#txtD4B2').val('');
            $('#txtD4Ur1').val('');
            $('#txtD4Ur2').val('');
            $('#txtD4Ur3').val('');
            $('#txtD4Ur4').val('');
            $('#sVerImgS4I1').html('<i class="fa fa-picture-o fa-2x"></i>');
            $('#sVerImgS4I2').html('<i class="fa fa-picture-o fa-2x"></i>');
            $('#sVerImgS4I3').html('<i class="fa fa-picture-o fa-2x"></i>');
            $('#sVerImgS4I4').html('<i class="fa fa-picture-o fa-2x"></i>');
            break;
        case 'divTip5':
            $('#txtD5Id').val('');
            $('#txtD5Tit').val('');
            $('#txtD5B1').val('');
            $('#txtD5Tex').val('');
            $('#txtD5GD').val('');
            $('#txtD5Ur1').val('');
            $('#sVerImgS5I1').html('<i class="fa fa-picture-o fa-2x"></i>');
            break; 
        case 'divTip6':
            $('#txtD6Id').val('');
            $('#txtD61GD').val('');
            $('#txtD62GD').val('');
            $('#txtD63GD').val('');
//            $('#txtD6p1').val('');
//            $('#txtD6p2').val('');
//            $('#txtD6p3').val('');
            $('#txtD6B1').val('');
            $('#txtD6B2').val('');
            $('#txtD6B3').val('');
            $('#txtD6Ur1').val('');
            $('#txtD6Ur2').val('');
            $('#txtD6Ur3').val('');
            $('#sVerImgS6I1').html('<i class="fa fa-picture-o fa-2x"></i>');
            $('#sVerImgS6I2').html('<i class="fa fa-picture-o fa-2x"></i>');
            $('#sVerImgS6I3').html('<i class="fa fa-picture-o fa-2x"></i>');
            break;
        case 'divTip7':
            $('#txtD7Id').val('');
            $('#txtD7Tit').val('');
            $('#txtD7B1').val('');
            $('#txtD7Tex').val('');
            $('#txtD7GD').val('');
            $('#txtD7Ur1').val('');
            $('#sVerImgS7I1').html('<i class="fa fa-picture-o fa-2x"></i>');
            break;
    }

 }
 
 function habilitar(){

    var opc=$('#opc').val();
    switch(opc){
        case 'divTip1': 
            
            $('#txtD1Tit').prop('disabled',false);
            $('#txtD1Tex').prop('disabled',false);
            $('#txtD1GD').prop('disabled',false);
            $('#txtD1Ur1').prop('disabled',false);
            break;
            
        case 'divTip2':
            
            $('#txtD2Tit').prop('disabled',false);
            $('#txtD2Tex').prop('disabled',false);
//            $('#txtD2p1').prop('disabled',false);
            $('#txtD21GD').prop('disabled',false);
            $('#txtD22GD').prop('disabled',false);
            $('#txtD2Ur1').prop('disabled',false);
            $('#txtD2Ur2').prop('disabled',false);
            break;
            
        case 'divTip3':
            
            $('#txtD3Tit').prop('disabled',false);
            $('#txtD3GD').prop('disabled',false);
            $('#txtD3Ur1').prop('disabled',false);
            break;
            
        case 'divTip4':
            
            $('#txtD41GD').prop('disabled',false);
            $('#txtD42GD').prop('disabled',false);
            $('#txtD43GD').prop('disabled',false);
            $('#txtD44GD').prop('disabled',false);
            $('#txtD4B1').prop('disabled',false);
            $('#txtD4B2').prop('disabled',false);
            $('#txtD4Ur1').prop('disabled',false);
            $('#txtD4Ur2').prop('disabled',false);
            $('#txtD4Ur3').prop('disabled',false);
            $('#txtD4Ur4').prop('disabled',false);
            break;
            
        case 'divTip5':
            
            $('#txtD5Tit').prop('disabled',false);
            $('#txtD5B1').prop('disabled',false);
            $('#txtD5Tex').prop('disabled',false);
            $('#txtD5GD').prop('disabled',false);
            $('#txtD5Ur1').prop('disabled',false);
            
            break; 
        case 'divTip6':
            
            $('#txtD61GD').prop('disabled',false);
            $('#txtD62GD').prop('disabled',false);
            $('#txtD63GD').prop('disabled',false);
//            $('#txtD6p1').prop('disabled',false);
//            $('#txtD6p2').prop('disabled',false);
//            $('#txtD6p3').prop('disabled',false);
            $('#txtD6B1').prop('disabled',false);
            $('#txtD6B2').prop('disabled',false);
            $('#txtD6B3').prop('disabled',false);
            $('#txtD6Ur1').prop('disabled',false);
            $('#txtD6Ur2').prop('disabled',false);
            $('#txtD6Ur3').prop('disabled',false);
            break;
            
        case 'divTip7':
            
            $('#txtD7Tit').prop('disabled',false);
            $('#txtD7B1').prop('disabled',false);
            $('#txtD7Tex').prop('disabled',false);
            $('#txtD7GD').prop('disabled',false);
            $('#txtD7Ur1').prop('disabled',false);
            break;
            
    }
    
    $('#btnGuardar').prop('disabled',false);
    $('#btnEliminar').prop('disabled',false);
    $('#btnLimpiar').prop('disabled',false);
            
 }
 
  function desHabilitar(){
     
    var opc=$('#opc').val();
    switch(opc){
        case 'divTip1': 
            
            $('#txtD1Tit').prop('disabled',true);
            $('#txtD1Tex').prop('disabled',true);
            $('#txtD1GD').prop('disabled',true);
            $('#txtD1Ur1').prop('disabled',true);
            break;
            
        case 'divTip2':
            
            $('#txtD2Tit').prop('disabled',true);
            $('#txtD2Tex').prop('disabled',true);
//            $('#txtD2p1').prop('disabled',true);
            $('#txtD21GD').prop('disabled',true);
            $('#txtD22GD').prop('disabled',true);
            $('#txtD2Ur1').prop('disabled',true);
            $('#txtD2Ur2').prop('disabled',true);
            break;
            
        case 'divTip3':
            
            $('#txtD3Tit').prop('disabled',true);
            $('#txtD3GD').prop('disabled',true);
            $('#txtD3Ur1').prop('disabled',true);
            break;
            
        case 'divTip4':
            
            $('#txtD41GD').prop('disabled',true);
            $('#txtD42GD').prop('disabled',true);
            $('#txtD43GD').prop('disabled',true);
            $('#txtD44GD').prop('disabled',true);
            $('#txtD4B1').prop('disabled',true);
            $('#txtD4B2').prop('disabled',true);
            $('#txtD4Ur1').prop('disabled',true);
            $('#txtD4Ur2').prop('disabled',true);
            $('#txtD4Ur3').prop('disabled',true);
            $('#txtD4Ur4').prop('disabled',true);
            break;
            
        case 'divTip5':
            
            $('#txtD5Tit').prop('disabled',true);
            $('#txtD5B1').prop('disabled',true);
            $('#txtD5Tex').prop('disabled',true);
            $('#txtD5GD').prop('disabled',true);
            $('#txtD5Ur1').prop('disabled',true);
            
            break; 
        case 'divTip6':
            
            $('#txtD61GD').prop('disabled',true);
            $('#txtD62GD').prop('disabled',true);
            $('#txtD63GD').prop('disabled',true);
//            $('#txtD6p1').prop('disabled',true);
//            $('#txtD6p2').prop('disabled',true);
//            $('#txtD6p3').prop('disabled',true);
            $('#txtD6B1').prop('disabled',true);
            $('#txtD6B2').prop('disabled',true);
            $('#txtD6B3').prop('disabled',true);
            $('#txtD6Ur1').prop('disabled',true);
            $('#txtD6Ur2').prop('disabled',true);
            $('#txtD6Ur3').prop('disabled',true);
            break;
            
        case 'divTip7':
            
            $('#txtD7Tit').prop('disabled',true);
            $('#txtD7B1').prop('disabled',true);
            $('#txtD7Tex').prop('disabled',true);
            $('#txtD7GD').prop('disabled',true);
            $('#txtD7Ur1').prop('disabled',true);
            break;
            
    }
    
    $('#btnGuardar').prop('disabled',true);
    $('#btnEliminar').prop('disabled',true);
    $('#btnLimpiar').prop('disabled',true);
    
 }
 
function consultaDiv(opc){
    
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;
  
    //AJAX
    var parametros = {"opc" : opc};            

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/sliderCsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('sliderCsuModel '+xml);

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
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#thead').html('');
                    $('#tbody').html('');
                    $('#warning').html(msg);
                    $('#warning').show();

                    break;

                default:

                    $("#espera").hide();

                    var thead = xmlDoc.getElementsByTagName('THEAD')[0].childNodes[0].nodeValue;
                    var tbody = xmlDoc.getElementsByTagName('TBODY')[0].childNodes[0].nodeValue;

                    $('#thead').html(thead);
                    $('#tbody').html(tbody);
                    break;
            }
        }
    });
    
}
 
 var formatNumber = {
 separador: ".", // separador para los miles
 sepDecimal: ',', // separador para los decimales
 formatear:function (num){
  num +='';
  var splitStr = num.split('.');
  var splitLeft = splitStr[0];
  var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
  var regx = /(\d+)(\d{3})/;
  while (regx.test(splitLeft)) {
  splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
  }
  return this.simbol + splitLeft  +splitRight;
 },
 new:function(num, simbol){
  this.simbol = simbol ||'';
  return this.formatear(num);
 }
};


function valida_divTip1(){
var codErr=0;
var desErr='VALIDACIÓN EXITOSA!';
var sw=0;
    
    if($('#txtD1Tit').val()=='' && sw==0){
        sw=1;
        codErr=1;
        desErr='Favor ingrese título';
    }
    if($('#txtD1Tex').val()=='' && sw==0){
        sw=1;
        codErr=2;
        desErr='Favor ingrese descripción';
    }
    if($('#txtD1GD').val()=='' && sw==0){
        sw=1;
        codErr=3;
        desErr='Favor ingrese ID de Google Drive';
    }
    if($('#txtD1Ur1').val()=='' && sw==0){
        sw=1;
        codErr=4;
        desErr='Favor ingrese URL';
    }
    if($('#txtD1Co').val()=='' && sw==0){
        sw=1;
        codErr=5;
        desErr='Favor ingrese ID colección';
    }
    
    var strXml='<SALIDA>';
	strXml+='<ERROR>';
            strXml+='<CODERROR>';
                strXml+=codErr;
            strXml+='</CODERROR>';
            strXml+='<DESERROR>';
                strXml+=desErr;
            strXml+='</DESERROR>';
	strXml+='</ERROR>';    
	strXml+='<DATOS>';
            strXml+='';
        strXml+='</DATOS>';
    strXml+='</SALIDA>';
    return strXml;

}

function valida_divTip2(){
var codErr=0;
var desErr='VALIDACIÓN EXITOSA!';
var sw=0;

    if($('#txtD2Tit').val()=='' && sw==0){
        codErr=1;
        sw=1;
        desErr='Favor ingrese título';
    }
    if($('#txtD2Tex').val()=='' && sw==0){
        codErr=2;
        sw=1;
        desErr='Favor ingrese descripción';
    }
//    if($('#txtD2p1').val()=='' && sw==0){
//        codErr=3;
//        sw=1;
//        desErr='Favor ingrese precio';
//    }
    if($('#txtD21GD').val()=='' && sw==0){
        sw=1;
        codErr=4;
        desErr='Favor ingrese 1° ID de Google Drive';
    }
    if($('#txtD22GD').val()=='' && sw==0){
        codErr=5;
        sw=1;
        desErr='Favor ingrese °2 ID de Google Drive';
    }
    if($('#txtD2Ur1').val()=='' && sw==0){
        codErr=6;
        sw=1;
        desErr='Favor ingrese 1° URL';
    }
    if($('#txtD2Ur2').val()=='' && sw==0){
        codErr=7;
        sw=1;
        desErr='Favor ingrese 2° URL';
    }
    if($('#txtD2Co').val()=='' && sw==0){
        codErr=8;
        sw=1;
        desErr='Favor ingrese ID colección';
    }
    if($('#txtD2Po').val()=='' && sw==0){
        codErr=9;
        sw=1;
        desErr='Favor ingrese ID producto';
    }
      
    var strXml='<SALIDA>';
	strXml+='<ERROR>';
            strXml+='<CODERROR>';
                strXml+=codErr;
            strXml+='</CODERROR>';
            strXml+='<DESERROR>';
                strXml+=desErr;
            strXml+='</DESERROR>';
	strXml+='</ERROR>';    
	strXml+='<DATOS>';
            strXml+='';
        strXml+='</DATOS>';
    strXml+='</SALIDA>';
    return strXml;
    
}

function valida_divTip3(){
var codErr=0;
var desErr='VALIDACIÓN EXITOSA!';
var sw=0;

    if($('#txtD3Tit').val()=='' && sw==0){
        sw=1;
        codErr=1;
        desErr='Favor ingrese título';
    }
    if($('#txtD3GD').val()=='' && sw==0){
        sw=1;
        codErr=2;
        desErr='Favor ingrese ID de Google Drive';
    }
    if($('#txtD3Ur1').val()=='' && sw==0){
        sw=1;
        codErr=3;
        desErr='Favor ingrese URL';
    }
    if($('#txtD3Co').val()=='' && sw==0){
        sw=1;
        codErr=4;
        desErr='Favor ingrese ID colección';
    }
         
    var strXml='<SALIDA>';
	strXml+='<ERROR>';
            strXml+='<CODERROR>';
                strXml+=codErr;
            strXml+='</CODERROR>';
            strXml+='<DESERROR>';
                strXml+=desErr;
            strXml+='</DESERROR>';
	strXml+='</ERROR>';    
	strXml+='<DATOS>';
            strXml+='';
        strXml+='</DATOS>';
    strXml+='</SALIDA>';
    return strXml;
    
}

function valida_divTip4(){

var codErr=0;
var desErr='VALIDACIÓN EXITOSA!';
var sw=0;

    if($('#txtD41GD').val()=='' && sw==0){
        sw=1;
        codErr=1;
        desErr='Favor ingrese 1° ID de Google Drive';
    }
    if($('#txtD42GD').val()=='' && sw==0){
        sw=1;
        codErr=2;
        desErr='Favor ingrese 2° ID de Google Drive';
    }
    if($('#txtD43GD').val()=='' && sw==0){
        sw=1;
        codErr=3;
        desErr='Favor ingrese 3° ID de Google Drive';
    }
    if($('#txtD44GD').val()=='' && sw==0){
        sw=1;
        codErr=4;
        desErr='Favor ingrese 4° ID de Google Drive';
    }
    if($('#txtD4B1').val()=='' && sw==0){
        sw=1;
        codErr=5;
        desErr='Favor ingrese texto de 1° botón ';
    }
    if($('#txtD4B2').val()=='' && sw==0){
        sw=1;
        codErr=6;
        desErr='Favor ingrese texto de 2° botón ';
    }
    if($('#txtD4Ur1').val()=='' && sw==0){
        sw=1;
        codErr=7;
        desErr='Favor ingrese 1° URL';
    }
    if($('#txtD4Ur2').val()=='' && sw==0){
        sw=1;
        codErr=8;
        desErr='Favor ingrese 2° URL';
    }
    if($('#txtD4Ur3').val()=='' && sw==0){
        sw=1;
        codErr=9;
        desErr='Favor ingrese 3° URL';
    }
    if($('#txtD4Ur4').val()=='' && sw==0){
        sw=1;
        codErr=10;
        desErr='Favor ingrese 4° URL';
    }
    
    
    if($('#txtD4Po1').val()=='' && sw==0){
        sw=1;
        codErr=11;
        desErr='Favor ingrese ID producto 1';
    }
    if($('#txtD4Po2').val()=='' && sw==0){
        sw=1;
        codErr=12;
        desErr='Favor ingrese ID producto 2';
    }
    if($('#txtD4Po3').val()=='' && sw==0){
        sw=1;
        codErr=13;
        desErr='Favor ingrese ID producto 3';
    }
    if($('#txtD4Po4').val()=='' && sw==0){
        sw=1;
        codErr=14;
        desErr='Favor ingrese ID producto 4';
    }
    
    var strXml='<SALIDA>';
	strXml+='<ERROR>';
            strXml+='<CODERROR>';
                strXml+=codErr;
            strXml+='</CODERROR>';
            strXml+='<DESERROR>';
                strXml+=desErr;
            strXml+='</DESERROR>';
	strXml+='</ERROR>';    
	strXml+='<DATOS>';
            strXml+='';
        strXml+='</DATOS>';
    strXml+='</SALIDA>';
    return strXml;
    
}

function valida_divTip5(){
var codErr=0;
var desErr='VALIDACIÓN EXITOSA!';
var sw=0;

    if($('#txtD5Tit').val()=='' && sw==0){
        sw=1;
        codErr=1;
        desErr='Favor ingrese título';
    }
    if($('#txtD5B1').val()=='' && sw==0){
        sw=1;
        codErr=2;
        desErr='Favor ingrese texto botón';
    }
    if($('#txtD5Tex').val()==''&& sw==0){
        sw=1;
        codErr=3;
        desErr='Favor ingrese descripción';
    }
    if($('#txtD5GD').val()=='' && sw==0){
        sw=1;
        codErr=4;
        desErr='Favor ingrese ID de Google Drive';
    }
    if($('#txtD5Ur1').val()=='' && sw==0){
        sw=1;
        codErr=5;
        desErr='Favor ingrese URL';
    }
    if($('#txtD5Co').val()=='' && sw==0){
        sw=1;
        codErr=5;
        desErr='Favor ingrese ID de colección';
    }

    var strXml='<SALIDA>';
	strXml+='<ERROR>';
            strXml+='<CODERROR>';
                strXml+=codErr;
            strXml+='</CODERROR>';
            strXml+='<DESERROR>';
                strXml+=desErr;
            strXml+='</DESERROR>';
	strXml+='</ERROR>';    
	strXml+='<DATOS>';
            strXml+='';
        strXml+='</DATOS>';
    strXml+='</SALIDA>';
    return strXml;

}

function valida_divTip6(){
var codErr=0;
var desErr='VALIDACIÓN EXITOSA!';
var sw=0;

    if($('#txtD61GD').val()=='' && sw==0){
        sw=1;
        codErr=1;
        desErr='Favor ingrese 1° ID de Google Drive';
    }
    if($('#txtD62GD').val()=='' && sw==0){
        sw=1;
        codErr=2;
        desErr='Favor ingrese 2° ID de Google Drive';
    }
    if($('#txtD63GD').val()=='' && sw==0){
        sw=1;
        codErr=3;
        desErr='Favor ingrese 3° ID de Google Drive';
    }
//    if($('#txtD6p1').val()=='' && sw==0){
//        sw=1;
//        codErr=4;
//        desErr='Favor ingrese 1° precio';
//    }
//    if($('#txtD6p2').val()=='' && sw==0){
//        sw=1;
//        codErr=5;
//        desErr='Favor ingrese 2° precio';
//    }
//    if($('#txtD6p3').val()=='' && sw==0){
//        sw=1;
//        codErr=6;
//        desErr='Favor ingrese 3° precio';
//    }
    if($('#txtD6B1').val()=='' && sw==0){
        sw=1;
        codErr=7;
        desErr='Favor ingrese texto 1° boton';
    }
    if($('#txtD6B2').val()=='' && sw==0){
        sw=1;
        codErr=8;
        desErr='Favor ingrese texto 2° boton';
    }
    if($('#txtD6B3').val()=='' && sw==0){
        sw=1;
        codErr=9;
        desErr='Favor ingrese texto 3° boton';
    }
    if($('#txtD6Ur1').val()=='' && sw==0){
        sw=1;
        codErr=10;
        desErr='Favor ingrese 1° URL';
    }
    if($('#txtD6Ur2').val()=='' && sw==0){
        sw=1;
        codErr=11;
        desErr='Favor ingrese 2° URL';
    }
    if($('#txtD6Ur3').val()=='' && sw==0){
        sw=1;
        codErr=12;
        desErr='Favor ingrese 3° URL';
    }
    
    if($('#txtD6Po1').val()=='' && sw==0){
        sw=1;
        codErr=12;
        desErr='Favor ingrese ID producto 1';
    }
    if($('#txtD6Po2').val()=='' && sw==0){
        sw=1;
        codErr=12;
        desErr='Favor ingrese ID producto 2';
    }
    if($('#txtD6Po3').val()=='' && sw==0){
        sw=1;
        codErr=12;
        desErr='Favor ingrese ID producto 3';
    }
    
    var strXml='<SALIDA>';
	strXml+='<ERROR>';
            strXml+='<CODERROR>';
                strXml+=codErr;
            strXml+='</CODERROR>';
            strXml+='<DESERROR>';
                strXml+=desErr;
            strXml+='</DESERROR>';
	strXml+='</ERROR>';    
	strXml+='<DATOS>';
            strXml+='';
        strXml+='</DATOS>';
    strXml+='</SALIDA>';
    return strXml;
    
}
function valida_divTip7(){
var codErr=0;
var desErr='VALIDACIÓN EXITOSA!';
var sw=0;

    if($('#txtD7Tit').val()=='' && sw==0){
        sw=1;
        codErr=1;
        desErr='Favor ingrese título';
    }
    if($('#txtD7B1').val()=='' && sw==0){
        sw=1;
        codErr=2;
        desErr='Favor ingrese texto botón';
    }
    if($('#txtD7Tex').val()=='' && sw==0){
        sw=1;
        codErr=3;
        desErr='Favor ingrese descripción';
    }
    if($('#txtD7GD').val()=='' && sw==0){
        sw=1;
        codErr=4;
        desErr='Favor ingrese ID de Google Drive';
    }
    if($('#txtD7Ur1').val()=='' && sw==0){
        sw=1;
        codErr=5;
        desErr='Favor ingrese URL';
    }
    if($('#txtD7Col').val()=='' && sw==0){
        sw=1;
        codErr=6;
        desErr='Favor ingrese ID colección';
    }

    var strXml='<SALIDA>';
	strXml+='<ERROR>';
            strXml+='<CODERROR>';
                strXml+=codErr;
            strXml+='</CODERROR>';
            strXml+='<DESERROR>';
                strXml+=desErr;
            strXml+='</DESERROR>';
	strXml+='</ERROR>';    
	strXml+='<DATOS>';
            strXml+='';
        strXml+='</DATOS>';
    strXml+='</SALIDA>';
    return strXml;

}

//$("#txtD2p1").keyup(function() {
//    formatearMonto('#txtD2p1');
//});
//$("#txtD6p1").keyup(function() {
//    formatearMonto('#txtD2p2');
//});
//$("#txtD6p2").keyup(function() {
//    formatearMonto('#txtD2p3');
//});
//$("#txtD6p3").keyup(function() {
//    formatearMonto('#txtD2p4');
//});




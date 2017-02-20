
$(document).ready(function(){
    
    var itemMenu=$('#itemMenu').val();   
    $("#navigation>li").each(function(index){
        if((itemMenu-1)==index){
            $(this).addClass('current');         
        }else{
            $(this).removeClass("current");
        }
    });
    
});

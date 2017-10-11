$(function(){
    $("#m-c-zhsz-yhk").click(function(){
    return false;
   });
    $("#m-c-zhsz-yhk div").click(function(){
        $(this).siblings().removeClass("m-c-card2").end()
                     .addClass ("m-c-card2");
    });
})
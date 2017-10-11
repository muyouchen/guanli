$(function(){
    $("#m-c-zdtb-mrtzsj").click(function(){
    return false;
   });
    $("#m-c-zdtb-mrtzsj a").click(function(){
        $(this).siblings().removeClass("m-c-zdtz-xbtnactive2").end()
                     .addClass ("m-c-zdtz-xbtnactive2");
    });
})
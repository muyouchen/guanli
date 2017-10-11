$(function(){
    
    
     $("#m-c-zdtb-click").click(function(){
     	if(!$(this).hasClass("m-c-zdtb-kg-active")){
     		$(this).addClass("m-c-zdtb-kg-active");
     	}else{
     		$(this).removeClass("m-c-zdtb-kg-active");
     	}
        
    });
  
})



$(function(){
    
    
     $("#m-c-zdtb-click3 a").click(function(){
     	if(!$(this).hasClass("m-c-zdtz-xbtnactive3")){
     		$(this).addClass("m-c-zdtz-xbtnactive3");
     	}else{
     		$(this).removeClass("m-c-zdtz-xbtnactive3");
     	}
        
    });
  
})



$(function(){
    
    
     $(".m-c-zdtbico1").click(function(){
     	if(!$(this).hasClass("m-c-zdtbico1active")){
     		$(this).addClass("m-c-zdtbico1active");
     	}else{
     		$(this).removeClass("m-c-zdtbico1active");
     	}
        
    });
  
})


$(function(){
    
    
     $(".m-c-zdtbico2").click(function(){
     	if(!$(this).hasClass("m-c-zdtbico2active")){
     		$(this).addClass("m-c-zdtbico2active");
     	}else{
     		$(this).removeClass("m-c-zdtbico2active");
     	}
        
    });
  
})


$(function(){
    
    
     $(".m-c-zdtbico3").click(function(){
     	if(!$(this).hasClass("m-c-zdtbico3active")){
     		$(this).addClass("m-c-zdtbico3active");
     	}else{
     		$(this).removeClass("m-c-zdtbico3active");
     	}
        
    });
  
})




$(function(){
    $("#m-c-zdtb-je").click(function(){
    return false;
   });
    $("#m-c-zdtb-je div").click(function(){
        $(this).siblings().removeClass("m-c-zdtz-xbtnactive").end()
                     .addClass ("m-c-zdtz-xbtnactive");
    });
})



$(function(){
    $("#m-c-zdtb-lcfw").click(function(){
    return false;
   });
    $("#m-c-zdtb-lcfw a").click(function(){
        $(this).siblings().removeClass("m-c-zdtz-xbtnactive2").end()
                     .addClass ("m-c-zdtz-xbtnactive2");
    });
})


$(function(){
    $("#m-c-zdtb-mrtzsj").click(function(){
    return false;
   });
    $("#m-c-zdtb-mrtzsj a").click(function(){
        $(this).siblings().removeClass("m-c-zdtz-xbtnactive2").end()
                     .addClass ("m-c-zdtz-xbtnactive2");
    });
})








//协议

$(function(){
    $(".m-c-xysbtn a").click(function(){       
                    
        if(!$(".m-c-xysbtni1").hasClass("m-c-x-active")){
     		$(".m-c-xysbtni1").addClass("m-c-x-active");
     		$(".m-c-xysbtni2").removeClass("m-c-x-active");
     		$(".m-c-xysi1").css("display", "block");
     		$(".m-c-xysi2").css("display", "none");
     	}else{
     		$(".m-c-xysbtni2").addClass("m-c-x-active");
     		$(".m-c-xysbtni1").removeClass("m-c-x-active");
     		 $(".m-c-xysi2").css("display", "block");
     		 $(".m-c-xysi1").css("display", "none");
     	}             
                   
    });
    
})














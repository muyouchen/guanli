

/*
$(function(){
	var arrObj=$(".m-c-zhszsjzk");
	$.each(arrObj,function(i,ele){
		if($(ele).css("display")=="block"){
		
			$(".sz").css("display","none");
			$(".szz").css("display","block");
			
			
		}else{
			
			$(".sz").css("display","block");
			$(".szz").css("display","none");
			
			
		}
	})
	
})
*/
	
	
$(document).ready(function() {
		
     $(".m-c-zhsz-sz").click(function() {
     	
 		if($(this).next(".m-c-zhszsjzk").css("display")=='none'){
	
			$(this).children(".xg").css("display","none");
			$(this).children(".xgz").css("display","block");
			
			
			
		}else{
			
			$(this).children(".xg").css("display","block");
			$(this).children(".xgz").css("display","none");
			
			
		}
		$(this).next().slideToggle(200);
        $(this).next(".m-c-zhszsjzk").siblings(".m-c-zhszsjzk").slideUp('fast');
        $(this).siblings(".m-c-zhsz-sz").children(".xg").css("display","block");
        $(this).siblings(".m-c-zhsz-sz").children(".xgz").css("display","none");
     
     });
     
     
     
     
});


	


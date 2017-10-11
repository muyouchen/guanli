function chosetab4s ( i )
	{
		chosetab4(i);
	}
	
	function chosetab4  ( i )
	{
		switch(i){
			case 1:
			document.getElementById("m-c-p-m-tab41").style.display="block";
			document.getElementById("m-c-p-m-tab42").style.display="none";
			document.getElementById("m-c-CTbtn1").style.background="#f62a35"
						
			break;
			case 2:
			document.getElementById("m-c-p-m-tab41").style.display="none";
			document.getElementById("m-c-p-m-tab42").style.display="block";			
						
			break;
			
		}
	}
	


//选中银行卡

$(function(){
    $(".m-c-xzyhall").click(function(){
    return false;
   });
    $(".m-c-xzyhall i").click(function(){
        $(this).siblings().removeClass("m-c-czyhicoactiv").end()
                     .addClass ("m-c-czyhicoactiv");
    });
})

//选中平台

$(function(){
    $(".m-c-xzptall").click(function(){
    return false;
   });
    $(".m-c-xzptall i").click(function(){
        $(this).siblings().removeClass("m-c-czyhicoactiv").end()
                     .addClass ("m-c-czyhicoactiv");
    });
})
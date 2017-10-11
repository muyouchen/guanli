
	function chosetabs ( i )
	{
		chosetab(i);
	}
	
	function chosetab  ( i )
	{
		switch(i){
			case 1:
			document.getElementById("m-c-p-m-tab1").style.display="block";
			document.getElementById("m-c-p-m-tab2").style.display="none";
			
			break;
			case 2:
			document.getElementById("m-c-p-m-tab1").style.display="none";
			document.getElementById("m-c-p-m-tab2").style.display="block";
			
			break;
			
		}
	}
	
//	$("m-c-qh-btn").hover(function(){
//  $(this).addClass("m-c-qh-btn-active");
//},function(){
//  $(this).removeClass("m-c-qh-btn-active");
//
//});


	function chosetab2s ( i )
	{
		chosetab2(i);
	}
	
	function chosetab2  ( i )
	{
		switch(i){
			case 1:
			document.getElementById("m-c-p-m-tab21").style.display="block";
			document.getElementById("m-c-p-m-tab22").style.display="none";
			document.getElementById("m-c-p-m-tab23").style.display="none";			
	
			break;
			case 2:
			document.getElementById("m-c-p-m-tab21").style.display="none";
			document.getElementById("m-c-p-m-tab22").style.display="block";
			document.getElementById("m-c-p-m-tab23").style.display="none";
			
			break;
			case 3:
			document.getElementById("m-c-p-m-tab21").style.display="none";
			document.getElementById("m-c-p-m-tab22").style.display="none";
			document.getElementById("m-c-p-m-tab23").style.display="block";
			
			break;
			
		}
	}


	function chosetab3s ( i )
	{
		chosetab3(i);
	}
	
	function chosetab3  ( i )
	{
		switch(i){
			case 1:
			document.getElementById("m-c-p-m-tab31").style.display="block";
			document.getElementById("m-c-p-m-tab32").style.display="none";
			document.getElementById("m-c-p-m-tab33").style.display="none";			
	
			break;
			case 2:
			document.getElementById("m-c-p-m-tab31").style.display="none";
			document.getElementById("m-c-p-m-tab32").style.display="block";
			document.getElementById("m-c-p-m-tab33").style.display="none";
			
			break;
			case 3:
			document.getElementById("m-c-p-m-tab31").style.display="none";
			document.getElementById("m-c-p-m-tab32").style.display="none";
			document.getElementById("m-c-p-m-tab33").style.display="block";
			
			break;
			
		}
	}	
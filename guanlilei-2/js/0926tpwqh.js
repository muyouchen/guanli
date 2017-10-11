$(function(){
	$(".mc2-ttbo").mouseover(function(){
		if($(".mc2-ttbo").hasClass('tpw-qh')){
			$('.mc2-ttb').show();
			$('.mc2-ttbp').hide();
			$('.mc2-ppb').hide();
			$('.mc2-wzb').hide();
			$('.mc2-ttbpo').removeClass('tpw-qh');
			$('.mc2-ppbo').removeClass('tpw-qh');
			$('.mc2-wzbo').removeClass('tpw-qh')
		}else{
			
			$(".mc2-ttbo").addClass('tpw-qh')
			$('.mc2-ttb').show();
			$('.mc2-ttbp').hide();
			$('.mc2-ppb').hide();
			$('.mc2-wzb').hide();
			$('.mc2-ttbpo').removeClass('tpw-qh');
			$('.mc2-ppbo').removeClass('tpw-qh');
			$('.mc2-wzbo').removeClass('tpw-qh')
		}	
	})
	$(".mc2-ttbpo").mouseover(function(){
		if($(".mc2-ttbpo").hasClass('tpw-qh')){
			$('.mc2-ttbp').show();
			$('.mc2-ttb').hide();
			$('.mc2-ppb').hide();
			$('.mc2-wzb').hide();
			$('.mc2-ttbo').removeClass('tpw-qh');
			$('.mc2-ppbo').removeClass('tpw-qh');
			$('.mc2-wzbo').removeClass('tpw-qh')
		}else{
			
			$(".mc2-ttbpo").addClass('tpw-qh')
			$('.mc2-ttbp').show();
			$('.mc2-ttb').hide();
			$('.mc2-ppb').hide();
			$('.mc2-wzb').hide();
			$('.mc2-ttbo').removeClass('tpw-qh');
			$('.mc2-ppbo').removeClass('tpw-qh');
			$('.mc2-wzbo').removeClass('tpw-qh')
		}	
	})
	$(".mc2-ppbo").mouseover(function(){
		if($(".mc2-ppbo").hasClass('tpw-qh')){
			$('.mc2-ppb').show();
			$('.mc2-ttb').hide();
			$('.mc2-ttbp').hide();
			$('.mc2-wzb').hide();
			$('.mc2-ttbo').removeClass('tpw-qh');
			$('.mc2-ttbpo').removeClass('tpw-qh');
			$('.mc2-wzbo').removeClass('tpw-qh')
		}else{
			
			$(".mc2-ppbo").addClass('tpw-qh')
			$('.mc2-ppb').show();
			$('.mc2-ttb').hide();
			$('.mc2-ttbp').hide();
			$('.mc2-wzb').hide();
			$('.mc2-ttbo').removeClass('tpw-qh');
			$('.mc2-ttbpo').removeClass('tpw-qh');
			$('.mc2-wzbo').removeClass('tpw-qh')
		}	
	})
	
	$(".mc2-wzbo").mouseover(function(){
		if($(".mc2-wzbo").hasClass('tpw-qh')){
			$('.mc2-wzb').show();
			$('.mc2-ttb').hide();
			$('.mc2-ttbp').hide();
			$('.mc2-ppb').hide();
			$('.mc2-ttbo').removeClass('tpw-qh');
			$('.mc2-ttbpo').removeClass('tpw-qh');
			$('.mc2-ppbo').removeClass('tpw-qh')
		}else{
			
			$(".mc2-wzbo").addClass('tpw-qh')
			$('.mc2-wzb').show();
			$('.mc2-ttb').hide();
			$('.mc2-ttbp').hide();
			$('.mc2-ppb').hide();
			$('.mc2-ttbo').removeClass('tpw-qh');
			$('.mc2-ttbpo').removeClass('tpw-qh');
			$('.mc2-ppbo').removeClass('tpw-qh')
		}	
	})
	
	//头像
	
	$('.mc-user-icoin').click(function(){
		$('.box').addClass('m-c-popicTC');
		
	})
	$('.m-c-popicbtn').click(function(){
		
		$('.box').removeClass('m-c-popicTC');
		
	})

})
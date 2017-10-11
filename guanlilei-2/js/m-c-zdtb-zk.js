	
	$(document).ready(function() {
     $(".m-c-zdtbzk").fadeOut(0);
     $("#m-c-zdtb-click").click(function() {
          $(".m-c-zdtbzk").not($(this).next()).slideUp('fast');
          $(this).next().slideToggle(200);
     });
});




	$(document).ready(function() {
     $(".m-c-zdtbzk2").fadeOut(0);
     $("#m-c-zdtb-click2").click(function() {
          $(".m-c-zdtbzk2").not($(this).next()).slideUp('fast');
          $(this).next().slideToggle(200);
     });
});




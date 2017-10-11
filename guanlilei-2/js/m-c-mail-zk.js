
	$(document).ready(function() {
     $(".m-c-znxx-zk").fadeOut(0);
     $(".m-c-mail-sj").click(function() {
          $(".m-c-znxx-zk").not($(this).next()).slideUp('fast');
          $(this).next().slideToggle(200);
     });
});

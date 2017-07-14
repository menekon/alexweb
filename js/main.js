$(document).ready(function(){
	$(".menu__list a, .footer__menu a").on("click", function(e){
		e.preventDefault();
		$("body, html").animate({
			scrollTop: $(this.hash).offset().top
		},1200);
	});
});
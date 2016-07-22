$(document).ready(function() {
	/* Fade in for header */
	$(".header").fadeIn(2000);
	$("#logo").fadeIn(2500);
	$(".quote").delay(500).fadeIn(2000);

	$(window).resize(function() {
		$(".nav").css("height", $(".openbtn").outerHeight(true))
		$(".nav").css("max-height", $(".openbtn").outerHeight(true))
	});
});
$(document).ready(function() {
	var $window = $(window);
	var $navbar = $('.masthead');
	var $scrollTop = $('.scroll-to-top-btn');
	if($navbar.length > 0)
	{
		$(window).on('scroll', function()
		{
	    	if ($(this).scrollTop() > window.innerHeight * 0.6)
	    	{
	      		$navbar.addClass('stuck');
	    	}
	    	else
	    	{
	    		$navbar.removeClass('stuck');
	    	}
	    });
	};

	$window.on('scroll', function()
	{
	    if ($(this).scrollTop() > window.innerHeight * 0.8)
	    {
	      	$scrollTop.addClass('visible');
	    }
	    else
	    {
	    	$scrollTop.removeClass('visible');
	    }
	});
	$scrollTop.on('click', function(e) {
			e.preventDefault();
			$('html').velocity("scroll", { offset: 0, duration: 1000, easing:'easeOutExpo', mobileHA: false });
		});


});

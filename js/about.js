$(document).scroll(function() {
	scroll_start = $(this).scrollTop();
    if(scroll_start > (window.innerHeight - $(".masthead").outerHeight(true)))
    	{
    		$('.masthead').css('background-color', 'rgba(34,34,34,0.9)');
       	}
       	else
       	{
          $('.masthead').css('background-color', 'transparent');
       	}
});

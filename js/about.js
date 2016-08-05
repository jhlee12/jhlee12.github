$(document).ready(function() {
    $(".titleText").fadeIn(1000);
    $('.titleText').delay(300).fadeOut(1000,function(){$(this).text('jeong hyun lee').fadeIn(1000)});

    $('body').scrollspy({target: "#aboutNav", offset: $('.masthead').height() + 50});

    var $window = $(window);
    var $navbar = $('.masthead');
    var $scrollTop = $('.scroll-to-top-btn, .about');
    if($navbar.length > 0)
    {
        $window.on('scroll', function()
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

    $scrollTop.on('click', function(event) {
        if (this.hash !== "")
        {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop: 0}, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    $("a.page-scroll").on('click', function(event) {
        if (this.hash !== "")
        {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop: $(hash).offset().top - $navbar.height()}, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});
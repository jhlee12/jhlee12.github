$(document).ready(function() {
    $('.title-text').fadeIn(1000).delay(300).fadeOut(1000,function() {
        $(this).text('jeong hyun lee').fadeIn(1000);
        $(this).attr('title', 'jeong hyun lee');
    });

    $('.masthead').slideDown(1000);

    $('[data-toggle="tooltip"]').tooltip();

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
                $('.nav1').removeClass('active');
                $('.nav2').addClass('active');
            }
            else
            {
                $navbar.removeClass('stuck');
                $('.nav2').removeClass('active');
                $('.nav1').addClass('active');
            }
        });
    };

    $window.on('scroll', function()
    {
        if ($(this).scrollTop() > window.innerHeight * 0.7)
        {
            $('.scroll-to-top-btn').addClass('visible');
        }
        else
        {
            $('.scroll-to-top-btn').removeClass('visible');
        }
    });

    $scrollTop.on('click', function(event) {
        if (this.hash !== '')
        {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop: 0}, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    $('a.page-scroll').on('click', function(event) {
        if (this.hash !== '')
        {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop: $(hash).offset().top - $navbar.height()}, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    $('.modal-frame').click(function() {
        $('#myPicModal').css('display', 'block');
        var $img = $('img', this);
        $('#img').attr('src', $img.attr('src')).attr('title', $img.attr('title'));
    });

    $('#myPicModal').click(function() {
        $('#myPicModal').css('display', 'none');
    });
});
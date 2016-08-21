$(document).ready(function() {
    $('.quote').width(parseFloat(window.innerWidth)).height(parseFloat($('.text').css('height')));

    /* Fade in for header */
    $('.header').fadeIn(2000);
    $('#logo').fadeIn(2500);
    $('.text').delay(500).fadeIn(2000);
    $('.quote').height(parseFloat($('.text').css('height')));

    $('.masthead-brand').delay(1300).fadeIn(1500);

    $(window).resize(function() {
        $('.introduction, .quote').width(parseFloat(window.innerWidth));
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".masthead").css({"background":"url(../img/triangular.png) repeat center center fixed"});   
        }
        else{
            $(".masthead").css({"background-color:":"transparent"});
        }

    })
})

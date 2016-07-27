$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".masthead").css({"background-color":"#b3b3ba"});   
        }
        else{
            $(".masthead").css({"background":"url(../img/triangular.png) repeat center center fixed"});
        }

    })
})
function openNav()
{
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,2)";
    document.getElementById("main").style.opacity = 0.4;
    document.getElementById("nav").style.display = "none";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.opacity = 1;
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("nav").style.display = "flex";
}

$(".about").height();

$(document).ready(function() {
    $(".aboutme").fadeIn(4000);
    $(".image").fadeIn(4000);
    $(window).resize(function() {
        $(".nav").css("height", $(".openbtn").outerHeight(true));
        $(".nav").css("max-height", $(".openbtn").outerHeight(true));
    });
    // $("#click").click(function() {
    //     $("#cf2 img.profile").toggleClass("transparent");
    //     $("#cf2 img#me").toggleClass("nont");
    // });
});
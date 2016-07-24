$(document).ready(function() {
    $(".page_title").delay(1000).fadeIn(1000);

    $(".openbtn").click(function() {
        if (window.innerWidth < 743.125)
        {
            $("#mySidenav").css("display", "block");
            $("#mySidenav").animate({height: "225px"}).css("maxHeight","225px");
            $("#main").animate({marginTop: "225px"}).css("backgroundColor", "rgba(0,0,0,2)").css("opacity", "0.4");
        }
        else
        {
            $("#mySidenav").css("display", "block");
            $("#mySidenav").width("250px");
            $("#main").css("marginLeft", "250px");
        }
        $("#nav").css("display", "none");
        $("#main").css("opacity", "0.4").css("backgroundColor", "rgba(0,0,0,2)");
    });

    $(".closebtn, #main").click(function() {
        if (window.innerWidth < 743.125)
        {
            $("#mySidenav").height(0).css("maxHeight", "0");
            $("#main").animate({marginTop: "0"}, function() {document.getElementById("mySidenav").style.display = "none";});
        }
        else
        {
            $("#mySidenav").width(0);
            $("#main").css("marginLeft", 0);
            setTimeout(function() {document.getElementById("mySidenav").style.display = "none";}, 500);
        }
        $("#nav").css("display", "flex");
        $("#main").css("opacity", 1).css("backgroundColor", "rgba(0,0,0,0)");
    })

    $(window).resize(function() {
        if (document.getElementById("mySidenav").style.display == "block")
        {
            if (window.innerWidth < 743.125)
            {
                $("#mySidenav").css("minHeight", "0").css("width", "100%").css("maxHeight", "225px").height("225px");
                $("#main").css("marginLeft", "0").css("marginTop", "225px");
            }
            else
            {
                $("#mySidenav").css("maxHeight", "100%").css("minHeight", "100%").height("100%").css("minWidth", "0").width("250px");
                $("#main").css("marginLeft", "250px").css("marginTop", "0");
            }
        }
    });
});
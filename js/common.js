$(document).ready(function() {

    $("#main-menu>ul>li>a").hover(function(){
        $("#main-menu>ul>li>a").removeClass("active");
        $(this).addClass("active");
    });


    $("#main-menu").on("mouseleave", function(){
        $("#main-menu>ul>li>a").removeClass("active");
    });


    $("button.all-menu").on("click", function(){
        $("#header").addClass("all");

        var depth1count = $("#main-menu>ul>li").length - 1;
        $("#main-menu>ul>li").css("width", "calc(100%/"+ depth1count +")");

    });


    $("button.close").on("click", function(){
        $("#main-menu>ul>li").css("width", "auto");
        $("#header").removeClass("all");

    });


    $(window).scroll(function() {
        var sheight = $(document).scrollTop();

        if (sheight > 138) {

            $("#header").addClass("fix");

            } else {

                $("#header").removeClass("fix");
            }
    });

});


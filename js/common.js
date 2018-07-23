$(document).ready(function() {

    $("#main-menu").hover(function(){
        $(this).addClass("active");
    });


    $("#main-menu").on("mouseleave", function(){
        $(this).removeClass("active");
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

            $(".layout.sub #header").addClass("fix");

            } else {

                $(".layout.sub #header").removeClass("fix");
            }
    });

});


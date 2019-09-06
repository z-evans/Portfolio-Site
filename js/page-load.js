$(document).ready(function () {
    $("#head-span1").addClass("h2-head");
    $("#head-span2").addClass("h2-head-delay");
    $("#head-title").addClass("title-fade-in");
    $("#ud_dots")
        .delay(750)
        .fadeOut(300, function () {
            $("#ud_pre_down").animate({
                top: "-100%"
            }, 600, function () {
                $("#ud_preloader").fadeOut(10);
            });
        });
});

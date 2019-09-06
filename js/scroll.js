if ($(this).scrollTop() >= 0) {
   $("#navHome").addClass("hover");
}
$(window).scroll(function() {
    $("#navHome").removeClass("hover");
    $("#navAchievements").removeClass("hover");
    $("#navProjects").removeClass("hover");
    $("#navContact").removeClass("hover");

    if ($(this).scrollTop() >= 0) {
        $("#navHome").addClass("hover");
    }
    if ($(this).scrollTop() >= $(".experience").offset().top) {
        $("#navAchievements").addClass("hover");
    }
    if ($(this).scrollTop() >= $(".projects").offset().top) {
        $("#navProjects").addClass("hover");
    }
    if ($(this).scrollTop() >= $(".contact").offset().top) {
        $("#navContact").addClass("hover");
    }
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $("#navContact").addClass("hover");
    }
});

if ($(this).scrollTop() >= 0) {
  $("#navHome").addClass("hover");
}

function remove() {
  $("#navHome").removeClass("hover");
  $("#navAchievements").removeClass("hover");
  $("#navProjects").removeClass("hover");
  $("#navAbout").removeClass("hover");
}

$(window).scroll(function () {
  remove();
  if ($(this).scrollTop() >= 0) {
    remove();
    $("#navHome").addClass("hover");
  }
  if ($(this).scrollTop() >= $("#aboutme").offset().top - 1) {
    remove();
    $("#navAbout").addClass("hover");
  }
  if ($(this).scrollTop() >= $("#achievements").offset().top - 1) {
    remove();
    $("#navAchievements").addClass("hover");
  }
  if ($(this).scrollTop() >= $("#projects").offset().top - 1) {
    remove();
    $("#navProjects").addClass("hover");
  }
});

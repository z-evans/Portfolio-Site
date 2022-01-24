$(document).ready(function () {
  var imgs = document.images,
    len = imgs.length,
    counter = 0;

  [].forEach.call(imgs, function (img) {
    if (img.complete) incrementCounter();
    else img.addEventListener("load", incrementCounter, false);
  });

  function incrementCounter() {
    counter++;
    if (counter === len) {
      $("#head-span1").addClass("h2-head");
      $("#head-span2").addClass("h2-head-delay");
      $("#head-title").addClass("title-fade-in");
      $("#ud_dots")
        .delay(750)
        .fadeOut(300, function () {
          $("#ud_pre_down").animate(
            {
              top: "-100%",
            },
            600,
            function () {
              $("#ud_preloader").fadeOut(10);
            }
          );
        });
    }
  }
});

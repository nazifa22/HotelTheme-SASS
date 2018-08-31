$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $("header").css("backgroud", "#fff");
    } else {
      $("header").css("backgroud", "transparent");
    }    
  });
});

new WOW().init();
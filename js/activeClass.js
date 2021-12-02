$(".nav-home, .nav-info, .nav-about").click(function() {
  $("html, body").animate( {scrollTop: $('[id="' + $(this).attr("data-navtag") + '"]').offset().top - $(".navbar").outerHeight(true) }, 500);
});

$(window).scroll(function() {
  if ($(this).scrollTop() < $("#info").offset().top - $(".navbar").outerHeight(true) - 1 ){
    $(".navbar a.active").removeClass("active");
    $(".nav-home").addClass("active");
  }
  if ($(this).scrollTop() >= $("#info").offset().top - $(".navbar").outerHeight(true) - 1 ){
    $(".navbar ul li a.active").removeClass("active");
    $(".nav-info").addClass("active");
  }
  if ($(this).scrollTop() >= $("#about").offset().top - $(".navbar").outerHeight(true) - 1 ){
    $(".navbar ul li a.active").removeClass("active");
    $(".nav-about").addClass("active");
  }
});
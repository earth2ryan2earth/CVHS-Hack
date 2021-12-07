// Jump to insite-links on page load
$(document).ready( function() {
  if(window.location.hash.split('#')[1] === "info"){
    $("html, body").animate( {scrollTop: $("#info").offset().top - $(".navbar").outerHeight(true) }, 0 );
  }
  if(window.location.hash.split('#')[1] === "about"){
    $("html, body").animate( {scrollTop: $("#about").offset().top - $(".navbar").outerHeight(true) }, 0 );
  }
});
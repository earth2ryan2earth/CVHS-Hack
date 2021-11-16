$(document).ready(function() {
  // 24 hour clock
  setInterval(function() {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zeros
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Compose the string for display
    var currentTimeString = "Time: " + hours + ":" + minutes + ":" + seconds;
    $(".datetime").html(currentTimeString);

  }, 1000);
});
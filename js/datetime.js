$(document).ready(function() {
  // 24 hour clock
  setInterval(function() {
    // var nextEvent = "\t\tNext Event: Christmas";
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[currentTime.getMonth()];
    var day = currentTime.getDate();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zeros
    day = (day < 10 ? "0" : "") + day;
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Compose the string for display
    var currentTimeString = `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
    $(".datetime").html(currentTimeString /* + nextEvent */ );

  }, 1000);
});
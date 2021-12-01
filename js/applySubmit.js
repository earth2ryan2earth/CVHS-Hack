$(".submit").click(function() {
  var fname = $(".fname").val();
  var lname = $(".lname").val();
  var email = $(".email").val();
  var org = $(".org").val();
  var radio = $("input[type=radio]:checked").val();
  alert("SAVED DATA: " + fname + ", " + lname + ", " + email + ", " + org + ", " + radio);
});
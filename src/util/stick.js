$(function () {
 $("#booking").load("/View/booking.ejs");
});
$(document).scroll(function () {
 if ($(window).scrollTop() > 400) {
  $(".navigation").css("background", "rgba(0, 0, 0, 0.5)");

 } else if ($(window).scrollTop() < 400) {

  $(".navigation").css("background", "rgba(0, 0, 0, 0.3)");
 }
});


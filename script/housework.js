$('.one').css({ 'display': 'none' }),
$('.one').animate({ 'top': 0 }, { "duration": 2000, "queue": false });
$('.one').fadeIn(2000);

$('.two').css({ 'display': 'none' }),
$('.two').animate({ 'top': 0 }, { "duration": 2000, "queue": false });
$('.two').delay(3000).fadeIn(2000);

$('.three').css({ 'display': 'none' }),
$('.three').animate({ 'top': 0 }, { "duration": 2000, "queue": false });
$('.three').delay(6000).fadeIn(2000);

// Timer
var counter = 12;
function timer() {
  var bar = $("#pro_bar");
  var interval = setInterval(function () {
    $("#pro_bar").css("width", (counter - 1) * 10 + "%");
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
      clearInterval(interval);
      $("#wrong_ans").slideToggle(500);
      return;
    } else {
      $("#time").text(counter);
    }
  }, 1000);
}
$(".fade01").slideDown(1000);

// Credit
$(".btn-credit").click(function () {
  $(".credit").slideToggle(500);
});
$(".credit").click(function () {
  $(".credit").slideToggle(500);
});

//Start quiz fix later
$("#start_quiz").click(function () {
  $("#start_quiz").fadeOut(500);
  $(".fade02").slideDown(1000);
  $(".quiz").delay(2000).slideDown(1000);
  timer();
});

// Press right answer
$("#btn_yes").click(function () {
  $(".page7").fadeOut(500);
  $(".page8").delay(100).fadeIn(500);
  counter = 99999;
  clearInterval(interval);
});

//Press wrong answer
$("#btn_nope").click(function () {
  $("#wrong_ans").slideToggle(500);
  counter = 99999;
  clearInterval(interval);
});

//   Return to quiz from wrong answer popup
$("#return_to_quiz").click(function () {
  $("#wrong_ans").slideToggle(500);
  counter = 10;
  timer();
});
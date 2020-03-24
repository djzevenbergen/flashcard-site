$(document).ready(function() {
  $("#button").click(function() {
    $("body").toggleClass("green-background");
    $("p").toggleClass("initially-hidden");
    $("h1").toggleClass("initially-hidden");

  })
});
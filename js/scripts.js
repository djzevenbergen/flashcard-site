$(document).ready(function() {
  $("#button").click(function() {
    $("body").toggleClass("green-background");
    $("p").toggleClass("initially-hidden");
    $("h1").toggleClass("initially-hidden");
  });
  $(".panel-body").click(function() {
        $(this).children("p").toggleClass("initially-hidden");
        $(this).children("h1").toggleClass("initially-hidden");      
  });

});

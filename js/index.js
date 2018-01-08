$("h2").click(function() {
  $(this).next().slideToggle();
  $(this).children(".fa-caret-right").toggleClass("down").toggleClass("right");
});

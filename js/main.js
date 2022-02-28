// Start Scroll to Top
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End Scroll To Top
// Start NavBar
$(function () {
  var winH    = $(window).height();
$('.overlay').height(winH);

$('.btn').click(function() {
  $('.overlay').css("display", "block");
});
$('.rmv').click(function() {
  $('.overlay').css("display", "none");
});
});
$( window ).scroll(function() {
  $('.overlay').css("display", "none");
});
// End NavBar
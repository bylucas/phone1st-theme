//Back to Top
backbutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backbutton.style.display = "block";
  } else {
    backbutton.style.display = "none";
  }
}

var timeOut;

function topFunction() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0)
  {
  	window.scrollBy(0,-50);
 	timeOut=setTimeout('topFunction()', 10);
  }

  else clearTimeout(timeout);
}

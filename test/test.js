//Page loading
var pageLoad

function pageFunction() {
  pageLoad = setTimeout(showPage, 800);
}

function showPage() {
  document.getElementById("loader").style.opacity = "0";
}

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

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
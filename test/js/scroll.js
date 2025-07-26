//scroll

function smoothScroll(target) {
  const element = document.getElementById(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const target = anchor.getAttribute("href").substring(1);
      smoothScroll(target);
    });
  });
});

//show/hide the back button
const backButton = document.getElementById('topBtn')
function isVisible() {
  window.onscroll = ("scroll", () => {
    if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          backButton.style.display = "block";
        } else {
          backButton.style.display = "none";
        }
  })
}

isVisible()
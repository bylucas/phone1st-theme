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

//When using the scroll script a separate 'back to top' script isn't required.
//Below will hide and display the button, the scroll script scrolls to the top of the page

// ---html
// <div id="top"> //top of page
// <a id="topBtn" href="#top">Top</a> //bottom of page
// ---

// ---js
// const backButton = document.getElementById('topBtn')
// function isVisible() {
//   window.onscroll = ("scroll", () => {
//     if (
//           document.body.scrollTop > 200 ||
//           document.documentElement.scrollTop > 200
//         ) {
//           backButton.style.display = "block";
//         } else {
//           backButton.style.display = "none";
//         }
//   })
// }

//isVisible()
// ---

// ---scss
// #topBtn {
//   text-align: center;
//   border-top-left-radius:25%;
//   position: fixed;
//   bottom: 0px;
//   right: 0;
//   background: $black;
//   display: none;
//   padding: 0.7rem;
//   font-size: $third;
//   letter-spacing: 1px;
//   color: $white;
//   opacity: 0.7;

//   @media (hover: hover) {
//     &:active,
//     &:focus,
//     &:hover {
//       opacity: 1;
//     }
//   }
// }
// ---
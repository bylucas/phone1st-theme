//active header
// select the variables
const body = document.querySelector("body");
let last_scroll = 0;
const header = document.querySelector(".active-header");
const hamburger = document.querySelector("#hamburger");
const items = document.querySelectorAll("#menu", "li", "a");
const checkMenu = document.querySelectorAll(".drop_menu");
//class to rotate the arrows
const checkOpen = document.querySelectorAll(".drop");

//if the window is resized when the header is fully open then close it. Remove if not required
window.addEventListener("resize", () => {
  body.classList.remove("display_menu");
  close_menu();
});

//if active-header is only required remove '|| body.classList.contains("display_menu")
window.addEventListener("scroll", () => {
  if (
    Math.abs(last_scroll - scrollY) <= 5 ||
    body.classList.contains("display_menu")
  )
    return;
  scrollY < last_scroll
    ? (header.style.top = "0")
    : (header.style.top = "-" + header.clientHeight + "px");
  last_scroll = scrollY;
});

hamburger.addEventListener("click", () => {
  close_menu();
  body.classList.toggle("display_menu");
});

// Adding a menu
items.forEach((item) => {
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("drop")) {
      e.target.nextSibling.nextSibling.classList.toggle("display");
      //for the arrow on the span
      e.target.classList.toggle("open");
    }
  });
});

const close_menu = () => {
  Array.from(checkMenu).forEach((check) => {
    check.classList.remove("display");
  });
  //reset the arrows
  Array.from(checkOpen).forEach((open) => {
    open.classList.remove("open");
  });
};

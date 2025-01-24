//modal

const submit = document.querySelector(".modal");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

submit.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target.className === "popup-wrapper") {
    popup.style.display = "none";
  }
});

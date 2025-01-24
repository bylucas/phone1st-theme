//Back to Top
class Backtotop {
  constructor() {
    this.backbutton = document.getElementById("topBtn");
  }

  init() {
    window.onscroll =
      ("scroll",
      () => {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          this.backbutton.style.display = "block";
        } else {
          this.backbutton.style.display = "none";
        }
      });

    this.backbutton.addEventListener("click", () => {
      this.top();
    });
  }

  top() {
    if (
      document.body.scrollTop != 0 ||
      document.documentElement.scrollTop != 0
    ) {
      window.scrollBy(0, -50);
      this.timeout = setTimeout(() => {
        this.top();
      }, 10);
    }
  }
}

const backtotop = new Backtotop();
backtotop.init();

const form = document.querySelector(".justify");
const result = document.querySelector(".flexbox-one");

const outputOne = document.querySelector(".flexdirection");
const outputTwo = document.querySelector(".flexwrap");
const outputThree = document.querySelector(".justifycontent");
const outputFour = document.querySelector(".alignitems");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  outputOne.innerHTML = "";
  outputTwo.innerHTML = "";
  outputThree.innerHTML = "";
  outputFour.innerHTML = "";

  const Answer = form.one.value;
  const Answertwo = form.two.value;
  const Answerthree = form.three.value;
  const Answerfour = form.four.value;

  switch (Answer) {
    case "A":
      result.style.justifyContent = "flex-start";
      outputThree.innerHTML = "justify-content: flex-start;";
      break;
    case "B":
      result.style.justifyContent = "flex-end";
      outputThree.innerHTML = "justify-content: flex-end;";
      break;
    case "C":
      result.style.justifyContent = "center";
      outputThree.innerHTML = "justify-content: center;";
      break;
    case "D":
      result.style.justifyContent = "space-between";
      outputThree.innerHTML = "justify-content: space-between;";
      break;
    case "E":
      result.style.justifyContent = "space-around";
      outputThree.innerHTML = "justify-content: space-around;";
      break;
    case "F":
      result.style.justifyContent = "space-evenly";
      outputThree.innerHTML = "justify-content: space-evenly;";
      break;
    default:
      alert("Something went wrong");
  }

  switch (Answertwo) {
    case "AA":
      result.style.alignItems = "flex-start";
      outputFour.innerHTML = "align-items: flex-start;";
      break;
    case "BB":
      result.style.alignItems = "flex-end";
      outputFour.innerHTML = "align-items: flex-end;";
      break;
    case "CC":
      result.style.alignItems = "center";
      outputFour.innerHTML = "align-items: center;";
      break;
    case "DD":
      result.style.alignItems = "baseline";
      outputFour.innerHTML = "align-items: baseline;";
      break;
    case "EE":
      result.style.alignItems = "stretch";
      outputFour.innerHTML = "align-items: stretch;";
      break;
    default:
      alert("Something went wrong");
  }

  switch (Answerthree) {
    case "AAA":
      result.style.flexDirection = "row";
      outputOne.innerHTML = "flex-direction: row;";
      break;
    case "BBB":
      result.style.flexDirection = "row-reverse";
      outputOne.innerHTML = "flex-direction: row-reverse;";
      break;
    case "CCC":
      result.style.flexDirection = "column";
      outputOne.innerHTML = "flex-direction: column;";
      break;
    case "DDD":
      result.style.flexDirection = "column-reverse";
      outputOne.innerHTML = "flex-direction: column-reverse;";
      break;
    default:
      alert("Something went wrong");
  }

  switch (Answerfour) {
    case "AAAA":
      result.style.flexWrap = "nowrap";
      outputTwo.innerHTML = "flex-wrap: nowrap;";
      break;
    case "BBBB":
      result.style.flexWrap = "wrap";
      outputTwo.innerHTML = "flex-wrap: wrap;";
      break;
    case "CCCC":
      result.style.flexWrap = "wrap-reverse";
      outputTwo.innerHTML = "flex-wrap: wrap-reverse;";
      break;
    default:
      alert("Something went wrong");
  }
});

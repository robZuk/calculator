const buttons = [...document.querySelectorAll(".btn")];
const screen = document.querySelector("span");
const equal = document.querySelector(".fa-equals");
const percent = document.querySelector(".fa-percent");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".fa-backspace");
const items = [];
let result = [];
///////////////////////////////////////////////////////////
buttons.forEach(button => {
  button.addEventListener("click", () => {
    items.push(button.getAttribute("data-val"));
    screen.innerHTML =
      result.length > 0
        ? result[result.length - 1] + items.join("")
        : items.join("");

    console.log(`items: ${items}`);
  });
});
///////////////////////////////////////////////////////////
equal.addEventListener("click", () => {
  console.log(`items: ${items}`);
  let value = eval(screen.innerHTML);
  result.push(value);

  console.log(`result:${result}`);
  screen.innerHTML = result[result.length - 1];
  items.length = 0;
});
////////////////////////////////////////////////////////////
percent.addEventListener("click", () => {
  screen.innerHTML = screen.innerHTML / 100;
  items.length = 0;
  result.push(screen.innerHTML);
  console.log(`items: ${items}`);
  console.log(`result:${result}`);
});
////////////////////////////////////////////////////////////
clear.addEventListener("click", () => {
  screen.innerHTML = 0;
  items.length = 0;
  result.length = 0;
  console.log(`items: ${items}`);
  console.log(`result:${result}`);
});
////////////////////////////////////////////////////////////
backspace.addEventListener("click", () => {
  items.pop();

  screen.innerHTML =
    result.length > 0
      ? result[result.length - 1] + items.join("")
      : items.join("");
  if (screen.innerHTML === "") {
    screen.innerHTML = 0;
  }
  console.log(`items: ${items}`);
  console.log(`result:${result}`);
});

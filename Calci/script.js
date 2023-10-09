let string = "";
let buttons = document.querySelectorAll("button");
let input = document.querySelector(".input");

Array.from(buttons).forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      if (string === "") return;
      string = eval(string).toString();
      input.value = string;
    } else if (e.target.innerHTML === "RESET") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else if (e.target.innerHTML === "x") {
      string = string + "*";
      input.value = string;
    } else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});

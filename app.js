const input = document.querySelector("[data-input]");
const btn = document.querySelector("[data-btn]");
const list = document.querySelector(".list");

btn.addEventListener("click", () => {
  let value = input.value;
  createItem(value);
  input.value = "";
});

function createItem(value) {
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  let text = document.createTextNode(`${value}`);
  appendChild(li, checkbox, text);
}

function appendChild(elemLi, chbox, elemtext) {
  elemLi.setAttribute("class", "list__item");
  chbox.setAttribute("type", "checkbox");
  chbox.setAttribute("class", "checkbox");

  list.appendChild(elemLi);
  elemLi.appendChild(chbox);
  elemLi.appendChild(elemtext);

  check(elemLi);
}

function check(item) {
  let checkboxs = document.querySelectorAll(".checkbox");

  checkboxs.forEach((el) => {
    el.addEventListener("click", (e) => {
      let textDecorationLine = e.target.parentNode.style.textDecorationLine;
      console.log(textDecorationLine);
      if (el.checked) {
        e.target.parentNode.style.textDecorationLine = "line-through";
      } else {
        e.target.parentNode.style.textDecorationLine = "none";
      }
    });
  });
}

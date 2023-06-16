const title = document.querySelector("#title"),
    paragraphs = document.querySelectorAll(".paragraph"),
    container = document.querySelector("#container"),
    divs = document.querySelectorAll(".divClass"),
    div1 = document.querySelector("#div1"),
    div2 = document.querySelector("#div2"),
    div3 = document.querySelector("#div3"),
    list = document.querySelector("ol"),
    textbox = document.querySelector("#textbox"),
    image = document.querySelector("img"),
    clearBtn = document.querySelector("#clear"),
    addBtn = document.querySelector("#add"),
    styleBtn = document.querySelector("#change-style");
let newItem = "";

title.innerHTML = "Manipulated DOM";

function changeStyle() {
    container.style.backgroundColor = "#069420";
    container.style.height = "100vh";
    div1.style.backgroundColor = "#02ef5e"
}

styleBtn.addEventListener("click", changeStyle);

function inputChange() {
    newItem = textbox.value;
    console.log(newItem);
}

textbox.addEventListener("change", inputChange);

function addItem() {
    let newElement = document.createElement("li");
    newElement.innerHTML = newItem;
    list.appendChild(newElement);
    textbox.value = "";
}

console.log(list);

addBtn.addEventListener("click", addItem);
window.onload = changeStyle;
 
function clearAll(){
    container.style.backgroundColor = "unset";
    container.style.height = "unset";
    div1.style.backgroundColor = "unset"
}
clearBtn.addEventListener("click", clearAll);

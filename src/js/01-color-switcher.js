const ref = {
    startBt: document.querySelector('[data-start]'),
    stopBt: document.querySelector('[data-stop]'),
    body: document.body,
}
const { startBt, stopBt, body } = ref;
let startColorChange = null;

startBt.addEventListener('click', onColorsChange);
stopBt.addEventListener('click', ofColorsChange);


function onColorsChange() {
    startBt.setAttribute("disabled", true);
    startColorChange = setInterval(bodyColor, 1000);
}
function ofColorsChange() { 
    startBt.removeAttribute("disabled");
    clearInterval(startColorChange);
}

function bodyColor() {
    body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
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








///////////////===========================////////////////////////////////////////////////
// const BASE_URL ="https://swapi.dev/api"
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//     },
// }
// const getData = (url) => {
//     return fetch(`${BASE_URL}/${url}`)
//         .then(response => {
//             if (!response.ok) {
//             throw new Error("No data Loading")
//             }
//             return response.json()
//     })
// }

// // const data = fetch('https://swapi.dev/api/people')
//     // .then(response => response.json())
    

// getData('films')
//     .then(data => console.log(data))
//     .catch(err =>{ alert(err)})


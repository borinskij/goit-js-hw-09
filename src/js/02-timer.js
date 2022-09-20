import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
    input: document.querySelector('#datetime-picker'),
    startBt: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

const { input, startBt} = ref;
const data = new Date;
let inputDate = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        inputDate = selectedDates[0];
        console.log('inputDate', inputDate)
        console.log(selectedDates[0].getTime());
        console.log('selectedDates', selectedDates)
        activeBtStart()
        
    },
};

flatpickr(input, options)

startBt.setAttribute("disabled", true);

startBt.addEventListener('click', goTimer);

function activeBtStart() {
    if (inputDate.getTime() < data.getTime()) {
        if (!startBt.hasAttribute("disabled")) {
            startBt.setAttribute("disabled", true);
        }
        return Notify.failure("Please choose a date in the future");
    } 
    startBt.removeAttribute("disabled");
    
}

const marcup = `<button type="button" data-stop>Stop</button>`;

let timerId = null;
function stopTimer() {
    console.log()
      return clearInterval(timerId)
}
   
startBt.insertAdjacentHTML('afterend', marcup);
const stopBt = document.querySelector('[data-stop]');
    
function goTimer() {
    timerId = setInterval(start, 1000);

    stopBt.addEventListener('click', stopTimer);
    
}
 
let difference = null;

function start() {
    const data = new Date;
    difference = inputDate.getTime() - data.getTime();
    console.log('difference :', difference);

    if (difference < 1000) {
        return clearInterval(timerId);  
    } 
    countdown(); 


}




function countdown() {
    const keys = convertMs(difference);
    for (let key in keys) {
         ref[key].textContent= addLedingZero(keys[key]) ;
        

    }
}

function addLedingZero(value) {
    return value.toString().padStart(2, '0')
}



function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

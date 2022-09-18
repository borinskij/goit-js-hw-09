import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// // all modules
// import Notiflix from 'notiflix';

// // one by one
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import { Block } from 'notiflix/build/notiflix-block-aio';


const ref = {
    input: document.querySelector('#datetime-picker'),
    startBt: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

const { input, startBt, days, hours, minutes, seconds } = ref;
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
// console.log('flatpickr :', flatpickr);

startBt.setAttribute("disabled", true);







function activeBtStart() {
    if (inputDate.getTime() < data.getTime()) {
        // console.log('hasAttribute', startBt.hasAttribute('disabled'))
        if (!startBt.hasAttribute("disabled")) {
            startBt.setAttribute("disabled", true);
        }
        
        return window.alert("Please choose a date in the future")
    } 
    startBt.removeAttribute("disabled");
// console.log('inputDate', inputDate)
    
}

startBt.hasAttribute('disabled')
// const fp = input._flatpickr;
// const qwe = setTimeout(console.log('fp', fp), 15000)
// console.log(qwe)
 
// input.addEventListener('click', onDatePicker)
// function onDatePicker() {
//     if (inputDate.getTime() < data.getTime()) {
//        return window.alert("Please choose a date in the future")
//     } 
    
// }



let p = ''

startBt.addEventListener('click', start);
function start() {
    const data = new Date;
    p = inputDate.getTime() - data.getTime()
    countdown()
}

function countdown() {
    const qaz = convertMs(p);
    console.log('qaz', qaz);
    for (let key in qaz) {
        console.log('key', qaz[key])
        ref[key].textContent = qaz[key];
    }
    
}




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    console.log('days', days)
    console.log('convertMs()', convertMs)
// console.log('day', day)
    // console.log('convertMs1', convertMs)
    return { days, hours, minutes, seconds };
}






// console.log(convertMs(p)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// console.log('ref', ref)
// console.log('days.textContent', days.textContent)
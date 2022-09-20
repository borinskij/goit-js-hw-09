import { Notify } from 'notiflix/build/notiflix-notify-aio';

 
const formRefs = document.querySelector('.form')

formRefs.addEventListener('submit', elementsValue)

function elementsValue(element) {
  element.preventDefault();
  const { amount, step, delay } = element.target.elements;
  const amountValue = amount.valueAsNumber;
  const stepValue = step.valueAsNumber;
  let delayValue = delay.valueAsNumber;
  for (let i = 1; i <= amountValue; i += 1){
    getPromise(i, delayValue).then(({ position, delay }) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)).catch(({ position, delay }) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));

    delayValue += stepValue
  }
}

function getPromise(position, delay) {
  return new Promise((res, rej) => {
    const randomNum =  Math.random() > 0.3;
    setTimeout(() => {
      if (randomNum) {
        res({ position, delay });
      }
      rej({position, delay})
      
    }, delay)
  })
}


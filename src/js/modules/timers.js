const timers = (selector, deadline) => {

  const getTimeRemaining = (deadline) => {
    const t = Date.parse(deadline) - Date.parse(new Date()),
    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.floor(t / (1000 * 60) % 60),
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
    days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days,
    };
  };

  const setClock = (selector, deadline) => {
    const timer = document.querySelector(selector),
    seconds = timer.querySelector('#seconds'),
    minutes = timer.querySelector('#minutes'),
    hours = timer.querySelector('#hours'),
    days = timer.querySelector('#days'),
    timerId = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(deadline);

      seconds.textContent = addZero(t.seconds);
      minutes.textContent = addZero(t.minutes);
      hours.textContent = addZero(t.hours);
      days.textContent = addZero(t.days);
  
      if (t.total <= 0) {
        seconds.textContent = '00';
        minutes.textContent = '00';
        hours.textContent = '00';
        days.textContent = '00';
  
        clearInterval(timerId);
      }
    }
  };

  function addZero(num) {
    if (num <= 9) {
      return `0${num}`;
    }
    else {
      return num;
    }
  }

  setClock(selector, deadline);
};

export default timers;

/* 
  отримати ДОМ, апдейт клок
  функція з розрахунком часу
  функція зміни 

*/

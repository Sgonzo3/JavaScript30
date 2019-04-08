const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const time = new Date();
  const seconds = time.getSeconds();
  const minute = time.getMinutes();
  const hour = time.getHours();

  const secondsDeg = 90 + ((seconds / 60) * 360);
  const minDeg = 90 + ((minute / 60) * 360);
  const hourDeg = 90 + ((hour / 12) * 360);
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg) scaleX(0.7)`;

}

setInterval(setDate, 1000);

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
  let currentTime = new Date();
  let hourClock = currentTime.getHours();
  let minutesClock = currentTime.getMinutes();
  let secondsClock = currentTime.getSeconds();

  hourClock = setZero(hourClock);
  minutesClock = setZero(minutesClock);
  secondsClock = setZero(secondsClock);

  hours.textContent = hourClock;
  minutes.textContent = minutesClock;
  seconds.textContent = secondsClock;
})

function setZero(num) {
 if (num < 10) {
  num = `0${num}`;
 }
 return num;
}

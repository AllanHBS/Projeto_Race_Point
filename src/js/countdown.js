const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();

const race_day = new Date(`December 31 ${currentYear} 23:59:99`);

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = race_day - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
  console.log('currentTime: ',currentTime);
  console.log('diff: ',diff);
}
console.log('race_day: ',race_day);
console.log('currentYear: ',currentYear);

setInterval(updateCountdown, 1000);

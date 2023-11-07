function updateClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const ampmElement = document.getElementById("ampm");

  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
  ampmElement.textContent = hours >= 12 ? "PM" : "AM";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);

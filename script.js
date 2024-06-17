const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // Seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; // 90 degrees offset to start at 12 o'clock
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Hours
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); // Update every second

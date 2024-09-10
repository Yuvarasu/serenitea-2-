// Countdown time in seconds
const countdownTime = 7200; // 2 hours

// Countdown element
const countdownElement = document.getElementById("countdown");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

// Update countdown function
function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownTime * 1000 - now;

  // Check if the countdown is finished
  if (distance <= 0) {
    clearInterval(timerInterval);
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    return;
  }

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
}

// Initial call to update countdown
updateCountdown();

// Update countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

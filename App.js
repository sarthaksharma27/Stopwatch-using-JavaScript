let display = document.getElementById("display");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let startTime; // To store the starting time of the stopwatch
let intervalId; // To store the interval ID for the setInterval function

// Function to format time in HH:MM:SS format
function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to update the stopwatch display
function updateDisplay() {
  const currentTime = Date.now() - startTime;
  display.textContent = formatTime(currentTime);
}

// Event listener for the Start button
startBtn.addEventListener('click', () => {
  if (!intervalId) {
    startTime = Date.now();
    intervalId = setInterval(updateDisplay, 1000); // Update display every second
  }
});

// Event listener for the Stop button
stopBtn.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

// Event listener for the Reset button
resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  display.textContent = '00:00:00';
});
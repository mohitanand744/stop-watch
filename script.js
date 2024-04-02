const startTime = document.querySelector(".play");
const resetTime = document.querySelector(".reset");
const lapBtn = document.querySelector(".lap");

let isStart = false;

const toggleButton = () => {
  resetTime.classList.remove("hidden");
  lapBtn.classList.remove("hidden");
};

const start = () => {
  if (!isStart) {
    startTime.innerText = "Stop";
    isStart = true;
  } else {
    startTime.innerText = "Start";
    isStart = false;
  }
  toggleButton();
};

startTime.addEventListener("click", start);

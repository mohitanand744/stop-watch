const startTime = document.querySelector(".play");
const resetTime = document.querySelector(".reset");
const stopBtn = document.querySelector(".stop");
const lapBtn = document.querySelector(".lap");
const clearBtn = document.querySelector(".clear");
let lapContainer = document.querySelector(".laps-container");

let timer = false;
let [msec, sec, min] = [0, 0, 0]
let setIntervalId;
let count = 0;

const toggleButton = () => {
  resetTime.classList.remove("hidden");
  lapBtn.classList.remove("hidden");
  stopBtn.classList.remove("hidden");
};

const start = () => {
  toggleButton();
  timer = true;
  setIntervalId = setInterval(startTimer, 10);
};
let stop = () => {
  timer = false;
  startTimer();
  clearInterval(setIntervalId);
};

let startTimer = () => {
  if (timer !== true) return;

  msec++;
  if (msec === 100) {
    msec = 0;
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
    }
  }

  document.querySelector(".msec").innerHTML = msec < 10 ? `0${msec}` : msec;
  document.querySelector(".sec").innerHTML = sec < 10 ? `0${sec}  :` : `${sec}  :`;
  document.querySelector(".mins").innerHTML = min < 10 ? `0${min}  :` : `${min}  :`;
};


let reset = () => {
  resetTime.classList.add("hidden");
  lapBtn.classList.add("hidden");
  stopBtn.classList.add("hidden");
  startTime.classList.remove("hidden");
  /* location.reload(); */
  document.querySelector(".msec").innerHTML = `00`;
  document.querySelector(".sec").innerHTML = `00 :`;
  document.querySelector(".mins").innerHTML = `00 :`;
  msec = 0;
  sec = 0;
  min = 0;
  timer = false;
  clearInterval(setIntervalId);
};
let p;
startTime.addEventListener("click", () => {
  start();
  startTime.classList.add("hidden");
  stopBtn.classList.remove("hidden");
});
resetTime.addEventListener("click", reset);
stopBtn.addEventListener("click", () => {
  stop();

  startTime.classList.remove("hidden");
  stopBtn.classList.add("hidden");
});
lapBtn.addEventListener("click", () => {
  count++
  p = document.createElement("p");
  p.innerText = `${count} )  ${min} : ${sec} : ${msec}`;
  lapContainer.append(p);
  clearBtn.classList.remove("Clearhidden");
  lapContainer.style.overflowY = "scroll";
});

lapContainer.style.overflow = "hidden";
clearBtn.addEventListener("click", () => {
  lapContainer.innerHTML = "";
  clearBtn.classList.add("Clearhidden");
  lapContainer.style.overflow = "hidden";
  count = 0
});

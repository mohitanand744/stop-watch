const startTime = document.querySelector(".play");
const resetTime = document.querySelector(".reset");
const stopBtn = document.querySelector(".stop");
const lapBtn = document.querySelector(".lap");
const clearBtn = document.querySelector(".clear");
let lapContainer = document.querySelector(".laps-container");

let timer = false;
let msec = 0;
let sec = 0;
let min = 0;
let setIntervalId;

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
  if (timer === true) {
    ++msec;

    if (msec === 100) {
      ++sec;

      msec = 0;
    }
    if (sec === 60) {
      ++min;
      sec = 0;
    }

    if (msec < 10) {
      document.querySelector(".msec").innerHTML = `0${msec}`;
    } else {
      document.querySelector(".msec").innerHTML = `${msec}`;
    }
    if (sec < 10) {
      document.querySelector(".sec").innerHTML = `0${sec}  :`;
    } else {
      document.querySelector(".sec").innerHTML = `${sec}  :`;
    }
    if (min < 10) {
      document.querySelector(".mins").innerHTML = `0${min}  :`;
    } else {
      document.querySelector(".mins").innerHTML = `${min}  :`;
    }
  }
};

let reset = () => {
  resetTime.classList.add("hidden");
  lapBtn.classList.add("hidden");
  stopBtn.classList.add("hidden");
  location.reload();
  /*   document.querySelector(".msec").innerHTML = `00`;
  document.querySelector(".sec").innerHTML = `00 :`;
  document.querySelector(".mins").innerHTML = `00 :`;
  msec = 0;
  sec = 0;
  min = 0;
  timer = false; */
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
  p = document.createElement("p");
  p.innerText = `${min} : ${sec} : ${msec}`;
  lapContainer.append(p);
  clearBtn.classList.remove("Clearhidden");
  lapContainer.style.overflowY = "scroll";
});

lapContainer.style.overflow = "hidden";
clearBtn.addEventListener("click", () => {
  lapContainer.innerHTML = "";
  clearBtn.classList.add("Clearhidden");
  lapContainer.style.overflow = "hidden";
});

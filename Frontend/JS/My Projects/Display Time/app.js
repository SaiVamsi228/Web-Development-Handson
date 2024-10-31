let myTime = document.createElement("h1");

myTime.innerText = "HH:MM:SS";

myTime.classList.add("myTime");

let disButton = document.createElement("button");

disButton.innerText = "Display Time";
let stopButton = document.createElement("button");

stopButton.innerText = "Stop Display";

let p = document.querySelector("p");

disButton.classList.add("myButton");
stopButton.classList.add("myButton");
stopButton.style.backgroundColor = "red";

p.append(myTime);

p.append(disButton);
p.append(stopButton);

function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let hoursString = hours.toString();

  if (hoursString.length < 2) {
    hoursString = "0" + hoursString;
  }
  let minString = minutes.toString();

  if (minString.length < 2) {
    minString = "0" + minString;
  }
  let secString = seconds.toString();

  if (secString.length < 2) {
    secString = "0" + secString;
  }

  myTime.innerText = `${hoursString} : ${minString} : ${secString}`;
}
let intId = "";

disButton.addEventListener("click", () => {
  if (!intId) {
    intId = setInterval(updateTime, 1000);
  }
});
stopButton.addEventListener("click", () => {
  clearInterval(intId);
  intId = "";
});

function convertSecondsToTime(totalSeconds) {
  // Calculate hours, minutes, and seconds
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  // Format each value to be two digits (add leading zero if necessary)
  let hoursString = hours.toString().padStart(2, "0");
  let minutesString = minutes.toString().padStart(2, "0");
  let secondsString = seconds.toString().padStart(2, "0");

  // Return the formatted time string
  return `${hoursString}:${minutesString}:${secondsString}`;
}

// console.log(diff);

function updateTimer(timerSeconds) {
  let now = new Date();
  let totalSeconds = Math.floor(now.getTime() / 1000);
  console.log(totalSeconds);
  let timerDetails = document.querySelector(".h1");
  let diff = convertSecondsToTime(timerSeconds);

  diff = convertSecondsToTime(timerSeconds);
  timerDetails.innerText = diff;
}
let h = 0;
let m = 0;
let s = 0;

let inp1 = document.querySelector(".hr");
let inp2 = document.querySelector(".min");
let inp3 = document.querySelector(".sec");

let startBtn = document.querySelector(".start-button");

startBtn.addEventListener("click", () => {
  let inpDetails = document.querySelector(".timer-details");
  let h1 = document.createElement("h1");
  let countdownTimer = document.querySelector(".countdown-timer");

  h1.classList.add("h1");
  countdownTimer.replaceChild(h1,inpDetails);


  let myHeading = document.querySelector(".cdt");
  myHeading.append(h1);

  if (inp1.value) {
    h = inp1.value;
  }
  if (inp2.value) {
    m = inp2.value;
  }
  if (inp3.value) {
    s = inp3.value;
  }
  
  
  let timerSeconds = h * 60 * 60 + m * 60 + s;
//   console.log(inp1.value,timerSeconds);


  let interID = setInterval(() => {
    if (timerSeconds >= 0) {
      updateTimer(timerSeconds);
    } else {
      clearInterval(interID);
      interID = "";
      startBtn = document.querySelector(".start-button");
      h1.remove();
      myHeading.append(inpDetails);
      let timeUp = document.createElement("h1");
      timeUp.innerText = "Time Up!";
      inpDetails = document.querySelector(".timer-details");
      inpDetails.append(timeUp)
      setTimeout(()=>{
        timeUp.remove();
      }
      ,3000);
      inp1.value = inp2.value = inp3.value = ""
    }

    timerSeconds -= 1;
  }, 1000);
});

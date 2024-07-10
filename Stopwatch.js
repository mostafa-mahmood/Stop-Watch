let display = document.getElementById("display");

let startTime = 0;
let elapsedTime = 0;
let intervalId = null;
let isRunning = false;

function start(){
          if(!isRunning)
          {
                    startTime = Date.now() - elapsedTime;
                    intervalId = setInterval(updateTimer,10);
                    isRunning = true;
          }
}

function Pause(){
          if(isRunning)
          {
                    clearInterval(intervalId);
                    elapsedTime = Date.now() - startTime;
                    isRunning = false;
          }
}

function reset(){
          clearInterval(intervalId);
          startTime = 0;
          elapsedTime = 0;
          intervalId = null;
          isRunning = false;
          display.textContent = `00:00:00:00`;
}

function updateTimer(){
          currentTime = Date.now();
          elapsedTime = currentTime - startTime;

          let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
          let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
          let seconds = Math.floor(elapsedTime / 1000 % 60);
          let ms = Math.floor(elapsedTime % 1000 / 10);

          hours = hours.toString().padStart(2,0);
          minutes = minutes.toString().padStart(2,0);
          seconds = seconds.toString().padStart(2,0);
          ms = ms.toString().padStart(2,0);

          display.textContent = `${hours}:${minutes}:${seconds}:${ms}`;
}
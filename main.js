let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let reset = false;

const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const display = document.getElementById('display');

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', resetWatch);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        reset = false;
        startStopButton.innerHTML = "Stop";
    } else {
        clearInterval(tInterval);
        running = false;
        startStopButton.innerHTML = "Start";
    }
}

function resetWatch() {
    clearInterval(tInterval);
    reset = true;
    running = false;
    startStopButton.innerHTML = "Start";
    display.innerHTML = "00:00:00";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

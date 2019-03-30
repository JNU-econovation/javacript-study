var input, startBtn, resetBtn;
let isBtnClicked = false;
let hour, minute, second = 0;
let timer;

function initStopWatch() {
    input = document.getElementById("stopWatch");
    startBtn = document.getElementById("start");
    resetBtn = document.getElementById("reset");
    init();
}

function init() {
    const initialTime = "ST 00:00:00";
    isBtnClicked = false;
    input.value = initialTime;
    hour, minute, second = 0;
    startBtn.innerHTML = "시작";
}

function startBtnClicked() {
    if(isBtnClicked) {
        stopTime();
        return;
    }
    startTime();
}

function add() {
    second++;
    if (second >= 60) {
        second = 0;
        minute++;
        addMinute();
    }
    setTimerText();
}

function addMinute(){
    if (minute >= 60) {
        minute = 0;
        hour++;
    }
}

function setTimerText() {
    input.value = "ST " + determineTime(hour) + ":" + determineTime(minute) + ":" + determineTime(second);
}

function determineTime(element) {
    return element ? (element > 9 ? element : "0" + element) : "00"
}

function setTimer() {
    timer = setInterval(add, 1000);
}

function startTime() {
    startBtn.innerHTML = "멈춤";
    isBtnClicked = true;
    setTimer();
}

function stopTime() {
    startBtn.innerHTML = "시작";
    isBtnClicked = false;
    clearInterval(timer);
}

function resetBtnClicked() {
    stopTime();
    initStopWatch();
}
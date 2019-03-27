let input, startBtn, resetBtn;
let isBtnClicked = false;
let swHour, swMinute, swSecond = 0;
let timer;

function initStopWatch() {
    input = document.getElementById("stopWatch");
    startBtn = document.getElementById("start");
    resetBtn = document.getElementById("reset");
    stopWatchTimeInit();
}

function stopWatchTimeInit() {
    const initialTime = "ST 00:00:00";
    startBtn.innerHTML = "시작";
    isBtnClicked = false;
    input.value = initialTime;
    swHour, swMinute, swSecond = 0;
}

function startBtnClicked() {
    if(isBtnClicked) {
        stopTime(); return;
    }
    startTime();
}

function add() {
    swSecond++;
    if (swSecond >= 60) {
        swSecond = 0;
        swMinute++;
        addMinute();
    }
    setTimerText();
}

function addMinute(){
    if (swMinute >= 60) {
        swMinute = 0;
        swHour++;
    }
}

function setTimerText() {
    input.value = "ST " +
     determineTime(swHour) + ":" + determineTime(swMinute) + ":" + determineTime(swSecond);
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
    stopWatchTimeInit();
}
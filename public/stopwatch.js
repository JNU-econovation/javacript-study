var stopWatchInput, startBtn, resetBtn;
let isBtnClicked = false;
let swHour, swMinute, swSecond = 0;
let timer;

function initStopWatch() {
    stopWatchInput = document.getElementById("stopWatch");
    startBtn = document.getElementById("start");
    resetBtn = document.getElementById("reset");
    swTimeInit();
}

function swTimeInit() {
    const initialTime = "ST 00:00:00";
    startBtn.innerHTML = "시작";
    isBtnClicked = false;
    stopWatchInput.value = initialTime;
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
    stopWatchInput.value = "ST " +
     (swHour ? (swHour > 9 ? swHour : "0" + swHour) : "00") + ":" + 
     (swMinute ? (swMinute > 9 ? swMinute : "0" + swMinute) : "00") + ":" + 
     (swSecond > 9 ? swSecond : "0" + swSecond);
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

function resetisBtnClicked() {
    swTimeInit();
}
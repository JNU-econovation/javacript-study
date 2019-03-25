var swTimeInput, startBtn, resetBtn;
let btnClicked = false;
var swHour, swMinute, swSecond = 0;
var timer;

function initStopWatch() {
    swTimeInput = document.getElementById("stopWatch");
    startBtn = document.getElementById("start");
    resetBtn = document.getElementById("reset");
    swTimeInit();
}

function swTimeInit() {
    const initialTime = "ST 00:00:00";
    startBtn.innerHTML = "시작";
    btnClicked = false;
    swTimeInput.value = initialTime;
    swHour, swMinute, swSecond = 0;
}

function startBtnClicked() {
    if(btnClicked) {
        stopTime(); return;
    }
    startTime();
}

function add() {
    swSecond++;
    if (swSecond >= 60) {
        swSecond = 0;
        swMinute++;
        if (swMinute >= 60) {
            swMinute = 0;
            swHour++;
        }
    }
    setTimerText();
}

function setTimerText() {
    swTimeInput.value = "ST " +
     (swHour ? (swHour > 9 ? swHour : "0" + swHour) : "00") + ":" + 
     (swMinute ? (swMinute > 9 ? swMinute : "0" + swMinute) : "00") + ":" + 
     (swSecond > 9 ? swSecond : "0" + swSecond);
}

function setTimer() {
    timer = setInterval(add, 1000);
}

function startTime() {
    startBtn.innerHTML = "멈춤";
    btnClicked = true;
    setTimer();
}

function stopTime() {
    startBtn.innerHTML = "시작";
    btnClicked = false;
    clearInterval(timer);
}

function resetBtnClicked() {
    swTimeInit();
}
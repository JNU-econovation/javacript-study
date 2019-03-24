const STOPPED = 0;
const STARTED = 1;
const PAUSED = 2;
let stateOfStopWatch = STOPPED;

var Stopwatch = {
    minutes : 0,
    seconds : 0,
    milliseconds : 0
}

setInterval(setTime, 1);

function setTime() {
    if(stateOfStopWatch != STARTED) { return; }
    Stopwatch.milliseconds++;

    if(Stopwatch.seconds >= 60) {
        _increaseMinute();
    }
    if(Stopwatch.milliseconds >= 1000) {
        _increaseSecond();
    }
    
    updateStopwatchDisplay();
}

function _increaseSecond() {
    Stopwatch.milliseconds -= 1000;
    Stopwatch.seconds++;
}

function _increaseMinute() {
    Stopwatch.seconds -= 60;
    Stopwatch.minutes++;
}

function updateStopwatchDisplay() {
    const minutesFormat = changeTimeFormatOf(Stopwatch.minutes, DIGIT_2);
    const secondsFormat = changeTimeFormatOf(Stopwatch.seconds, DIGIT_2);
    $(".stopwatch_time").innerHTML = minutesFormat + ":" + secondsFormat;
    $(".stopwatch_ms").innerHTML = changeTimeFormatOf(Stopwatch.milliseconds, DIGIT_3);
}

function initializeStopwatch() {
    Stopwatch.minutes = 0;
    Stopwatch.seconds = 0;
    Stopwatch.milliseconds = 0;
}

function clickStartOrPauseButton() {
    switch (stateOfStopWatch) {
        case STOPPED :
            initializeStopwatch();
            start();
            break;
        case STARTED :
            pause();
            break;
        case PAUSED :
            start();
            break;
    }
}

function clickResetButton() {
    stateOfStopWatch = STOPPED;
    $("#startOrPause").innerHTML = "START"
    initializeStopwatch();
    updateStopwatchDisplay();
}

function start() {
    stateOfStopWatch = STARTED;
    $("#startOrPause").innerHTML = "PAUSE"
}

function pause() {
    stateOfStopWatch = PAUSED;
    $("#startOrPause").innerHTML = "START"
}
const STOPPED = 0;
const STARTED = 1;
const PAUSED = 2;
let StateOfStopWatch = STOPPED;

var Stopwatch = {
    minutes : 0,
    seconds : 0,
    milliseconds : 0
}

setInterval(setTime, 1);

function setTime() {
    if(StateOfStopWatch != STARTED) { return; }
    Stopwatch.milliseconds++;

    if(Stopwatch.seconds >= 60) {
        Stopwatch.seconds -= 60;
        Stopwatch.minutes++;
    }

    if(Stopwatch.milliseconds >= 1000) {
        Stopwatch.milliseconds -= 1000;
        Stopwatch.seconds++;
    }
    updateStopwatchDisplay();
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
    switch (StateOfStopWatch) {
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
    StateOfStopWatch = STOPPED;
    $("#startOrPause").innerHTML = "START"
    initializeStopwatch();
    updateStopwatchDisplay();
}

function start() {
    StateOfStopWatch = STARTED;
    $("#startOrPause").innerHTML = "PAUSE"
}

function pause() {
    StateOfStopWatch = PAUSED;
    $("#startOrPause").innerHTML = "START"
}
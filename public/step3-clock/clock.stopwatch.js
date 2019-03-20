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
    console.log(StateOfStopWatch);
    if(StateOfStopWatch != STARTED) { return; }

    Stopwatch.milliseconds++;
    console.log(Stopwatch.milliseconds);

    if(Stopwatch.milliseconds >= 1000) {
        Stopwatch.milliseconds -= 1000;
        Stopwatch.seconds++;
    }

    if(Stopwatch.seconds >= 60) {
        Stopwatch.seconds -= 60;
        Stopwatch.minutes++;
    }

    printStopwatch();
}

function printStopwatch() {
    const minutesFormat = changeTimeFormatOf(Stopwatch.minutes, 2);
    const secondsFormat = changeTimeFormatOf(Stopwatch.seconds, 2);
    $(".stopwatch_time").innerHTML = minutesFormat + ":" + secondsFormat;
    $(".stopwatch_ms").innerHTML = changeTimeFormatOf(Stopwatch.milliseconds, 3);
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
    initializeStopwatch();
    printStopwatch();
}

function start() {
    StateOfStopWatch = STARTED;
    console.log(StateOfStopWatch);
}

function pause() {
    StateOfStopWatch = PAUSED;
}
let timer;
let time = 0;

function stop() {
    $("#startStop").innerHTML = StopWatchStatus.starting;
    clearInterval(timer);
    $("#startStop").removeEventListener("click", stop)
    $("#startStop").addEventListener("click", start)
}

function start() {
    $("#startStop").innerHTML = StopWatchStatus.stoping;
    $("#reset").disabled = UsableStatus.enabled;
    doit();
    $("#startStop").removeEventListener("click", start);
    $("#startStop").addEventListener("click", stop);
}

function doit() {
    timer = self.setInterval('increment()', 1000);
}

function increment() {
    time++;
    changeSeconds(time);
    changeMinutes(time);
    changeHours(time);
}

function changeSeconds(time) {
    var seconds = (time % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    $("#seconds").innerHTML = seconds;
}

function changeMinutes(time) {
    var minutes = parseInt(time / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    $("#minutes").innerHTML = minutes;
}

function changeHours(time) {
    var hours = parseInt(time / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    $("#hours").innerHTML = hours;
}

function reset() {
    time = 0;
    clearInterval(timer);
    clear();
    $("#reset").disabled = UsableStatus.disabled;
}
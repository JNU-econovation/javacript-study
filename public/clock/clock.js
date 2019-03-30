function init() {
    $("#changingState").addEventListener("click", change)
    setInterval(showClock, 1000)
}

function showClock() {
    if ($("#changingState").innerHTML == Mode.stopwatch) {
        const now = new Date();
        setAMPM(now);
        setSecond(now);
        setMinute(now);
        setHour(now);
    }
}

function setAMPM(now) {
    const hours = now.getHours();
    var meridiem;
    hours < 12 ? meridiem = "AM" : meridiem = "PM"
    $("#ampm").innerHTML = meridiem
}

function setSecond(now) {
    let seconds = now.getSeconds();
    if (seconds < 10) {
        sconds = "0" + seconds;
    }
    $("#seconds").innerHTML = seconds;
}

function setMinute(now) {
    let minute = now.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    $("#minutes").innerHTML = minute;
}

function setHour(now) {
    let hours = now.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    $("#hours").innerHTML = hours;
}

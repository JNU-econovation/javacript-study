function init() {
    $("#changingState").addEventListener("click", change)
    setInterval(view, 1000)
}

function showClock() {
    if ($("#changingState").innerHTML == "stopwatch") {
        const now = new Date();
        setAMPM(now);
        setSecond(now);
        setMinute(now);
        setHour(now);
    }
}

function setAMPM(now) {
    const hours = now.getHours();
    if (hours < 12) {
        $("#ampm").innerHTML = "AM";
        return;
    }
    $("#ampm").innerHTML = "PM";
}

function setSecond(now) {
    const seconds = now.getSeconds();
    if (seconds < 10) {
        $("#seconds").innerHTML = "0" + seconds;
        return;
    }
    $("#seconds").innerHTML = seconds;
}

function setMinute(now) {
    const minute = now.getMinutes();
    if (minute < 10) {
        $("#minutes").innerHTML = "0" + minute;
        return;
    }
    $("#minutes").innerHTML = minute;
}

function setHour(now) {
    const hours = now.getHours();
    if (hours < 10) {
        $("#hours").innerHTML = "0" + hours;
        return;
    }
    $("#hours").innerHTML = hours;
}

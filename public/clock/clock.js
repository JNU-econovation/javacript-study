function init() {
    $("#changingState").addEventListener("click", change)
    setInterval(view, 1000)
}

function view() {
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
    if (hours % 24 < 12) {
        $("#ampm").innerHTML = "AM";
        return;
    }
    $("#ampm").innerHTML = "PM";
}

function setSecond(now) {
    const seconds = now.getSeconds();
    if (seconds % 60 < 10) {
        $("#seconds").innerHTML = "0" + seconds % 60;
        return;
    }
    $("#seconds").innerHTML = seconds % 60;
}

function setMinute(now) {
    const minute = now.getMinutes();
    const selectedMinute = minute % 60;
    if (selectedMinute < 10) {
        $("#minutes").innerHTML = "0" + selectedMinute;
        return;
    }
    $("#minutes").innerHTML = selectedMinute;
}


function setHour(now) {
    const hours = now.getHours();
    const selectedHour = hours % 12
    if (selectedHour < 10) {
        $("#hours").innerHTML = "0" + selectedHour;
        return;
    }
    $("#hours").innerHTML = selectedHour;
}

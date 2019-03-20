function $(selector) {
    return document.querySelector(selector);
}

function setTime() {
    const now = new Date();
    const hoursFormat = changeTimeFormatOf(now.getHours(), 2);
    const minutesFormat = changeTimeFormatOf(now.getMinutes(), 2);
    const secondsFormat = changeTimeFormatOf(now.getSeconds(), 2);
    $(".clock_time").innerHTML = hoursFormat + ":" + minutesFormat + ":" + secondsFormat;
}

// function changeTimeFormatOf(time) {
//     if (time < 10) { return "0" + time.toString(); }
//         return time.toString();
// }

function changeTimeFormatOf(time, digits) {
    if(digits == 2) {
        if (time < 10) { return "0" + time.toString(); }
        return time.toString();
    }

    if(digits == 3) {
        if(time >= 10 && time < 100) { return ".0" + time.toString(); }
        if(time < 10) { return ".00" + time.toString(); }
        return "." + time.toString();
    }

    
}

setInterval(setTime, 1000);
const DIGIT_2 = 2;
const DIGIT_3 = 3;

function $(selector) {
    return document.querySelector(selector);
}

function setTime() {
    const now = new Date();
    const hoursFormat = changeTimeFormatOf(now.getHours(), DIGIT_2);
    const minutesFormat = changeTimeFormatOf(now.getMinutes(), DIGIT_2);
    const secondsFormat = changeTimeFormatOf(now.getSeconds(), DIGIT_2);
    $(".clock_time").innerHTML = hoursFormat + ":" + minutesFormat + ":" + secondsFormat;
}

function changeTimeFormatOf(time, digits) {
    if(digits == DIGIT_2) {
        if (time < 10) { return "0" + time.toString(); }
        return time.toString();
    }
    
    if(digits == DIGIT_3) {
        if(time >= 10 && time < 100) { return ".0" + time.toString(); }
        if(time < 10) { return ".00" + time.toString(); }
        return "." + time.toString();
    }
}

setInterval(setTime, 1000);
const DIGIT_2 = 2;
const DIGIT_3 = 3;

function setTime() {
    const now = new Date();

    const timeSectionFormat = now.getHours() >= 12 ? "PM" : "AM";
    const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const hoursFormat = changeTimeFormatOf(hours, DIGIT_2);
    const minutesFormat = changeTimeFormatOf(now.getMinutes(), DIGIT_2);
    const secondsFormat = changeTimeFormatOf(now.getSeconds(), DIGIT_2);

    if(now.getMinutes() == 0 && now.getSeconds() == 0) { _alertTimeSharp(hours, timeSectionFormat) }

    $(".clock_time").innerHTML = hoursFormat + ":" + minutesFormat + ":" + secondsFormat;
    $(".time_section").innerHTML = " " + timeSectionFormat;
}

function _alertTimeSharp(hours, timeSelectionFormat){
    alert(timeSelectionFormat + " " + hours + "시 입니다.")
}

setInterval(setTime, 1000);
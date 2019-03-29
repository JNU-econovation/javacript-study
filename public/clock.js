let timeInput;
const halfOfDay = 12;

function initProject() {
    initClock();
    initStopWatch();
}

function initClock() {
    timeInput = document.getElementById("clock");
}

function timeSetting() {
    const now = new Date();
    const rawHour = now.getHours();
    const minute = now.getMinutes();
    const rawSecond = now.getSeconds();
    
    var hour = setHour(rawHour);
    var second = setSecond(rawSecond);
    var amOrPm = defineAmPm(rawHour);
    alarm(minute, second);
    setClockDisplay(amOrPm, hour, minute, second);
}

function alarm(minute, second) {
    if(minute == 0 && second == 0){
        alert("정각입니다.");
    }
}

function setSecond(second) {
    return second > 9 ? second : "0" + second;
}

function defineAmPm(hour) {
    return hour > halfOfDay ? "PM" : "AM";
}

function setHour(hour){
    return hour > halfOfDay ? hour - halfOfDay : hour;
}

function setClockDisplay(amOrPm, hour, minute, second){
    const time = amOrPm + " " + hour + ":" + minute + ":" + second;
    timeInput.value = time;
}

setInterval(timeSetting, 1000);
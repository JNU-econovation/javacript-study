var timeinput = document.getElementById(clock);

function OperateClock(){
    currnetTime = new Date();
    const hour = currnetTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    let nowhour = clockHour(hour);
    let nowminute = clockMinutes(minute);
    let nowsecond = clockSeconds(second);
    let AmPm = chooseAmPm(hour);

    alarm(nowhour, nowminute, nowsecond);
    printTime(AmPm, nowhour, nowminute, nowsecond);
}

function clockHour(nowhour){
    if(nowhour > 12 && nowhour > 9) {return nowhour-12;}
    else if(nowhour == 10 || nowhour == 11) {return nowhour;}
    return "0"+nowhour;    
}

function clockMinutes(nowminute){
    return nowminute > 9 ? nowminute : "0" + nowminute;
}

function clockSeconds(nowsecond){
    return nowsecond > 9 ? nowsecond : "0" + nowsecond;
}

function chooseAmPm(nowhour){
    return nowhour > 12 ? "PM" : "AM";
}

function printClock(AmPm, nowhour, nowminute, nowsecond){
    const time = AmPm + " " + nowhour + ":" + nowminute + ":" + nowsecond;
    timeinput.value = time;
}

function alarm(nowhour, nowminute, nowsecond) {
    if(nowhour == 8 && nowminute == 10 && nowsecond == 0){
        alert("기상스터디 인증하세요!");
    }
}

setInterval(OperateClock, 1000);
let stinput, startBtn, resetBtn;
let stHour = 0, stMinute = 0, stSecond = 0;
let clockstoped = false;
let timer;

function resetBtnClicked() {
    if(clockstoped) {
        reset(); return
    }
    start();
}

function reset() {
    document.getElementById('stinput').value = "00 : 00 : 00";
}

function start() {

    let hour = setHour(stHour);
    let minute = setMinutes(stMinute);
    let second = setSeconds(stSecond);
  
    printTimer(hour, minute, second);

}

function addTime(){
    stSecond++;
    if (stSecond >= 60){
        stSecond = stSecond - 60;
        stMinute++;
        if(stMinute >= 60){
            stMinute = stMinute - 60;
            stHour++;
        }
    }
    printTimer();
}

function setSeconds(stSecond){
    return stSecond > 9 ? stSecond : "0" + stSecond;
}

function setMinutes(stMinute){
    return stMinute > 9 ? stMinute : "0" + stMinute;
}

function setHour(stHour){
    return stHour > 9 ? stHour : "0" + stHour;
}

function printTimer(stSecond, stMinute, stHour)
{
    time = stHour + ":" + stMinute + ":" + stSecond;
    stinput.value = time;
}

function startTimer() {
    timer = setInterval(addTime, 1000);
}
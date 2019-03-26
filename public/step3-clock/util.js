function $(selector) {
    return document.querySelector(selector);
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

function hanldeSwtichToClock() {
    _removeStopwatchTag()
    _addClockTag()
}

function hanldeSwtichToStopwatch() {
    _removeClockTag()
    _addStopwatchTag()
}

function _addClockTag() {
    const clockTag = `<div class="clock">
    <span class="clock_time">00:00:00</span>
    <span class="time_section"> AM</span>
  </div>`
  $("body").insertAdjacentHTML("beforeend", clockTag)
}

function _removeClockTag() {
    $(".clock").remove()
}

function _addStopwatchTag() {
    const stopwatchTag = `  <div class="stopwatch">
    <span class="stopwatch_time">00:00</span>
    <span class="stopwatch_ms">.000</span>
  </div>

  <div class="stopwatch_btn_area">
    <span class="button" id="reset" onclick="clickResetButton()">
      <span class="btn_title">RESET</span>
    </span>
    <span class="button" id="startOrPause" onclick="clickStartOrPauseButton()">
      <span class="btn_title">START</span>
    </span>  
  </div>`
  $("body").insertAdjacentHTML("beforeend", stopwatchTag)
}

function _removeStopwatchTag() {
    $(".stopwatch").remove()
    $(".stopwatch_btn_area").remove()
}
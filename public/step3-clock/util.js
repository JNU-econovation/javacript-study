function $(selector) {
    return document.querySelector(selector);
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
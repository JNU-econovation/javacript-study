function $(selector) {
    return document.querySelector(selector);
}

function change() {
    if ($("#changingState").innerHTML == Mode.stopwatch) {
        $("#changingState").innerHTML = Mode.clock;
        $("#ampm").innerHTML = "ST";
        clear();
        addTag();
        setClickedEvent();
        return;
    }
    $("#changingState").innerHTML = Mode.stopwatch;
    removeTag();
}

function clear() {
    const zero = "00";
    $("#hours").innerHTML = zero;
    $("#minutes").innerHTML = zero;
    $("#seconds").innerHTML = zero;
}

function addTag() {
    const memo = `<button id="startStop">start</button>
    <button id="reset" disabled = "disabled">reset</button>`;
    $("body").insertAdjacentHTML("beforeend", memo);
}

function removeTag() {
    $("#startStop").remove();
    $("#reset").remove();
}

function setClickedEvent() {
    $("#startStop").addEventListener("click", start);
    $("#reset").addEventListener("click", reset);
}
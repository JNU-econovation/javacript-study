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
    $("#changingState").innerHTML = "stopwatch";
    removeTag();
}

function clear() {
    $("#hours").innerHTML = "00";
    $("#minutes").innerHTML = "00";
    $("#seconds").innerHTML = "00";
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
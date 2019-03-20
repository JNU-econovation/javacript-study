function $(selector) {
    return document.querySelector(selector);
}

function setTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const secondsFormat = function() {
        if (seconds < 10) { return "0" + seconds.toString(); }
        return seconds.toString();
    }
    var result = hours.toString() + ":" + minutes.toString() + ":" + secondsFormat();

    $(".clock_time").innerHTML = result;
}

setInterval(setTime, 1000);
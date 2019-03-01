const READY = true;
const DONE = false;
let statusOfcalculation = DONE;
var symbol;
var calculationQueue = [];

function $(selector) {
    return document.querySelector(selector);
}

function enQueue(element) {
    calculationQueue.push(parseFloat(element));
}

function deQueue() {
    return calculationQueue.shift();
}

function isError(value) {
    if (isNaN(value) || value == Infinity) {
        return true;
    }
    return false;
}

function inputToDisplay(element) {
    if (statusOfcalculation == READY) {
        clearDisplay();
    }
    $("#display").value += element.innerHTML;
}

function errors() {
    finishCalculation();
    $("#display").value = 'ERROR';
}

function calculate() {
    var value = selectOperator(symbol)(deleteQ(), deleteQ());
    if (isError(value)) {
        errors();
        return;
    }
    inputQ(value);
    $("#display").value = value;
}

function selectOperator(operator) {
    var calculation = {
        '+': function (leftNumber, rightNumber) { return leftNumber + rightNumber },
        '-': function (leftNumber, rightNumber) { return leftNumber - rightNumber },
        '*': function (leftNumber, rightNumber) { return leftNumber * rightNumber },
        '/': function (leftNumber, rightNumber) { return leftNumber / rightNumber }
    }
    return calculation[operator];
}

function setOpreator(element) {
    statusOfcalculation = READY;
    inputQ(getValue());
    if (calculationQueue.length == 2) {
        calculate();
    }
    symbol = element.innerHTML;
}

function findKeyCode(e) {
    var element = $(`td[data-key="${e.key}"]`);
    if (element != null) {
        element.onclick();
    }
}

function runKeyDownEvent() {
    window.addEventListener('keydown', findKeyCode);
}

function clearDisplay() {
    statusOfcalculation = DONE;
    document.getElementById('display').value = null;
}

function finishCalculation() {
    statusOfcalculation = READY;
    inputQ(getValue());
    calculate();
    clearStatusOfCalculator();
}

function clearStatusOfCalculator() {
    symbol = null;
    cal.length = 0;
}

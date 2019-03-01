const READY = true;
const DONE = false;
let statusOfcalculation = OFF;
var symbol;
var calculationQueue = [];

function getValue() {
    return document.getElementById('display').value;
}

function addQueue(element) {
    calculationQueue.push(parseFloat(element));
}

function removeQueue() {
    return calculationQueue.shift();
}

function isError(value) {
    if (isNaN(value) || value == Infinity) {
        return true;
    }
    return false;
}

function inputToDisplay(element) {
    if (statusOfcalculation) {
        clearDisplay();
    }
    document.getElementById('display').value += element.innerHTML;
}

function errors() {
    document.getElementById('display').value = 'ERROR';
}

function calculate() {
    var value = selectOperator(symbol)(deleteQ(), deleteQ());
    if (isError(value)) {
        errors();
        statusOfcalculation = READY;
    inputQ(getValue());
    calculate();
        return;
    }
    inputQ(value);
    document.getElementById('display').value = value;
}

function selectOperator(operator) {
    console.log(operator);
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
    var element = document.querySelector(`td[data-key="${e.key}"]`);
    console.log(e.key);
    if (element != null) {
        element.onclick();
    }
}

function runKeyDownEvent() {
    window.addEventListener('keydown', findKeyCode);
}

function clearDisplay() {
    statusOfcalculation = DONE
    console.log('clear');
    document.getElementById('display').value = null;
}

function finish() {
    clears();
}

function clears() {
    symbol = null;
    cal.length = 0;
}

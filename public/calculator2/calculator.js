var READY = 2;
var ON = 1;
var OFF = 0;
var statusOfcalculation = OFF;
var symbol;
var cal = [];
function getValue() {
    return document.getElementById('display').value;
}

function inputQ(element) {
    cal.push(parseFloat(element));
    console.log(cal)
}

function deleteQ() {
    return cal.shift();
}

function isError(value){
    if(!isNaN() || value == Infinity){
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

function errors(){
    alert("계산이 불가능합니다.")
}


function calculate() {
    var value = selectOperator(symbol)(deleteQ(), deleteQ());
    if(isError()){
        errors();
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

    statusOfcalculation = ON;
    inputQ(getValue());

    if (cal.length == 2) {
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
    statusOfcalculation = OFF
    console.log('clear');
    document.getElementById('display').value = null;
}
function finish(){
    statusOfcalculation = ON;
    inputQ(getValue());
    calculate();
    symbol = null;
    cal.length = 0;
}

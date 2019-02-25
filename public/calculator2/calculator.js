var ON = 1;
var OFF = 0;
var statusOfcalculation = OFF;
var symbol;

function getValue(){
    return document.getElementById(display).value;
}

function inpuToDisplay(element){
    var value;
    if(OFF){
        value = element.innerHTML;
    }
    if(ON){
        value = selectOperator(symbol)(parseFloat(getValue),parseFloat(element.HTML));
    }
    document.getElementById(display).value += value;
}

function selectOperator(operator) {
    statusOfcalculation = OFF;
    var calculation = {
        '+': function (leftNumber, rightNumber) { return leftNumber + rightNumber },
        '-': function (leftNumber, rightNumber) { return leftNumber - rightNumber },
        '*': function (leftNumber, rightNumber) { return leftNumber * rightNumber },
        '/': function (leftNumber, rightNumber) { return leftNumber / rightNumber }
    }
    return calculation[operator];
}

function setOpreator(element){
    statusOfcalculation = ON;
    symbol = element.innerHTML;
}

function findKeyCode(e) {
    var element = document.querySelector(`td[data-key="${e.key}"]`);
    console.log(e.keyCode);
    if (element != null) {
        element.onclick();
    }
}

function runKeyDownEvent() {
    window.addEventListener('keydown', findKeyCode);
}

function clearDisplay() {
    console.log('clear');
    document.getElementById('inputDisplay').value = null;
    document.getElementById('outputDisplay').value = null;
}


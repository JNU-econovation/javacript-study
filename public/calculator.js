let queue = [];
let typing = false;
let dotUsed = false;
const queueSize = 3;
const numExp = /[0-9]/;
const operExp = /[+/*-]/;
var inputField;

function setupInput() {
    inputField = document.getElementById('input');
    inputField.value = 0;
    typing = true;
    dotUsed = false;
    queue = [];
    addKeyEvent();
}

function addKeyEvent() {
    window.addEventListener('keydown', handleKeydown);
}

function handleKeydown(event) {
    if(event.key.match(operExp)){ clickOperator(event.key); }

    const key = document.querySelector(`td[data-key="${event.keyCode}"]`);
	if(!key) return;
    key.onclick();
}

function clickClear() {
    clearAll();
    setupInput();
}

function clickSubmit() {
    queue.push(inputField.value);
    calculate();
    typing = true;
    dotUsed = false;
    queue = [];
}

function clickNumber(element) {
    if(typing) clearAll();
    typing = false;
    inputField.value += element;
}

function clickOperator(element) {
    typing = true;
    dotUsed = false;
    queue.push(inputField.value);
    if(queue.length == queueSize) {
        calculate();
    }
    queue.push(element);
}

function clickDot(element) {
    if(dotUsed) {
        return;
    }
    typing = false;
    dotUsed = true;
    inputField.value += element;
}

function clearAll() {
    inputField.value = '';
}

function calculate() {
    var result = operator();
    inputField.value = result;
}

function dealError() {
    alert("error");
    setupInput();
}

function operator() {
    const first = queue.pop();
    const operator = queue.pop();
    const second = queue.pop();
    const result = selectOperator(operator)(parseFloat(second), parseFloat(first));
    
    if(isFinite(result)){
        queue.push(result);
        return result;
    }
    
    dealError();
    return "";
}

function selectOperator(operator) {
    var calculation = {
        '+' : function (first, second) {return first + second},
        '-' : function (first, second) {return first - second},
        '/' : function (first, second) {return first / second},   
        '*' : function (first, second) {return first * second}
    }
    return calculation[operator];
}
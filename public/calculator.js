let queue = [];
let typing = false;
let dotUsed = false;
const queueSize = 3;
const numExp = /[0-9]/;
const operExp = /[+/*-]/;
    
function getInput() {
    return document.getElementById("input");
}

function setupInput() {
    getInput().value = 0;
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

function clickClear(element) {
    clearAll();
    initInput();
}

function clickSubmit(element) {
    queue.push(getInput().value);
    calculate();
    typing = true;
    dotUsed = false;
    queue = [];
}

function clickNumber(element) {
    if(typing) clearAll();
    typing = false;
    getInput().value += element;
}

function clickOperator(element) {
    typing = true;
    dotUsed = false;
    queue.push(getInput().value);
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
    getInput().value += element;
}

function clearAll() {
    getInput().value = '';
}

function calculate() {
    var result = operator();
    getInput().value = result;
}

function dealError() {
    alert("error");
    initInput();
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
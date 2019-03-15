var queue = [];
var typing = false;
var dotUsed = false;
var queueSize = 3;
var numExp = /[0-9]/;
var operExp = /[+/*-]/;
    
function getInput() {
    return document.getElementById("input");
}

function initInput() {
    getInput().value = 0;
    typing = true;
    dotUsed = false;
    queue = [];
}

window.addEventListener('keydown', function(element){
    if(element.keyCode == 13) { submitClicked(element.key); }
    if(element.keyCode == 8){ clearClicked(element.key); }
    if(element.key.match(numExp)){ numberClicked(element.key); }
    if(element.key.match(operExp)){ operClicked(element.key); }
    if(element.keyCode == 190){ dotClicked(element.key); }
});

function clearClicked(element) {
    clearAll();
    initInput();
}

function submitClicked(element) {
    queue.push(getInput().value);
    calculate();
    typing = true;
    dotUsed = false;
    queue = [];
}

function numberClicked(element) {
    console.log(element);
    if(typing) clearAll();
    typing = false;
    getInput().value += element;
}

function operClicked(element) {
    typing = true;
    dotUsed = false;
    queue.push(getInput().value);
    if(queue.length == queueSize) {
        calculate();
    }
    queue.push(element);
}

function dotClicked(element) {
    if(dotUsed) {
        return;
    }
    typing = false;
    dotUsed = true;
    getInput().value += element;
}

function input(element) {
    getInput().value += element.innerHTML;
}

function clearAll() {
    getInput().value = '';
}

function calculate() {
    var result = operator();
    console.log(result)
    getInput().value = result;
}

function dealError() {
    alert("error");
    initInput();
}

function operator() {
    var first = queue.pop();
    var operator = queue.pop();
    var second = queue.pop();
    console.log(second, operator, first);

    var result = selectOperator(operator)(parseFloat(second), parseFloat(first));
    
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
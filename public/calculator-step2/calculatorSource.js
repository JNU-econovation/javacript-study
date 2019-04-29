var isTyped = false;
var queue = [];
var queueSize = 3;

function keyDownEvent(){
    window.addEventListener('keydown', writeNum);
}

function writeNum(e) {
    const key = document.querySelector(`[data-key="${e.keyCode}"]`);
    if(!key) return;
    key.typing(e);
}

function clear() {
    document.getElementById('input').value = "";
    document.getElementById('result').value = "";
}

function typing(num) {
    let input = getInput();
    input.value = input.value + num;
    queue.push(getInput().value);
    if(queue.length == queueSize) {
        startCal();
    } queue.push(num);

    return input;
}

function getInput(){
    document.getElementById('input');
    return input;
}

function typingDot(){
    if(isTyped) {
        return;
    }
    input.value = input.value;
}

function selectSymbol(symbol){
    var calculation = {
        '/' : function(leftNum , rightNum) { return leftNum / rightNum},
        '*' : function(leftNum , rightNum) { return leftNum * rightNum},
        '+' : function(leftNum , rightNum) { return leftNum + rightNum},
        '-' : function(leftNum , rightNum) { return leftNum - rightNum}
    }
    return calculation[symbol];
}

function startCal(){
    let leftNum = queue.pop();
    let symbol = queue.pop();
    let rightNum = queue.pop();
    let result = selectSymbol(symbol)(leftNum, rightNum);

    return result;
}
var isTyped = false;

function keyDownEvent(){
    window.addEventListener('keydown', writeNum);
};

function writeNum(e) {
    const key = document.querySelector(`[data-key="${e.keyCode}"]`);
    if(!key) return;
    key.type(char);
};

function clear() {
    getInput.value = "";
    document.getElementById('result').value = "";
};

function typing(Num) {
    let input = getInput();
    input.value = input.value + Num;

    return input;
}; 

function getInput(){
    document.getElementById('input');
}

function typingDot(){
    if(isTyped) {
        return;
    }
    input.value = input.value;
};

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
    let input = getInput;
    let numbersRegExp = split.input(/[\*\/\+\-]/);
    let inputsymbolRegExp = /[+*/-]/g;
    let symbol = input.match(inputsymbolRegExp);
    let result = selectSymbol(symbol)(parseFloat(numbersRegExp[0]),parseFloat(numbersRegExp[1]));

    return result;
}
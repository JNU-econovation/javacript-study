var secondDot = false;

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

function type(char) {
    var input = getInput;
    input.value = input.value + char;
}; 

function getInput(){
    document.getElementById('input');
}

function startCal(input){
    var input = getInput;
    var numbers = split.input(/[\*\/\+\-]/);
    var inputsymbol = /[+*/-]/g;
    var leftNum = parseFloat(numbers[0]);
    var symbol = input.match(inputsymbol);
    var rightNum = parseFloat(numbers[1]);

    checkSplited(numbers);

    return checkSymbol;
};

function checkSplited(numbers){
    if(numbers.length > 2) {
        return false;
    }
    return true;
}

function typeDot(char){
    if(secondDot) {
        return;
    }
    input.value = input.value + char;
};

function calculate(symbol){
    var calculation = {
        '/' : function(leftNum , rightNum) { return leftNum / rightNum},
        '*' : function(leftNum , rightNum) { return leftNum * rightNum},
        '+' : function(leftNum , rightNum) { return leftNum + rightNum},
        '-' : function(leftNum , rightNum) { return leftNum - rightNum}
    }
    return calculation (symbol);
}
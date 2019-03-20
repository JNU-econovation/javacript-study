var key = $('.key');
key.hover(function(){
    key.css('border','2px solid blue');
}) 

function clear() {
    document.getElementById('input').value = "";
    document.getElementById('result').value = "";
}

function enter(char) {
    var input = document.getElementById('input');
    input.value = input.value + char;
}  

window.addEventListener('keydown', writeNum);

function writeNum(e) {
    const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key.enter();
};

function startCal(input){
    var input = document.getElementById('input');
    var numbers = split.input(/[\*\/\+\-]/);
    var inputsymbol = /[+*/-]/g;
    var leftNum = parseFloat(numbers[0]);
    var symbol = input.match(inputsymbol);
    var rightNum = parseFloat(numbers[1]);

    return checkSymbol
};

function checkSplited(numbers){
    if(numbers.length > 2) {
        return false;
    }
    return true;
}

function checkSymbol(symbol){
    var calculation = {
        '/' : function(leftNum , rightNum) { return leftNum / rightNum},
        '*' : function(leftNum , rightNum) { return leftNum * rightNum},
        '+' : function(leftNum , rightNum) { return leftNum + rightNum},
        '-' : function(leftNum , rightNum) { return leftNum - rightNum}
    }
    return calculation (symbol);
}
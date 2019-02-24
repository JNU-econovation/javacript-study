function startCal(){
    var input = documnet.getElementById('input');
    var numbers = input.split(/[\*\/\+\-]/);
    var leftNumber = numbers[0];
    var rightNumber = numbers[1];
    var inputSymbol = /[+*/-]/g;
    var Symbol = input.match(inputSymbol);
}

function plus(leftNumber, rightNumber){
    return parseInt(leftNumber)+parseInt(rightNumber);
}

function minus(leftNumber, rightNumber){
    return parseInt(leftNumber)-parseInt(rightNumber);
}

function divide(leftNumber, rightNumber){
    return parseInt(leftNumber)/parseInt(rightNumber);
}

function multiply(leftNumber, rightNumber){
    return parseInt(leftNumber)*parseInt(rightNumber);
}
    
function checkSymbol(leftNumber, rightNumber, symbol){
    switch(Symbol){
        case '+':
            return plus(leftNumber, rightNumber);
            break;
        case '-':
            return minus(leftNumber, rightNumber);
            break;
        case '*':
            return multiply(leftNumber, rightNumber);
            break;
        case '/':
            return divide(leftNumber, rightNumber);
            break;
    }
}

function reset() {
    document.getElementById('input').value = "";
    document.getElementById('result').value = "";
}

function give(char) {
    var input = document.getElementById('input');
    input.value = input.value + char;
}  

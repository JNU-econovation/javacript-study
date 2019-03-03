function startCal(){
    var resultValue = categorize(input);
}



function categorize(input){
    var input = documnet.getElementById('input');
    var numbers = input.split(/[\*\/\+\-]/);
    var leftNumber = numbers[0];
    var rightNumber = numbers[1];
    var inputsymbol = /[+*/-]/g;
    var symbol = input.match(inputsymbol);

    return resultValue;

}

function plus(leftNumber, rightNumber){
    return parseInt(leftNumber)+parseInt(rightNumber);
}

function minus(leftNumber, rightNumber){
    return leftNumber-rightNumber;
}

function divide(leftNumber, rightNumber){
    return leftNumber/rightNumber;
}

function multiply(leftNumber, rightNumber){
    return leftNumber*rightNumber;
}
    
function checkSymbol(leftNumber, rightNumber, symbol){
    switch(symbol){
        case '+':
            return plus(leftNumber, rightNumber);
        case '-':
            return minus(leftNumber, rightNumber);            
        case '*':
            return multiply(leftNumber, rightNumber);          
        case '/':
            return divide(leftNumber, rightNumber);
    }

    
}

function reset() {
    document.getElementById('input').value = "";
    document.getElementById('result').value = "";
}

function enter(char) {
    var input = document.getElementById('input');
    input.value = input.value + char;
}  

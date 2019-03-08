
function getInput() {
    return document.getElementById("input");
}

function run() {
    var regExp = /[0-9+/*-]/;
    window.addEventListener('keydown', function(element){

        if(element.keyCode == 13) {
            calculate();
        }

        if(element.keyCode == 8){
            clearAll();
        }

        if(element.key.match(regExp)){
            getInput().value += element.key;
        }
    });
}

function input(element) {
    getInput().value += element.innerHTML;
}

function clearAll() {
    getInput().value = '';
}

function calculate() {
    var result = operator(getInput());
    getInput().value = result;
}

function check(splited) {
    if(splited.length > 2){
        return false;
    }

    return true;
}

function dealError() {
    alert("error");
}

function operator(operator) {
    var input = operator.value;
    var regExp = /[+*/-]/;
    
    var splited = String(input).split(regExp);
    var operator = String(input).match(regExp);
    var result = selectOperator(operator)(parseFloat(splited[0]), parseFloat(splited[1]));

    if(check(result) && isFinite(result)){
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
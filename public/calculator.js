
function bringInput() {
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
            bringInput().value += element.key;
        }
    });
}

function input(element) {
    bringInput().value += element.innerHTML;
}

function clearAll() {
    bringInput().value = '';
}

function calculate() {
    var result = operator(bringInput());
    bringInput().value = result;
}


function check(splited) {
    
    if(splited.length > 2){
        return false;
    }
    return true;
}

function operator(element) {

    var input = element.value;
    var regExp = /[+*/-]/;
    
    var splited = String(input).split(regExp);
    var operator = String(input).match(regExp);

    if(check(splited)){

        switch (operator[0]) {
            case "+" : return plus(splited[0], splited[1]);
            case "-" : return minus(splited[0], splited[1]);
            case "/" : return divide(splited[0], splited[1]);
            case "*" : return multiply(splited[0], splited[1]);
        }

    }

    return "error";

}

function plus(first ,second){
    return parseFloat(first) + parseFloat(second);
}

function minus(first ,second){
    return parseFloat(first) - parseFloat(second);
}

function divide(first ,second) {
    return parseFloat(first) / parseFloat(second);
}

function multiply(first ,second) {
    return parseFloat(first) * parseFloat(second);
}
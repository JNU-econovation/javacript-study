
function run() {

    var regExp = /[0-9+/*-]/;

    window.addEventListener('keydown', function(e){
        var input = document.getElementById("input");
        
        if(e.keyCode == 13) {
            calc();
        }

        if(e.keyCode == 8){
            clearAll();
        }

        if(e.key.match(regExp)){
            input.value += e.key;
        }
    });
}

function input(e) {
    var input = document.getElementById("input");
    input.value += e.innerHTML;
}

function clearAll() {
    var input = document.getElementById("input");
    input.value = '';
}

function calc() {

    var input = document.getElementById("input");
    var result = operator(input);
    input.value = result;
}


function check(splited) {
    
    if(splited.length > 2){
        return false;
    }else return true;
}

function operator(e) {

    var input = e.value;
    var regExp = /[+*/-]/;

    var splited = input.split(regExp);
    var operator = input.match(regExp);
    var result;
    
    if(check(splited)){
        
        switch (operator[0]) {
            case "+" : return plus(splited[0], splited[1]);
            case "-" : return minus(splited[0], splited[1]);
            case "/" : return divide(splited[0], splited[1]);
            case "*" : return multiply(splited[0], splited[1]);
        }

    } else {
        return "error";
    }

}

function plus(x ,y){
    var ret = parseFloat(x) + parseFloat(y);
    return ret;
}

function minus(x, y){
    var ret = parseFloat(x) + parseFloat(y);
    return x-y;
}

function divide(x, y) {
    var ret = parseFloat(x) + parseFloat(y);
    return x/y;
}

function multiply(x, y) {
    var ret = parseFloat(x) + parseFloat(y);
    return x*y;
}
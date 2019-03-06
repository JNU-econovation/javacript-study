
function bringInput() {
    return document.getElementById("input");
}

function run() {
    var regExp = /[0-9+/*-]/;

    window.addEventListener('keydown', function(e){
        
        if(e.keyCode == 13) {
            calc();
        }

        if(e.keyCode == 8){
            clearAll();
        }

        if(e.key.match(regExp)){
            bringInput().value += e.key;
        }
    });
}

function input(e) {
    bringInput().value += e.innerHTML;
}

function clearAll() {
    bringInput().value = '';
}

function calc() {
    var result = operator(bringInput());
    bringInput().value = result;
}


function check(splited) {
    
    if(splited.length > 2){
        return false;
    }else return true;
}

function operator(e) {

    var input = e.value;
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

    } else {
        return "error";
    }

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
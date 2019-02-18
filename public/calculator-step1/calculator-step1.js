function inputPad(i){
    document.getElementById("inputBar").value += i;
}

function clearAllBars(){
    document.getElementById("inputBar").value = "";
    document.getElementById("resultBar").value = "";
}

function equal(){
    var tempInput = document.getElementById("inputBar").value;
    var input = tempInput.replace(" ","");
    
    if(checkIsException(input)){
        errors();
    }
    
    var resultObj = checkRegex(input);
    var result = doMath(resultObj.numA, resultObj.numB, resultObj.calSym);
    
    if(result == null){
        alert("0으로 나눌 수 없습니다.");
        return;
    }
    
    document.getElementById("resultBar").value = result;
}

function errors(){
    alert("잘못된 형식입니다.");
    clearAllBars();
}

function checkIsException(input){
    
}

function checkNumberOfDigit(input){
    var pattern = /(\d+)/g;
    console.log("number of digit : " + input.match(pattern).length);
    return (input.match(pattern).length >= 3);
}

function checkNumberOfCalSym(input){
    var pattern = /[+*/-]/g;
    console.log("number of sym : " + input.match(pattern).length);
    return (input.match(pattern).length >= 2);
}

function checkLanguage(input){
    var pattern = /[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i;
    return (input.match(pattern) != null);
}

function checkLocationOfCalSym(input){
    var pattern = /^[+*/-]/;
    return (input.match(pattern) != null);
}

function add(a, b){
    return parseInt(a)+parseInt(b);
}

function multiply(a, b){
    return parseInt(a)*parseInt(b);
}

function divide(a, b){
    return parseInt(a)/parseInt(b);
}

function subtract(a, b){
    return parseInt(a)-parseInt(b);
}

function checkRegex(input){
    var patternNums = /(\d+)/g;
    var patternCalSym = /[+*/-]/;
    var numA = input.match(patternNums)[0];
    var numB = input.match(patternNums)[1];
    var calSym = input.match(patternCalSym)[0];
    
    var resultObj = {
        'numA' : numA,
        'numB' : numB,
        'calSym' : calSym
    }
    
    return resultObj;
}

function doMath(leftNum, rightNum, calSym){
    switch(calSym){
        case '+':
            return add(leftNum, rightNum);
            break;
        case '*':
            return multiply(leftNum, rightNum);
            break;
        case '-':
            return subtract(leftNum, rightNum);
            break;
        case '/':
            if(numB == 0){return null;}
            return divide(leftNum, rightNum);
            break;
    }
}
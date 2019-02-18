function inputPad(i){
    document.getElementById("inputBar").value += i;
}

function clearAllBar(){
    document.getElementById("inputBar").value = "";
    document.getElementById("resultBar").value = "";
}

function equal(){
    var tempInput = document.getElementById("inputBar").value;
    var input = tempInput.replace(" ","");
    
    if(checkLanguage(input) || checkNumberOfDigit(input) || checkNumberOfCalSym(input) || checkLocationOfCalSym(input)){
        alert("잘못된 입력입니다."); 
        clearAllBar();
        return;
    }
    
    var resultObj = checkRegex(input);
    var result = doMath(resultObj.numA, resultObj.numB, resultObj.calSym);
    
    if(result == null){
        alert("0으로 나눌 수 없습니다.");
        return;
        clearAllBar();
    }
    
    document.getElementById("resultBar").value = result;
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

function doMath(numA, numB, calSym){
    switch(calSym){
        case '+':
            return add(numA, numB);
            break;
        case '*':
            return multiply(numA, numB);
            break;
        case '-':
            return subtract(numA, numB);
            break;
        case '/':
            if(numB == 0){return null;}
            return divide(numA, numB);
            break;
    }
}
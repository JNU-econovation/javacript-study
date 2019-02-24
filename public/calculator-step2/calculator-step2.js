var isLaterNumberInput = false;
var isLaterNumberInputStart = false;
var CalculatorData = {
    'formerNumber': null,
    'laterNumber': null,
    'symbol': null
}

function clickNumber(number){
    var displayBar = document.getElementById("displayBar");
    
    if(!isLaterNumberInput){
        if(displayBar.value != 0){
            displayBar.value += number;    
            return;
        }
        displayBar.value = number;
        return;
    }
    
    if(isLaterNumberInput){
        if(isLaterNumberInputStart){
            displayBar.value += number;
            return;
        }
        displayBar.value = number;
        isLaterNumberInputStart = true;
        return;
    }
}

function clickSymbol(symbol){
    var displayBar = document.getElementById("displayBar");
    
    if(CalculatorData.formerNumber != null){
        equal();
    }
    
    CalculatorData.formerNumber = displayBar.value;
    CalculatorData.symbol = symbol;
    
    isLaterNumberInput = true;
    isLaterNumberInputStart = false;
}

function initCalculatorData(){
    CalculatorData.formerNumber = null;
    CalculatorData.laterNumber = null;
    CalculatorData.symbol = null;
}

function equal(){
    if(CalculatorData.laterNumber == null){
        return;
    }
    
    CalculatorData.laterNumber = displayBar.value;
    isLaterNumberInput = false;
    isLaterNumberInputStart = false;
    document.getElementById("displayBar").value = doMath(CalculatorData);
    initCalculatorData();
}

function clearDisplay(){
    document.getElementById("displayBar").value = "0";
}

function equal(){
    var tempInput = document.getElementById("inputBar").value;
    var input = tempInput.replace(" ","");
    
    if(checkIsException(input)){
        errors();
        return;
    }
    
    var ResultObj = checkRegex(input);
    var result = doMath(ResultObj.numA, ResultObj.numB, ResultObj.calSym);
    
    if(result == null){
        alert("0으로 나눌 수 없습니다.");
        return;
    }
    document.getElementById("displayBar").value = result;
}

function errors(){
    alert("잘못된 형식입니다.");
    clearDisplay();
}

function checkIsException(input){
    if(input == null) {return true;}
    var splitedBySym = input.split(/[+*/-]/);
    if(splitedBySym[0] == "" || splitedBySym[splitedBySym.length-1] == "") {return true;}
    if(splitedBySym.length >= 3) {return true;}
    if(input.match(/[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i) != null) {return true;}
}

function add(leftNum, rightNum){
    return parseFloat(leftNum)+parseFloat(rightNum);
}

function multiply(leftNum, rightNum){
    return parseFloat(leftNum)*parseFloat(rightNum);
}

function divide(leftNum, rightNum){
    return parseFloat(leftNum)/parseFloat(rightNum);
}

function subtract(leftNum, rightNum){
    return parseFloat(leftNum)-parseFloat(rightNum);
}

function checkRegex(input){
    var patternNums = /(\d+)/g;
    var patternCalSym = /[+*/-]/;
    var numA = input.match(patternNums)[0];
    var numB = input.match(patternNums)[1];
    var calSym = input.match(patternCalSym)[0];
    
    var ResultObj = {
        'numA' : numA,
        'numB' : numB,
        'calSym' : calSym
    }
    return ResultObj;
}

function doMath(CalculatorData){
    switch(CalculatorData.symbol){
        case '+':
            return add(CalculatorData.formerNumber, CalculatorData.laterNumber);
        case '*':
            return multiply(CalculatorData.formerNumber, CalculatorData.laterNumber);
        case '-':
            return subtract(CalculatorData.formerNumber, CalculatorData.laterNumber);
        case '/':
            if(CalculatorData.laterNumber == 0){return 'ERROR';}
            return divide(CalculatorData.formerNumber, CalculatorData.laterNumber);
    }
}
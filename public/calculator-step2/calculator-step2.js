var isNumberInputDone = false;
var isNumberInputStart = false;
var calculatorQueue = [];

function clickNumber(number){
    var displayBar = document.getElementById("displayBar");
    
    if(!isNumberInputDone){
        if(displayBar.value != 0){
            displayBar.value += number;    
            return;
        }
        displayBar.value = number;
        return;
    }
    
    if(isNumberInputDone){
        if(isNumberInputStart){
            displayBar.value += number;
            return;
        }
        displayBar.value = number;
        isNumberInputStart = true;
        return;
    }
}

function clickSymbol(symbol){
    var displayBar = document.getElementById("displayBar");
    calculatorQueue.push(displayBar.value);
    console.log("clickSymbol : " + calculatorQueue);
    
    // Queue
    if(calculatorQueue.length == 3){
        // should check its composite is num-sym-num
        console.log("Bfter Do Math : " + calculatorQueue);
        calculatorQueue.push(doMath());
        displayBar.value = calculatorQueue[0];
        console.log("After Do Math : " + calculatorQueue);
        calculatorQueue.push(symbol);
        isNumberInputDone = true;
        isNumberInputStart = false;
        return;
    }
    
    calculatorQueue.push(symbol);
    
    isNumberInputDone = true;
    isNumberInputStart = false;
}

function equal(){
    var displayBar = document.getElementById("displayBar");
    calculatorQueue.push(displayBar.value);
        
    if(calculatorQueue.length == 1){
        calculatorQueue.shift();
        return;
    }
    
    isNumberInputDone = false;
    isNumberInputStart = false;
    displayBar.value = doMath();
}

function clearDisplay(){
    calculatorQueue = [];
    document.getElementById("displayBar").value = "0";
    isNumberInputDone = false;
    isNumberInputStart = false;
}

function add(formerNumber, laterNumber){
    return formerNumber+laterNumber;
}

function multiply(formerNumber, laterNumber){
    return formerNumber*laterNumber;
}

function divide(formerNumber, laterNumber){
    return formerNumber/laterNumber;
}

function subtract(formerNumber, laterNumber){
    return formerNumber-laterNumber;
}

function doMath(){
    var formerNumber = parseFloat(calculatorQueue.shift());
    var symbol = calculatorQueue.shift();
    var laterNumber = parseFloat(calculatorQueue.shift());
    
    switch(symbol){
        case '+':
            return add(formerNumber, laterNumber);
        case '*':
            return multiply(formerNumber, laterNumber);
        case '-':
            return subtract(formerNumber, laterNumber);
        case '/':
            if(laterNumber == 0){return 'ERROR';}
            return divide(formerNumber, laterNumber);
    }
}
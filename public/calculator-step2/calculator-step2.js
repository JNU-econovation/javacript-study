var isNumberInputDone = false;
var isNumberInputStart = false;
var calculatorQueue = [];

/*
var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]
alert(i);              // displays 2
*/

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
        var tempNumber = calculatorQueue.shift();
        displayBar.value = tempNumber;
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

function doMath(){
    var formerNumber = calculatorQueue.shift();
    var symbol = calculatorQueue.shift();
    var laterNumber = calculatorQueue.shift();
    
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
const DONE = 0;
const STARTED = 1;
var inputStatement = DONE;
var isDotUsed = false;
var calculatorQueue = [];

function initCalculator(){
	document.getElementById("displayBar").value = "0";
	window.addEventListener('keydown', inputNumberByKey);
}

function inputNumberByKey(e){
	const key = document.querySelector(`td[data-key="${e.keyCode}"]`);
	if(key == null) return;
	console.log(key);
	key.onclick();
}

function clickNumber(number){
    var displayBar = document.getElementById("displayBar");

	if(number == '.'){
		if(isDotUsed) {
			return;
		}
		isDotUsed = true;
	}

	if(inputStatement == DONE){
        displayBar.value = number;
        inputStatement = STARTED;
        return;
	}

	if(inputStatement == STARTED){
		displayBar.value += number;
		return;
	}
}

function clickSymbol(symbol){
    var displayBar = document.getElementById("displayBar");
    calculatorQueue.push(displayBar.value);

    if(calculatorQueue.length == 3){
        // should check its composite is num-sym-num
        calculatorQueue.push(doMath());
        displayBar.value = calculatorQueue[0];
        calculatorQueue.push(symbol);
		inputStatement = DONE;
		isDotUsed = false;
        return;
    }
    calculatorQueue.push(symbol);
	inputStatement = DONE;
	isDotUsed = false;
}

function equal(){
    var displayBar = document.getElementById("displayBar");
    calculatorQueue.push(displayBar.value);

    if(calculatorQueue.length == 1){
        calculatorQueue.shift();
        return;
    }
    inputStatement = DONE;
    displayBar.value = doMath();
}

function clearDisplay(){
    calculatorQueue = [];
    document.getElementById("displayBar").value = "0";
    inputStatement = DONE;
	isDotUsed = false;
}

function calculate(symbol){
    var CalculationFuncs = {
        '+' : function(former, later){return former+later;},
        '-' : function(former, later){return former-later;},
        '*' : function(former, later){return former*later;},
        '/' : function(former, later){
            if(later == 0){
                return "ERROR";
            }
            return former/later;
        },
    }
    return CalculationFuncs[symbol];
}

function doMath(){
    var formerNumber = parseFloat(calculatorQueue.shift());
    var symbol = calculatorQueue.shift();
    var laterNumber = parseFloat(calculatorQueue.shift());

    return calculate(symbol)(formerNumber, laterNumber);
}

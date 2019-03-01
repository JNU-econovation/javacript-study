const DONE = 0;
const STARTED = 1;
var inputStatement = DONE;
var isDotUsed = false;
var calculatorQueue = [];

function initCalculator(){
	document.getElementById("displayBar").value = "0";
	window.addEventListener('keydown', inputNumberByKey);
}

function initInputStatement(){
	inputStatement = DONE;
	isDotUsed = false;
}

function $(selector){
	return document.querySelector(selector);
}

function inputNumberByKey(e){
	const key = document.querySelector(`td[data-key="${e.keyCode}"]`);
	if(!key) return;
	key.onclick();
}

function clickNumber(number){
	if(number == '.'){
		if(isDotUsed) {
			return;
		}
		isDotUsed = true;
	}

	if(inputStatement == DONE){
		$("#displayBar").value = number;
		inputStatement = STARTED;
		return;
	}
	$("#displayBar").value += number;
}

function clickSymbol(symbol){
	calculatorQueue.push(displayBar.value);

	if(calculatorQueue.length == 3){
		calculatorQueue.push(doMath());
		$("#displayBar").value = calculatorQueue[0];
		calculatorQueue.push(symbol);
		initInputStatement();
		return;
	}
	calculatorQueue.push(symbol);
	initInputStatement();
}

function equal(){
	calculatorQueue.push($("#displayBar").value);

	if(calculatorQueue.length == 1){
		calculatorQueue.shift();
		return;
	}
	inputStatement = DONE;
	$("#displayBar").value = doMath();
}

function clearDisplay(){
	calculatorQueue = [];
	$("#displayBar").value = "0";
	initInputStatement();
}

function calculate(symbol){
	var CalculationFuncs = {
		'+' : function(former, later){return former+later;},
		'-' : function(former, later){return former-later;},
		'*' : function(former, later){return former*later;},
		'/' : function(former, later){return former/later;}
	}
	return CalculationFuncs[symbol];
}

function checkExceptionDivideBy(number) {
	if(symbol == '/' && laterNumber == number) return true;
}

function doMath(){
	var formerNumber = parseFloat(calculatorQueue.shift());
	var symbol = calculatorQueue.shift();
	var laterNumber = parseFloat(calculatorQueue.shift());

	if (checkExceptionDivideBy(0)) return "ERROR";
	return calculate(symbol)(formerNumber, laterNumber);
}

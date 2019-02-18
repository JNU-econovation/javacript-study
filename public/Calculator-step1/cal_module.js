function plus() {
    return parseInt(number1)+parseInt(number2);
}

function substract() {
    return parseInt(number1)-parseInt(number2);
}

function multiply() {
    return parseInt(number1)*parseInt(number2);
}

function divide() {
    number1=parseInt(number1);
    number2=parseInt(number2);
    return parseFloat(number1/number2);
}

function enterKey(pressedKey) {
    if(document.getElementById("input").value=="") {
        document.getElementById("input").value=pressedKey;
    }

    document.getElementById("input").value = document.getElementById("input").value + pressedKey;
}

function reset() {
    document.getElementById("input").value="";
    document.getElementById("output").value="";
}

function setResult(result) {
    document.getElementById("result").value=result;
}
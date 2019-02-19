function calculateResult() {
    var input = document.getElementById("input").value;
    var inputList = input.split(/[÷×+-]/);
    var number1=inputList[0];
    var number2=inputList[1];
    console.log(inputList);

    if(/[÷]/.test(input)) {
        number1=parseInt(number1);
        number2=parseInt(number2);
        document.getElementById("output").value = parseFloat(number1/number2);
    }

    if(/[×]/.test(input)) {
        document.getElementById("output").value = parseInt(number1)*parseInt(number2);
    }

    if(/[+]/.test(input)) {
        document.getElementById("output").value = parseInt(number1)+parseInt(number2);
    }

    if(/[-]/.test(input)) {
        document.getElementById("output").value = parseInt(number1)-parseInt(number2);
    }
}

function enterKey(pressedKey) {
    //if(document.getElementById("input").value="" && !isNumberFirst(pressedKey)) {
    //    alert('Insert number first.');
    //    return;
    //}

    document.getElementById("input").value = document.getElementById("input").value + pressedKey;
}

/*function isSpecialPattern(input) {
    var specialPattern = /[÷×-+]/gi;
    if(specialPattern.test(input) == true) {
        return true;
    }
}*/

/*function isNumberFirst(pressedKey) {
    var numbers = /[0-9]/gi;
    if(numbers.test(pressedKey)==false) {
        return false;
    }
}*/

function reset() {
    document.getElementById("input").value="";
    document.getElementById("output").value="";
}

function setResult(result) {
    document.getElementById("result").value=result;
}
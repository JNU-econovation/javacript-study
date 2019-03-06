//ECONOVATION, ECE 151807 정회형. 2019.03.01

function multiply(splittedNum) {
    return (splittedNum[0] * splittedNum[1]);
}

function divide(splittedNum) {
    return (splittedNum[0] / splittedNum[1]);
}

function add(splittedNum) {
    return (parseInt(splittedNum[0]) + parseInt(splittedNum[1]));
}

function subtract(splittedNum) {
    return (splittedNum[0] - splittedNum[1]);
}

function calculate(splittedNum) {
    var mul = /\*/;
    var div = /\//;
    var plus = /\+/;
    var minus = /\-/;

    if (mul.exec(grabDisplay().value)) {
        return multiply(splittedNum);
    }
    if (div.exec(grabDisplay().value)) {
        return divide(splittedNum);
    }
    if (plus.exec(grabDisplay().value)) {
        return add(splittedNum);
    }
    if (minus.exec(grabDisplay().value)) {
        return subtract(splittedNum);
    }
}

function evaluateCal() {
    var operands = /[\*\/\+\-]/;
    var splittedNum = grabDisplay().value.split(operands); // 연산자 기준으로 나눔

    if (checkCalValidity(splittedNum) || (CheckDividedByZero(splittedNum))) {
        grabDisplay().value = calculate(splittedNum);
    } // Valid한 경우

    if (!isNaN(splittedNum[0]) && isNaN(splittedNum[1])) {
        grabDisplay().value = splittedNum[0];
    } // 연산자 없이 숫자만 입력했을 경우
 }

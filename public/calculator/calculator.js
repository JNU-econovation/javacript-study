function errors() {
    alert('형식이 맞지 않습니다.');
}

function selectOperator(operator) {
    var calculation = {
        '+': function (leftNumber, rightNumber) { return leftNumber + rightNumber },
        '-': function (leftNumber, rightNumber) { return leftNumber - rightNumber },
        '*': function (leftNumber, rightNumber) { return leftNumber * rightNumber },
        '/': function (leftNumber, rightNumber) { return leftNumber / rightNumber }
    }
    return calculation[operator];
}

function checkExpression(plotedNumber){
    if(plotedNumber[plotedNumber.length-1] == "" || plotedNumber.length != 2){
        return true;
    }
    return false;
}

function enterToCalculate() {
    var Expression = document.getElementById('inputDisplay').value;
    var plotInputExpression = /[+*/-]/g
    var plotedNumber = Expression.split(plotInputExpression);
    var plotedOperater = Expression.match(plotInputExpression);
    var result;
    if(checkExpression(plotedNumber)){
        return errors();
    }
    for (var i = 0; i < plotedOperater.length; i++) {
        result = selectOperator(plotedOperater[i])(parseFloat(plotedNumber[i]), parseFloat(plotedNumber[i + 1]));
        plotedNumber[i + 1] = result;
    }
    document.getElementById('outputDisplay').value = plotedNumber[plotedNumber.length - 1]
}

function clearDisplay() {
    console.log('clear')
    document.getElementById('inputDisplay').value = null;
    document.getElementById('outputDisplay').value = null;
}
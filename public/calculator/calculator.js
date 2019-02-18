function selectOperator(operator) {
    var calculation = {
        '+': function (leftNumber, rightNumber) { return leftNumber + rightNumber },
        '-': function (leftNumber, rightNumber) { return leftNumber - rightNumber },
        '*': function (leftNumber, rightNumber) { return leftNumber * rightNumber },
        '/': function (leftNumber, rightNumber) { return leftNumber / rightNumber }
    }
    return calculation[operator];
}

function enterToCalculate() {
    var Expression = document.getElementById('inputDisplay').value;
    var plotInputExpression = /[+*/-]/g
    var plotedNumber = Expression.split(plotInputExpression);
    var plotedOperater = Expression.match(plotInputExpression);
    var result;
    for (var i = 0; i < plotedOperater.length; i++) {
        result = selectOperator(plotedOperater[i])(parseFloat(plotedNumber[i]), parseFloat(plotedNumber[i + 1]));
        plotedNumber[i + 1] = result;
    }
    document.getElementById('outputDisplay').value = plotedNumber[plotedNumber.length - 1]
}
const Calculator = {
    plus : (a, b) => {
        return a+b;
    },
    minus : (a, b) => {
        return a-b;
    },
    multiply : (a, b) => {
        return a*b;
    },
    divide : (a, b) => {
        return a/b;
    },
    modulo : (a, b) => {
        return a%b;
    },
    mapper : {
        "+" : (leftValue, rightValue) => Calculator.plus(leftValue, rightValue),
        "-" : (leftValue, rightValue) => Calculator.minus(leftValue, rightValue),
        "*" : (leftValue, rightValue) => Calculator.multiply(leftValue, rightValue),
        "/" : (leftValue, rightValue) => Calculator.divide(leftValue, rightValue),
        "%" : (leftValue, rightValue) => Calculator.modulo(leftValue, rightValue),
    },
    run : function(leftValue, operator, rightValue) {
        return this.mapper[operator](leftValue, rightValue);
    }
}
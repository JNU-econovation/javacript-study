const Calculator = {
    mapper : {
       "+" : (leftValue, rightValue) => leftValue + rightValue,
       "-" : (leftValue, rightValue) => leftValue - rightValue,
       "*" : (leftValue, rightValue) => leftValue * rightValue,
       "/" : (leftValue, rightValue) => leftValue / rightValue,
       "%" : (leftValue, rightValue) => leftValue % rightValue,
    },
    run : function(leftValue, operator, rightValue) {
        return this.mapper[operator](leftValue, rightValue);
    }
}
const Calculator = {
    mapper : {
       "+" : (leftValue, rightValue) => leftValue + rightValue,
       "-" : (leftValue, rightValue) => leftValue - rightValue,
       "*" : (leftValue, rightValue) => leftValue * rightValue,
       "/" : (leftValue, rightValue) => {
           if(rightValue === 0) return NaN;
            
            return leftValue / rightValue;
       },
       "%" : (leftValue, rightValue) => leftValue % rightValue,
    },
    run : function(leftValue, operator, rightValue) {
        return this.mapper[operator](leftValue, rightValue);
    }
}
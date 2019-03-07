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
        return a/b;
    },
    run : function (leftValue, operator, rightValue){
        let result = 0;
        
        switch(operator){
            case "+":
                result = this.plus(leftValue, rightValue);
                break;
            case "-":
                result = this.minus(leftValue, rightValue);
                break;
            case "*":
                result = this.multiply(leftValue, rightValue);
                break;
            case "/":
                result = this.divide(leftValue, rightValue);
                break;
            case "%":
                result = this.modulo(leftValue, rightValue);
                break;
        }
        
        return result;
    }
}
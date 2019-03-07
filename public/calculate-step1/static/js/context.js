const operatorRegExp = /[%*/+-]/;
const operatorArray = ['+', '-', '*', '/', '%'];

const Context = {
    getValues : (expression) => {
        let values = expression.split(operatorRegExp);
        let operators = expression.match(operatorRegExp);
        
        if(!Context.isValid(values, operators))
            return { result: false }
        
        return {
            leftValue: parseInt(values[0]),
            operator: operators[0],
            rightValue: parseInt(values[1]),
            result: true
        };
    },
    isValid : (values, operators) => {
        if(values.length < 2)
            return false;
        
        for(var i in values)
            if(!isNumber(values[i]))
                return false;
                
        if(operators == null)
            return false;
                
        if(operators.length < 1)        
            return false;
                
        if(!operatorArray.includes(operators[0]))
            return false;
        
        return true;
    },
}

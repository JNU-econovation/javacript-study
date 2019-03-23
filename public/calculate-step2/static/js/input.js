var inputField;
var expressionView;

const initialize = () => {
    inputField = document.getElementById('input');
    expressionView = document.getElementById('expression');
    bindKey();
}

const clickNumber = (value) => {
    if(value === "." && inputField.textContent.includes("."))
        return;
        
    if(Context.isNew())
    {
        inputField.textContent = '';
        Context.nextOrder();
    }
        
    inputField.textContent += value;
} 

const clickOperator = (operator) => {
    let lastValue = inputField.textContent.trim();
    
    expressionView.textContent += lastValue;
    Context.append(parseFloat(lastValue));
    Context.nextOrder();
    
    if(Context.needCalculate())
    {
        let result = calculate();
        inputField.textContent = result;
        
        Context.append(parseFloat(result));
        expressionView.textContent += operator;
        Context.append(operator);
        return;
    }
    
    expressionView.textContent += operator;
    Context.append(operator);
}

const clickClear = () => {
    expressionView.textContent = '';
    inputField.textContent =  '';
    Context.clear();
}

const clickEqual = () =>{
    let value = inputField.textContent;
    
    Context.append(parseFloat(value));
    
    if(!Context.needCalculate())
    {
        expressionView.textContent = '';
        inputField.textContent = '';
        return;
    }
    
    let result = calculate();
    
    inputField.textContent = result;
    Context.clear();
}

const calculate = () => {
    let expressionValues = Context.getValues();
    
    if(!expressionValues.result)
        return "Error";
    
    let leftValue = expressionValues.leftValue;
    let operator = expressionValues.operator;
    let rightValue = expressionValues.rightValue;
    
    return Calculator.run(leftValue, operator, rightValue);
}

const popInputFieldValue = () => {
    if(inputField.textContent.length > 0)
        inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length-1);
}

const bindKey = () => {
    // TODO :: event bubbling
    window.addEventListener('keydown', (e) => {
        if (e.key == 'Enter' || e.keyCode == '=')
            clickEqual();
            
        if (e.key == 'Backspace')
            popInputFieldValue();
        
        if (e.keyCode >= '0'.charCodeAt(0) && e.keyCode <= '9'.charCodeAt(0))
            clickNumber(String(e.keyCode - 48));
            
        if (e.key == '-')
            clickOperator('-');
        
        if (e.key == '+')
            clickOperator('+');
            
        if (e.key == '*')
            clickOperator('*');
        
        if (e.key == '/')
            clickOperator('/');
            
        if (e.key == 'c')
            clickClear();
            
        e.stopPropagation();
    });
}

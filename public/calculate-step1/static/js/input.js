var expressionInput;
var resultView;

const initialize = () => {
    expressionInput = document.getElementById('expression');
    resultView = document.getElementById('result');
    bindKey();
}

const clickButton = (value) => {
    appendExpressionView(value);
} 

const clickClear = () => {
    updateExpressionView('');
}

const clickEqual = () =>{
    let expressionValues = Context.getValues(expressionInput.value);
    
    if(!expressionValues.result)
    {
        showResult('Fail');
        return;
    }
    
    let leftValue = expressionValues.leftValue;
    let operator = expressionValues.operator;
    let rightValue = expressionValues.rightValue;
    
    let result = Calculator.run(leftValue, operator, rightValue);
    showResult(result);
}

const appendExpressionView = (character) => {
    expressionInput.value += character;
}

const popExpressionView = () => {
    if(expressionInput.value.length > 0)
        expressionInput.value = expressionInput.value.substring(0, expressionInput.value.length-1);
}

const updateExpressionView = (expression) => {
    expressionInput.value = expression;
}

const showResult = (result) => {
    resultView.textContent = result;
}

const bindKey = () => {
    // TODO :: event bubbling
    window.addEventListener('keydown', (e) => {
        console.log(e.key);
        if (e.key == 'Enter' || e.keyCode == '=')
            clickEqual();
            
        if (e.key == 'Backspace')
            popExpressionView();
        
        if (document.activeElement === expressionInput)
            return;   
        
        if (e.keyCode >= '0'.charCodeAt(0) && e.keyCode <= '9'.charCodeAt(0))
            appendExpressionView(String(e.keyCode - 48));
            
        if (e.key == '-')
            appendExpressionView('-');
        
        if (e.key == '+')
            appendExpressionView('+');
            
        if (e.key == '*')
            appendExpressionView('*');
        
        if (e.key == '/')
            appendExpressionView('/');
            
        e.stopPropagation();
    });
}

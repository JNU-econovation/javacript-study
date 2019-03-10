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
        if (e.keyCode == 13 || e.keyCode == 187)
            clickEqual();
            
        if (e.keyCode == 8)
            popExpressionView();
        
        if (document.activeElement === expressionInput)
            return;   
        
        if (e.keyCode >= 48 && e.keyCode <= 58)
            appendExpressionView(String(e.keyCode - 48));
            
        if (e.keyCode >= 96 && e.keyCode <= 99)
            appendExpressionView(String(e.keyCode - 96));
            
        if (e.keyCode >= 100 && e.keyCode <= 105)
            appendExpressionView(String(e.keyCode - 100 + 4));
            
        if (e.keyCode == 189 || e.keyCode == 109)
            appendExpressionView('-');
        
        if (e.keyCode == 107)
            appendExpressionView('+');
            
        if (e.keyCode == 106)
            appendExpressionView('*');
        
        if (e.keyCode == 191)
            appendExpressionView('/');
            
        e.stopPropagation();
    });
}

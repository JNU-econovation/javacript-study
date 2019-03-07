var expressionInput;
var resultView;

const initialize = () => {
    expressionInput = document.getElementById('expression');
    resultView = document.getElementById('result');
    bindKey();
}

const clickNumber = (node) => {
    updateExpressionView(String(node.id));
}

const clickPlus = () => {
    updateExpressionView('+');
}

const clickMinus = () => {
    updateExpressionView('-');
}

const clickAsterisk = () => {
    updateExpressionView('*');
}

const clickSlash = () => {
    updateExpressionView('/');
}

const clickModulo = () => {
    updateExpressionView('%');
}

const clickClear = () => {
    expressionInput.value = ' '
    updateExpressionView(expressionInput.value);
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

const updateExpressionView = (character) => {
    expressionInput.value += character;
}

const pressEnter = () => {
    clickEqual();
}

const bindKey = () => {
    window.addEventListener('keydown', (e) => {
        if (e.keyCode == 13 || e.keyCode == 187)
            clickEqual();
        
        if (e.keyCode >= 48 && e.keyCode <= 58)
            updateExpressionView(String(e.keyCode - 48));
            
        if (e.keyCode >= 96 && e.keyCode <= 99)
            updateExpressionView(String(e.keyCode - 96));
            
        if (e.keyCode >= 100 && e.keyCode <= 105)
            updateExpressionView(String(e.keyCode - 100 + 4));
            
        if (e.keyCode == 189 || e.keyCode == 109)
            updateExpressionView('-');
        
        if (e.keyCode == 107)
            updateExpressionView('+');
            
        if (e.keyCode == 106)
            updateExpressionView('*');
        
        if (e.keyCode == 191)
            updateExpressionView('/');
    });
}

const showResult = (result) => {
    resultView.textContent = result;
}

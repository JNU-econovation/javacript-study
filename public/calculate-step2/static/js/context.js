const operatorRegExp = /[%*/+-]/;
const operatorArray = ['+', '-', '*', '/', '%'];

const contextOrder = Object.freeze({
    "number" : 1,
    "operator": 2,
});

const Context = {
    queue : new Queue(),
    order : contextOrder.number,
    nextOrder : function() {
        this.order = (this.order === contextOrder.number) ? contextOrder.operator : contextOrder.number;
    },
    getValues : function () {
        let leftValue = this.queue.dequeue();
        let operator = this.queue.dequeue();
        let rightValue = this.queue.dequeue();
        
        if(!this._isValid((leftValue, rightValue), operator))
            return {result : false};
        
        return {
            leftValue: leftValue,
            operator: operator,
            rightValue: rightValue,
            result: true
        };
    },
    _isValid : (values, operators) => {
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
    needCalculate : function() {
        if(this.queue.length() >= 3)
            return true;
        return false;
    },
    isNew : function() {
        if(this.order === contextOrder.number)
            return true;
        return false;
    },
    append : function(element) {
        this.queue.enqueue(element);
    },
    clear : function() {
        this.queue.clear();
    }
}

function Queue() {
    this.container = [];
    this.isEmpty = function() { 
        return this.container.length==0 ? true : false;
    };
    this.length = function() {
        return this.container.length; 
    };
    this.enqueue = function(element) {
        this.container.push(element); 
    };
    this.dequeue = function() { 
        let element = this.peek();
        this.container.shift();
        
        return element
    };
    this.peek = function() {
        let element = (this.container[0] == undefined) ? null: this.container[0];
        return element;
    };
    this.toArray = function() {
        return this.container;
    };
    this.clear = function() {
        this.container = [];
    };
}
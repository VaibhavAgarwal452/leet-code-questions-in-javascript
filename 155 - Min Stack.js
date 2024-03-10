
var MinStack = function () {
    this.items = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.items.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.items.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.items.length === 0) return; // Check if stack is empty
    return this.items[this.items.length - 1]; // Return the top element of the stack
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return Math.min(...this.items)
};

var obj = new MinStack()
obj.push(14)
obj.push(12)
obj.push(18)


console.log(obj.top())
console.log(obj.getMin())

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
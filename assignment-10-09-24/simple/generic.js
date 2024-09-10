var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    // Pushes an item onto the stack
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    // Pops an item off the stack
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    // Peeks at the top item of the stack without removing it
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    // Checks if the stack is empty
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    // Gets the current size of the stack
    Stack.prototype.size = function () {
        return this.items.length;
    };
    return Stack;
}());
// Example usage
var numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.peek()); // Output: 20
console.log(numberStack.pop()); // Output: 20
console.log(numberStack.size()); // Output: 1
var stringStack = new Stack();
stringStack.push('Hello');
stringStack.push('World');
console.log(stringStack.peek()); // Output: World
console.log(stringStack.pop()); // Output: World
console.log(stringStack.size()); // Output: 1

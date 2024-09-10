class Stack<T> {
    private items: T[] = [];

    // Pushes an item onto the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Pops an item off the stack
    pop(): T | undefined {
        return this.items.pop();
    }

    // Peeks at the top item of the stack without removing it
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Checks if the stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Gets the current size of the stack
    size(): number {
        return this.items.length;
    }
}

// Example usage
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.peek()); // Output: 20
console.log(numberStack.pop());  // Output: 20
console.log(numberStack.size()); // Output: 1

const stringStack = new Stack<string>();
stringStack.push('Hello');
stringStack.push('World');
console.log(stringStack.peek()); // Output: World
console.log(stringStack.pop());  // Output: World
console.log(stringStack.size()); // Output: 1

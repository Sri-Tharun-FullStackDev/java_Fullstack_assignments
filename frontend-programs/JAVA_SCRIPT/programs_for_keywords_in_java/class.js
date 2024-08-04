
// Use the keyword class to create a class.

// Always add a constructor() method.

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}!`;
    }
}
const john = new Person("John");
console.log(john.greet());




// The extends keyword is used to create a child class of another class (parent).

// The child class inherits all the methods from another class.

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark() {
        return (this.name+ " " + "Woof!");
    }
}
const dog = new Dog("Buddy");
console.log(dog.name);
console.log(dog.bark());

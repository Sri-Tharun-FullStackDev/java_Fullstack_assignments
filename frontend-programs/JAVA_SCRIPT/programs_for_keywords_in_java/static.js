// The static keyword in JavaScript is used within classes to define static methods or properties. Static methods and properties are called on the class itself, not on instances of the class.

class MyClass {
    static greet() {
        return "Hello!";
    }
}
console.log(MyClass.greet());

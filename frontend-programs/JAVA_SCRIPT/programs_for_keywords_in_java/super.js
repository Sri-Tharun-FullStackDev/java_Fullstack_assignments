// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

class Parent {
    constructor(name) {
        this.name = name;
    }
}
class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
const child = new Child("John", 10);
console.log(child.name);
console.log(child.age);

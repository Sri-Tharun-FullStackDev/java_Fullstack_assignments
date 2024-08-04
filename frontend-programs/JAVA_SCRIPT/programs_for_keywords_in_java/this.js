// In JavaScript, the this keyword refers to an object.

class Car {
    constructor(make) {
        this.make = make;
    }
    showMake() {
        console.log(this.make);
    }
}
const car = new Car("Toyota");
car.showMake();

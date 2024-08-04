// new keyword is used to instanciate a new object

class Car {
    constructor(model) {
        this.model = model;
    }
}
const car = new Car("Honda");
console.log(car.model);

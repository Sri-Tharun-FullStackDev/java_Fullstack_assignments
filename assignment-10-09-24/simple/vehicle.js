// Implement the Car class that conforms to the Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to display car details
    Car.prototype.displayDetails = function () {
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.year));
    };
    return Car;
}());
// Example usage
var myCar = new Car('Toyota', 'Corolla', 2021);
myCar.displayDetails();

// Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
}

// Implement the Car class that conforms to the Vehicle interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
    
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display car details
    displayDetails(): void {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

// Example usage
const myCar = new Car('Toyota', 'Corolla', 2021);
myCar.displayDetails();

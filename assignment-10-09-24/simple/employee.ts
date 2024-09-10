class Employee {
    private name: string;
    private age: number;
    private salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    // Method to get employee details
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }

    // Method to update employee name
    updateName(newName: string): void {
        this.name = newName;
    }

    // Method to update employee age
    updateAge(newAge: number): void {
        this.age = newAge;
    }

    // Method to update employee salary
    updateSalary(newSalary: number): void {
        this.salary = newSalary;
    }
}

// Example usage
const employee = new Employee('John Doe', 30, 50000);

console.log(employee.getDetails());  // Output: Name: John Doe, Age: 30, Salary: 50000

// Update employee details
employee.updateName('Jane Smith');
employee.updateAge(32);
employee.updateSalary(55000);

console.log(employee.getDetails());  // Output: Name: Jane Smith, Age: 32, Salary: 55000

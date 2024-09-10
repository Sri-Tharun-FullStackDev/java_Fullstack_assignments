var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    // Method to get employee details
    Employee.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Salary: ").concat(this.salary);
    };
    // Method to update employee name
    Employee.prototype.updateName = function (newName) {
        this.name = newName;
    };
    // Method to update employee age
    Employee.prototype.updateAge = function (newAge) {
        this.age = newAge;
    };
    // Method to update employee salary
    Employee.prototype.updateSalary = function (newSalary) {
        this.salary = newSalary;
    };
    return Employee;
}());
// Example usage
var employee = new Employee('John Doe', 30, 50000);
console.log(employee.getDetails()); // Output: Name: John Doe, Age: 30, Salary: 50000
// Update employee details
employee.updateName('Jane Smith');
employee.updateAge(32);
employee.updateSalary(55000);
console.log(employee.getDetails()); // Output: Name: Jane Smith, Age: 32, Salary: 55000

// Define the Employee interface
interface Employee {
    name: string;
    age: number;
    salary: number;
}

// Define the Manager interface
interface Manager {
    department: string;
    manageTeam: () => void;
}

// Intersection type of Employee and Manager
type EmployeeManager = Employee & Manager;

/**
 * Function that accepts a combined EmployeeManager type.
 * @param person - The person who is both an Employee and a Manager.
 */
function printEmployeeManagerDetails(person: EmployeeManager): void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Salary: ${person.salary}`);
    console.log(`Department: ${person.department}`);
    person.manageTeam(); // Calling Manager's method
}

// Example usage
const john: EmployeeManager = {
    name: 'John Doe',
    age: 40,
    salary: 80000,
    department: 'Engineering',
    manageTeam: () => {
        console.log('Managing the engineering team');
    }
};

printEmployeeManagerDetails(john);

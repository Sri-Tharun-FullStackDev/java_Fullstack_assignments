/**
 * Function that accepts a combined EmployeeManager type.
 * @param person - The person who is both an Employee and a Manager.
 */
function printEmployeeManagerDetails(person) {
    console.log("Name: ".concat(person.name));
    console.log("Age: ".concat(person.age));
    console.log("Salary: ".concat(person.salary));
    console.log("Department: ".concat(person.department));
    person.manageTeam(); // Calling Manager's method
}
// Example usage
var john = {
    name: 'John Doe',
    age: 40,
    salary: 80000,
    department: 'Engineering',
    manageTeam: function () {
        console.log('Managing the engineering team');
    }
};
printEmployeeManagerDetails(john);

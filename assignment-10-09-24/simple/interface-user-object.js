// Implement the function to print user details
function printUserDetails(user) {
    console.log("ID: ".concat(user.id));
    console.log("Name: ".concat(user.name));
    console.log("Email: ".concat(user.email));
    if (user.age !== undefined) {
        console.log("Age: ".concat(user.age));
    }
}
// Example usage
var user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
};
printUserDetails(user);

// Define the User interface
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;  // age is optional
}

// Implement the function to print user details
function printUserDetails(user: User): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    if (user.age !== undefined) {
        console.log(`Age: ${user.age}`);
    }
}

// Example usage
const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
};

printUserDetails(user);

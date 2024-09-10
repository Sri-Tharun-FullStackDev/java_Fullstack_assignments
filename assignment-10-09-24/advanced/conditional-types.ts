// Utility type that converts all properties of T to string
type ConvertPropertiesToString<T> = {
    [K in keyof T]: string;
};

// Example interface
interface User {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
}

// Applying the utility type to the User interface
type StringifiedUser = ConvertPropertiesToString<User>;

// Example usage of StringifiedUser type
const user: StringifiedUser = {
    id: "123",         // now a string
    name: "Alice",     // already a string
    age: "30",         // now a string
    isActive: "true"   // now a string
};

console.log(user);

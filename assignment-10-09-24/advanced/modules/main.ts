// Importing functions from math.ts
import { add, subtract, multiply, divide } from './math';

// Importing the Utilities namespace
import { Utilities } from './utilities';

const num = 5;
const numbersArray = [1, 2, 3, 4, 5];

// Example usage
const num1 = 10;
const num2 = 5;

console.log(`Addition: ${add(num1, num2)}`);        // 15
console.log(`Subtraction: ${subtract(num1, num2)}`); // 5
console.log(`Multiplication: ${multiply(num1, num2)}`); // 50
console.log(`Division: ${divide(num1, num2)}`);     // 2





console.log(`Square of ${num}:`, Utilities.square(num));            // 25
console.log(`${num} is even:`, Utilities.isEven(num));              // false
console.log(`Capitalize 'hello':`, Utilities.capitalize('hello'));  // Hello
console.log(`Max value in array [1, 2, 3, 4, 5]:`, Utilities.max(numbersArray)); // 5


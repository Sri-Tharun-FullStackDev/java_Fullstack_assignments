"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing functions from math.ts
var math_1 = require("./math");
// Importing the Utilities namespace
var utilities_1 = require("./utilities");
var num = 5;
var numbersArray = [1, 2, 3, 4, 5];
// Example usage
var num1 = 10;
var num2 = 5;
console.log("Addition: ".concat((0, math_1.add)(num1, num2))); // 15
console.log("Subtraction: ".concat((0, math_1.subtract)(num1, num2))); // 5
console.log("Multiplication: ".concat((0, math_1.multiply)(num1, num2))); // 50
console.log("Division: ".concat((0, math_1.divide)(num1, num2))); // 2
console.log("Square of ".concat(num, ":"), utilities_1.Utilities.square(num)); // 25
console.log("".concat(num, " is even:"), utilities_1.Utilities.isEven(num)); // false
console.log("Capitalize 'hello':", utilities_1.Utilities.capitalize('hello')); // Hello
console.log("Max value in array [1, 2, 3, 4, 5]:", utilities_1.Utilities.max(numbersArray)); // 5

"use strict";
// utilities.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilities = void 0;
var Utilities;
(function (Utilities) {
    // Function to calculate the square of a number
    function square(num) {
        return num * num;
    }
    Utilities.square = square;
    // Function to check if a number is even
    function isEven(num) {
        return num % 2 === 0;
    }
    Utilities.isEven = isEven;
    // Function to capitalize the first letter of a string
    function capitalize(str) {
        if (str.length === 0)
            return str;
        return str[0].toUpperCase() + str.slice(1);
    }
    Utilities.capitalize = capitalize;
    // Function to find the maximum value in an array of numbers
    function max(arr) {
        return Math.max.apply(Math, arr);
    }
    Utilities.max = max;
})(Utilities || (exports.Utilities = Utilities = {}));

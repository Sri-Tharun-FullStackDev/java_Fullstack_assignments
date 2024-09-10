/**
 * Sums the elements of a number array.
 * @param numbers - An array of numbers.
 * @returns The sum of the numbers.
 */
function sumArray(numbers) {
    return numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
}
// Example usage:
var myNumbers = [1, 2, 3, 4, 5];
var result = sumArray(myNumbers);
console.log(result); // Output: 15

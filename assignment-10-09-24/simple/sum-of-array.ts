/**
 * Sums the elements of a number array.
 * @param numbers - An array of numbers.
 * @returns The sum of the numbers.
 */
function sumArray(numbers: number[]): number {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example usage:
const myNumbers: number[] = [1, 2, 3, 4, 5];
const result: number = sumArray(myNumbers);
console.log(result);  // Output: 15

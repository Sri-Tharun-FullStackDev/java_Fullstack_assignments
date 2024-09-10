/**
 * Reverses the order of elements in an array.
 * @param arr - An array of any type.
 * @returns A new array with elements in reverse order.
 */
function reverseArray(arr) {
    return arr.slice().reverse();
}
// Example usage
var numberArray = [1, 2, 3, 4, 5];
var reversedNumberArray = reverseArray(numberArray);
console.log(reversedNumberArray); // Output: [5, 4, 3, 2, 1]
var stringArray = ['apple', 'banana', 'cherry'];
var reversedStringArray = reverseArray(stringArray);
console.log(reversedStringArray); // Output: ['cherry', 'banana', 'apple']

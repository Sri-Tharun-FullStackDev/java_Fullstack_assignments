/**
 * Reverses the order of elements in an array.
 * @param arr - An array of any type.
 * @returns A new array with elements in reverse order.
 */
function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
}

// Example usage
const numberArray: number[] = [1, 2, 3, 4, 5];
const reversedNumberArray: number[] = reverseArray(numberArray);
console.log(reversedNumberArray); // Output: [5, 4, 3, 2, 1]

const stringArray: string[] = ['apple', 'banana', 'cherry'];
const reversedStringArray: string[] = reverseArray(stringArray);
console.log(reversedStringArray); // Output: ['cherry', 'banana', 'apple']

/**
 * Formats the input as a string.
 * @param input - The input to format, which can be either a string or a number.
 * @returns The formatted string.
 */
function format(input) {
    if (typeof input === 'number') {
        // Format the number as a string with comma separators for thousands (optional)
        return input.toLocaleString(); // This adds comma separators for thousands
    }
    else {
        // If input is already a string, return it as is
        return input;
    }
}
// Example usage
console.log(format(1234567)); // Output: "1,234,567"
console.log(format("Hello World")); // Output: "Hello World"

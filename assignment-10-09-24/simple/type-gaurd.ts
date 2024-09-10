/**
 * Type guard function to check if the variable is a number.
 * @param value - The variable to check.
 * @returns True if the value is a number, false otherwise.
 */
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

/**
 * Type guard function to check if the variable is a string.
 * @param value - The variable to check.
 * @returns True if the value is a string, false otherwise.
 */
function isString(value: any): value is string {
    return typeof value === 'string';
}

// Example usage
const values: (number | string)[] = [42, 'hello', 3.14, 'world'];

values.forEach(value => {
    if (isNumber(value)) {
        console.log(`${value} is a number.`);
    } else if (isString(value)) {
        console.log(`${value} is a string.`);
    }
});

// utilities.ts

export namespace Utilities {

    // Function to calculate the square of a number
    export function square(num: number): number {
        return num * num;
    }

    // Function to check if a number is even
    export function isEven(num: number): boolean {
        return num % 2 === 0;
    }

    // Function to capitalize the first letter of a string
    export function capitalize(str: string): string {
        if (str.length === 0) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    // Function to find the maximum value in an array of numbers
    export function max(arr: number[]): number {
        return Math.max(...arr);
    }
}

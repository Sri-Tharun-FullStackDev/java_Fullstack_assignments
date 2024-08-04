public class ShortKeywordExample {
    public static void main(String[] args) {
        // Declaring and initializing short variables
        short num1 = 10000;
        short num2 = -30000;
        short sum;
        short difference;
        short product;
        short quotient;

        // Performing arithmetic operations
        sum = (short) (num1 + num2); // Casting is required to avoid overflow
        difference = (short) (num1 - num2);
        product = (short) (num1 * 2); // Multiplying by 2 as an example
        quotient = (short) (num1 / 2); // Dividing by 2 as an example

        // Displaying the results of arithmetic operations
        System.out.println("Sum: " + num1 + " + " + num2 + " = " + sum);
        System.out.println("Difference: " + num1 + " - " + num2 + " = " + difference);
        System.out.println("Product: " + num1 + " * 2 = " + product);
        System.out.println("Quotient: " + num1 + " / 2 = " + quotient);

        // Demonstrating type conversion
        int largerValue = 32767; // Maximum value for short
        short smallValue = (short) largerValue; // Casting from int to short
        System.out.println("Casting int to short: " + smallValue);

        // Demonstrating short overflow
        short largeNumber = 32000;
        short overflowedNumber = (short) (largeNumber + 5000); // Overflow example
        System.out.println("Original large number: " + largeNumber);
        System.out.println("After adding 5000 (with overflow): " + overflowedNumber);
    }
}

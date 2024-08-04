public class IntKeywordExample {
    public static void main(String[] args) {
        // Declaring and initializing int variables
        int num1 = 10;
        int num2 = 20;
        int sum;
        int difference;
        int product;
        int quotient;
        int remainder;

        // Performing arithmetic operations
        sum = num1 + num2;
        difference = num1 - num2;
        product = num1 * num2;
        quotient = num1 / num2;
        remainder = num1 % num2;

        // Displaying the results of arithmetic operations
        System.out.println("Sum: " + num1 + " + " + num2 + " = " + sum);
        System.out.println("Difference: " + num1 + " - " + num2 + " = " + difference);
        System.out.println("Product: " + num1 + " * " + num2 + " = " + product);
        System.out.println("Quotient: " + num1 + " / " + num2 + " = " + quotient);
        System.out.println("Remainder: " + num1 + " % " + num2 + " = " + remainder);

        // Demonstrating type conversion
        double divisionResult = (double) num1 / num2;
        System.out.println("Division result as double: " + divisionResult);

        // Demonstrating integer overflow
        int largeNumber = 2_000_000_000;
        int overflowedNumber = largeNumber + 1;
        System.out.println("Original large number: " + largeNumber);
        System.out.println("After overflow: " + overflowedNumber);
    }
}

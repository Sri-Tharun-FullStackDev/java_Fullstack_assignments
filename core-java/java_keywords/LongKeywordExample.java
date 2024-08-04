public class LongKeywordExample {
    public static void main(String[] args) {
        // Declaring and initializing long variables
        long num1 = 9_223_372_036_854_775_807L; // Maximum value for long
        long num2 = 1_000_000_000L; // Example long value
        long sum;
        long difference;
        long product;
        long quotient;
        long remainder;

        // Performing arithmetic operations
        sum = num1 + num2;
        difference = num1 - num2;
        product = num1 * num2;
        quotient = num1 / 2; // Dividing by 2 as an example
        remainder = num1 % 2; // Modulus operation

        // Displaying the results of arithmetic operations
        System.out.println("Sum: " + num1 + " + " + num2 + " = " + sum);
        System.out.println("Difference: " + num1 + " - " + num2 + " = " + difference);
        System.out.println("Product: " + num1 + " * " + num2 + " = " + product);
        System.out.println("Quotient: " + num1 + " / 2 = " + quotient);
        System.out.println("Remainder: " + num1 + " % 2 = " + remainder);

        // Demonstrating type conversion
        double divisionResult = (double) num1 / num2;
        System.out.println("Division result as double: " + divisionResult);

        // Demonstrating long overflow
        long largeNumber = 9_000_000_000L;
        long overflowedNumber = largeNumber + 1_000_000_000L;
        System.out.println("Original large number: " + largeNumber);
        System.out.println("After adding 1 billion: " + overflowedNumber);
    }
}

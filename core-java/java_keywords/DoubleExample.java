public class DoubleExample {
    public static void main(String[] args) {
        // Declaring double variables
        double number1 = 12.34;
        double number2 = 56.78;
        double result;
        
        // Performing arithmetic operations
        result = number1 + number2;
        System.out.println("Addition: " + number1 + " + " + number2 + " = " + result);
        
        result = number1 - number2;
        System.out.println("Subtraction: " + number1 + " - " + number2 + " = " + result);
        
        result = number1 * number2;
        System.out.println("Multiplication: " + number1 + " * " + number2 + " = " + result);
        
        if (number2 != 0) {
            result = number1 / number2;
            System.out.println("Division: " + number1 + " / " + number2 + " = " + result);
        } else {
            System.out.println("Division by zero is not allowed.");
        }

        // Working with scientific notation
        double scientificNumber = 1.23e4; // 1.23 * 10^4
        System.out.println("Scientific notation: " + scientificNumber);

        // Demonstrating precision
        double largeNumber = 123456789.123456789;
        System.out.println("Large number with double precision: " + largeNumber);

        // Floating-point comparison example
        double value1 = 0.1;
        double value2 = 0.2;
        double sum = value1 + value2;
        System.out.println("0.1 + 0.2 = " + sum);

        // Note: Floating-point arithmetic can sometimes lead to precision issues
        if (Math.abs(sum - 0.3) < 1e-10) {
            System.out.println("0.1 + 0.2 is approximately 0.3");
        } else {
            System.out.println("0.1 + 0.2 is not exactly 0.3");
        }
    }
}

public class FloatExample {
    public static void main(String[] args) {
        // Declaring float variables
        float number1 = 10.5f;
        float number2 = 20.3f;
        float result;

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
        float scientificNumber = 1.23e3f; // 1.23 * 10^3
        System.out.println("Scientific notation: " + scientificNumber);

        // Demonstrating precision
        float largeNumber = 123456.789f;
        System.out.println("Large number with float precision: " + largeNumber);

        // Floating-point comparison example
        float value1 = 0.1f;
        float value2 = 0.2f;
        float sum = value1 + value2;
        System.out.println("0.1 + 0.2 = " + sum);

        // Note: Floating-point arithmetic can sometimes lead to precision issues
        if (Math.abs(sum - 0.3f) < 1e-5f) {
            System.out.println("0.1 + 0.2 is approximately 0.3");
        } else {
            System.out.println("0.1 + 0.2 is not exactly 0.3");
        }
    }
}

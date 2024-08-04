public class CharExample {
    public static void main(String[] args) {
        // Declaring char variables
        char letter = 'A'; // A single character
        char digit = '7';  // A single digit
        char unicodeChar = '\u0041'; // Unicode representation of 'A'
        
        // Displaying char values
        System.out.println("The letter is: " + letter);
        System.out.println("The digit is: " + digit);
        System.out.println("The Unicode character is: " + unicodeChar);
        
        // Showing the integer value of a char
        int letterAsInt = letter; // Implicit conversion to int
        System.out.println("The integer value of the letter is: " + letterAsInt);
        
        // Demonstrating char arithmetic
        char nextLetter = (char) (letter + 1); // Incrementing the char value
        System.out.println("The next letter after 'A' is: " + nextLetter);
    }
}

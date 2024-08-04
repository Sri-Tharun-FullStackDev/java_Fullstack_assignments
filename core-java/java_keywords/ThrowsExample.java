public class ThrowsExample {
    static void method() throws IllegalAccessException {
        System.out.println("Inside the method.");
        throw new IllegalAccessException("demo");
    }

    public static void main(String[] args) {
        try {
            method();
        } catch (IllegalAccessException e) {
            System.out.println("Caught: " + e);
        }
    }
}

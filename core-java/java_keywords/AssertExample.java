public class AssertExample {
    public static void main(String[] args) {
        int value = 15;

        // This assertion will pass
        assert value > 10 : "Value is less than or equal to 10";

        // This assertion will fail and throw an AssertionError
        assert value < 10 : "Value is greater than or equal to 10";

        System.out.println("Assertions are working as expected.");
    }
}

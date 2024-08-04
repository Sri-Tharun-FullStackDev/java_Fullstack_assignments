public class TryCatchFinallyExample {
    public static void main(String[] args) {
        try {
            int division = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException caught.");
        } finally {
            System.out.println("This is the finally block.");
        }
    }
}

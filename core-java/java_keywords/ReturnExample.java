public class ReturnExample {
    int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        ReturnExample obj = new ReturnExample();
        int result = obj.add(5, 3);
        System.out.println("Result: " + result);
    }
}

public class StaticExample {
    static int staticVar = 10;

    static void staticMethod() {
        System.out.println("This is a static method.");
    }

    public static void main(String[] args) {
        System.out.println("Static Variable: " + staticVar);
        staticMethod();
    }
}

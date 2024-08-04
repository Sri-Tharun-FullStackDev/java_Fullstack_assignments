final class FinalClass {
    final int finalVar = 10;

    final void display() {
        System.out.println("This is a final method.");
    }

    public static void main(String[] args) {
        FinalClass obj = new FinalClass();
        System.out.println("Final Variable: " + obj.finalVar);
        obj.display();
    }
}

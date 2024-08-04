public class AccessModifiers {
    public int publicVar = 10;
    private int privateVar = 20;
    protected int protectedVar = 30;

    public static void main(String[] args) {
        AccessModifiers obj = new AccessModifiers();
        System.out.println("Public Variable: " + obj.publicVar);
        System.out.println("Private Variable: " + obj.privateVar);
        System.out.println("Protected Variable: " + obj.protectedVar);
    }
}

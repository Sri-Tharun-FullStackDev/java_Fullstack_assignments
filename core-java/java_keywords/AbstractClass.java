abstract class AbstractClass {
    abstract void abstractMethod();

    void normalMethod() {
        System.out.println("This is a normal method.");
    }
}

class ConcreteClass extends AbstractClass {
    void abstractMethod() {
        System.out.println("Abstract method implemented.");
    }

    public static void main(String[] args) {
        ConcreteClass obj = new ConcreteClass();
        obj.abstractMethod();
        obj.normalMethod();
    }
}

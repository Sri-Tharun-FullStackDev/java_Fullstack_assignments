interface ExampleInterface {
    void display();
}

class ImplementingClass implements ExampleInterface {
    public void display() {
        System.out.println("Interface Method Implemented");
    }

    public static void main(String[] args) {
        ImplementingClass obj = new ImplementingClass();
        obj.display();
    }
}

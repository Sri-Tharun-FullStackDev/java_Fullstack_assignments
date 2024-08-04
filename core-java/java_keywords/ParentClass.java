class ParentClass {
    void display() {
        System.out.println("This is the parent class.");
    }
}

class ChildClass extends ParentClass {
    void display() {
        super.display();
        System.out.println("This is the child class.");
    }

    public static void main(String[] args) {
        ChildClass obj = new ChildClass();
        obj.display();
    }
}

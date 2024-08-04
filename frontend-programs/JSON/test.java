class Parent {
    int value = 10;
}

class Child extends Parent {
    int value = 20;
public static void main(String[] args) {
    
}
     void printValues() {
        System.out.println("Child value: " + this.value);
        System.out.println("Parent value: " + super.value);
    }
}
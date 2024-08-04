interface Vehicle {
    // Abstract method (must be implemented by implementing classes)
    void start();

    // Default method (provides a default implementation)
    default void honk() {
        System.out.println("Vehicle horn sound");
    }
}

class Car implements Vehicle {
    // Providing implementation for the abstract method
    @Override
    public void start() {
        System.out.println("Car is starting");
    }
}

public class DefaultKeywordExample {
    public static void main(String[] args) {
        Car myCar = new Car();
        
        // Calling the implemented method
        myCar.start();
        
        // Calling the default method from the interface
        myCar.honk();
    }
}

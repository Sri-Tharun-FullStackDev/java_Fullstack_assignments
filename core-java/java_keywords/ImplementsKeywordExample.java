// Define an interface
interface Animal {
    // Abstract method (does not have a body)
    void makeSound();
    
    // Default method (has a body)
    default void sleep() {
        System.out.println("This animal is sleeping.");
    }
}

// Implement the interface in a class
class Dog implements Animal {
    // Provide implementation for the abstract method
    @Override
    public void makeSound() {
        System.out.println("The dog barks.");
    }
}

// Another class implementing the same interface
class Cat implements Animal {
    // Provide implementation for the abstract method
    @Override
    public void makeSound() {
        System.out.println("The cat meows.");
    }
}

// Main class to demonstrate the usage of the implements keyword
public class ImplementsKeywordExample {
    public static void main(String[] args) {
        // Create instances of Dog and Cat
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        
        // Call the makeSound method on both objects
        myDog.makeSound();  // Output: The dog barks.
        myCat.makeSound();  // Output: The cat meows.

        // Call the default sleep method on both objects
        myDog.sleep();  // Output: This animal is sleeping.
        myCat.sleep();  // Output: This animal is sleeping.
    }
}

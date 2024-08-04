// Superclass (Base Class)
class Animal {
    // Method in the superclass
    void eat() {
        System.out.println("This animal eats food.");
    }

    // Method in the superclass
    void sleep() {
        System.out.println("This animal sleeps.");
    }
}

// Subclass (Derived Class) that extends Animal
class Dog extends Animal {
    // Method in the subclass that overrides the superclass method
    @Override
    void eat() {
        System.out.println("The dog eats kibble.");
    }

    // Method specific to the subclass
    void bark() {
        System.out.println("The dog barks.");
    }
}

// Main class to demonstrate inheritance
public class InheritanceExample {
    public static void main(String[] args) {
        // Create an instance of Dog
        Dog myDog = new Dog();
        
        // Call the overridden method from the subclass
        myDog.eat();  // Output: The dog eats kibble.

        // Call the method inherited from the superclass
        myDog.sleep();  // Output: This animal sleeps.

        // Call the method specific to the subclass
        myDog.bark();  // Output: The dog barks.
    }
}

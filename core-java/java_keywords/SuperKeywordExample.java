// Base class
class Animal {
    // Field in the superclass
    String name;

    // Constructor in the superclass
    Animal(String name) {
        this.name = name;
    }

    // Method in the superclass
    void makeSound() {
        System.out.println("Animal makes a sound.");
    }
}

// Subclass extending Animal
class Dog extends Animal {
    // Constructor in the subclass
    Dog(String name) {
        // Call the superclass constructor
        super(name);
    }

    // Method overriding the superclass method
    @Override
    void makeSound() {
        // Call the superclass method
        super.makeSound();
        System.out.println("The dog barks.");
    }

    // Method to display name
    void displayName() {
        // Access superclass field using super
        System.out.println("Animal's name is: " + super.name);
    }
}

// Main class to demonstrate the use of super
public class SuperKeywordExample {
    public static void main(String[] args) {
        // Create an instance of Dog
        Dog myDog = new Dog("Buddy");
        
        // Call the overridden method
        myDog.makeSound();
        
        // Display the name of the animal
        myDog.displayName();
    }
}

// Define a base class
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound.");
    }
}

// Define a subclass that extends Animal
class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

// Define another subclass that extends Animal
class Cat extends Animal {
    void meow() {
        System.out.println("The cat meows.");
    }
}

// Main class to demonstrate the use of instanceof
public class InstanceofKeywordExample {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Dog myDog = new Dog();
        Cat myCat = new Cat();
        
        // Use instanceof to check types
        System.out.println("myAnimal instanceof Animal: " + (myAnimal instanceof Animal));
        System.out.println("myAnimal instanceof Dog: " + (myAnimal instanceof Dog));
        System.out.println("myDog instanceof Animal: " + (myDog instanceof Animal));
        System.out.println("myDog instanceof Dog: " + (myDog instanceof Dog));
        System.out.println("myCat instanceof Cat: " + (myCat instanceof Cat));
        // System.out.println("myCat instanceof Dog: " + (myCat instanceof Dog));
        
        // Use instanceof in a conditional statement
        Animal someAnimal = new Dog(); // Upcasting
        if (someAnimal instanceof Dog) {
            Dog specificDog = (Dog) someAnimal; // Downcasting
            specificDog.bark(); // Safe to call Dog's method
        }
        
        // Use instanceof with polymorphism
        Animal anotherAnimal = new Cat(); // Upcasting
        if (anotherAnimal instanceof Cat) {
            Cat specificCat = (Cat) anotherAnimal; // Downcasting
            specificCat.meow(); // Safe to call Cat's method
        }
    }
}

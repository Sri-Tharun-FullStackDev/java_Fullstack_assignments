import java.io.IOException;
import java.util.logging.LogManager;

public class Main {
    public static void main(String[] args) {
        // Load logging properties
        try {
            LogManager.getLogManager().readConfiguration(Main.class.getResourceAsStream("/logging.properties"));
        } catch (IOException e) {
            System.err.println("Could not load logging configuration: " + e.getMessage());
        }

        // Create inventory and items
        Inventory inventory = new Inventory();

        Item item1 = new Item("Laptop", 10);
        Item item2 = new Item("Smartphone", 20);

        // Add items to inventory
        inventory.addItem(item1);
        inventory.addItem(item2);

        // Display all items
        System.out.println("All Inventory Items:");
        inventory.displayAllItems();

        // Perform operations
        System.out.println("\nPerforming operations...");

        // Add and remove quantity
        item1.addQuantity(5);
        item1.removeQuantity(3);

        // Attempt to remove more quantity than available
        item2.removeQuantity(25);

        // Get item details
        Item retrievedItem = inventory.getItem("Laptop");
        if (retrievedItem != null) {
            System.out.println("\nRetrieved Item: " + retrievedItem);
        }

        // Remove an item from inventory
        inventory.removeItem("Smartphone");

        // Attempt to remove an already removed item
        inventory.removeItem("Smartphone");

        // Display all items again
        System.out.println("\nAll Inventory Items:");
        inventory.displayAllItems();
    }
}

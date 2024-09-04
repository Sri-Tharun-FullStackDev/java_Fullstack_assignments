import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Inventory {
    private static final Logger logger = Logger.getLogger(Inventory.class.getName());
    private Map<String, Item> items = new HashMap<>();

    // Method to add item to inventory
    public void addItem(Item item) {
        if (item != null) {
            items.put(item.getName(), item);
            logger.info("Added item to inventory: " + item);
        } else {
            logger.warning("Cannot add a null item to inventory.");
        }
    }

    // Method to remove item from inventory
    public void removeItem(String name) {
        Item removedItem = items.remove(name);
        if (removedItem != null) {
            logger.info("Removed item from inventory: " + removedItem);
        } else {
            logger.warning("Item not found in inventory: " + name);
        }
    }

    // Method to get item details
    public Item getItem(String name) {
        Item item = items.get(name);
        if (item != null) {
            logger.info("Retrieved item from inventory: " + item);
            return item;
        } else {
            logger.warning("Item not found in inventory: " + name);
            return null;
        }
    }

    // Display all items in inventory
    public void displayAllItems() {
        logger.info("Displaying all inventory items.");
        for (Item item : items.values()) {
            System.out.println(item);
        }
    }
}

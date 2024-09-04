import java.util.logging.Level;
import java.util.logging.Logger;

public class Item {
    private static final Logger logger = Logger.getLogger(Item.class.getName());

    private String name;
    private int quantity;

    // Constructor
    public Item(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
        logger.info("Item created: " + this);
    }

    // Method to get item name
    public String getName() {
        return name;
    }

    // Method to get item quantity
    public int getQuantity() {
        return quantity;
    }

    // Method to add quantity
    public void addQuantity(int amount) {
        if (amount > 0) {
            quantity += amount;
            logger.info("Added " + amount + " to " + name + ". New quantity: " + quantity);
        } else {
            logger.warning("Cannot add non-positive amount: " + amount);
        }
    }

    // Method to remove quantity
    public void removeQuantity(int amount) {
        if (amount > 0) {
            if (amount <= quantity) {
                quantity -= amount;
                logger.info("Removed " + amount + " from " + name + ". New quantity: " + quantity);
            } else {
                logger.warning("Insufficient quantity to remove: " + amount + " from " + name + ". Current quantity: " + quantity);
            }
        } else {
            logger.warning("Cannot remove non-positive amount: " + amount);
        }
    }

    // Display item information
    @Override
    public String toString() {
        return "Item [Name=" + name + ", Quantity=" + quantity + "]";
    }
}

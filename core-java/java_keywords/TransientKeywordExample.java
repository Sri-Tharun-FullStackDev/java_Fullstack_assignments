import java.io.*;

// A class that implements Serializable
class Employee implements Serializable {
    private static final long serialVersionUID = 1L; // Version control for serialization

    private String name;
    private transient String password; // This field will not be serialized
    private int age;

    // Constructor
    public Employee(String name, String password, int age) {
        this.name = name;
        this.password = password;
        this.age = age;
    }

    // Method to display employee details
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Password: " + (password != null ? password : "Not available"));
        System.out.println("Age: " + age);
    }
}

public class TransientKeywordExample {
    public static void main(String[] args) {
        // Create an Employee object
        Employee emp = new Employee("John Doe", "mySecretPassword", 30);
        
        // Serialize the Employee object to a file
        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("employee.ser"))) {
            out.writeObject(emp);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Deserialize the Employee object from the file
        Employee deserializedEmp = null;
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("employee.ser"))) {
            deserializedEmp = (Employee) in.readObject();
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        
        // Display the deserialized employee's information
        if (deserializedEmp != null) {
            deserializedEmp.displayInfo();
        }
    }
}

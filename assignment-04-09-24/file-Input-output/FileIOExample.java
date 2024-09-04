import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FileIOExample {

    public static void main(String[] args) {
        // File path
        String filePath = "example.txt";

        // Write to file
        writeToFile(filePath, "Hello, World!\nThis is a test file,this is tharun's test file.");

        // Read from file
        readFromFile(filePath);
    }

    /**
     * Writes text to a file.
     *
     * @param filePath the path of the file
     * @param content  the content to write
     */
    private static void writeToFile(String filePath, String content) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath))) {
            writer.write(content);
            System.out.println("Content written to file successfully.");
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
    }

    /**
     * Reads text from a file.
     *
     * @param filePath the path of the file
     */
    private static void readFromFile(String filePath) {
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            System.out.println("Content read from file:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading from file: " + e.getMessage());
        }
    }
}

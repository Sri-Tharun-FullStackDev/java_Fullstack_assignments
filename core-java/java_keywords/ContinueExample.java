public class ContinueExample {
    public static void main(String[] args) {
        System.out.println("Using continue in a for loop:");
        // Example with a for loop
        for (int i = 1; i <= 10; i++) {
            // Skip the iteration when i is even
            if (i % 2 == 0) {
                continue;
            }
            System.out.println("Odd number: " + i);
        }

        System.out.println("\nUsing continue in a while loop:");
        // Example with a while loop
        int j = 1;
        while (j <= 10) {
            // Skip the iteration when j is even
            if (j % 2 == 0) {
                j++;
                continue;
            }
            System.out.println("Odd number: " + j);
            j++;
        }
    }
}

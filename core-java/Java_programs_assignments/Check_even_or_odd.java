import java.util.Scanner;

public class Check_even_or_odd {

    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);

        // getting a int input from user
        System.out.println("Enter a number to check Odd or Even : ");
        int number = scanner.nextInt();
        scanner.close();

        if (number%2==0)
        {
            System.out.println("the given number is Even: "+number);
        }
        else
        {
            System.out.println("the given number is Odd: "+number);
        }
    }
    
}

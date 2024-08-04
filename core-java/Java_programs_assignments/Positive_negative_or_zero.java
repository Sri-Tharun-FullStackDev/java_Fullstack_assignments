import java.util.Scanner;

public class Positive_negative_or_zero {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.print("Enter a number to check Positive,Negative or Zero: ");
        float number=scanner.nextFloat();
        scanner.close();

        if (number>0)
        {
            System.out.println("Number is Positive");
        }
        else if (number<0)
        {
            System.out.println("Number is Negative");
        }
        else if (number == 0)
        {
            System.out.println("Number is zero");
        }
        else
        {
            System.out.println("Enter a valid number");
        }

    }
}

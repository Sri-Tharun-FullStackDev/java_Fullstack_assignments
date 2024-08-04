import java.util.Scanner;

public class Largest_of_three_numbers {
    public static void main(String[] args) {


        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter 3 numbers to find the maximum: ");
        int a=scanner.nextInt();
        int b=scanner.nextInt();
        int c=scanner.nextInt();
        scanner.close();

        if(a>b && a>c)
        {
            System.out.println("A is the largest number: "+a);
        }
        else if(b>c)
        {
            System.out.println("B is the largest number: "+b);
        }
        else
        {
            System.out.println("C is the largest number: "+c);
        }
    }
}

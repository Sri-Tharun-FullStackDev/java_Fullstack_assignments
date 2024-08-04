import java.util.Scanner;

public class Multiplication_table {
    
    public static void main(String[] args) {
        
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter a number to get multiplication table: ");
        int number=scanner.nextInt();
        scanner.close();

        for(int i=1;i<=20;i++)
        {
            System.out.println(number+" * "+i+" = "+number*i);
        }

    }
}

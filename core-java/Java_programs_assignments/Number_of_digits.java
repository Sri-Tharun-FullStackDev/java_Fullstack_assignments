import java.util.Scanner;


public class Number_of_digits {
    public static void main(String[] args) {
        
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter the number to check number of digits: ");
        int number=scanner.nextInt();
        scanner.close();
        int i=0;

        while(number!=0)
        {
            number/=10;
            i++;
        }
        System.out.println("number of digits: "+i);


    }
}

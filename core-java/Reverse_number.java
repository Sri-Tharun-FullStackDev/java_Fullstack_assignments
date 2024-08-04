import java.util.Scanner;

public class Reverse_number {
    public static void main(String[] args) {
        
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter the number to be reversed: ");
        int num=scanner.nextInt();
        scanner.close();

        int rev=0;

        while (num!=0) {
            int last_digit=num%10;
            rev=rev*10+last_digit;  
            num/=10;         
        }

        System.out.println("the eversed number is : "+rev);


    }
    
}

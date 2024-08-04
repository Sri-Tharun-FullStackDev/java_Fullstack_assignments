import java.util.Scanner;

public class Palindrome_number {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.print("Enter the number to be reversed: ");
        int num=scanner.nextInt();
        scanner.close();
        int original_num=num;
        int rev=0;

        while (num!=0) {
            int last_digit=num%10;
            rev=rev*10+last_digit;  
            num/=10;         
        }

        System.out.println("the reversed number is : "+rev);

        if (original_num==rev)
        {
            System.out.println("The entered number is a Palindrome");
        }
        else
        {
            System.out.println("The entered number is NOT a Palindrome");
        }

    }
    
}

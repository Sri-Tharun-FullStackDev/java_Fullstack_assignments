import java.util.Scanner;

public class Calculator_using_switch_case {

    public static void main(String[] args) {
        
        Scanner scanner=new Scanner(System.in);
        System.out.print("Enter the first number: ");
        double a=scanner.nextDouble();
        System.out.print("Enter the second number: ");
        double b=scanner.nextDouble();
        System.out.print("Enter the operation (+,-,*,/): ");
        String operator=scanner.next();
        scanner.close();
        double result;

        switch (operator) {
            case "+":
                result=a+b;     
                System.out.println("Sum of the numbers is : "+result);         
                break;
            case "-":
                result=a-b; 
                System.out.println("Subtraction of the numbers is : "+result);             
                break;
            case "*":
                result=a*b; 
                System.out.println("Product of the numbers is : "+result);             
                break;
            case "/":
            if (b!=0)
            {
                result=a/b;
                System.out.println("Division of the numbers is : "+result);
            }
            else
                System.out.println("cannot divide by zero");             
                break;
            default:
            System.out.println("Enter a valid operation");
                break;
        }


    }
    
}

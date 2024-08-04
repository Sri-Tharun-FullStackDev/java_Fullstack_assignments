import java.util.Scanner;

public class Grade_calculation {
    public static void main(String[] args) {
         Scanner scanner=new Scanner(System.in);
        System.out.print("Enter your marks to check Grade: ");
        int marks=scanner.nextInt();
        scanner.close();
        char grade= ' ';

        if (marks>=91 && marks<=100)
        {
            grade='A';
        }
        else if (marks>=81 && marks<=90)
        {
            grade='B';
        }
        else if (marks>=71 && marks<=80)
        {
            grade='C';
        }
        else if (marks>=61 && marks<=70)
        {
            grade='D';
        }
        else if (marks>=51 && marks<=60)
        {
            grade='E';
        }
        else if (marks>=41 && marks<=50)
        {
            grade='F';
        }
        else if (marks<=40)
        {
            grade='G';
        }



        switch (grade) {
            case 'A':
                System.out.println("your grade is A");
                break;
            case 'B':
                System.out.println("your grade is B");
                break;
            case 'C':
                System.out.println("your grade is C");
                break;
            case 'D':
                System.out.println("your grade is D");
                break;
            case 'E':
                System.out.println("your grade is E");
                break;
            case 'F':
                System.out.println("your grade is F");
                break;
            case 'G':
                System.out.println("you have failed the exam");
                break;
            default:
                System.out.println("enter a valid grade");
                break;
        }


                     
    }
}      
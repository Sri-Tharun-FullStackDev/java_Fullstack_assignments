import java.util.Scanner;

public class Leap_year
{
    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the year to find Leap year: ");
        int year=scanner.nextInt();
        scanner.close();

        if (year%4==0)
        {
            if(year%100==0)
            {
                if(year%400==0)
                {
                    System.out.println(year+" is a Leap year");
                }
                else
                {
                    System.out.println(year+" is  NOT a Leap year");
                }
            }
            else
            {
                System.out.println(year+" is a Leap year");
            }
            
        }
        else
        {
            System.out.println(year+" is NOT a Leap year");
        }



    }
}
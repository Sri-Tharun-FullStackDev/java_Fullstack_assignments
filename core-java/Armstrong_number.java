

import java.lang.Math;
public class Armstrong_number 
{
    public static void main(String args[])
    {
        int arm_num=153;
        int original_num=arm_num;
        int rem=0;
        int added=0;
        int digits=0;
        String s = "" + arm_num;
        System.out.println("the given number: "+s);
        digits=s.length();
        System.out.println("total digits: "+digits);


      while(arm_num!=0)
      {
          rem = arm_num%10;
          added +=  Math.pow(rem,(digits));
          arm_num /=10;
      }
      System.out.println("the calculated number: "+added);
      if (original_num==added)
      {
        System.out.println("the given number is Armstrong number");
      }
      else
      {
        System.out.println("the given number is NOT Armstrong number");
      }
    }

}

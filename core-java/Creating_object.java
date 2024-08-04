class calculator
{
    public int add(int num1,int num2)
    {
        System.out.println("in add class or object");
        int added = num1+num2;
        return added;
    }
}

 
public class Creating_object 
{
    public static void main(String args[]) 
    {
        
        //calling a class:
        calculator sum= new calculator();
        //creating an object:
        int result=sum.add(15,20);
        System.out.println("sum of two numbers using an object: "+result);

    }
}

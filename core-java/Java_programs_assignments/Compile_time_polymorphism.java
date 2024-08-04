class Calc
{
    int addition(int a , int b)
    {
        return a+b;
    }

    double addition(double a, double b)
    {
        return a+b;
    }

}
// creating a simple method overloading concept to confirm compile time polymorphism

public class Compile_time_polymorphism 
{
    public static void main(String[] args) {
        Calc n=new Calc();
        System.out.println(n.addition(10,5 ));
        System.out.println(n.addition(2.56, 3.58)); 
    }
    
}

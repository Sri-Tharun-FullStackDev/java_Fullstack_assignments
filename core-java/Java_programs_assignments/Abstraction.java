
abstract class A
{

    int a=10,b=20;
        int c=a+b;
public void Add()
    {
        System.out.println(c);
    }

    abstract int B();
}

class C extends A
{
    int B()
    {
        System.out.println("inside of abstract class");
        return c;
        
    };
}


 class Abstraction {
public static void main(String[] args) {
    C x=new C();
    System.out.println(x.B());
}


}

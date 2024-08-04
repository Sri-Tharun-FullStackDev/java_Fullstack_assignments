//basic program for inner class

class A 
{
    int a = 10;
    void show()
    {
        System.out.println("method of class A");
    }

    class B
    {
        int b = 20;
        void show()
        {
            System.out.println("method of class B");
        }
    }
}







public class Inner_class {

    public static void main(String[] args) {
        
        A simple = new A();
        simple.show();
        A.B simple2 = simple.new B();
        simple2.show();



    }
    
}

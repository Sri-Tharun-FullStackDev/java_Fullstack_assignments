//static inner class

class A 
{
    int a = 10;
    void show()
    {
        System.out.println("method of class A");
    }

    static class B
    {
        int b = 20;
        void show()
        {
            System.out.println("method of class B");
        }
    }
}


public class Static_inner_class {

    public static void main(String[] args) {
        
        A.B simple = new A.B();
        simple.show();
        
        
        



    }
    
}

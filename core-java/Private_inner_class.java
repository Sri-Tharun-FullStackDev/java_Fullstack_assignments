class Calc
{
    public void add(int a,int b){
        System.out.println(a+b);
    }

    private class multiply{
        public void multi(int a, int b){
            System.out.println(a*b);
            System.out.println("in inner class");

     }
        
    }
    
}







public class Private_inner_class {
    public static void main(String[] args) {
        
        Calc.multiply mul=new Calc.multiply();

    }
    
}

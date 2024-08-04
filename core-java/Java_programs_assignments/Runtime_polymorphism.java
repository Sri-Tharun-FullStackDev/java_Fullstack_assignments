class Computer{
    void display(){
    System.out.println("Iam a computer");
    }
}


class Laptop extends Computer{
    // void display(){
    // System.out.println("Iam a laptop");
    // }
}


public class Runtime_polymorphism {
    public static void main(String[] args) {
        Laptop obj=new Laptop();
        obj.display();        
    }


}

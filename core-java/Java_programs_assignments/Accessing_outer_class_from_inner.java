class outer{

int a= 500;
class inner{
    public int power(){
        return a*a;
    }
}

}

public class Accessing_outer_class_from_inner {
   public static void main(String[] args) {
    outer s=new outer();
    outer.inner m=s.new inner();
    System.out.println(m.power());

   } 
}

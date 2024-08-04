class Prime
{
public static void main (String args[])
{



int n=2503512;


for(int i=2;i<=Math.sqrt(n);i++)
{

if(n%i==0)
{
System.out.println("It is a composite number");
break;
}

else
{
System.out.println("It is a prime number");
break;
}

}
}
}
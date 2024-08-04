class Fibo
{
public static void main (String args[])
{
int a,b,c,n;

a=0;
b=1;

n=20;

for(int i=0;i<=n;i++)
{
c=a+b;
System.out.println(a);
a=b;
b=c;
}
}
}
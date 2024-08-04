class Prime_number_range
{
public static void main(String[] args) 
{

    int n,flag;

for(n=2;n<=100;n++)
    {
        flag=0;
        for(int i=2;i<=Math.sqrt(n);i++)
        {
            if(n%i==0)
            {
                flag=1;
                break;
            }
        }
        if(flag==0)
        {
            System.out.println(n);
        }
    }
}
}  
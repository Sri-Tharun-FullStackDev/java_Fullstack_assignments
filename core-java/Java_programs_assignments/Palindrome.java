class Palindrome 
{
public static void main (String args[])
{
    String word= "tharun";
    char[] arr_word= word.toCharArray();
    String rev_word="";
    System.out.println(arr_word);
    for (int i=arr_word.length-1;i>=0;i--)
    {
       rev_word += arr_word[i];
    }
    System.out.println(rev_word);
    if(word.equals(rev_word))
    {
        System.out.println("the given word is a palindrome");
    }
    else
    {
        System.out.println("the given word is NOT a palindrome");
    }

}
}

import java.util.Arrays;


class Enhanced_for_loop
{
    public static void main(String[] args) {
        
        int[] numbers = {1,2,3,4,5,6,7,8};
        // used for iterations in a very easy way
        for(int i : numbers)
        {
            System.out.println(i);
        }
        // using stream arrays are also easy

        Arrays.stream(numbers).forEach(System.out::print);
    }
}
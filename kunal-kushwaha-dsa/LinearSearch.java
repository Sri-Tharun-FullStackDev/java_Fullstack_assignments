import java.io.*;
import java.util.*;

public class LinearSearch {

    public static void main(String[] args ) {
        int[] arr = {1,2,3,4,5,6,7,8,9};
        int target = 5;
        System.out.println(Arrays.toString(arr));

         boolean ans = linearSearch(arr, target);
         int ans1 = linearSearch2(arr, target);

        System.out.println(ans);
        System.out.println(ans1);

       
    }



    static boolean linearSearch(int[] arr, int target)
    {
        for (int i=0;i<arr.length;i++) 
         {
        // System.out.println("in for loop"+arr[i]);

            if(arr[i] == target)
               { return true;}     
        }
        return false;

    }


    static int linearSearch2(int[] arr, int target)
    {
        for (int j : arr){

            if(j == target)
               { return j;}     
        }
        return 0;

    }

    // private static Boolean linearSearch(int[] arr, int target) {
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'linearSearch'");
    // }
}
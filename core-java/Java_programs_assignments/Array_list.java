
import java.util.ArrayList;
import java.util.Scanner;
public class Array_list {
    public static void main(String[] args) {
        
        // to get an input from user for an array list
        ArrayList<Integer> arr = new ArrayList<>();

        Scanner scanner = new Scanner(System.in);
        System.out.print("enter the number of elements in arraylist: ");
        int num = scanner.nextInt();
        System.out.print("Enter the elements of array list: ");
        for(int i=0;i<num;i++)
        {
            int values =scanner.nextInt();
            arr.add(values);
        }
        
        System.out.println(arr);
        scanner.close();
        // removing one element in the array list
        arr.remove(0);
        System.out.println("after the removal of first element: "+arr);
        // clear is used to delete entire array list
        arr.clear();
        System.out.println("after clearing the entire list: "+arr);
    }
    
}

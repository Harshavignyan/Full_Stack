package ifelse;
import java.util.Scanner;

public class file4 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int x = input.nextInt();

        if(x > 96){
            System.out.println(x + " is a not a valid input");
        }
        // else{
        //     System.out.println(x + " is not a factor of 96");
        // }
    }
}

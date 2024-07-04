package ifelse;
import java.util.Scanner;

public class file5 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int x = input.nextInt();

        if(x%3 == 0){
            System.out.println(x + " is a multiple of 3");
        }
        else{
            System.out.println(x + " is not a multiple of 3");
        }
    }
}

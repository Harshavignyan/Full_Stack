package ifelse;
import java.util.Scanner;

public class file3 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int x = input.nextInt();

        if(96%x == 0){
            System.out.println(x + " is a factor of 96");
        }
        else{
            System.out.println(x + " is not a factor of 96");
        }
    }
}

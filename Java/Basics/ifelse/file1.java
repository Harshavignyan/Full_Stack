package ifelse;
import java.util.Scanner;

public class file1 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int x = input.nextInt();
        if(x%7 == 0){
            System.out.println(x + " is divisible by 7");
        }
        else{
            System.out.println(x + " is not divisible by 7");
        }
    }
}

package DSAquestions;

import java.util.Arrays;

public class Greedy1 {

    public static void main(String[] args) {

        int[] coins = {1, 2, 5, 50, 20, 10};
        int X = 93;

        Arrays.sort(coins);

        int count = 0;

        for (int i = coins.length - 1; i >= 0; i--) {

            while (coins[i] <= X) {

                X -= coins[i];
                count++;
            }
        }

        System.out.println(count);
    }
}
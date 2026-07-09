package DSAquestions;

import java.util.*;

public class Greedy2 {

    public static void main(String[] args) {

        int[] start = {1, 3, 0, 5, 8, 5};
        int[] end   = {2, 6, 4, 7, 9, 9};

        // Store meetings as {end time, start time}
        List<int[]> meetings = new ArrayList<>();

        for (int i = 0; i < start.length; i++) {
            meetings.add(new int[]{end[i], start[i]});
        }
        // [[2,1],[6,3],[4,0],[7,5],[9,8],[9,5]]

        // Sort meetings based on end time
        meetings.sort(Comparator.comparingInt(a -> a[0]));
        //for (int i = 0; i < meetings.size() - 1; i++) {
        //    for (int j = 0; j < meetings.size() - i - 1; j++) {
        //        if (meetings.get(j)[0] > meetings.get(j + 1)[0]) {
        //            int[] temp = meetings.get(j);
        //            meetings.set(j, meetings.get(j + 1));
        //            meetings.set(j + 1, temp);
        //        }
        //    }
        //}

        // [[2,1],[4,3],[6,0],[7,5],[9,8],[9,5]]

        int count = 0;
        int lastEnd = -1;

        // Greedy approach
        for (int[] meeting : meetings) {   //[4,3]
            int meetingEnd = meeting[0];  //4
            int meetingStart = meeting[1];   //3

            if (meetingStart > lastEnd) {   //3>2
                count++;   //2
                lastEnd = meetingEnd;   //4
            }
        }

        System.out.println(count);
    }
}
import java.util.*;

public class LinkedListExample {
    public static void main(String[] args) {
        // ArrayList 컬렉션 객체 생성
        List<String> list1 = new ArrayList<String>();

        // LinkedList 컬렉션 객체 생성
        List<String> list2 = new LinkedList<String>();

        // 시작과 끝 시간을 저장할 변수 선언
        long startTime;
        long endTime;

        // ArrayList에 데이터를 저장하는데 걸리는 시간 측정
        startTime = System.nanoTime(); 
        for (int i = 0; i < 10000; i++) {
            list1.add(0, String.valueOf(i));
        }
        endTime = System.nanoTime();
        System.out.println("ArrayList 걸린 시간: " + (endTime - startTime) + " ns");

        // LinkedList에 데이터를 저장하는데 걸리는 시간 측정
        startTime = System.nanoTime();
        for (int i = 0; i < 10000; i++) {
            list2.add(0, String.valueOf(i));
        }
        endTime = System.nanoTime();
        System.out.println("LinkedList 걸린 시간: " + (endTime - startTime) + " ns");
    }
}
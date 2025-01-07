import java.util.Hashtable;

public class HashtableExample {
    public static void main(String[] args) {
        // Hashtable 생성
        Hashtable<Integer, String> hashtable = new Hashtable<>();

        // 스레드 1: 데이터를 추가
        Thread thread1 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                hashtable.put(i, "Value " + i);
                System.out.println("Thread 1: 추가된 키 = " + i);
                try {
                    Thread.sleep(100); // 다른 스레드와 경쟁 상황 유발
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        // 스레드 2: 데이터를 읽음
        Thread thread2 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                if (hashtable.containsKey(i)) {
                    System.out.println("Thread 2: 읽은 값 = " + hashtable.get(i));
                } else {
                    System.out.println("Thread 2: 키 " + i + " 없음");
                }
                try {
                    Thread.sleep(150); // 다른 스레드와 경쟁 상황 유발
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        // 두 스레드 실행
        thread1.start();
        thread2.start();

        // 스레드가 모두 종료될 때까지 대기
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // 최종 결과 출력
        System.out.println("최종 Hashtable 내용: " + hashtable);
    }
}

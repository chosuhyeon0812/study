import java.util.Vector;

public class VectorExample {
    public static void main(String[] args) {
        Vector<Integer> vector = new Vector<>();

        // thread 1 : 벡터에 요소 추가
        new Thread(() -> {
            for(int i = 0; i < 1000; i++) {
                vector.add(i);
                System.out.println(i + " ");
            }
        }).start();

        // thread 2 : 벡터의 요소 개수 출력
        new Thread(() -> {
            for(int i = 0; i < 1000; i++) {
                System.out.println("^^" + vector.size());
            }
        }).start();
    }
}

// Vector는 내부적으로 동기화되어 있어, 데이터에 접근하는 스레드가 충돌하지 않도록 안전하게 처리됩니다
// 한 스레드가 add()를 수행하는 동안 다른 스레드는 size()를 호출하지 못하고 대기합니다.
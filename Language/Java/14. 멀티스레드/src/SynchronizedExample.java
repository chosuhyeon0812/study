public class SynchronizedExample {
    public static void main(String[] args) {
        // 공유 객체 생성
        Calculator calculator = new Calculator();

        // 스레드 생성
        User1Thread user1 = new User1Thread();
        User2Thread user2 = new User2Thread();

        // Calculator 객체를 공유 객체로 설정
        user1.setCalculator(calculator);
        user2.setCalculator(calculator);

        // 스레드 시작
        user1.start();
        user2.start();
    }
}
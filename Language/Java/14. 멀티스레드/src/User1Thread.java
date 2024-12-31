public class User1Thread extends Thread {
    private Calculator calculator;

    // 스레드 이름 변경
    public User1Thread(){
        setName("User1Thread");
    }

    // 외부에서 공유 객체인 Calculator를 받아 필드에 저장
    public void setCalculator(Calculator calculator){
        this.calculator = calculator;
    }

    // 동기화 메소드 호출
    @Override
    public void run(){
        calculator.setMemory1(100); 
    }
}
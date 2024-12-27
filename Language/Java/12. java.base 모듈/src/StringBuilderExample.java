public class StringBuilderExample {
    public static void main(String[] args) {
        String data = new StringBuilder()
                .append("Hello")
                .append(" ")
                .append("Java")
                .toString();
        System.out.println(data);
    }
}
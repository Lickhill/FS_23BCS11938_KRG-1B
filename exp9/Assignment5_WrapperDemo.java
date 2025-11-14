import java.util.*;

class WrapperDemo {
    void processNumbers(List<Integer> numbers) {
        int primitiveValue = 42;
        numbers.add(primitiveValue);
        numbers.add(Integer.valueOf(100));
        numbers.add(200);

        int sum = 0;
        for (Integer num : numbers) {
            sum += num;
        }
        System.out.println("Sum: " + sum);

        String[] stringNumbers = { "10", "20", "abc" };
        for (String str : stringNumbers) {
            try {
                int parsed = Integer.parseInt(str);
                System.out.println("Parsed: " + parsed);
            } catch (NumberFormatException e) {
                System.out.println("Cannot parse: " + str);
            }
        }

        System.out.println("Maximum value: " + Collections.max(numbers));

        System.out.println("Integer cache comparison: " + (Integer.valueOf(100) == Integer.valueOf(100)));

        Double d1 = 3.14;
        Double d2 = Double.valueOf(2.71);
        System.out.println("Double autoboxing: " + d1 + ", " + d2);

        Boolean bool1 = true;
        Boolean bool2 = Boolean.valueOf(false);
        System.out.println("Boolean wrapper: " + bool1 + ", " + bool2);
    }

    public static void main(String[] args) {
        WrapperDemo demo = new WrapperDemo();
        List<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(Integer.valueOf(50));
        numbers.add(75);

        demo.processNumbers(numbers);
        System.out.println("Final list: " + numbers);
    }
}

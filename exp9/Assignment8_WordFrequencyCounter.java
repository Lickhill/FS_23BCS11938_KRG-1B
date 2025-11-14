import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

class Assignment8_WordFrequencyCounter {
    private static final ConcurrentHashMap<String, Integer> wordFrequency = new ConcurrentHashMap<>();

    static class WordProcessor implements Runnable {
        private String paragraph;
        private String threadName;

        public WordProcessor(String paragraph, String threadName) {
            this.paragraph = paragraph;
            this.threadName = threadName;
        }

        @Override
        public void run() {
            String[] words = paragraph.toLowerCase().replaceAll("[^a-z\\s]", "").split("\\s+");

            for (String word : words) {
                if (!word.isEmpty()) {
                    wordFrequency.merge(word, 1, Integer::sum);
                    System.out.println(threadName + " processed word: " + word);
                }
            }
        }
    }

    public static void main(String[] args) {
        String para1 = "Java is a powerful programming language. Java supports multithreading and concurrent programming.";
        String para2 = "Concurrent programming in Java allows multiple threads to execute simultaneously. Java provides thread safety.";
        String para3 = "Multithreading in Java improves performance. Java concurrent collections are thread safe and efficient.";
        String para4 = "Programming with Java threads requires understanding of synchronization. Java provides various synchronization mechanisms.";

        Thread thread1 = new Thread(new WordProcessor(para1, "Thread-1"));
        Thread thread2 = new Thread(new WordProcessor(para2, "Thread-2"));
        Thread thread3 = new Thread(new WordProcessor(para3, "Thread-3"));
        Thread thread4 = new Thread(new WordProcessor(para4, "Thread-4"));

        thread1.start();
        thread2.start();
        thread3.start();
        thread4.start();

        try {
            thread1.join();
            thread2.join();
            thread3.join();
            thread4.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted");
        }

        System.out.println("\nFinal word frequency (sorted by count descending):");
        wordFrequency.entrySet()
                .stream()
                .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
                .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));

        System.out.println("\nTotal unique words: " + wordFrequency.size());
        System.out.println("Total word count: " + wordFrequency.values().stream().mapToInt(Integer::intValue).sum());
    }
}

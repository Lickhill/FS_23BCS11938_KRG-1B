class MultithreadingDemo implements Runnable {
    public void run() {
        for (int i = 1; i <= 10; i++) {
            System.out.println(Thread.currentThread().getName() + " printing " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(Thread.currentThread().getName() + " was interrupted");
                return;
            }
        }
    }

    public static void main(String[] args) {
        MultithreadingDemo demo = new MultithreadingDemo();

        Thread thread1 = new Thread(demo, "Thread-1");
        Thread thread2 = new Thread(demo, "Thread-2");
        Thread thread3 = new Thread(demo, "Thread-3");

        thread1.start();
        thread2.start();
        thread3.start();

        try {
            thread1.join();
            thread2.join();
            thread3.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread was interrupted");
        }

        System.out.println("All threads are done");
    }
}

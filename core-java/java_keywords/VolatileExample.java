public class VolatileExample extends Thread {
    private volatile boolean running = true;

    public void run() {
        while (running) {
            System.out.println("Thread is running...");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
        System.out.println("Thread stopped.");
    }

    public void stopThread() {
        running = false;
    }

    public static void main(String[] args) {
        VolatileExample t = new VolatileExample();
        t.start();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            System.out.println(e);
        }
        t.stopThread();
        System.out.println("Main thread stopped.");
    }
}

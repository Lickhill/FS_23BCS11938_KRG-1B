import java.util.*;

class Task {
    private String description;
    private Integer priority;

    public Task(String description, int priority) {
        this.description = description;
        this.priority = priority;
    }

    public String getDescription() {
        return description;
    }

    public Integer getPriority() {
        return priority;
    }

    @Override
    public String toString() {
        return "Task{description='" + description + "', priority=" + priority + "}";
    }
}

class TaskManager {
    ArrayList<Task> tasks;
    private HashSet<String> taskDescriptions;
    private HashSet<String> tags;

    public TaskManager() {
        tasks = new ArrayList<>();
        taskDescriptions = new HashSet<>();
        tags = new HashSet<>();
    }

    public void addTask(String description, int priority) {
        if (taskDescriptions.contains(description)) {
            System.out.println("Task already exists: " + description);
            return;
        }
        Task task = new Task(description, priority);
        tasks.add(task);
        taskDescriptions.add(description);
        System.out.println("Added: " + task);
    }

    public void addTag(String tag) {
        tags.add(tag);
        System.out.println("Added tag: " + tag);
    }

    public void sortTasksByPriority() {
        tasks.sort(Comparator.comparing(Task::getPriority));
        System.out.println("Tasks sorted by priority");
    }

    public void printAllTasks() {
        System.out.println("All Tasks:");
        for (Task task : tasks) {
            System.out.println(task);
        }
        System.out.println("Tags: " + tags);
    }

    public void concurrentTaskAddition() {
        Thread thread1 = new Thread(() -> {
            addTask("Concurrent Task 1", 10);
        });

        Thread thread2 = new Thread(() -> {
            addTask("Concurrent Task 2", 5);
        });

        thread1.start();
        thread2.start();

        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            System.out.println("Thread interrupted");
        }
    }
}

class Assignment6_TaskManager {
    public static void main(String[] args) {
        TaskManager manager = new TaskManager();

        manager.addTask("Complete assignment", 1);
        manager.addTask("Study for exam", 2);
        manager.addTask("Buy groceries", 3);
        manager.addTask("Call doctor", 1);
        manager.addTask("Read book", 4);

        manager.addTag("important");
        manager.addTag("urgent");
        manager.addTag("personal");

        Collection<Task> coll = manager.tasks;

        manager.printAllTasks();
        manager.sortTasksByPriority();
        manager.printAllTasks();

        manager.concurrentTaskAddition();
        manager.printAllTasks();
    }
}

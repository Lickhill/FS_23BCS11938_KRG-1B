import java.util.*;

class Student {
    private String name;
    private int rollNumber;
    private double gpa;

    public Student(String name, int rollNumber, double gpa) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.gpa = gpa;
    }

    public String getName() {
        return name;
    }

    public int getRollNumber() {
        return rollNumber;
    }

    public double getGpa() {
        return gpa;
    }

    @Override
    public String toString() {
        return "Student{name='" + name + "', rollNumber=" + rollNumber + ", gpa=" + gpa + "}";
    }
}

class StudentManager {
    private ArrayList<Student> students;

    public StudentManager() {
        students = new ArrayList<>();
    }

    public boolean addStudent(String name, int rollNumber, double gpa) {
        for (Student student : students) {
            if (student.getRollNumber() == rollNumber) {
                System.out.println("Student with roll number " + rollNumber + " already exists");
                return false;
            }
        }
        students.add(new Student(name, rollNumber, gpa));
        System.out.println("Added student: " + name);
        return true;
    }

    public Student searchByName(String name) {
        for (Student student : students) {
            if (student.getName().equalsIgnoreCase(name)) {
                return student;
            }
        }
        return null;
    }

    public boolean removeByRollNumber(int rollNumber) {
        for (int i = 0; i < students.size(); i++) {
            if (students.get(i).getRollNumber() == rollNumber) {
                Student removed = students.remove(i);
                System.out.println("Removed student: " + removed.getName());
                return true;
            }
        }
        System.out.println("Student with roll number " + rollNumber + " not found");
        return false;
    }

    public void sortByGpaDescending() {
        students.sort((s1, s2) -> Double.compare(s2.getGpa(), s1.getGpa()));
        System.out.println("Students sorted by GPA (descending)");
    }

    public void displayTop3() {
        System.out.println("Top 3 students by GPA:");
        int limit = Math.min(3, students.size());
        for (int i = 0; i < limit; i++) {
            System.out.println((i + 1) + ". " + students.get(i));
        }
    }

    public void displayAllStudents() {
        System.out.println("All Students:");
        for (Student student : students) {
            System.out.println(student);
        }
    }
}

class Assignment7_StudentManager {
    public static void main(String[] args) {
        StudentManager manager = new StudentManager();

        manager.addStudent("Alice Johnson", 101, 3.8);
        manager.addStudent("Bob Smith", 102, 3.5);
        manager.addStudent("Charlie Brown", 103, 3.9);
        manager.addStudent("Diana Prince", 104, 3.7);
        manager.addStudent("Eve Wilson", 105, 3.6);
        manager.addStudent("Frank Miller", 106, 3.2);
        manager.addStudent("Grace Lee", 107, 3.95);
        manager.addStudent("Henry Davis", 108, 3.3);

        System.out.println("\nAfter adding students:");
        manager.displayAllStudents();

        System.out.println("\nSearching for 'alice':");
        Student found = manager.searchByName("alice");
        System.out.println(found != null ? found : "Not found");

        System.out.println("\nRemoving student with roll number 105:");
        manager.removeByRollNumber(105);

        System.out.println("\nAfter removal:");
        manager.displayAllStudents();

        System.out.println("\nSorting by GPA (descending):");
        manager.sortByGpaDescending();
        manager.displayAllStudents();

        System.out.println();
        manager.displayTop3();
    }
}

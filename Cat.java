public class Cat {
    // Fields/Attributes/Adjectives/Properties
    public String name;
    public int age;

    // Overloaded Constructor...
    public Cat(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method...
    // Verbs or Behaviours
    public void sleep() {
        System.out.printf(
            "The cat %s is %i years old and is now sleeping...",
            this.name,
            this.age);
    }
}
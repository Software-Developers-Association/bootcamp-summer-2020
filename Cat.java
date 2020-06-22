public class Cat {
    // Fields/Attributes/Adjectives/Properties
    public String name;
    public int age;

    // Overloaded Constructor...
    public Cat(String name, int age) {
        this.name = name;
        this.age = age;

        Cat cat = new Builder().setAge(10).setName("Levi").build();
    }

    // Method...
    // Verbs or Behaviours
    public void sleep() {
        System.out.printf(
            "The cat %s is %i years old and is now sleeping...",
            this.name,
            this.age);
    }

    class Builder {
        private String name;
        private int age;

        public Builder setName(String name) {
            this.name = name;

            return this;
        }

        public Builder setAge(int age) {
            this.age = age;

            return this;
        }

        public Cat build() {
            return new Cat(this.name, this.age);
        }
    }
}
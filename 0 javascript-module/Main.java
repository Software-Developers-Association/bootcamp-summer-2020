class Main {
    static boolean isAuthenticated = false;

    public static void main(String[] args) {
        Object[] setB = new Object[] { "1", 2, 3, "Kevin", true };

        int myInt = 0;

        if(setB[0] instanceof Integer) {
            myInt = (int)setB[0];
        }
    }

    static class Array {
        private int[] array = new int[0];

        public void push(int item) {
            int[] newArray = new int[this.array.length + 1];

            // copys the old array into the new array
            // ...copying...

            newArray[newArray.length - 1] = item;

            this.array = newArray;
        }

        public int pop() {
            int[] newArray = new int[this.array.length - 1];

            // copy the old array into the new array 1 less the length
            // ...copying..

            this.array = newArray;

            return this.array[this.array.length - 1];
        }

        public int shift() {
            int[] newArray = new int[this.array.length - 1];

            // copy the old array into the new array, 1 less the length starting at index 1
            // ...copying...

            int firstItem = this.array[0];

            this.array = newArray;

            return firstItem;
        }
    }
}
class Main {
    static boolean isAuthenticated = false;

    public static void main(String[] args) {
        Object[] setB = new Object[] { "1", 2, 3, "Kevin", true };

        int myInt = 0;

        if(setB[0] instanceof Integer) {
            myInt = (int)setB[0];
        }
    }
}
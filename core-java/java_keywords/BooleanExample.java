public class BooleanExample {
    public static void main(String[] args) {
        boolean isJavaFun = true;
        boolean isFishTasty = false;

        System.out.println("Is Java fun? " + isJavaFun);
        System.out.println("Is fish tasty? " + isFishTasty);

        int x = 10;
        int y = 20;
        boolean comparison = x < y;
        System.out.println("Is x less than y? " + comparison);

        if (isJavaFun) {
            System.out.println("Java is fun!");
        } else {
            System.out.println("Java is not fun.");
        }

        if (isFishTasty) {
            System.out.println("Fish is tasty!");
        } else {
            System.out.println("Fish is not tasty.");
        }
    }
}

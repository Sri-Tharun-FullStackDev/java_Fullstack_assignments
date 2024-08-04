public class ThisKeywordExample {
    int num;

    ThisKeywordExample(int num) {
        this.num = num;
    }

    void display() {
        System.out.println("Number: " + this.num);
    }

    public static void main(String[] args) {
        ThisKeywordExample obj = new ThisKeywordExample(10);
        obj.display();
    }
}

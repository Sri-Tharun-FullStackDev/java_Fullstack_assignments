public class NativeKeywordExample {
    // Declare a native method
    public native void printMessage();

    // Load the library containing the native method implementation
    static {
        System.loadLibrary("NativeLibrary");
    }

    public static void main(String[] args) {
        // Create an instance of the class and call the native method
        NativeKeywordExample example = new NativeKeywordExample();
        example.printMessage();
    }
}

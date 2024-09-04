public class SavingsAccount extends Account {
    private double interestRate;

    // Constructor
    public SavingsAccount(String accountNumber, double initialBalance, double interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    // Method to apply interest
    public void applyInterest() {
        double interest = getBalance() * (interestRate / 100);
        deposit(interest);
        System.out.println("Applied interest of $" + interest + ". New balance: $" + getBalance());
    }

    // Display account information including interest rate
    @Override
    public String toString() {
        return super.toString() + ", Interest Rate=" + interestRate + "%";
    }
}
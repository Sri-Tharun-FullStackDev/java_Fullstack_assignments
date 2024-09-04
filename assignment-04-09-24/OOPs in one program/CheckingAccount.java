public class CheckingAccount extends Account {
    private double overdraftLimit;

    // Constructor
    public CheckingAccount(String accountNumber, double initialBalance, double overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    // Override withdraw method to allow overdraft
    @Override
    public void withdraw(double amount) {
        if (amount > 0 && (amount <= getBalance() + overdraftLimit)) {
            super.withdraw(amount);
        } else {
            System.out.println("Insufficient funds or invalid amount. Overdraft limit exceeded.");
        }
    }

    // Display account information including overdraft limit
    @Override
    public String toString() {
        return super.toString() + ", Overdraft Limit=" + overdraftLimit;
    }
}

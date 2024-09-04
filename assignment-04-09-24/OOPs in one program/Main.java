public class Main {
    public static void main(String[] args) {
        // Create account instances
        Account account1 = new Account("123456", 1000.00);
        SavingsAccount savingsAccount = new SavingsAccount("987654", 5000.00, 2.5);
        CheckingAccount checkingAccount = new CheckingAccount("555555", 2000.00, 500.00);

        // Display account information
        System.out.println("Account Details:");
        System.out.println(account1);
        System.out.println(savingsAccount);
        System.out.println(checkingAccount);

        // Perform operations
        System.out.println("\nPerforming operations...");

        // Deposit and withdraw from the account
        account1.deposit(150.00);
        account1.withdraw(200.00);

        // Apply interest on the savings account
        savingsAccount.applyInterest();

        // Withdraw from the checking account
        checkingAccount.withdraw(2200.00); // This should use the overdraft limit
        checkingAccount.withdraw(3000.00); // This should fail
    }
}
public class Account
{
	int balance;

	public Account(int initialbalance)
	{
		balance = initialbalance;
	}

	public void deposit(int amount)
	{
		balance = balance + amount;
	}

	public void withdraw(int amount)
	{
		balance = balance - amount;
	}

	public int show()
	{
		return balance;
	}

}


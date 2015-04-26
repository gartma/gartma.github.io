public class Customer extends Thread
{
	private Account bankaccount;
	private int id;
	private Synchronizer synch;

	public Customer(String name, Account acc, int i, Synchronizer s)
	{
		super(name);
		bankaccount = acc;
		id = i;
		synch = s;
	}

	public void run()
	{
		int i = 1;
		while (i <= 5000000)
		{
		    synch.enteringCR(id);
		    bankaccount.withdraw(1);
		    synch.leavingCR(id);
		    i=i+1;
		}
	}
}

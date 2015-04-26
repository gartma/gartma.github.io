public class AccountDemo
{
	public static void main(String[] args)
        {
                Account ouraccount = new Account(10000000);
                Dekker adekker = new Dekker();

		Customer fred = new Customer("Fred",ouraccount,0,adekker);
		Customer barney = new Customer("Barney", ouraccount,1,adekker);

		fred.start();
		barney.start();

		try
		{
			fred.join();
			barney.join();
		}
		catch (Exception e){}

		System.out.println(ouraccount.show());
        }
}

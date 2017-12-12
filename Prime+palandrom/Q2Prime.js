function myPrime()
{

		var i, j, isPrime;
        
		document.getElementById("demo").innerHTML="All Prime Numbers Between 1 to 1000";
 
        
        for (i = 2; i <= 1000; i++) 
		{
            isPrime = 0;
            
            for (j = 2; j < i; j++) // If any number between 2 to i/2 divides i completely then i cannot be prime number
			{
                
                if (i % j == 0) 
								 
				{
                    isPrime = 1;
                    break;
                }
            }
 
            if (isPrime == 0)
               document.getElementById("demo1").innerHTML+=i + " ";
        }
 
}

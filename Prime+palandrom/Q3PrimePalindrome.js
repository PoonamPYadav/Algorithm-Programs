
function myPrime()
{

		var i, j, isPrime;
        
		document.getElementById("demo").innerHTML="All Prime Palindrome Numbers Between 1 to 1000";
 
        
        for (i = 2; i <= 1000; i++) 
		{
            isPrime = 0;
            
            for (j = 2; j <= i/2; j++) // If any number between 2 to i/2 divides i completely then i cannot be prime number
			{
                
                if (i % j == 0) 
								 
				{
                    isPrime = 1;
                    break;
                }
            }
			
			
			var no=i;
			var rem,temp,sum=0;
		
		//var no = parseInt(document.getElementById("inputvalue").value);
		
			temp=no;

		
			while(no > 0)
			{	
					rem= no%10;
			
					sum = (sum*10)+rem;

					no=parseInt(no/10);
			


			}			
			
			
			
						
            if (isPrime == 0 && temp==sum)
			{
               document.getElementById("demo1").innerHTML+=i + " ";
			   
			   
        		
			}
			
			
		}
		
		/*
		var ary1=[];
		var ary2=[];
		for(var k=1;k<=10;k++)
		{
		
		ary1.push(k);
		ary2.push(k);
		
		}
		
		
		
		var ii=0;
		while(ii<=ary1.length)
		{
			ary2.sort();
		for(var jj=0;jj<=ary2.length;j++)
		{
				if(ary1[ii]==ary2[jj])
				
			
		
		}
		
		
		
		ii++;
		}
		document.getElementById("demo2").innerHTML=ary1;
		document.getElementById("demo3").innerHTML=ary2;
		*/
		
		
		
		
 
 
}


<html>
<body>


<p>Q.Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
<!--</p>
<lable>Enter range of 0 - 1000 Numbers</lable>
<input type="number" name="inputno" id="inputvalue">
<br>
<br>

-->
<button onclick=myPrime() >try it </button>

<p id="demo"> </p>
<p id="demo1"> </p>

<script>

function myPrime()
{

   var i, j, isPrime, n;
        document.getElementById("demo").innerHTML="All Prime Numbers Between 1 to 1000";
 
        // For every number between 2 to 100, check
        //  whether it is prime number or not
        for (i = 2; i <= 1000; i++) {
            isPrime = 0;
            // Check whether i is prime or not
            for (j = 2; j <= i / 2; j++) {
                // If any number between 2 to i/2 divides i
                // completely then i cannot be prime number
                if (i % j == 0) {
                    isPrime = 1;
                    break;
                }
            }
 
            if (isPrime == 0)
               document.getElementById("demo1").innerHTML=i + " ";
        }
 
}
/*
	function myPrime()

	{
		var i,check=0;
		var prime=" "
	//	var no = document.getElementById("inputvalue").value;
		for(var j=2;j<=1000;j++)
		{
				for(i=j;i<=j;i--)
				{
					{
					if(j%i==0)
					check++;

					}
				}

				if(check==2)
				{
				
					prime=prime+j+""
					document.getElementById("demo").innerHTML="Prime number"+prime;

				}
		

		}
	}*/

</script>

</body>

</html>
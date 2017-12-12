function check()
{

		var ary1=[];
		ary1=document.getElementById("inputvalue1").value.toLowerCase().split('');

		var ary2=[];
		ary2=document.getElementById("inputvalue2").value.toLowerCase().split('');
		if(ary1.length==ary2.length)
		{

				var len=ary1.length,temp=0;
				for(var m=0;m<=len;m++)
				{
					for(n=0;n<(len-m);n++)
					{
					if(ary1[n]>ary1[n+1])
					{
						temp=ary1[n];
						ary1[n]=ary1[n+1];
						ary1[n+1]=temp;
	
					}
					}

				}
				var len1=ary2.length,temp1=0;
				for(var m=0;m<=len1;m++)
				{
					for(n=0;n<(len1-m);n++)
					{
						if(ary2[n]>ary2[n+1])
						{
						temp1=ary2[n];
						ary2[n]=ary2[n+1];
						ary2[n+1]=temp1;
	
						}
				}

				}
		
			var ar1=ary1.join();
			var ar2=ary2.join();
		console.log(ar1);
			if(ar1==ar2)
			{
			
				document.getElementById("demo").innerHTML = "Anagram string";
		
			}else{

		document.getElementById("demo").innerHTML = "Not Anagram string";
		}
		}else{

		document.getElementById("demo").innerHTML = "Not Anagram string";
		}
}

			
		
		
	
		
	





	//	if(ary1==ary2){

	//	document.getElementById("demo").innerHTML = "Anagram string";
	/*
	var i,j;

	for(i=0;i<=ary1.length;i++)
	{

	for(j=i;j<=ary2.length;j++)

	{
		if(ary1[i]==ary2[j])


		{document.getElementById("demo1").innerHTML = "Anagram string";}
		else
		{document.getElementById("demo1").innerHTML = "not Anagram string";}



	}



	}
	*/





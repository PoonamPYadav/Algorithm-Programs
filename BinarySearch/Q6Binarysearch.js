 function binary()
    {
        var no1=document.getElementById("inputvalue1").value.split(" ");


		var arr =[];

		for(a=0;a<no1.length;a++)
		{
			arr[a]=no1[a];

		}
       
												//	var arr=["poonam","pooja","ash","kap"];
        var n = arr.length;
        var x = document.getElementById("searchvalue").value;
        var result = binarySearch(arr,0,n-1,x);
        if (result == -1)
			document.getElementById("demo").innerHTML="Element not present";
            console.log("Element not present");
        else
          document.getElementById("demo").innerHTML="Element present";
    }
function binarySearch(arr,l,r,x)// r is high value and l is low value and x is serch element
{
	 
    
        if (r>=l)
        {
            var mid = l + parseInt((r - l)/2);
 
            // If the element is present at the middle itself
            if (arr[mid] == x)
               return mid;
 
            // If element is smaller than mid, then it can only be present in left subarray
         
            if (arr[mid] < x)
               return binarySearch(arr, l, mid-1, x);
			else
				return binarySearch(arr, mid+1, r, x);
 
            // Else the element can only be present in right  subarray
      
        }
		return -1;
 
        // We reach here when element is not present in array
        
    }
 
	

	


	


/*
	if(search == ar[mid]){
	document.getElementById("demo").innerHTML= "word found and youer word is:  "+search;

	}else if(search<ar[mid])
	{	
		for(var i=0;i<=mid;i++)
		{
			if(ar[i]==search)
			{
			document.getElementById("demo").innerHTML= "word found and youer search word is  "+ ar[i];
			break;
			}
			
			
		}
	
	
	}else if(search>ary[mid])
	{
	
	
		for(var j=mid;j<=len;j++)
		{
			if(ar[j]==search)
			{
			document.getElementById("demo").innerHTML= "word found and youer search word is  "+ ar[j];
			}
			
		}
		
	
	}else
			{
				document.getElementById("demo").innerHTML= "word not found";
			}

	}*/
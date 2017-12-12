function decimaltoBinary()
{

		var num=document.getElementById("decnum").value;

		var binary=[];
		var index=0;
		while(num>0)
		{
			binary[index]=num%2;
			index++;
			num=parseInt(num/2);

		}


		var rev=[];
			//var binrev=binary.reverse();

			for(i=binary.length-1;i>=0;i--)
			{                       
			rev.push(binary[i]);

			}

		var no=document.getElementById("decnum").value;
		document.getElementById("demo").innerHTML="decimal number  "+no+" in binary :  "+rev;
		
		for(var k=rev.length;k<8;k++)
		{
		rev.splice(0,0,0);
		}
	//document.getElementById("demo1").innerHTML=rev;
	
	
	
	var mid;
	mid=rev.length/2;
	console.log(mid);
	
	var ary1=[];
	var ary2=[];
	
	for(var i=0;i<mid;i++)
	{ 
	ary1.push(rev[i]);
	}
	
	console.log(ary2);
	for(var i=mid;i<rev.length;i++)
	{ 
	ary2.push(rev[i]);
	}
	console.log(ary2);
	var res=[];
	res=ary2.concat(ary1);
	console.log(res);
	 //var revers=[];
	// revers=res.reverse();
	
	var bindec=[];

		for(var j=res.length;j<=0;j--){
		bindec.push(res[j]*Math.pow(2,j));

		}
		var sum=0;
		for(var a=1;a<bindec.length;a++)
		{
		 sum=sum+bindec[a];
		}
		console.log(sum);
		console.log(bindec);
		document.getElementById("demo1").innerHTML="After swap binary no:  "+res+" binary to decimal :  "+sum;
}
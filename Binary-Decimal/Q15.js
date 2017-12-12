
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
		console.log(no);
		var bindec=[];

		for(var j=binary.length-1;j>=0;j--){
		bindec.push(binary[j]*Math.pow(2,j));

		}
		console.log(bindec);

		var sho=[];
		for(var k=0;k<bindec.length;k++)
		{
		if(bindec[k]==0)
		continue;

		sho.push(bindec[k]);

		}
		console.log(sho);


		//document.getElementById("demo1").innerHTML=no+":";
		for(var k=0;k<sho.length;k++)
		{

			if(k==sho.length-1)
			document.getElementById("res").innerHTML+=sho[k];
			else
			document.getElementById("res").innerHTML+=sho[k]+"+";
		}
 
		console.log(bindec);

		//document.getElementById("demo").innerHTML=bindec;





}
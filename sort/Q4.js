function myFunction()
{
	var start = new Date().getTime();
	console.log(start);
	var chk=document.getElementById("myInput").value;
	
	
	switch(chk)
	{
		//var start = new Date().getTime();
		case "1":
			myfunctionBinaryInteger(start);
			break;
		case "2":
		
			myfunctionBinaryString(start);
			break;
	    case "3":
			myfunctionInsertionInteger(start);
			break;
	    case "4":
		
			myfunctionInsertionString(start);
			break;
	    case "5":
			myfunctionBubbleInteger(start);
			break;
	    case "6":
			myfunctionBubbleString(start);
			break;
	
	     default:
       document.getElementById("demo").innerHTML ="select correct option";
	
		
	}
	 
}
   function myfunctionBinaryInteger(st)
 {
  
		var start =st;
		var no1=[];
		no1=document.getElementById("inputvalue1").value.split("");

		document.getElementById("bs").style.display = 'none';
		document.getElementById("as").style.display = 'none';
		document.getElementById("demo").innerHTML="Array value is:"+no1;
	
		var ary =[];
		for(a=0;a<no1.length;a++)
		{
			ary[a]=no1[a];

		}
		len=ary.length;
		var ar=[];
		ar=ary.sort();
		var search=7;
		var mid =parseInt(len/2);
		if(search == ar[mid]){
			document.getElementById("demo1").innerHTML= "Number found and youer number is:  "+search;

			}else if(search<ar[mid])
				{	
				for(var i=0;i<=mid;i++)
				{
					if(ar[i]==search)
					{document.getElementById("demo1").innerHTML= "search word is  "+ ar[i];}
					
			
				}	
			}else if(search>ary[mid])
				{
					for(var j=mid;j<=len;j++)
					{
						if(ar[j]==search)
					{document.getElementById("demo1").innerHTML= "search no is  "+ ar[j];}
					
					}		
			
				}else {document.getElementById("demo1").innerHTML= "word not found";}
		var end = new Date().getTime();
		var tot= end-start;
		
		millisToMinutesAndSeconds(tot);
  
	}
  
	
  
  function myfunctionBinaryString(st){
  
		var start =st;
		var no1=[];
		no1=document.getElementById("inputvalue1").value.split(" ");

	//	document.getElementById("demo").innerHTML= ary;
	//	document.getElementById("demo1").innerHTML= ary.length;
		//var len=ary.length;
  
  
  
  
  
  

	
		document.getElementById("demo").innerHTML=no1;
	
		var ary =[];
		for(a=0;a<no1.length;a++)
		{
			ary[a]=no1[a];

		}
		len=ary.length;
		var ar=[];
		ar=ary.sort();
		/*document.getElementById("demo3").innerHTML= ar;*/
		var search="poonam";
		var mid =parseInt(len/2);
		//document.getElementById("demo4").innerHTML= ary[mid];
			if(search == ar[mid]){
			document.getElementById("demo1").innerHTML= "word found and youer word is:  "+search;

			}else if(search<ar[mid])
				{	
				for(var i=0;i<=mid;i++)
				{
					if(ar[i]==search)
					{document.getElementById("demo1").innerHTML= "search word is  "+ ar[i];}
					
			
				}	
			}else if(search>ary[mid])
				{
					for(var j=mid;j<=len;j++)
					{
						if(ar[j]==search)
					{document.getElementById("demo1").innerHTML= "search no is  "+ ar[j];}
					
					}		
			
				}else {document.getElementById("demo1").innerHTML= "word not found";}
		var end = new Date().getTime();
		var tot= end-start;
		
		millisToMinutesAndSeconds(tot);
  
	}
  
	
	
function myfunctionInsertionInteger(st){
var start =st;
var ary=[];
ary=document.getElementById("inputvalue1").value.split("");

document.getElementById("demo").innerHTML= ary;
document.getElementById("demo1").innerHTML= ary.length;
var len=ary.length;

var i,j;

for(i=0;i<len;i++)

{

	var temp=ary[i];
	for(j=i-1;j>=0 &&(ary[j]>temp);j--)
	{
	ary[j+1]=ary[j];
	}
	ary[j+1]=temp

}
document.getElementById("demo1").innerHTML= ary;
var end = new Date().getTime();

console.log(end);
		var tot= end-start;
		console.log(tot);
		millisToMinutesAndSeconds(tot);
}	
	
		
	
function myfunctionInsertionString(st){
var start =st;
var ary=[];
ary=document.getElementById("inputvalue1").value.split(" ");

document.getElementById("demo").innerHTML= ary;
document.getElementById("demo1").innerHTML= ary.length;
var len=ary.length;

var i,j;

for(i=0;i<len;i++)

{

	var temp=ary[i];
	for(j=i-1;j>=0 &&(ary[j]>temp);j--)
	{
	ary[j+1]=ary[j];
	}
	ary[j+1]=temp

}
document.getElementById("demo1").innerHTML= ary;
var end = new Date().getTime();

console.log(end);
		var tot= end-start;
		console.log(tot);
		millisToMinutesAndSeconds(tot);
}	
	
function myfunctionBubbleInteger(st){

var start =st;
var ary=[];
ary=document.getElementById("inputvalue1").value.split("");

document.getElementById("demo").innerHTML= ary;
//document.getElementById("demo1").innerHTML= ary.length;
var len=ary.length;
	//var ary=[1,20,35,5,2,0];
//document.getElementById("demo").innerHTML= ary;

//var len=ary.length;

var i,j,temp=0;
/*document.getElementById("demo").innerHTML= len;*/

for(i=0;i<=len;i++)
{
	for(j=0;j<(len-i);j++)
	{
	if(ary[j]>ary[j+1])
		{
		temp=ary[j];
		ary[j]=ary[j+1];
		ary[j+1]=temp;
	
		}
	}

}
document.getElementById("demo1").innerHTML= ary;

var end = new Date().getTime();

console.log(end);
		var tot= end-start;
		console.log(tot);
		millisToMinutesAndSeconds(tot);
	
	
}
	
	
function myfunctionBubbleString(st){

var start =st;
var ary=[];
ary=document.getElementById("inputvalue1").value.split(" ");

document.getElementById("demo").innerHTML= ary;
//document.getElementById("demo1").innerHTML= ary.length;
var len=ary.length;
	//var ary=[1,20,35,5,2,0];
//document.getElementById("demo").innerHTML= ary;

//var len=ary.length;

var i,j,temp=0;
/*document.getElementById("demo").innerHTML= len;*/

for(i=0;i<=len;i++)
{
	for(j=0;j<(len-i);j++)
	{
	if(ary[j]>ary[j+1])
		{
		temp=ary[j];
		ary[j]=ary[j+1];
		ary[j+1]=temp;
	
		}
	}

}
document.getElementById("demo1").innerHTML= ary;

var end = new Date().getTime();

console.log(end);
		var tot= end-start;
		console.log(tot);
		millisToMinutesAndSeconds(tot);
	
	
}	
	
	
	
	function millisToMinutesAndSeconds(millis) 
	{ console.log(millis);
		var minutes = Math.floor(millis / 60000);
		var sec = (millis / 1000);
		console.log(sec);
			//var seconds = ((millis % 60000) / 1000).toFixed(0);
			// return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  
		document.getElementById("demotime").innerHTML ="Time required for compltion of function is"+ minutes + ":" + (sec < 10 ? '0' : '')  + sec;
	}
  
	




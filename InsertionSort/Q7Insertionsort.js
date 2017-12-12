function insertionSort(){
var ary=[];
ary=document.getElementById("inputvalue1").value.split(" ");

document.getElementById("demo").innerHTML= ary+"  ";
//document.getElementById("demo1").innerHTML= ary.length;
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
document.getElementById("demo1").innerHTML="  " +ary;

}
var ary=[1,20,35,5,2,0];
document.getElementById("demo").innerHTML= ary;

var len=ary.length;

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

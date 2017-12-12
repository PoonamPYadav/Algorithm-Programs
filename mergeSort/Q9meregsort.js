
function main()
{ 

var no1=document.getElementById("inputvalue1").value.split("");

var ary =[];

for(a=0;a<no1.length;a++)
{
	 ary[a]=no1[a];

}

	document.getElementById('sort1').innerHTML="Before Sort string : <br>"+ary;
	sort(ary);

	
	
}


  function sort(array) {

    var length = array.length,
        mid    = parseInt(length/2);
		
		var left=[];
		var right=[];

		for(var i=0;i<mid;i++)
			{

				left[i]=array[i];

			}
		
		 var k=0;
		for(var j=mid;j<length;j++)

			{
				right[k]=array[j];
				k++;

			}
			
      

			if(length === 1) 
			{
				return array;
			}

    return merge(sort(left), sort(right));

  }

  
  function merge(left, right) {

   
   var result = [];
	var i=0;
	var j=0;

    while(i<left.length || j<right.length) {

      if(i<left.length && j<right.length) {

        if(left[i] < right[j]) {
          result.push(left[i]);
		  i++;
        } else {
          result.push(right[j]);
		  j++;
        }

      } else if (i<left.length) {
        result.push(left[i]);
		i++;
      } else {
        result.push(right[j]);
		j++;
      }

    }

   // return result;
	//console.log(result);*/

	var sho=[];
	for(var k=0;k<result.length;k++)
	{
	sho.push(result[k]);
	}
	document.getElementById('sort').innerHTML="After Sort string : <br> "+sho;
	return result;
	
	
	
	
  }
 /*
  algo:
 
 while ( a and b have elements )
      if ( a[0] > b[0] )
         add b[0] to the end of c
        
      else
         add a[0] to the end of c
        
      end if
   end while
   
   while ( a has elements )
      add a[0] to the end of c
     
   end while
   
   while ( b has elements )
      add b[0] to the end of c
     
   end while
   
   return c*/



function IsArraySort(arr,index)
{
   if(index==arr.length-1)
   {
        return true; 
   }
   else
   {
    let res=IsArraySort(arr,index+1);
     return res && (arr[index]<=arr[index+1]);
   }
}
console.log(IsArraySort([1,2,3,4,5],0));
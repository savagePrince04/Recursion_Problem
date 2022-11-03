function sum(arr,index)
{
  if(arr.length-1==index)
  {
    return arr[index];
  }
  else{
    let res =sum([1,2,3,4,5],index+1);
    res=res+arr[index];
    return res;
  }
}
console.log(sum([1,2,3,4,5],0));
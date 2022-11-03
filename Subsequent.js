function Subsequence(arr,index)
{
  if(arr.length-1==index)
  {
    let m=[]
    m.push([arr[index]]);
    m.push([]);
    return m;
  }
  let res=Subsequence(arr,index+1); // [[3],[]]
  let result=[];     
   for(let i=0;i<res.length;i++)
   {
    result.push(res[i]);     //   [[3]]
    let val=[...res[i]];   // [[3]]
    val.unshift(arr[index]);     //[[2],[3]]
    result.push(val);
   }
   return result;
}
let arr=[1,2,3];
console.log(Subsequence(arr,0));
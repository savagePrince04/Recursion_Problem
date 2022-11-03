function permotation(str,index)
{
  if(index==str.length-1)
  {
    let m=[];
    m.push([str.charAt(index)]);
    return m;
  }
  let result=[];
  let res=permotation(str,index+1);  //[bc,cb];
  for(let i=0;i<res.length;i++)
  {
    let copy=res[i];
    let s=copy[0];
    for(let j=0;j<=s.length;j++)
    {
        let mk=s.substring(0,j)+str.charAt(index)+s.substring(j);
        result.push([mk]);
    }
  }
  return result;
}
let str="ABC";
console.log(permotation(str,0));
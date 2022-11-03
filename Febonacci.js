function feb(n)
{
 if(n<=1)
 {
    return n;
 }
 else
 {
    let res1=feb(n-1);
    let res2=feb(n-2);
    let result=res1+res2;
    return result;
 }
}
console.log(feb(8));
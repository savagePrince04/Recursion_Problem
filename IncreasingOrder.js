function IncreasingOrder(n){
if(n==1)
{
    //console.log(n);
    return n;
}
else
{
    let res=IncreasingOrder(n-1);
    console.log(res);
    return n;
}
}
IncreasingOrder(5);
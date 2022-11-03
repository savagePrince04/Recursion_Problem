function factorial(n)
{
    if(n==0 || n==1)
    {
        return 1;
    }
    else{
        let res=n*factorial(n-1);
        return res;
    }
}
console.log(factorial(5));
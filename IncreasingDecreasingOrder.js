function incDec(n)
{
  
  if(n==0)
  {
    return 0;
  }
  else
  {
    console.log(n);
    let output=incDec(n-1);
    console.log(output);
    return n;
  }
}
console.log(incDec(10));
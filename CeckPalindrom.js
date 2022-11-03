function CheckPalindron(str,i)
{
    let n=str.length-1;
    if(i==n)
    {
        return str[i];
    }
    else
    {
        let res=CheckPalindron(str,i+1);
        res=res+str[i];
         return res;
    }
}
let str="ABCBA";
if(CheckPalindron(str,0)==str)
{
    console.log(true);
}
else 
{
    console.log(false);
}
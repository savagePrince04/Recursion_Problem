// function SumOfNaturalNumber(n)
// {
//     if(n==1)
//     {
//         console.log(n);
//         return n;
//     }
//     else{
//         let res=SumOfNaturalNumber(n-1);
//         console.log(n);
//         res=res+n;
//         return res
//     }
// }
// let n=10;
// console.log("Total sum = "+SumOfNaturalNumber(n));
function fun(n)
{
    if(n > 0)
    {
        fun(n-1);
        console.log(n+" ");
        fun(n-1);
    }
}
fun(4);
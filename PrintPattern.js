// function pattern(no)
// {
//     console.log(no);
//     if(no<=0)
//     {
//         return;
//     }
//     else{
//         pattern(no-5);
//     }
//     console.log(no);
// }
//   pattern(16);
function output(no)
{
    return no == 0 ? 0 : no%10 + output(parseInt(no/10)) ;
}
 console.log(output(718));
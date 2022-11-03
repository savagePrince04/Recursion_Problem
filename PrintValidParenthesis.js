// function PrintValidparenthesis(result,open,close,n)
// {
//      if(result.length==2*n)
//      {
//         console.log(result.join(""));
//         return;
//      }
//      if(open<n)
//      {
//         result.push("(");
//         PrintValidparenthesis(result,open+1,close,n)
//         result.pop()
//      }
//      if(close<open)
//      {
//         result.push(")");
//         PrintValidparenthesis(result,open,close+1,n);
//         result.pop();
//      }
// }
// PrintValidparenthesis([],0,0,3);
let arr=[1,2,3,11,21,4];
console.log(arr.sort());
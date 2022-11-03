function PrintSubsequences(arr,index){
        if(index == arr.length - 1){
            let res = [];
            res.push([arr[index]]);
            res.push([]);
            return res;
        }
        // Recursive Call
        let res = PrintSubsequences(arr,index+1); // [3], []
        // self work
        let mr = [];
        for(i = 0; i < res.length; i++){
            mr.push(res[i]);
            let val = [...res[i]];
            val.unshift(arr[index]);
            mr.push(val);
        }
        //console.log(mr);
        return mr;
     }
    console.log(PrintSubsequences([1,2,3],0))
// function printSubsequences(array, index, result) {
//     if (index === array.length) {
//       if (result.length > 0)
//        console.log(`[${result}]`);
//     } else {
//       printSubsequences(array, index + 1, result);
//       result.push(array[index]);
//       printSubsequences(array, index + 1, result);
//       result.pop();
//     }
//     return;
//   }
  
//   let array = [1, 2, 3];
  
//   let result = new Array();
  
//   printSubsequences(array, 0, result);
  
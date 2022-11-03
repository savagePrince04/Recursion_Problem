function SingleElement(arr)
{
    let result=arr[0];
    for(let i=1;i<arr.length;i++)
        {
            result=result^arr[i];
        }
    return result;
    
}
nums =  [2,2,1]
console.log(SingleElement(nums));
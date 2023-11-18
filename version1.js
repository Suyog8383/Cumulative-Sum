let arr=[1,3,5,7,9]
function cumulativeSum(arr){
    let middle=[];
    let final=[];
    let result;
    for(let i=0;i<arr.length;i++){
        middle.push(arr[i]);
      result=0;
        for(let j=0;j<middle.length;j++){
            result += middle[j];
        }
        final.push(result)
    }
    return final; 
}
console.log(cumulativeSum(arr));

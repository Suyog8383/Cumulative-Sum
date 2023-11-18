let arr=[1,3,5,7,9]
function cumulativeSum(arr){
   let sum=0;
   return arr.map((item)=>{
       sum += item;
       return sum
   })
}
console.log(cumulativeSum(arr));

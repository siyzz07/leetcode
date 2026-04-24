/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {

    nums.sort((a, b) => a - b)
    nums=[...new Set(nums)]
let index=-1
if(nums[nums.length-1]>0){
   for(let i=0;i<nums.length;i++){
    if(nums[i]<=0){
        index=i
    }
   }
   if(index != -1 ){
    nums.splice(0,index+1)
   }
   }else{
    return 1
   }
 for(let i=1;i<nums[nums.length-1];i++){

    if(i !=nums[i-1]){
       
        return i
    }
 }
 let num=nums[nums.length-1]*1
 let n=(num+1)*1
return n
//  return nums[nums.length-1]*1+1
};
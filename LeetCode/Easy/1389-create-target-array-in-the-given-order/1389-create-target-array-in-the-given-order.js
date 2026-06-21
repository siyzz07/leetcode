/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let arrr=[]
    for(let i=0;i<nums.length;i++){
       arrr.splice(index[i],0,nums[i])
    }
   return arrr
};
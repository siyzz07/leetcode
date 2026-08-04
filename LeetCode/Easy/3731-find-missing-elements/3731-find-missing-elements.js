/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    nums.sort((a,b)=> a-b)
    let arr = []
    for (let i = nums[0] ; i<= nums[nums.length-1] ; i++){
         if(!nums.includes(i)){
            arr.push(i)
         }
    }
    return arr
};
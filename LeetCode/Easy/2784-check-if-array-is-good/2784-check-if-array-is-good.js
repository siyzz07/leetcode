/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let arr = nums.sort((a,b) => a-b)
    let max = arr[arr.length-1]
    let set = [...new Set(arr)]
   
    if(arr.length == max+1 && arr[arr.length-1] == arr[arr.length-2]  && set.length == arr.length-1)return true
    return false
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
   let a = nums.join('')
   let arr = a.split('').map((val)=> Number(val))
   return arr 
};
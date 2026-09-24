/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let val in nums){
        if(splitSum(nums[val])==val)return Number(val)
    }

    return -1
    function splitSum(num){
        let val = num.toString().split('')
        let sum = val.reduce((acc,val)=> (val*1)+acc,0)
        return sum
    }
};
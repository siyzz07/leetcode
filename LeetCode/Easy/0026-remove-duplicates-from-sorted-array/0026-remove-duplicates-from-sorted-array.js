/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let obj = {}
    for(let i = 0  ; i < nums.length ; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = true
        }else{
            for(let j = i ; j<nums.length-1 ; j++){
                nums[j] = nums[j+1] 
            }

            nums.length --
            i--
        }
    }

};
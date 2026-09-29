/**
 * @param {number[] nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let obj = {}
    for(let val of nums1 ){
        if(nums2.includes(val)){
            if(!obj[val])obj[val]= 1
        }
    }
    return Object.keys(obj).map((val)=>val*1)
};
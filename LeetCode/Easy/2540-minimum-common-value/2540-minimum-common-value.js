/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {

    let arr1 = new Set(nums1)
    let arr2 = new Set(nums2)
 
    for (let val of arr1){

        if(arr2.has(val)){
             return  val
        }
    }
 return -1

   
};
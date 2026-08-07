/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr = []
    let nextGreat = (val)=>{
        let index = nums2.indexOf(val)
        let g = val
        for(let i = index ; i<nums2.length ; i++){
            if(nums2[i]>g){
                g=nums2[i]
                break
            }
        }
        return g
    }

    for(let i = 0 ; i< nums1.length ; i++){
        let re = nextGreat(nums1[i])
        if(re == nums1[i]){
            arr.push(-1)
        }else{
            arr.push(re)
        }
    }
    return arr
};
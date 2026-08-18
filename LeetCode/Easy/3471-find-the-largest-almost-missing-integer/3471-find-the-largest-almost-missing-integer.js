/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
   if(k==1){
    let obj = {}
    for(let val of nums){
        if(obj[val]){
            obj[val] ++
        }else{
            obj[val] =1
        }
    }
     let a = Object.entries(obj)
     let arr = []
      a.forEach((val)=>{
        if(val[1]==1){
            arr.push(val[0])
        }
     })
     console.log(arr)
     if(a.length ==1)return -1
     return Math.max(...arr)
   }

   if(k >= nums.length){
    return Math.max(...nums)
   }

    let first =  nums[0]
    let last = nums[nums.length-1]

    if(nums.lastIndexOf(first)!=0 && nums.indexOf(last) != nums.length-1){
               return -1
    }else if( nums.indexOf(last) != nums.length-1){
        return first
    }else if(nums.lastIndexOf(first)!=0){
         return last
    }
    else{
        return Math.max(first,last)
    }

};
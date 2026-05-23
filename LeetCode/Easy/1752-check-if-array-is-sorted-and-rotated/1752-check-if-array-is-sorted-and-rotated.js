/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let num = [...nums]
    nums.sort((a,b) => a-b)
  

    for(let i = 0 ;i<num.length ; i++){

        let a  = num.pop()
        num.unshift(a)

        if(JSON.stringify(nums) == JSON.stringify(num)){
            return true
        }
        
    }
    return false

};
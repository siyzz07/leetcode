/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let a = 0

    function requ(n,a){
        if(n == 1){
            console.log(n)
            return true
        }
        if(a == 30){
            return false
        }
        let arr = n.toString().split('').map((val) => Math.pow((val*1),2))
        let sum = arr.reduce((acc,val)=> acc+val ,0)
            a++
       return  requ(sum,a)
    }

        return  requ (n,a)
        
};
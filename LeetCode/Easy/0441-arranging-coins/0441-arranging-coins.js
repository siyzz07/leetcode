/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
 
    let i =1
    let count = 0
    while(n >= i){
        n -= i
        i++
        count++
    }
   return count
};
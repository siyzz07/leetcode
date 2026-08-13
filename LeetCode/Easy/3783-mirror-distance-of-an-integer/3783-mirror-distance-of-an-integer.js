/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let reverse = n.toString().split('').reverse().join('')*1
    return  Math.abs(reverse - n)
    
};
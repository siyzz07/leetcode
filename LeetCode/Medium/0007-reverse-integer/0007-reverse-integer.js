/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let reverse = 0
    let a = Math.abs(x)
    const MAX = 2147483647;
    const MIN = -2147483648;
    while (a > 0) {

        let last = a % 10
        reverse = (reverse * 10) + last
        a = Math.floor(a / 10)

    }

     
    return  ans < MAX && ans > MIN ? reverse * Math.sign(x) : 0


};
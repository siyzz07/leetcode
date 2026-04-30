/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
let reverse =0
let a = Math.abs(x)
const MAX = 2147483647; 
    const MIN = -2147483648;
while(a>0){

    let last = a%10
    reverse = (reverse *10) + last
    a = Math.floor(a/10)

}

 let ans = reverse * Math.sign(x)
if(ans<MAX && ans>MIN){
    return ans
}else{
    return 0
}

};